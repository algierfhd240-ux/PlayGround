// ============================================================
// IRON FRONT — battlefield construction
// Terrain, sky, lighting, scenery, fog of war, minimap
// ============================================================
import * as THREE from 'three'
import { Sky } from 'three/addons/objects/Sky.js'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { BASE_POSITIONS } from './data.js'

const UP = new THREE.Vector3(0, 1, 0)

export function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function hash2(x, y, seed) {
  const s = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453123
  return s - Math.floor(s)
}
function smooth(t) { return t * t * (3 - 2 * t) }
function lerp(a, b, t) { return a + (b - a) * t }
function clamp(v, a, b) { return v < a ? a : v > b ? b : v }
function smoothstep(a, b, v) { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t) }

function valueNoise(x, y, seed) {
  const xi = Math.floor(x), yi = Math.floor(y)
  const xf = x - xi, yf = y - yi
  const u = smooth(xf), v = smooth(yf)
  const a = hash2(xi, yi, seed), b = hash2(xi + 1, yi, seed)
  const c = hash2(xi, yi + 1, seed), d = hash2(xi + 1, yi + 1, seed)
  return lerp(lerp(a, b, u), lerp(c, d, u), v)
}

function fbm(x, y, seed, oct = 4) {
  let v = 0, amp = 0.55, freq = 1, total = 0
  for (let i = 0; i < oct; i++) {
    v += valueNoise(x * freq, y * freq, seed + i * 17) * amp
    total += amp
    amp *= 0.5
    freq *= 2.05
  }
  return v / total
}

// ------------------------------------------------------------
// Texture helpers
// ------------------------------------------------------------
function makeGroundTextures(seed) {
  const size = 256
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')
  g.fillStyle = '#c9c7b8'
  g.fillRect(0, 0, size, size)
  const rng = mulberry32(seed)
  for (let i = 0; i < 4200; i++) {
    const v = 150 + Math.floor(rng() * 90)
    g.fillStyle = `rgba(${v},${v},${v - 8},${0.12 + rng() * 0.18})`
    const s = 0.5 + rng() * 2.4
    g.fillRect(rng() * size, rng() * size, s, s)
  }
  for (let i = 0; i < 120; i++) {
    g.strokeStyle = `rgba(${120 + rng() * 60},${118 + rng() * 60},${100 + rng() * 40},0.12)`
    g.lineWidth = 0.6 + rng()
    g.beginPath()
    const x = rng() * size, y = rng() * size
    g.moveTo(x, y)
    g.lineTo(x + (rng() - 0.5) * 14, y + (rng() - 0.5) * 14)
    g.stroke()
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4

  // normal map from a small noise field
  const n = 96
  const hc = document.createElement('canvas')
  hc.width = hc.height = n
  const hg = hc.getContext('2d')
  const img = hg.createImageData(n, n)
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const h = fbm(x * 0.15, y * 0.15, seed + 99, 3) * 255
      const i = (y * n + x) * 4
      img.data[i] = img.data[i + 1] = img.data[i + 2] = h
      img.data[i + 3] = 255
    }
  }
  hg.putImageData(img, 0, 0)
  const nc = document.createElement('canvas')
  nc.width = nc.height = n
  const ng = nc.getContext('2d')
  const out = ng.createImageData(n, n)
  const src = img.data
  const heightAt = (x, y) => src[((((y + n) % n) * n) + ((x + n) % n)) * 4] / 255
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const dx = (heightAt(x + 1, y) - heightAt(x - 1, y)) * 2.4
      const dy = (heightAt(x, y + 1) - heightAt(x, y - 1)) * 2.4
      const len = Math.hypot(dx, dy, 1)
      const i = (y * n + x) * 4
      out.data[i] = ((-dx / len) * 0.5 + 0.5) * 255
      out.data[i + 1] = ((-dy / len) * 0.5 + 0.5) * 255
      out.data[i + 2] = ((1 / len) * 0.5 + 0.5) * 255
      out.data[i + 3] = 255
    }
  }
  ng.putImageData(out, 0, 0)
  const normal = new THREE.CanvasTexture(nc)
  normal.wrapS = normal.wrapT = THREE.RepeatWrapping
  normal.colorSpace = THREE.NoColorSpace
  return { map: tex, normal }
}

