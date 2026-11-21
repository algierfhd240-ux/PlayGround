// ============================================================
// IRON FRONT — data model
// Factions, units, structures, maps and historical operations
// ============================================================

export const TEAM_COLORS = {
  player: 0x6f9fd8,
  enemy: 0xd2574a,
  playerCss: '#6f9fd8',
  enemyCss: '#d2574a'
};

export const FACTIONS = {
  usa: {
    id: 'usa', name: 'United States', short: 'USA', adjective: 'American',
    color: '#4e7196', css: '#4e7196', paint: 0x4c5638, uniform: 0x6c6a4c, accent: 0x8fa06a,
    flag: 'us', doctrine: 'Combined arms & logistics',
    bonus: '+15% vision · vehicles 10% cheaper',
    blurb: 'Industrial might, radios in every squad and overwhelming artillery. American forces trade raw armour for mobility and situational awareness.',
    mods: { vision: 1.15, vehicleCost: 0.9 },
    motto: 'Duty, Honour, Country'
  },
  ussr: {
    id: 'ussr', name: 'Soviet Union', short: 'USSR', adjective: 'Soviet',
    color: '#a33b2c', css: '#a33b2c', paint: 0x45502f, uniform: 0x5e5a3a, accent: 0xb0523e,
    flag: 'ussr', doctrine: 'Deep battle & mass',
    bonus: 'Infantry 15% cheaper · vehicles 10% faster to build',
    blurb: 'Mass production and ruthless determination. Soviet commanders win by concentrating cheap, hard-hitting formations at the decisive point.',
    mods: { infCost: 0.85, vehicleTime: 0.9 },
    motto: 'For the Motherland'
  },
  germany: {
    id: 'germany', name: 'Germany', short: 'GER', adjective: 'German',
    color: '#7b7f74', css: '#7b7f74', paint: 0x565b4b, uniform: 0x5c6151, accent: 0x9aa08c,
    flag: 'germany', doctrine: 'Armoured spearhead',
    bonus: '+10% vehicle damage · units 5% more expensive',
    blurb: 'Veteran crews, superb optics and the finest armour of the war. German formations strike first and strike hard — but every loss is costly.',
    mods: { vehicleDmg: 1.1, unitCost: 1.05 },
    motto: 'Vorwärts'
  },
  uk: {
    id: 'uk', name: 'Great Britain', short: 'UK', adjective: 'British',
    color: '#b39b5c', css: '#b39b5c', paint: 0x6c6240, uniform: 0x736b4b, accent: 0xc4b27c,
    flag: 'uk', doctrine: 'Hold the line',
    bonus: '+15% infantry health · vehicles 10% slower',
    blurb: 'Stubborn infantry, dependable armour and a doctrine built around the deliberate counter-attack. British forces are hard to shift.',
    mods: { infHp: 1.15, vehicleSpeed: 0.9 },
    motto: 'Keep Calm and Carry On'
  },
  japan: {
    id: 'japan', name: 'Japan', short: 'JPN', adjective: 'Japanese',
    color: '#c2bca9', css: '#c2bca9', paint: 0x67603f, uniform: 0x6f6848, accent: 0xd8d0b8,
    flag: 'japan', doctrine: 'Speed & aggression',
    bonus: '+10% movement speed · vehicles 10% less durable',
    blurb: 'Light, fast and fanatical. Japanese forces rely on rapid flanking, aggressive infantry and close-quarters shock action.',
    mods: { speed: 1.1, vehicleHp: 0.9 },
    motto: 'Certain victory'
  }
};

export const FACTION_ORDER = ['usa', 'ussr', 'germany', 'uk', 'japan'];

// ------------------------------------------------------------
// Combat model
// ------------------------------------------------------------
export const DMG_MULT = {
  smallArms: { infantry: 1.0, light: 0.42, medium: 0.14, heavy: 0.06, building: 0.12 },
  at: { infantry: 0.3, light: 1.0, medium: 1.05, heavy: 0.72, building: 0.55 },
  shell: { infantry: 0.78, light: 1.0, medium: 0.9, heavy: 0.66, building: 0.78 },
  explosive: { infantry: 1.25, light: 1.1, medium: 0.85, heavy: 0.52, building: 1.05 }
};

export const ARMOR_LABEL = { infantry: 'Infantry', light: 'Light armour', medium: 'Medium armour', heavy: 'Heavy armour', building: 'Structure' };

// ------------------------------------------------------------
// Units
// ------------------------------------------------------------
export const UNIT_ORDER = ['rifle', 'engineer', 'at', 'scout', 'tank', 'heavy', 'artillery', 'harvester'];

