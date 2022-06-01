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
  handle4,
  handle5,
  handle6,
  handle7,
  handle8,
  handle9,
  handle10,
} from '../properties/handle_props'

import {
  leaf1,
  leafTest,
} from '../properties/leaf_props'

import {
  fanQuarterGeometry,
  fanHalfGeometry,
  fanCircleCenterGeometry,
  pieWireframe,
  circleWireframe,
  halfLine,
  quarterLine,
} from '../properties/style_props'

import {
  getRandomLeafWithRarityLabel,
  getRandomHandleWithRarityLabel,
  getRandomParticleWithRarityLabel,
} from './generateRarityAttribute'
import { particle } from './particleHelpers'

const leafWithRarity = getRandomLeafWithRarityLabel()

// fan leaf
// WE NEED TO CHANGE THIS TO GET A FAN STYLE

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

const handleWithRarity = getRandomHandleWithRarityLabel()
const handleGeometry = new THREE.BoxGeometry(0.1, 0.06, 1.05)

const rightHandleHalfGeometry = new THREE.CircleGeometry(1.53, 28, Math.PI * 2, Math.PI / 14)
const leftHandleHalfGeometry = new THREE.BoxGeometry(0.1, 0.03, 1.45)

const topHandleGeometry = new THREE.BoxGeometry(0.05, 0.06, 1)
const topHandleMesh = new THREE.Mesh(topHandleGeometry, handleWithRarity.handle)

const handleMesh = new THREE.Mesh(handleGeometry, handleWithRarity.handle)
console.log(handleWithRarity)
const material = new THREE.MeshBasicMaterial( { color: '#222222' } )
export const centerHandleMesh = new THREE.Mesh(fanCircleCenterGeometry, handle5.design)

const rightHandleHalfMesh = new THREE.Mesh(rightHandleHalfGeometry, handle5.design)
const leftHandleHalfMesh = new THREE.Mesh(leftHandleHalfGeometry, handle5.design)

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

const lastCharIsNumber = word => {
    const lastChar = word[word.length - 1]

    if (Number(lastChar)) {
        return true
    }

    return false
}

const getRandomBackgroundBasedOnFanGroupRarity = () => {
  let leafRarity = fanRarityLabels.leaf
  let handleRarity = fanRarityLabels.handle
  if (lastCharIsNumber(leafRarity)) {
      leafRarity = leafRarity.slice(0, -1)
  }
  if (lastCharIsNumber(handleRarity)) {
    handleRarity = handleRarity.slice(0, -1)
  }
  const backgroundRarityIndex = Math.max(
    rarityLabels.indexOf(leafRarity),
    rarityLabels.indexOf(handleRarity)
  )

  return bgAttributeCollection[rarityLabels[backgroundRarityIndex]]
}

export const background = getRandomBackgroundBasedOnFanGroupRarity()

// TODO:
  // GROUP ALL STYLE CONDITIONS TOGETHER

  // -- HALF FAN NECESSICITES --------------------------------------|

    // // fan mesh setup
    // const fanMesh = new THREE.Mesh(fanHalfGeometry, leaf1.design) // half fan

    // // fan group setup
    // fanGroup.add(fanMesh, halfLine, centerHandleMesh)

    // // leaf placement
    // fanMesh.position.set(0, -0.5, -0.1)
    // fanMesh.rotation.z = Math.PI / 13

    // // handle placement
    // centerHandleMesh.position.set(0.03, -0.5, -0.175)
    // centerHandleMesh.rotation.x = Math.PI / 2
    // centerHandleMesh.rotation.y = Math.PI / 2

    // // wireframe placement

    // halfLine.position.set(0, -0.5, -0.1)
    // halfLine.rotation.z = Math.PI / 13

  // |------QUARTER FAN NECESSICITES ------------------------------|

    // fan mesh setup
    // console.log(leafTest)
    const fanMesh = new THREE.Mesh(fanQuarterGeometry, leafWithRarity.leaf) // quarter fan

    // fan group setup
    fanGroup.add(fanMesh, quarterLine, topHandleMesh, handleMesh )

    // leaf placement
    fanMesh.position.set(-0.35, -0.5, 0.95)

    // handle placement
    topHandleMesh.position.set(-0.55, -0.05, 0.97)
    topHandleMesh.rotation.set(1.5, 0.45, 0)
    handleMesh.position.set(0.14, -0.5, 0.98)
    handleMesh.rotation.y += 1.6

    // wireframe placement
    quarterLine.position.set(-0.35, -0.5, 0.95) // pie line

// fanMesh.position.set(0, -0.5, -0.1) // halfFanMesh
// fanMesh.rotation.z = Math.PI / 13 // only for halfFan

// centerHandleMesh.position.set(0, 0, 0) // halfFanMesh black thing in center
// centerHandleMesh.position.set(0.03, -0.5, -0.175) // halfFanMesh black thing in center
// centerHandleMesh.rotation.x = Math.PI / 2
// centerHandleMesh.rotation.y = Math.PI / 2
// centerHandleMesh.position.set(0.1, 0.5, 0.55) // halfFanMesh black thing in center

// fanHeartMesh.position.set(-0.3, -0.5, 0)
// fanCircleMesh.position.set(0, 0.2, 0)
// fanCircleCenterMesh.position.set(0, 0.2, 0)
// line.position.set(0, -0.5, -0.1) //
// line.rotation.z = Math.PI / 13 //  only for halfFan
// line.position.set(-0.3, -0.5, 0.5) // pie line

// rightHandleHalfMesh.position.set(.1, -0.5, -0.5)
// leftHandleHalfMesh.position.set(0.9, -0.5, -0.55)



// leftHandleHalfMesh.rotation.y += 1.6

// cool effect
// fanGroup.rotation.x += 10
fanGroup.position.x += 2