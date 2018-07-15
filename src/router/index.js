import Vue from 'vue'
import Router from 'vue-router'

// 引入页面
import adminlte_container from '@/components/adminlte/adminlte_container'
import demo from '@/components/page/demo'

Vue.use(Router)

export default new Router({
  // 启动HTML5 History模式
  mode: 'history',
  routes: [{
    // adminlte容器页
    path: '/',
    components: {
      container: adminlte_container
    },
    // adminlte功能页面
    children: [{
      // demo测试页
      path: '/demo',
      components: {
        adminlte: demo
      },
    }]
  }]
})
