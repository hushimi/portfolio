<template>
    <div id="app">
        <Navigation />
        <router-view/>
        <Footer />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import 'devicon'
import Navigation from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
	components: {
		Navigation, Footer
	},
	setup() {

	},
})
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $primary;

        display: flex;
        flex-direction: column;
    }
</style>
