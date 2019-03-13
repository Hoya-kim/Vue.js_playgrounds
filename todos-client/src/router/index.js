import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mosimosi from '@/components/Mosimosi'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mosimosi',
      name: 'Mosimosi',
      component: Mosimosi
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    }
  ]
});