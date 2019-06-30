import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
import Getstart from '../components/Getstart.vue'
import Api from '../components/Api.vue'
import About from '../components/About.vue'
import Signin from '../components/Signin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/hot/', //加上这一行
  routes: [
    {
        name:'root',
        path:'/',
        components:{
          main:PostList
        }
      },
      {
        name:'post_content',
        path:'/topic/:id&author=:name',
        components:{
          main:Article,
          slidebar:SlideBar
        }
      },
      {
        name:'user_info',
        path:'/userinfo/:name',
        components:{
          main:UserInfo
        }
      },
      {
      name:'getstart',
      path:'/getstart/',
      components:{
        main:Getstart
      }
    },
    {
      name:'api',
      path:'/api/',
      components:{
        main:Api
      }
    },
    {
      name:'about',
      path:'/about/',
      components:{
        main:About
      }
    },
    {
      name:'signin',
      path:'/signin/',
      components:{
        main:Signin
      }
    }
  ]
})
