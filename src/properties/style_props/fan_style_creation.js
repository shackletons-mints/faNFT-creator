import * as THREE from 'three'

// Geometries

export const fanQuarterGeometry = new THREE.CircleGeometry(1, 30, 0, 2)
export const fanHalfGeometry = new THREE.CircleGeometry(1.53, 28, Math.PI * 2, Math.PI / 1.2)
// export const fanCircleCenterGeometry = new THREE.CylinderGeometry(0.35, 28, Math.PI * 2, Math.PI)
export const fanCircleCenterGeometry = new THREE.CylinderGeometry(.2, .2, .175, 28, 1, false, Math.PI * 2, Math.PI)
// export const fanCircleCenterGeometry = new THREE.CircleGeometry(0.5, 30, Math.PI, Math.PI)

// HEART SHIT
const x = 0, y = 0, z = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 2.5 / 6, y + 0.1 / 6 );
heartShape.bezierCurveTo( x + 0.5 / 10, y / 6, x + 2 / 10, y / 10, 0.1, y / 10 );
heartShape.bezierCurveTo( x - 3 / 6, y / 6, x - 3 / 6, y + 3.5 / 6,x - 3 / 6, y + 3.5 / 6 );
heartShape.bezierCurveTo( x - 3 / 6, y + 5.5 / 6, x - 1.5 / 6, y + 7.7 / 6, x + 2.5 / 6, y + 9.5 / 6 );
heartShape.bezierCurveTo( x + 6 / 6, y + 7.7 / 6, x + 8 / 6, y + 5.5 / 6, x + 8 / 6, y + 3.5 / 6 );
heartShape.bezierCurveTo( x + 8 / 6, y + 3.5 / 6, x + 8 / 6, y / 6, x + 5 / 6, y / 6 );
heartShape.bezierCurveTo( x + 3.5 / 10, y / 6, x + 0.5 / 10, y + 0.5 / 6, x + 2.5 / 6, y + 2.5 / 6 );

export const heartGeometry = new THREE.ShapeGeometry( heartShape );

// Positions
// this is to give the fan 3D ripples
const positionAttribute = fanQuarterGeometry.attributes.position
const fanCircleAttributes = fanHalfGeometry.attributes.position
const fanCircleCenterAttributes = fanCircleCenterGeometry.attributes.position

const heartAttribute = heartGeometry.attributes.position

for (let i = 0; i < heartAttribute.count; i++) {
  let z = heartAttribute.getZ(i)
  console.log(z)

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
for (let i = 0; i < fanCircleAttributes.count; i++) {
  let z = fanCircleAttributes.getZ(i)
  // let zCenter = fanCircleCenterAttributes.getZ(i)

  if (i % 2 === 0) {
    z -= 0.1
    // zCenter -= 0.1
  }

  fanCircleAttributes.setZ(i, z)
  // fanCircleCenterAttributes.setZ(i, z)
}

// for (let i = 0; i < fanCircleCenterAttributes.count; i++) {
//   let z = fanCircleCenterAttributes.getZ(i)

//   if (i % 2 === 0) {
//     z -= 0.1
//   }

//   fanCircleCenterAttributes.setZ(i, z)
// }

// wireframes to add "skeleton" to the fan
export const pieWireframe = new THREE.WireframeGeometry(fanQuarterGeometry)
export const heartWireframe = new THREE.WireframeGeometry(heartGeometry)
export const circleWireframe = new THREE.WireframeGeometry(fanHalfGeometry)
export const wireMaterial = new THREE.LineBasicMaterial({
  color: 0x000000,
})
export const line = new THREE.LineSegments(circleWireframe, wireMaterial)
line.side = THREE.DoubleSide
