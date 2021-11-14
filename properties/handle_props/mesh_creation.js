import * as THREE from 'three'

import {
  handleDesign1,
  handleDesign2,
  handleDesign3,
  handleDesign4,
  brassTexture,
  marbleTexture,
  ornateBrassTexture,
  marbleRoughness,
  cherryWoodRoughness,
  ornateBrassHeight
} from './texture_loader.js'

export const handle1 = new THREE.MeshPhysicalMaterial({
  map: handleDesign1,
  normalMap: brassTexture,
  clearcoat: 1,
  metalness: 0.5,
  roughness: 0.5,
  normalScale: new THREE.Vector2(0.15, 0.15),
  clearcoatRoughness: 0.1,
  emissiveIntensity: 0.5
})

export const handle2 = new THREE.MeshPhysicalMaterial({
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

export const handle3 = new THREE.MeshStandardMaterial({
  roughness: 0.4,
  metalness: 0.4,
  sheen: 1,
  clearcoatRoughness: 0.5,
  emissiveIntensity: 0.1
})

export const handle4 = new THREE.MeshStandardMaterial({
  map: handleDesign4,
  roughnessMap: cherryWoodRoughness,
  flatShading: true,
  roughness: 1,
  emissive: 0x0
})

export const handle5 = new THREE.MeshStandardMaterial({
  alphaMap: handleDesign3,
  roughnessMap: ornateBrassTexture,
  bumpMap: ornateBrassHeight,
  bumpScale: 1,
  flatShading: 1,
  clearcoat: 0.5,
  roughness: 0.2,
  // metalness: 0.2,
  sheen: 1,
  normalScale: new THREE.Vector2(1, 1),
  clearcoatRoughness: 0.1,
  emissiveIntensity: 0.1
})

export const handle6 = new THREE.MeshStandardMaterial({
  map: handleDesign3,
  normalMap: ornateBrassTexture,
  bumpMap: ornateBrassHeight,
  bumpScale: 1,
  flatShading: true,
  clearcoat: 1,
  roughness: 0.3,
  metalness: 0.5,
  sheen: 0.5,
  normalScale: new THREE.Vector2(0.5, 0.5),
  clearcoatRoughness: 0.1,
  emissiveIntensity: 0.1
})