export const UNIT_TYPES = {
  rifle: {
    key: 'rifle', role: 'Infantry', icon: 'rifle', cost: 80, time: 7, pop: 1,
    hp: 130, speed: 7.5, range: 20, dmg: 7, cooldown: 0.75, weapon: 'smallArms',
    armor: 'infantry', vision: 30, squad: 4,
    desc: 'A four-man rifle squad. Effective against infantry, but helpless against armour without support.'
  },
  engineer: {
    key: 'engineer', role: 'Engineer', icon: 'engineer', cost: 90, time: 8, pop: 1,
    hp: 110, speed: 7.2, range: 0, dmg: 0, cooldown: 1, weapon: 'none',
    armor: 'infantry', vision: 26, builder: true, squad: 3,
    desc: 'Constructs and repairs structures. Captures the battlefield with concrete and steel.'
  },
  at: {
    key: 'at', role: 'Anti-tank', icon: 'at', cost: 120, time: 9, pop: 1,
    hp: 118, speed: 6.9, range: 27, dmg: 42, cooldown: 2.6, weapon: 'at',
    armor: 'infantry', vision: 30, squad: 3,
    desc: 'Shoulder-fired anti-tank team. Devastating against armour, vulnerable to infantry.'
  },
  scout: {
    key: 'scout', role: 'Recon', icon: 'scout', cost: 150, time: 10, pop: 1,
    hp: 220, speed: 14, range: 23, dmg: 8, cooldown: 0.45, weapon: 'smallArms',
    armor: 'light', vision: 42, turret: true,
    desc: 'Fast armoured car. Excellent vision and raiding potential; avoid pitched battle.'
  },
  tank: {
    key: 'tank', role: 'Medium tank', icon: 'tank', cost: 300, time: 18, pop: 3,
    hp: 540, speed: 9.5, range: 29, dmg: 55, cooldown: 3.0, weapon: 'shell',
    armor: 'medium', vision: 34, turret: true,
    desc: 'The workhorse of every army. Balanced armour, firepower and mobility.'
  },
  heavy: {
    key: 'heavy', role: 'Heavy tank', icon: 'heavy', cost: 520, time: 30, pop: 5,
    hp: 980, speed: 7, range: 33, dmg: 100, cooldown: 4.2, weapon: 'shell',
    armor: 'heavy', vision: 36, turret: true,
    desc: 'A rolling fortress. Dominates tank duels but is slow, expensive and easy to outflank.'
  },
  artillery: {
    key: 'artillery', role: 'Artillery', icon: 'artillery', cost: 380, time: 24, pop: 4,
    hp: 260, speed: 6, range: 70, minRange: 22, dmg: 80, cooldown: 6.5,
    weapon: 'explosive', splash: 8, armor: 'light', vision: 36, turret: true,
    desc: 'Mobile howitzer. Shatters infantry and structures from beyond visual range. Needs a spotter and a guard.'
  },
  harvester: {
    key: 'harvester', role: 'Logistics', icon: 'harvester', cost: 130, time: 9, pop: 1,
    hp: 260, speed: 10, range: 0, dmg: 0, cooldown: 1, weapon: 'none',
    armor: 'light', vision: 27, harvester: true, capacity: 60,
    desc: 'Collects supply crates and returns them to HQ or a Supply Depot. Your army runs on its wheels.'
  }
};

// Faction-flavoured unit names, models and stat tweaks.
export const FACTION_UNITS = {
  usa: {
    rifle: { name: 'Rifle Squad', model: 'shermanInf', desc: 'M1 Garand riflemen with radio support and excellent situational awareness.' },
    engineer: { name: 'Combat Engineers', model: 'usEng' },
    at: { name: 'Bazooka Team', model: 'usAt' },
    scout: { name: 'M8 Greyhound', model: 'greyhound' },
    tank: { name: 'M4 Sherman', model: 'sherman', stats: { hp: 560, dmg: 57 } },
    heavy: { name: 'M26 Pershing', model: 'pershing', stats: { hp: 1000, dmg: 102 } },
    artillery: { name: 'M7 Priest', model: 'priest', stats: { range: 74 } },
    harvester: { name: 'GMC Supply Truck', model: 'usTruck' }
  },
  ussr: {
    rifle: { name: 'Guards Rifles', model: 'sovietInf', stats: { hp: 125 } },
    engineer: { name: 'Sapper Squad', model: 'sovietEng' },
    at: { name: 'PTRD Team', model: 'sovietAt' },
    scout: { name: 'BA-64', model: 'ba64' },
    tank: { name: 'T-34/85', model: 't34', stats: { hp: 580, speed: 10 } },
    heavy: { name: 'IS-2', model: 'is2', stats: { hp: 950, dmg: 108 } },
    artillery: { name: 'BM-13 Katyusha', model: 'katyusha', stats: { dmg: 62, cooldown: 5.2, splash: 10 } },
    harvester: { name: 'ZIS-5 Supply Truck', model: 'sovietTruck' }
  },
  germany: {
    rifle: { name: 'Grenadier Squad', model: 'germanInf' },
    engineer: { name: 'Pioneer Squad', model: 'germanEng' },
    at: { name: 'Panzerschreck Team', model: 'germanAt', stats: { dmg: 48 } },
    scout: { name: 'Sd.Kfz. 234', model: 'sd234' },
    tank: { name: 'Panzer IV', model: 'panzer4', stats: { dmg: 62 } },
    heavy: { name: 'Tiger I', model: 'tiger', stats: { hp: 1080, dmg: 112 } },
    artillery: { name: 'Hummel', model: 'hummel', stats: { range: 74 } },
    harvester: { name: 'Opel Blitz', model: 'germanTruck' }
  },
  uk: {
    rifle: { name: 'Infantry Section', model: 'britInf' },
    engineer: { name: 'Royal Engineers', model: 'britEng' },
    at: { name: 'PIAT Team', model: 'britAt' },
    scout: { name: 'Daimler Mk II', model: 'daimler' },
    tank: { name: 'Cromwell Mk IV', model: 'cromwell', stats: { speed: 9.8 } },
    heavy: { name: 'Churchill Mk VII', model: 'churchill', stats: { hp: 1120, dmg: 88 } },
    artillery: { name: 'Sexton', model: 'sexton', stats: { dmg: 86 } },
    harvester: { name: 'Bedford QL', model: 'britTruck' }
  },
  japan: {
    rifle: { name: 'Infantry Squad', model: 'japanInf' },
    engineer: { name: 'Engineer Squad', model: 'japanEng' },
    at: { name: 'Type 97 AT Team', model: 'japanAt' },
    scout: { name: 'Type 92 Tankette', model: 'type92' },
    tank: { name: 'Type 97 Chi-Ha', model: 'chiha', stats: { hp: 430, speed: 10.5 } },
    heavy: { name: 'Type 3 Chi-Nu', model: 'chinu', stats: { hp: 740, dmg: 92 } },
    artillery: { name: 'Type 4 Ho-Ro', model: 'horo', stats: { hp: 240 } },
    harvester: { name: 'Isuzu Supply Truck', model: 'japanTruck' }
  }
};

