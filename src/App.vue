<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SetUp from './components/SetUp.vue'
import Ref from './components/Ref.vue';
import Reactive from './components/Reactive.vue';
import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';
import WatchEffect from './components/WatchEffect.vue';
import LifeHooks from './components/LifeHooks.vue';
import CustomHook from './components/CustomHook.vue';
import ToRef from './components/ToRef.vue';
import ToRefs from './components/ToRefs.vue';
import ShallowReactive from './components/ShallowReactive.vue';
import ShallowRef from './components/ShallowRef.vue';
import ToRaw from './components/ToRaw.vue';
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
  <br/>
  <LifeHooks />
  <br/>
  <CustomHook />
  <ToRef />
  <br/>
  <ToRefs />
  <br/>
  <ShallowReactive />
  <br/>
  <ShallowRef />
  <br/>
  <ToRaw />
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
