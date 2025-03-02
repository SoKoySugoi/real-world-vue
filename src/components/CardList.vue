<script setup>
import CardComponent from '@/components/CardComponent.vue'
import { onMounted } from 'vue'
const props = defineProps({
  cards: {
    type: Array,
  },
})
onMounted(() => {
  console.log(props.cards)
})
</script>

<template>
  <table class="container">
    <tbody>
      <td v-for="card in props.cards" :key="card.id"><CardComponent :card="card" /></td>
    </tbody>
  </table>
</template>