// ------------------------------------------------------------
// Structures
// ------------------------------------------------------------
export const BUILDING_TYPES = {
  hq: {
    key: 'hq', icon: 'hq', cost: 0, time: 0, hp: 2600, radius: 7.5, pop: 14,
    vision: 44, dropoff: true, income: 2, buildable: false, produces: ['harvester'],
    desc: 'Command post and primary supply drop-off. If it falls, the battle is lost.'
  },
  barracks: {
    key: 'barracks', icon: 'barracks', cost: 200, time: 20, hp: 950, radius: 5.5, pop: 2,
    vision: 32, buildable: true, produces: ['rifle', 'engineer', 'at'],
    desc: 'Trains infantry, engineers and anti-tank teams.'
  },
  factory: {
    key: 'factory', icon: 'factory', cost: 280, time: 26, hp: 1200, radius: 6.5, pop: 3,
    vision: 32, buildable: true, produces: ['scout', 'tank', 'heavy', 'artillery'],
    desc: 'Builds armoured cars, tanks and self-propelled artillery.'
  },
  depot: {
    key: 'depot', icon: 'depot', cost: 160, time: 14, hp: 650, radius: 4.8, pop: 8,
    vision: 28, buildable: true, dropoff: true, income: 1.5, produces: [],
    desc: 'Supply drop-off, +8 population and +1.5 supplies per second.'
  },
  turret: {
    key: 'turret', icon: 'turret', cost: 180, time: 16, hp: 780, radius: 3.6, pop: 0,
    vision: 38, buildable: true, weapon: 'shell', range: 38, dmg: 36, cooldown: 2.0,
    produces: [], desc: 'Entrenched anti-tank gun. Automatically engages enemies in range.'
  }
};

export const FACTION_BUILDINGS = {
  usa: {
    hq: { name: 'Command Post', model: 'usHQ' },
    barracks: { name: 'Barracks', model: 'usBarracks' },
    factory: { name: 'Motor Pool', model: 'usFactory' },
    depot: { name: 'Supply Depot', model: 'usDepot' },
    turret: { name: '75mm Gun Nest', model: 'usTurret' }
  },
  ussr: {
    hq: { name: 'Forward Headquarters', model: 'sovietHQ' },
    barracks: { name: 'Conscript Barracks', model: 'sovietBarracks' },
    factory: { name: 'Tank Works', model: 'sovietFactory' },
    depot: { name: 'Supply Dump', model: 'sovietDepot' },
    turret: { name: 'ZiS-3 Emplacement', model: 'sovietTurret' }
  },
  germany: {
    hq: { name: 'Kommandostand', model: 'germanHQ' },
    barracks: { name: 'Wehrmacht Barracks', model: 'germanBarracks' },
    factory: { name: 'Panzerwerk', model: 'germanFactory' },
    depot: { name: 'Versorgungsdepot', model: 'germanDepot' },
    turret: { name: 'Pak 40 Nest', model: 'germanTurret' }
  },
  uk: {
    hq: { name: 'Battalion HQ', model: 'britHQ' },
    barracks: { name: 'Recruit Barracks', model: 'britBarracks' },
    factory: { name: 'Ordnance Factory', model: 'britFactory' },
    depot: { name: 'Supply Dump', model: 'britDepot' },
    turret: { name: '25-Pdr Emplacement', model: 'britTurret' }
  },
  japan: {
    hq: { name: 'Regimental HQ', model: 'japanHQ' },
    barracks: { name: 'Barracks', model: 'japanBarracks' },
    factory: { name: 'Arsenal', model: 'japanFactory' },
    depot: { name: 'Supply Cache', model: 'japanDepot' },
    turret: { name: 'Type 1 Gun Nest', model: 'japanTurret' }
  }
};

// ------------------------------------------------------------
// Derived stats
// ------------------------------------------------------------
export function unitStats(factionId, type) {
  const base = UNIT_TYPES[type];
  const fac = FACTION_UNITS[factionId][type];
  const mods = FACTIONS[factionId].mods;
  const s = { ...base, ...(fac.stats || {}) };
  s.name = fac.name;
  s.model = fac.model;
  s.desc = fac.desc || base.desc;
  s.faction = factionId;
  if (base.cost > 0) {
    let cost = s.cost;
    if (mods.unitCost) cost *= mods.unitCost;
    if (mods.vehicleCost && ['scout', 'tank', 'heavy', 'artillery', 'harvester'].includes(type)) cost *= mods.vehicleCost;
    if (mods.infCost && ['rifle', 'engineer', 'at'].includes(type)) cost *= mods.infCost;
    s.cost = Math.round(cost / 5) * 5;
  }
  if (base.time > 0) {
    let time = s.time;
    if (mods.vehicleTime && ['scout', 'tank', 'heavy', 'artillery', 'harvester'].includes(type)) time *= mods.vehicleTime;
    s.time = time;
  }
  if (mods.infHp && base.armor === 'infantry') s.hp *= mods.infHp;
  if (mods.vehicleHp && base.armor !== 'infantry') s.hp *= mods.vehicleHp;
  if (mods.vehicleDmg && base.weapon === 'shell') s.dmg *= mods.vehicleDmg;
  if (mods.vision) s.vision *= mods.vision;
  if (mods.speed) s.speed *= mods.speed;
  if (mods.vehicleSpeed && base.armor !== 'infantry') s.speed *= mods.vehicleSpeed;
  s.hp = Math.round(s.hp);
  s.dmg = Math.round(s.dmg);
  s.speed = Math.round(s.speed * 10) / 10;
  return s;
}

