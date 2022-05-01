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
} from '../properties/leaf_props'

import {
    handle4,
    handle7,
    handle8,
    handle9,
    handle10,
} from '../properties/handle_props'

import {
    fanPieGeometry,
    fanCircleGeometry,
    fanCircleCenterGeometry,
    pieWireframe,
    circleWireframe,
    line
} from '../properties/style_props'

import {
    particleImage1,
    particleImage2,
    particleImage3,
    particleImage4,
    particleImage5,
} from '../properties/particle_props'

const leafRarityLabels = [
    'Common1', 'Common2', 'Common3', 'Common4', 'Common5',
    'Uncommon1', 'Uncommon2', 'Uncommon3', 'Uncommon4',
    'Rare1', 'Rare2', 'Rare3',
    'Epic1', 'Epic2',
    'Legendary'
]

const leafRarityWeights = [25, 25, 25, 25, 25, 20, 20, 20, 20, 15, 15, 15, 10, 10, 5]

const rarityLabels = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']

const rarityWeights = [25, 20, 15, 10, 5]

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
/**
 * c1
 * c2
 * c3
 * c4
 * c5
 * u6
 * u7
 * u8
 * u9
 * r10
 * r11
 * r12
 * e13
 * e14
 * l15
 */

const leafAttributeCollection = {
    Common1: [leaf1],
    Common2: [leaf2],
    Common3: [leaf3],
    Common4: [leaf4],
    Common5: [leaf5],
    Uncommon1: [leaf6],
    Uncommon2: [leaf7],
    Uncommon3: [leaf8],
    Uncommon4: [leaf9],
    Rare1: [leaf10],
    Rare2: [leaf11],
    Rare3: [leaf12],
    Epic1: [leaf13],
    Epic2: [leaf14],
    Legendary: [leaf15],
}

const handleAttributeCollection = {
    Common: [handle4],
    Uncommon: [handle7],
    Rare: [handle8],
    Epic: [handle9],
    Legendary: [handle10],
}

const particleAttributeCollection = {
    Common: [particleImage1, 'None'],
    Uncommon: [particleImage2, 'Twinkle'],
    Rare: [particleImage3, 'Eight Point Star'],
    Epic: [particleImage4, 'Hearts'],
    Legendary: [particleImage5, 'Five Point Star'],
}

export const getRandomLeafWithRarityLabel = () => {
    const rarityLabel = weightedRandom(leafRarityLabels, leafRarityWeights)
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
 * NEW: { Common: 492, Uncommon: 262, Rare: 127, Epic: 84, Legendary: 35 }
 *
 * OLD: { Common: 614, Uncommon: 237, Rare: 85, Epic: 44, Legendary: 20 }
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
