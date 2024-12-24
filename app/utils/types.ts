export type hitType = "light" | "medium" | "heavy" | string

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
