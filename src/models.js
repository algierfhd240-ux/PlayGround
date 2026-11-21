// ============================================================
// IRON FRONT — procedural model library
// Low-poly but grounded WWII silhouettes, merged for performance
// ============================================================
import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { FACTIONS } from './data.js'

const MAT_VEH = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.58, metalness: 0.28 })
const MAT_INF = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.94, metalness: 0.02 })
const MAT_BLD = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.86, metalness: 0.06 })
const MAT_PROP = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0.01 })
export { MAT_VEH, MAT_INF, MAT_BLD, MAT_PROP }

const _color = new THREE.Color()
const _mat = new THREE.Matrix4()
const _quat = new THREE.Quaternion()
const _euler = new THREE.Euler()
const _pos = new THREE.Vector3()
const _scale = new THREE.Vector3()

function paint(geo, color) {
  const count = geo.attributes.position.count
  const arr = new Float32Array(count * 3)
  _color.set(color)
  for (let i = 0; i < count; i++) {
    arr[i * 3] = _color.r
    arr[i * 3 + 1] = _color.g
    arr[i * 3 + 2] = _color.b
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3))
  return geo
}

function add(list, geo, color, p = [0, 0, 0], r = [0, 0, 0], s = [1, 1, 1]) {
  const g = geo.clone()
  _euler.set(r[0], r[1], r[2])
  _quat.setFromEuler(_euler)
  _pos.set(p[0], p[1], p[2])
  _scale.set(s[0], s[1], s[2])
  _mat.compose(_pos, _quat, _scale)
  g.applyMatrix4(_mat)
  paint(g, color)
  list.push(g)
  return g
}

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d)
const cyl = (rt, rb, h, seg = 10) => new THREE.CylinderGeometry(rt, rb, h, seg)
const sph = (r, w = 10, h = 8) => new THREE.SphereGeometry(r, w, h)
const cone = (r, h, seg = 8) => new THREE.ConeGeometry(r, h, seg)

function merge(list) {
  if (!list.length) return null
  for (const g of list) {
    if (!g.attributes.uv) {
      const uv = new Float32Array(g.attributes.position.count * 2)
      g.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
    }
    g.deleteAttribute('tangent')
  }
  const merged = mergeGeometries(list, false)
  list.forEach(g => g.dispose())
  return merged
}

function shade(hex, amt) {
  const c = new THREE.Color(hex)
  c.offsetHSL(0, 0, amt)
  return c.getHex()
}

// ------------------------------------------------------------
// Vehicles
// ------------------------------------------------------------
function tankConfig(key, paintColor) {
  const base = {
    L: 5.8, W: 2.9, hullH: 0.95, trackW: 0.62, trackH: 0.8, clearance: 0.5,
    turretR: 1.35, turretH: 0.72, barrel: 3.0, barrelR: 0.105, wheels: 4,
    skirt: false, fenders: true, cupola: true, paint: paintColor, low: false
  }
  const map = {
    sherman: { L: 5.7, W: 2.95, turretR: 1.38, barrel: 2.9, hullH: 1.05, wheels: 4 },
    pershing: { L: 6.3, W: 3.15, turretR: 1.48, barrel: 3.5, hullH: 1.0, wheels: 4 },
    t34: { L: 5.95, W: 3.0, turretR: 1.42, barrel: 3.25, hullH: 0.82, low: true, wheels: 4 },
    is2: { L: 6.6, W: 3.25, turretR: 1.62, barrel: 3.9, hullH: 1.0, wheels: 5 },
    panzer4: { L: 5.9, W: 2.95, turretR: 1.38, barrel: 3.35, hullH: 0.95, skirt: true, wheels: 4 },
    tiger: { L: 6.7, W: 3.55, turretR: 1.68, barrel: 4.05, hullH: 1.08, wheels: 5, skirt: true },
    cromwell: { L: 6.0, W: 2.9, turretR: 1.35, barrel: 3.0, hullH: 0.9, wheels: 4 },
    churchill: { L: 7.3, W: 3.25, turretR: 1.42, barrel: 3.05, hullH: 1.0, wheels: 6, skirt: true },
    chiha: { L: 5.45, W: 2.4, turretR: 1.15, barrel: 2.35, hullH: 0.78, wheels: 3 },
    chinu: { L: 5.8, W: 2.65, turretR: 1.32, barrel: 2.9, hullH: 0.86, wheels: 4 },
    type92: { L: 4.2, W: 2.1, turretR: 0.82, barrel: 1.35, hullH: 0.6, trackH: 0.62, wheels: 2, low: true }
  }
  return { ...base, ...(map[key] || {}) }
}

