import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import * as dat from 'dat.gui'
import { Group, Vector2, WebGLCubeRenderTarget } from 'three'

import { leafDesign, leafDesignCompare } from './properties/leaf_props'
import { handle1, handle2, handle3, handle4, handle5, handle6 } from './properties/handle_props'
import { background1 } from './properties/backgrounds'

// controls in top right corner of page
// could be cool to implement later to change effects on the fan
const gui = new dat.GUI()

// canvas and scene config
const canvas = document.querySelector('canvas')
const scene = new THREE.Scene()
scene.background = background1;

// fan config
const fanGeometry = new THREE.CircleGeometry( 1, 30, 0, 2 )
const positionAttribute = fanGeometry.attributes.position;

// this loops over all verticies in the CircleGeometry
// we target just the z axis, it's the only position we want to change... for now
for (let i = 0; i < positionAttribute.count; i++) {
  // getting each of the coordinates for the verticies
  // let x = positionAttribute.getX(i)
  // let y = positionAttribute.getY(i)
  let z = positionAttribute.getZ(i)

  // we only want to manipulate the z axis to give the fan wrinkles
  if(i % 2 === 0) {
    z += 0.05;
  }

  // we set the verticies here
  // positionAttribute.setXYZ(i, x, y, z)

  positionAttribute.setZ(i, z);
}

// this wireframe can give a stronger definition to the wrinkles of the fan
// need to play with line properties to achieve a more realistic look
const wireframe = new THREE.WireframeGeometry( fanGeometry )
const wireMaterial = new THREE.LineBasicMaterial({
  color: '#664229'
})
const line = new THREE.LineSegments( wireframe, wireMaterial )
line.side = THREE.DoubleSide

//----------------------------------------------------------------------|
// this could potentially scale the images up/down, needs research/trial/error

// // fan specs        width / height
// const planeAspect = 650 / 500;
// // image specs      width / height
// const imageAspect = 192 / 241;
// const aspect = imageAspect / planeAspect;

// designPattern3.offset.x = aspect > 1 ? (1 - 1 / aspect) / 2 : 0;
// designPattern3.repeat.x = aspect > 1 ? 1 / aspect : 1;

// designPattern3.offset.y = aspect > 1 ? 0 : (1 - aspect) / 2;
// designPattern3.repeat.y = aspect > 1 ? 1 : aspect;

// ----------------------------------------------------------------------|

// fan leaf
const circle = new THREE.Mesh(fanGeometry, leafDesign)
const circleCompare = new THREE.Mesh(fanGeometry, leafDesignCompare)

// setup handle realistic texture
let handleTexture = new THREE.CanvasTexture(new FlakesTexture())
handleTexture.wrapS = THREE.RepeatWrapping
handleTexture.wrapT = THREE.RepeatWrapping

handleTexture.repeat.x = 10
handleTexture.repeat.y = 6

// fan handle
const handleGeometry = new THREE.BoxGeometry( .1, 0.06, 1.05 )
const handleMesh = new THREE.Mesh( handleGeometry, handle6 )

// create fan group
// this DOES NOT attached them together 'physically'
// this happens below
const fanGroup = new THREE.Group();
fanGroup.add( circle, line, handleMesh )

// add the fan to the scene
// add circleCompare to test textures/designs against the fanGroup
scene.add( fanGroup )

// trying to center the image... and
// gives the illusion they are one object
circle.position.set(-0.8, -0.5, 1)
line.position.set(-0.8, -0.5, 1)
handleMesh.position.set(-0.29, -0.5, 1.03)
circleCompare.position.set(0.8, -0.5, 1)

handleMesh.rotation.y += 1.59

// view size config
const sizes = {
  width: 1200,
  height: 800
}

// light config
const color = 0xFFFFFF;
const intensity = 0.8;
const directLightIntensity = 0.1;
const light = new THREE.AmbientLight(color, intensity);
const spotLightStraightOn = new THREE.DirectionalLight('white', directLightIntensity);
spotLightStraightOn.position.set(0, -1.3, 5);
const spotLightStraightOnHelper = new THREE.DirectionalLightHelper( spotLightStraightOn )

scene.add(light, spotLightStraightOn, spotLightStraightOnHelper)

console.log('fan group: ', fanGroup)

// camera config
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// enable user controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// render the canvas
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
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
  pointIsWorld = (pointIsWorld === undefined)? false : pointIsWorld;

  if(pointIsWorld){
      obj.parent.localToWorld(obj.position); // compensate for world coordinate
  }

  obj.position.sub(point)
  obj.position.applyAxisAngle(axis, theta)
  obj.position.add(point)

  if (pointIsWorld) {
    obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
  }

  obj.rotateOnAxis(axis, theta)
}

// recursively calls itself to allow for animation
const animate = () => {

  // comment these in to view rotation
  // it's fucked up at the moment...

  // fanGroup.rotation.z += 0.01
  // circle.rotation.y += 0.01
  // line.rotation.y += 0.01

  // these still need some testing -------------------------

  // at the moment this rotation looks better than above
  // kinda makes it look like a tiny sailboat though...

  // const rotationPoint = new THREE.Vector3(0, .1, 0)
  // const rotationAxis = new THREE.Vector3(0, .1, 0)
  // const rotationTheta = .01;
  // rotateAroundPoint(handleMesh, rotationPoint, rotationAxis, rotationTheta, false)
  // rotateAroundPoint(circle, rotationPoint, rotationAxis, rotationTheta, false)
  // rotateAroundPoint(line, rotationPoint, rotationAxis, rotationTheta, false)

  // ---------------------------------------------------------

  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}

animate();
