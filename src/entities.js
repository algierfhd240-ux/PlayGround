// ============================================================
// IRON FRONT — entities: units, structures, projectiles, supply
// ============================================================
import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import {
  unitStats, buildingStats, DMG_MULT, TEAM_COLORS
} from './data.js'
import { getUnitModel, getBuildingModel, flagMaterial, MAT_VEH, MAT_INF, MAT_BLD } from './models.js'

let NEXT_ID = 1
const Y = new THREE.Vector3(0, 1, 0)
const tmpVec = new THREE.Vector3()
const tmpVec2 = new THREE.Vector3()

function colorAttr(geo, color) {
  const n = geo.attributes.position.count
  const arr = new Float32Array(n * 3)
  const c = new THREE.Color(color)
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3))
  return geo
}

function ringGeometry(radius) {
  const g = new THREE.RingGeometry(radius * 0.92, radius * 1.05, 30)
  g.rotateX(-Math.PI / 2)
  return g
}

function makeHealthBar(game, height, width) {
  const group = new THREE.Group()
  const bgMat = new THREE.MeshBasicMaterial({ color: 0x070906, transparent: true, opacity: 0.82, depthTest: false, depthWrite: false })
  const fillMat = new THREE.MeshBasicMaterial({ color: 0x86b060, transparent: true, opacity: 0.95, depthTest: false, depthWrite: false })
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(width, 0.16), bgMat)
  const fill = new THREE.Mesh(new THREE.PlaneGeometry(width, 0.1), fillMat)
  fill.position.z = 0.002
  group.add(bg, fill)
  group.renderOrder = 30
  group.visible = false
  group.position.y = height
  group.userData = { fill, width, height, bg, fillMat }
  game.scene.add(group)
  return group
}

// ------------------------------------------------------------
// Base entity
// ------------------------------------------------------------
class Entity {
  constructor(game, faction, team, def, x, z, kind) {
    this.game = game
    this.id = NEXT_ID++
    this.faction = faction
    this.team = team
    this.kind = kind
    this.def = def
    this.name = def.name
    this.maxHp = def.hp
    this.hp = def.hp
    this.alive = true
    this.selected = false
    this.radius = def.radius || 1.5
    this.vision = def.vision || 28
    this.armorClass = def.armor || 'building'
    this.x = x
    this.z = z
    this.y = game.world.heightAt(x, z)
    this.group = new THREE.Group()
    this.group.position.set(x, this.y, z)
    this.group.userData.entity = this
    game.scene.add(this.group)
    this.ring = new THREE.Mesh(
      ringGeometry(this.radius * (kind === 'building' ? 0.82 : 0.95)),
      new THREE.MeshBasicMaterial({
        color: team === 'player' ? TEAM_COLORS.player : TEAM_COLORS.enemy,
        transparent: true, opacity: 0.8, depthWrite: false, depthTest: false, side: THREE.DoubleSide
      })
    )
    this.ring.position.y = 0.1
    this.ring.renderOrder = 12
    this.ring.visible = false
    this.group.add(this.ring)
    this.hover = false
    this.target = null
    this.lastAttacker = null
    this.deadTimer = 0
  }

  get pos() { return this.group.position }

  setSelected(v) {
    this.selected = v
    this.ring.visible = v
    if (v && this.kind === 'unit') this.game.audio.play('select')
  }

  distanceTo(e) {
    return Math.hypot(e.x - this.x, e.z - this.z)
  }
  distanceToPoint(x, z) {
    return Math.hypot(x - this.x, z - this.z)
  }

  takeDamage(amount, attacker, weapon = 'shell') {
    if (!this.alive) return
    const mult = (DMG_MULT[weapon] && DMG_MULT[weapon][this.armorClass]) ?? 1
    const dmg = amount * mult
    this.hp -= dmg
    this.lastAttacker = attacker
    this.game.onEntityDamaged(this, attacker, dmg)
    if (this.hp <= 0) this.die(attacker)
  }

  updateBar(camera) {
    if (!this.alive) return
    const bar = this.bar
    if (!bar) return
    const show = this.selected || this.hp < this.maxHp - 0.5 || (this.kind === 'building' && this.underConstruction)
    bar.visible = show && this.group.visible
    if (!show) return
    bar.position.set(this.x, this.y + bar.userData.height, this.z)
    bar.quaternion.copy(camera.quaternion)
    const ratio = Math.max(0, this.hp / this.maxHp)
    const fill = bar.userData.fill
    fill.scale.x = ratio
    fill.position.x = -(1 - ratio) * bar.userData.width / 2
    if (this.underConstruction) fill.material.color.setHex(0xc4a765)
    else if (ratio > 0.6) fill.material.color.setHex(0x86b060)
    else if (ratio > 0.3) fill.material.color.setHex(0xc9a24e)
    else fill.material.color.setHex(0xc9483a)
  }

  die(killer) {
    if (!this.alive) return
    this.alive = false
    this.hp = 0
    this.selected = false
    if (this.bar) this.game.scene.remove(this.bar)
    this.game.onEntityKilled(this, killer)
  }

