<script setup>
import { ref, onMounted } from 'vue'
import CardService from '../services/CardService.js'

const card = ref(null)

const props = defineProps({
  id: {
    required: true,
  },
})

onMounted(() => {
  CardService.getCard(props.id)
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
    <p v-if="card.type">{{ card.type }}</p>
    <p v-if="card.attack">{{ card.attack }}</p>
    <p v-if="card.defense">{{ card.defense }}</p>
    <p>{{ card.rarity }}</p>
    <p>{{ card.description }}</p>
  </div>
</template>