function buildTank(cfg, faction) {
  const hull = [], turret = []
  const p = cfg.paint
  const light = shade(p, 0.05)
  const dark = shade(p, -0.055)
  const steel = 0x2a2b25
  const trackX = cfg.W / 2 - cfg.trackW / 2
  const L = cfg.L, W = cfg.W

  for (const sx of [-1, 1]) {
    add(hull, box(cfg.trackW, cfg.trackH * 0.66, L * 0.95), 0x1b1c17, [sx * trackX, cfg.clearance + cfg.trackH * 0.33, 0])
    add(hull, box(cfg.trackW + 0.04, 0.1, L * 0.97), 0x25261f, [sx * trackX, cfg.clearance + cfg.trackH * 0.68, 0])
    const n = cfg.wheels
    for (let i = 0; i < n; i++) {
      const z = -L * 0.35 + (n === 1 ? L * 0.35 : (i / (n - 1)) * L * 0.7)
      add(hull, cyl(0.24, 0.24, cfg.trackW + 0.06, 9), 0x33342b, [sx * trackX, cfg.clearance + cfg.trackH * 0.33, z], [0, 0, Math.PI / 2])
      add(hull, cyl(0.1, 0.1, cfg.trackW + 0.1, 6), 0x1c1d18, [sx * trackX, cfg.clearance + cfg.trackH * 0.33, z], [0, 0, Math.PI / 2])
    }
    if (cfg.fenders) add(hull, box(cfg.trackW + 0.16, 0.08, L * 0.98), dark, [sx * trackX, cfg.clearance + cfg.trackH * 0.74, 0])
    if (cfg.skirt) add(hull, box(0.07, 0.55, L * 0.8), dark, [sx * (W / 2 + 0.03), cfg.clearance + 0.42, 0])
  }

  add(hull, box(W - 0.55, 0.42, L * 0.84), steel, [0, cfg.clearance + 0.2, 0])
  add(hull, box(W - 0.72, cfg.hullH, L * 0.72), p, [0, cfg.clearance + 0.42 + cfg.hullH / 2, -0.05])
  // glacis
  add(hull, box(W - 0.76, 0.52, L * 0.25), light, [0, cfg.clearance + 0.5 + cfg.hullH * 0.75, L * 0.31], [cfg.low ? -0.72 : -0.52, 0, 0])
  // rear plate / engine deck
  add(hull, box(W - 0.82, 0.32, L * 0.18), dark, [0, cfg.clearance + 0.42 + cfg.hullH, -L * 0.3])
  add(hull, box(W - 1.0, 0.1, L * 0.14), 0x24251f, [0, cfg.clearance + 0.62 + cfg.hullH, -L * 0.27])
  // fender stowage
  add(hull, box(0.5, 0.22, 1.1), dark, [W / 2 - 0.38, cfg.clearance + cfg.trackH * 0.76, -L * 0.16])
  add(hull, box(0.42, 0.18, 0.8), dark, [-W / 2 + 0.34, cfg.clearance + cfg.trackH * 0.76, L * 0.08])
  add(hull, box(0.16, 0.5, 0.16), 0x3a3a30, [-W / 2 + 0.2, cfg.clearance + 0.9, -L * 0.3])
  // headlamps
  add(hull, cyl(0.1, 0.1, 0.08, 7), 0xd8cfa0, [W / 2 - 0.5, cfg.clearance + 0.85, L * 0.43], [Math.PI / 2, 0, 0])
  add(hull, cyl(0.1, 0.1, 0.08, 7), 0xd8cfa0, [-W / 2 + 0.5, cfg.clearance + 0.85, L * 0.43], [Math.PI / 2, 0, 0])

  const turretY = cfg.clearance + 0.42 + cfg.hullH + 0.02
  add(turret, cyl(cfg.turretR, cfg.turretR * 0.96, cfg.turretH, 12), p, [0, cfg.turretH / 2, 0])
  add(turret, cyl(cfg.turretR * 0.78, cfg.turretR * 0.82, cfg.turretH * 0.42, 12), light, [0, cfg.turretH + cfg.turretH * 0.2, 0])
  // mantlet
  add(turret, box(cfg.turretR * 0.95, cfg.turretH * 0.62, 0.42), dark, [0, cfg.turretH * 0.52, cfg.turretR * 0.82])
  // barrel
  const barrelLen = cfg.barrel
  add(turret, cyl(cfg.barrelR * 0.85, cfg.barrelR, barrelLen, 9), 0x2c2d27, [0, cfg.turretH * 0.55, cfg.turretR * 0.8 + barrelLen / 2], [Math.PI / 2, 0, 0])
  add(turret, cyl(cfg.barrelR * 1.25, cfg.barrelR * 1.25, 0.24, 8), 0x23241f, [0, cfg.turretH * 0.55, cfg.turretR * 0.8 + barrelLen - 0.1], [Math.PI / 2, 0, 0])
  // cupola + hatch
  if (cfg.cupola) {
    add(turret, cyl(0.3, 0.3, 0.26, 9), dark, [-cfg.turretR * 0.32, cfg.turretH + 0.28, -cfg.turretR * 0.22])
    add(turret, cyl(0.27, 0.27, 0.05, 9), light, [-cfg.turretR * 0.32, cfg.turretH + 0.43, -cfg.turretR * 0.22])
  }
  // antenna
  add(turret, cyl(0.018, 0.018, 1.5, 4), 0x1d1e19, [cfg.turretR * 0.55, cfg.turretH + 0.75, -cfg.turretR * 0.55])
  // turret stowage
  add(turret, box(0.38, 0.24, 0.55), dark, [cfg.turretR * 0.62, cfg.turretH * 0.35, -cfg.turretR * 0.42])
  // rear turret box (German)
  if (faction === 'germany') add(turret, box(cfg.turretR * 0.7, cfg.turretH * 0.6, 0.3), dark, [0, cfg.turretH * 0.5, -cfg.turretR * 0.88])

  return { hull: merge(hull), turret: merge(turret), turretY, height: turretY + cfg.turretH + 0.6, radius: Math.max(W, L) * 0.42 }
}

