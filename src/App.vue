<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'home' }"> Home</RouterLink>
          | <RouterLink :to="{ name: 'card-list' }">Cards</RouterLink> |
          <RouterLink :to="{ name: 'deck-list' }">Deck</RouterLink>
        </nav>
      </div>
    </header>
    <div id="component-layout">
      <router-view v-slot="{ Component }">
        <transition name="grow-in" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
