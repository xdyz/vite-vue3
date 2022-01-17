<template>
  <div>
    <button @click="aaa">gaibia</button>
  </div>
  <p>{{a}}</p>
  <p>{{b}}</p>
  <p>{{c}}</p>
  <p>{{d}}</p>
</template>

<script lang="ts">
import { computed, ref } from '@vue/reactivity';

export default {
  setup() {
    const a = ref(1)
    const b = ref(2)
    const aaa = () => {
      a.value = a.value + 1
      b.value = b.value + 2
    }

    // 此时就是一个只读的计算属性
    const c = computed(() => {
      return a.value + b.value
    })

    console.log(c);
    


    // 这样的操作是不被允许的
    // c.value = 100

   
    const d = computed({
      get() {
        return a.value + b.value
      },
      set(newVal) {
        console.log(newVal);
        
        a.value = newVal * 10
      }
    })

    console.log(d);
    
    return {
      a,
      b,
      c,
      d,
      aaa,
    };
  },
};
</script>