function buildScout(faction, kind) {
  const hull = [], turret = []
  const p = FACTIONS[faction].paint
  const dark = shade(p, -0.06)
  const tire = 0x1a1b16
  const W = kind === 'sd234' ? 3.0 : 2.5
  const L = kind === 'ba64' ? 4.4 : 5.2
  const wheels = kind === 'sd234' ? 4 : 2
  const wheelR = 0.48

  add(hull, box(W - 0.3, 0.4, L * 0.86), dark, [0, 0.72, 0])
  add(hull, box(W - 0.55, 0.75, L * 0.7), p, [0, 1.2, -0.1])
  add(hull, box(W - 0.6, 0.5, L * 0.3), shade(p, 0.05), [0, 1.2, L * 0.34], [0.5, 0, 0])
  add(hull, box(W - 0.75, 0.34, L * 0.24), 0x23241f, [0, 1.62, L * 0.28], [0.2, 0, 0])
  for (const sx of [-1, 1]) {
    for (let i = 0; i < wheels; i++) {
      const z = -L * 0.3 + (i / Math.max(1, wheels - 1)) * L * 0.6
      add(hull, cyl(wheelR, wheelR, 0.34, 12), tire, [sx * (W / 2 - 0.18), wheelR, z], [0, 0, Math.PI / 2])
      add(hull, cyl(wheelR * 0.5, wheelR * 0.5, 0.38, 8), 0x4a4a3c, [sx * (W / 2 - 0.18), wheelR, z], [0, 0, Math.PI / 2])
    }
  }
  // spare wheel
  add(hull, cyl(0.38, 0.38, 0.2, 10), tire, [0, 1.15, -L * 0.42], [Math.PI / 2, 0, 0])
  // open turret
  const turretY = 1.58
  add(turret, cyl(0.8, 0.86, 0.42, 10), p, [0, 0.21, 0])
  add(turret, box(0.16, 0.3, 1.3), 0x2c2d27, [0, 0.45, 0.6])
  add(turret, box(0.5, 0.42, 0.5), dark, [0, 0.55, -0.2])
  add(turret, cyl(0.035, 0.035, 0.8, 4), 0x1d1e19, [0.55, 0.8, -0.3])
  return { hull: merge(hull), turret: merge(turret), turretY, height: 2.5, radius: 1.9 }
}

function buildTruck(faction, variant = 'cargo') {
  const hull = []
  const p = FACTIONS[faction].paint
  const dark = shade(p, -0.05)
  const tire = 0x1a1b16
  const W = 2.5, L = 6.0
  add(hull, box(W - 0.4, 0.32, L * 0.9), 0x2a2b25, [0, 0.72, 0])
  // cab
  add(hull, box(W - 0.45, 1.05, 1.7), p, [0, 1.3, L * 0.3])
  add(hull, box(W - 0.6, 0.55, 0.1), 0x28323a, [0, 1.55, L * 0.42], [0, 0, 0])
  add(hull, box(W - 0.5, 0.12, 1.6), dark, [0, 1.86, L * 0.3])
  // bed
  add(hull, box(W - 0.35, 0.28, L * 0.42), dark, [0, 1.0, -L * 0.2])
  add(hull, box(W - 0.3, 0.55, 0.14), p, [0, 1.25, -L * 0.42])
  add(hull, box(W - 0.3, 0.55, 0.14), p, [0, 1.25, L * 0.02])
  for (const sx of [-1, 1]) {
    add(hull, box(0.14, 0.55, L * 0.42), p, [sx * (W / 2 - 0.2), 1.25, -L * 0.2])
    for (let i = 0; i < 3; i++) {
      const z = L * 0.3 - i * (L * 0.28)
      add(hull, cyl(0.47, 0.47, 0.32, 12), tire, [sx * (W / 2 - 0.16), 0.48, z], [0, 0, Math.PI / 2])
      add(hull, cyl(0.2, 0.2, 0.36, 8), 0x4a4a3c, [sx * (W / 2 - 0.16), 0.48, z], [0, 0, Math.PI / 2])
    }
  }
  add(hull, cyl(0.12, 0.12, 0.9, 7), 0x2f302a, [W * 0.18, 1.9, L * 0.28])
  // headlights
  add(hull, cyl(0.09, 0.09, 0.08, 6), 0xd8cfa0, [W / 2 - 0.4, 1.35, L * 0.46], [Math.PI / 2, 0, 0])
  add(hull, cyl(0.09, 0.09, 0.08, 6), 0xd8cfa0, [-W / 2 + 0.4, 1.35, L * 0.46], [Math.PI / 2, 0, 0])
  // cargo
  const cargo = []
  for (let i = 0; i < 4; i++) {
    add(cargo, box(0.75, 0.5, 0.75), i % 2 ? 0x6d5b3b : 0x7b6845, [-0.6 + (i % 2) * 1.2, 0, -0.3 + Math.floor(i / 2) * 0.85])
  }
  add(cargo, box(1.5, 0.12, 1.7), 0x4f4a36, [0, 0.3, 0.1])
  return { hull: merge(hull), turret: null, cargo: merge(cargo), turretY: 0, height: 2.3, radius: 2.1, cargoY: 1.42, cargoZ: -L * 0.2 }
}

