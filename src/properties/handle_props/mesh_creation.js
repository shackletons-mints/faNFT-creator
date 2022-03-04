import * as THREE from 'three'

import {
  handleDesign1,
  handleDesign2,
  handleDesign3,
  handleDesign4,
  handleDesign5,
  handleDesign6,
  brassTexture,
  marbleTexture,
  ornateBrassTexture,
  futureTexture,
  marbleRoughness,
  cherryWoodRoughness,
  ornateBrassHeight,
  ornateBrassAO,
  jadeAO,
  jadeCOLOR,
  jadeHEIGHT,
  jadeNORMAL,
  jadeROUGHNESS,
  volcanicAO,
  volcanicCOLOR,
  volcanicHEIGHT,
  volcanicNORMAL,
  volcanicROUGHNESS,
  cooperAO,
  cooperCOLOR,
  cooperDISPLACEMENT,
  cooperMETALIC,
  cooperNORMAL,
  cooperROUGHNESS,
  speckledMarbleAO,
  speckledMarbleROUGHNESS,
  speckledMarbleNORMAL,
  speckledMarbleMAP,
  shinyMetalAO,
  shinyMetalCOLOR,
  shinyMetalMETALLIC,
  shinyMetalNORMAL,
  shinyMetalROUGHNESS,
  shinyMetalHEIGHT,
} from './texture_loader.js'

const volcanic = new THREE.MeshPhysicalMaterial({
  aoMap: volcanicAO,
  map: volcanicCOLOR,
  bumpMap: volcanicHEIGHT,
  normalMap: volcanicNORMAL,
  roughnessMap: volcanicROUGHNESS,
  clearcoatRoughness: 0.1,
  emissive: 'green',
  bumpScale: 1,
  emissiveIntensity: 0.2,
  clearcoat: 0.5,
  roughness: 0.5,
  normalScale: new THREE.Vector2(0.15, 0.15),
})

const speckledMarble = new THREE.MeshPhysicalMaterial({
  // alphaMap: speckledMarbleMAP,
  map: speckledMarbleMAP,
  aoMap: speckledMarbleAO,
  aoMapIntensity: 0.52,
  // bumpMap: brassDISPLACEMENT,
  // bumpScale: 1,
  emissive: 'white',
  emissiveIntensity: 0.5,
  normalMap: speckledMarbleNORMAL,
  normalScale: new THREE.Vector2(15, 15),
  roughnessMap: speckledMarbleROUGHNESS,
  roughness: 1,
  // clearcoatMap: brassMETALIC,
  clearcoatRoughness: 0.75,
  clearcoat: 0.5,
  // metalness: 0.1,
})

const cooper = new THREE.MeshPhysicalMaterial({
  alphaMap: cooperCOLOR,
  map: cooperCOLOR,
  aoMap: cooperAO,
  aoMapIntensity: 1,
  bumpMap: cooperDISPLACEMENT,
  bumpScale: 1,
  normalMap: cooperNORMAL,
  normalScale: new THREE.Vector2(.5, .5),
  roughnessMap: cooperROUGHNESS,
  clearcoatMap: cooperMETALIC,
  clearcoatRoughness: 0.5,
  clearcoat: 0.5,
  metalness: 0.1,
  roughness: 0.5,
})

const jade = new THREE.MeshPhysicalMaterial({
  aoMap: jadeAO,
  map: jadeCOLOR,
  bumpMap: jadeHEIGHT,
  normalMap: jadeNORMAL,
  roughnessMap: jadeROUGHNESS,
  clearcoatRoughness: 0.1,
  emissive: 'green',
  bumpScale: 1,
  emissiveIntensity: 0.2,
  clearcoat: 0.5,
  roughness: 0.5,
  normalScale: new THREE.Vector2(0.15, 0.15),
})

const design1 = new THREE.MeshPhysicalMaterial({
  map: handleDesign1,
  normalMap: brassTexture,
  clearcoat: 1,
  metalness: 0.5,
  roughness: 0.5,
  normalScale: new THREE.Vector2(0.15, 0.15),
  clearcoatRoughness: 0.1,
  emissiveIntensity: 0.5
})

