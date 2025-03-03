<script setup>
import CardComponent from '@/components/CardComponent.vue'
import { computed } from 'vue'
import { onMounted } from 'vue'
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
    <tbody>
      <tr v-for="(row, rowIndex) in tempArray" :key="rowIndex">
        <td class="display-card" v-for="card in row" :key="card.id">
          <CardComponent :card="card" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
