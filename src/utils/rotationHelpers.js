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

export const spinFun = (fanGroup) => {
  let rotationTheta = -0.2
  const rotationPoint = new THREE.Vector3(0, 0, 0)
  const rotationAxis = new THREE.Vector3(0, 0, 0)
  rotateAroundPoint(fanGroup, rotationPoint, rotationAxis, rotationTheta, false)

}

// export const rotateRight = (fanGroup) => {
//   const rotationTheta = 0.2
//   const rotationPoint = new THREE.Vector3(0, 0.05, 0)
//   const rotationAxis = new THREE.Vector3(0, 0.05, 0)
//   rotateAroundPoint(fanGroup, rotationPoint, rotationAxis, rotationTheta, false)

// }
