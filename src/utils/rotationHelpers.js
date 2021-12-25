import * as THREE from 'three'

const rotateAroundPoint = (obj, point, axis, theta, pointIsWorld) => {
  pointIsWorld = pointIsWorld === undefined ? false : pointIsWorld

  if (pointIsWorld) {
    obj.parent.localToWorld(obj.position)
  }

  obj.position.sub(point)
  obj.position.applyAxisAngle(axis, theta)
  obj.position.add(point)

  if (pointIsWorld) {
    obj.parent.worldToLocal(obj.position)
  }

  obj.rotateOnAxis(axis, theta)
}

export let isExecuted = false

export const rotateLeft = (fanGroup) => {
  let rotationTheta = -0.025
  const rotationPoint = new THREE.Vector3(0, 0.02, 0)
  const rotationAxis = new THREE.Vector3(0, 0.02, 0)
  rotateAroundPoint(fanGroup, rotationPoint, rotationAxis, rotationTheta, false)

  setTimeout(() => {
    isExecuted = true
  }, 4500)
}

export const rotateRight = (fanGroup) => {
  const rotationTheta = 0.025
  const rotationPoint = new THREE.Vector3(0, 0.02, 0)
  const rotationAxis = new THREE.Vector3(0, 0.02, 0)
  rotateAroundPoint(fanGroup, rotationPoint, rotationAxis, rotationTheta, false)

  setTimeout(() => {
    isExecuted = false
  }, 4500)
}
