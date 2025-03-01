<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink class="card-details-link" :to="{ name: 'card-details', params: { id: card.id } }">
    <div class="display-card">
      <img v-bind:src="card.image" />
    </div>
  </RouterLink>
</template>

<style scoped>
.display-card img {
  padding: 20px;
  width: 250px;
  height: auto;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.display-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.card-details-link {
  text-decoration: none;
}
</style>