function buildArtillery(faction, kind) {
  const hull = [], turret = []
  const p = FACTIONS[faction].paint
  const dark = shade(p, -0.06)
  if (kind === 'katyusha') {
    // truck chassis with rocket rack
    const t = buildTruck(faction)
    const rack = []
    const mountY = 1.85
    add(rack, box(2.2, 0.18, 2.6), dark, [0, mountY, -0.4], [-0.25, 0, 0])
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 3; c++) {
        add(rack, cyl(0.09, 0.09, 2.3, 6), 0x33342b, [-0.72 + c * 0.72, mountY + 0.32 + r * 0.02, -0.35], [Math.PI / 2 - 0.25, 0, 0])
      }
    }
    add(rack, box(0.16, 0.7, 0.16), 0x2c2d27, [-1.0, mountY - 0.3, -1.2])
    add(rack, box(0.16, 0.7, 0.16), 0x2c2d27, [1.0, mountY - 0.3, -1.2])
    const merged = merge([...rack])
    return { hull: t.hull, turret: merged, turretY: 0, height: 3.2, radius: 2.2, elevated: 0 }
  }
  // tracked chassis (sherman-like)
  const cfg = tankConfig(kind === 'priest' || kind === 'sexton' ? 'sherman' : kind === 'horo' ? 'chiha' : 'panzer4', p)
  cfg.cupola = false
  cfg.barrel = 0.5
  const base = buildTank(cfg, faction)
  // replace turret with open fighting compartment + howitzer
  const open = []
  const R = cfg.turretR * 1.15
  add(open, box(R * 2, 0.72, R * 1.9), p, [0, 0.36, -0.1])
  add(open, box(R * 1.75, 0.55, R * 1.4), dark, [0, 0.85, -0.15])
  add(open, box(0.12, 0.6, R * 1.8), shade(p, 0.05), [-R, 0.6, -0.1])
  add(open, box(0.12, 0.6, R * 1.8), shade(p, 0.05), [R, 0.6, -0.1])
  add(open, box(R * 2, 0.1, 0.12), shade(p, 0.05), [0, 0.88, R * 0.8])
  // howitzer
  const elev = kind === 'horo' ? 0.36 : 0.22
  add(open, cyl(0.13, 0.16, 2.8, 8), 0x2b2c26, [0, 0.9, 1.3], [Math.PI / 2 - elev, 0, 0])
  add(open, box(0.55, 0.4, 0.5), dark, [0, 0.85, 0.2])
  add(open, cyl(0.24, 0.24, 0.1, 8), 0x2b2c26, [0, 1.1, 2.6], [Math.PI / 2 - elev, 0, 0])
  add(open, box(0.34, 0.34, 0.5), 0x2c2d27, [0.65, 0.9, 0.6])
  add(open, box(0.34, 0.34, 0.5), 0x2c2d27, [-0.65, 0.9, 0.6])
  const merged = merge(open)
  return { hull: base.hull, turret: merged, turretY: base.turretY + 0.1, height: base.turretY + 2.0, radius: base.radius, elevated: elev }
}

