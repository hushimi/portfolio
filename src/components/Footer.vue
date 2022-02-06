<template>
    <footer>
        <div class="text-white flex flex-col h-full">
            <div class="mt-3">
                <a href="https://github.com/hushimi/portfolio">
                    <i class="devicon-github-original-wordmark github"></i>
                </a>
            </div>
            <div class="copyright text-xs mb-1">
                <small>© 2022 Kosuke Fushimi</small>
            </div>
        </div>
    </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {

	},
})
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 80px;
  margin-top: auto;
  background-color: #2f2e33;
}

.github {
    font-size: 2rem;
}

.copyright {
    margin-top: auto;
}
</style>