function colorAttr(geo, color) {
  const count = geo.attributes.position.count
  const arr = new Float32Array(count * 3)
  const c = new THREE.Color(color)
  for (let i = 0; i < count; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3))
  return geo
}

function mergeAll(list) {
  if (!list.length) return null
  for (const g of list) {
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2))
  }
  const m = list.length === 1 ? list[0] : mergeGeometries(list, false)
  if (list.length > 1) list.forEach(g => g.dispose())
  return m
}

// ------------------------------------------------------------
// Scenery geometry
// ------------------------------------------------------------
function treeGeometry(kind, variant) {
  const parts = []
  const rng = mulberry32(1000 + variant * 17 + kind.length)
  const push = (geo, color, pos, rot = [0, 0, 0], scale = [1, 1, 1]) => {
    const g = geo.clone()
    g.scale(scale[0], scale[1], scale[2])
    g.rotateX(rot[0]); g.rotateY(rot[1]); g.rotateZ(rot[2])
    g.translate(pos[0], pos[1], pos[2])
    colorAttr(g, color)
    parts.push(g)
  }
  if (kind === 'pine') {
    push(new THREE.CylinderGeometry(0.18, 0.3, 2.4, 6), 0x3b3021, [0, 1.2, 0])
    for (let i = 0; i < 4; i++) {
      push(new THREE.ConeGeometry(2.1 - i * 0.42, 2.3, 7), i % 2 ? 0x243a24 : 0x2b4429, [0, 2.5 + i * 1.05, 0], [0, rng() * 3, 0])
    }
    push(new THREE.ConeGeometry(0.9, 1.3, 6), 0x334a2c, [0, 6.4, 0])
  } else if (kind === 'palm') {
    let x = 0
    for (let i = 0; i < 4; i++) {
      const seg = new THREE.CylinderGeometry(0.18 - i * 0.025, 0.24 - i * 0.025, 1.5, 6)
      push(seg, i % 2 ? 0x5b4a32 : 0x655238, [x, 0.75 + i * 1.4, 0], [0, 0, 0.06 * i])
      x += 0.18
    }
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2 + rng() * 0.3
      const frond = new THREE.BoxGeometry(0.16, 0.1, 3.1)
      push(frond, i % 2 ? 0x3f6b32 : 0x4c7a38, [x + Math.sin(a) * 1.2, 5.9, Math.cos(a) * 1.2], [0.22, a, 0])
      push(new THREE.ConeGeometry(0.32, 1.7, 4), 0x365c2c, [x + Math.sin(a) * 2.5, 5.55, Math.cos(a) * 2.5], [0.9, a, 0])
    }
    push(new THREE.SphereGeometry(0.35, 6, 5), 0x5d4b2c, [x, 5.9, 0])
  } else if (kind === 'dead') {
    push(new THREE.CylinderGeometry(0.16, 0.34, 4.0, 6), 0x3a3126, [0, 2.0, 0])
    for (let i = 0; i < 5; i++) {
      const a = rng() * Math.PI * 2
      const h = 2.2 + rng() * 1.6
      push(new THREE.CylinderGeometry(0.05, 0.11, 1.8, 5), 0x413628, [Math.sin(a) * 0.55, h, Math.cos(a) * 0.55], [Math.sin(a) * 0.9, a, Math.cos(a) * 0.9])
    }
  } else if (kind === 'sparse') {
    push(new THREE.CylinderGeometry(0.14, 0.24, 1.5, 5), 0x453a26, [0, 0.75, 0])
    for (let i = 0; i < 3; i++) {
      push(new THREE.IcosahedronGeometry(0.8 + rng() * 0.35, 0), i % 2 ? 0x3c522c : 0x4a6032, [(rng() - 0.5) * 1.2, 1.8 + rng() * 0.5, (rng() - 0.5) * 1.2], [rng(), rng(), rng()], [1, 0.8, 1])
    }
  } else {
    // broadleaf
    push(new THREE.CylinderGeometry(0.22, 0.38, 2.8, 6), 0x463823, [0, 1.4, 0])
    const base = 3.1
    for (let i = 0; i < 4; i++) {
      const r = 1.5 + rng() * 0.7
      push(new THREE.IcosahedronGeometry(r, 0), i % 2 ? 0x3d5a2d : 0x4c6a34, [(rng() - 0.5) * 1.9, base + rng() * 1.5, (rng() - 0.5) * 1.9], [rng() * 2, rng() * 2, rng() * 2], [1, 0.9, 1])
    }
  }
  if (!parts.length) return null
  if (parts.length === 1) return parts[0]
  const merged = mergeGeometries(parts, false)
  parts.forEach(g => g.dispose())
  return merged
}

