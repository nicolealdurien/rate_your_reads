import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [
      { id: 1, title: "Interview with the Vampire", isFav: false },
      { id: 2, title: "Ship of Magic", isFav: true }
    ]
  })
})