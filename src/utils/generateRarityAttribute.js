import {
  leaf1,
  leaf2,
  leaf11,
  leaf13,
  leaf16,
  leaf17,
  leaf18,
} from '../properties/leaf_props'

import {
  handle4,
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
  Common: [leaf1, leaf2],
  Uncommon: [leaf11, leaf13],
  Rare: [leaf16],
  Epic: [leaf17],
  Legendary: [leaf18],
}

/**
 *    leaf1 - wave
 *    leaf2 - mountain
 *    leaf11 - mountain/tree
 *    leaf13 - pagoda
 *    leaf16 - geisha
 *    leaf17 - frogOnFish
 *    leaf18 - tiger head
 * 
 */


const handleAttributeCollection = {
  Common: [handle4],
  Uncommon: [handle7],
  Rare: [handle8],
  Epic: [handle9],
  Legendary: [handle10],
}

const particleAttributeCollection = {
  Common: [particleImage1, 'Lazer Beam'],
  Uncommon: [particleImage2, 'Twinkle'],
  Rare: [particleImage3, 'Eight Point Star'],
  Epic: [particleImage4, 'Hearts'],
  Legendary: [particleImage5, 'Five Point Star'],
}

export const getRandomLeafWithRarityLabel = () => {
  const rarityLabel = weightedRandom(rarityLabels, rarityWeights)
  const luckyLeaf = getRandomFromList(leafAttributeCollection[rarityLabel])
  return {
    leaf: luckyLeaf.design,
    rarity: rarityLabel,
    name: luckyLeaf.name,
  }
}

export const getRandomHandleWithRarityLabel = () => {
  const rarityLabel = weightedRandom(rarityLabels, rarityWeights)
  const happyHandle = getRandomFromList(handleAttributeCollection[rarityLabel])
  return {
    handle: happyHandle.design,
    rarity: rarityLabel,
    material: happyHandle.material,
  }
}

export const getRandomParticleWithRarityLabel = () => {
  const rarityLabel = weightedRandom(rarityLabels, rarityWeights)
  const prettyParticle = particleAttributeCollection[rarityLabel]
  return {
    particle: prettyParticle[0],
    rarity: rarityLabel,
    effect: prettyParticle[1],
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
