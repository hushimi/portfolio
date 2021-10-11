<template>
    <div id="practice">
        <div class="row">
            <div class="left">
                <Facebook />
            </div>

            <div class="right">
                right
                <fa icon="clock" />
                <fa icon="amazon" type="fab" />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

import Facebook from '@/components/Facebook.vue';

export default defineComponent({
    components: {
        Facebook
    },
    setup() {

    },
})
</script>
