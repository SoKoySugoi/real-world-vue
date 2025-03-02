<script setup>
defineProps({
  card: {
    type: Object,
  },
})
</script>

<template>
  <div v-if="card">
    <RouterLink class="card-details-link" :to="{ name: 'card-details', params: { id: card.id } }">
      <div class="display-card">
        <img v-bind:src="card.image" />
      </div>
    </RouterLink>
  </div>
  <!--<div v-else>
    <h2>Your deck has no availible cards</h2>
    <p>build your deck by selecting a card from the library.</p>
  </div>-->
</template>

<style scoped>
.display-card img {
  padding: 20px;
  width: 150px;
  height: auto;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  margin-top: 36px;
}
img {
  width: 150px;
}
.display-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.card-details-link {
  text-decoration: none;
}
</style>
