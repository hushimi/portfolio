<template>
  <div id="nav">
      <Navigation />
  </div>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }
</style>
