<template>
    <Navigation />
    <router-view/>
</template>

<script>
import { defineComponent } from 'vue'
import 'devicon'
import Navigation from '@/components/NavBar.vue'

export default defineComponent({
	components: {
		Navigation
	},
	setup() {

	},
})
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $primary;
    }
</style>
