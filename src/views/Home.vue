<template>
    <div id="home">
        <div class="header">

            <div class="w-11/12 h-11/12 message glass two-c-six-r text-lg md:text-2xl">
                <!-- アイコン -->
                <div class="m-auto two-c-merge row-span-2 md:row-span-3">
                    <img src="@/assets/img/logo.png" class="m-auto h-full w-auto">
                </div>
                <!-- メッセージ -->
                <div class="h-auto table m-auto two-r-merge">
                    <div class="table-cell align-middle text-left">
                        <p class="break-words font-bold">
                            Hi, I'm <span>Kosuke</span>
                        </p>
                        <p class="break-words font-bold">
                            self taught programmer
                        </p>
                    </div>
                </div>
                <!-- スキルテキストアニメーション -->
                <div class="t-shift h-auto m-auto two-r-merge">
                    <p class="t-shift_title text-3xl">My Skills</p>
                    <div class="t-shift_container">
                        <ul class="t-shift_container_list m-auto">
                            <li class="t-shift_container_list_item"
                                v-for="(skill, index) of skills" :key="index">{{ skill }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="skill-container p-2 m-2">
            <!-- v-for -->
            <div class="text-left">

                <p class="skill-title w-4/5 mx-auto mt-3">Front-end</p>
                <div class="skill-box w-4/5 mx-auto">
                    <div class="title-w-icon">
                        <div class="mr-2">
                            <i class="devicon-vuejs-plain devicon"></i>
                        </div>
                        <p>Vuejs</p>
                    </div>
                    <vue3starRatings
                        v-model="rating"
                        :showControl="false"
                        :disableClick="true"
                        :starSize="'18'"/>
                    <p>Laravelをバックエンド、Vuejsをフロントエンドとしたレスポンシブページ開発経験</p>
                </div>

                <div class="skill-box w-4/5 mx-auto mt-3">
                    <div class="title-w-icon">
                        <div class="mr-2">
                            <i class="devicon-electron-original devicon"></i>
                        </div>
                        <p>Electron</p>
                    </div>
                    <vue3starRatings
                        v-model="rating"
                        :showControl="false"
                        :disableClick="true"
                        :starSize="'18'"/>
                    <p>自分用のダッシュボードを開発。Vue3を併用</p>
                </div>
            </div>

        </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import vue3starRatings from 'vue3-star-ratings'

export default defineComponent({
	components: {
		vue3starRatings
	},

	setup() {
		const rating = ref(4)
		const skills = ref(['Front-end', 'Back-end', 'Mobile app', 'Server admin'])

		return {
			// value
			rating, skills
			// function
		}
	},
})
</script>

<style lang="scss" scoped>
.vue3-star-ratings__wrapper {
    margin: 0;
    padding: 0;
}
::v-deep .stars {
    margin: 0;
}
</style>