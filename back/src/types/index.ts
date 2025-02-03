export type FormFields = {
  combo: string
  comment?: string
}

export type Hit = {
  title: string
  combos: FormFields[]
}

export type charactersData = {
  hit: Hit[]
  source: string[]
}

export type FieldBody = FormFields & {
  title?: string
  source?: string
}
