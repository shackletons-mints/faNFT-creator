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
export const leafDesign3 = textureLoader.load('./properties/leaf_props/designs/koiBoi.jpeg')
leafDesign3.wrapS = THREE.RepeatWrapping
leafDesign3.wrapT = THREE.RepeatWrapping
leafDesign3.offset.set( -0.39, -0.5 )
leafDesign3.center.set(0.5, 0.5)
leafDesign3.rotation = 0.1

export const leafDesign4 = textureLoader.load('./properties/leaf_props/designs/watercolor.jpeg')
export const leafDesign5 = textureLoader.load('./properties/leaf_props/designs/chinaDesign.jpeg')
leafDesign5.wrapS = THREE.RepeatWrapping
leafDesign5.wrapT = THREE.RepeatWrapping
leafDesign5.offset.set( 0.6, 0 )
leafDesign5.center.set(0.7, 0.7)
leafDesign5.rotation = 0.6

export const leafDesign6 = textureLoader.load('./properties/leaf_props/designs/greenDesign.jpeg')
export const leafDesign7 = textureLoader.load('./properties/leaf_props/designs/USFlag.png')
leafDesign7.wrapS = THREE.RepeatWrapping
leafDesign7.wrapT = THREE.RepeatWrapping
leafDesign7.offset.set( -0.15, -0.145 )
leafDesign7.center.set(0.7, 0.7)
leafDesign7.rotation = 0.6

export const leafDesign8 = textureLoader.load('./properties/leaf_props/designs/stabInTheBack.jpeg')
leafDesign8.wrapS = THREE.RepeatWrapping
leafDesign8.wrapT = THREE.RepeatWrapping
leafDesign8.offset.set( -0.15, -0.1 )

export const leafDesign9 = textureLoader.load('./properties/leaf_props/designs/demonFight.jpeg')
export const leafDesign10 = textureLoader.load('./properties/leaf_props/designs/blueDesign.jpeg')
export const leafDesign11 = textureLoader.load('./properties/leaf_props/designs/mountain.jpeg')
leafDesign11.wrapS = THREE.RepeatWrapping
leafDesign11.wrapT = THREE.RepeatWrapping
leafDesign11.offset.set( -0.15, -0.19 )

export const leafDesign12 = textureLoader.load('./properties/leaf_props/designs/umbrella.jpeg')
export const leafDesign13 = textureLoader.load('./properties/leaf_props/designs/pagoda.jpeg')
leafDesign13.wrapS = THREE.RepeatWrapping
leafDesign13.wrapT = THREE.RepeatWrapping
leafDesign13.offset.set( -0.15, -0.1 )

export const leafDesign14 = textureLoader.load('./properties/leaf_props/designs/redDesign.jpeg')
export const leafDesign15 = textureLoader.load('./properties/leaf_props/designs/pagoda.jpeg')
leafDesign15.wrapS = THREE.RepeatWrapping
leafDesign15.wrapT = THREE.RepeatWrapping
leafDesign15.offset.set( 0, 0.5 )

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

export const leafDesign19 = textureLoader.load('./properties/leaf_props/designs/silverDesign.jpeg')
export const leafDesign20 = textureLoader.load('./properties/leaf_props/designs/purpleDesign.jpeg')
export const leafDesign21 = textureLoader.load('./properties/leaf_props/designs/orangeDesign.jpeg')
export const grainyTexture = textureLoader.load('./properties/textures/grainy.jpeg')