  disposeGroup() {
    this.game.scene.remove(this.group)
    this.group.traverse(o => {
      if (o.isMesh && o.geometry && !o.geometry.userData.shared) {
        // geometries are shared from the model cache; only dispose per-entity ones
      }
      if (o.material && o.material.userData && o.material.userData.unique) o.material.dispose()
    })
  }
}

// ------------------------------------------------------------
// Units
// ------------------------------------------------------------
export class Unit extends Entity {
  constructor(game, faction, team, type, x, z) {
    const stats = unitStats(faction, type)
    super(game, faction, team, stats, x, z, 'unit')
    this.type = type
    this.stats = stats
    this.speed = stats.speed
    this.range = stats.range
    this.minRange = stats.minRange || 0
    this.damage = stats.dmg
    this.cooldown = stats.cooldown
    this.weapon = stats.weapon
    this.splash = stats.splash || 0
    this.isHarvester = !!stats.harvester
    this.isBuilder = !!stats.builder
    this.capacity = stats.capacity || 0
    this.cargo = 0
    this.turretAngle = 0
    this.heading = Math.random() * Math.PI * 2
    this.attackTimer = Math.random() * 0.4
    this.acquireTimer = Math.random() * 0.3
    this.order = { type: 'idle' }
    this.target = null
    this.moveTarget = null
    this.stuck = 0
    this.dustTimer = Math.random()
    this.buildTimer = 0
    this.harvestState = 'idle'
    this.harvestNode = null
    this.radius = type === 'harvester' ? 2.1 : (stats.armor === 'infantry' ? 1.1 : (type === 'heavy' ? 2.6 : 2.1))

    const model = getUnitModel(faction, type)
    this.model = model
    const mat = stats.armor === 'infantry' ? MAT_INF : MAT_VEH
    this.hull = new THREE.Mesh(model.hull, mat)
    this.hull.castShadow = true
    this.hull.receiveShadow = true
    this.hull.userData.entity = this
    this.group.add(this.hull)
    if (model.turret) {
      this.turret = new THREE.Mesh(model.turret, mat)
      this.turret.position.y = model.turretY || 0
      this.turret.castShadow = true
      this.turret.userData.entity = this
      this.group.add(this.turret)
    }
    if (model.cargo) {
      this.cargoMesh = new THREE.Mesh(model.cargo, MAT_VEH)
      this.cargoMesh.position.set(0, model.cargoY || 1.4, model.cargoZ || -1.5)
      this.cargoMesh.visible = false
      this.group.add(this.cargoMesh)
    }
    this.group.rotation.y = this.heading
    this.bar = makeHealthBar(game, model.height + 0.5, stats.armor === 'infantry' ? 1.4 : 1.8)
    this.bar.userData.height = model.height + 0.5
    this.home = { x, z }
    this.muzzleY = stats.armor === 'infantry' ? 1.05 : (model.turretY || 1.4) + 0.55
    this.muzzleZ = type === 'heavy' ? 4.6 : type === 'tank' ? 3.9 : type === 'scout' ? 1.9 : type === 'artillery' ? 3.9 : 0.75
    this.turretSpeed = type === 'artillery' ? 1.1 : 2.6

    if (this.isHarvester) this.autoGather()
    game.registerUnit(this)
  }

  setOrder(order) {
    this.order = order
    this.moveTarget = null
    if (order.type === 'move' || order.type === 'attackMove') {
      this.moveTarget = { x: order.x, z: order.z }
      this.target = null
    } else if (order.type === 'attack') {
      this.target = order.target
    } else if (order.type === 'stop' || order.type === 'hold') {
      this.target = null
      this.moveTarget = null
      this.order = { type: order.type === 'hold' ? 'hold' : 'idle' }
    }
  }

  autoGather() {
    const node = this.game.nearestSupply(this.x, this.z)
    if (node) {
      this.order = { type: 'gather', node }
      this.harvestState = 'toNode'
      this.harvestNode = node
    }
  }

  update(dt) {
    if (!this.alive) return
    this.attackTimer -= dt
    this.acquireTimer -= dt
    this.dustTimer -= dt

    if (this.isHarvester) this.updateHarvester(dt)
    else if (this.isBuilder && this.order.type === 'build') this.updateBuild(dt)
    else this.updateCombat(dt)

    this.updateMovement(dt)
    this.updateVisual(dt)
  }

