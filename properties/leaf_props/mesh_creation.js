import * as THREE from 'three'

import {
  leafDesign1,
  leafDesign2,
  leafDesign3,
  leafDesign4,
  leafDesign5,
  leafDesign6,
  leafDesign7,
  leafDesign8,
  leafDesign9,
  leafDesign10,
  leafDesign11,
  leafDesign12,
  leafDesign13,
  leafDesign14,
  grainyTexture
} from './texture_loader.js'

/**
 * dirty tldr
 * map => good for pictures
 * normalMap => good for textures
 * normalScale => need it for normalMap, something with how light interacts with it
 * default gives no effect
 */

export const leaf1 = new THREE.MeshStandardMaterial({
  map: leafDesign1,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf2 = new THREE.MeshStandardMaterial({
  map: leafDesign2,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf3 = new THREE.MeshStandardMaterial({
  map: leafDesign3,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})
export const leaf4 = new THREE.MeshStandardMaterial({
  map: leafDesign4,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf5 = new THREE.MeshStandardMaterial({
  map: leafDesign5,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})
export const leaf6 = new THREE.MeshStandardMaterial({
  map: leafDesign6,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})
export const leaf7 = new THREE.MeshStandardMaterial({
  map: leafDesign7,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})
export const leaf8 = new THREE.MeshStandardMaterial({
  map: leafDesign8,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})
export const leaf9 = new THREE.MeshStandardMaterial({
  map: leafDesign9,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})
export const leaf10 = new THREE.MeshStandardMaterial({
  map: leafDesign10,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})
export const leaf11 = new THREE.MeshStandardMaterial({
  map: leafDesign11,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})
export const leaf12 = new THREE.MeshStandardMaterial({
  map: leafDesign12,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})
export const leaf13 = new THREE.MeshStandardMaterial({
  map: leafDesign13,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})
export const leaf14 = new THREE.MeshStandardMaterial({
  map: leafDesign14,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leafDesignCompare = new THREE.MeshStandardMaterial({
  map: leafDesign1,
  side: THREE.DoubleSide
})