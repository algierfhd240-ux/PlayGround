// ============================================================
// IRON FRONT — procedural audio (WebAudio, no external assets)
// ============================================================
export class AudioEngine {
  constructor() {
    this.ctx = null
    this.master = null
    this.noiseBuf = null
    this.ambient = null
    this.muted = localStorage.getItem('ironfront.muted') === '1'
    this.last = {}
    this.started = false
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume()
      return
    }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    this.master = this.ctx.createGain()
    this.master.gain.value = this.muted ? 0 : 0.55
    this.master.connect(this.ctx.destination)
    const len = this.ctx.sampleRate * 2
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate)
    const data = this.noiseBuf.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
    this.started = true
    this.startAmbient()
  }

  setMuted(m) {
    this.muted = m
    localStorage.setItem('ironfront.muted', m ? '1' : '0')
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.55, this.ctx.currentTime, 0.05)
  }
  toggleMute() { this.setMuted(!this.muted); return this.muted }

  gate(key, ms) {
    if (this.muted || !this.ctx) return false
    const now = performance.now()
    if (this.last[key] && now - this.last[key] < ms) return false
    this.last[key] = now
    return true
  }

  noise(duration, gain, filterType, freq, q = 1, freqEnd = null) {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    const src = this.ctx.createBufferSource()
    src.buffer = this.noiseBuf
    src.loop = true
    const f = this.ctx.createBiquadFilter()
    f.type = filterType
    f.frequency.setValueAtTime(freq, t)
    if (freqEnd) f.frequency.exponentialRampToValueAtTime(Math.max(30, freqEnd), t + duration)
    f.Q.value = q
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(gain, t)
    g.gain.exponentialRampToValueAtTime(0.0008, t + duration)
    src.connect(f); f.connect(g); g.connect(this.master)
    src.start(t)
    src.stop(t + duration + 0.02)
  }

  tone(freq, duration, gain, type = 'sine', freqEnd = null, delay = 0) {
    if (!this.ctx) return
    const t = this.ctx.currentTime + delay
    const o = this.ctx.createOscillator()
    o.type = type
    o.frequency.setValueAtTime(freq, t)
    if (freqEnd) o.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), t + duration)
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(gain, t + 0.012)
    g.gain.exponentialRampToValueAtTime(0.0008, t + duration)
    o.connect(g); g.connect(this.master)
    o.start(t); o.stop(t + duration + 0.02)
  }

  play(name, opts = {}) {
    if (!this.ctx || this.muted) return
    const vol = opts.volume ?? 1
    switch (name) {
      case 'click':
        if (!this.gate('click', 40)) return
        this.tone(520, 0.05, 0.035, 'square', 380)
        break
      case 'select':
        if (!this.gate('select', 60)) return
        this.tone(340, 0.09, 0.03, 'triangle', 520)
        break
      case 'order':
        if (!this.gate('order', 90)) return
        this.tone(420, 0.06, 0.035, 'square', 620)
        this.tone(660, 0.06, 0.025, 'triangle', 520, 0.06)
        break
      case 'rifle':
        if (!this.gate('rifle', 65)) return
        this.noise(0.09, 0.10 * vol, 'highpass', 900, 0.7, 300)
        this.tone(160, 0.07, 0.03 * vol, 'square', 60)
        break
      case 'mg':
        if (!this.gate('mg', 45)) return
        this.noise(0.05, 0.07 * vol, 'bandpass', 1400, 1.4)
        break
      case 'cannon':
        if (!this.gate('cannon', 80)) return
        this.noise(0.32, 0.2 * vol, 'lowpass', 900, 0.8, 120)
        this.tone(95, 0.34, 0.16 * vol, 'sine', 38)
        break
      case 'explosion':
        if (!this.gate('explosion', 90)) return
        this.noise(0.9, 0.32 * vol, 'lowpass', 700, 0.7, 70)
        this.tone(62, 0.8, 0.22 * vol, 'sine', 24)
        break
      case 'build':
        if (!this.gate('build', 120)) return
        this.noise(0.12, 0.05 * vol, 'bandpass', 700, 2)
        this.tone(180, 0.1, 0.03, 'square', 150)
        break
      case 'complete':
        this.tone(523, 0.16, 0.05, 'triangle')
        this.tone(784, 0.24, 0.045, 'triangle', null, 0.12)
        break
      case 'ready':
        this.tone(660, 0.09, 0.035, 'triangle')
        break
      case 'error':
        if (!this.gate('error', 200)) return
        this.tone(120, 0.16, 0.05, 'square', 90)
        break
      case 'alarm':
        if (!this.gate('alarm', 1600)) return
        this.tone(440, 0.35, 0.05, 'sawtooth', 620)
        this.tone(440, 0.35, 0.05, 'sawtooth', 620, 0.42)
        break
      case 'victory':
        this.tone(392, 0.5, 0.08, 'triangle')
        this.tone(523, 0.5, 0.08, 'triangle', null, 0.16)
        this.tone(659, 0.7, 0.08, 'triangle', null, 0.32)
        this.tone(784, 1.2, 0.07, 'sine', null, 0.48)
        break
      case 'defeat':
        this.tone(196, 0.7, 0.09, 'sine', 146)
        this.tone(146, 0.9, 0.08, 'sine', 110, 0.5)
        this.tone(98, 1.4, 0.07, 'sine', 73, 1.0)
        break
      case 'engine':
        if (!this.gate('engine', 400)) return
        this.tone(55, 0.5, 0.03, 'sawtooth', 70)
        break
      default:
        break
    }
  }

  startAmbient() {
    if (!this.ctx || this.ambient) return
    const t = this.ctx.currentTime
    const src = this.ctx.createBufferSource()
    src.buffer = this.noiseBuf
    src.loop = true
    const f = this.ctx.createBiquadFilter()
    f.type = 'lowpass'
    f.frequency.value = 320
    const g = this.ctx.createGain()
    g.gain.value = 0.028
    src.connect(f); f.connect(g); g.connect(this.master)
    src.start(t)
    const drone = this.ctx.createOscillator()
    drone.type = 'sine'
    drone.frequency.value = 48
    const dg = this.ctx.createGain()
    dg.gain.value = 0.012
    const lfo = this.ctx.createOscillator()
    lfo.frequency.value = 0.07
    const lg = this.ctx.createGain()
    lg.gain.value = 0.007
    lfo.connect(lg); lg.connect(dg.gain)
    drone.connect(dg); dg.connect(this.master)
    drone.start(t); lfo.start(t)
    this.ambient = { src, drone, lfo, g, dg }
  }

  stopAmbient() {
    if (!this.ambient) return
    try {
      this.ambient.src.stop()
      this.ambient.drone.stop()
      this.ambient.lfo.stop()
    } catch (e) { /* already stopped */ }
    this.ambient = null
  }
}

export const audio = new AudioEngine()
