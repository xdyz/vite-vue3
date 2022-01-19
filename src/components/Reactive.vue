<template>
  <h1>Reactive</h1>
  <a-button @click="changeReactive">点击reactive</a-button>
  <a-button @click="changeReactive2">点击reactive arr</a-button>
  <div>{{ msg }}</div>
  <div>{{ arr }}</div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
console.log("setup");

const msg = reactive({
  name: "sdfsdf",
  age: 33,
});

console.log(msg);

const changeReactive = () => {
  Object.assign(msg, { bb: 333 });
};

const arr = reactive([1, 2, 3, 4, 5]);
const changeReactive2 = () => {
  // 基本支持所有的数组操作 改变自身的方法，都会被监听到
  arr.push(6);

  // 在vue2 中 无法这样修改  但是在vue3中可以这么改的
  arr[0] = 123123;
};
console.log(arr);
</script>