<template>
  <h1>ToRefs</h1>
</template>
<script lang="ts" setup>
import { reactive, toRef, toRefs } from "vue";

const person = reactive({
  name: "jack",
  age: 18,
  mong: {
    config: {
      state: 333
    }
  }
});

console.log(person);

const person1 = toRefs(person);
console.log(person1);
</script>