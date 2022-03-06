import * as THREE from 'three'

import {
  commonBG,
  uncommonBG,
  rareBG,
  epicBG,
  legendaryBG,
} from '../properties/backgrounds'

import {
  handle1,
  handle2,
  handle3,
  handle5,
  handle10
} from '../properties/handle_props'

import {
  leaf1,
  leaf8
} from '../properties/leaf_props'

import {
  fanQuarterGeometry,
  fanHalfGeometry,
  fanCircleCenterGeometry,
  pieWireframe,
  circleWireframe,
  line
} from '../properties/style_props'

import {
  getRandomLeafWithRarityLabel,
  getRandomHandleWithRarityLabel,
  getRandomParticleWithRarityLabel
} from './generateRarityAttribute'
import { particle } from './particleHelpers'

const leafWithRarity = getRandomLeafWithRarityLabel()

// fan leaf
// WE NEED TO CHANGE THIS TO GET A FAN STYLE
const fanMesh = new THREE.Mesh(fanHalfGeometry, leaf1.design)
// const fanCircleMesh = new THREE.Mesh(fanCircleGeometry, leafWithRarity.leaf)
// fanCircleMesh.material.transparent = true
// fanCircleMesh.material.opacity = 0.9
// const fanCircleCenterMesh = new THREE.Mesh(fanCircleCenter)

/**
 *    leaf1 - wave
 *    leaf2 - mountain
 *    leaf11 - mountain/tree
 *    leaf13 - pagoda
 *    leaf16 - geisha
 *    leaf17 - frogOnFish
 *    leaf18 - tiger head
 *
 */

// fan handle
const handleWithRarity = getRandomHandleWithRarityLabel()
const handleGeometry = new THREE.BoxGeometry(0.1, 0.06, 1.05)

const rightHandleHalfGeometry = new THREE.CircleGeometry(1.53, 28, Math.PI * 2, Math.PI / 14)
const leftHandleHalfGeometry = new THREE.BoxGeometry(0.1, 0.03, 1.45)

const topHandleGeometry = new THREE.BoxGeometry(0.05, 0.06, 1)
const topHandleMesh = new THREE.Mesh(topHandleGeometry, handleWithRarity.handle)

const handleMesh = new THREE.Mesh(handleGeometry, handle5.design)
const material = new THREE.MeshBasicMaterial( { color: '#222222' } )
export const fanCenterMesh = new THREE.Mesh(fanCircleCenterGeometry, handle5.design)
console.log(fanCenterMesh)

const rightHandleHalfMesh = new THREE.Mesh(rightHandleHalfGeometry, handle10.design)
const leftHandleHalfMesh = new THREE.Mesh(leftHandleHalfGeometry, handle10.design)

/**
 * handle4 = wood
 * handle7 = brass
 * handle8 = futuristic
 * handle9 = marble
 * handle10 = gold
 */

const particleWithRarity = getRandomParticleWithRarityLabel()

export const fanGroup = new THREE.Group()
export const fanRarityLabels = {
  leaf: leafWithRarity.rarity,
  leafName: leafWithRarity.name,
  handle: handleWithRarity.rarity,
  handleMaterial: handleWithRarity.material,
  particle: particleWithRarity.rarity,
  particleEffect: particleWithRarity.effect,
}

const bgAttributeCollection = {
  Common: commonBG,
  Uncommon: uncommonBG,
  Rare: rareBG,
  Epic: epicBG,
  Legendary: legendaryBG,
}

const rarityLabels = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']

const getRandomBackgroundBasedOnFanGroupRarity = () => {
  const backgroundRarityIndex = Math.max(
    rarityLabels.indexOf(fanRarityLabels.leaf),
    rarityLabels.indexOf(fanRarityLabels.handle)
  )

  return bgAttributeCollection[rarityLabels[backgroundRarityIndex]]
}

export const background = getRandomBackgroundBasedOnFanGroupRarity()

fanGroup.add(fanMesh, line, fanCenterMesh)

// center image and package them as one
fanMesh.position.set(0, -0.5, -0.1) // halfFanMesh
fanMesh.rotation.z = Math.PI / 13 // only for halfFan

// fanCenterMesh.position.set(0, 0, 0) // halfFanMesh black thing in center
fanCenterMesh.position.set(0.03, -0.5, -0.175) // halfFanMesh black thing in center
fanCenterMesh.rotation.x = Math.PI / 2
fanCenterMesh.rotation.y = Math.PI / 2
// fanCenterMesh.position.set(0.1, 0.5, 0.55) // halfFanMesh black thing in center

// fanHeartMesh.position.set(-0.3, -0.5, 0)
// fanCircleMesh.position.set(0, 0.2, 0)
// fanCircleCenterMesh.position.set(0, 0.2, 0)
line.position.set(0, -0.5, -0.1) //
line.rotation.z = Math.PI / 13 //  only for halfFan
// line.position.set(-0.3, -0.5, 0.5) // pie line
handleMesh.position.set(0.19, -0.5, 0.53)
rightHandleHalfMesh.position.set(.1, -0.5, -0.5)
leftHandleHalfMesh.position.set(0.9, -0.5, -0.55)
topHandleMesh.position.set(-0.5, -0.05, 0.52)
// topHandleMesh.position.set(-0.5, -0.05, 0.52)
topHandleMesh.rotation.set(1.5, 0.45, 0)
// topHandleMesh.rotation.set(1.5, 0.5, -0.9)

handleMesh.rotation.y += 1.55
leftHandleHalfMesh.rotation.y += 1.6

// cool effect
// fanGroup.rotation.x += 10
// fanGroup.position.x += 10
