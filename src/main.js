import * as THREE from 'three'
import './style.css'
import { FACTIONS, FACTION_ORDER, DIFFICULTIES, MAPS, MAP_ORDER, MISSIONS, buildingStats, unitStats } from './data.js'
import { createWorld } from './world.js'
import { Unit, Building, Projectile, SupplyNode } from './entities.js'
import { AIController } from './ai.js'
import { Effects } from './effects.js'
import { AudioEngine } from './audio.js'

const $ = (id) => document.getElementById(id)
const clamp = (v, a, b) => Math.max(a, Math.min(b, v))

class IronFront {
  constructor() {
    this.scene = null
    this.camera = null
    this.renderer = null
    this.world = null
    this.effects = null
    this.audio = new AudioEngine()
    this.units = []
    this.buildings = []
    this.projectiles = []
    this.supplies = []
    this.selected = []
    this.placement = null
    this.running = false
    this.ended = false
    this.paused = false
    this.speed = 1
    this.elapsed = 0
    this.suppliesPlayer = 0
    this.suppliesEnemy = 0
    this.lastTime = performance.now()
    this.setup = {
      faction: 'usa', enemy: 'germany', map: 'normandy',
      difficulty: 'veteran', supplies: 900
    }
    this.menuState()
  }

  menuState() {
    this.bindMenu()
    this.initMenuScene()
  }

  bindMenu() {
    document.querySelectorAll('[data-action]').forEach((el) => {
      el.addEventListener('click', () => this.action(el.dataset.action))
    })
    $('skirmish-deploy')?.addEventListener('click', () => this.startSkirmish())
    $('brief-deploy')?.addEventListener('click', () => this.startMission(this.pendingMission))
    $('end-retry')?.addEventListener('click', () => this.retry())
    $('end-menu')?.addEventListener('click', () => this.showMenu())
    $('end-next')?.addEventListener('click', () => this.nextMission())
    $('btn-speed')?.addEventListener('click', () => this.toggleSpeed())
    this.buildFactionGrid()
    this.buildEnemyGrid()
    this.buildMapGrid()
    this.buildDifficulty()
    this.buildSupplies()
    this.buildCampaign()
  }

