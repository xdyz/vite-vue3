<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SetUp from './components/SetUp.vue'
import Ref from './components/Ref.vue';
import Reactive from './components/Reactive.vue';
import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';
import WatchEffect from './components/WatchEffect.vue';
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <br/>
  <SetUp msg="Hello Vue 3 + TypeScript + Vite" />
  <br/>
  <Ref />
  <br/>
  <Reactive />
  <br/>
  <Computed />
  <br/>
  <Watch />
  <br/>
  <WatchEffect />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