  // -------- combat & orders --------
  updateCombat(dt) {
    const order = this.order
    if (order.type === 'attack') {
      if (!order.target || !order.target.alive) { this.setOrder({ type: 'idle' }); return }
      this.target = order.target
      const d = this.distanceTo(this.target)
      if (d > this.range * 0.9) this.moveTarget = { x: this.target.x, z: this.target.z }
      else { this.moveTarget = null; this.tryFire() }
      return
    }

    if (order.type === 'attackMove') {
      if (this.acquireTimer <= 0) {
        this.acquireTimer = 0.35
        const t = this.findTarget(this.vision)
        if (t) this.target = t
      }
      if (this.target && this.target.alive) {
        const d = this.distanceTo(this.target)
        if (d <= this.range * 0.95) {
          this.moveTarget = null
          this.faceTarget(this.target, dt)
          this.tryFire()
        } else {
          this.moveTarget = { x: this.target.x, z: this.target.z }
        }
      } else {
        this.target = null
        if (order.x !== undefined) this.moveTarget = { x: order.x, z: order.z }
        if (this.moveTarget && this.distanceToPoint(order.x, order.z) < 2.5) {
          this.setOrder({ type: 'idle' })
        }
      }
      return
    }

    if (order.type === 'move') {
      if (this.moveTarget && this.distanceToPoint(this.moveTarget.x, this.moveTarget.z) < 2.2) {
        this.moveTarget = null
        this.order = { type: 'idle' }
      }
      // fire at targets of opportunity while moving
      if (this.acquireTimer <= 0) {
        this.acquireTimer = 0.4
        const t = this.findTarget(this.range)
        if (t) this.target = t
      }
      if (this.target && (!this.target.alive || this.distanceTo(this.target) > this.range)) this.target = null
      if (this.target) { this.faceTarget(this.target, dt); this.tryFire() }
      return
    }

    if (order.type === 'hold') {
      if (this.acquireTimer <= 0) {
        this.acquireTimer = 0.4
        const t = this.findTarget(this.range * 1.05)
        this.target = t
      }
      if (this.target && this.target.alive && this.distanceTo(this.target) <= this.range * 1.05) {
        this.faceTarget(this.target, dt)
        this.tryFire()
      } else this.target = null
      return
    }

    // idle
    if (this.acquireTimer <= 0) {
      this.acquireTimer = 0.45
      const t = this.findTarget(this.vision)
      if (t && this.distanceTo(t) <= this.range * 1.05) this.target = t
      else this.target = null
    }
    if (this.target && (!this.target.alive || this.distanceTo(this.target) > this.range * 1.1)) this.target = null
    if (this.target) { this.faceTarget(this.target, dt); this.tryFire() }
  }

  findTarget(maxRange) {
    const enemies = this.game.enemyTargets(this.team)
    let best = null
    let bestScore = Infinity
    const preferVehicles = this.type === 'at'
    for (const e of enemies) {
      if (!e.alive) continue
      const d = this.distanceTo(e)
      if (d > maxRange) continue
      let score = d
      if (preferVehicles && e.armorClass !== 'infantry' && e.kind === 'unit') score *= 0.35
      if (this.weapon === 'explosive' && e.kind === 'unit' && e.armorClass === 'infantry') score *= 0.7
      if (this.weapon === 'smallArms' && e.armorClass !== 'infantry') score *= 1.6
      if (e.kind === 'building') score *= 1.35
      if (score < bestScore) { bestScore = score; best = e }
    }
    return best
  }

  faceTarget(target, dt) {
    const dx = target.x - this.x
    const dz = target.z - this.z
    const worldAngle = Math.atan2(dx, dz)
    if (this.turret) {
      let want = worldAngle - this.heading
      while (want > Math.PI) want -= Math.PI * 2
      while (want < -Math.PI) want += Math.PI * 2
      const step = this.turretSpeed * dt
      if (Math.abs(want - this.turretAngle) < step) this.turretAngle = want
      else this.turretAngle += Math.sign(want - this.turretAngle) * step
    } else {
      this.heading = this.lerpAngle(this.heading, worldAngle, Math.min(1, dt * 4))
    }
  }

  lerpAngle(a, b, t) {
    let d = b - a
    while (d > Math.PI) d -= Math.PI * 2
    while (d < -Math.PI) d += Math.PI * 2
    return a + d * t
  }

  muzzleWorld() {
    const yaw = this.heading + (this.turret ? this.turretAngle : 0)
    const z = this.muzzleZ
    return new THREE.Vector3(
      this.x + Math.sin(yaw) * z,
      this.y + this.muzzleY,
      this.z + Math.cos(yaw) * z
    )
  }

  tryFire() {
    if (!this.target || !this.target.alive) return
    if (this.attackTimer > 0) return
    if (this.weapon === 'none') return
    const d = this.distanceTo(this.target)
    if (d > this.range || d < this.minRange) return
    this.attackTimer = this.cooldown * (0.92 + Math.random() * 0.16)
    const muzzle = this.muzzleWorld()
    const targetPos = new THREE.Vector3(this.target.x, this.target.y + (this.target.kind === 'building' ? 2.2 : 1.0), this.target.z)
    const dir = targetPos.clone().sub(muzzle).normalize()

    if (this.weapon === 'smallArms') {
      this.game.audio.play(this.type === 'rifle' || this.type === 'engineer' || this.type === 'at' ? 'rifle' : 'mg', { volume: this.type === 'rifle' ? 0.7 : 1 })
      this.game.effects.tracer(muzzle, targetPos, 0xffd489, 0.07)
      this.game.effects.muzzle(muzzle, dir, 0.45)
      this.target.takeDamage(this.damage * (0.9 + Math.random() * 0.2), this, 'smallArms')
    } else if (this.weapon === 'at') {
      this.game.audio.play('cannon', { volume: 0.55 })
      this.game.effects.muzzle(muzzle, dir, 0.7)
      this.game.spawnProjectile(this, this.target, {
        speed: 78, damage: this.damage, weapon: 'at', splash: 0, kind: 'rocket', arc: 0
      })
    } else if (this.weapon === 'explosive') {
      this.game.audio.play('cannon', { volume: 1 })
      this.game.effects.muzzle(muzzle, dir, 1.2)
      this.game.spawnProjectile(this, this.target, {
        speed: 52, damage: this.damage, weapon: 'explosive', splash: this.splash, kind: 'shell',
        arc: 14, groundTarget: true
      })
    } else {
      this.game.audio.play('cannon', { volume: 0.8 })
      this.game.effects.muzzle(muzzle, dir, 0.9)
      this.game.spawnProjectile(this, this.target, {
        speed: 120, damage: this.damage, weapon: 'shell', splash: 0, kind: 'shell', arc: 0
      })
    }
    this.game.onWeaponFired(this)
  }