function ruinGeometry(variant, seed) {
  const rng = mulberry32(seed + variant * 91)
  const parts = []
  const stone = [0x6d6759, 0x7a7263, 0x615c50][variant % 3]
  const dark = 0x4e4a41
  const push = (geo, color, pos, rot = [0, 0, 0], scale = [1, 1, 1]) => {
    const g = geo.clone()
    g.scale(scale[0], scale[1], scale[2])
    g.rotateX(rot[0]); g.rotateY(rot[1]); g.rotateZ(rot[2])
    g.translate(pos[0], pos[1], pos[2])
    colorAttr(g, color)
    parts.push(g)
  }
  push(new THREE.BoxGeometry(9, 0.4, 9), 0x5b564a, [0, 0.2, 0])
  const h1 = 3 + rng() * 2.5
  // front wall with a gap
  push(new THREE.BoxGeometry(3.0, h1, 0.55), stone, [-2.6, h1 / 2, 4.3])
  push(new THREE.BoxGeometry(2.2, h1 * 0.6, 0.55), stone, [2.6, h1 * 0.3, 4.3])
  // side wall
  push(new THREE.BoxGeometry(0.55, h1 * 0.85, 5.0), stone, [-4.3, h1 * 0.42, 1.4])
  push(new THREE.BoxGeometry(0.55, h1 * 0.5, 2.2), stone, [4.3, h1 * 0.25, -2.4])
  // interior stub
  push(new THREE.BoxGeometry(0.45, 2.2, 3.2), dark, [0.6, 1.1, -0.8])
  // rubble
  for (let i = 0; i < 9; i++) {
    const s = 0.3 + rng() * 0.9
    push(new THREE.BoxGeometry(s, s * 0.7, s * 1.2), i % 2 ? stone : dark, [(rng() - 0.5) * 8, s * 0.35, (rng() - 0.5) * 8], [rng(), rng() * 3, rng()])
  }
  // broken beams
  push(new THREE.BoxGeometry(0.28, 0.28, 4.2), 0x4a3b28, [1.4, h1 * 0.55, 2.0], [0.4, 0.7, 0.2])
  return parts
}

