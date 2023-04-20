import { addLuaMock } from '../lib/callback'
import type { Case } from '../lib/types'

addLuaMock('GET_CASES', () => {
  return [
    {
      id: 1,
      name: 'Caixa de AK-47',
      image:
        'https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png',
      price: 200,
      items: [],
    },
    {
      id: 2,
      name: 'Caixa de AK-47',
      image:
        'https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png',
      price: 200,
      items: [],
    },
    {
      id: 3,
      name: 'Caixa de AK-47',
      image:
        'https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png',
      price: 200,
      items: [],
    },
    {
      id: 4,
      name: 'Caixa de AK-47',
      image:
        'https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png',
      price: 200,
      items: [],
    },
    {
      id: 5,
      name: 'Caixa de AK-47',
      image:
        'https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png',
      price: 200,
      items: [],
    },
    {
      id: 6,
      name: 'Caixa de AK-47',
      image:
        'https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png',
      price: 200,
      items: [],
    },
    {
      id: 7,
      name: 'Caixa de AK-47',
      image:
        'https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png',
      price: 200,
      items: [],
    },
  ] satisfies Case[]
})

addLuaMock('GET_CASE', (id: number) => {
  return {
    id: 1,
    name: 'Caixa de AK-47',
    image:
      'https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png',
    price: 200,
    items: [
      {
        code: 'hotdog',
        name: 'Hot dog',
        rarity: 'legendary',
        image:
          'https://cdn.discordapp.com/attachments/837415628566036525/1098313671689646080/hotdog.png',
      },
      {
        code: 'cocaine',
        name: 'Cocaina',
        rarity: 'common',
        image:
          'https://cdn.discordapp.com/attachments/837415628566036525/1098314527596089364/coca-alta.png',
      },
    ],
  } satisfies Case
})
