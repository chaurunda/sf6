import { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import { enabledFileName, filepath, hasAllFields } from "@/utils"
import { charactersData } from "@/types"
type ResponseData = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method == "GET") {
    return getCharacterData(req.query.characterId as string, res)
  }
  if (req.method == "POST") {
    return setCharacterData(req.query.characterId as string, req, res)
  }
  return res.status(405).send({ message: "Method Not Allowed" })
}

const getCharacterData = (characterId: string, res: NextApiResponse<ResponseData>) => {
  const fileName = enabledFileName(characterId as string)
  if (!fileName) {
    return res.status(404).send({ message: "Not Found" })
  }
  const filedata = fs.readFileSync(filepath(fileName), "utf-8")
  return res.send(JSON.parse(filedata))
}

const setCharacterData = (
  characterId: string,
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  const fileName = enabledFileName(characterId as string)
  if (!fileName) {
    return res.status(404).send({ message: "Not Found" })
  }
  const body = req.body
  if (!body) {
    res.status(401).send({ message: "Missing body" })
  }
  const arefieldsmissing = hasAllFields(body)
  if (!arefieldsmissing) {
    res.status(401).send({ message: "A field is missing" })
    return
  }

  const filedata = fs.readFileSync(filepath(fileName), "utf-8")
  const existingData = JSON.parse(filedata) as charactersData

  const newData = existingData.hit.map((h) => {
    if (body.title && h.title === body.title) {
      return {
        title: h.title,
        combos: [
          ...h.combos,
          {
            combo: body.combo,
            comment: body.comment,
          },
        ],
      }
    }
    return {
      title: body.title || "Other",
      combos: [
        ...h.combos,
        {
          combo: body.combo,
          comment: body.comment,
        },
      ],
    }
  })

  const data: charactersData = {
    hit: newData,
    source: existingData.source,
  }

  if (body.source) {
    data.source.push(body.source)
  }

  fs.writeFileSync(filepath(fileName), JSON.stringify(data))

  res.status(201).send({ message: "Ok" })
}
