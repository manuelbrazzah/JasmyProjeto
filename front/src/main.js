import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './stores'
import router  from './routes'
import * as HeroIcons from 
"@heroicons/vue/24/solid"
import * as LucideIcons from 'lucide-vue-next'


 const app =  createApp(App)

app.use(store)
app.use(router)

Object.entries(HeroIcons).forEach(([name,
    component])=> {
        app.component(name,component)
    })

app.mount('#app')
