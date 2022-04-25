import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { generateFanGif, recordFramesForGif } from './utils/gifHelpers'
import { once } from './utils/helperFunctions'

import { snowFlakes, snow, particle } from './utils/particleHelpers'
import {
  fanGroup,
  fanRarityLabels,
  background,
  fanCenterMesh
} from './utils/fanHelpers'
import {
  light,
  spotLightStraightOn,
  spotLightStraightOnHelper,
  lightHolder,
} from './utils/lightHelpers'
import { spinFun, rotateRight } from './utils/rotationHelpers'

// view size config
// set to opensea sizes
const sizes = {
  width: 400,
  height: 400,
}

// canvas and scene config
const canvas = document.querySelector('canvas')
const scene = new THREE.Scene()
scene.background = background

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

scene.add(lightHolder);

// console.log(spotLightStraightOn.target)

// spotLightStraightOn.target.rotation.y -= 4

const generateOnce = once(
  generateFanGif(
    `${fanRarityLabels.leaf}Leaf_${fanRarityLabels.leafName}LeafName_${fanRarityLabels.handle}Handle_${fanRarityLabels.handleMaterial}HandleMaterial_${particle.rarity}Particle_${particle.effect}particleEffect_ID-#${nftID}`
  ),
)
const logOnce = once(() =>
  console.log(
    'title: ', `${fanRarityLabels.leaf}Leaf_${fanRarityLabels.leafName}LeafName_${fanRarityLabels.handle}Handle_${fanRarityLabels.handleMaterial}HandleMaterial_${particle.rarity}Particle_${particle.effect}particleEffect_ID-#${nftID}`
  )
)

renderer.shadowMapEnabled = true

// recursively calls itself to allow for animation
const elapsedTime = clock.getElapsedTime()
const animate = () => {
  // comment this in if you want to verify the time
  // console.log(elapsedTime)

  rotateRight(fanGroup)


//   camera.position.setX(camera.position.x += 0.001)
  if (elapsedTime >= 2) {
    logOnce()
    generateOnce()
  }

// spotLightStraightOn.position.x += 0.001

// console.log(spotLightStraightOn.position.x)

  spotLightStraightOn.target.updateMatrixWorld()
  spinFun(fanGroup)

  snowFlakes()
  renderer.render(scene, camera)
  // recordFramesForGif()
  window.requestAnimationFrame(animate)
}

setTimeout(() => {
    animate()
}, 1000)
