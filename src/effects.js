// ============================================================
// IRON FRONT — battlefield effects
// pooled sprites, tracers, explosions, smoke, wrecks, decals
// ============================================================
import * as THREE from 'three'

function radialTexture(inner, outer, stops) {
  const c = document.createElement('canvas')
  c.width = c.height = 64
  const g = c.getContext('2d')
  const grd = g.createRadialGradient(32, 32, inner, 32, 32, 32)
  for (const [p, col] of stops) grd.addColorStop(p, col)
  g.fillStyle = grd
  g.fillRect(0, 0, 64, 64)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

function smokeTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 64
  const g = c.getContext('2d')
  g.clearRect(0, 0, 64, 64)
  for (let i = 0; i < 14; i++) {
    const x = 18 + Math.random() * 28
    const y = 18 + Math.random() * 28
    const r = 8 + Math.random() * 14
    const grd = g.createRadialGradient(x, y, 0, x, y, r)
    grd.addColorStop(0, 'rgba(255,255,255,0.5)')
    grd.addColorStop(1, 'rgba(255,255,255,0)')
    g.fillStyle = grd
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill()
  }
  const t = new THREE.CanvasTexture(c)
  return t
}

export class Effects {
  constructor(scene) {
    this.scene = scene
    this.tex = {
      smoke: smokeTexture(),
      flash: radialTexture(0, 32, [[0, 'rgba(255,255,235,1)'], [0.22, 'rgba(255,215,130,0.95)'], [0.55, 'rgba(255,120,30,0.5)'], [1, 'rgba(120,40,0,0)']]),
      spark: radialTexture(0, 32, [[0, 'rgba(255,255,220,1)'], [0.4, 'rgba(255,180,60,0.8)'], [1, 'rgba(255,80,0,0)']]),
      dust: radialTexture(0, 32, [[0, 'rgba(190,175,140,0.55)'], [1, 'rgba(150,135,100,0)']])
    }
    this.sprites = []
    for (let i = 0; i < 260; i++) {
      const mat = new THREE.SpriteMaterial({ map: this.tex.smoke, transparent: true, depthWrite: false, opacity: 0, blending: THREE.NormalBlending })
      const sp = new THREE.Sprite(mat)
      sp.visible = false
      sp.renderOrder = 8
      scene.add(sp)
      this.sprites.push({ sp, active: false, life: 0, max: 1, vx: 0, vy: 0, vz: 0, s0: 1, s1: 2, o0: 1, o1: 0, spin: 0, gravity: 0, additive: false })
    }
    this.spriteIndex = 0

    // tracers
    const maxSeg = 320
    this.maxSeg = maxSeg
    this.tracerPos = new Float32Array(maxSeg * 6)
    this.tracerCol = new Float32Array(maxSeg * 6)
    this.tracers = []
    const tgeo = new THREE.BufferGeometry()
    tgeo.setAttribute('position', new THREE.BufferAttribute(this.tracerPos, 3))
    tgeo.setAttribute('color', new THREE.BufferAttribute(this.tracerCol, 3))
    tgeo.setDrawRange(0, 0)
    this.tracerGeo = tgeo
    this.tracerMesh = new THREE.LineSegments(tgeo, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false
    }))
    this.tracerMesh.frustumCulled = false
    this.tracerMesh.renderOrder = 9
    scene.add(this.tracerMesh)

    // shockwave rings
    this.rings = []
    for (let i = 0; i < 18; i++) {
      const geo = new THREE.RingGeometry(0.72, 1, 28)
      geo.rotateX(-Math.PI / 2)
      const mat = new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
      const m = new THREE.Mesh(geo, mat)
      m.visible = false
      m.renderOrder = 7
      scene.add(m)
      this.rings.push({ mesh: m, active: false, life: 0, max: 1, scale0: 1, scale1: 5 })
    }
    this.ringIndex = 0

    // point lights
    this.lights = []
    for (let i = 0; i < 4; i++) {
      const l = new THREE.PointLight(0xffb45e, 0, 42, 2)
      l.visible = false
      scene.add(l)
      this.lights.push({ light: l, life: 0, max: 0.4, intensity: 0 })
    }
    this.lightIndex = 0

    // wrecks
    this.wrecks = []
    this.rubble = []
    this.wreckMat = new THREE.MeshStandardMaterial({ color: 0x25251f, roughness: 0.9, metalness: 0.2 })

    // ground decals
    this.decals = []
    const dgeo = new THREE.CircleGeometry(1, 18)
    dgeo.rotateX(-Math.PI / 2)
    for (let i = 0; i < 46; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: 0x18160f, transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 })
      const m = new THREE.Mesh(dgeo, mat)
      m.visible = false
      m.renderOrder = 2
      scene.add(m)
      this.decals.push({ mesh: m, active: false, life: 0, max: 60 })
    }
    this.decalIndex = 0

    this.shake = 0
    this.time = 0
  }

  sprite(type, pos, opts = {}) {
    const s = this.sprites[this.spriteIndex]
    this.spriteIndex = (this.spriteIndex + 1) % this.sprites.length
    s.active = true
    s.life = 0
    s.max = opts.life || 1
    s.sp.material.map = this.tex[type] || this.tex.smoke
    s.sp.material.blending = opts.additive ? THREE.AdditiveBlending : THREE.NormalBlending
    s.sp.material.color.setHex(opts.color || 0xffffff)
    s.sp.material.rotation = Math.random() * Math.PI * 2
    s.sp.material.opacity = opts.opacity ?? 1
    s.sp.position.copy(pos)
    s.sp.scale.setScalar(opts.scale || 1)
    s.sp.visible = true
    s.vx = opts.vx || 0; s.vy = opts.vy || 0; s.vz = opts.vz || 0
    s.s0 = opts.scale || 1
    s.s1 = opts.scale1 ?? s.s0 * 2
    s.o0 = opts.opacity ?? 1
    s.o1 = opts.opacity1 ?? 0
    s.gravity = opts.gravity || 0
    s.spin = opts.spin || 0
    s.additive = !!opts.additive
    return s
  }

  muzzle(pos, dir, scale = 1) {
    this.sprite('flash', pos, { scale: 0.7 * scale, scale1: 1.7 * scale, life: 0.09, opacity: 1, additive: true, spin: 3 })
    for (let i = 0; i < 3; i++) {
      this.sprite('spark', pos, {
        scale: 0.16 * scale, scale1: 0.04, life: 0.16 + Math.random() * 0.1,
        vx: dir.x * 7 + (Math.random() - 0.5) * 4,
        vy: dir.y * 7 + Math.random() * 3,
        vz: dir.z * 7 + (Math.random() - 0.5) * 4,
        additive: true, gravity: -9
      })
    }
  }

  tracer(from, to, color = 0xffd27a, life = 0.1) {
    if (this.tracers.length >= this.maxSeg) this.tracers.shift()
    this.tracers.push({
      ax: from.x, ay: from.y, az: from.z,
      bx: to.x + (Math.random() - 0.5) * 0.6,
      by: to.y + (Math.random() - 0.5) * 0.6,
      bz: to.z + (Math.random() - 0.5) * 0.6,
      life, max: life,
      r: ((color >> 16) & 255) / 255, g: ((color >> 8) & 255) / 255, b: (color & 255) / 255
    })
  }

  impact(pos, scale = 1) {
    for (let i = 0; i < 5; i++) {
      this.sprite('spark', pos, {
        scale: 0.2 * scale, scale1: 0.03, life: 0.25 + Math.random() * 0.2,
        vx: (Math.random() - 0.5) * 9, vy: 2 + Math.random() * 6, vz: (Math.random() - 0.5) * 9,
        additive: true, gravity: -12
      })
    }
    this.sprite('dust', pos, { scale: 0.9 * scale, scale1: 2.2 * scale, life: 0.7, opacity: 0.5, vy: 0.6 })
  }

  explosion(pos, scale = 1, ground = true) {
    const s = scale
    this.sprite('flash', pos, { scale: 2.2 * s, scale1: 5.5 * s, life: 0.18, opacity: 1, additive: true, spin: 2 })
    for (let i = 0; i < 10; i++) {
      const a = Math.random() * Math.PI * 2
      const sp = 2 + Math.random() * 5
      this.sprite('smoke', new THREE.Vector3(pos.x + (Math.random() - 0.5) * s, pos.y + Math.random() * 1.4 * s, pos.z + (Math.random() - 0.5) * s), {
        scale: (1.2 + Math.random() * 1.6) * s,
        scale1: (3 + Math.random() * 3.5) * s,
        life: 1.4 + Math.random() * 1.6,
        opacity: 0.55,
        opacity1: 0,
        vx: Math.cos(a) * sp, vy: 1.6 + Math.random() * 2.4, vz: Math.sin(a) * sp,
        color: i % 3 === 0 ? 0x6b5a45 : 0x8a8272,
        spin: (Math.random() - 0.5) * 0.8
      })
    }
    for (let i = 0; i < 12; i++) {
      this.sprite('spark', pos, {
        scale: 0.3 * s, scale1: 0.02, life: 0.4 + Math.random() * 0.5,
        vx: (Math.random() - 0.5) * 18 * s, vy: 4 + Math.random() * 12 * s, vz: (Math.random() - 0.5) * 18 * s,
        additive: true, gravity: -20
      })
    }
    this.ring(pos, 2.4 * s, 9 * s, 0.55)
    this.light(pos, 0.5, 22 * s)
    if (ground) this.decal(pos, 2.2 * s)
    this.shake = Math.max(this.shake, Math.min(1.2, 0.35 * s))
  }

  bigExplosion(pos, scale = 1.6) {
    this.explosion(pos, scale)
    this.sprite('flash', pos, { scale: 4 * scale, scale1: 11 * scale, life: 0.28, opacity: 1, additive: true, spin: 1.4 })
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * Math.PI * 2
      this.sprite('smoke', pos, {
        scale: 2.4 * scale, scale1: 7 * scale, life: 2.6 + Math.random() * 2,
        opacity: 0.5, opacity1: 0,
        vx: Math.cos(a) * 3.5, vy: 2.2 + Math.random() * 2, vz: Math.sin(a) * 3.5,
        color: 0x4a4438, spin: (Math.random() - 0.5) * 0.5
      })
    }
    this.ring(pos, 3.5 * scale, 17 * scale, 0.8)
    this.light(pos, 0.8, 50 * scale)
    this.shake = Math.max(this.shake, 1.0)
  }

  ring(pos, s0, s1, opacity) {
    const r = this.rings[this.ringIndex]
    this.ringIndex = (this.ringIndex + 1) % this.rings.length
    r.active = true; r.life = 0; r.max = 0.65; r.scale0 = s0; r.scale1 = s1
    r.mesh.visible = true
    r.mesh.position.copy(pos)
    r.mesh.position.y = Math.max(pos.y, 0.4)
    r.mesh.scale.setScalar(s0)
    r.mesh.material.opacity = opacity
  }

  light(pos, life, intensity) {
    const l = this.lights[this.lightIndex]
    this.lightIndex = (this.lightIndex + 1) % this.lights.length
    l.life = 0; l.max = life; l.intensity = intensity
    l.light.position.copy(pos)
    l.light.position.y += 2
    l.light.intensity = intensity
    l.light.visible = true
  }

  decal(pos, radius) {
    const d = this.decals[this.decalIndex]
    this.decalIndex = (this.decalIndex + 1) % this.decals.length
    d.active = true; d.life = 0; d.max = 70
    d.mesh.visible = true
    d.mesh.position.set(pos.x, Math.max(0.15, pos.y) + 0.06, pos.z)
    d.mesh.scale.setScalar(radius * (0.8 + Math.random() * 0.4))
    d.mesh.rotation.y = Math.random() * Math.PI
    d.mesh.material.opacity = 0.55
  }

  dust(pos, scale = 1) {
    this.sprite('dust', pos, {
      scale: 0.8 * scale, scale1: 2.1 * scale, life: 0.9,
      opacity: 0.26, opacity1: 0, vy: 0.7,
      vx: (Math.random() - 0.5) * 1.4, vz: (Math.random() - 0.5) * 1.4
    })
  }

  smokePuff(pos, scale = 1, dark = false) {
    this.sprite('smoke', pos, {
      scale: 0.8 * scale, scale1: 2.6 * scale, life: 1.8,
      opacity: 0.35, opacity1: 0,
      vy: 1.2, color: dark ? 0x3a352c : 0x8f8776, spin: (Math.random() - 0.5) * 0.4
    })
  }

  addWreck(hullGeo, pos, rotY, tint = 0x22221c) {
    if (!hullGeo) return
    const mat = this.wreckMat.clone()
    mat.color.setHex(tint)
    const mesh = new THREE.Mesh(hullGeo, mat)
    mesh.position.set(pos.x, pos.y + 0.12, pos.z)
    mesh.rotation.y = rotY
    mesh.rotation.z = (Math.random() - 0.5) * 0.1
    mesh.castShadow = true
    mesh.receiveShadow = true
    this.scene.add(mesh)
    this.wrecks.push({ mesh, smoke: 5 + Math.random() * 4, timer: 0 })
    if (this.wrecks.length > 34) {
      const old = this.wrecks.shift()
      this.scene.remove(old.mesh)
      old.mesh.material.dispose()
    }
  }

  addRubble(geo, pos, rotY) {
    if (!geo) return
    const mat = new THREE.MeshStandardMaterial({ color: 0x4a463c, roughness: 1, metalness: 0 })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(pos.x, pos.y + 0.15, pos.z)
    mesh.rotation.y = rotY
    mesh.scale.set(1.02, 0.32, 1.02)
    mesh.castShadow = true
    mesh.receiveShadow = true
    this.scene.add(mesh)
    this.rubble.push({ mesh, life: 0, max: 90, smoke: 4 })
    if (this.rubble.length > 18) {
      const old = this.rubble.shift()
      this.scene.remove(old.mesh)
      old.mesh.material.dispose()
    }
  }

  buildSparks(pos) {
    for (let i = 0; i < 2; i++) {
      this.sprite('spark', pos, {
        scale: 0.16, scale1: 0.02, life: 0.22 + Math.random() * 0.2,
        vx: (Math.random() - 0.5) * 5, vy: 1.5 + Math.random() * 3, vz: (Math.random() - 0.5) * 5,
        additive: true, gravity: -9
      })
    }
    this.sprite('dust', pos, { scale: 0.5, scale1: 1.3, life: 0.6, opacity: 0.25, vy: 0.4 })
  }

  bigExplosionSmoke(pos) {
    for (let i = 0; i < 4; i++) {
      this.sprite('smoke', pos, {
        scale: 1.2, scale1: 3.4, life: 2.2, opacity: 0.32, opacity1: 0,
        vx: (Math.random() - 0.5) * 1.4, vy: 1.2, vz: (Math.random() - 0.5) * 1.4, color: 0x8a8272
      })
    }
  }

  update(dt, camera) {
    this.time += dt
    for (const s of this.sprites) {
      if (!s.active) continue
      s.life += dt
      const t = s.life / s.max
      if (t >= 1) {
        s.active = false
        s.sp.visible = false
        continue
      }
      s.vy += s.gravity * dt
      s.sp.position.x += s.vx * dt
      s.sp.position.y += s.vy * dt
      s.sp.position.z += s.vz * dt
      const k = t * t * (3 - 2 * t)
      const sc = s.s0 + (s.s1 - s.s0) * k
      s.sp.scale.set(sc, sc, 1)
      s.sp.material.opacity = Math.max(0, s.o0 + (s.o1 - s.o0) * t)
      s.sp.material.rotation += s.spin * dt
    }

    // tracers
    let n = 0
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const tr = this.tracers[i]
      tr.life -= dt
      if (tr.life <= 0) { this.tracers.splice(i, 1); continue }
    }
    for (const tr of this.tracers) {
      if (n >= this.maxSeg) break
      const o = n * 6
      this.tracerPos[o] = tr.ax; this.tracerPos[o + 1] = tr.ay; this.tracerPos[o + 2] = tr.az
      this.tracerPos[o + 3] = tr.bx; this.tracerPos[o + 4] = tr.by; this.tracerPos[o + 5] = tr.bz
      const f = Math.max(0, tr.life / tr.max)
      this.tracerCol[o] = tr.r * f; this.tracerCol[o + 1] = tr.g * f; this.tracerCol[o + 2] = tr.b * f
      this.tracerCol[o + 3] = tr.r * f * 0.7; this.tracerCol[o + 4] = tr.g * f * 0.7; this.tracerCol[o + 5] = tr.b * f * 0.7
      n++
    }
    this.tracerGeo.setDrawRange(0, n * 2)
    this.tracerGeo.attributes.position.needsUpdate = true
    this.tracerGeo.attributes.color.needsUpdate = true

    for (const r of this.rings) {
      if (!r.active) continue
      r.life += dt
      const t = r.life / r.max
      if (t >= 1) { r.active = false; r.mesh.visible = false; continue }
      const sc = r.scale0 + (r.scale1 - r.scale0) * Math.sqrt(t)
      r.mesh.scale.setScalar(sc)
      r.mesh.material.opacity = (1 - t) * 0.8
    }
    for (const l of this.lights) {
      if (!l.light.visible) continue
      l.life += dt
      const t = l.life / l.max
      if (t >= 1) { l.light.visible = false; l.light.intensity = 0; continue }
      l.light.intensity = l.intensity * (1 - t) * (1 - t)
    }
    for (const d of this.decals) {
      if (!d.active) continue
      d.life += dt
      if (d.life > d.max) { d.active = false; d.mesh.visible = false; continue }
      if (d.life > d.max - 6) d.mesh.material.opacity = 0.55 * (d.max - d.life) / 6
    }
    for (const w of this.wrecks) {
      w.smoke -= dt
      if (w.smoke > 0) {
        w.timer += dt
        if (w.timer > 0.55) {
          w.timer = 0
          this.smokePuff(new THREE.Vector3(w.mesh.position.x + (Math.random() - 0.5), w.mesh.position.y + 1.2, w.mesh.position.z + (Math.random() - 0.5)), 0.9, true)
        }
      }
    }
    for (const r of this.rubble) {
      r.life += dt
      if (r.smoke > 0) {
        r.smoke -= dt
        if (Math.random() < dt * 0.9) {
          this.smokePuff(new THREE.Vector3(r.mesh.position.x + (Math.random() - 0.5) * 4, r.mesh.position.y + 1.2, r.mesh.position.z + (Math.random() - 0.5) * 4), 1.2, true)
        }
      }
      if (r.life > r.max - 5) r.mesh.material.opacity = Math.max(0, (r.max - r.life) / 5)
      if (r.life >= r.max) {
        this.scene.remove(r.mesh)
        r.mesh.material.dispose()
      }
    }
    this.rubble = this.rubble.filter(r => r.life < r.max)
    this.shake *= Math.pow(0.0025, dt)
    if (this.shake < 0.001) this.shake = 0
  }
}
