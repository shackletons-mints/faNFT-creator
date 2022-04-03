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

export const wave = textureLoader.load('./properties/leaf_props/designs/wave.jpg')
export const mountainBoat = textureLoader.load('./properties/leaf_props/designs/mountain_and_boat.jpeg')

export const mountain = textureLoader.load('./properties/leaf_props/designs/mountain.jpeg')
mountain.wrapS = THREE.RepeatWrapping
mountain.wrapT = THREE.RepeatWrapping
mountain.offset.set( -0.15, -0.19 )

export const pagoda = textureLoader.load('./properties/leaf_props/designs/pagoda.jpeg')
pagoda.wrapS = THREE.RepeatWrapping
pagoda.wrapT = THREE.RepeatWrapping
pagoda.offset.set( -0.15, -0.1 )

export const geisha = textureLoader.load('./properties/leaf_props/designs/geisha.jpeg')
geisha.wrapS = THREE.RepeatWrapping
geisha.wrapT = THREE.RepeatWrapping
geisha.offset.set( -0.1, 0 )

export const frog = textureLoader.load('./properties/leaf_props/designs/frog.jpg')
frog.wrapS = THREE.RepeatWrapping
frog.wrapT = THREE.RepeatWrapping
frog.offset.set( -0.1, -0.2 )

export const tiger = textureLoader.load('./properties/leaf_props/designs/tiger.jpeg')
tiger.wrapS = THREE.RepeatWrapping
tiger.wrapT = THREE.RepeatWrapping
tiger.offset.set( -0.3, -0.3 )

export const villageFar = textureLoader.load('./properties/leaf_props/designs/village_far.jpg')
villageFar.offset.set( -0.05, -0.25 )

export const cranePattern = textureLoader.load('./properties/leaf_props/designs/crane_pattern.jpg')
cranePattern.wrapS = THREE.RepeatWrapping
cranePattern.wrapT = THREE.RepeatWrapping
cranePattern.offset.set( -0.5, -0.5 )

export const horsePattern = textureLoader.load('./properties/leaf_props/designs/horses.jpg')
horsePattern.wrapS = THREE.RepeatWrapping
horsePattern.wrapT = THREE.RepeatWrapping
horsePattern .offset.set( -0.15, 0.1 )

console.log(horsePattern)


// export const swanPeonies = textureLoader.load('./properties/leaf_props/designs/swan_peony.png')
// swanPeonies.center.set(.5, 1)
// swanPeonies.wrapS = THREE.ClampToEdgeWrapping
// swanPeonies.wrapT = THREE.ClampToEdgeWrapping
// swanPeonies.minFilter = THREE.NearestFilter
// swanPeonies.offset.set( -0.1, -0.1 )





export const leafAO = textureLoader.load('./properties/leaf_props/designs/leafAO.jpg')
export const leafCOLOR = textureLoader.load('./properties/leaf_props/designs/leafCOLOR.jpg')
export const leafHEIGHT = textureLoader.load('./properties/leaf_props/designs/leafHEIGHT.png')
export const leafNORMAL = textureLoader.load('./properties/leaf_props/designs/leafNORMAL.png')
export const leafROUGHNESS = textureLoader.load('./properties/leaf_props/designs/leafROUGHNESS.jpg')
export const leafTEST = textureLoader.load('./properties/leaf_props/designs/leafTEST.jpg')

