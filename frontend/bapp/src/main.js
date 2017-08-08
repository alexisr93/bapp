// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import '../semantic/dist/semantic.min.css'
import LoginForm from './components/LoginForm.vue'
import DashboardAdmin from './components/DashboardAdmin.vue'
import IncidentForm from './components/IncidentForm.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: DashboardAdmin},
  {path: '/newincident', component: IncidentForm},
  {path: '/logout', component: LoginForm}

]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
