<template>
  <h1>SetUp</h1>
  <a-button @click="aaa">gaibia</a-button>
</template>

<script lang="ts" setup>

// 获取组件的props
const props = defineProps({
  name: {
    type: String,
    default: "123",
  },
  age: {
    type: Number,
    default: 18,
  },
});

const emit = defineEmits(['hello'])

function aaa() {
  console.log("aaa");
}

const chufa = () => {
  emit("hello", 3333);
};
</script>

