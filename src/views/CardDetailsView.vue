<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'

const card = ref(null)

const props = defineProps({
  id: {
    required: true,
  },
})

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      card.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="card">
    <img v-bind:src="card.image" />
    <p v-if="card.attribute">{{ card.attribute }}</p>
    <p v-if="car.type">{{ card.type }}</p>
    <p v-if="card.attack">{{ card.attack }}</p>
    <p v-if="card.defense">{{ card.defense }}</p>
    <p>{{ card.rarity }}</p>
    <p>{{ card.description }}</p>
  </div>
</template>
