<template>
  <h1>ShallowReactive</h1>
</template>
<script lang="ts" setup>
import { ref, shallowRef, readonly } from "vue";

const a = ref({
  name: "jack",
  age: 18,
  mong: {
    config: {
      state: 333
    }
  }
})
const person = shallowRef({
  name: "jack1",
  age: 181,
  mong: {
    config: {
      state: 3331
    }
  }
})

console.log(a);
console.log(person);

const r = readonly(a)
console.log(r);
</script>