function buildInfantry(faction, count) {
  const list = []
  const fac = FACTIONS[faction]
  const uniform = fac.uniform
  const trouser = shade(uniform, -0.06)
  const helmet = shade(uniform, -0.09)
  const skin = 0xb08a68
  const wood = 0x5a4226
  const metal = 0x2d2e28
  const offsets = [[0, 0, 0], [0.75, 0, 0.42], [-0.68, 0, 0.5], [0.18, 0, -0.72], [-0.5, 0, -0.35], [0.55, 0, -0.4]]
  for (let i = 0; i < count; i++) {
    const [ox, , oz] = offsets[i % offsets.length]
    const rot = (i * 1.7) % 1.2 - 0.6
    const group = []
    // legs
    add(group, box(0.17, 0.58, 0.19), trouser, [-0.13, 0.29, 0], [0.05, 0, 0.04])
    add(group, box(0.17, 0.58, 0.19), trouser, [0.13, 0.29, 0.02], [-0.06, 0, -0.03])
    add(group, box(0.2, 0.12, 0.3), 0x2a2721, [-0.13, 0.06, 0.06])
    add(group, box(0.2, 0.12, 0.3), 0x2a2721, [0.13, 0.06, 0.08])
    // torso
    add(group, box(0.46, 0.6, 0.28), uniform, [0, 0.86, 0])
    add(group, box(0.5, 0.14, 0.32), shade(uniform, -0.05), [0, 0.6, 0])
    // pack
    add(group, box(0.34, 0.4, 0.16), 0x4a4632, [0, 0.9, -0.19])
    // arms
    add(group, box(0.14, 0.48, 0.16), uniform, [-0.3, 0.88, 0.02], [0, 0, 0.16])
    add(group, box(0.14, 0.48, 0.16), uniform, [0.3, 0.88, 0.04], [0, 0, -0.18])
    // head + helmet
    add(group, sph(0.155, 8, 6), skin, [0, 1.28, 0.01])
    add(group, sph(0.19, 8, 5), helmet, [0, 1.34, 0], [0, 0, 0], [1, 0.72, 1.05])
    add(group, box(0.3, 0.05, 0.36), shade(helmet, -0.03), [0, 1.28, 0.04])
    // rifle
    add(group, box(0.05, 0.05, 0.95), wood, [0.22, 0.92, 0.24], [0.06, 0, 0])
    add(group, box(0.035, 0.035, 0.5), metal, [0.22, 0.95, 0.74], [0.06, 0, 0])
    add(group, box(0.09, 0.09, 0.22), metal, [0.22, 0.9, 0.44])
    const soldier = merge(group)
    soldier.rotateY(rot)
    soldier.translate(ox, 0, oz)
    list.push(soldier)
  }
  return { hull: merge(list), turret: null, turretY: 0, height: 1.75, radius: 1.15, squad: count }
}

// ------------------------------------------------------------
// Structures
// ------------------------------------------------------------
function wallPalette(faction) {
  switch (faction) {
    case 'usa': return { wall: 0x8b8264, wall2: 0x776f54, roof: 0x4a4c3d, trim: 0x5e6249, sand: 0x9b8f68 }
    case 'ussr': return { wall: 0x6d5c44, wall2: 0x5d4e39, roof: 0x3d3d31, trim: 0x4f4a35, sand: 0x8a7b55 }
    case 'germany': return { wall: 0x7d7b6c, wall2: 0x6b695c, roof: 0x44453c, trim: 0x5a5c4f, sand: 0x8c8060 }
    case 'uk': return { wall: 0x8d7a58, wall2: 0x7b694a, roof: 0x4d4438, trim: 0x625a42, sand: 0x9d8f68 }
    case 'japan': return { wall: 0x837550, wall2: 0x726443, roof: 0x3f3b2e, trim: 0x595137, sand: 0x8d7f58 }
    default: return { wall: 0x888, wall2: 0x666, roof: 0x444, trim: 0x555, sand: 0x999 }
  }
}

function sandbagRing(list, cx, cz, r, count, color, y = 0.2) {
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2
    add(list, box(1.0, 0.36, 0.5), i % 2 ? color : shade(color, -0.04), [cx + Math.cos(a) * r, y + (i % 2) * 0.18, cz + Math.sin(a) * r], [0, -a, 0])
  }
}

