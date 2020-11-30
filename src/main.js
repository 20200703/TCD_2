import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入iview组件
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
//引入axios组件
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(VueAxios, axios)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')