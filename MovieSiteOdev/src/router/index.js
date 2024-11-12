
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory} from 'vue-router'



const routes= [
    {path:'/',name:'Home',component:Home},
    {
        path: '/MovieShow/:id/:slug', 
        name: 'Movie.show', 
        component: () => import('@/views/MovieShow.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) }),
        children: [
          {
            path: ':castSlug',
            name: 'cast.show',
            component: () => import('@/views/CastShow.vue'),
            props: route=> ({...route.params, id: parseInt(route.params.id)})
          }
        ]
      }
      
]

const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(to,from,savedPosition){
      return savedPosition || {top:0}
  }
})

export default router