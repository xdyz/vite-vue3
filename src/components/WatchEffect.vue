<template>
  <div>
    <h1>WatchEffect</h1>
    <a-button @click="aaa">gaibia</a-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
const a = ref(1)

watchEffect(() => {

  console.log(`a的值发生了变化，新值为${a.value}`)
})

const aaa = () => {
  a.value = a.value + 1
}

watchEffect(() => {
  console.log(`我没有监听任何的值，只会在初始化的时候执行一次`)
})
</script>