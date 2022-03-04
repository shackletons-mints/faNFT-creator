import * as THREE from 'three'
/**
 * leaf1 - wave
 * leaf2 - mountain
 * leaf3 - fish
 * leaf4 - white
 * leaf5 - china
 * leaf6 - green
 * leaf7 - USA
 * leaf8 - TWO samurai
 * leaf9 - ONE samurai
 * leaf10 - blue
 * leaf11 - mountain/tree
 * leaf12 - umbrellas
 * leaf13 - pagoda
 * leaf14 - red
 * leaf15 - temple
 * leaf16 - geisha
 * leaf17 - frogOnFish
 * leaf18 - tiger head
 * leaf19 - grey
 * leaf20 - purple
 * leaf21 - red
 */
// use to load assets
const textureLoader = new THREE.TextureLoader()

export const leafDesign1 = textureLoader.load('./properties/leaf_props/designs/wave.jpg')
export const leafDesign2 = textureLoader.load('./properties/leaf_props/designs/mountain_and_boat.jpeg')

export const leafDesign11 = textureLoader.load('./properties/leaf_props/designs/mountain.jpeg')
leafDesign11.wrapS = THREE.RepeatWrapping
leafDesign11.wrapT = THREE.RepeatWrapping
leafDesign11.offset.set( -0.15, -0.19 )

export const leafDesign13 = textureLoader.load('./properties/leaf_props/designs/pagoda.jpeg')
leafDesign13.wrapS = THREE.RepeatWrapping
leafDesign13.wrapT = THREE.RepeatWrapping
leafDesign13.offset.set( -0.15, -0.1 )

export const leafDesign16 = textureLoader.load('./properties/leaf_props/designs/geisha.jpeg')
leafDesign16.wrapS = THREE.RepeatWrapping
leafDesign16.wrapT = THREE.RepeatWrapping
leafDesign16.offset.set( -0.1, 0 )

export const leafDesign17 = textureLoader.load('./properties/leaf_props/designs/frog.jpg')
leafDesign17.wrapS = THREE.RepeatWrapping
leafDesign17.wrapT = THREE.RepeatWrapping
leafDesign17.offset.set( -0.1, -0.2 )

export const leafDesign18 = textureLoader.load('./properties/leaf_props/designs/tiger.jpeg')
leafDesign18.wrapS = THREE.RepeatWrapping
leafDesign18.wrapT = THREE.RepeatWrapping
leafDesign18.offset.set( -0.3, -0.3 )

export const grainyTexture = textureLoader.load('./properties/textures/grainy.jpeg')

export const leafAO = textureLoader.load('./properties/leaf_props/designs/leafAO.jpg')
export const leafCOLOR = textureLoader.load('./properties/leaf_props/designs/leafCOLOR.jpg')
export const leafHEIGHT = textureLoader.load('./properties/leaf_props/designs/leafHEIGHT.png')
export const leafNORMAL = textureLoader.load('./properties/leaf_props/designs/leafNORMAL.png')
export const leafROUGHNESS = textureLoader.load('./properties/leaf_props/designs/leafROUGHNESS.jpg')

