import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js'
import * as CanvasCapture from 'canvas-capture'

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
import {
  particleImage1
} from './properties/particle_props'

// canvas and scene config
const canvas = document.querySelector('canvas')
const scene = new THREE.Scene()

// I kinda like the blackground
scene.background = commonBG

// fan config
const fanGeometry = new THREE.CircleGeometry(1, 30, 0, 2)
const positionAttribute = fanGeometry.attributes.position

// this loops over all verticies in the CircleGeometry
// we target just the z axis, it's the only position we want to change... for now
for (let i = 0; i < positionAttribute.count; i++) {
  // getting each of the coordinates for the verticies
  // let x = positionAttribute.getX(i)
  // let y = positionAttribute.getY(i)
  let z = positionAttribute.getZ(i)

  // we only want to manipulate the z axis to give the fan wrinkles
  if (i % 2 === 0) {
    z += 0.05
  }

  // we set the verticies here
  // positionAttribute.setXYZ(i, x, y, z)

  positionAttribute.setZ(i, z)
}

// this wireframe can give a stronger definition to the wrinkles of the fan
// need to play with line properties to achieve a more realistic look
const wireframe = new THREE.WireframeGeometry(fanGeometry)
const wireMaterial = new THREE.LineBasicMaterial({
  color: '#c5b391',
})
const line = new THREE.LineSegments(wireframe, wireMaterial)
line.side = THREE.DoubleSide

// fan leaf
const circle = new THREE.Mesh(fanGeometry, leaf16.design)
const circleCompare = new THREE.Mesh(fanGeometry, leafDesignCompare)

// setup handle realistic texture
let handleTexture = new THREE.CanvasTexture(new FlakesTexture())
handleTexture.wrapS = THREE.RepeatWrapping
handleTexture.wrapT = THREE.RepeatWrapping

handleTexture.repeat.x = 10
handleTexture.repeat.y = 6

// fan handle
const handleGeometry = new THREE.BoxGeometry(0.1, 0.06, 1.05)
const handleMesh = new THREE.Mesh(handleGeometry, handle7)

// create fan group
// this DOES NOT attached them together 'physically'
// this happens below
const fanGroup = new THREE.Group()
fanGroup.add(circle, line, handleMesh)

// add the fan to the scene
// add circleCompare to test textures/designs against the fanGroup
scene.add(fanGroup)

// trying to center the image... and
// gives the illusion they are one object
circle.position.set(-0.3, -0.5, 2)
line.position.set(-0.3, -0.5, 2)
handleMesh.position.set(0.19, -0.5, 2.03)
circleCompare.position.set(0.8, -0.5, 2)

handleMesh.rotation.y += 1.59

// view size config
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// light config
const color = 0xffffff
const intensity = 0.8
const directLightIntensity = 0.1
const light = new THREE.AmbientLight(color, intensity)

const spotLightStraightOn = new THREE.DirectionalLight(
  'white',
  directLightIntensity
)
spotLightStraightOn.position.set(0.5, -1.5, 2.5)
const spotLightStraightOnHelper = new THREE.DirectionalLightHelper(
  spotLightStraightOn
)

scene.add(light, spotLightStraightOn, spotLightStraightOnHelper)

console.log('fan group: ', fanGroup)

// camera config
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
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

// this is useful in calculating animations
// I doubt I'll use this here

let time = Date.now()
const clock = new THREE.Clock()

const flakeCount = 9000
const flakeGeometry = new THREE.TetrahedronGeometry(0.035); // radius
const flakeMaterial = new THREE.PointsMaterial({
    color: '#ff88cc',
    size: 1,
    sizeAttenuation: true,
  })

// TODO
  // figure out how to hook this up with the flakeMaterial
    // flakeMaterial.alphaMap = particleImage1
    // flakeMaterial.transparent = true
    // flakeMaterial.depthWrite = false
    // flakeMaterial.blending = THREE.AdditiveBlending
    // flakeMaterial.vertexColors = true

const snow = new THREE.Group()

for (let i = 0; i < flakeCount; i++) {
  const flakeMesh = new THREE.Mesh(flakeGeometry, flakeMaterial);
  flakeMesh.position.set(
    (Math.random() - 0.5) * 40,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 40
  );
  snow.add(flakeMesh);
}
scene.add(snow);

const flakeArray = snow.children;

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

let isExecuted = false

const rotateLeft = () => {
  let rotationTheta = -0.025
  const rotationPoint = new THREE.Vector3(0, 0.02, 0)
  const rotationAxis = new THREE.Vector3(0, 0.02, 0)
  rotateAroundPoint(fanGroup, rotationPoint, rotationAxis, rotationTheta, false)

  setTimeout(() => {
    isExecuted = true
  }, 4500)
}

const rotateRight = () => {
  const rotationTheta = 0.025
  const rotationPoint = new THREE.Vector3(0, 0.02, 0)
  const rotationAxis = new THREE.Vector3(0, 0.02, 0)
  rotateAroundPoint(fanGroup, rotationPoint, rotationAxis, rotationTheta, false)

  setTimeout(() => {
    isExecuted = false
  }, 4500)
}

// const generateFanGif = () => {
//   CanvasCapture.init(document.getElementById('app'), {
//     verbose: false,
//     showAlerts: true,
//     showDialogs: true,
//     showRecDot: false,
//   })

//   CanvasCapture.beginGIFRecord({ fps: 10, name: 'fan_rarity_goes_here' })

//   setTimeout(() => {
//     CanvasCapture.stopRecord()
//   }, 4500)
// }

// recursively calls itself to allow for animation
const animate = (initialRender = false) => {
  // if (initialRender) {
  //   generateFanGif()
  // }

  if (isExecuted) {
    rotateRight()
  } else {
    rotateLeft()
  }

  // TODO
  // play with this and see if I can acheive different effects
    // updraft
    // diagonal drift
  for (let i = 0; i < flakeArray.length / 2; i++) {
    flakeArray[i].rotation.y += 0.01;
    flakeArray[i].rotation.x += 0.02;
    flakeArray[i].rotation.z += 0.03;
    flakeArray[i].position.y -= 0.018;
    if (flakeArray[i].position.y < -4) {
      flakeArray[i].position.y += 10;
    }
  }
  for (let i = flakeArray.length / 2; i < flakeArray.length; i++) {
    flakeArray[i].rotation.y -= 0.03;
    flakeArray[i].rotation.x -= 0.03;
    flakeArray[i].rotation.z -= 0.02;
    flakeArray[i].position.y -= 0.016;
    if (flakeArray[i].position.y < -4) {
      flakeArray[i].position.y += 9.5;
    }

    snow.rotation.y -= 0.0000002;
  }

  const elapsedTime = clock.getElapsedTime()

  controls.update()
  renderer.render(scene, camera)
  // if (CanvasCapture.isRecording()) {
  //   // start recording when we know for a fact the fan has fully rendered
  //   // can we check for a scene property?  scene.isRendered? something like that
  //   CanvasCapture.recordFrame()
  // }
  window.requestAnimationFrame(() => animate(false))
}

animate(true)
