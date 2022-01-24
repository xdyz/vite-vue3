
// 这里引入的就不是Vue 构建函数了
// 引入一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './stores/index'

// 创建主界面，并且绑定容器id  创建应用实例对象
// Vue3
const app = createApp(App)
app.use(AntDesignVue)


// 一定要在mount 之前 使用
app.use(store)
app.mount('#app')



// 注入antd 组件

// 注入状态管理库


console.log(createApp(App));


//Vue2
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

