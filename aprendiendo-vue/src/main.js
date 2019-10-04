import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import LastArticles from './components/LastArticles.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import ErrorPage from './components/ErrorPage.vue';
import MiComponente from './components/MiComponente.vue';
import Peliculas from './components/Peliculas.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    { path: '/', component: LastArticles },
    { path: '/home', component: LastArticles },
    { path: '/blog', component: Blog },
    { path: '/formulario', component: Formulario },
    { path: '/pagina/:id?', name: 'pagina', component: Pagina },
    { path: '/pagina-2', component: MiComponente },
    { path: '/peliculas', name: 'peliculas', component: Peliculas },
    { path: '*', component: ErrorPage }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
