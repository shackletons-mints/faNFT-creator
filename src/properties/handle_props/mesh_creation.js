import * as THREE from 'three'

import {
    handleDesign3,
    handleDesign4,
    handleDesign5,
    ornateBrassTexture,
    futureTexture,
    marbleRoughness,
    cherryWoodRoughness,
    ornateBrassHeight,
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
    tilesAO,
    tilesCOLOR,
    tilesHEIGHT,
    tilesNORMAL,
    tilesROUGHNESS,
    woodAO,
    woodCOLOR,
    woodHEIGHT,
    woodsNORMAL,
    woodROUGHNESS,
    lazuliAO,
    lazuliCOLOR,
    lazuliHEIGHT,
    lazuliNORMAL,
    lazuliROUGHNESS,
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
    clearcoat: 0.2,
    roughness: 0.9,
    normalScale: new THREE.Vector2(-15, 1),
})

const cooper = new THREE.MeshPhysicalMaterial({
    alphaMap: cooperCOLOR,
    map: cooperCOLOR,
    aoMap: cooperAO,
    aoMapIntensity: 0.5,
    bumpMap: cooperDISPLACEMENT,
    bumpScale: 0.5,
    normalMap: cooperNORMAL,
    normalScale: new THREE.Vector2(-25, 0),
    roughnessMap: cooperROUGHNESS,
    clearcoatMap: cooperMETALIC,
    clearcoatRoughness: 0.5,
    clearcoat: 0.5,
    metalness: 0.3,
    roughness: 0.1,
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

const redWood = new THREE.MeshPhysicalMaterial({
    aoMap: tilesAO,
    map: tilesCOLOR,
    bumpMap: tilesHEIGHT,
    normalMap: tilesNORMAL,
    roughnessMap: tilesROUGHNESS,
    bumpScale: 1,
    clearcoatRoughness: 0.9,
    aoMapIntensity: 0.9,
    clearcoat: 0.5,
    roughness: 0.9,
    normalScale: new THREE.Vector2(15, 15),
})

const paintedWood = new THREE.MeshPhysicalMaterial({
    aoMap: woodAO,
    map: woodCOLOR,
    bumpMap: woodHEIGHT,
    normalMap: woodsNORMAL,
    roughnessMap: woodROUGHNESS,
    bumpScale: 1,
    clearcoatRoughness: 0.9,
    aoMapIntensity: 0.9,
    clearcoat: 0.1,
    roughness: 0.9,
    sheen: 0.1,
    normalScale: new THREE.Vector2(15, 15),
})

const lazuli = new THREE.MeshPhysicalMaterial({
    aoMap: lazuliAO,
    map: lazuliCOLOR,
    bumpMap: lazuliHEIGHT,
    normalMap: lazuliNORMAL,
    roughnessMap: lazuliROUGHNESS,
    bumpScale: 0.1,
    clearcoatRoughness: 0.1,
    aoMapIntensity: 0.5,
    clearcoat: 0.75,
    roughness: 0.1,
    sheen: 1,
    normalScale: new THREE.Vector2(-1, -1),
})

const design4 = new THREE.MeshStandardMaterial({
    map: handleDesign4,
    roughnessMap: cherryWoodRoughness,
    normalMap: cherryWoodRoughness,
    normalScale: new THREE.Vector2(1, 1),
    flatShading: true,
    roughness: 0.9,
    emissive: 0x0
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
    roughness: 0.35,
    emissive: 'pink',
    bumpScale: 1,
    metalness: 0.5,
    normalScale: new THREE.Vector2(-Math.PI, 1),
    emissiveIntensity: 0.25
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
    design: paintedWood,
    material: 'Painted_Wood',
}
export const handle2 = {
    design: cooper,
    material: 'Cooper',
}
export const handle3 = {
    design: jade,
    material: 'Jade',
}

// can we get more grain?
export const handle4 = {
    design: design4,
    material: 'Wood',
}
// 
export const handle5 = {
    design: volcanic,
    material: 'Volcanic_Rock'
}
export const handle6 = {
    design: redWood,
    material: 'Stacked_Wood'
}

export const handle7 = {
    design: design7,
    material: 'Brass'
}

export const handle8 = {
    design: lazuli,
    material: 'Lapis_Lazuli',
}
export const handle9 = {
    design: design8,
    material: 'Space_Metal',
}
export const handle10 = {
    design: design10,
    material: 'Gold',
}
