import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import * as dat from 'dat.gui'
import { Group, Vector2, WebGLCubeRenderTarget } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as CanvasCapture from 'canvas-capture';

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
  leafDesignCompare } from './properties/leaf_props'
import {
  handle1,
  handle2,
  handle3,
  handle4,
  handle5,
  handle6,
  handle7 } from './properties/handle_props'
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
  color: '#c5b391'
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

// this is for the tassel object I loaded in
// looks like shit right now but it has some potential
// const modelLoader = new GLTFLoader();

// modelLoader.load( './properties/3D_Models/chinese_tassel/a_simple_chinese_tassel/scene.gltf', function ( gltf ) {

//   var mroot = gltf.scene;
//   var bbox = new THREE.Box3().setFromObject(mroot);
//   var cent = bbox.getCenter(new THREE.Vector3());
//   var size = bbox.getSize(new THREE.Vector3());

//   //Rescale the object to normalized space
//   var maxAxis = Math.max(size.x, size.y, size.z);
//   mroot.scale.multiplyScalar(1.0 / maxAxis);
//   bbox.setFromObject(mroot);
//   bbox.getCenter(cent);
//   bbox.getSize(size);
//   //Reposition to 0,halfY,0
//   mroot.position.copy(cent).multiplyScalar(-1);
//   mroot.position.y-= (size.y * 0.5);
//   mroot.position.set(-0.6, -9.25, 2.1)

// 	scene.add( gltf.scene );
//   console.log(gltf.scene)

// }, undefined, function ( error ) {

// 	console.error( error );

// } );


// fan leaf
const circle = new THREE.Mesh(fanGeometry, leaf14)
const circleCompare = new THREE.Mesh(fanGeometry, leafDesignCompare)

// setup handle realistic texture
let handleTexture = new THREE.CanvasTexture(new FlakesTexture())
handleTexture.wrapS = THREE.RepeatWrapping
handleTexture.wrapT = THREE.RepeatWrapping

handleTexture.repeat.x = 10
handleTexture.repeat.y = 6

// fan handle
const handleGeometry = new THREE.BoxGeometry( .1, 0.06, 1.05 )
const handleMesh = new THREE.Mesh( handleGeometry, handle7 )

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
circle.position.set(-0.3, -0.5, 2)
line.position.set(-0.3, -0.5, 2)
handleMesh.position.set(0.19, -0.5, 2.03)
circleCompare.position.set(0.8, -0.5, 2)

handleMesh.rotation.y += 1.59

// view size config
const sizes = {
  width: 1200,
  height: 800
}

// light config
const color = 0xFFFFFF;
const intensity = 0.8;
const directLightIntensity = .1;
const light = new THREE.AmbientLight(color, intensity);

const spotLightStraightOn = new THREE.DirectionalLight('white', directLightIntensity);
spotLightStraightOn.position.set(0.5, -1.5, 2.5);
const spotLightStraightOnHelper = new THREE.DirectionalLightHelper( spotLightStraightOn )

// for the tassel
// const pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
// pointLight.position.set( 0, -1.5, 1 );
// const pointLightHelper = new THREE.PointLightHelper( pointLight )
// scene.add( pointLight, pointLightHelper );


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
    obj.parent.worldToLocal(obj.position) // undo world coordinates compensation
  }

  obj.rotateOnAxis(axis, theta)
}

let isExecuted = false;

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
  const rotationPoint = new THREE.Vector3(0, .02, 0)
  const rotationAxis = new THREE.Vector3(0, .02, 0)
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
  });

  CanvasCapture.beginGIFRecord({ fps: 10 });

  setTimeout(() => {
    CanvasCapture.stopRecord();
  }, 4500)
}

// recursively calls itself to allow for animation
const animate = (initialRender = false) => {
  if (initialRender) {
    generateFanGif();
  }

  if (isExecuted) {
    rotateRight()
  } else {
    rotateLeft()
  }

  controls.update()
  renderer.render(scene, camera)
  if (CanvasCapture.isRecording()) CanvasCapture.recordFrame();
  window.requestAnimationFrame(() => animate(false))
}

animate(true);
