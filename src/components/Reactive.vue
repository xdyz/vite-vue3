<template>
  <button @click="changeReactive">点击reactive</button>
  <button @click="changeReactive2">点击reactive arr</button>
  <div >
    {{msg}}
  </div>
  <div>{{arr}}</div>
</template>

<script lang="ts">
import { reactive } from 'vue'
export default {
  setup({ attrs, emit, slots, state, onMounted }) {
    console.log('setup');
    
    const msg = reactive({
      name: 'sdfsdf',
      age: 33
    })
    
    console.log(msg);
    
    const changeReactive = () => {
      delete msg.name;
      Object.assign(msg, {bb:333})
    }


    const arr = reactive([1,2,3,4,5])
    const changeReactive2 = () => {
      
      // 基本支持所有的数组操作 改变自身的方法，都会被监听到
      arr.push(6)

      // 在vue2 中 无法这样修改  但是在vue3中可以这么改的
      arr[0] = 123123
    }
    console.log(arr)

    return {
      msg,
      changeReactive,
      changeReactive2,
      arr
    }
  },
  beforeCreate(){
    console.log('beforeCreate');
  },
  created(){
    console.log('created');
  },
  beforeMount(){
    console.log('beforeMount');
  },
  mounted(){
    console.log('mounted');
  },
}
</script>