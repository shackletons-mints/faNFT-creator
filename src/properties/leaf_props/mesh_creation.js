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
  leafDesign15,
  leafDesign16,
  leafDesign17,
  leafDesign18,
  leafDesign19,
  leafDesign20,
  leafDesign21,
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
}

const leafDesignTwo = new THREE.MeshStandardMaterial({
  map: leafDesign2,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
})

export const leaf2 = {
  design: leafDesignTwo
}

const leafDesignThree = new THREE.MeshStandardMaterial({
  map: leafDesign3,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
})

export const leaf3 = {
  design: leafDesignThree
}

const leafDesignFour = new THREE.MeshStandardMaterial({
  map: leafDesign4,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf4 = {
  design: leafDesignFour
}

const leafDesignFive = new THREE.MeshStandardMaterial({
  map: leafDesign5,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf5 = {
  design: leafDesignFive
}

const leafDesignSix = new THREE.MeshStandardMaterial({
  map: leafDesign6,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf6 = {
  design: leafDesignSix
}

const leafDesignSeven = new THREE.MeshStandardMaterial({
  map: leafDesign7,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf7 = {
  design: leafDesignSeven
}

const leafDesignEight = new THREE.MeshStandardMaterial({
  map: leafDesign8,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf8 = {
  design: leafDesignEight
}

const leafDesignNine = new THREE.MeshStandardMaterial({
  map: leafDesign9,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf9 = {
  design: leafDesignNine
}

const leafDesignTen = new THREE.MeshStandardMaterial({
  map: leafDesign10,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf10 = {
  design: leafDesignTen
}

const leafDesignEleven = new THREE.MeshStandardMaterial({
  map: leafDesign11,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf11 = {
  design: leafDesignEleven
}

const leafDesignTwelve = new THREE.MeshStandardMaterial({
  map: leafDesign12,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf12 = {
  design: leafDesignTwelve
}

const leafDesignThirteen = new THREE.MeshStandardMaterial({
  map: leafDesign13,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf13 = {
  design: leafDesignThirteen
}

const leafDesignFourteen = new THREE.MeshStandardMaterial({
  map: leafDesign14,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf14 = {
  design: leafDesignFourteen
}

const leafDesignFifteen = new THREE.MeshStandardMaterial({
  map: leafDesign15,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf15 = {
  design: leafDesignFifteen
}

const leafDesignSixteen = new THREE.MeshStandardMaterial({
  map: leafDesign16,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf16 = {
  design: leafDesignSixteen
}

const leafDesignSeventeen = new THREE.MeshStandardMaterial({
  map: leafDesign17,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf17 = {
  design: leafDesignSeventeen
}

const leafDesignEighteen = new THREE.MeshStandardMaterial({
  map: leafDesign18,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf18 = {
  design: leafDesignEighteen
}
const leafDesignNineteen = new THREE.MeshStandardMaterial({
  map: leafDesign19,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf19 = {
  design: leafDesignNineteen
}
const leafDesignTwenty = new THREE.MeshStandardMaterial({
  map: leafDesign20,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf20 = {
  design: leafDesignTwenty
}
const leafDesignTwentyOne = new THREE.MeshStandardMaterial({
  map: leafDesign21,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

export const leaf21 = {
  design: leafDesignTwentyOne
}


// are we still using this one?
export const leafDesignCompare = new THREE.MeshStandardMaterial({
  map: leafDesign1,
  side: THREE.DoubleSide
})