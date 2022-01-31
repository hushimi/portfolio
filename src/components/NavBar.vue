<template>
    <nav>
        <div class="site-logo">
            <router-link to="/" class="neontext font-bold text-xl pl-3">0xF3</router-link>
        </div>

        <div class="hamburger z-40" @click="toggle">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <router-link to="/" @click="removeClass">Home</router-link>
            <router-link to="/about" @click="removeClass">About</router-link>
            <router-link to="/works" @click="removeClass">Works</router-link>
        </ul>
    </nav>
</template>

<script>
// ref = primitive, reactive = object
import { defineComponent} from 'vue'

export default defineComponent({
	setup() {

		const toggle = () => {
			const hamburger = document.querySelector('.hamburger')
			const navLinks = document.querySelector('.nav-links')
			const links = document.querySelectorAll('.nav-links li')
			const body = document.body
			hamburger.classList.toggle('toggle')
			navLinks.classList.toggle('open')
			navLinks.classList.toggle('nav-appear')

			links.forEach(link => {
				link.classList.toggle('fade')
			})

			// scroll禁止
			body.classList.toggle('stop-scrolling')
			if (body.classList.contains('stop-scrolling')) {
				document.addEventListener('touchmove', handleTouchMove, {passive: false})
			} else {
				document.removeEventListener('touchmove', handleTouchMove, {passive: false})
			}
		}

		const removeClass = () => {
			const hamburger = document.querySelector('.hamburger')
			const navLinks = document.querySelector('.nav-links')
			const links = document.querySelectorAll('.nav-links li')
			const body = document.body
			hamburger.classList.remove('toggle')
			navLinks.classList.remove('open')
			navLinks.classList.remove('nav-appear')

			links.forEach(link => {
				link.classList.remove('fade')
			})

			// scroll禁止
			body.classList.remove('stop-scrolling')
			document.removeEventListener('touchmove', handleTouchMove, {passive: false})
		}

		const handleTouchMove = (event) => {
			event.preventDefault()
		}

		return {
			// variable

			// Function
			toggle, removeClass
		}
	},
})
</script>
