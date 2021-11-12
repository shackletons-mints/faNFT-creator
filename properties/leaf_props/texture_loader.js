import * as THREE from 'three'

// use to load assets
const textureLoader = new THREE.TextureLoader()

export const leafDesign1 = textureLoader.load('./properties/leaf_props/designs/wave.jpeg')
export const leafDesign2 = textureLoader.load('./properties/leaf_props/designs/mountain_and_boat.jpeg')
export const leafDesign3 = textureLoader.load('./properties/leaf_props/designs/wave2.jpg')

export const grainyTexture = textureLoader.load('./properties/textures/grainy.jpeg')
// this one sucks
// export const fanTexture = textureLoader.load('./properties/textures/fanTexture.jpeg')


