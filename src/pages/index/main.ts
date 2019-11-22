/*
 * @Description: 页面入口
 * @Author: 毛瑞
 * @Date: 2019-06-18 15:58:46
 */
import router from './router'
import store from './store'
import Vue from 'vue'
import App from './App'
// import prefer from './store/modules/prefer'
import './registerServiceWorker'

/* ---------------------- 我是一条分割线 (灬°ω°灬) ---------------------- */

/// 错误日志采集 ///
// if (process.env.NODE_ENV === 'production') {
//   Vue.config.errorHandler = function(err, vm, info) {
//     // 采集并上传错误日志
//   }
// }

// 防阻塞页面（defer的脚本已缓存时不会非阻塞执行bug:chromium#717979）
setTimeout(() => {
  // new Vue({
  //   store,
  //   router,
  //   created() {
  //     prefer.setSkin() // 初始化皮肤
  //   },
  //   render: (h: CreateElement): VNode => h(App),
  // }).$mount('#app')
  // hacky: 省root组件
  const options = App.options || App
  options.store = store
  options.router = router
  // 设置皮肤
  // const created = options.created
  // options.created = function() {
  //   created && created.apply(this, arguments)
  //   prefer.setSkin()
  // }
  new Vue(App).$mount('#app')
})
