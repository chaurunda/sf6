import { AddFormData } from "@/app/add/page"
import { comboListType, FieldBody } from "@/types"

export const postForm = (payload: AddFormData) => {
  return fetch(`/api/${payload.characterName}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(computeFormData(payload)),
  })
}

const computeFormData = (data: AddFormData): FieldBody => {
  return {
    title: data.title,
    combo: data.combo,
    comment: data.comment,
    source: data.source,
  }
}

export const getCharacterData = async (id: string): Promise<comboListType> => {
  const response = await fetch(`/api/${id}`)

  return await response.json()
}
