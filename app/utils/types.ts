export type hitType = "light" | "medium" | "heavy" | string

type comboList = {
  title: string
  combos: string[]
}

export type comboListType = {
  hit: comboList[]
  source: string[]
}
