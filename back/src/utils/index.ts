import { FormFields, Hit, FieldBody } from "../types/index"

export const enabledFileName = (id: string): string | undefined => {
  const characters = [
    "aki",
    "akuma",
    "blanka",
    "cammy",
    "chunli",
    "deejay",
    "dhalsim",
    "ed",
    "ehonda",
    "guile",
    "jamie",
    "jp",
    "juri",
    "ken",
    "kimberly",
    "lily",
    "luke",
    "mbison",
    "manon",
    "marissa",
    "rashid",
    "ryu",
    "terry",
    "zangief",
  ]

  return characters.find((character) => id === character)
}

export const filepath = (fileName: string) => {
  return `./data/${fileName}.json`
}

export const hasAllFields = (fields: FormFields) => {
  return !!fields.combo
}

export const computeData = (newData: FieldBody, actualData: Hit[]): Hit[] => {
  return actualData
}
