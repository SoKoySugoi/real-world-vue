import { defineStore } from 'pinia'

export const useDeckListStore = defineStore('deckList', {
  state: () => ({
    deckList: [],
  }),
  // getters
  actions: {
    addCard(card) {
      this.deckList.push(card)
    },
    deleteCard(cardId) {
      this.deckList = this.deckList.filter((object) => {
        return object.id !== cardId
      })
    },
  },
})
