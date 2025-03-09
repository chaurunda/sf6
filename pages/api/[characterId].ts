import { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import { enabledFileName, filepath, hasAllFields } from "@/utils"
import { charactersData } from "@/types"
import path from "path"
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

const setCharacterData = async (
  characterId: string,
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  const filePath = path.join(process.cwd(), "data", `${characterId}.json`)
  const newData = req.body

  try {
    // Lire le fichier JSON existant
    const fileContent = await fs.readFileSync(filePath, "utf8")
    let characterData: charactersData = JSON.parse(fileContent)

    // Trouver ou créer la section
    let section = characterData.hit.find((s) => s.title === newData.title)
    if (!section) {
      section = { title: newData.title, combos: [] }
      characterData.hit.push(section)
    }

    // Ajouter le nouveau combo
    section.combos.push({
      combo: newData.combo,
      comment: newData.comment,
    })

    // Ajouter la source si elle n'est pas vide
    if (newData.source && !characterData.source.includes(newData.source)) {
      characterData.source.push(newData.source)
    }

    // Écrire les données mises à jour dans le fichier
    await fs.writeFileSync(filePath, JSON.stringify(characterData, null, 2))

    return res.status(201).send({ message: "Données mises à jour avec succès" })
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données:", error)
    return res.status(500).send({ message: "Erreur lors de la mise à jour des données" })
  }
}
