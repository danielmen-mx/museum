<template>
  <div>
    <router-view v-slot="{Component}" >
      <component :is="Component" :key="$route.path"></component>
    </router-view>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>