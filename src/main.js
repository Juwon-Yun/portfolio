import { createApp } from 'vue'
import App from './App.vue'
import router from '../router.js'
import store from '../store/store.js'
import axios from 'axios'
import vueScrollTo from 'vue-scrollto';
// vue create projectName
// npm install vue-router@next
// npm install vuex@next --save
// npm install axios

axios.defaults.baseURL = 'http://localhost:8885'

const app = createApp(App)
app.config.globalProperties.axios = axios
app.use(store).use(router).use(vueScrollTo).mount('#app')
