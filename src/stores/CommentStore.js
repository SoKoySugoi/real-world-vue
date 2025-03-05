import { defineStore } from 'pinia'

export const useCommentStore = defineStore('commentStore', {
  state: () => ({
    comments: [],
    id: 0,
  }),
  actions: {
    addComment(comment) {
      this.comments.push(comment)
      this.id++
    },
  },
})
