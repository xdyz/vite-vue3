<template>
  <h1>ToRef</h1>
  <div>{{ name }}</div>
  <a-button @click="changePerson">改变 changePerson</a-button>
  <br />
  <div>{{ name1 }}</div>
  <a-button @click="changeName1">改变 changeName1</a-button>
</template>
<script lang="ts" setup>
import { reactive, toRef } from "vue";
const person = reactive({
  name: "jack",
  age: 18,
  mong: {
    config: {
      state: 333
    }
  }
});

const changePerson = () => {
  person.name = "jhon";
  console.log(person);
};

const name1 = toRef(person, "name");

const changeName1 = () => {
  name1.value = "jack1";
  // 看是否 person 中的数据 同步修改了
  console.log(person);
};

const state = toRef(person.mong.config, "state");
</script>