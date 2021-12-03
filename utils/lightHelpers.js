import * as THREE from 'three'

const color = 0xffffff
const intensity = 0.8
const directLightIntensity = 0.1
export const light = new THREE.AmbientLight(color, intensity)

export const spotLightStraightOn = new THREE.DirectionalLight(
  'white',
  directLightIntensity
)

spotLightStraightOn.position.set(0.3, -0.5, 2.5)

export const spotLightStraightOnHelper = new THREE.DirectionalLightHelper(
  spotLightStraightOn
)

