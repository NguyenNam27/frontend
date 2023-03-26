const auth = [
        {
            path: '/register',
            name: 'Register',
            component: ()=>import("../layouts/Register.vue")
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import("../layouts/Login.vue")
        },

];
export default auth
