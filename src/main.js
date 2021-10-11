import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/_root.css';
import router from './router';
import { FontAwesome } from '@/plugins/FontAwesome';


createApp(App)
    .use(router)
    .component('fa', FontAwesome)
    .mount('#app')
