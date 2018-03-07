import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//当用到的时候才会去加载组件，可以提高首次登录的加载速度
let comps = {
  Dog: () => require('@/pages/Dog.vue').default
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dog',
      component: comps.Dog()
    }
  ]
})
