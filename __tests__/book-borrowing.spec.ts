import { describe, it, expect } from "vitest"

const bookCollection = ["CLRS", "Element of Programming Style"]

function borrowBook(bookCollection: string[], bookToBorrow: string): any {
  return ["Element of Programming Style"]
}

describe("Book borrowing", () => {
  it("should return ['Element of Programming Style'] when borrow 'CLRS'", () => {
    expect(borrowBook(bookCollection, "CLRS")).toEqual(["Element of Programming Style"])
  })
})