function buildBuilding(faction, type) {
  const pal = wallPalette(faction)
  const paint = FACTIONS[faction].paint
  const flag = FACTIONS[faction].color
  const list = []
  const flags = []
  let height = 6
  let flagPos = null
  const trim = pal.trim

  if (type === 'hq') {
    // main mass
    add(list, box(10.5, 4.6, 8), pal.wall, [0, 2.3, 0])
    add(list, box(10.8, 0.35, 8.3), pal.roof, [0, 4.75, 0])
    add(list, box(7, 2.8, 5.8), pal.wall2, [-0.6, 6.3, -0.4])
    add(list, box(7.4, 0.3, 6.2), pal.roof, [-0.6, 7.8, -0.4])
    add(list, box(3.2, 2.2, 3.4), pal.wall, [3.4, 5.9, 2.1])
    add(list, box(3.5, 0.25, 3.7), pal.roof, [3.4, 7.1, 2.1])
    // windows
    for (let i = 0; i < 4; i++) {
      add(list, box(1.1, 1.0, 0.1), 0x27302f, [-3.6 + i * 2.3, 2.6, 4.05])
      add(list, box(0.85, 0.85, 0.1), 0x3a4038, [-2.8 + i * 1.9, 6.1, 2.52])
    }
    // door + canopy
    add(list, box(1.5, 2.4, 0.16), 0x2b2c24, [0.8, 1.2, 4.08])
    add(list, box(3.4, 0.22, 2.0), pal.roof, [0.8, 3.1, 4.9], [0.18, 0, 0])
    add(list, box(0.16, 2.4, 0.16), trim, [-0.9, 1.2, 5.0])
    add(list, box(0.16, 2.4, 0.16), trim, [2.5, 1.2, 5.0])
    // radio mast
    add(list, cyl(0.07, 0.09, 6.5, 5), 0x30312a, [-3.8, 10.9, -1.9])
    add(list, box(2.4, 0.07, 0.07), 0x30312a, [-3.8, 11.6, -1.9], [0, 0.4, 0])
    add(list, box(1.8, 0.06, 0.06), 0x30312a, [-3.8, 12.2, -1.9], [0, -0.5, 0])
    // sandbags and crates
    sandbagRing(list, 0, 6.1, 4.2, 9, pal.sand)
    add(list, box(1.1, 0.9, 1.1), 0x6b5a3a, [4.5, 0.45, 3.6])
    add(list, box(1.0, 0.8, 1.0), 0x74613f, [5.6, 0.4, 3.9])
    add(list, cyl(0.5, 0.5, 1.2, 8), 0x3d4238, [-5.0, 0.6, 2.8])
    // flag pole
    add(list, cyl(0.06, 0.06, 7.5, 5), 0x35362e, [4.6, 9.0, -2.6])
    flagPos = [4.6, 12.1, -2.6]
    height = 13
  } else if (type === 'barracks') {
    add(list, box(9.5, 3.2, 6.2), pal.wall, [0, 1.6, 0])
    // pitched roof
    add(list, box(5.2, 0.22, 6.9), pal.roof, [-2.5, 3.9, 0], [0, 0, 0.42])
    add(list, box(5.2, 0.22, 6.9), pal.roof, [2.5, 3.9, 0], [0, 0, -0.42])
    add(list, box(0.3, 1.4, 6.3), pal.wall2, [0, 3.5, 0])
    // door / windows
    add(list, box(1.6, 2.1, 0.15), 0x2b2c24, [-2.4, 1.05, 3.12])
    add(list, box(1.4, 2.1, 0.15), 0x2b2c24, [2.6, 1.05, 3.12])
    for (let i = 0; i < 3; i++) {
      add(list, box(0.9, 0.7, 0.12), 0x333a34, [-2.8 + i * 2.7, 2.5, 3.12])
      add(list, box(0.12, 0.7, 0.9), 0x333a34, [4.78, 2.5, -1.6 + i * 1.6])
    }
    add(list, box(1.3, 0.3, 0.7), pal.roof, [-2.4, 2.5, 3.4])
    // crates, barrels, sandbags
    add(list, box(1.1, 0.9, 1.0), 0x6b5a3a, [5.6, 0.45, 2.0])
    add(list, box(0.9, 0.7, 0.9), 0x75633f, [5.4, 1.15, 2.1])
    add(list, cyl(0.45, 0.45, 1.1, 8), 0x3c4036, [6.4, 0.55, 0.4])
    sandbagRing(list, 0, 4.6, 4.6, 7, pal.sand)
    // flag
    add(list, cyl(0.05, 0.05, 5.6, 5), 0x35362e, [4.2, 5.4, -2.6])
    flagPos = [4.2, 7.9, -2.6]
    height = 8.2
  } else if (type === 'factory') {
    add(list, box(12.5, 5.2, 9.5), pal.wall, [0, 2.6, 0])
    add(list, box(12.9, 0.3, 9.9), pal.roof, [0, 5.35, 0])
    // sawtooth roof
    for (let i = 0; i < 4; i++) {
      add(list, box(2.5, 0.18, 9.9), shade(pal.roof, 0.02), [-4.2 + i * 2.8, 6.4, 0], [0, 0, 0.36])
      add(list, box(0.14, 1.1, 9.9), pal.wall2, [-5.4 + i * 2.8, 5.9, 0])
    }
    // chimney
    add(list, cyl(0.75, 0.9, 6.5, 9), 0x5a5143, [4.6, 8.1, -2.6])
    add(list, cyl(0.85, 0.85, 0.4, 9), 0x3c3a30, [4.6, 11.35, -2.6])
    // main door
    add(list, box(4.4, 4.2, 0.18), 0x26271f, [-1.2, 2.1, 4.79])
    add(list, box(4.8, 0.25, 0.3), trim, [-1.2, 4.35, 4.85])
    for (let i = 0; i < 4; i++) add(list, box(0.1, 4.0, 0.22), 0x454538, [-2.9 + i * 1.1, 2.0, 4.83])
    // windows
    for (let i = 0; i < 4; i++) add(list, box(1.0, 0.8, 0.12), 0x333a34, [-3.4 + i * 2.3, 3.6, 4.79])
    // office wing
    add(list, box(3.4, 2.6, 4.0), pal.wall2, [5.6, 1.3, 5.2])
    add(list, box(3.7, 0.24, 4.3), pal.roof, [5.6, 2.7, 5.2])
    // crates + barrels
    for (let i = 0; i < 3; i++) add(list, box(1.0, 0.8, 1.0), 0x6b5a3a, [-6.8, 0.4 + i * 0.82, 3.6 + (i % 2) * 0.6])
    add(list, cyl(0.5, 0.5, 1.2, 8), 0x3d4238, [6.8, 0.6, 1.0])
    add(list, cyl(0.5, 0.5, 1.2, 8), 0x3d4238, [6.8, 0.6, 2.2])
    add(list, cyl(0.05, 0.05, 5.0, 5), 0x35362e, [-6.0, 7.6, -4.2])
    flagPos = [-6.0, 9.8, -4.2]
    height = 11.5
  } else if (type === 'depot') {
    add(list, box(7.2, 3.4, 5.2), pal.wall, [0, 1.7, 0])
    add(list, box(7.6, 0.24, 5.6), pal.roof, [0, 3.5, 0])
    add(list, box(3.2, 0.2, 5.9), pal.roof, [-2.0, 4.1, 0], [0, 0, 0.3])
    add(list, box(3.2, 0.2, 5.9), pal.roof, [2.0, 4.1, 0], [0, 0, -0.3])
    add(list, box(2.2, 2.6, 0.15), 0x2b2c24, [0, 1.3, 2.62])
    for (let i = 0; i < 3; i++) add(list, box(0.8, 0.6, 0.1), 0x333a34, [-2.4 + i * 2.4, 2.4, 2.62])
    // crate stacks
    for (let i = 0; i < 6; i++) {
      const x = -3.6 + (i % 3) * 1.25
      const y = 0.4 + Math.floor(i / 3) * 0.82
      add(list, box(1.05, 0.78, 0.95), i % 2 ? 0x6d5b3b : 0x7b6845, [x, y, 3.9 + (i % 2) * 0.3], [0, i * 0.3, 0])
    }
    for (let i = 0; i < 4; i++) add(list, cyl(0.46, 0.46, 1.1, 8), 0x3d4238, [3.0 + (i % 2) * 1.1, 0.55, -3.5 + Math.floor(i / 2) * 1.1])
    sandbagRing(list, 0, 4.2, 3.8, 7, pal.sand)
    add(list, cyl(0.05, 0.05, 4.8, 5), 0x35362e, [3.0, 5.4, -1.6])
    flagPos = [3.0, 7.6, -1.6]
    height = 7.8
  } else if (type === 'turret') {
    sandbagRing(list, 0, 0, 3.0, 12, pal.sand, 0.18)
    add(list, box(2.4, 0.5, 2.4), 0x55523f, [0, 0.4, 0])
    add(list, cyl(0.85, 1.0, 0.8, 10), trim, [0, 0.95, 0])
    // shield
    add(list, box(2.0, 1.1, 0.16), shade(trim, -0.06), [0, 1.55, 0.55], [0.08, 0, 0])
    // barrel
    add(list, cyl(0.11, 0.13, 2.7, 8), 0x2c2d27, [0, 1.7, 1.7], [Math.PI / 2 - 0.12, 0, 0])
    add(list, cyl(0.2, 0.2, 0.12, 8), 0x2c2d27, [0, 1.85, 3.0], [Math.PI / 2 - 0.12, 0, 0])
    // ammo boxes
    add(list, box(0.8, 0.5, 0.6), 0x5e5035, [1.9, 0.45, -1.2])
    add(list, box(0.8, 0.5, 0.6), 0x5e5035, [1.9, 0.45, -0.4])
    height = 3.2
  }

  const geo = merge(list)
  return { geometry: geo, height, radius: 4, flagPos, flagColor: flag, paint }
}