export function buildingStats(factionId, type) {
  const base = BUILDING_TYPES[type];
  const fac = FACTION_BUILDINGS[factionId][type];
  return { ...base, name: fac.name, model: fac.model, faction: factionId };
}

// ------------------------------------------------------------
// Battlefields
// ------------------------------------------------------------
export const MAPS = {
  normandy: {
    id: 'normandy', name: 'Normandy', region: 'France · 1944', biome: 'farmland',
    desc: 'Hedgerow country. Rolling fields, stone farms and narrow lanes that swallow armour.',
    sky: { turbidity: 5, rayleigh: 1.4, mie: 0.006, g: 0.82, elevation: 28, azimuth: 135 },
    sun: { color: 0xffe6c0, intensity: 2.7 },
    hemi: { sky: 0x9db7d8, ground: 0x4a4a34, intensity: 0.9 },
    fog: { color: 0xa8b4b8, density: 0.0026 },
    ground: { low: 0x46522f, high: 0x647044, dirt: 0x6d6243, rock: 0x7a786a, tint: 0xd6d2b8 },
    height: { amp: 6, scale: 0.055 },
    props: { tree: 'broadleaf', treeDensity: 90, rocks: 22, ruins: 5, hedges: 14, grass: 220, craters: 12 },
    thumbnail: 'linear-gradient(160deg,#38452a,#5d6b3f 45%,#8a7b55)'
  },
  kursk: {
    id: 'kursk', name: 'Kursk', region: 'USSR · 1943', biome: 'steppe',
    desc: 'Open steppe and sunflower fields. Long sight lines, perfect for massed armour.',
    sky: { turbidity: 6, rayleigh: 1.8, mie: 0.008, g: 0.8, elevation: 42, azimuth: 200 },
    sun: { color: 0xffe9c4, intensity: 2.9 },
    hemi: { sky: 0xb9c6cc, ground: 0x5e5637, intensity: 0.85 },
    fog: { color: 0xc2c1a8, density: 0.0021 },
    ground: { low: 0x66602f, high: 0x8a7c43, dirt: 0x77653f, rock: 0x8c8168, tint: 0xe0d5ac },
    height: { amp: 3.5, scale: 0.04 },
    props: { tree: 'sparse', treeDensity: 40, rocks: 18, ruins: 3, hedges: 0, grass: 260, craters: 20 },
    thumbnail: 'linear-gradient(160deg,#5e5a2c,#8f8246 50%,#b2a56d)'
  },
  stalingrad: {
    id: 'stalingrad', name: 'Stalingrad', region: 'USSR · 1942', biome: 'snow-urban',
    desc: 'A frozen city reduced to rubble. Every factory hall and cellar is a fortress.',
    sky: { turbidity: 8, rayleigh: 2.4, mie: 0.02, g: 0.7, elevation: 18, azimuth: 250 },
    sun: { color: 0xd9e2ee, intensity: 1.7 },
    hemi: { sky: 0xaebdcb, ground: 0x8d8d86, intensity: 0.95 },
    fog: { color: 0xb7c1c9, density: 0.0042 },
    ground: { low: 0x9aa09c, high: 0xb8bdb6, dirt: 0x77746c, rock: 0x8b8a84, tint: 0xe4e8ea },
    height: { amp: 2.2, scale: 0.045 },
    props: { tree: 'dead', treeDensity: 18, rocks: 30, ruins: 26, hedges: 0, grass: 40, craters: 34 },
    thumbnail: 'linear-gradient(160deg,#8f9899,#b9c0bd 50%,#6e716c)'
  },
  elalamein: {
    id: 'elalamein', name: 'El Alamein', region: 'Egypt · 1942', biome: 'desert',
    desc: 'Sand, rock and burning sky. Dust clouds betray every movement for miles.',
    sky: { turbidity: 7, rayleigh: 1.2, mie: 0.006, g: 0.86, elevation: 52, azimuth: 170 },
    sun: { color: 0xfff0cf, intensity: 3.4 },
    hemi: { sky: 0xd8c9a8, ground: 0x9b8155, intensity: 0.9 },
    fog: { color: 0xd6c39a, density: 0.0026 },
    ground: { low: 0xa8905f, high: 0xc0aa76, dirt: 0x8f774d, rock: 0x8a7554, tint: 0xe8d9b4 },
    height: { amp: 7, scale: 0.05 },
    props: { tree: 'none', treeDensity: 0, rocks: 40, ruins: 4, hedges: 0, grass: 0, craters: 16 },
    thumbnail: 'linear-gradient(160deg,#a58a55,#cbb684 55%,#e0cfa0)'
  },
  pacific: {
    id: 'pacific', name: 'Betio Atoll', region: 'Pacific · 1943', biome: 'jungle',
    desc: 'Coral sand, palm groves and suffocating heat. The jungle hides ambushes everywhere.',
    sky: { turbidity: 4, rayleigh: 1.0, mie: 0.004, g: 0.85, elevation: 48, azimuth: 110 },
    sun: { color: 0xfff2d0, intensity: 3.2 },
    hemi: { sky: 0x9dc6d6, ground: 0x2f4a2b, intensity: 1.0 },
    fog: { color: 0x9fb8ad, density: 0.0034 },
    ground: { low: 0x3a5530, high: 0x536b37, dirt: 0x8d805a, rock: 0x6a6552, tint: 0xd9d8b4 },
    height: { amp: 5, scale: 0.06 },
    props: { tree: 'palm', treeDensity: 120, rocks: 14, ruins: 4, hedges: 0, grass: 320, craters: 10 },
    thumbnail: 'linear-gradient(160deg,#24452b,#3f6335 45%,#b9a06a)'
  },
  ardennes: {
    id: 'ardennes', name: 'Ardennes', region: 'Belgium · 1944', biome: 'snow-forest',
    desc: 'Frozen pine forest and fog. Roads are scarce, visibility shorter, and ambush easy.',
    sky: { turbidity: 9, rayleigh: 2.6, mie: 0.025, g: 0.65, elevation: 22, azimuth: 300 },
    sun: { color: 0xd3dce8, intensity: 1.5 },
    hemi: { sky: 0xa9b7c4, ground: 0x7d8178, intensity: 0.95 },
    fog: { color: 0xb2bcc3, density: 0.0052 },
    ground: { low: 0x7e8478, high: 0xa9aea4, dirt: 0x6f6c60, rock: 0x7e7f78, tint: 0xe2e7e6 },
    height: { amp: 7.5, scale: 0.055 },
    props: { tree: 'pine', treeDensity: 150, rocks: 20, ruins: 4, hedges: 0, grass: 30, craters: 18 },
    thumbnail: 'linear-gradient(160deg,#5e6a5c,#9ba69c 50%,#d3dad6)'
  },
  berlin: {
    id: 'berlin', name: 'Berlin', region: 'Germany · 1945', biome: 'urban',
    desc: 'The broken heart of the Reich. Rubble barricades, burnt-out blocks and the Reichstag.',
    sky: { turbidity: 10, rayleigh: 2.8, mie: 0.03, g: 0.6, elevation: 12, azimuth: 60 },
    sun: { color: 0xe8c8a4, intensity: 1.9 },
    hemi: { sky: 0xa8a49a, ground: 0x5e5a50, intensity: 0.9 },
    fog: { color: 0xb0a898, density: 0.0046 },
    ground: { low: 0x6b675c, high: 0x827d6e, dirt: 0x5b564b, rock: 0x777267, tint: 0xc9c1ad },
    height: { amp: 1.6, scale: 0.04 },
    props: { tree: 'dead', treeDensity: 14, rocks: 26, ruins: 34, hedges: 0, grass: 0, craters: 40 },
    thumbnail: 'linear-gradient(160deg,#4f4b42,#7b7566 50%,#9a8e76)'
  }
};