  // -------- movement --------
  updateMovement(dt) {
    if (!this.moveTarget) {
      this.y = this.game.world.heightAt(this.x, this.z)
      this.group.position.y = this.y
      return
    }
    const dx = this.moveTarget.x - this.x
    const dz = this.moveTarget.z - this.z
    const dist = Math.hypot(dx, dz)
    if (dist < 0.4) {
      this.moveTarget = null
      return
    }
    let vx = dx / dist
    let vz = dz / dist
    let ax = 0, az = 0

    // separation from other units
    const units = this.game.units
    for (let i = 0; i < units.length; i++) {
      const u = units[i]
      if (u === this || !u.alive) continue
      const ddx = this.x - u.x
      const ddz = this.z - u.z
      const dd = Math.hypot(ddx, ddz)
      const min = this.radius + u.radius + 0.25
      if (dd < min && dd > 0.001) {
        const f = (min - dd) / min
        ax += (ddx / dd) * f * 1.6
        az += (ddz / dd) * f * 1.6
      }
    }
    // buildings are hard obstacles
    const builds = this.game.buildings
    for (let i = 0; i < builds.length; i++) {
      const b = builds[i]
      if (!b.alive) continue
      const ddx = this.x - b.x
      const ddz = this.z - b.z
      const dd = Math.hypot(ddx, ddz)
      const min = b.radius + this.radius + 0.6
      if (dd < min && dd > 0.001) {
        const f = (min - dd) / min
        ax += (ddx / dd) * f * 3.2
        az += (ddz / dd) * f * 3.2
        // tangential slide
        ax += -(ddz / dd) * f * 1.4
        az += (ddx / dd) * f * 1.4
      }
    }
    vx += ax
    vz += az
    const vlen = Math.hypot(vx, vz) || 1
    vx /= vlen; vz /= vlen

    const speed = this.speed * (this.weapon === 'explosive' ? 1 : 1)
    const step = Math.min(speed * dt, dist)
    const nx = this.x + vx * step
    const nz = this.z + vz * step
    const b = this.game.world.bounds
    this.x = Math.max(-b, Math.min(b, nx))
    this.z = Math.max(-b, Math.min(b, nz))
    const targetHeading = Math.atan2(vx, vz)
    this.heading = this.lerpAngle(this.heading, targetHeading, Math.min(1, dt * 3.5))
    this.group.position.x = this.x
    this.group.position.z = this.z
    this.y = this.game.world.heightAt(this.x, this.z)
    this.group.position.y = this.y
    this.group.rotation.y = this.heading

    // dust from tracked vehicles
    if (this.stats.armor !== 'infantry' && this.dustTimer <= 0) {
      this.dustTimer = 0.35 + Math.random() * 0.3
      const back = new THREE.Vector3(this.x - Math.sin(this.heading) * this.radius, this.group.position.y + 0.2, this.z - Math.cos(this.heading) * this.radius)
      this.game.effects.dust(back, this.radius * 0.5)
    }

    // stuck handling
    const moved = step
    if (moved < speed * dt * 0.35) {
      this.stuck += dt
      if (this.stuck > 2.8) {
        this.stuck = 0
        if (this.order.type === 'move' || this.order.type === 'attackMove') {
          this.moveTarget = null
          if (this.order.type === 'attackMove') this.order = { type: 'idle' }
        }
      }
    } else this.stuck = Math.max(0, this.stuck - dt)
  }

  die(killer) {
    if (!this.alive) return
    this.alive = false
    this.hp = 0
    this.selected = false
    if (this.bar) this.game.scene.remove(this.bar)
    const p = new THREE.Vector3(this.x, this.y + 0.6, this.z)
    if (this.stats.armor === 'infantry') {
      this.game.effects.impact(p, 1.0)
      this.game.effects.decal(p, 0.9)
      this.game.effects.smokePuff(p, 0.7, true)
      this.game.audio.play('rifle', { volume: 0.3 })
    } else {
      this.game.effects.bigExplosion(p, 0.9)
      this.game.audio.play('explosion', { volume: 0.9 })
      this.game.effects.addWreck(this.model.hull, new THREE.Vector3(this.x, this.y, this.z), this.heading, this.faction === 'germany' ? 0x2a2a22 : 0x25251e)
    }
    this.game.scene.remove(this.group)
    this.game.onEntityKilled(this, killer)
  }

