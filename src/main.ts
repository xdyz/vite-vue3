
// 这里引入的就不是Vue 构建函数了
// 引入一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建主界面，并且绑定容器id  创建应用实例对象
// Vue3
createApp(App).mount('#app')

console.log(createApp(App));


//Vue2
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

