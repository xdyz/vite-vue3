<template>
  <button @click="aaa">
    gaibia
  </button>
</template>

<script lang="ts">

export default {
  setup() {
   
   // 方法

   function aaa() {
      console.log('aaa');
   }

   return {
      aaa
   }
  },
}</script>

