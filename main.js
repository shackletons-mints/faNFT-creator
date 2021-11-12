import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import * as dat from 'dat.gui'
import { Group, Vector2, WebGLCubeRenderTarget } from 'three'

// controls in top right corner of page
// could be cool to implement later to change effects on the fan
const gui = new dat.GUI()

// canvas and scene config
const canvas = document.querySelector('canvas')
const scene = new THREE.Scene()


// textures
const textureLoader = new THREE.TextureLoader()
let designPattern = textureLoader.load('./static/designs/wave.jpeg')
let designPattern2 = textureLoader.load('./static/designs/mountain_and_boat.jpeg')
let designPattern3 = textureLoader.load('./static/designs/wave2.jpg')
const fanTexture = textureLoader.load('./static/textures/fanTexture.jpeg')
const grainyTexture = textureLoader.load('./static/textures/oldTexture.png')
const brassTexture = textureLoader.load('./static/textures/brass_albedo.png')
const brassRoughness = textureLoader.load('./static/textures/brass_roughness.png')
const dojo = textureLoader.load('./static/backgrounds/dojo.jpeg')

scene.background = dojo;

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
// setting the textures onto the circle geometry

const fanDesign = new THREE.MeshStandardMaterial({
  map: designPattern,
  normalMap: grainyTexture,
  normalScale: new THREE.Vector2(0.15, 0.15),
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

const fanDesignCompare = new THREE.MeshStandardMaterial({
  map: designPattern,
  side: THREE.DoubleSide
  // wireframe: true // cool effect with this on
})

// // fan specs        width / height
// const planeAspect = 650 / 500;
// // image specs      width / height
// const imageAspect = 192 / 241;
// const aspect = imageAspect / planeAspect;

// designPattern3.offset.x = aspect > 1 ? (1 - 1 / aspect) / 2 : 0;
// designPattern3.repeat.x = aspect > 1 ? 1 / aspect : 1;

// designPattern3.offset.y = aspect > 1 ? 0 : (1 - aspect) / 2;
// designPattern3.repeat.y = aspect > 1 ? 1 : aspect;

const circle = new THREE.Mesh(fanGeometry, fanDesign)
const circleCompare = new THREE.Mesh(fanGeometry, fanDesignCompare)

// setup handle realistic texture
let handleTexture = new THREE.CanvasTexture(new FlakesTexture())
handleTexture.wrapS = THREE.RepeatWrapping
handleTexture.wrapT = THREE.RepeatWrapping

handleTexture.repeat.x = 10
handleTexture.repeat.y = 6

// fan handle

const handleGeometry = new THREE.BoxGeometry( .1, 0.1, 1.05 );
const handleMats = new THREE.MeshPhysicalMaterial({
  map: brassTexture,
  normalMap: brassRoughness,
  clearcoat: 1,
  metalness: 0.5,
  roughness: 0.5,
  normalScale: new THREE.Vector2(0.15, 0.15),
  clearcoatRoughness: 0.1,
  emissiveIntensity: 0.5
})
const handleMesh = new THREE.Mesh( handleGeometry, handleMats )

const fanGroup = new THREE.Group();
fanGroup.add( circle )
fanGroup.add( line )
fanGroup.add( handleMesh )

// add the fan to the scene
// add circleCompare to test textures/designs against the fanGroup
scene.add( fanGroup )
console.log(handleMesh)

// trying to center the image...
circle.position.set(-0.8, -0.5, 1)
line.position.set(-0.8, -0.5, 1)
handleMesh.position.set(-0.29, -0.55, 1.03)
circleCompare.position.set(0.8, -0.5, 1)

handleMesh.rotation.y += 1.59
// view size config
const sizes = {
  width: 1200,
  height: 800
}

// light config
const color = 0xFFFFFF;
const intensity = 1;
const directLightIntensity = 0.1;
const light = new THREE.AmbientLight(color, intensity);
const spotLight = new THREE.DirectionalLight('white', directLightIntensity);
spotLight.position.set(0, -1.5, 5);

const lightHelper = new THREE.DirectionalLightHelper( spotLight )

scene.add(light, spotLight, lightHelper);
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
// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 1;
renderer.setSize(sizes.width, sizes.height)

// this is useful in calculating animations
// I doubt I'll use this here
// let time = Date.now()
// const clock = new THREE.Clock()

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

const animate = () => {

  // fanGroup.rotation.z += 0.01
  // circle.rotation.y += 0.01
  // line.rotation.y += 0.01

  // const rotationPoint = new THREE.Vector3(0, .1, 0)
  // const rotationAxis = new THREE.Vector3(0, .1, 0)
  // const rotationTheta = .01;
  // rotateAroundPoint(handleMesh, rotationPoint, rotationAxis, rotationTheta, false)
  // rotateAroundPoint(circle, rotationPoint, rotationAxis, rotationTheta, false)
  // rotateAroundPoint(line, rotationPoint, rotationAxis, rotationTheta, false)
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}

animate();
