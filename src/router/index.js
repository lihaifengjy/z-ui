import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const context = require.context('@/components/', true, /index\.vue$/)
console.log(context.keys())
const componentRouters = context.keys().map(url => {
  const start = url.indexOf('/')
  const end = url.lastIndexOf('/')
  const name = url.substring(start + 1, end)
  const path = `/${name}`

  return {
    name,
    path,
    component: require(`@/components${path}/index.vue`).default
  }
})
console.log(componentRouters)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ...componentRouters
  ]
})
