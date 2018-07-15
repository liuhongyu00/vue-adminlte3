import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

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
    // 该配置文件为vue导航文件
    id: store.state.config.navbar_id,
    // adminlte容器页
    path: '/',
    components: {
      container: adminlte_container
    },
    // adminlte功能页面
    children: [{
      // card演示页
      navbarName: 'card演示页',
      navbarIcon: '<i class="fa fa-circle-o nav-icon"></i>',
      path: '/card',
      components: {
        adminlte: card
      },
    }, {
      // card演示页
      navbarName: 'card演示页',
      navbarIcon: '<i class="fa fa-circle-o nav-icon"></i>',
      path: '/cards',
      components: {
        adminlte: card
      },
    }, {
      // 500错误
      navbarName: '500',
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
