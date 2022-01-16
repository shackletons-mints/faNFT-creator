import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { generateFanGif, recordFramesForGif } from './utils/gifHelpers'
import { once } from './utils/helperFunctions'

import { snowFlakes, snow, particle } from './utils/particleHelpers'
import {
  fanGroup,
  fanRarityLabels,
  getRandomBackgroundBasedOnFanGroupRarity,
} from './utils/fanHelpers'
import {
  light,
  spotLightStraightOn,
  spotLightStraightOnHelper,
} from './utils/lightHelpers'
import { spinFun } from './utils/rotationHelpers'

// view size config
// set to opensea sizes
const sizes = {
  width: 400,
  height: 400,
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

const clock = new THREE.Clock()
let nftID = Math.floor(Math.random() * 10000)

// Scene Additions...
scene.add(snow)
scene.add(camera)
scene.add(fanGroup)
scene.add(light, spotLightStraightOn)

const generateOnce = once(
  generateFanGif({
    title: `${fanRarityLabels.leaf}Leaf_${fanRarityLabels.handle}Handle_${particle.rarity}Particle_ID-#${nftID}`,
  }),
)
const logOnce = once(() =>
  console.log({
    title: `${fanRarityLabels.leaf}Leaf_${fanRarityLabels.handle}Handle_${particle.rarity}Particle_ID-#${nftID}`,
  })
)

// recursively calls itself to allow for animation
const animate = () => {
  const elapsedTime = clock.getElapsedTime()
  // comment this in if you want to verify the time
  // console.log(elapsedTime)

  if (elapsedTime >= 1) {
    logOnce()
    generateOnce()
  }

  spinFun(fanGroup)

  snowFlakes()
  renderer.render(scene, camera)
  recordFramesForGif()
  window.requestAnimationFrame(animate)
}

animate()
