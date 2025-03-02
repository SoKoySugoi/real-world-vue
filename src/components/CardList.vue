<script setup>
import CardComponent from '@/components/CardComponent.vue'
defineProps({
  cards: {
    type: Array,
  },
})
</script>

<template>
  <table class="container">
    <tbody>
      <td v-for="card in cards" :key="card.id"><CardComponent :card="card" /></td>
    </tbody>
  </table>
</template>
