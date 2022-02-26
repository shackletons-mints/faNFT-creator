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

const leafWithRarity = getRandomLeafWithRarityLabel()

// fan config
const fanPieGeometry = new THREE.CircleGeometry(1, 30, 0, 2)
// const fanCircleGeometry = new THREE.CircleGeometry(1, 30, Math.PI, Math.PI * 2)
// const fanCircleCenter = new THREE.CircleGeometry(0.5, 30, Math.PI, Math.PI * 2)
const positionAttribute = fanPieGeometry.attributes.position
// const fanCircleAttributes = fanCircleGeometry.attributes.position
// const fanCircleCenterAttributes = fanCircleCenter.attributes.position

const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 2.5 / 6, y + 0.1 / 6 );
heartShape.bezierCurveTo( x + 0.5 / 10, y / 6, x + 2 / 10, y / 10, 0.1, y / 10 );
heartShape.bezierCurveTo( x - 3 / 6, y / 6, x - 3 / 6, y + 3.5 / 6,x - 3 / 6, y + 3.5 / 6 );
heartShape.bezierCurveTo( x - 3 / 6, y + 5.5 / 6, x - 1.5 / 6, y + 7.7 / 6, x + 2.5 / 6, y + 9.5 / 6 );
heartShape.bezierCurveTo( x + 6 / 6, y + 7.7 / 6, x + 8 / 6, y + 5.5 / 6, x + 8 / 6, y + 3.5 / 6 );
heartShape.bezierCurveTo( x + 8 / 6, y + 3.5 / 6, x + 8 / 6, y / 6, x + 5 / 6, y / 6 );
heartShape.bezierCurveTo( x + 3.5 / 10, y / 6, x + 0.5 / 10, y + 0.5 / 6, x + 2.5 / 6, y + 2.5 / 6 );

const heartGeometry = new THREE.ShapeGeometry( heartShape );
const fanHeartMesh = new THREE.Mesh( heartGeometry, leafWithRarity.leaf ) ;

const heartAttribute = heartGeometry.attributes.position

for (let i = 0; i < heartAttribute.count; i++) {
  let z = heartAttribute.getZ(i)

  if (i % 2 === 0) {
    z += 0.05
  }

  heartAttribute.setZ(i, z)
}

// creates fan ripples
for (let i = 0; i < positionAttribute.count; i++) {
  let z = positionAttribute.getZ(i)

  if (i % 2 === 0) {
    z += 0.05
  }

  positionAttribute.setZ(i, z)
}

// creates fan ripples
// for (let i = 0; i < fanCircleAttributes.count; i++) {
//   let z = fanCircleAttributes.getZ(i)
//   let zCenter = fanCircleCenterAttributes.getZ(i)

//   if (i % 2 === 0) {
//     z -= 0.1
//     zCenter -= 0.1
//   }

//   fanCircleAttributes.setZ(i, z)
//   fanCircleCenterAttributes.setZ(i, z)
// }

const pieWireframe = new THREE.WireframeGeometry(fanPieGeometry)
const heartWireframe = new THREE.WireframeGeometry(heartGeometry)
// const circleWireframe = new THREE.WireframeGeometry(fanCircleGeometry)
const wireMaterial = new THREE.LineBasicMaterial({
  color: '#c5b391',
})
const line = new THREE.LineSegments(heartWireframe, wireMaterial)
line.side = THREE.DoubleSide

// fan leaf
const fanPieMesh = new THREE.Mesh(fanPieGeometry, leafWithRarity.leaf)
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

const getRandomBackgroundBasedOnFanGroupRarity = () => {
  const backgroundRarityIndex = Math.max(
    rarityLabels.indexOf(fanRarityLabels.leaf),
    rarityLabels.indexOf(fanRarityLabels.handle)
  )

  return bgAttributeCollection[rarityLabels[backgroundRarityIndex]]
}

export const background = getRandomBackgroundBasedOnFanGroupRarity()

fanGroup.add(fanHeartMesh)

// center image and package them as one
fanPieMesh.position.set(-0.3, -0.5, 0.5)
fanHeartMesh.position.set(-0.3, -0.5, 0)
// fanCircleMesh.position.set(0, 0.2, 0)
// fanCircleCenterMesh.position.set(0, 0.2, 0)
// line.position.set(0, 0.2, 0) // circle line
// line.position.set(-0.3, -0.5, 0.5) // pie line
handleMesh.position.set(0.19, -0.5, 0.53)
topHandleMesh.position.set(-0.5, -0.05, 0.52)
// topHandleMesh.position.set(-0.5, -0.05, 0.52)
topHandleMesh.rotation.set(1.5, 0.45, 0)
// topHandleMesh.rotation.set(1.5, 0.5, -0.9)

handleMesh.rotation.y += 1.59

// cool effect
// fanGroup.rotation.x += 10
