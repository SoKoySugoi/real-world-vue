<script setup>
import { useDeckListStore } from '../stores/DeckList'
import { storeToRefs } from 'pinia'
import CardList from '@/components/CardList.vue'

const store = useDeckListStore()
const deckList = storeToRefs(store)
</script>

<template>
  <template>
    <div v-if="deckList">
      <CardList :cards="deckList"></CardList>
    </div>
  </template>
</template>
