<template>
  <div v-if="deckList.length > 0">
    <CardList :cards="deckList" />
  </div>
  <div class="loading" v-else>
    <img v-show="true" class="loading" src="../assets/images/Loading.jpg" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useDeckListStore } from '@/stores/DeckList.js'
import CardList from '@/components/CardList.vue'

const store = useDeckListStore()
const { deckList } = storeToRefs(store)
</script>
