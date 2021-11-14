import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()

export const handleDesign1 = textureLoader.load('./properties/handle_props/designs/brass_albedo.png')
export const handleDesign2 = textureLoader.load('./properties/handle_props/designs/stringyMarble.png')
export const handleDesign3 = textureLoader.load('./properties/handle_props/designs/ornateBrass.png')
export const handleDesign4 = textureLoader.load('./properties/handle_props/designs/cherryWood.png')

export const brassTexture = textureLoader.load('./properties/textures/brass.png')
export const marbleTexture = textureLoader.load('./properties/textures/stringyMarbleTexture.png')
export const ornateBrassTexture = textureLoader.load('./properties/textures/ornateBrassTexture.png')

export const marbleRoughness = textureLoader.load('./properties/textures/stringyMarbleRoughness.png')
export const cherryWoodRoughness = textureLoader.load('./properties/textures/cherryWoodRoughness.png')

export const ornateBrassHeight = textureLoader.load('./properties/textures/ornateBrassHeight.png')