// ------------------------------------------------------------
// Main world
// ------------------------------------------------------------
export function createWorld(scene, mapDef, options = {}) {
  const size = options.size || 280
  const half = size / 2
  const segments = options.segments || 120
  const seed = options.seed || 1337
  const bases = options.bases || [BASE_POSITIONS.player, BASE_POSITIONS.enemy]
  const avoid = options.avoid || []
  const withFog = options.fog !== false
  const withProps = options.props !== false
  const bounds = half - 16
  const baseElev = 0.6

  const heightAt = (x, z) => {
    const scale = mapDef.height.scale
    let h = (fbm(x * scale, z * scale, seed) - 0.5) * mapDef.height.amp * 2
    h += (fbm(x * scale * 0.32 + 41, z * scale * 0.32 - 17, seed + 4, 3) - 0.5) * mapDef.height.amp * 0.9
    for (const b of bases) {
      const d = Math.hypot(x - b.x, z - b.z)
      if (d < 52) {
        const t = smoothstep(15, 52, d)
        h = lerp(baseElev, h, t)
      }
    }
    return h
  }

  // ---- sky ----
  const sky = new Sky()
  sky.scale.setScalar(6000)
  const u = sky.material.uniforms
  u.turbidity.value = mapDef.sky.turbidity
  u.rayleigh.value = mapDef.sky.rayleigh
  u.mieCoefficient.value = mapDef.sky.mie
  u.mieDirectionalG.value = mapDef.sky.g
  const phi = THREE.MathUtils.degToRad(90 - mapDef.sky.elevation)
  const theta = THREE.MathUtils.degToRad(mapDef.sky.azimuth)
  const sunDir = new THREE.Vector3().setFromSphericalCoords(1, phi, theta)
  u.sunPosition.value.copy(sunDir)
  scene.add(sky)

  scene.fog = new THREE.FogExp2(mapDef.fog.color, mapDef.fog.density)
  scene.background = new THREE.Color(mapDef.fog.color).multiplyScalar(0.55)

  const hemi = new THREE.HemisphereLight(mapDef.hemi.sky, mapDef.hemi.ground, mapDef.hemi.intensity)
  scene.add(hemi)
  const sun = new THREE.DirectionalLight(mapDef.sun.color, mapDef.sun.intensity)
  sun.position.copy(sunDir).multiplyScalar(180)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  const sc = sun.shadow.camera
  sc.left = -145; sc.right = 145; sc.top = 145; sc.bottom = -145; sc.near = 1; sc.far = 520
  sun.shadow.bias = -0.0008
  sun.shadow.normalBias = 0.55
  scene.add(sun)
  scene.add(sun.target)
  const fill = new THREE.DirectionalLight(0x9fb0c8, 0.35)
  fill.position.set(-80, 60, -60)
  scene.add(fill)

  // ---- terrain ----
  const geo = new THREE.PlaneGeometry(size, size, segments, segments)
  geo.rotateX(-Math.PI / 2)
  const pos = geo.attributes.position
  const colors = new Float32Array(pos.count * 3)
  const cLow = new THREE.Color(mapDef.ground.low)
  const cHigh = new THREE.Color(mapDef.ground.high)
  const cDirt = new THREE.Color(mapDef.ground.dirt)
  const cRock = new THREE.Color(mapDef.ground.rock)
  const tmp = new THREE.Color()
  const tmp2 = new THREE.Color()
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i)
    const y = heightAt(x, z)
    pos.setY(i, y)
    const t = clamp((y + mapDef.height.amp) / (mapDef.height.amp * 2), 0, 1)
    const n = fbm(x * 0.09 + 11, z * 0.09 - 3, seed + 7, 3)
    tmp.copy(cLow).lerp(cHigh, clamp(t * 0.7 + n * 0.5, 0, 1))
    const sx = heightAt(x + 1.5, z) - heightAt(x - 1.5, z)
    const sz = heightAt(x, z + 1.5) - heightAt(x, z - 1.5)
    const slope = Math.hypot(sx, sz) / 3
    if (slope > 0.28) tmp.lerp(cRock, clamp((slope - 0.28) * 1.6, 0, 0.7))
    for (const b of bases) {
      const d = Math.hypot(x - b.x, z - b.z)
      if (d < 40) tmp.lerp(cDirt, smoothstep(40, 14, d) * 0.32)
    }
    // subtle large-scale patchwork
    tmp2.copy(cDirt)
    tmp.lerp(tmp2, (fbm(x * 0.03 + 71, z * 0.03 + 23, seed + 19, 2) - 0.5) * 0.16)
    const shade = 0.92 + n * 0.16
    colors[i * 3] = tmp.r * shade
    colors[i * 3 + 1] = tmp.g * shade
    colors[i * 3 + 2] = tmp.b * shade
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geo.computeVertexNormals()
  const textures = makeGroundTextures(seed)
  textures.map.repeat.set(38, 38)
  textures.normal.repeat.set(38, 38)
  textures.normal.normalScale = new THREE.Vector2(0.55, 0.55)
  const terrainMat = new THREE.MeshStandardMaterial({
    vertexColors: true, map: textures.map, normalMap: textures.normal,
    roughness: 0.97, metalness: 0.0, normalScale: new THREE.Vector2(0.45, 0.45)
  })
  const terrain = new THREE.Mesh(geo, terrainMat)
  terrain.receiveShadow = true
  terrain.name = 'terrain'
  scene.add(terrain)

  // base pads
  for (const b of bases) {
    const pad = new THREE.Mesh(
      new THREE.CircleGeometry(24, 40),
      new THREE.MeshStandardMaterial({ color: mapDef.ground.dirt, roughness: 1, transparent: true, opacity: 0.34, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 })
    )
    pad.rotation.x = -Math.PI / 2
    pad.position.set(b.x, heightAt(b.x, b.z) + 0.09, b.z)
    pad.receiveShadow = true
    scene.add(pad)
  }

  // ---- distant hills ----
  const hillMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(mapDef.ground.high).multiplyScalar(0.55), roughness: 1, flatShading: true })
  const hillGeos = []
  const hillRng = mulberry32(seed + 55)
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2 + hillRng() * 0.2
    const r = 190 + hillRng() * 40
    const g = new THREE.ConeGeometry(24 + hillRng() * 30, 22 + hillRng() * 34, 7, 1)
    g.rotateY(hillRng() * 3)
    g.translate(Math.cos(a) * r, -4, Math.sin(a) * r)
    hillGeos.push(g)
  }
  const hillGeo = mergeGeometries(hillGeos)
  if (hillGeo) {
    const hills = new THREE.Mesh(hillGeo, hillMat)
    hills.receiveShadow = false
    scene.add(hills)
  }

  // ---- props ----
  const propGroup = new THREE.Group()
  scene.add(propGroup)
  const rng = mulberry32(seed + 321)
  const avoidAll = [
    ...bases.map(b => ({ x: b.x, z: b.z, r: 36 })),
    ...avoid
  ]
  const freeSpot = (x, z, r = 0) => {
    if (Math.abs(x) > bounds - 4 || Math.abs(z) > bounds - 4) return false
    for (const a of avoidAll) if (Math.hypot(x - a.x, z - a.z) < a.r + r) return false
    return true
  }

  if (withProps) {
    // trees
    const treeKind = mapDef.props.tree
    const density = mapDef.props.treeDensity
    if (treeKind !== 'none' && density > 0) {
      const variants = treeKind === 'sparse' ? 2 : 3
      for (let v = 0; v < variants; v++) {
        const parts = []
        for (let i = 0; i < (treeKind === 'pine' ? 3 : treeKind === 'palm' ? 3 : 2); i++) {
          const base = treeGeometry(treeKind, v * 3 + i)
          if (base) parts.push(base)
        }
        if (!parts.length) continue
        const merged = parts.length > 1 ? mergeGeometries(parts) : parts[0]
        if (!merged) continue
        const count = Math.ceil(density / variants)
        const inst = new THREE.InstancedMesh(merged, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.94, metalness: 0.0 }), count)
        inst.castShadow = true
        inst.receiveShadow = true
        const m = new THREE.Matrix4()
        const q = new THREE.Quaternion()
        const s = new THREE.Vector3()
        const p = new THREE.Vector3()
        let placed = 0
        let guard = 0
        while (placed < count && guard++ < count * 30) {
          const x = (rng() * 2 - 1) * bounds
          const z = (rng() * 2 - 1) * bounds
          if (!freeSpot(x, z, 2)) continue
          const scale = 0.8 + rng() * 0.65
          p.set(x, heightAt(x, z) - 0.1, z)
          q.setFromAxisAngle(UP, rng() * Math.PI * 2)
          s.set(scale, scale * (0.9 + rng() * 0.25), scale)
          m.compose(p, q, s)
          inst.setMatrixAt(placed, m)
          placed++
        }
        inst.count = placed
        inst.instanceMatrix.needsUpdate = true
        propGroup.add(inst)
      }
    }

    // rocks
    if (mapDef.props.rocks > 0) {
      const rockGeo = new THREE.IcosahedronGeometry(1, 0)
      colorAttr(rockGeo, 0xffffff)
      const rockMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, flatShading: true })
      const inst = new THREE.InstancedMesh(rockGeo, rockMat, mapDef.props.rocks)
      inst.castShadow = true
      inst.receiveShadow = true
      const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3()
      const c = new THREE.Color()
      let placed = 0, guard = 0
      while (placed < mapDef.props.rocks && guard++ < 600) {
        const x = (rng() * 2 - 1) * bounds
        const z = (rng() * 2 - 1) * bounds
        if (!freeSpot(x, z, 1)) continue
        const sc = 0.5 + rng() * 1.7
        p.set(x, heightAt(x, z) + sc * 0.18, z)
        q.setFromEuler(new THREE.Euler(rng() * 3, rng() * 3, rng() * 3))
        s.set(sc, sc * (0.4 + rng() * 0.5), sc * (0.7 + rng() * 0.6))
        m.compose(p, q, s)
        inst.setMatrixAt(placed, m)
        c.setHex(mapDef.biome.includes('snow') ? 0x8e9088 : mapDef.biome === 'desert' ? 0x9a815a : 0x7a7568)
        c.offsetHSL(0, 0, (rng() - 0.5) * 0.08)
        inst.setColorAt(placed, c)
        placed++
      }
      inst.count = placed
      inst.instanceMatrix.needsUpdate = true
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true
      propGroup.add(inst)
    }

    // grass
    if (mapDef.props.grass > 0) {
      const blades = []
      for (let i = 0; i < 4; i++) {
        const g = new THREE.ConeGeometry(0.09, 0.55 + rng() * 0.4, 3)
        g.translate((rng() - 0.5) * 0.5, 0.28, (rng() - 0.5) * 0.5)
        g.rotateZ((rng() - 0.5) * 0.4)
        colorAttr(g, i % 2 ? 0x5e6b3a : 0x76813f)
        blades.push(g)
      }
      const grassGeo = mergeGeometries(blades)
      const grassMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, side: THREE.DoubleSide })
      const inst = new THREE.InstancedMesh(grassGeo, grassMat, mapDef.props.grass)
      const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3()
      let placed = 0, guard = 0
      while (placed < mapDef.props.grass && guard++ < mapDef.props.grass * 15) {
        const x = (rng() * 2 - 1) * bounds
        const z = (rng() * 2 - 1) * bounds
        if (!freeSpot(x, z, 0.5)) continue
        const sc = 0.7 + rng() * 1.5
        p.set(x, heightAt(x, z), z)
        q.setFromAxisAngle(UP, rng() * 6.28)
        s.set(sc, sc, sc)
        m.compose(p, q, s)
        inst.setMatrixAt(placed, m)
        placed++
      }
      inst.count = placed
      inst.instanceMatrix.needsUpdate = true
      propGroup.add(inst)
    }

    // hedgerows
    if (mapDef.props.hedges > 0) {
      const hedgeParts = []
      for (let i = 0; i < mapDef.props.hedges; i++) {
        let x, z, guard = 0
        do { x = (rng() * 2 - 1) * bounds * 0.9; z = (rng() * 2 - 1) * bounds * 0.9 } while (!freeSpot(x, z, 4) && guard++ < 60)
        const len = 12 + rng() * 22
        const ang = rng() * Math.PI
        const segs = Math.floor(len / 3)
        for (let sI = 0; sI < segs; sI++) {
          const g = new THREE.BoxGeometry(3.1, 1.4 + rng() * 0.5, 2.2)
          g.rotateY(ang)
          g.translate(x + Math.cos(ang) * (sI * 3 - len / 2), heightAt(x, z) + 0.65, z + Math.sin(ang) * (sI * 3 - len / 2))
          colorAttr(g, sI % 3 ? 0x3b4b29 : 0x475a30)
          hedgeParts.push(g)
        }
      }
      if (hedgeParts.length) {
        const hedgeGeo = mergeGeometries(hedgeParts)
        const hedge = new THREE.Mesh(hedgeGeo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }))
        hedge.castShadow = true
        hedge.receiveShadow = true
        propGroup.add(hedge)
      }
    }

    // ruins
    if (mapDef.props.ruins > 0) {
      const ruinParts = []
      for (let i = 0; i < mapDef.props.ruins; i++) {
        let x, z, guard = 0
        do { x = (rng() * 2 - 1) * bounds * 0.92; z = (rng() * 2 - 1) * bounds * 0.92 } while (!freeSpot(x, z, 6) && guard++ < 60)
        const parts = ruinGeometry(i % 3, seed + i)
        const rot = rng() * Math.PI * 2
        for (const g of parts) {
          g.rotateY(rot)
          g.translate(x, heightAt(x, z), z)
          ruinParts.push(g)
        }
      }
      if (ruinParts.length) {
        const ruinGeo = mergeGeometries(ruinParts)
        const ruins = new THREE.Mesh(ruinGeo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96 }))
        ruins.castShadow = true
        ruins.receiveShadow = true
        propGroup.add(ruins)
      }
    }

    // craters
    if (mapDef.props.craters > 0) {
      const craterParts = []
      for (let i = 0; i < mapDef.props.craters; i++) {
        let x, z, guard = 0
        do { x = (rng() * 2 - 1) * bounds * 0.95; z = (rng() * 2 - 1) * bounds * 0.95 } while (!freeSpot(x, z, 1) && guard++ < 60)
        const r = 1.2 + rng() * 2.4
        const disc = new THREE.CircleGeometry(r, 10)
        disc.rotateX(-Math.PI / 2)
        disc.translate(x, heightAt(x, z) + 0.06, z)
        colorAttr(disc, 0x2e2b22)
        craterParts.push(disc)
        const rim = new THREE.RingGeometry(r * 0.86, r * 1.05, 10)
        rim.rotateX(-Math.PI / 2)
        rim.translate(x, heightAt(x, z) + 0.075, z)
        colorAttr(rim, 0x5e5642)
        craterParts.push(rim)
      }
      if (craterParts.length) {
        const craterGeo = mergeGeometries(craterParts)
        const craters = new THREE.Mesh(craterGeo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1, side: THREE.DoubleSide }))
        craters.receiveShadow = true
        propGroup.add(craters)
      }
    }
  }

  // ---- weather / atmosphere ----
  const weather = createWeather(scene, mapDef, size)

  // ---- fog of war ----
  const fog = withFog ? createFog(scene, geo, mapDef, size) : null

  // ---- minimap bake ----
  const minimapBase = bakeMinimap(mapDef, heightAt, size, bases)

  return {
    scene, terrain, geo, heightAt, size, half, bounds, bases, sky, sun, hemi,
    fog, weather, propGroup, minimapBase, mapDef,
    update(dt) { weather.update(dt); if (fog) fog.tick(dt) }
  }
}

