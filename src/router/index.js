import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Students from '@/views/Students.vue'
import Student from '@/components/Student.vue'
import StudentForm from '@/components/StudentForm.vue'
import DataManager from '@/storage/StudentDataStorage.js'
import AddNews from '@/components/AddNews.vue'
import ErrorPage from '@/views/ErrorPage.vue'
const dataManager = new DataManager();

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      keepAlive:true
    },
    children:[
      {
        path:'addNews',
        component:AddNews,
        name:'addNews',
        meta:{
          keepAlive:true
        }
      },
    ]
  },
 {
   path:'/about',
   name:'about',
   component:About
 },
  
 {
   path:'/students',
   component:Students,
   name:'students',
   children:[
     {
       path:':id',
       component:Student,
       name:'singleStudent',
       beforeEnter:(to,from,next)=>{
          const student = dataManager.getStudent(to.params.id)
        if(student){
          next()
        }else{
          next('/students')
        }

      },
       children:[
         {
           path:'edit',
           component:StudentForm,
           name:'editStudent'
         }
       ]
     },
     {
       path:'add',
       component:StudentForm,
       name:'addStudent'
     }
   ]
 },
  {
    path:'/:catchAll(.*)',
    component:ErrorPage,
    name:'error'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
