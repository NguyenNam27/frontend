import { createRouter, createWebHistory} from "vue-router";
import admin from "./admin.js";
import auth from "./auth.js";

const routes =[...admin,...auth];

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router


// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
// import Register from '@/components/Register.vue'
// import Login from '@/components/Login.vue'
// Vue.use(Router)

// export default new Router({
//     routes: [

//     ]
// })