// ------------------------------------------------------------
// Weather
// ------------------------------------------------------------
function createWeather(scene, mapDef, size) {
  const snow = mapDef.biome.includes('snow')
  const desert = mapDef.biome === 'desert'
  const count = snow ? 900 : desert ? 380 : 140
  const positions = new Float32Array(count * 3)
  const speeds = new Float32Array(count)
  const rng = mulberry32(777)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (rng() * 2 - 1) * size * 0.55
    positions[i * 3 + 1] = rng() * (snow ? 55 : 20) + (desert ? 0 : 2)
    positions[i * 3 + 2] = (rng() * 2 - 1) * size * 0.55
    speeds[i] = 1.2 + rng() * (snow ? 3.2 : 1.0)
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({
    color: snow ? 0xe8eef2 : desert ? 0xd8c8a2 : 0xd8d2b8,
    size: snow ? 0.5 : desert ? 0.35 : 0.22,
    transparent: true,
    opacity: snow ? 0.75 : desert ? 0.32 : 0.2,
    depthWrite: false,
    sizeAttenuation: true,
    fog: true
  })
  const points = new THREE.Points(geo, mat)
  points.frustumCulled = false
  scene.add(points)
  let t = 0
  const wind = desert ? 4.5 : 1.3
  return {
    points,
    update(dt) {
      t += dt
      const p = geo.attributes.position.array
      for (let i = 0; i < count; i++) {
        p[i * 3] += wind * dt * (0.4 + (i % 5) * 0.12)
        p[i * 3 + 1] -= speeds[i] * dt
        p[i * 3 + 2] += Math.sin(t * 0.4 + i) * dt * (desert ? 1.4 : 0.35)
        if (p[i * 3 + 1] < (desert ? 0.3 : -1)) {
          p[i * 3 + 1] = snow ? 42 + Math.random() * 10 : 14 + Math.random() * 6
          p[i * 3] = (Math.random() * 2 - 1) * size * 0.55
          p[i * 3 + 2] = (Math.random() * 2 - 1) * size * 0.55
        }
        if (p[i * 3] > size * 0.56) p[i * 3] = -size * 0.56
      }
      geo.attributes.position.needsUpdate = true
    }
  }
}

