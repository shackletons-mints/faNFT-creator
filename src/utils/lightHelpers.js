import * as THREE from 'three'

const color = 0xffffff
const intensity = 0.6
const directLightIntensity = 0.1
export const light = new THREE.AmbientLight(color, intensity)

// TODO:
  // figure out light values for quarter fan

  // set variables so when we switch between half and quarter fan
  // we get the correct light configuration

light.position.set(1,1,1)

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

const spotLightOne = new THREE.SpotLight( 0xffffff, 1.4 );
const spotLightHelperOne = new THREE.SpotLightHelper(spotLightOne)
spotLightOne.position.set( 0, 1, 4 );
// spotLightOne.position.set( 1, 2.0, 4 ); // for the other fan
spotLightOne.angle = Math.PI / 9

spotLightOne.castShadow = true;

spotLightOne.shadow.mapSize.width = 5;
spotLightOne.shadow.mapSize.height = 5;

spotLightOne.shadow.camera.near = 100;
spotLightOne.shadow.camera.far = 400;
spotLightOne.shadow.camera.fov = 300;

const spotLightTwo = new THREE.SpotLight( 0xffffff, 0.25 );
// const spotLightTwo = new THREE.SpotLight( 0xffffff, 0.075 ); // for the other fan
const spotLightHelperTwo = new THREE.SpotLightHelper(spotLightTwo)
spotLightTwo.position.set( 0, -2, 4 ); // other fan
// spotLightTwo.position.set( 0, -0.55, 1.3 ); // for the other fan
spotLightTwo.angle = Math.PI * 9

spotLightTwo.castShadow = true;

spotLightTwo.shadow.mapSize.width = 5;
spotLightTwo.shadow.mapSize.height = 5;

spotLightTwo.shadow.camera.near = 10;
spotLightTwo.shadow.camera.far = 40;
spotLightTwo.shadow.camera.fov = 30;

const spotLightThree = new THREE.SpotLight( 0xffffff, 0.075 );
const spotLightHelperThree = new THREE.SpotLightHelper(spotLightThree)
spotLightThree.position.set( 0, 2, 5 );
spotLightThree.angle = Math.PI / 9

spotLightThree.castShadow = false;

spotLightThree.shadow.mapSize.width = 5;
spotLightThree.shadow.mapSize.height = 5;

spotLightThree.shadow.camera.near = 10;
spotLightThree.shadow.camera.far = 10;
spotLightThree.shadow.camera.fov = 10;

lightHolder.add(spotLightOne, spotLightTwo);

// , spotLightHelperOne, spotLightTwo, spotLightThree,

// spotLightHelperTwo
// spotLightHelperThree