<script setup>
import CardComponent from '@/components/CardComponent.vue'
import { computed, onMounted } from 'vue'
const props = defineProps({
  cards: {
    type: Array,
  },
})
onMounted(() => {
  console.log(props.cards)
})
const tempArray = computed(() => {
  const result = []
  for (let i = 0; i < props.cards.length; i += 2) {
    const row = props.cards.slice(i, i + 2)
    result.push(row)
  }
  return result
})
</script>

<template>
  <table class="container">
    <tbody v-if="cards.length >= 2">
      <tr v-for="(row, rowIndex) in tempArray" :key="rowIndex">
        <td v-for="(card, i) in row" :key="i">
          <CardComponent :card="card" />
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <td v-for="(card, i) in cards" :key="i">
        <CardComponent :card="card" />
      </td>
    </tbody>
  </table>
</template>
