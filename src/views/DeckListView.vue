<script setup>
import { storeToRefs } from 'pinia'
import { useDeckListStore } from '@/stores/DeckList.js'
import CardList from '@/components/CardList.vue'

const store = useDeckListStore()
const { deckList } = storeToRefs(store)
</script>

<template>
  <template>
    <div v-if="deckList.length > 0">
      <CardList :cards="deckList" />
    </div>
  </template>
</template>