  updateVisual(dt) {
    if (this.turret) {
      this.turret.rotation.y = this.turretAngle
      if (!this.target) this.turretAngle *= Math.max(0, 1 - dt * 0.8)
    }
    // infantry march bob
    if (this.stats.armor === 'infantry') {
      if (this.moveTarget) {
        const t = performance.now() * 0.012
        this.hull.position.y = Math.abs(Math.sin(t)) * 0.06
        this.hull.rotation.z = Math.sin(t * 0.5) * 0.015
      } else {
        this.hull.position.y *= 0.9
        this.hull.rotation.z *= 0.9
      }
    }
    if (this.cargoMesh) this.cargoMesh.visible = this.cargo > 0
    this.updateBar(this.game.camera)
  }

  // -------- harvester --------
  updateHarvester(dt) {
    if (this.order.type !== 'gather') {
      this.target = null
      return
    }
    let node = this.harvestNode
    if (this.harvestState === 'toNode') {
      if (!node || node.amount <= 0) {
        node = this.game.nearestSupply(this.x, this.z)
        this.harvestNode = node
        if (!node) { this.order = { type: 'idle' }; return }
      }
      const d = this.distanceToPoint(node.x, node.z)
      if (d > 4.2) {
        this.moveTarget = { x: node.x, z: node.z }
      } else {
        this.moveTarget = null
        this.harvestState = 'gathering'
        this.buildTimer = 0
      }
    } else if (this.harvestState === 'gathering') {
      this.moveTarget = null
      this.buildTimer += dt
      if (this.buildTimer >= 1.8) {
        this.buildTimer = 0
        const got = node ? node.take(this.capacity) : 0
        this.cargo += got
        if (got > 0) this.game.audio.play('build', { volume: 0.4 })
        if (this.cargo <= 0) {
          this.harvestNode = this.game.nearestSupply(this.x, this.z)
          this.harvestState = this.harvestNode ? 'toNode' : 'idle'
        } else if (this.cargo >= this.capacity || !node || node.amount <= 0) {
          this.harvestState = 'toDrop'
        }
      }
    } else if (this.harvestState === 'toDrop') {
      const drop = this.game.nearestDropoff(this.team, this.x, this.z)
      if (!drop) { this.harvestState = 'toNode'; return }
      const d = this.distanceToPoint(drop.x, drop.z)
      if (d > drop.radius + 2.6) {
        this.moveTarget = { x: drop.x, z: drop.z }
      } else {
        this.moveTarget = null
        this.game.addSupplies(this.cargo, this.team)
        this.cargo = 0
        this.harvestState = 'toNode'
        this.harvestNode = node && node.amount > 0 ? node : this.game.nearestSupply(this.x, this.z)
        if (this.team === 'player') this.game.audio.play('ready', { volume: 0.3 })
      }
    }
    if (this.order.type === 'gather' && this.harvestState === 'idle') this.harvestState = 'toNode'
    this.updateVisual(dt)
  }

  // -------- engineer --------
  updateBuild(dt) {
    const b = this.order.building
    if (!b || !b.alive || !b.underConstruction) { this.setOrder({ type: 'idle' }); return }
    const d = this.distanceToPoint(b.x, b.z)
    const reach = b.radius + this.radius + 2.5
    if (d > reach) {
      this.moveTarget = { x: b.x, z: b.z }
    } else {
      this.moveTarget = null
      b.addBuildProgress(dt, this)
      this.buildTimer += dt
      if (this.buildTimer > 0.55) {
        this.buildTimer = 0
        this.game.effects.buildSparks(new THREE.Vector3(b.x + (Math.random() - 0.5) * b.radius, this.y + 1.2, b.z + (Math.random() - 0.5) * b.radius))
        if (Math.random() < 0.4) this.game.audio.play('build', { volume: 0.3 })
      }
    }
    this.updateVisual(dt)
  }

  repairTarget() {
    // reserved for future repair ability
  }
}

