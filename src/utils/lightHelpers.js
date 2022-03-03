import * as THREE from 'three'

const color = 0xffffff
const intensity = 0.6
const directLightIntensity = 0.1
export const light = new THREE.AmbientLight(color, intensity)

export const spotLightStraightOn = new THREE.DirectionalLight(
  'white',
  directLightIntensity
)

spotLightStraightOn.position.set(1, 2, 3)

export const spotLightStraightOnHelper = new THREE.DirectionalLightHelper(
  spotLightStraightOn,
)

export const pointLight = new THREE.PointLight(0xffffff, 5, 17);
const pointLightHelper = new THREE.PointLightHelper(pointLight)
pointLight.position.set(10, 6, 10);
export const lightHolder = new THREE.Group();

const spotLightOne = new THREE.SpotLight( 0xffffff, 0.075 );
const spotLightHelperOne = new THREE.SpotLightHelper(spotLightOne)
spotLightOne.position.set( 0.27, -0.55, 1.3 );
spotLightOne.angle = Math.PI / 9

spotLightOne.castShadow = false;

spotLightOne.shadow.mapSize.width = 5;
spotLightOne.shadow.mapSize.height = 5;

spotLightOne.shadow.camera.near = 1;
spotLightOne.shadow.camera.far = 4;
spotLightOne.shadow.camera.fov = 3;

const spotLightTwo = new THREE.SpotLight( 0xffffff, 0.075 );
const spotLightHelperTwo = new THREE.SpotLightHelper(spotLightTwo)
spotLightTwo.position.set( 0, -0.55, 1.3 );
spotLightTwo.angle = Math.PI / 9

spotLightTwo.castShadow = false;

spotLightTwo.shadow.mapSize.width = 5;
spotLightTwo.shadow.mapSize.height = 5;

spotLightTwo.shadow.camera.near = 1;
spotLightTwo.shadow.camera.far = 4;
spotLightTwo.shadow.camera.fov = 3;

lightHolder.add(pointLight, pointLightHelper, spotLightOne, spotLightTwo, light);

