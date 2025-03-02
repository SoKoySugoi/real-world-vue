<script setup>
import { useDeckListStore } from '../stores/DeckList.js'
import CardList from '@/components/CardList.vue'

const store = useDeckListStore()
const deckList = store.deckList
</script>

<template>
  <template>
    <div>
      <CardList :cards="deckList" />
    </div>
  </template>
</template>
