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
  ornateBrassAO
} from './texture_loader.js'

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
  roughnessMap: cherryWoodRoughness,
  emissive: 'green',
  emissiveIntensity: 0.25
})

const design10 = new THREE.MeshPhysicalMaterial({
  map: handleDesign6,
  bumpScale: 1,
  flatShading: true,
  roughness: 0.3,
  metalness: 0.9,
  normalScale: new THREE.Vector2(0.5, 0.5),
  emissiveIntensity: 0.5,
  emissive: 'gold'
})

export const handle1 = design1
export const handle2 = design1
export const handle3 = design2
export const handle4 = design2
export const handle5 = design9
export const handle6 = design4
export const handle7 = design4
export const handle8 = design5
export const handle9 = design5
export const handle10 = design6
export const handle11 = design6
export const handle12 = design7
export const handle13 = design8
export const handle14 = design3
export const handle15 = design10
