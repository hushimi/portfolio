<template>
    <div id="home">
        <div class="header">
            <div class="w-11/12 h-11/12 message glass two-cols">
                <!-- アイコンとメッセージ -->
                <div class="h-auto table">
                    <div class="table-cell align-middle m-auto text-center">
                        <img src="@/assets/img/logo.png" class="m-auto">
                        <p class="break-words font-bold">
                            I am <span>A</span> self taught programmer
                        </p>
                    </div>
                </div>

                <!-- スキルテキストアニメーション -->
                <div class="table">
                    <div class="table-cell align-middle m-auto text-center">
                        <p>Front End</p>
                        <p>Back End</p>
                        <p>App Development</p>
                        <p>Server Management</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <p>My Skills</p>
        </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
})
</script>