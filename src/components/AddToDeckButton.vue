<script setup>
import { useDeckListStore } from '@/stores/DeckList'
defineProps({
  card: {
    type: Object,
    required: true,
  },
})

const store = useDeckListStore()
</script>
<template>
  <form @submit.prevent="">
    <button @click="store.addCard(card)" class="btn btn-success">Add to Deck</button>
  </form>
</template>