// ------------------------------------------------------------
// Flags
// ------------------------------------------------------------
const flagTexCache = new Map()

export function makeFlagTexture(faction) {
  if (flagTexCache.has(faction)) return flagTexCache.get(faction)
  const c = document.createElement('canvas')
  c.width = 160; c.height = 96
  const g = c.getContext('2d')
  const paint = (fill) => { g.fillStyle = fill; g.fillRect(0, 0, 160, 96) }
  if (faction === 'usa') {
    for (let i = 0; i < 13; i++) { g.fillStyle = i % 2 ? '#e9e3d3' : '#b23a30'; g.fillRect(0, i * 96 / 13, 160, 96 / 13) }
    g.fillStyle = '#283d66'; g.fillRect(0, 0, 72, 52)
    g.fillStyle = '#e9e3d3'
    for (let r = 0; r < 4; r++) for (let cI = 0; cI < 5; cI++) g.fillRect(8 + cI * 13, 8 + r * 11, 2.6, 2.6)
  } else if (faction === 'ussr') {
    paint('#9e2f24')
    g.fillStyle = '#e3c268'
    // star
    g.save(); g.translate(38, 46); g.beginPath()
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5; const r = i % 2 ? 7 : 17; g.lineTo(Math.cos(a) * r, Math.sin(a) * r) }
    g.closePath(); g.fill(); g.restore()
    g.strokeStyle = '#e3c268'; g.lineWidth = 4
    g.beginPath(); g.arc(82, 46, 13, 0, Math.PI * 2); g.stroke()
    g.beginPath(); g.moveTo(74, 58); g.lineTo(90, 34); g.stroke()
  } else if (faction === 'germany') {
    paint('#3d3f38')
    g.fillStyle = '#d8d2c2'; g.fillRect(0, 0, 160, 10); g.fillRect(0, 86, 160, 10)
    g.strokeStyle = '#d8d2c2'; g.lineWidth = 9
    g.beginPath(); g.moveTo(80, 26); g.lineTo(80, 70); g.moveTo(58, 48); g.lineTo(102, 48); g.stroke()
    g.strokeStyle = '#1f201c'; g.lineWidth = 4
    g.beginPath(); g.moveTo(80, 26); g.lineTo(80, 70); g.moveTo(58, 48); g.lineTo(102, 48); g.stroke()
  } else if (faction === 'uk') {
    paint('#263a63')
    g.strokeStyle = '#e6e0ce'; g.lineWidth = 20
    g.beginPath(); g.moveTo(0, 0); g.lineTo(160, 96); g.moveTo(160, 0); g.lineTo(0, 96); g.stroke()
    g.fillStyle = '#e6e0ce'; g.fillRect(66, 0, 28, 96); g.fillRect(0, 34, 160, 28)
    g.fillStyle = '#a33a30'; g.fillRect(72, 0, 16, 96); g.fillRect(0, 40, 160, 16)
    g.strokeStyle = '#a33a30'; g.lineWidth = 10
    g.beginPath(); g.moveTo(0, 0); g.lineTo(160, 96); g.moveTo(160, 0); g.lineTo(0, 96); g.stroke()
  } else if (faction === 'japan') {
    paint('#e7e1d2')
    g.fillStyle = '#b3352c'; g.beginPath(); g.arc(80, 48, 25, 0, Math.PI * 2); g.fill()
  } else {
    paint('#666')
  }
  // subtle cloth shading
  const grad = g.createLinearGradient(0, 0, 160, 0)
  grad.addColorStop(0, 'rgba(0,0,0,.25)'); grad.addColorStop(.35, 'rgba(0,0,0,0)'); grad.addColorStop(1, 'rgba(255,255,255,.06)')
  g.fillStyle = grad; g.fillRect(0, 0, 160, 96)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 2
  flagTexCache.set(faction, tex)
  return tex
}

