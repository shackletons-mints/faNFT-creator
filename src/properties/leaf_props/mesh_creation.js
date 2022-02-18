import * as THREE from 'three'

import {
  leafDesign1,
  leafDesign2,
  leafDesign11,
  leafDesign13,
  leafDesign16,
  leafDesign17,
  leafDesign18,
  grainyTexture
} from './texture_loader.js'

/**
 * dirty tldr
 * map => good for pictures
 * normalMap => good for textures
 * normalScale => need it for normalMap, something with how light interacts with it
 * default gives no effect
 */

const leafDesignOne = new THREE.MeshStandardMaterial({
  map: leafDesign1,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf1 = {
  design: leafDesignOne,
  name: 'Kanagawa',
}

const leafDesignTwo = new THREE.MeshStandardMaterial({
  map: leafDesign2,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
})

export const leaf2 = {
  design: leafDesignTwo,
  name: 'Mt. Fuji',
}

const leafDesignEleven = new THREE.MeshStandardMaterial({
  map: leafDesign11,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf11 = {
  design: leafDesignEleven,
  name: 'Mountain Side',
}

const leafDesignThirteen = new THREE.MeshStandardMaterial({
  map: leafDesign13,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf13 = {
  design: leafDesignThirteen,
  name: 'Pagoda',
}

const leafDesignSixteen = new THREE.MeshStandardMaterial({
  map: leafDesign16,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf16 = {
  design: leafDesignSixteen,
  name: 'Geisha',
}

const leafDesignSeventeen = new THREE.MeshStandardMaterial({
  map: leafDesign17,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf17 = {
  design: leafDesignSeventeen,
  name: 'Frog riding Koi',
}

const leafDesignEighteen = new THREE.MeshStandardMaterial({
  map: leafDesign18,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf18 = {
  design: leafDesignEighteen,
  name: 'Year of the Tiger',
}

// are we still using this one?
export const leafDesignCompare = new THREE.MeshStandardMaterial({
  map: leafDesign1,
  side: THREE.DoubleSide
})