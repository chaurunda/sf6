import express from "express"
import dotenv from "dotenv"
import router from "./router"
import cors from "cors"

// configures dotenv to work in your application
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT

app.use("/data", router)

app
  .listen(PORT, () => {
    console.log(`Server running at : http://localhost:${PORT}`)
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message)
  })

export default app
