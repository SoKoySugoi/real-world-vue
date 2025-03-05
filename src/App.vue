<template>
  <div id="layout">
    <header>
      <nav class="navbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }"> Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'card-list' }">Cards</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'deck-list' }">Deck</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view v-slot="{ Component }">
      <transition name="grow-in" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>
