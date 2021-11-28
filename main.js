import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js'

// import { generateFanGif, recordFramesForGif } from './utils/gifHelpers'

import { snowFlakes, snow } from './utils/particleHelpers'
import { light, spotLightStraightOn, spotLightStraightOnHelper } from './utils/lightHelpers'
import { rotateRight, rotateLeft, isExecuted } from './utils/rotationHelpers'
import {
  leaf1,
  leaf2,
  leaf3,
  leaf4,
  leaf5,
  leaf6,
  leaf7,
  leaf8,
  leaf9,
  leaf10,
  leaf11,
  leaf12,
  leaf13,
  leaf14,
  leaf15,
  leaf16,
  leaf17,
  leaf18,
  leaf19,
  leaf20,
  leaf21,
  leafDesignCompare,
} from './properties/leaf_props'
import {
  handle1,
  handle2,
  handle3,
  handle4,
  handle5,
  handle6,
  handle7,
} from './properties/handle_props'
import {
  commonBG,
  uncommonBG,
  rareBG,
  epicBG,
  legendaryBG,
} from './properties/backgrounds'

// canvas and scene config
const canvas = document.querySelector('canvas')
const scene = new THREE.Scene()

// I kinda like the blackground
scene.background = rareBG

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
const circle = new THREE.Mesh(fanGeometry, leaf16.design)
const circleCompare = new THREE.Mesh(fanGeometry, leafDesignCompare)

// fan handle
const handleGeometry = new THREE.BoxGeometry(0.1, 0.06, 1.05)
const handleMesh = new THREE.Mesh(handleGeometry, handle7)

const fanGroup = new THREE.Group()
fanGroup.add(circle, line, handleMesh)

scene.add(fanGroup)

// center image and package them as one
circle.position.set(-0.3, -0.5, 0.5)
line.position.set(-0.3, -0.5, 0.5)
handleMesh.position.set(0.19, -0.5, 0.53)
circleCompare.position.set(0.8, -0.5, 0.5)

handleMesh.rotation.y += 1.59

// view size config
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

scene.add(light, spotLightStraightOn)

console.log('fan group: ', fanGroup)

// camera config
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2
scene.add(camera)

// enable user controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// render the canvas
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

let time = Date.now()
const clock = new THREE.Clock()
let oldElapsedTime = 0

scene.add(snow)
// recursively calls itself to allow for animation
const animate = (initialRender = false) => {
  // if (initialRender) {
  //   generateFanGif()
  // }

  if (isExecuted) {
    rotateRight(fanGroup)
  } else {
    rotateLeft(fanGroup)
  }

  // we can use deltaTime to calculate the time between each animation frame
  // don't know if this is useful or not
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - oldElapsedTime
  oldElapsedTime = elapsedTime

  // console.log(elapsedTime)

  snowFlakes()
  controls.update()
  renderer.render(scene, camera)
  // recordFramesForGif()
  window.requestAnimationFrame(() => animate(false))
}

animate(true)
