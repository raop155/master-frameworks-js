import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';

import LastArticles from './components/LastArticles.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import ErrorPage from './components/ErrorPage.vue';
import MiComponente from './components/MiComponente.vue';
import Peliculas from './components/Peliculas.vue';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment, { moment });

const routes = [
  { path: '/', component: LastArticles },
  { path: '/home', component: LastArticles },
  { path: '/blog', component: Blog },
  { path: '/formulario', component: Formulario },
  { path: '/pagina/:id?', name: 'pagina', component: Pagina },
  { path: '/buscador/:searchString', component: Search },
  { path: '/redirect/:searchString', component: Redirect },
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
