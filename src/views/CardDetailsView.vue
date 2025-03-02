<script setup>
import { ref, onMounted } from 'vue'
import CardService from '../services/CardService.js'
import AddButton from '@/components/AddToDeckButton.vue'

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
          <li>
            <strong>Name: </strong> <span>{{ card.name }}</span>
          </li>
          <li v-if="card.attribute">
            <strong>Attribute: </strong> <span>{{ card.attribute }}</span>
          </li>
          <li v-if="card.types">
            <strong>Type: </strong>
            <span v-for="(type, index) in card.types" :key="index">{{ type }}</span>
          </li>
          <li v-if="card.level">
            <strong>Level/Link: </strong>
            <span>{{ card.level }}</span>
          </li>
          <li v-if="card.attack || card.defense">
            <strong>ATK/DEF: </strong>
            <span>{{ card.attack }}/{{ card.defense }}</span>
          </li>
          <li>
            <strong>Rarity: </strong>
            <span>{{ card.rarity }}</span>
          </li>
          <li>
            <strong>Description:</strong>
            <p>{{ card.description }}</p>
          </li>
          <AddButton :card="card" />
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
