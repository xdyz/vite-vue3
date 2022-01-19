<template>
  <h1>Ref</h1>
  <a-button @click="change()">点击</a-button>
  <div>{{ val }}</div>

  <br />
  <a-button @click="changeJob">点击job</a-button>
  <div>{{ job.type }}</div>
  <div>{{ job.mony }}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// 这样定义的数据就是普通数据，不是响应式数据
let name = "123";

// 通过ref 建立响应式数据，类似于react 中的useState 基础类型
const val = ref(1);
console.log(val);

const change = () => {
  val.value++;
};

// 如果此时ref 接手一个引用类型的值

const job = ref({
  type: "xx",
  mony: 123,
});
console.log(job);
console.log(job.value);

const changeJob = () => {
  // 方法1
  job.value.type = "yy";
  job.value.mony = 456;

  // 方法 2

  job.value = {
    type: "zz",
    mony: 789,
  };
};
</script>