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
            <router-link to="/" @click="toggle">Home</router-link>
            <router-link to="/about" @click="toggle">About</router-link>
            <router-link to="/practice" @click="toggle">Practice</router-link>
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
            hamburger.classList.toggle('toggle')
            navLinks.classList.toggle('open')
            navLinks.classList.toggle('nav-appear')

            links.forEach(link => {
                link.classList.toggle('fade')
            })
        }

        return {toggle}
    },
})
</script>
