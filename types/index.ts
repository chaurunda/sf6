type comboList = {
  title: string
  combos: combo[]
}

export type combo = {
  combo: string
  comment?: string
}

export type comboListType = {
  hit: comboList[]
  source: string[]
}
