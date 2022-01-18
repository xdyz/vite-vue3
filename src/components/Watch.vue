<template>
  <h1>Watch</h1>
  <a-button>watch a</a-button>
  <a-button>watch b</a-button>
  <a-button @click="changeC">watch c</a-button>
</template>

<script lang="ts">
import { ref, watch, reactive } from "@vue/runtime-core";

export default {
  setup() {
    const a = ref(1);
    const b = ref(2);
    const e = ref({
      age: 13,
      name: "33",
    });

    const c = reactive({
      name: "jack",
      age: 18,
      mony: {
        basic: 11,
        add: 444,
      },
    });

    const d = reactive({
      name: "jhon",
      age: 27,
    });

    /**
     * watch 可以监听一个值的变化
     * a 为需要监听的值
     * handler 为监听的回调函数
     *
     */
    watch(
      a,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      {
        immediate: true,
        deep: true,
      }
    );
    // 如果是ref 定义的对象  监听的时候 需要 watch 或者 开启deep

    watch(e.value, (nv, ov) => {
      console.log(nv, ov);
    });

    watch(
      e,
      (nv, ov) => {
        console.log(nv, ov);
      },
      {
        deep: true,
      }
    );
    /**
     * 监听多个值变化
     */
    watch(
      [a, b],
      ([na, nb], [oa, ob]) => {
        console.log([na, nb], [oa, ob]);
      },
      {
        immediate: true,
        deep: true,
      }
    );

    /**
     * 监听对象的属性变化
     */
    watch(
      c,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      {
        // immediate: true,
        // deep: true
      }
    );

    const changeC = () => {
      c.name = "jackie";
      c.age = 20;
    };
    return {
      a,
      b,
      c,
      d,
      changeC,
    };
  },
};
</script>
