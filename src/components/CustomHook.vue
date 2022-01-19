<template>
  <div>
    <h1>自定义Hook</h1>
  </div>

    <p>x:{{point.x}}</p>
    <p>y:{{point.y}}</p>
    <p>customPoint x:{{customPoint.x}}</p>
    <p>customPoint y:{{customPoint.y}}</p>
</template>


<script lang="ts">
import { reactive, onMounted, onBeforeUnmount } from "vue";
import usePoint from '../hooks/usePoint';

export default {
  setup() {
    let point = reactive({
      x: 0,
      y: 0
    })

    const getPoint = (event) => {
      console.log(event.pageX, event.pageY);
      Object.assign(point, {
        x: event.pageX,
        y: event.pageY
      })
    }

    onMounted(() => {
      console.log('初始化');
      
      window.addEventListener('mousedown', getPoint);
    })

    onBeforeUnmount(() => {
      console.log('卸载前');
      
      window.removeEventListener('mousedown', getPoint);
    })

    const customPoint = usePoint()

    return {
      point,
      customPoint
    }
  }
}
</script>