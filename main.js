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
  handle8,
  handle9,
  handle10,
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
const circle = new THREE.Mesh(fanGeometry, leaf19.design)
const circleCompare = new THREE.Mesh(fanGeometry, leafDesignCompare)

// fan handle
const handleGeometry = new THREE.BoxGeometry(0.1, 0.06, 1.05)
const handleMesh = new THREE.Mesh(handleGeometry, handle10.design)

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

// for the tassel
// const pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
// pointLight.position.set( 0, -1.5, 1 );
// const pointLightHelper = new THREE.PointLightHelper( pointLight )
// scene.add( pointLight, pointLightHelper );

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

// potentially useful in enhancing reflections/colors
// need to play with these properties to flush it out
// maybe not worth the effort

// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 1;

renderer.setSize(sizes.width, sizes.height)

// this is useful in calculating animations
// I doubt I'll use this here

// let time = Date.now()
// const clock = new THREE.Clock()

// function to rotate the object on a given point
// need to play with this more to get more consistent results

const rotateAroundPoint = (obj, point, axis, theta, pointIsWorld) => {
  pointIsWorld = pointIsWorld === undefined ? false : pointIsWorld

  if (pointIsWorld) {
    obj.parent.localToWorld(obj.position) // compensate for world coordinate
  }

  obj.position.sub(point)
  obj.position.applyAxisAngle(axis, theta)
  obj.position.add(point)

  if (pointIsWorld) {
    obj.parent.worldToLocal(obj.position) // undo world coordinates compensation
  }

  obj.rotateOnAxis(axis, theta)
}

let isExecuted = false

const rotateLeft = () => {
  let rotationTheta = -0.025
  const rotationPoint = new THREE.Vector3(0, 0.02, 0)
  const rotationAxis = new THREE.Vector3(0, 0.02, 0)
  rotateAroundPoint(fanGroup, rotationPoint, rotationAxis, rotationTheta, false)
  // rotateAroundPoint(circle, rotationPoint, rotationAxis, rotationTheta, false)
  // rotateAroundPoint(line, rotationPoint, rotationAxis, rotationTheta, false)

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

const generateFanGif = () => {
  CanvasCapture.init(document.getElementById('app'), {
    verbose: false,
    showAlerts: true,
    showDialogs: true,
    showRecDot: false,
  })

  CanvasCapture.beginGIFRecord({ fps: 10, name: 'fan_rarity_goes_here' })

  setTimeout(() => {
    CanvasCapture.stopRecord()
  }, 4500)
}

// recursively calls itself to allow for animation
const animate = (initialRender = false) => {
  if (initialRender) {
    generateFanGif()
  }

  if (isExecuted) {
    rotateRight()
  } else {
    rotateLeft()
  }

  controls.update()
  renderer.render(scene, camera)
  if (CanvasCapture.isRecording()) {
    // start recording when we know for a fact the fan has fully rendered
    // can we check for a scene property?  scene.isRendered? something like that
    CanvasCapture.recordFrame()
  }
  window.requestAnimationFrame(() => animate(false))
}

animate(true)
