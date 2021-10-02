<template>
    <nav>
        <div class="site-logo">
            <a class="neontext pulsate">0xF3</a>
        </div>

        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/practice">Practice</router-link>
        </ul>
    </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
})
</script>


<style lang="scss">
@import '@/assets/styles/_navBar.scss';
</style>