// ------------------------------------------------------------
// Buildings
// ------------------------------------------------------------
export class Building extends Entity {
  constructor(game, faction, team, type, x, z, opts = {}) {
    const stats = buildingStats(faction, type)
    super(game, faction, team, stats, x, z, 'building')
    this.type = type
    this.stats = stats
    this.radius = stats.radius
    this.underConstruction = !!opts.underConstruction
    this.buildProgress = this.underConstruction ? (opts.progress || 0) : 1
    this.buildTime = stats.time || 1
    this.autoBuild = !!opts.autoBuild
    this.queue = []
    this.rally = null
    this.weapon = stats.weapon || null
    this.range = stats.range || 0
    this.damage = stats.dmg || 0
    this.cooldown = stats.cooldown || 2
    this.attackTimer = Math.random()
    this.acquireTimer = 0
    this.target = null
    this.dropoff = !!stats.dropoff
    this.income = stats.income || 0
    this.produces = stats.produces || []
    this.model = getBuildingModel(faction, type)
    this.height = this.model.height
    this.hull = new THREE.Mesh(this.model.geometry, MAT_BLD)
    this.hull.castShadow = true
    this.hull.receiveShadow = true
    this.hull.userData.entity = this
    this.group.add(this.hull)
    if (this.model.flagPos) {
      const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 1.5), flagMaterial(faction))
      flag.position.set(this.model.flagPos[0], this.model.flagPos[1], this.model.flagPos[2])
      flag.rotation.y = -0.2
      flag.castShadow = true
      flag.userData.entity = this
      this.flag = flag
      this.group.add(flag)
    }
    this.bar = makeHealthBar(game, this.height + 0.6, Math.max(2.2, this.radius * 0.65))
    this.bar.userData.height = this.height + 0.6
    if (this.underConstruction) {
      this.group.scale.y = Math.max(0.18, 0.2 + this.buildProgress * 0.8)
      this.hp = this.maxHp * 0.15
      this.group.position.y = game.world.heightAt(x, z) - 0.1
    }
    this.exitDir = Math.atan2(-x, -z)
    this.rally = {
      x: x + Math.sin(this.exitDir) * (this.radius + 5),
      z: z + Math.cos(this.exitDir) * (this.radius + 5)
    }
    game.registerBuilding(this)
  }

  addBuildProgress(dt, engineer) {
    if (!this.underConstruction) return
    const rate = (1 / this.buildTime) * 0.92
    this.buildProgress = Math.min(1, this.buildProgress + dt * rate)
    this.group.scale.y = Math.max(0.18, 0.2 + this.buildProgress * 0.8)
    if (this.buildProgress >= 1) this.completeConstruction()
  }

  completeConstruction() {
    this.underConstruction = false
    this.buildProgress = 1
    this.hp = this.maxHp
    this.group.scale.y = 1
    this.group.position.y = this.game.world.heightAt(this.x, this.z)
    if (this.team === 'player') {
      this.game.audio.play('complete')
      this.game.toast(`${this.name} construction complete`, 'good')
      this.game.effects.bigExplosionSmoke(new THREE.Vector3(this.x, this.y + 1, this.z))
    }
    this.game.onBuildingComplete(this)
  }

  enqueue(type) {
    const s = unitStats(this.faction, type)
    if (this.queue.length >= 5) return false
    if (!this.game.spend(this.team, s.cost)) return false
    this.queue.push({ type, remaining: s.time, total: s.time, pop: s.pop })
    if (this.team === 'player') this.game.audio.play('click')
    return true
  }

  cancelQueue(index) {
    if (index < 0 || index >= this.queue.length) return
    const q = this.queue[index]
    const s = unitStats(this.faction, q.type)
    this.game.refund(this.team, Math.round(s.cost * 0.8))
    this.queue.splice(index, 1)
  }

  update(dt) {
    if (!this.alive) return
    if (this.underConstruction) {
      if (this.autoBuild) {
        this.addBuildProgress(dt * (this.game.buildSpeed(this.team) || 1), null)
      }
      if (Math.random() < dt * 1.5) {
        this.game.effects.smokePuff(new THREE.Vector3(this.x + (Math.random() - 0.5) * this.radius, this.y + 0.8, this.z + (Math.random() - 0.5) * this.radius), 0.8, false)
      }
      this.updateBar(this.game.camera)
      if (this.flag) this.flag.rotation.y = -0.2 + Math.sin(this.game.time * 2.2) * 0.12
      return
    }

    if (this.queue.length) {
      const q = this.queue[0]
      const speed = this.game.productionSpeed(this.team)
      const s = unitStats(this.faction, q.type)
      const used = this.game.popUsed(this.team)
      const cap = this.game.popCap(this.team)
      if (used + s.pop <= cap) {
        q.remaining -= dt * speed
        if (q.remaining <= 0) {
          this.queue.shift()
          this.spawnUnit(q.type)
        }
      } else if (this.team === 'player' && !this._popWarned) {
        this._popWarned = true
        this.game.toast('Population limit reached — build a Supply Depot', 'bad')
      }
      if (this.queue.length === 0) this._popWarned = false
    }

    if (this.weapon) this.updateTurretCombat(dt)

    if (this.flag) {
      this.flag.rotation.y = -0.2 + Math.sin(this.game.time * 2.1 + this.id) * 0.1
      this.flag.scale.x = 1 + Math.sin(this.game.time * 3.4 + this.id) * 0.025
    }
    this.updateBar(this.game.camera)
  }

  spawnUnit(type) {
    const s = unitStats(this.faction, type)
    const dir = this.exitDir
    const ex = this.x + Math.sin(dir) * (this.radius + 3.2)
    const ez = this.z + Math.cos(dir) * (this.radius + 3.2)
    const u = new Unit(this.game, this.faction, this.team, type, ex, ez)
    if (type === 'harvester') {
      u.autoGather()
    } else if (this.rally && (this.rally.x !== 0 || this.rally.z !== 0)) {
      u.setOrder({ type: 'move', x: this.rally.x + (Math.random() - 0.5) * 5, z: this.rally.z + (Math.random() - 0.5) * 5 })
    }
    if (this.team === 'player') {
      this.game.audio.play('ready')
      if (type !== 'harvester') this.game.toast(`${s.name} ready`, 'good')
    }
    this.game.onUnitProduced(this, u)
    return u
  }

  updateTurretCombat(dt) {
    this.attackTimer -= dt
    if (this.attackTimer > 0) return
    this.acquireTimer -= dt
    if (this.acquireTimer <= 0) {
      this.acquireTimer = 0.35
      const enemies = this.game.enemyTargets(this.team)
      let best = null, bestD = this.range
      for (const e of enemies) {
        if (!e.alive) continue
        const d = this.distanceTo(e)
        if (d < bestD) { bestD = d; best = e }
      }
      this.target = best
    }
    if (!this.target || !this.target.alive || this.distanceTo(this.target) > this.range) return
    this.attackTimer = this.cooldown * (0.95 + Math.random() * 0.1)
    const muzzle = new THREE.Vector3(this.x + Math.sin(this.exitDir) * 1.6, this.y + this.height * 0.55, this.z + Math.cos(this.exitDir) * 1.6)
    const targetPos = new THREE.Vector3(this.target.x, this.target.y + 1.0, this.target.z)
    const dir = targetPos.clone().sub(muzzle).normalize()
    this.game.audio.play('cannon', { volume: 0.55 })
    this.game.effects.muzzle(muzzle, dir, 0.8)
    this.game.spawnProjectile(this, this.target, { speed: 110, damage: this.damage, weapon: 'shell', splash: 0, kind: 'shell', arc: 0 })
  }

  die(killer) {
    if (!this.alive) return
    this.alive = false
    this.hp = 0
    this.selected = false
    if (this.bar) this.game.scene.remove(this.bar)
    this.game.effects.bigExplosion(new THREE.Vector3(this.x, this.y + 2, this.z), this.radius * 0.24 + 0.6)
    this.game.effects.addRubble(this.model.geometry, new THREE.Vector3(this.x, this.y, this.z), this.group.rotation.y)
    this.game.audio.play('explosion', { volume: 1 })
    this.game.scene.remove(this.group)
    this.game.onEntityKilled(this, killer)
  }
}

