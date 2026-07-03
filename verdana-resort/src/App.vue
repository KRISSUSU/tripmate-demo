<script setup lang="ts"></script>

<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
.container { max-width: 720px; margin: 24px auto; font-family: system-ui, sans-serif; }
nav { margin-bottom: 16px; }
nav a { margin-right: 12px; }
</style>
