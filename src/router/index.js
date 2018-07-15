import Vue from 'vue'
import Router from 'vue-router'

// adminlte容器
import adminlte_container from '@/components/adminlte/adminlte_container'
// adminlte功能页面
import card from '@/page/demo/card'

// 404
import notFound from '@/components/error/404'
// 500
import serverError from '@/components/error/500'

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
      // card演示页
      path: '/card',
      components: {
        adminlte: card
      },
    }, {
      // 500错误
      path: '/500',
      components: {
        adminlte: serverError
      }
    }, {
      // 404错误
      path: '*',
      components: {
        adminlte: notFound
      }
    }]
  }]
})
