import { createApp } from 'vue'
import routers from './routes'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


import './assets/scss/main.scss'

const app = createApp(App)

app.use(routers)

app.mount('#app')
