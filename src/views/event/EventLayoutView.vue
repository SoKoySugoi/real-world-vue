<script setup>
import { computed, onMounted, ref } from 'vue'
import EventService from '@/services/EventService.js'

const props = defineProps(['id'])

const event = ref('')
const id = computed(() => props.id)

onMounted(() => {
  EventService.getEvent(id.value)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <RouterLink class="nav-link" :to="{ name: 'event-details' }"> Details </RouterLink>
      |
      <RouterLink class="nav-link" :to="{ name: 'event-register' }"> Register </RouterLink>
      |
      <RouterLink class="nav-link" :to="{ name: 'event-edit' }"> Edit </RouterLink>
    </div>
    <RouterView :event="event" />
  </div>
</template>
