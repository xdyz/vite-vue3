<template>
  <div></div>
</template>

<script lang="ts" setup>
import { reactive, toRaw } from "vue"

const person = reactive({
  name: "jack",
  age: 18,
  mong: {
    config: {
      state: 333
    }
  }
});

const person1 = toRaw(person);

console.log(person);
console.log(person1);
</script>