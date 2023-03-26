import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router/index"

import {
    Menu,
    List,
    Drawer,
    Button,
    message
} from 'ant-design-vue';
import './static/fontawesome/css/all.min.css';

import 'ant-design-vue/dist/antd.css';

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

import './assets/main.css'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Menu);
app.use(List);
app.use(Button);
app.use(Drawer);
app.mount('#app');
app.config.globalProperties.$message = message;