// ------------------------------------------------------------
// Fog of war
// ------------------------------------------------------------
function createFog(scene, terrainGeo, mapDef, size) {
  const N = 96
  const vis = new Float32Array(N * N)
  const explored = new Float32Array(N * N)
  const data = new Uint8Array(N * N * 4)
  for (let i = 0; i < N * N; i++) {
    data[i * 4] = 4; data[i * 4 + 1] = 6; data[i * 4 + 2] = 7; data[i * 4 + 3] = 225
  }
  const tex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat)
  tex.minFilter = THREE.LinearFilter
  tex.magFilter = THREE.LinearFilter
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping
  tex.flipY = true
  tex.needsUpdate = true
  const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, color: 0xffffff, opacity: 1, side: THREE.FrontSide })
  const mesh = new THREE.Mesh(terrainGeo.clone(), mat)
  mesh.position.y = 0.34
  mesh.renderOrder = 4
  mesh.frustumCulled = false
  scene.add(mesh)

  const cellSize = size / N
  const half = size / 2
  let timer = 0
  let revealed = false
  const sources = []

  function cellAt(x, z) {
    const gx = clamp(Math.floor((x + half) / cellSize), 0, N - 1)
    const gz = clamp(Math.floor((z + half) / cellSize), 0, N - 1)
    return [gx, gz]
  }
  function isVisible(x, z) {
    if (revealed) return true
    const [gx, gz] = cellAt(x, z)
    return vis[gz * N + gx] > 0.12
  }
  function isExplored(x, z) {
    if (revealed) return true
    const [gx, gz] = cellAt(x, z)
    return explored[gz * N + gx] > 0.5
  }
  function reveal(x, z, radius, strength = 1) {
    const [cx, cz] = cellAt(x, z)
    const rc = Math.ceil(radius / cellSize)
    for (let dz = -rc; dz <= rc; dz++) {
      const gz = cz + dz
      if (gz < 0 || gz >= N) continue
      for (let dx = -rc; dx <= rc; dx++) {
        const gx = cx + dx
        if (gx < 0 || gx >= N) continue
        const d = Math.hypot(dx * cellSize, dz * cellSize)
        if (d > radius) continue
        const v = (1 - smoothstep(radius * 0.62, radius, d) * 0.72) * strength
        const idx = gz * N + gx
        if (v > vis[idx]) vis[idx] = v
        if (v > 0.12) explored[idx] = 1
      }
    }
  }
  function update() {
    vis.fill(0)
    for (const s of sources) reveal(s.x, s.z, s.r)
    for (let i = 0; i < N * N; i++) {
      const a = vis[i] > 0.12 ? 0 : explored[i] > 0.5 ? 118 : 228
      data[i * 4 + 3] = a
    }
    tex.needsUpdate = true
  }
  function tick(dt) {
    timer += dt
    if (timer < 0.22) return
    timer = 0
    update()
  }
  function setSources(list) {
    sources.length = 0
    for (const s of list) sources.push(s)
  }
  function revealAll() {
    revealed = true
    explored.fill(1)
    vis.fill(1)
    for (let i = 0; i < N * N; i++) data[i * 4 + 3] = 0
    tex.needsUpdate = true
    mesh.visible = false
  }
  return { N, vis, explored, cellSize, half, isVisible, isExplored, setSources, update, tick, revealAll, mesh, texture: tex, sources, reveal }
}

