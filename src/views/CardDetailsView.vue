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
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <img class="col-md-3" v-bind:src="card.image" />
        <ul class="col-md-2 details">
          <li v-if="card.attribute">Attribute: {{ card.attribute }}</li>
          <li v-if="card.type">Type: {{ card.type }}</li>
          <li v-if="card.attack || card.defense">ATK/DEF: {{ card.attack }}/{{ card.defense }}</li>
          <li>Rarity: {{ card.rarity }}</li>
          <li>
            Description:
            <p>{{ card.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  width: 260px;
  text-align: left;
}
li {
  margin-top: 15px;
}
</style>
