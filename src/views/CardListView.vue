<script setup>
import { ref, onMounted } from 'vue'
import CardService from '@/services/CardService.js'
import CardList from '@/components/CardList.vue'
const cards = ref(null)

onMounted(() => {
  CardService.getCards()
    .then((response) => {
      cards.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="cards">
    <CardList :cards="cards" />
  </div>
</template>

<style scoped></style>
