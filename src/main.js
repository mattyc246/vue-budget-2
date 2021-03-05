import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { auth } from "./utils/firebase"
import wb from "./registerServiceWorker";

Vue.prototype.$workbox = wb;

Vue.config.productionTip = false

let app;

auth.onAuthStateChanged((user) => {
  if(!app){
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }

  if(user){
    store.dispatch('User/fetchUserProfile', user)
    store.dispatch('Account/fetchUserAccounts', user)
  }
})

