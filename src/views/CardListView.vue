<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'
import CardComponent from '@/components/CardComponent.vue'
const cards = ref(null)

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      cards.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="cards">
    <CardComponent v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<style scoped>
.cards {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
