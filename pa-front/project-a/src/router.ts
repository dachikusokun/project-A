import {createRouter, createWebHistory} from 'vue-router';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue'
const routes = [
    {path: '/', name: 'Login', component: Login},
    {path: '/sign_up', name: 'SignUp', component: SignUp},

]
const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router;