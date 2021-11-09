import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

const gui = new dat.GUI()
const canvas = document.querySelector('canvas')
const scene = new THREE.Scene()

const textureLoader = new THREE.TextureLoader()
const designPattern = textureLoader.load('./static/textures/particles/wave.jpeg');
const fanTexture = textureLoader.load('./static/textures/particles/fanTexture.jpeg')
const grainyTexture = textureLoader.load('./static/textures/particles/oldTexture.png')

const geometry = new THREE.CircleGeometry( 1, 30, 0, 2 )

const positionAttribute = geometry.attributes.position;
console.log(positionAttribute)

for (let i = 0; i < positionAttribute.count; i++) {
  var x = positionAttribute.getX(i)
  var y = positionAttribute.getY(i)
  var z = positionAttribute.getZ(i)

  if(i % 2 === 0) {
    z += 0.05;
  }

  positionAttribute.setXYZ(i, x, y, z)
}

const wireframe = new THREE.WireframeGeometry( geometry )
const line = new THREE.LineSegments( wireframe )
line.material.depthTest = false
line.material.opacity = 0.15
line.material.transparent = true
line.side = THREE.DoubleSide

const material = new THREE.MeshStandardMaterial({
  map: designPattern,
  emissiveMap: grainyTexture,
  emissive: '#664229'
  // wireframe: true // cool effect with this on
})
material.side = THREE.DoubleSide
const circle = new THREE.Mesh(geometry, material)

// const shape = new THREE.Shape();

// const x = 0;
// const y = 0;

// shape.moveTo(x - 0.5, y - 0.5)
// shape.lineTo(x + 1, y)
// shape.lineTo(x + 1, y + 0.5)

// const TriangleGeometry = new THREE.ShapeGeometry(shape)
// const triMaterial = new THREE.MeshBasicMaterial({  color: 0x00ff00 })
// triMaterial.side = THREE.DoubleSide
// const triMesh = new THREE.Mesh( TriangleGeometry, triMaterial)

// triMesh.position.x = 0

// scene.add( triMesh )
// console.log(circle)
// console.log(circle, line)
// line segments can give me good information on how to manipulate the "circle" object
scene.add(circle);
circle.position.x = -0.8
line.position.x = -0.1;
circle.position.y = -0.5;
line.position.y = -0.5;
circle.position.z = 1;
line.position.z = 1;

const sizes = {
  width: 1200,
  height: 800
}

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);


const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

let time = Date.now()

const clock = new THREE.Clock()

const animate = () => {

  // circle.rotation.y += .01;
  // line.rotation.y += .01;
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}

animate();

