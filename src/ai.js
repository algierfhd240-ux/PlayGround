// ============================================================
// IRON FRONT — opposing-force AI commander
// ============================================================
import { unitStats } from './data.js'

export class AIController {
  constructor(game) {
    this.game = game
    this.team = 'enemy'
    this.faction = game.enemyFaction
    this.diff = game.difficulty
    this.thinkTimer = 1.2
    this.buildTimer = 4
    this.attackTimer = this.diff.id === 'marshal' ? 85 : this.diff.id === 'recruit' ? 210 : 145
    this.attacking = false
    this.defendTimer = 0
    this.threat = null
    this.stage = {
      x: game.enemyBase.x - 12,
      z: game.enemyBase.z + 10
    }
    this.planIndex = 0
    this.extraFactory = false
    this.lastAttackSize = 0
    this.repathTimer = 0
  }

  update(dt) {
    this.thinkTimer -= dt
    this.attackTimer -= dt
    this.defendTimer -= dt
    this.repathTimer -= dt
    if (this.thinkTimer <= 0) {
      this.thinkTimer = 1.0
      this.think()
    }
  }

  onBaseAttacked(threat) {
    this.defendTimer = 26
    this.threat = { x: threat.x, z: threat.z }
    if (this.game.team === 'player') this.game.audio.play('alarm')
  }

  think() {
    if (!this.game.running || this.game.ended) return
    this.manageEconomy()
    this.manageConstruction()
    this.manageProduction()
    this.manageMilitary()
  }

  buildings(type) {
    return this.game.buildings.filter(b => b.alive && b.team === this.team && (!type || b.type === type))
  }

  units(includeHarvesters = false) {
    return this.game.units.filter(u => u.alive && u.team === this.team && (includeHarvesters || !u.isHarvester))
  }

  supplies() { return this.game.getSupplies(this.team) }

  manageEconomy() {
    const hq = this.buildings('hq')[0]
    if (!hq || hq.underConstruction) return
    const harvesters = this.units(true).filter(u => u.isHarvester).length
    if (harvesters < 3 && this.supplies() > 240 && hq.queue.length === 0) {
      hq.enqueue('harvester')
    }
  }

  manageConstruction() {
    this.buildTimer -= 1
    if (this.buildTimer > 0) return
    const base = this.game.enemyBase
    const counts = {
      barracks: this.buildings('barracks').length,
      factory: this.buildings('factory').length,
      depot: this.buildings('depot').length,
      turret: this.buildings('turret').length
    }
    let type = null
    if (counts.barracks < 1) type = 'barracks'
    else if (counts.factory < 1) type = 'factory'
    else if (counts.depot < 2) type = 'depot'
    else if (counts.turret < 2 + (this.diff.stars - 1)) type = 'turret'
    else if (counts.depot < 4 && this.supplies() > 900) type = 'depot'
    else if (!this.extraFactory && this.supplies() > 1100) { type = 'factory'; this.extraFactory = true }
    else if (counts.turret < 5 && this.supplies() > 1200) type = 'turret'

    if (!type) return
    const spots = this.buildSpots()
    const st = unitStats(this.faction, 'rifle')
    const bdef = this.game.buildingDef(type)
    if (this.supplies() < bdef.cost + 120) return
    for (const s of spots) {
      const x = base.x + s.x
      const z = base.z + s.z
      if (!this.game.canPlaceBuilding(x, z, bdef.radius, null, true)) continue
      const b = this.game.createBuilding(this.team, this.faction, type, x, z, { underConstruction: true, autoBuild: true })
      if (b) {
        this.buildTimer = 5 + Math.random() * 5
        return
      }
    }
    this.buildTimer = 3
  }

  buildSpots() {
    return [
      { x: 20, z: 2 }, { x: 0, z: 20 }, { x: -20, z: 4 }, { x: 4, z: -20 },
      { x: 22, z: 20 }, { x: -22, z: -18 }, { x: 20, z: -18 }, { x: -18, z: 20 },
      { x: 30, z: 6 }, { x: 6, z: 30 }, { x: -30, z: -2 }, { x: -2, z: -30 },
      { x: 34, z: 26 }, { x: -32, z: 26 }, { x: 26, z: -30 }, { x: -26, z: -32 }
    ]
  }