// ------------------------------------------------------------
// Minimap bake
// ------------------------------------------------------------
function bakeMinimap(mapDef, heightAt, size, bases) {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const g = c.getContext('2d')
  const low = new THREE.Color(mapDef.ground.low)
  const high = new THREE.Color(mapDef.ground.high)
  const dirt = new THREE.Color(mapDef.ground.dirt)
  const rock = new THREE.Color(mapDef.ground.rock)
  const tmp = new THREE.Color()
  const step = 2
  for (let y = 0; y < 256; y += step) {
    for (let x = 0; x < 256; x += step) {
      const wx = (x / 256 - 0.5) * size
      const wz = (y / 256 - 0.5) * size
      const h = heightAt(wx, wz)
      const t = clamp((h + mapDef.height.amp) / (mapDef.height.amp * 2), 0, 1)
      tmp.copy(low).lerp(high, t)
      const shade = 0.82 + (heightAt(wx - 2, wz - 2) - h) * 0.06
      tmp.multiplyScalar(clamp(shade, 0.65, 1.15))
      for (const b of bases) {
        const d = Math.hypot(wx - b.x, wz - b.z)
        if (d < 26) tmp.lerp(dirt, smoothstep(26, 12, d) * 0.45)
      }
      g.fillStyle = `rgb(${Math.round(tmp.r * 255)},${Math.round(tmp.g * 255)},${Math.round(tmp.b * 255)})`
      g.fillRect(x, y, step, step)
    }
  }
  // grid + border
  g.strokeStyle = 'rgba(220,210,180,0.07)'
  g.lineWidth = 1
  for (let i = 0; i <= 256; i += 32) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.stroke()
    g.beginPath(); g.moveTo(0, i); g.lineTo(256, i); g.stroke()
  }
  return c
}
