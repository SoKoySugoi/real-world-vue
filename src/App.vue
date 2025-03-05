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
