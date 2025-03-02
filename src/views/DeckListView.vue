<script setup>
import { useDeckListStore } from '../stores/DeckList.js'
import { storeToRefs } from 'pinia'
import CardList from '@/components/CardList.vue'

const store = useDeckListStore()
const { deckList } = storeToRefs(store)
</script>

<template>
  <template>
    <div>
      <CardList :cards="deckList" />
    </div>
  </template>
</template>