const design2 = new THREE.MeshPhysicalMaterial({
  map: handleDesign2,
  normalMap: marbleTexture,
  clearcoatMap: marbleRoughness,
  clearcoat: 0.5,
  roughness: 0.1,
  sheen: 0.5,
  normalScale: new THREE.Vector2(0.15, 0.15),
  clearcoatRoughness: 0.5,
  emissiveIntensity: 0.5
})

const design3 = new THREE.MeshStandardMaterial({
  roughness: 0.4,
  metalness: 0.4,
  emissiveIntensity: 0.1
})

const design4 = new THREE.MeshStandardMaterial({
  map: handleDesign4,
  roughnessMap: cherryWoodRoughness,
  flatShading: true,
  roughness: 0.5,
  emissive: 0x0
})

const design5 = new THREE.MeshStandardMaterial({
  alphaMap: handleDesign3,
  roughnessMap: ornateBrassTexture,
  bumpMap: ornateBrassHeight,
  bumpScale: 1,
  flatShading: true,
  roughness: 0.2,
  // metalness: 0.2,
  normalScale: new THREE.Vector2(1, 1),
  emissiveIntensity: 0.1
})

// trying to get this handle to resemble the AOMap texture more, can't seem to get it to play nice
const design6 = new THREE.MeshStandardMaterial({
  map: handleDesign3,
  normalMap: ornateBrassTexture,
  bumpMap: ornateBrassHeight,
  aoMap: ornateBrassAO,
  aoMapIntensity: 1,
  bumpScale: 1,
  flatShading: true,
  roughness: 0.2,
  metalness: 0.2,
  normalScale: new THREE.Vector2(0.55, 0.55),
  emissiveIntensity: 1
})

const design7 = new THREE.MeshStandardMaterial({
  map: handleDesign3,
  normalMap: ornateBrassTexture,
  bumpMap: ornateBrassHeight,
  bumpScale: 1,
  flatShading: true,
  roughness: 0.3,
  metalness: 0.5,
  normalScale: new THREE.Vector2(0.5, 0.5),
  emissiveIntensity: 0.1
})

const design8 = new THREE.MeshStandardMaterial({
  map: futureTexture,
  bumpScale: 1,
  flatShading: true,
  roughness: 0.3,
  metalness: 0.5,
  normalScale: new THREE.Vector2(0.5, 0.5),
  emissiveIntensity: 0.1
})

const design9 = new THREE.MeshStandardMaterial({
  map: handleDesign5,
  bumpMap: marbleRoughness,
  emissive: '#00a86b',
  flatShading: true,
  roughness: 0.1,
  metalness: 0.9,
  bumpScale: 1,
  normalScale: new THREE.Vector2(0.5, 0.5),
  emissiveIntensity: 0.5
})

const design10 = new THREE.MeshPhysicalMaterial({
  map: handleDesign5,
  bumpScale: 1,
  flatShading: true,
  roughness: 0.3,
  metalness: 0.9,
  normalScale: new THREE.Vector2(0.5, 0.5),
  emissiveIntensity: 0.5,
  emissive: 'gold'
})

export const handle1 = {
  design: speckledMarble,
  material: 'Speckled_Marble',
}
// export const handle2 = design2
export const handle2 = {
  design: cooper,
  material: 'Brass',
}
export const handle3 = {
  design: jade,
  material: 'Jade',
}

design9
export const handle4 = {
  design: design4,
  material: 'Wood',
}
export const handle5 = {
  design: volcanic,
  material: 'Volcanic_Rock'
}
export const handle6 = design6
export const handle7 = {
  design: design7,
  material: 'Brass'
}
export const handle8 = {
  design: design3,
  material: 'Platinum',
}
export const handle9 = {
  design: design8,
  material: 'Meteorite',
}
export const handle10 = {
  design: design10,
  material: 'Gold',
}
