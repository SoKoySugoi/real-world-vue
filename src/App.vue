<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <router-link :to="{ name: 'home' }"> Home</router-link>
          | <router-link :to="{ name: 'card-list' }">Cards</router-link> |
          <router-link :to="{ name: 'deck-list' }">Deck</router-link>
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

<style lang="css" scoped>
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}
</style>
