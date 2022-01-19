<template>
  <div>
    <h1>自定义Hook</h1>
  </div>

  <p>x:{{ point.x }}</p>
  <p>y:{{ point.y }}</p>
  <p>customPoint x:{{ customPoint.x }}</p>
  <p>customPoint y:{{ customPoint.y }}</p>
</template>


<script lang="ts" setup>
import {usePoint} from "../hooks/usePoint";

import { reactive, onMounted, onBeforeUnmount, ReactiveEffect } from "vue";

const props = defineProps({
  point: {
    type: Object,
    default: () => ({ x: 0, y: 0 }),
  },
});



let point = reactive({
  x: 0,
  y: 0,
});

const getPoint = (event: any) => {
  console.log(event.pageX, event.pageY);
  Object.assign(point, {
    x: event.pageX,
    y: event.pageY,
  });
};

onMounted(() => {
  console.log("初始化");

  window.addEventListener("mousedown", getPoint);
});

onBeforeUnmount(() => {
  console.log("卸载前");

  window.removeEventListener("mousedown", getPoint);
});

const customPoint = usePoint();
console.log(customPoint);

</script>