// ------------------------------------------------------------
// Projectiles
// ------------------------------------------------------------
const projGeo = new THREE.SphereGeometry(0.18, 6, 5)
const projMats = {
  shell: new THREE.MeshBasicMaterial({ color: 0xffd27a }),
  rocket: new THREE.MeshBasicMaterial({ color: 0xff9c50 }),
  explosive: new THREE.MeshBasicMaterial({ color: 0xffc070 })
}

export class Projectile {
  constructor(game, owner, target, opts) {
    this.game = game
    this.owner = owner
    this.team = owner.team
    this.target = target
    this.speed = opts.speed || 100
    this.damage = opts.damage || 0
    this.weapon = opts.weapon || 'shell'
    this.splash = opts.splash || 0
    this.kind = opts.kind || 'shell'
    this.arc = opts.arc || 0
    this.groundTarget = !!opts.groundTarget
    this.start = owner.muzzleWorld ? owner.muzzleWorld() : new THREE.Vector3(owner.x, owner.y + 1.5, owner.z)
    if (owner.kind === 'building') this.start.set(owner.x, owner.y + (owner.height || 3) * 0.55, owner.z)
    this.pos = this.start.clone()
    this.targetPos = new THREE.Vector3(target.x, target.y + (target.kind === 'building' ? 2.0 : 1.0), target.z)
    this.endPoint = this.targetPos.clone()
    this.horizTotal = Math.hypot(this.targetPos.x - this.start.x, this.targetPos.z - this.start.z) || 1
    this.life = 0
    this.dead = false
    this.trailTimer = 0
    this.mesh = new THREE.Mesh(projGeo, projMats[this.kind] || projMats.shell)
    this.mesh.scale.setScalar(this.kind === 'explosive' ? 1.6 : this.kind === 'rocket' ? 1.2 : 1)
    this.mesh.position.copy(this.pos)
    game.scene.add(this.mesh)
    if (this.kind === 'explosive') {
      this.mesh.scale.setScalar(1.4)
    }
  }

  update(dt) {
    if (this.dead) return
    this.life += dt
    if (this.life > 8) { this.impact(); return }
    if (this.target && this.target.alive && !this.groundTarget) {
      this.targetPos.set(this.target.x, this.target.y + (this.target.kind === 'building' ? 2.0 : 1.0), this.target.z)
    }
    const dx = this.targetPos.x - this.pos.x
    const dz = this.targetPos.z - this.pos.z
    const horiz = Math.hypot(dx, dz)
    const step = this.speed * dt
    if (horiz <= step + 0.4) {
      this.pos.x = this.targetPos.x
      this.pos.z = this.targetPos.z
      this.pos.y = this.targetPos.y
      this.impact()
      return
    }
    this.pos.x += (dx / horiz) * step
    this.pos.z += (dz / horiz) * step
    if (this.arc > 0) {
      const t = 1 - horiz / this.horizTotal
      this.pos.y = this.start.y + (this.endPoint.y - this.start.y) * t + Math.sin(Math.PI * Math.min(1, Math.max(0, t))) * this.arc
    } else {
      this.pos.y += (this.targetPos.y - this.pos.y) * Math.min(1, dt * 5)
    }
    this.mesh.position.copy(this.pos)
    this.trailTimer -= dt
    if (this.trailTimer <= 0) {
      this.trailTimer = this.kind === 'rocket' ? 0.03 : 0.018
      this.game.effects.tracer(
        new THREE.Vector3(this.pos.x - (dx / horiz) * 2, this.pos.y, this.pos.z - (dz / horiz) * 2),
        this.pos, this.kind === 'rocket' ? 0xffb060 : 0xffd9a0, 0.07
      )
      if (this.kind === 'rocket' && Math.random() < 0.4) {
        this.game.effects.smokePuff(this.pos.clone(), 0.35, true)
      }
    }
  }