export const MAP_ORDER = ['normandy', 'kursk', 'stalingrad', 'elalamein', 'pacific', 'ardennes', 'berlin'];

// Neutral supply crate positions (world coordinates)
export const SUPPLY_SPOTS = [
  { x: -38, z: 2 }, { x: 40, z: -4 }, { x: 4, z: -44 }, { x: -6, z: 46 },
  { x: -84, z: -16 }, { x: 86, z: 18 }, { x: -24, z: 88 }, { x: 26, z: -90 }
];

export const BASE_POSITIONS = {
  player: { x: -64, z: 64 },
  enemy: { x: 64, z: -64 }
};

// ------------------------------------------------------------
// Difficulty
// ------------------------------------------------------------
export const DIFFICULTIES = {
  recruit: {
    id: 'recruit', name: 'Recruit', stars: 1,
    aiIncome: 0.72, aiBuild: 1.35, aiAggression: 1.5, aiArmy: 1.0,
    desc: 'The enemy is slow to mobilise and forgiving in battle.'
  },
  veteran: {
    id: 'veteran', name: 'Veteran', stars: 2,
    aiIncome: 1.0, aiBuild: 1.0, aiAggression: 1.0, aiArmy: 1.3,
    desc: 'A balanced opponent that builds, defends and counter-attacks.'
  },
  marshal: {
    id: 'marshal', name: 'Field Marshal', stars: 3,
    aiIncome: 1.38, aiBuild: 0.76, aiAggression: 0.68, aiArmy: 1.65,
    desc: 'Relentless production and early, coordinated armoured thrusts.'
  }
};

// ------------------------------------------------------------
// Historical operations
// ------------------------------------------------------------
const BASE_PLAYER = { buildings: { hq: 1, barracks: 1, factory: 1, depot: 1 }, units: { rifle: 3, engineer: 1, harvester: 2, tank: 1 } };
const BASE_ENEMY = { buildings: { hq: 1, barracks: 1, factory: 1, depot: 1, turret: 2 }, units: { rifle: 3, engineer: 1, harvester: 2, tank: 1 } };

function setup(overrides) {
  return {
    supplies: 900,
    player: { ...BASE_PLAYER, ...(overrides.player || {}) },
    enemy: { ...BASE_ENEMY, ...(overrides.enemy || {}) }
  };
}

