import Chance from 'chance'
import type { Item } from '../lib/types'

const rarities = {
  common: 60,
  rare: 30,
  epic: 10,
  legendary: 1,
}

export function shuffleArray(array: any[]) {
  return [...array].sort(() => Math.random() - 0.5)
}

export function animate(dom, styles, options): Promise<void> {
  return new Promise((resolve, reject) => {
    dom.animate([styles], options).onfinish = () => {
      Object.assign(dom.style, styles)
      resolve()
    }
  })
}

export function getWinnerItem(items: Item[]): Item {
  const itemsKeys = Object.keys(items)
  const itemRarities = Object.values(items).map((item) => rarities[item.rarity])
  const winnerIndex = Chance().weighted(itemsKeys, itemRarities)

  return items[winnerIndex]
}