  manageProduction() {
    const units = this.units(true)
    const tanks = units.filter(u => u.type === 'tank' || u.type === 'heavy').length
    const ats = units.filter(u => u.type === 'at').length
    const total = units.length
    if (total > 58) return
    const pop = this.game.popUsed(this.team)
    const cap = this.game.popCap(this.team)
    if (pop >= cap - 1) return

    const barracks = this.buildings('barracks').filter(b => !b.underConstruction)
    const factories = this.buildings('factory').filter(b => !b.underConstruction)

    for (const b of barracks) {
      if (b.queue.length >= 2) continue
      let type = 'rifle'
      if (ats < 2 && Math.random() < 0.4) type = 'at'
      else if (Math.random() < 0.22) type = 'at'
      const s = unitStats(this.faction, type)
      if (this.supplies() >= s.cost + 60) b.enqueue(type)
    }

    for (const b of factories) {
      if (b.queue.length >= 2) continue
      let type = 'tank'
      const roll = Math.random()
      if (tanks < 2) type = 'tank'
      else if (roll < 0.18) type = 'heavy'
      else if (roll < 0.38) type = 'artillery'
      else if (roll < 0.5) type = 'scout'
      else type = 'tank'
      const s = unitStats(this.faction, type)
      if (this.supplies() >= s.cost + 100) b.enqueue(type)
    }
  }

  manageMilitary() {
    const army = this.units(false)
    const base = this.game.enemyBase
    const threats = this.game.enemyTargets(this.team).filter(e =>
      e.kind === 'unit' && e.alive && Math.hypot(e.x - base.x, e.z - base.z) < 52
    )
    if (threats.length) {
      this.defendTimer = 12
      this.threat = threats[0]
    }

    if (this.defendTimer > 0 && this.threat) {
      const target = this.threat
      for (const u of army) {
        if (u.isHarvester) continue
        const d = Math.hypot(u.x - target.x, u.z - target.z)
        if (u.order.type === 'idle' || d < 70) {
          if (u.order.type !== 'attackMove' || this.repathTimer <= 0) {
            u.setOrder({ type: 'attackMove', x: target.x, z: target.z })
          }
        }
      }
      return
    }

    const threshold = Math.max(4, Math.round(6 * this.diff.aiAggression))
    if (!this.attacking && (army.length >= threshold || this.attackTimer <= 0)) {
      if (army.length >= 3) {
        this.attacking = true
        this.lastAttackSize = army.length
        this.repathTimer = 0
        const target = this.pickAttackTarget()
        if (target) {
          for (const u of army) {
            const ox = (Math.random() - 0.5) * 10
            const oz = (Math.random() - 0.5) * 10
            u.setOrder({ type: 'attackMove', x: target.x + ox, z: target.z + oz })
          }
          this.game.alert('ENEMY ATTACK INBOUND')
          this.attackTimer = 95
        }
      }
    } else if (this.attacking) {
      const target = this.pickAttackTarget()
      if (army.length < Math.max(2, this.lastAttackSize * 0.3) || !target) {
        this.attacking = false
        this.attackTimer = 70
        this.regroup(army)
      } else if (this.repathTimer <= 0) {
        this.repathTimer = 6
        for (const u of army) {
          if (u.order.type === 'idle' || (u.order.type === 'move')) {
            u.setOrder({ type: 'attackMove', x: target.x + (Math.random() - 0.5) * 12, z: target.z + (Math.random() - 0.5) * 12 })
          }
        }
      }
    } else {
      this.regroup(army)
    }
  }

  regroup(army) {
    for (const u of army) {
      if (u.order.type !== 'idle') continue
      const d = Math.hypot(u.x - this.stage.x, u.z - this.stage.z)
      if (d > 14) {
        u.setOrder({ type: 'move', x: this.stage.x + (Math.random() - 0.5) * 16, z: this.stage.z + (Math.random() - 0.5) * 16 })
      }
    }
  }

  pickAttackTarget() {
    const targets = this.game.teamBuildings('player')
    if (!targets.length) {
      const units = this.game.teamUnits('player')
      return units.length ? units[0] : null
    }
    let best = targets[0]
    let bestD = Infinity
    for (const b of targets) {
      const d = Math.hypot(b.x - this.game.enemyBase.x, b.z - this.game.enemyBase.z)
      if (b.type === 'hq') return b
      if (d < bestD) { bestD = d; best = b }
    }
    return best
  }
}
