<template>
    <div id="home">
        <div class="header">
            <div class="w-11/12 h-11/12 message glass two-cols">
                <!-- アイコンとメッセージ -->
                <div class="h-auto table m-auto">
                    <div class="table-cell align-middle">
                        <img src="@/assets/img/logo.png" class="m-auto">
                        <p class="break-words font-bold text-center">
                            I am <span>A</span> self taught programmer
                        </p>
                    </div>
                </div>

                <!-- スキルテキストアニメーション -->
                <div class="t-shift h-auto m-auto">
                    <div class="t-shift_container">
                        <p class="t-shift_container_text">I do</p>
                        <ul class="t-shift_container_list">
                            <li class="t-shift_container_list_item">Front End</li>
                            <li class="t-shift_container_list_item">Back End</li>
                            <li class="t-shift_container_list_item">Mobile App</li>
                            <li class="t-shift_container_list_item">Server admin</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="content">
            <p>My Skills</p>
        </div> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
})
</script>