import { Router, Request, Response } from "express"
import { enabledFileName, filepath, hasAllFields } from "../utils"
import fs from "fs"
import { charactersData, FieldBody } from "src/types"

const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World !!!")
})

// router.post("/create/:id", (req: Request, res: Response) => {
//   const fileName = enabledFileName(req.params.id)
//   if (!fileName) {
//     res.status(404).send("Not Found")
//     return
//   }
//   fs.writeFile(filepath(fileName), "{}", (err) => {
//     if (err) throw err
//     console.log("The file has been saved!")
//   })
//   res.sendStatus(201)
// })

router.get("/:id", (req: Request, res: Response) => {
  const fileName = enabledFileName(req.params.id)
  if (!fileName) {
    res.status(404).send("Not Found")
    return
  }
  const filedata = fs.readFileSync(filepath(fileName), "utf-8")
  res.send(JSON.parse(filedata))
})

router.post("/:id", (req: Request, res: Response) => {
  const fileName = enabledFileName(req.params.id)
  if (!fileName) {
    res.status(404).send("Not Found")
    return
  }
  const body = req.body as FieldBody
  if (!body) {
    res.status(401).send("Missing body")
  }
  const arefieldsmissing = hasAllFields(body)
  if (!arefieldsmissing) {
    res.status(401).send("A field is missing")
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

  res.status(201).send("Ok")
})

export default router