  action(action) {
    if (action === 'skirmish') this.showScreen('screen-skirmish')
    if (action === 'campaign') this.showScreen('screen-campaign')
    if (action === 'controls') $('manual-overlay')?.classList.add('open')
    if (action === 'sound') this.toggleSound()
  }

  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id))
  }

  closeModal(id) {
    $(id)?.classList.remove('open')
  }

  initMenuScene() {
    const canvas = $('menu-canvas')
    if (!canvas) return
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a2118)
    scene.fog = new THREE.Fog(0x1a2118, 28, 72)
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 200)
    camera.position.set(24, 12, 28)
    camera.lookAt(0, 1, 0)
    scene.add(new THREE.HemisphereLight(0x9eb1a4, 0x30321f, 1.2))
    const light = new THREE.DirectionalLight(0xffd9a0, 2)
    light.position.set(-20, 30, 12)
    scene.add(light)
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshStandardMaterial({ color: 0x34392b, roughness: 1 }))
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.01
    scene.add(ground)
    for (let i = 0; i < 12; i++) {
      const box = new THREE.Mesh(new THREE.BoxGeometry(1.2 + Math.random(), 0.8, 1), new THREE.MeshStandardMaterial({ color: i % 2 ? 0x56604a : 0x6b6247 }))
      box.position.set((Math.random() - 0.5) * 28, 0.4, (Math.random() - 0.5) * 24)
      box.rotation.y = Math.random() * Math.PI
      scene.add(box)
    }
    let t = 0
    const loop = () => {
      if ($('screen-menu')?.classList.contains('active')) {
        t += 0.002
        camera.position.x = 24 + Math.sin(t) * 4
        camera.lookAt(0, 1, 0)
        renderer.render(scene, camera)
        requestAnimationFrame(loop)
      }
    }
    loop()
  }

  buildFactionGrid() {
    const grid = $('faction-grid')
    if (!grid) return
    grid.innerHTML = FACTION_ORDER.map(id => {
      const f = FACTIONS[id]
      return `<button class="faction-card ${id === this.setup.faction ? 'selected' : ''}" data-faction="${id}"><span class="fac-emblem">${f.short}</span><b>${f.name}</b><small>${f.doctrine}</small></button>`
    }).join('')
    grid.querySelectorAll('[data-faction]').forEach(el => el.onclick = () => {
      this.setup.faction = el.dataset.faction
      if (this.setup.enemy === this.setup.faction) this.setup.enemy = FACTION_ORDER.find(x => x !== this.setup.faction)
      this.buildFactionGrid(); this.buildEnemyGrid(); this.updateMatchup()
    })
  }

  buildEnemyGrid() {
    const grid = $('enemy-grid')
    if (!grid) return
    grid.innerHTML = FACTION_ORDER.filter(id => id !== this.setup.faction).map(id => {
      const f = FACTIONS[id]
      return `<button class="enemy-card ${id === this.setup.enemy ? 'selected' : ''}" data-enemy="${id}">${f.short}</button>`
    }).join('')
    grid.querySelectorAll('[data-enemy]').forEach(el => el.onclick = () => {
      this.setup.enemy = el.dataset.enemy
      this.buildEnemyGrid(); this.updateMatchup()
    })
  }

  buildMapGrid() {
    const grid = $('map-grid')
    if (!grid) return
    grid.innerHTML = MAP_ORDER.map(id => {
      const m = MAPS[id]
      return `<button class="map-card ${id === this.setup.map ? 'selected' : ''}" data-map="${id}"><b>${m.name}</b><small>${m.region}</small></button>`
    }).join('')
    grid.querySelectorAll('[data-map]').forEach(el => el.onclick = () => {
      this.setup.map = el.dataset.map
      this.buildMapGrid(); this.updateMatchup()
    })
  }

  buildDifficulty() {
    const seg = $('difficulty-seg')
    if (!seg) return
    seg.innerHTML = Object.entries(DIFFICULTIES).map(([id, d]) => `<button class="${id === this.setup.difficulty ? 'active' : ''}" data-difficulty="${id}">${d.name}</button>`).join('')
    seg.querySelectorAll('[data-difficulty]').forEach(el => el.onclick = () => {
      this.setup.difficulty = el.dataset.difficulty
      this.buildDifficulty(); this.updateMatchup()
    })
  }

  buildSupplies() {
    const seg = $('supplies-seg')
    if (!seg) return
    const values = [900, 1300, 1800]
    seg.innerHTML = values.map(v => `<button class="${v === this.setup.supplies ? 'active' : ''}" data-supplies="${v}">${v}</button>`).join('')
    seg.querySelectorAll('[data-supplies]').forEach(el => el.onclick = () => {
      this.setup.supplies = +el.dataset.supplies
      this.buildSupplies(); this.updateMatchup()
    })
  }

  updateMatchup() {
    const card = $('matchup-card')
    if (!card) return
    const pf = FACTIONS[this.setup.faction], ef = FACTIONS[this.setup.enemy], map = MAPS[this.setup.map]
    card.innerHTML = `<span>${pf.short}</span><b>VS</b><span>${ef.short}</span><small>${map.name} · ${DIFFICULTIES[this.setup.difficulty].name}</small>`
  }

  buildCampaign() {
    const list = $('mission-list')
    if (!list) return
    list.innerHTML = MISSIONS.map((m, i) => `<button class="mission-card" data-mission="${m.id}"><span>${String(i + 1).padStart(2, '0')}</span><b>${m.title}</b><small>${m.location}</small></button>`).join('')
    list.querySelectorAll('[data-mission]').forEach(el => el.onclick = () => {
      const mission = MISSIONS.find(m => m.id === el.dataset.mission)
      this.openBriefing(mission)
    })
  }

  openBriefing(m) {
    this.pendingMission = m
    $('brief-stamp').textContent = `OPERATION ${m.op}`
    $('brief-date').textContent = m.date.toUpperCase()
    $('brief-title').textContent = m.title
    $('brief-loc').textContent = m.location.toUpperCase()
    $('brief-text').textContent = m.brief
    $('brief-history').textContent = m.history
    $('brief-flags').innerHTML = `<span>${FACTIONS[m.player].short}</span><b>VS</b><span>${FACTIONS[m.enemy].short}</span>`
    $('brief-intel').textContent = m.intel || 'Reconnaissance reports limited enemy movement.'
    $('brief-objectives').innerHTML = (m.objectives || ['Destroy the enemy headquarters']).map(o => `<li>${o}</li>`).join('')
    $('briefing-overlay')?.classList.add('open')
  }

  async startSkirmish() {
    await this.startMatch({
      playerFaction: this.setup.faction,
      enemyFaction: this.setup.enemy,
      map: this.setup.map,
      difficulty: this.setup.difficulty,
      supplies: this.setup.supplies,
      mode: 'skirmish',
      mission: null
    })
  }

  async startMission(m) {
    if (!m) return
    await this.startMatch({
      playerFaction: m.player,
      enemyFaction: m.enemy,
      map: m.map,
      difficulty: typeof m.difficulty === 'number' ? (['recruit', 'veteran', 'marshal'][m.difficulty - 1] || 'veteran') : (m.difficulty || 'veteran'),
      supplies: m.setup?.supplies || 900,
      mode: 'campaign',
      mission: m,
      setup: m.setup
    })
  }

  async startMatch(config) {
    this.showScreen('screen-game')
    $('loading')?.classList.add('active')
    await new Promise(r => setTimeout(r, 180))
    this.cleanupBattle()
    this.config = config
    this.playerFaction = config.playerFaction
    this.enemyFaction = config.enemyFaction
    this.difficulty = typeof config.difficulty === 'object' ? config.difficulty : DIFFICULTIES[config.difficulty]
    if (!this.difficulty) this.difficulty = DIFFICULTIES.veteran
    this.team = 'player'
    this.running = true
    this.ended = false
    this.elapsed = 0
    this.suppliesPlayer = config.supplies || 900
    this.suppliesEnemy = config.supplies || 900

    const canvas = $('game-canvas')
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 0.9
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    this.camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 700)
    this.camera.position.set(-95, 58, 95)
    this.camera.lookAt(-55, 0, -55)
    this.scene = new THREE.Scene()

    const mapDef = MAPS[config.map] || MAPS.normandy
    const bases = [{ x: -92, z: -92 }, { x: 92, z: 92 }]
    this.world = createWorld(this.scene, mapDef, { bases, seed: 1337 + Math.floor(Math.random() * 100) })
    this.playerBase = bases[0]
    this.enemyBase = bases[1]
    this.effects = new Effects(this.scene)

    this.registerSupplies()
    this.spawnInitial(config.setup)
    this.ai = new AIController(this)

    this.bindBattleControls()
    this.updateHud()
    $('loading')?.classList.remove('active')
    $('mission-banner-faction').textContent = FACTIONS[this.playerFaction].name.toUpperCase()
    $('mission-banner-title').textContent = config.mission?.title?.toUpperCase() || 'SKIRMISH'
    $('mission-banner-date').textContent = config.mission?.date?.toUpperCase() || 'FIELD ENGAGEMENT'
    this.lastTime = performance.now()
    requestAnimationFrame((t) => this.loop(t))
  }

  registerSupplies() {
    for (const p of [[-50, -35], [50, 35], [0, 0], [-60, 45], [60, -45]]) {
      this.supplies.push(new SupplyNode(this, p[0], p[1], this.setup.supplies))
    }
  }

  spawnInitial(setupOverrides) {
    const setup = setupOverrides || null
    const playerBuildings = setup?.player?.buildings || { hq: 1, barracks: 1, factory: 1, depot: 1 }
    const enemyBuildings = setup?.enemy?.buildings || { hq: 1, barracks: 1, factory: 1, depot: 1, turret: 2 }
    this.spawnBuildings('player', this.playerFaction, this.playerBase, playerBuildings)
    this.spawnBuildings('enemy', this.enemyFaction, this.enemyBase, enemyBuildings)

    const playerUnits = setup?.player?.units || { rifle: 3, engineer: 1, harvester: 2, tank: 1 }
    const enemyUnits = setup?.enemy?.units || { rifle: 3, engineer: 1, harvester: 2, tank: 1 }
    this.spawnUnits('player', this.playerFaction, this.playerBase, playerUnits)
    this.spawnUnits('enemy', this.enemyFaction, this.enemyBase, enemyUnits)
  }

  spawnBuildings(team, faction, base, counts) {
    const offsets = { hq: [0, 0], barracks: [-10, 6], factory: [10, 7], depot: [-10, -8], turret: [12, -9] }
    let turretIndex = 0
    Object.entries(counts).forEach(([type, count]) => {
      for (let i = 0; i < count; i++) {
        let [ox, oz] = offsets[type] || [0, 0]
        if (type === 'turret') { ox = 12 + turretIndex * 7; oz = -9 - turretIndex * 4; turretIndex++ }
        const x = base.x + ox + (i > 0 ? i * 4 : 0)
        const z = base.z + oz
        new Building(this, faction, team, type, x, z)
      }
    })
  }

  spawnUnits(team, faction, base, counts) {
    let index = 0
    Object.entries(counts).forEach(([type, count]) => {
      for (let i = 0; i < count; i++) {
        const angle = index * 2.39
        const radius = 7 + (index % 4) * 3
        const x = base.x + Math.cos(angle) * radius
        const z = base.z + Math.sin(angle) * radius
        new Unit(this, faction, team, type, x, z)
        index++
      }
    })
  }

  registerUnit(unit) { this.units.push(unit) }
  registerBuilding(building) { this.buildings.push(building) }
  removeProjectile(p) { this.projectiles = this.projectiles.filter(q => q !== p) }

  spend(team, amount) {
    if (team === 'player') {
      if (this.suppliesPlayer < amount) { this.toast('Insufficient supply', 'bad'); return false }
      this.suppliesPlayer -= amount
    } else {
      if (this.suppliesEnemy < amount) return false
      this.suppliesEnemy -= amount
    }
    return true
  }

  nearestSupply(x, z) {
    let best = null, bd = Infinity
    for (const s of this.supplies) {
      if (s.amount <= 0) continue
      const d = Math.hypot(s.x - x, s.z - z)
      if (d < bd) { bd = d; best = s }
    }
    return best
  }
  getSupplies(team) { return team === 'player' ? this.suppliesPlayer : this.suppliesEnemy }
  enemyTargets(team) { return [...this.units, ...this.buildings].filter(e => e.alive && e.team !== team) }

  bindBattleControls() {
    this.canvas = $('game-canvas')
    this.raycaster = new THREE.Raycaster()
    this.pointer = new THREE.Vector2()
    this.dragStart = null
    this.canvas.onpointerdown = (e) => this.pointerDown(e)
    this.canvas.onpointermove = (e) => this.pointerMove(e)
    this.canvas.oncontextmenu = (e) => e.preventDefault()
    this.canvas.onpointerup = (e) => this.pointerUp(e)
  }

  pointerDown(e) {
    if (!this.running || this.ended) return
    if (e.button === 2) {
      this.issueRightClick(e)
      return
    }
    this.dragStart = { x: e.clientX, y: e.clientY }
  }

  pointerMove(e) {
    const rect = this.canvas.getBoundingClientRect()
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  }

  pointerUp(e) {
    if (!this.dragStart) return
    const dx = e.clientX - this.dragStart.x, dy = e.clientY - this.dragStart.y
    if (Math.hypot(dx, dy) > 5) this.boxSelect(this.dragStart, { x: e.clientX, y: e.clientY })
    else this.selectAt(e)
    this.dragStart = null
  }

  raycast(e) {
    const rect = this.canvas.getBoundingClientRect()
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    this.raycaster.setFromCamera(this.pointer, this.camera)
    return this.raycaster
  }

  selectAt(e) {
    const ray = this.raycast(e)
    const meshes = [...this.units.map(u => u.hull), ...this.buildings.map(b => b.hull)]
    const hits = ray.intersectObjects(meshes, false)
    this.selected = []
    if (hits[0]?.object.userData.entity?.team === 'player') this.selected = [hits[0].object.userData.entity]
    this.updateSelection()
  }

  boxSelect(a, b) {
    const ax = Math.min(a.x, b.x), ay = Math.min(a.y, b.y), bx = Math.max(a.x, b.x), by = Math.max(a.y, b.y)
    this.selected = this.units.filter(u => u.alive && u.team === 'player' && u.group).filter(u => {
      const p = u.group.position.clone().project(this.camera)
      const x = (p.x * 0.5 + 0.5) * this.canvas.clientWidth
      const y = (-p.y * 0.5 + 0.5) * this.canvas.clientHeight
      return x >= ax && x <= bx && y >= ay && y <= by
    })
    this.updateSelection()
  }

  issueRightClick(e) {
    const ray = this.raycast(e)
    const meshes = [...this.units.map(u => u.hull), ...this.buildings.map(b => b.hull)]
    const hits = ray.intersectObjects(meshes, false)
    const target = hits[0]?.object.userData.entity
    const ground = ray.intersectObject(this.world.terrain, false)[0]
    if (target && target.team === 'enemy') {
      this.selected.forEach(u => u.setOrder?.({ type: 'attack', target }))
    } else if (ground) {
      const p = ground.point
      this.selected.forEach((u, i) => u.setOrder?.({ type: 'move', x: p.x + i * 2, z: p.z + i * 2 }))
    }
  }

  updateSelection() {
    const card = $('sel-content')
    if (!card) return
    if (!this.selected.length) {
      $('sel-empty')?.classList.remove('hidden')
      card.innerHTML = ''
      return
    }
    $('sel-empty')?.classList.add('hidden')
    const s = this.selected[0]
    card.innerHTML = `<b>${s.name || s.type}</b><small>${Math.ceil(s.hp)} / ${s.maxHp} HP</small>`
  }

  loop(now) {
    if (!this.running) return
    const rawDt = Math.min(0.05, (now - this.lastTime) / 1000)
    this.lastTime = now
    const dt = rawDt * this.speed
    if (!this.paused && !this.ended) {
      this.elapsed += dt
      this.world.update(dt)
      this.units.forEach(u => u.update(dt))
      this.buildings.forEach(b => b.update(dt))
      this.projectiles.forEach(p => p.update(dt))
      this.supplies.forEach(s => s.update?.(dt))
      this.effects.update(dt, this.camera)
      this.ai?.update(dt)
      this.updateHud()
      this.checkVictory()
    }
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame((t) => this.loop(t))
  }

  updateHud() {
    if ($('res-supplies')) $('res-supplies').textContent = Math.floor(this.suppliesPlayer)
    if ($('res-pop')) {
      const pop = this.units.filter(u => u.alive && u.team === 'player').reduce((n, u) => n + (u.stats?.pop || 0), 0)
      $('res-pop').textContent = `${pop} / 60`
    }
    if ($('res-rate')) $('res-rate').textContent = `+${this.getIncome('player')}/s`
    if ($('res-clock')) $('res-clock').textContent = this.formatTime(this.elapsed)
  }

  getIncome(team) {
    return this.buildings.filter(b => b.alive && b.team === team).reduce((n, b) => n + (b.income || 0), 0)
  }

  formatTime(t) {
    const m = Math.floor(t / 60), s = Math.floor(t % 60)
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  checkVictory() {
    const phq = this.buildings.some(b => b.alive && b.team === 'player' && b.type === 'hq')
    const ehq = this.buildings.some(b => b.alive && b.team === 'enemy' && b.type === 'hq')
    if (!ehq) this.end(true)
    else if (!phq) this.end(false)
  }

  end(victory) {
    if (this.ended) return
    this.ended = true
    const overlay = $('end-overlay')
    overlay?.classList.add('open')
    $('end-kicker').textContent = victory ? 'OPERATION COMPLETE' : 'OPERATION FAILED'
    $('end-title').textContent = victory ? 'VICTORY' : 'DEFEAT'
    $('end-text').textContent = victory ? 'The enemy command post has fallen. The field is yours.' : 'Your headquarters has fallen. Rally and retry.'
  }

  retry() {
    if (this.config?.mode === 'campaign') this.startMission(this.config.mission)
    else this.startSkirmish()
  }

  nextMission() {
    const i = MISSIONS.findIndex(m => m.id === this.config?.mission?.id)
    this.startMission(MISSIONS[(i + 1) % MISSIONS.length])
  }

  toggleSpeed() {
    this.speed = this.speed === 1 ? 2 : this.speed === 2 ? 4 : 1
    if ($('btn-speed')) $('btn-speed').textContent = `${this.speed}×`
  }

  toggleSound() {
    this.audio.muted = !this.audio.muted
  }

  toast(text, type = '') {
    const el = document.createElement('div')
    el.className = `toast ${type}`
    el.textContent = text
    $('toasts')?.appendChild(el)
    setTimeout(() => el.remove(), 2600)
  }

  onEntityKilled(entity, killer) {
    if (entity.kind === 'building') {
      this.buildings = this.buildings.filter(b => b !== entity)
    } else {
      this.units = this.units.filter(u => u !== entity)
    }
  }

  onBuildingComplete(building) {}
  cleanupBattle() {
    this.running = false
    this.units = []
    this.buildings = []
    this.projectiles = []
    this.supplies = []
  }
  showMenu() {
    this.cleanupBattle()
    $('end-overlay')?.classList.remove('open')
    this.showScreen('screen-menu')
  }
}

window.ironFront = new IronFront()
