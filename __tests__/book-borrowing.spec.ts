import { describe, it, expect } from "vitest"

const bookCollection = ["CLRS", "Element of Programming Style"]

function borrowBook(bookCollection: string[], bookToBorrow: string): any {
  return {
    success:   bookCollection.find(book => bookToBorrow === book) !== undefined,
    remainingBooks: bookCollection.filter((book) => bookToBorrow !== book)
  }
}

describe("Book borrowing", () => {
  it("should return ['Element of Programming Style'] and `success=true` when borrow 'CLRS'", () => {
    expect(borrowBook(bookCollection, "CLRS")).toEqual({
      success: true,
      remainingBooks: ["Element of Programming Style"],
    })
  })

  it("should be success=false when book 'other book' which is not in the book store", () => {
    expect(borrowBook(bookCollection, "other book")).toEqual({
      success: false,
      remainingBooks: bookCollection,
    })
  })
})
