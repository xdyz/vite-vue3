<template>
  <h1>Computed</h1>
  <button onclick="{aaa}">aaa</button>
  <div>{c.value}</div>
  <div>{d.value}</div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const a = ref(1);
const b = ref(2);
const aaa = () => {
  a.value = a.value + 1;
  b.value = b.value + 2;
};

// 此时就是一个只读的计算属性
const c = computed(() => {
  return a.value + b.value;
});

console.log(c);

// 这样的操作是不被允许的
// c.value = 100

const d = computed({
  get() {
    return a.value + b.value;
  },
  set(newVal: number) {
    console.log(newVal);

    a.value = newVal * 10;
  },
});

console.log(d);
</script>
