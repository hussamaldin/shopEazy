import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import Transaction from '../components/Transaction.vue'
import Login from '../components/Login.vue'
const routes = [
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/profile',
    name:'profile',
    component:Profile
  },
  {
    path:'/transaction',
    name:'transaction',
    component:Transaction
  },
  {
    path:'/',
    name:'login',
    component:Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
});

export default router;
