import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()

export const commonBG = textureLoader.load('./properties/backgrounds/bg_assets/commonBG.jpeg')
export const uncommonBG = textureLoader.load('./properties/backgrounds/bg_assets/uncommonBG.jpeg')
export const rareBG = textureLoader.load('./properties/backgrounds/bg_assets/rareBG.jpeg')
export const epicBG = textureLoader.load('./properties/backgrounds/bg_assets/epicBG.jpeg')
export const legendaryBG = textureLoader.load('./properties/backgrounds/bg_assets/legendaryBG.jpeg')