const flagMatCache = new Map()
export function flagMaterial(faction) {
  if (!flagMatCache.has(faction)) {
    flagMatCache.set(faction, new THREE.MeshStandardMaterial({ map: makeFlagTexture(faction), side: THREE.DoubleSide, roughness: 0.9, metalness: 0 }))
  }
  return flagMatCache.get(faction)
}

// ------------------------------------------------------------
// Public model API
// ------------------------------------------------------------
const unitCache = new Map()

export function getUnitModel(faction, type) {
  const key = faction + ':' + type
  if (unitCache.has(key)) return unitCache.get(key)
  const paint = FACTIONS[faction].paint
  let m
  switch (type) {
    case 'rifle': m = buildInfantry(faction, 4); break
    case 'engineer': m = buildInfantry(faction, 3); break
    case 'at': m = buildInfantry(faction, 3); break
    case 'scout': {
      const model = { usa: 'greyhound', ussr: 'ba64', germany: 'sd234', uk: 'daimler', japan: 'type92' }[faction]
      if (model === 'type92') m = buildTank(tankConfig('type92', paint), faction)
      else m = buildScout(faction, model)
      break
    }
    case 'tank': {
      const model = { usa: 'sherman', ussr: 't34', germany: 'panzer4', uk: 'cromwell', japan: 'chiha' }[faction]
      m = buildTank(tankConfig(model, paint), faction)
      break
    }
    case 'heavy': {
      const model = { usa: 'pershing', ussr: 'is2', germany: 'tiger', uk: 'churchill', japan: 'chinu' }[faction]
      m = buildTank(tankConfig(model, paint), faction)
      break
    }
    case 'artillery': {
      const model = { usa: 'priest', ussr: 'katyusha', germany: 'hummel', uk: 'sexton', japan: 'horo' }[faction]
      m = buildArtillery(faction, model)
      break
    }
    case 'harvester':
      m = buildTruck(faction)
      break
    default:
      m = buildInfantry(faction, 3)
  }
  if (m) {
    m.faction = faction
    m.type = type
    unitCache.set(key, m)
  }
  return m
}

const buildingCache = new Map()
export function getBuildingModel(faction, type) {
  const key = faction + ':' + type
  if (buildingCache.has(key)) return buildingCache.get(key)
  const m = buildBuilding(faction, type)
  m.faction = faction
  m.type = type
  buildingCache.set(key, m)
  return m
}

// Simple wreck variant: darkened hull geometry is generated on the fly in effects.
export function makeWreckGeometry(sourceGeometry) {
  const g = sourceGeometry.clone()
  const colors = g.attributes.color
  const c = new THREE.Color()
  for (let i = 0; i < colors.count; i++) {
    c.setRGB(colors.getX(i), colors.getY(i), colors.getZ(i))
    c.multiplyScalar(0.42)
    c.lerp(new THREE.Color(0x171812), 0.45)
    colors.setXYZ(i, c.r, c.g, c.b)
  }
  colors.needsUpdate = true
  return g
}

export { MAT_VEH as vehicleMaterial, MAT_INF as infantryMaterial, MAT_BLD as buildingMaterial, MAT_PROP as propMaterial }
