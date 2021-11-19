import * as THREE from 'three'

// use to load assets
const textureLoader = new THREE.TextureLoader()

export const leafDesign1 = textureLoader.load('./properties/leaf_props/designs/wave.jpeg')
export const leafDesign2 = textureLoader.load('./properties/leaf_props/designs/mountain_and_boat.jpeg')
export const leafDesign3 = textureLoader.load('./properties/leaf_props/designs/wave2.jpg')
export const leafDesign4 = textureLoader.load('./properties/leaf_props/designs/watercolor.jpeg')
export const leafDesign5 = textureLoader.load('./properties/leaf_props/designs/chinaDesign.jpeg')
leafDesign5.wrapS = THREE.RepeatWrapping;
leafDesign5.wrapT = THREE.RepeatWrapping;
leafDesign5.offset.set( .6, 0 );
leafDesign5.center.set(0.7, 0.7)
leafDesign5.rotation = 0.6
export const leafDesign6 = textureLoader.load('./properties/leaf_props/designs/greenDesign.jpeg')
export const leafDesign7 = textureLoader.load('./properties/leaf_props/designs/USFlag.png')
leafDesign7.wrapS = THREE.RepeatWrapping;
leafDesign7.wrapT = THREE.RepeatWrapping;
leafDesign7.offset.set( -0.15, -0.145 );
leafDesign7.center.set(0.7, 0.7)
leafDesign7.rotation = 0.6
export const leafDesign8 = textureLoader.load('./properties/leaf_props/designs/texasFlag.png')
export const leafDesign9 = textureLoader.load('./properties/leaf_props/designs/amoungUsRed.png')
export const leafDesign10 = textureLoader.load('./properties/leaf_props/designs/blueDesign.jpeg')
export const leafDesign11 = textureLoader.load('./properties/leaf_props/designs/mountain.jpeg')
export const leafDesign12 = textureLoader.load('./properties/leaf_props/designs/mountain2.jpeg')
export const leafDesign13 = textureLoader.load('./properties/leaf_props/designs/pagoda.jpeg')
export const leafDesign14 = textureLoader.load('./properties/leaf_props/designs/redDesign.jpeg')

export const grainyTexture = textureLoader.load('./properties/textures/grainy.jpeg')
// this one sucks
// export const fanTexture = textureLoader.load('./properties/textures/fanTexture.jpeg')


