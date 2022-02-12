<template>
    <div id="works">
        <div class="row">
            <div class="left">
                left
            </div>

            <div class="right">
                right
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
	setup() {
		onMounted(() => {
			window.scrollTo(0, 0)
		})

	},
})
</script>
