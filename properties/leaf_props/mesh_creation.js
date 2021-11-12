import * as THREE from 'three'

import {
  leafDesign1,
  leafDesign2,
  leafDesign3,
  grainyTexture
} from './texture_loader.js'

/**
 * dirty tldr
 * map => good for pictures
 * normalMap => good for textures
 * normalScale => need it for normalMap, something with how light interacts with it
 * default gives no effect
 */

export const leafDesign = new THREE.MeshStandardMaterial({
  map: leafDesign1,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leafDesignCompare = new THREE.MeshStandardMaterial({
  map: leafDesign1,
  side: THREE.DoubleSide
})