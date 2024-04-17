// import './assets/main.css'
import './input.css'
import './output.css'
import 'tailwindcss/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import OrganiChart from 'vue-org-tree'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'



const app = createApp(App)
app.component('organi-chart', OrganiChart)

app.use(router)
app.use(store)
app.use(PrimeVue)

app.mount('#app')
