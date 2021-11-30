import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js'

import { getRandomLeafWithRarityLabel } from './utils/generateRarityAttribute'
// import { generateFanGif, recordFramesForGif } from './utils/gifHelpers'

import { snowFlakes, snow } from './utils/particleHelpers'
import { fanGroup } from './utils/fanHelpers'
import { light, spotLightStraightOn, spotLightStraightOnHelper } from './utils/lightHelpers'
import { rotateRight, rotateLeft, isExecuted } from './utils/rotationHelpers'

import {
  commonBG,
  uncommonBG,
  rareBG,
  epicBG,
  legendaryBG,
} from './properties/backgrounds'

// view size config
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// canvas and scene config
const canvas = document.querySelector('canvas')
const scene = new THREE.Scene()
scene.background = rareBG

// camera config
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2

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

// Scene Additions...
scene.add(snow)
scene.add(camera)
scene.add(fanGroup)
scene.add(light, spotLightStraightOn)

// recursively calls itself to allow for animation
const animate = (initialRender = false) => {
  // if (initialRender) {
  //   generateFanGif({ title: `fan_${leaf.rarity}_leaf` })
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
