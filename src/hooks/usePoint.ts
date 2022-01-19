import { onBeforeUnmount, onMounted, reactive, ReactiveEffect } from "vue"

export const usePoint =   ():{x: number, y: number} => {
  let point = reactive({
    x: 0,
    y: 0
  })

  const getPoint = (event: any) => {
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


  return point
}