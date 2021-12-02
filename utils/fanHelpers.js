import * as THREE from 'three'

import { getRandomLeafWithRarityLabel, getRandomHandleWithRarityLabel } from './generateRarityAttribute'

// fan config
const fanGeometry = new THREE.CircleGeometry(1, 30, 0, 2)
const positionAttribute = fanGeometry.attributes.position

// creates fan ripples
for (let i = 0; i < positionAttribute.count; i++) {
  let z = positionAttribute.getZ(i)

  if (i % 2 === 0) {
    z += 0.05
  }

  positionAttribute.setZ(i, z)
}

const wireframe = new THREE.WireframeGeometry(fanGeometry)
const wireMaterial = new THREE.LineBasicMaterial({
  color: '#c5b391',
})
const line = new THREE.LineSegments(wireframe, wireMaterial)
line.side = THREE.DoubleSide

// fan leaf
const leafWithRarity = getRandomLeafWithRarityLabel()
const circle = new THREE.Mesh(fanGeometry, leafWithRarity.leaf)

// fan handle
const handleWithRarity = getRandomHandleWithRarityLabel()
const handleGeometry = new THREE.BoxGeometry(0.1, 0.06, 1.05)
const handleMesh = new THREE.Mesh(handleGeometry, handleWithRarity.handle)

export const fanGroup = new THREE.Group()
export const fanRarityLabels = {
  leaf: leafWithRarity.rarity,
  handle: handleWithRarity.rarity
}
fanGroup.add(circle, line, handleMesh)

// center image and package them as one
circle.position.set(-0.3, -0.5, 0.5)
line.position.set(-0.3, -0.5, 0.5)
handleMesh.position.set(0.19, -0.5, 0.53)

handleMesh.rotation.y += 1.59
