<template>
  <div class="row">
    <div class="col-md-2 col-xs-1"></div>
    <div class="col-md-4">
      <form class="review-form" @submit.prevent="addCommentThenClear(comment)">
        <label class="form-label">How to pilot my deck:</label>
        <textarea rows="5" v-model="comment"></textarea>
        <button class="btn btn-success" type="submit">Submit</button>
      </form>
      <div class="review-container">
        <div v-for="comment in store.comments" :key="comment.id">
          <span>{{ comment }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCommentStore } from '@/stores/CommentStore'

const comment = ref('')
const store = useCommentStore()

function addCommentThenClear(instructions) {
  if (instructions.length === 0) {
    return
  }
  store.addComment(instructions)
  comment.value = ''
}
</script>
