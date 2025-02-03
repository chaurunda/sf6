import { enabledFileName, filepath } from "."

describe("utils", () => {
  it("should return name when calling enabledFileName with existing ID ", () => {
    const existingID = "1"

    const result = enabledFileName(existingID)
    expect(result).toBe("juri")
  })

  it("should return undefined when calling enabledFileName with a non-existing ID", () => {
    const nonExistingID = "230"

    const result = enabledFileName(nonExistingID)
    expect(result).toBe(undefined)
  })

  it("should return a filepath", () => {
    const character = "juri"

    const path = filepath(character)

    expect(path).toBe("./data/juri.json")
  })
})
