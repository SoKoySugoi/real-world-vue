<template>
  <div>
    <router-link
      class="card-details-link"
      :to="{ name: 'card-details', params: { id: props.card.id } }"
    >
      <strong>{{ card.name }}</strong>
      <div class="display-card">
        <img v-bind:src="props.card.image" />
      </div>
    </router-link>
  </div>
  <!--<div v-else>
    <h2>Your deck has no availible cards</h2>
    <p>build your deck by selecting a card from the library.</p>
  </div>-->
</template>

<script setup>
const props = defineProps({
  card: {
    type: Object,
  },
})
</script>

<style scoped>
.display-card img {
  padding: 20px;
  width: 150px;
  height: auto;
  cursor: pointer;
  border: 1px solid #aac9e7;
  margin: 18px;
}
.display-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.card-details-link {
  color: #aac9e7;
  text-decoration: none;
}
</style>