export const MISSIONS = [
  {
    id: 'fall-gelb', op: 1, title: 'Fall Gelb', date: '10 May 1940', location: 'Sedan · France',
    player: 'germany', enemy: 'uk', map: 'normandy', difficulty: 1,
    brief: 'The panzer divisions have burst through the Ardennes and reached the Meuse at Sedan. Ahead lies the British rear-guard, dug in among the hedgerows. Break their headquarters and the road to the Channel is open.',
    history: 'The German breakthrough at Sedan on 13 May 1940 collapsed the Allied line. Within ten days the Channel coast was reached and the British Expeditionary Force was falling back on Dunkirk.',
    outcome: 'The breakthrough succeeded. The Allied armies in the north were cut off, and the evacuation at Dunkirk began on 26 May.',
    objectives: [{ type: 'destroyHQ', label: 'Destroy the British headquarters' }],
    intel: { enemy: 'British rear-guard', terrain: 'Hedgerow farmland', weather: 'Clear, dry' },
    start: setup({ supplies: 800, player: { units: { rifle: 4, engineer: 1, harvester: 2, tank: 2 } } })
  },
  {
    id: 'dunkirk', op: 2, title: 'Hold the Perimeter', date: '26 May 1940', location: 'Dunkirk · France',
    player: 'uk', enemy: 'germany', map: 'normandy', difficulty: 2,
    brief: 'The BEF is falling back on the beaches. Your battalion must hold the eastern perimeter while the little ships work. Every hour bought here is another thousand men saved. Hold for eight minutes.',
    history: 'Operation Dynamo evacuated 338,226 Allied soldiers from Dunkirk between 26 May and 4 June 1940. The perimeter was held by rearguards who fought delaying actions street by street.',
    outcome: 'The perimeter held long enough. The majority of the BEF escaped to fight again, though all its heavy equipment was lost.',
    objectives: [{ type: 'survive', seconds: 420, label: 'Hold the perimeter for 7 minutes' }],
    intel: { enemy: 'German panzer spearhead', terrain: 'Hedgerows and farm tracks', weather: 'Overcast' },
    start: setup({
      supplies: 850,
      player: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 1, turret: 2 }, units: { rifle: 5, engineer: 2, harvester: 2, at: 2, tank: 1 } },
      enemy: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 1, turret: 1 }, units: { rifle: 5, tank: 3, at: 1, harvester: 2 } }
    }),
    waves: [
      { at: 45, units: { rifle: 3, scout: 1 }, label: 'Enemy patrol probing the line' },
      { at: 120, units: { tank: 2, rifle: 3 }, label: 'Armoured probe on the eastern flank' },
      { at: 210, units: { tank: 3, at: 2, rifle: 3 }, label: 'Battlegroup assault' },
      { at: 310, units: { heavy: 1, tank: 2, rifle: 4 }, label: 'Heavy armour approaching' }
    ]
  },
  {
    id: 'barbarossa', op: 3, title: 'Operation Barbarossa', date: '22 June 1941', location: 'Minsk · USSR',
    player: 'germany', enemy: 'ussr', map: 'kursk', difficulty: 2,
    brief: 'Three million men cross the frontier before dawn. The Soviet border armies are surprised but numerous. Punch through the steppe, destroy their forward headquarters and keep the advance moving.',
    history: 'Operation Barbarossa opened on 22 June 1941 along a 2,900-kilometre front. German forces encircled millions of Soviet troops in the first months but were stopped short of Moscow in December.',
    outcome: 'The initial advance was devastating, but the campaign outran its logistics. The war in the East would last four more years.',
    objectives: [{ type: 'destroyHQ', label: 'Destroy the Soviet forward headquarters' }],
    intel: { enemy: 'Soviet border army', terrain: 'Open steppe', weather: 'Hot, dry' },
    start: setup({ supplies: 900, player: { units: { rifle: 4, engineer: 1, harvester: 2, tank: 2, at: 1 } } })
  },
  {
    id: 'philippines', op: 4, title: 'Fall of the Philippines', date: '8 December 1941', location: 'Luzon · Philippines',
    player: 'japan', enemy: 'usa', map: 'pacific', difficulty: 2,
    brief: 'Hours after Pearl Harbor, your regiment lands on Luzon. The American and Filipino defenders are spread thin along the coast. Move fast through the palm groves and break their command post before they can consolidate.',
    history: 'Japanese forces invaded the Philippines on 8 December 1941. Manila fell in January 1942; the defenders held out on Bataan and Corregidor until May.',
    outcome: 'The invasion succeeded. The Philippines fell, though guerrilla resistance continued throughout the occupation.',
    objectives: [{ type: 'destroyHQ', label: 'Destroy the American command post' }],
    intel: { enemy: 'US–Filipino garrison', terrain: 'Palm groves and coral sand', weather: 'Humid, clear' },
    start: setup({ supplies: 850, player: { units: { rifle: 5, engineer: 1, harvester: 2, tank: 2 } } })
  },
  {
    id: 'elalamein', op: 5, title: 'Second El Alamein', date: '23 October 1942', location: 'El Alamein · Egypt',
    player: 'uk', enemy: 'germany', map: 'elalamein', difficulty: 2,
    brief: 'Montgomery has spent months building up the Eighth Army. The Desert Fox is at the end of his supply line. Under a thousand-gun barrage, advance through the minefields and destroy the Axis headquarters.',
    history: 'The Second Battle of El Alamein began on 23 October 1942. After twelve days of attrition, Rommel\'s forces withdrew; the Axis never again threatened Egypt.',
    outcome: 'The Eighth Army broke the Axis line. The pursuit across Libya began, and the tide turned in North Africa.',
    objectives: [{ type: 'destroyHQ', label: 'Destroy the German headquarters' }],
    intel: { enemy: 'Afrika Korps detachment', terrain: 'Open desert', weather: 'Hot, dusty' },
    start: setup({ supplies: 950, player: { units: { rifle: 4, engineer: 1, harvester: 2, tank: 2, artillery: 1 } } })
  },
  {
    id: 'stalingrad', op: 6, title: 'Not One Step Back', date: '19 November 1942', location: 'Stalingrad · USSR',
    player: 'ussr', enemy: 'germany', map: 'stalingrad', difficulty: 3,
    brief: 'The city has been reduced to rubble, and the Volga is at your back. Chuikov\'s order is simple: hold. Absorb the German assaults, keep the riverbank, and make the enemy bleed for every cellar. Hold for nine minutes.',
    history: 'The battle for Stalingrad raged from August 1942 to February 1943. The encircled German Sixth Army surrendered on 2 February 1943; the Axis lost over 800,000 men killed, wounded or captured.',
    outcome: 'The city held. Operation Uranus encircled the Sixth Army, and the greatest defeat in German military history followed.',
    objectives: [{ type: 'survive', seconds: 540, label: 'Hold the city for 9 minutes' }],
    intel: { enemy: 'German Sixth Army assault groups', terrain: 'Urban rubble', weather: 'Snow, freezing' },
    start: setup({
      supplies: 900,
      player: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 2, turret: 2 }, units: { rifle: 6, engineer: 2, harvester: 2, at: 3, tank: 1 } },
      enemy: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 1, turret: 2 }, units: { rifle: 6, tank: 3, heavy: 1, at: 2, harvester: 2 } }
    }),
    waves: [
      { at: 40, units: { rifle: 4, at: 1 }, label: 'Infantry assault on the factory district' },
      { at: 115, units: { tank: 2, rifle: 4 }, label: 'Panzer group attacking the riverbank' },
      { at: 200, units: { heavy: 1, tank: 3, rifle: 4 }, label: 'Heavy assault group' },
      { at: 290, units: { tank: 3, at: 2, rifle: 5 }, label: 'Sixth Army counter-attack' },
      { at: 390, units: { heavy: 2, tank: 3, rifle: 5 }, label: 'Final push toward the Volga' },
      { at: 480, units: { heavy: 1, tank: 4, rifle: 6 }, label: 'Last reserves committed' }
    ]
  },
  {
    id: 'kursk', op: 7, title: 'The Iron Wall', date: '5 July 1943', location: 'Kursk · USSR',
    player: 'ussr', enemy: 'germany', map: 'kursk', difficulty: 3,
    brief: 'The Germans are coming at the Kursk salient from north and south. Eight defensive belts, a million mines and your tanks await them. Bleed the panzer divisions white — destroy twenty enemy units and the offensive dies.',
    history: 'Operation Citadel opened on 5 July 1943 and was the largest armoured engagement in history. After a week of attrition the Germans withdrew; the Red Army held the field and began its summer offensive.',
    outcome: 'The German offensive failed. Kursk was the last strategic offensive Germany launched in the East.',
    objectives: [{ type: 'kills', count: 20, label: 'Destroy 20 enemy units' }],
    intel: { enemy: 'German panzer corps', terrain: 'Steppe and trench lines', weather: 'Hot, clear' },
    start: setup({
      supplies: 1000,
      player: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 2, turret: 3 }, units: { rifle: 5, engineer: 2, harvester: 3, at: 3, tank: 2, artillery: 1 } },
      enemy: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 1, turret: 2 }, units: { rifle: 5, tank: 4, heavy: 1, at: 2, harvester: 2 } }
    }),
    waves: [
      { at: 60, units: { tank: 2, rifle: 3 }, label: 'Panzer probe on the northern shoulder' },
      { at: 150, units: { tank: 3, heavy: 1, rifle: 3 }, label: 'Main armoured thrust' },
      { at: 250, units: { heavy: 2, tank: 2, at: 2 }, label: 'Tiger battalion committed' },
      { at: 350, units: { tank: 4, rifle: 5 }, label: 'Renewed assault' }
    ]
  },
  {
    id: 'normandy', op: 8, title: 'The Breakout', date: '6 June 1944', location: 'Normandy · France',
    player: 'usa', enemy: 'germany', map: 'normandy', difficulty: 2,
    brief: 'The greatest amphibious operation in history is ashore. Beyond the beaches, the bocage country is a maze of hedgerows and German strongpoints. Push inland, clear the farm tracks and destroy the enemy command post.',
    history: 'D-Day landed over 156,000 Allied troops on 6 June 1944. The Normandy campaign bogged down in the hedgerows until Operation Cobra broke the front in late July.',
    outcome: 'The beachhead held and the breakout followed. Paris was liberated on 25 August 1944.',
    objectives: [{ type: 'destroyHQ', label: 'Destroy the German command post' }],
    intel: { enemy: 'German static division', terrain: 'Bocage and stone farms', weather: 'Overcast, showers' },
    start: setup({ supplies: 1100, player: { units: { rifle: 5, engineer: 2, harvester: 3, tank: 2, artillery: 1 } } })
  },
  {
    id: 'ardennes', op: 9, title: 'Hold the Line', date: '16 December 1944', location: 'Ardennes · Belgium',
    player: 'usa', enemy: 'germany', map: 'ardennes', difficulty: 3,
    brief: 'The Germans have attacked through the Ardennes in the snow and fog. Your division holds a crossroads that must not fall. Dig in, keep the road open and hold for nine minutes until the counter-attack can begin.',
    history: 'The Battle of the Bulge opened on 16 December 1944. American units at Bastogne and St. Vith delayed the German advance in appalling weather until the skies cleared and Allied airpower returned.',
    outcome: 'The crossroads held. The German offensive ran out of fuel and time, and the Ardennes was cleared by late January 1945.',
    objectives: [{ type: 'survive', seconds: 540, label: 'Hold the crossroads for 9 minutes' }],
    intel: { enemy: 'German armoured battle groups', terrain: 'Frozen forest', weather: 'Snow, fog' },
    start: setup({
      supplies: 950,
      player: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 2, turret: 3 }, units: { rifle: 6, engineer: 2, harvester: 2, at: 3, tank: 1 } },
      enemy: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 1, turret: 2 }, units: { rifle: 6, tank: 3, heavy: 1, at: 2, harvester: 2 } }
    }),
    waves: [
      { at: 40, units: { rifle: 4, scout: 2 }, label: 'Reconnaissance in force' },
      { at: 120, units: { tank: 2, rifle: 4 }, label: 'Armoured column on the road' },
      { at: 220, units: { heavy: 1, tank: 3, at: 2 }, label: 'Panzer battalion breaking through' },
      { at: 330, units: { heavy: 2, tank: 3, rifle: 5 }, label: 'All-out assault on the crossroads' },
      { at: 440, units: { tank: 4, rifle: 6 }, label: 'Last reserves' }
    ]
  },
  {
    id: 'berlin', op: 10, title: 'The Final Assault', date: '16 April 1945', location: 'Berlin · Germany',
    player: 'ussr', enemy: 'germany', map: 'berlin', difficulty: 3,
    brief: 'Two and a half million men are converging on Berlin. The city is defended by Volksturm, flak towers and the last panzers of the Reich. Push through the rubble, take the government district and destroy the enemy headquarters.',
    history: 'The Battle of Berlin began on 16 April 1945. After street fighting of extraordinary intensity, the Reichstag was taken on 2 May and Germany surrendered unconditionally on 8 May.',
    outcome: 'Berlin fell. The war in Europe ended eight days later.',
    objectives: [{ type: 'destroyHQ', label: 'Destroy the German headquarters' }],
    intel: { enemy: 'Berlin garrison', terrain: 'Urban ruins', weather: 'Smoke, overcast' },
    start: setup({
      supplies: 1300,
      player: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 2, turret: 2 }, units: { rifle: 6, engineer: 2, harvester: 3, tank: 3, heavy: 1, artillery: 2 } },
      enemy: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 2, turret: 4 }, units: { rifle: 7, tank: 3, heavy: 2, at: 3, artillery: 1, harvester: 2 } }
    })
  },
  {
    id: 'okinawa', op: 11, title: 'The Last Island', date: '1 April 1945', location: 'Okinawa · Pacific',
    player: 'usa', enemy: 'japan', map: 'pacific', difficulty: 3,
    brief: 'The landing beaches are secure, but the Japanese have withdrawn into the jungle and caves of the interior. Expect fanatical counter-attacks and hidden gun positions. Destroy the enemy headquarters and end the island campaign.',
    history: 'The Battle of Okinawa lasted from April to June 1945 and was the bloodiest campaign in the Pacific. Over 100,000 Japanese troops and perhaps as many civilians died; the island was declared secure on 22 June.',
    outcome: 'Okinawa fell after eighty-two days. The cost shaped the decision to use atomic weapons against Japan that August.',
    objectives: [{ type: 'destroyHQ', label: 'Destroy the Japanese headquarters' }],
    intel: { enemy: 'Japanese 32nd Army', terrain: 'Jungle and coral ridges', weather: 'Humid, heavy rain' },
    start: setup({
      supplies: 1250,
      player: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 2, turret: 2 }, units: { rifle: 6, engineer: 2, harvester: 3, tank: 3, artillery: 2 } },
      enemy: { buildings: { hq: 1, barracks: 1, factory: 1, depot: 2, turret: 4 }, units: { rifle: 8, at: 3, tank: 2, heavy: 1, artillery: 1, harvester: 2 } }
    })
  }
];

