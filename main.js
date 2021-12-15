import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// import { generateFanGif, recordFramesForGif } from './utils/gifHelpers'

import { snowFlakes, snow } from './utils/particleHelpers'
import { fanGroup, fanRarityLabels, getRandomBackgroundBasedOnFanGroupRarity } from './utils/fanHelpers'
import { light, spotLightStraightOn, spotLightStraightOnHelper } from './utils/lightHelpers'
import { spinFun } from './utils/rotationHelpers'

// view size config
// set to opensea sizes
const sizes = {
  width: 508,
  height: 508,
}

// canvas and scene config
const canvas = document.querySelector('canvas')
const scene = new THREE.Scene()
scene.background = getRandomBackgroundBasedOnFanGroupRarity()

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

// let time = Date.now()
// const clock = new THREE.Clock()
// let oldElapsedTime = 0

// Scene Additions...
scene.add(snow)
scene.add(camera)
scene.add(fanGroup)
scene.add(light, spotLightStraightOn)

// recursively calls itself to allow for animation
const animate = (initialRender = false) => {
  
  let isExecuted = false

  if (initialRender) {
    console.log({title: `${fanRarityLabels.leaf}_leaf_${fanRarityLabels.handle}_handle` })
    setTimeout(() => {
      generateFanGif({ title: `${fanRarityLabels.leaf}_leaf_${fanRarityLabels.handle}_handle` })
    }, 1000)
  }

  if (!isExecuted) {
    setTimeout(() => {
      spinFun(fanGroup)
    }, 500)
    setTimeout(() => {
      isExecuted = true
    }, 3500)
  }

  // we can use deltaTime to calculate the time between each animation frame
  // don't know if this is useful or not
  // const elapsedTime = clock.getElapsedTime()
  // const deltaTime = elapsedTime - oldElapsedTime
  // oldElapsedTime = elapsedTime

  snowFlakes()
  controls.update()
  renderer.render(scene, camera)
  // recordFramesForGif()
  window.requestAnimationFrame(() => animate(false))
}

animate(true)
