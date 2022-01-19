<template>
  <h1>ShallowReactive</h1>

</template>
<script lang="ts">
import { shallowReactive, reactive, ref, shallowRef, readonly } from "vue";

export default {
  setup() {
    const a = ref({
      name: "jack",
      age: 18,
      mong: {
        config: {
          state: 333
        }
      }
    })
    const person = shallowRef({
      name: "jack1",
      age: 181,
      mong: {
        config: {
          state: 3331
        }
      }
    })

    console.log(a);
    console.log(person);

    const r = readonly(a)
    console.log(r);
    

    
    
    return {

    };
  },
};
</script>