// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Hello from 'components/Hello' // 配置了路径

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
