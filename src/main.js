

// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')




//#
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Data from './views/Data.vue';
import Detail from './views/Detail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Data },
    { path: '/listbusiness', component: Data },
    { path: '/detail', component: Detail }
    // Add more routes here if needed
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
