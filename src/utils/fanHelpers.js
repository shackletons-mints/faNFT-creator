import * as THREE from 'three'

import {
  commonBG,
  uncommonBG,
  rareBG,
  epicBG,
  legendaryBG,
} from '../properties/backgrounds'

import {
  getRandomLeafWithRarityLabel,
  getRandomHandleWithRarityLabel,
  getRandomParticleWithRarityLabel
} from './generateRarityAttribute'
import { particle } from './particleHelpers'

// fan config
const fanGeometry = new THREE.CircleGeometry(1, 30, 0, 2)
const testGeometry = new THREE.CircleGeometry(1, 30, 10, 10)
const positionAttribute = fanGeometry.attributes.position
const testAttributes = testGeometry.attributes.position

// creates fan ripples
for (let i = 0; i < positionAttribute.count; i++) {
  let z = positionAttribute.getZ(i)

  if (i % 2 === 0) {
    z += 0.05
  }

  positionAttribute.setZ(i, z)
}

// creates fan ripples
for (let i = 0; i < testAttributes.count; i++) {
  if (i > 15) break
  let z = testAttributes.getZ(i)

  if (i % 2 === 0) {
    z -= 0.1
  }

  testAttributes.setZ(i, z)
}

const wireframe = new THREE.WireframeGeometry(fanGeometry)
const testWireframe = new THREE.WireframeGeometry(testGeometry)
const wireMaterial = new THREE.LineBasicMaterial({
  color: '#c5b391',
})
const line = new THREE.LineSegments(testWireframe, wireMaterial)
line.side = THREE.DoubleSide

// fan leaf
const leafWithRarity = getRandomLeafWithRarityLabel()
const circle = new THREE.Mesh(fanGeometry, leafWithRarity.leaf)
const testCircle = new THREE.Mesh(testGeometry, leafWithRarity.leaf)

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
const topHandleGeometry = new THREE.BoxGeometry(0.05, 0.06, 1)
const topHandleMesh = new THREE.Mesh(topHandleGeometry, handleWithRarity.handle)
const handleMesh = new THREE.Mesh(handleGeometry, handleWithRarity.handle)

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

export const getRandomBackgroundBasedOnFanGroupRarity = () => {
  const backgroundRarityIndex = Math.max(
    rarityLabels.indexOf(fanRarityLabels.leaf),
    rarityLabels.indexOf(fanRarityLabels.handle)
  )

  return bgAttributeCollection[rarityLabels[backgroundRarityIndex]]
}

fanGroup.add(testCircle, line, handleMesh, topHandleMesh)

// center image and package them as one
circle.position.set(-0.3, -0.5, 0.5)
line.position.set(-0.3, -0.5, 0.5)
handleMesh.position.set(0.19, -0.5, 0.53)
topHandleMesh.position.set(-0.5, -0.05, 0.52)
// topHandleMesh.position.set(-0.5, -0.05, 0.52)
topHandleMesh.rotation.set(1.5, 0.45, 0)
// topHandleMesh.rotation.set(1.5, 0.5, -0.9)

handleMesh.rotation.y += 1.59

// cool effect
// fanGroup.rotation.x += 10
