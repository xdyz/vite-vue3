<template>
  <h1>ShallowReactive</h1>
</template>


<script lang="ts" setup>
import { shallowReactive, reactive } from "vue";

const a = reactive({
  name: "jack",
  age: 18,
  mong: {
    config: {
      state: 333
    }
  }
});
const person = shallowReactive({
  name: "jack",
  age: 18,
  mong: {
    config: {
      state: 333
    }
  }
});

console.log(a);
console.log(person);
</script>