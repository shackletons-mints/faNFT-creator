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

// This turns into a binary search tree.  Im still trying to figure out how.
// reference: https://stackoverflow.com/questions/43566019/how-to-choose-a-weighted-random-array-element-in-javascript/68792377#comment121581367_68792377
let rarityLabelKeys = {
  Common: '60',
  Uncommon: '25',
  Rare: '10',
  Epic: '0.1',
  Legendary: '0.01',
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
  Common: [
    leaf1,
    leaf2,
    leaf3,
    leaf4,
    leaf5,
    leaf6,
    leaf7,
    leaf8,
    leaf9,
  ],
  Uncommon: [
    leaf10,
    leaf11,
    leaf12,
    leaf13,
    leaf14,
  ],
  Rare: [leaf15, leaf16, leaf17, leaf18],
  Epic: [leaf18, leaf19, leaf20],
  Legendary: [leaf21],
}

// we can do this with each variable that we want to be random and weighted.
// Eventually the title of the gif will be tied to the random attributes.
// "fan_rare_leaf_epic_handle_common_particles"
export const getRandomLeafWithRarityLabel = () => {
  const leafRarityLabel = keys[getRandomRarity()]
  return {
    design: getRandomFromList(leafAttributeCollection[leafRarityLabel]).design,
    rarity: leafRarityLabel,
  }
}
