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
  handle10,
} from '../properties/handle_props'

import {
  particleImage1,
  particleImage2,
  particleImage3,
  particleImage4,
  particleImage5,
} from '../properties/particle_props'

const rarityLabels = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']
const rarityWeights = [.6, .25, .08, .05, .02]

function weightedRandom(items, weights) {
  const cumulativeWeights = []
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0)
  }

  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1]
  const randomNumber = maxCumulativeWeight * Math.random()

  for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
    if (cumulativeWeights[itemIndex] >= randomNumber) {
      return items[itemIndex]
    }
  }
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

const particleAttributeCollection = {
  Common: [particleImage1],
  Uncommon: [particleImage2],
  Rare: [particleImage3],
  Epic: [particleImage4],
  Legendary: [particleImage5],
}

export const getRandomLeafWithRarityLabel = () => {
  const rarityLabel = weightedRandom(rarityLabels, rarityWeights)
  return {
    leaf: getRandomFromList(leafAttributeCollection[rarityLabel]).design,
    rarity: rarityLabel,
  }
}

export const getRandomHandleWithRarityLabel = () => {
  const rarityLabel = weightedRandom(rarityLabels, rarityWeights)
  return {
    handle: getRandomFromList(handleAttributeCollection[rarityLabel]),
    rarity: rarityLabel,
  }
}

export const getRandomParticleWithRarityLabel = () => {
  const rarityLabel = weightedRandom(rarityLabels, rarityWeights)
  return {
    particle: particleAttributeCollection[rarityLabel][0],
    rarity: rarityLabel,
  }
}

/** 
 * 
 *  Use the below logic to demo the accuracy of the rarity function
 *  last test returned the following:
 * { Common: 614, Uncommon: 237, Rare: 85, Epic: 44, Legendary: 20 }
 * 
 */

// let oneThousandWeights = {
//   Common: 0,
//   Uncommon: 0,
//   Rare: 0,
//   Epic: 0,
//   Legendary: 0,
// }

// for (let i = 0; i < 1000; i += 1) {
//   const rarityLabel = weightedRandom(rarityLabels, rarityWeights)
//   oneThousandWeights[rarityLabel]++
// }

// console.log(oneThousandWeights)
