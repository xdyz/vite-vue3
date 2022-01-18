<template>
  <h1>SetUp</h1>
  <a-button @click="aaa">gaibia</a-button>
</template>

<script lang="ts">
export default {
  // props 与vue2 相同
  props: {
    name: {
      type: String,
      default: "123",
    },
  },
  // emits 明确当前组件接收的事件 例如父组件定义到子组件上的事件
  // 父组件在当前组件上 注册了一个hello 事件
  emits: ["hello"],

  //slots 插槽 与 vue2 相同 当前界面预留 插槽的位置即可
  setup({ name }, { emit, slots }) {
    // 方法

    function aaa() {
      console.log("aaa");
    }

    const chufa = () => {
      emit("hello", 3333);
    };

    return {
      aaa,
    };
  },
};
</script>