export const MISSION_BY_ID = Object.fromEntries(MISSIONS.map(m => [m.id, m]));

// ------------------------------------------------------------
// Flags (CSS-drawn)
// ------------------------------------------------------------
export function flagStyle(id) {
  switch (id) {
    case 'usa': return { background: 'repeating-linear-gradient(0deg,#b23a30 0 2px,#e8e2d2 2px 4px)', overlay: 'linear-gradient(0deg, transparent 55%, #2b3f66 55%)' };
    case 'ussr': return { background: '#9e2f24', overlay: 'radial-gradient(circle at 28% 50%, #e3c268 0 3px, transparent 3.5px)' };
    case 'germany': return { background: 'linear-gradient(0deg,#2a2c28 0 33%,#c9c4b4 33% 66%,#7b2f28 66%)', overlay: 'radial-gradient(circle at 50% 50%, transparent 0 7px, #1d1f1b 7px 9px, transparent 9px)' };
    case 'uk': return { background: 'linear-gradient(0deg,#273a63 0 100%)', overlay: 'linear-gradient(90deg, transparent 42%, #d8d2c0 42% 58%, transparent 58%), linear-gradient(0deg, transparent 38%, #d8d2c0 38% 62%, transparent 62%), linear-gradient(90deg, transparent 47%, #a33a30 47% 53%, transparent 53%), linear-gradient(0deg, transparent 44%, #a33a30 44% 56%, transparent 56%)' };
    case 'japan': return { background: '#e7e1d2', overlay: 'radial-gradient(circle at 50% 50%, #b3352c 0 30%, transparent 31%)' };
    default: return { background: '#555', overlay: 'none' };
  }
}
