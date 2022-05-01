import * as THREE from 'three'

import {
  wave,
  mountainBoat,
  mountain,
  pagoda,
  geisha,
  frog,
  tiger,
  villageFar,
  cranePattern,
  horsePattern,
  afternoonTeaPattern,
  flowersMoonPattern,
  mountainSanctuaryPattern,
  deerColorfulForestPattern,
  manOnOxPattern,
  paddlingMerchantPattern,
  writingInSquarePattern,
  nightCaravanPattern,
  leafAO,
  leafCOLOR,
  leafHEIGHT,
  leafNORMAL,
  leafROUGHNESS,
  leafTEST,
  testPattern,
  boatsOnACove,
  GOD,
  opera_dragon,
  blue_waves,
} from './texture_loader.js'

/**
 * dirty tldr
 * map => good for pictures
 * normalMap => good for textures
 * normalScale => need it for normalMap, something with how light interacts with it
 * default gives no effect
 */

const leafSetup = {
  aoMap: leafAO,
  aoMapIntensity: 0.5,
  color: leafCOLOR,
  bumpMap: leafHEIGHT,
  bumpScale: 0.25,
  roughnessMap: leafROUGHNESS,
  roughness: 0.25,
  normalMap: leafTEST,
  normalScale: new THREE.Vector2(1, 0.25),
  // opacity: 0.95,
  // transparent: true,
  // side: THREE.DoubleSide,
}

const leafWave = new THREE.MeshStandardMaterial({
  map: wave,
  ...leafSetup,
  // wireframe: true // cool effect with this on
})

export const leaf1 = {
  design: leafWave,
  name: 'Kanagawa',
}

const leafMountainBoat = new THREE.MeshStandardMaterial({
  map: mountainBoat,
  ...leafSetup,
})

export const leaf2 = {
  design: leafMountainBoat,
  name: 'Mt.Fuji',
}

const leafMountain = new THREE.MeshStandardMaterial({
  map: mountain,
  ...leafSetup,
  // wireframe: true // cool effect with this on
})

export const leaf3 = {
  design: leafMountain,
  name: 'Mountain_Side',
}

const leafPagoda = new THREE.MeshStandardMaterial({
  map: pagoda,
  ...leafSetup,
  // wireframe: true // cool effect with this on
})

export const leaf4 = {
  design: leafPagoda,
  name: 'Pagoda',
}

const leafGeisha = new THREE.MeshStandardMaterial({
  map: geisha,
  ...leafSetup,
  // wireframe: true // cool effect with this on
})

export const leaf5 = {
  design: leafGeisha,
  name: 'Geisha',
}

const leafFrog = new THREE.MeshStandardMaterial({
  map: frog,
  ...leafSetup,
  // wireframe: true // cool effect with this on
})

export const leaf6 = {
  design: leafFrog,
  name: 'Frog_riding_Koi',
}

const leafTiger = new THREE.MeshStandardMaterial({
  map: tiger,
  ...leafSetup,
  // wireframe: true // cool effect with this on
})

export const leaf7 = {
  design: leafTiger,
  name: 'Year_of_the_Tiger',
}

// NEED TO ADD --------------------------------------------------------------

const godPattern = new THREE.MeshStandardMaterial({
  map: GOD,
  ...leafSetup,
  // wireframe: true // cool effect with this on
})

export const leaf8 = {
  design: godPattern,
  name: 'I_don\'t_know_what_gods_these_are',
}

const leafAfternoonTeaPattern = new THREE.MeshStandardMaterial({
  map: afternoonTeaPattern,
  ...leafSetup
})

export const leaf9 = {
  design: leafAfternoonTeaPattern,
  name: 'Afternoon_Tea',
}

const leafFlowerMoonPattern = new THREE.MeshStandardMaterial({
  map: flowersMoonPattern,
  ...leafSetup
})

export const leaf10 = {
  design: leafFlowerMoonPattern,
  name: 'Flowers',
}

const leafMountainSanctuaryPattern = new THREE.MeshStandardMaterial({
  map: mountainSanctuaryPattern,
  ...leafSetup
})

export const leaf11 = {
  design: leafMountainSanctuaryPattern,
  name: 'Mountain_Sanctuary',
}

const leafForestDeer = new THREE.MeshStandardMaterial({
  map: deerColorfulForestPattern,
  ...leafSetup
})

export const leaf12 = {
  design: leafForestDeer,
  name: 'Deers_in_the_Forest',
}

const leafManOnOx = new THREE.MeshStandardMaterial({
  map: manOnOxPattern,
  ...leafSetup
})

export const leaf13 = {
  design: leafManOnOx,
  name: 'Man_Riding_Ox',
}

const leafPaddlingMerchant = new THREE.MeshStandardMaterial({
  map: paddlingMerchantPattern,
  ...leafSetup
})

export const leaf14 = {
  design: leafPaddlingMerchant,
  name: 'Paddling_Merchant',
}

const blueWave = new THREE.MeshStandardMaterial({
    map: blue_waves,
    ...leafSetup
  })

export const leaf15 = {
  design: blueWave,
  name: 'Blue_Ocean',
}

// DONE ADDING --------------------------------------------------------------

// export const leaf8 = {
//   design: leafCranePattern,
//   name: 'Crane_Pattern',
// }

/**
  wave,
  mountainBoat,
  mountain,
  pagoda,
  geisha,
  frog,
  tiger,
  afternoonTeaPattern,
  flowersMoonPattern,
  mountainSanctuaryPattern,
  deerColorfulForestPattern,
  manOnOxPattern,
  paddlingMerchantPattern,
  GOD,
  blue_waves,
 */

const leafTestPattern = new THREE.MeshStandardMaterial({
  map: blue_waves,
  ...leafSetup
  // wireframe: true // cool effect with this on
})

// export const leaf8 = {
//   design: leafHorsePattern,
//   name: 'Horses',
// }

export const leafTest = {
  design: leafTestPattern,
  name: 'TESTER',
}
