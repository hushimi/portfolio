import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/_root.css'
import router from './router'
import { FontAwesome } from '@/plugins/FontAwesome'
import Vue3StarRatings from 'vue3-star-ratings'

createApp(App)
	.use(router)
	.component('fa', FontAwesome)
	.component('vue3-star-ratings', Vue3StarRatings)
	.mount('#app')
