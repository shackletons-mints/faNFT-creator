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
  leaf15,
  leaf16,
  leaf17,
  leaf18,
  leaf19,
  leaf20,
  leaf21,
} from '../properties/leaf_props'

import {
  handle1,
  handle2,
  handle3,
  handle4,
  handle5,
  handle6,
  handle7,
  handle8,
  handle9,
  handle10
} from '../properties/handle_props'

import {
  commonBG,
  uncommonBG,
  rareBG,
  epicBG,
  legendaryBG,
} from '../properties/backgrounds'

import {
  particleImage1,
  particleImage2,
  particleImage3,
  particleImage4,
  particleImage5,
} from '../properties/particle_props'

// This turns into a binary search tree.  Im still trying to figure out how.
// reference: https://stackoverflow.com/questions/43566019/how-to-choose-a-weighted-random-array-element-in-javascript/68792377#comment121581367_68792377
let rarityLabelKeys = {
  Common: '60',
  Uncommon: '25',
  Rare: '10',
  Epic: '1',
  Legendary: '0.1',
}

// turning object into array and creating the prefix sum array:
let sums = [0] // prefix sums;
let keys = []

for (let key in rarityLabelKeys) {
  keys.push(key)
  sums.push(sums[sums.length - 1] + parseFloat(rarityLabelKeys[key]) / 100)
}

sums.push(1)
keys.push('NONE')

// This will theortically return 1 legendary in 10,000 etc...
function lowerBound(target, low = 0, high = sums.length - 1) {
  if (low == high) {
    return low
  }
  const midPoint = Math.floor((low + high) / 2)

  if (target < sums[midPoint]) {
    return lowerBound(target, low, midPoint)
  } else if (target > sums[midPoint]) {
    return lowerBound(target, midPoint + 1, high)
  } else {
    return midPoint + 1
  }
}

function getRandomRarity() {
  return lowerBound(Math.random())
}

function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)]
}

// get Fan attribute from collection based on rarity prop
const leafAttributeCollection = {
  Common: [leaf4, leaf6, leaf10, leaf14, leaf19, leaf20, leaf21, leaf11, leaf2],
  Uncommon: [leaf1, leaf3, leaf13, leaf15, leaf14],
  Rare: [leaf12, leaf16, leaf5, leaf7],
  Epic: [leaf8, leaf9, leaf17],
  Legendary: [leaf18],
}

const handleAttributeCollection = {
  Common: [handle1, handle2, handle3],
  Uncommon: [handle4, handle5, handle6],
  Rare: [handle7, handle8],
  Epic: [handle9],
  Legendary: [handle10],
}

const bgAttributeCollection = {
  Common: [commonBG],
  Uncommon: [uncommonBG],
  Rare: [rareBG],
  Epic: [epicBG],
  Legendary: [legendaryBG],
}

const particleAttributeCollection = {
  Common: [particleImage1],
  Uncommon: [particleImage2],
  Rare: [particleImage3],
  Epic: [particleImage4],
  Legendary: [particleImage5],
}

export const getRandomLeafWithRarityLabel = () => {
  const rarityLabel = keys[getRandomRarity()]
  return {
    leaf: getRandomFromList(leafAttributeCollection[rarityLabel]).design,
    rarity: rarityLabel,
  }
}

export const getRandomHandleWithRarityLabel = () => {
  const rarityLabel = keys[getRandomRarity()]
  return {
    handle: getRandomFromList(handleAttributeCollection[rarityLabel]),
    rarity: rarityLabel,
  }
}

export const getRandomBackgroundWithRarityLabel = () => {
  const rarityLabel = keys[getRandomRarity()]
  return {
    background: bgAttributeCollection[rarityLabel][0],
    rarity: rarityLabel,
  }
}

export const getRandomParticleWithRarityLabel = () => {
  const rarityLabel = keys[getRandomRarity()]
  return {
    particle: particleAttributeCollection[rarityLabel][0],
    rarity: rarityLabel,
  }
}
