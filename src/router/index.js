import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Works from '@/views/Works.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/works',
		name: 'Works',
		component: Works
	}
]

const router = createRouter({
	history: createWebHashHistory('home'),
	routes
})

export default router
