import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Index from '@/views/Index'
import Homepage from "../views/Homepage";
import FileIndex from "../views/fileviews/FileIndex";
import LibraryIndex from "../views/library/LibraryIndex";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register')
    },
    ,{
      path:'homepage',
      name:'Homepage',
      component:Homepage,
      redirect:'/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/fileIndex',
          name: 'FileIndex',
          component: FileIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/libraryIndex',
          name: 'LibraryIndex',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
