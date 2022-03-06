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
  swanPeonies,
  leafAO,
  leafCOLOR,
  leafHEIGHT,
  leafNORMAL,
  leafROUGHNESS,
  leafTEST,
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
  normalScale: new THREE.Vector2(-0.5, -0.1),
  // opacity: 0.95,
  // transparent: true,
  side: THREE.DoubleSide,
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

const leafswanPeonies = new THREE.MeshStandardMaterial({
  map: swanPeonies,
  ...leafSetup,
  // wireframe: true // cool effect with this on
})

export const leaf8 = {
  design: leafswanPeonies,
  name: 'Village_Far',
}
