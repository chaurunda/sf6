import { AddFormData } from "@/app/add/page"
import { FieldBody } from "@/back/src/types"

export const postForm = (payload: AddFormData) => {
  return fetch(`http://localhost:3001/data/${payload.characterName}`, {
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

export const getCharacterData = (id: string) => {
  return fetch(`http://localhost:3001/data/${id}`)
}
