import * as THREE from 'three'

import {
  particleImage1,
  particleImage2,
  particleImage3,
  particleImage4,
  particleImage5,
} from '../properties/particle_props'

const tasteTheRainbow = [
  '#ECF0F1',
  '#E67E22',
  '#F1C40F',
  '#27AE60',
  '#3498DB',
  '#8E44AD',
  '#E74C3C',
  '#FA03C9'
]

const colorPicker = () => {
  const amountOfColors = tasteTheRainbow.length - 1
  const rando = Math.floor(Math.random() * amountOfColors)
  return tasteTheRainbow[rando]
}

const flakeCount = 1000
const flakeGeometry = new THREE.TetrahedronGeometry(0.035) // radius
const flakeMaterial = new THREE.PointsMaterial({
    color: '#FFC0CB',
    size: 0.3,
    sizeAttenuation: true,
    transparent: true,
    alphaMap: particleImage3,
    blending: THREE.AdditiveBlending,
    alphaTest: 0.001
  })

export const snow = new THREE.Group()

for (let i = 0; i < flakeCount; i++) {
  const flakeMesh = new THREE.Points(flakeGeometry, flakeMaterial)
  flakeMesh.position.set(
    (Math.random() - 0.5) * 15,
    (Math.random() - 0.5) * 25,
    (Math.random() - 0.5) * 3
  )
  flakeMesh.material.color.set(colorPicker())
  snow.add(flakeMesh)
}

const flakeArray = snow.children

  // TODO
  // play with this and see if I can acheive different effects
    // updraft
    // diagonal drift

export const snowFlakes = () => {
  for (let i = 0; i < flakeArray.length / 2; i++) {
    flakeArray[i].rotation.y += 0.01
    flakeArray[i].rotation.x += 0.02
    flakeArray[i].rotation.z += 0.03
    flakeArray[i].position.y -= 0.0045
    if (flakeArray[i].position.y < -4) {
      flakeArray[i].position.y += 10
    }
  }
  for (let i = flakeArray.length / 2; i < flakeArray.length; i++) {
    flakeArray[i].rotation.y -= 0.03
    flakeArray[i].rotation.x -= 0.03
    flakeArray[i].rotation.z -= 0.02
    flakeArray[i].position.y -= 0.016
    if (flakeArray[i].position.y < -4) {
      flakeArray[i].position.y += 9.5
    }

    snow.rotation.y -= 0.0000001
  }
}