  impact() {
    if (this.dead) return
    this.dead = true
    this.game.scene.remove(this.mesh)
    const p = this.pos.clone()
    if (this.splash > 0) {
      this.game.effects.bigExplosion(p, 1.15)
      this.game.audio.play('explosion', { volume: 1 })
      const enemies = this.game.enemyTargets(this.team)
      for (const e of enemies) {
        if (!e.alive) continue
        const d = Math.hypot(e.x - p.x, e.z - p.z)
        if (d <= this.splash) {
          const falloff = 1 - (d / this.splash) * 0.65
          e.takeDamage(this.damage * falloff, this.owner, this.weapon)
        }
      }
    } else {
      this.game.effects.explosion(p, 0.75)
      this.game.audio.play('explosion', { volume: 0.55 })
      if (this.target && this.target.alive) {
        const d = Math.hypot(this.target.x - p.x, this.target.z - p.z)
        if (d < 4.2) this.target.takeDamage(this.damage, this.owner, this.weapon)
      }
    }
    this.game.removeProjectile(this)
  }
}

// ------------------------------------------------------------
// Supply crates
// ------------------------------------------------------------
export class SupplyNode {
  constructor(game, x, z, amount = 1600) {
    this.game = game
    this.x = x
    this.z = z
    this.amount = amount
    this.max = amount
    this.radius = 3.4
    this.group = new THREE.Group()
    this.group.position.set(x, game.world.heightAt(x, z), z)
    this.group.userData.supplyNode = this
    const parts = []
    const crate = (cx, cy, cz, size, color, rot = 0) => {
      const g = new THREE.BoxGeometry(size, size * 0.82, size * 0.92)
      g.rotateY(rot)
      g.translate(cx, cy, cz)
      colorAttr(g, color)
      parts.push(g)
    }
    crate(0, 0.42, 0, 1.3, 0x7a6438, 0.1)
    crate(1.15, 0.4, 0.35, 1.1, 0x6d5932, -0.2)
    crate(-1.1, 0.4, 0.2, 1.05, 0x80693c, 0.35)
    crate(0.1, 1.15, -0.2, 1.05, 0x715d36, 0.5)
    crate(-0.55, 0.38, -1.15, 0.9, 0x7d663a, 0.1)
    crate(0.55, 0.38, -1.2, 0.85, 0x6f5b34, -0.4)
    const barrel = new THREE.CylinderGeometry(0.34, 0.34, 0.85, 8)
    barrel.translate(1.7, 0.42, -0.7)
    colorAttr(barrel, 0x3f463a)
    parts.push(barrel)
    const geo = mergeGeometries(parts, false)
    parts.forEach(p => p.dispose())
    this.crateMesh = new THREE.Mesh(geo, MAT_VEH)
    this.crateMesh.castShadow = true
    this.crateMesh.receiveShadow = true
    this.crateMesh.userData.supplyNode = this
    this.group.add(this.crateMesh)

    const beamMat = new THREE.MeshBasicMaterial({ color: 0xe3c98f, transparent: true, opacity: 0.13, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
    this.beam = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.75, 9, 8, 1, true), beamMat)
    this.beam.position.y = 4.5
    this.group.add(this.beam)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xe3c98f, transparent: true, opacity: 0.5, depthWrite: false, side: THREE.DoubleSide })
    this.ring = new THREE.Mesh(new THREE.RingGeometry(2.4, 2.75, 24), ringMat)
    this.ring.rotation.x = -Math.PI / 2
    this.ring.position.y = 0.09
    this.group.add(this.ring)
    this.beam.raycast = () => {}
    this.ring.raycast = () => {}
    game.scene.add(this.group)
    game.supplyNodes.push(this)
  }

  take(n) {
    const got = Math.min(n, this.amount)
    this.amount -= got
    if (this.amount <= 0) {
      this.group.visible = false
      this.game.toast('Supply cache exhausted', 'bad')
    } else {
      const frac = this.amount / this.max
      this.crateMesh.scale.y = 0.35 + frac * 0.65
    }
    return got
  }

  update(dt) {
    if (this.amount <= 0) return
    this.beam.material.opacity = 0.08 + Math.sin(this.game.time * 1.8 + this.x) * 0.035
    this.ring.material.opacity = 0.32 + Math.sin(this.game.time * 1.8 + this.x) * 0.12
    this.ring.scale.setScalar(1 + Math.sin(this.game.time * 1.4 + this.z) * 0.04)
  }
}
