import app from "./index"
import request from "supertest"
import mock from "mock-fs"

mock({
  "./data/": {
    "juri.json": { test: "testo" },
  },
})

describe("app", () => {
  afterEach(() => {
    jest.clearAllMocks()
    mock.restore()
  })

  it("should return hello world", async () => {
    const res = await request(app).get("/data/")

    expect(res.text).toEqual("Hello World !!!")
  })

  // it("should get json of character", async () => {
  //   const res = await request(app).get("/data/1")

  //   expect(res.body).toEqual({ test: "testo" })
  // })

  it("should return an error when trying to get a non existing character", async () => {
    const res = await request(app).get("/data/1234")

    expect(res.status).toEqual(404)
  })

  // it("should post a new character", async () => {
  //   const res = await request(app).post("/data/create/1")
  //   jest.spyOn(fs, "writeFileSync").mockReturnValueOnce()

  //   expect(res.status).toBe(201)
  // })

  // it("should return an eroor when trying to post a non existing character", async () => {
  //   const res = await request(app).post("/data/create/id")
  //   jest.spyOn(fs, "writeFileSync").mockReturnValueOnce()

  //   expect(res.status).toBe(404)
  // })
})
