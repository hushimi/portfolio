<template>
    <div id="home">
        <div class="header">
            <div class="w-11/12 h-11/12 message glass two-c-six-r text-lg md:text-2xl">
                <!-- アイコン -->
                <div class="m-auto two-c-merge row-span-2 md:row-span-3">
                    <img src="@/assets/img/logo.png" class="m-auto h-4/5 w-auto">
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
                    <p class="t-shift_title text-2xl">My Skills</p>
                    <div class="t-shift_container">
                        <ul class="t-shift_container_list m-auto">
                            <li class="t-shift_container_list_item"
                                v-for="(skill, index) of skillArr" :key="index">
                                {{ skill['category'] }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-2/5 mx-auto mt-1 skill-header">
            <h1>SKILL DETAIL</h1>
        </div>
        <div class="skill-container">
            <!-- Category v-for -->
            <div class="text-left mt-4 skill-cat"
                v-for="(skillobj, catkey) of skillArr" :key="catkey"
                :class="{active: skillobj['visible']}"
                @click="toggleShow(catkey)">

                <!-- skill title -->
                <div class="flex justify-start items-center mx-auto skill-title">
                    <p class="w-full mt-3">{{ skillobj['category'] }}</p>
                    <fa icon="chevron-down" class="fa-icon arrow" />
                </div>

                <!-- Accordion Menu -->
                <div class="accordion mx-auto">
                    <!-- Skill v-for -->
                    <div class="mx-auto mt-3 skill-box"
                        v-for="(skill, skillkey) of skillobj['skills']" :key="skillkey">
                        <div class="title-w-icon">
                            <div class="mr-2">
                                <i class="devicon" :class="getClass(catkey, skillkey)"></i>
                            </div>
                            <p>{{ skill['title'] }}</p>
                        </div>
                        <vue3StarRatings
                            v-model="skill['rating']"
                            :starColor="'#f396ff'"
                            :showControl="false"
                            :disableClick="true"
                            :starSize="'18'"/>
                        <p class="whitespace-pre-line text-sm">{{ skill['description'] }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import vue3StarRatings from 'vue3-star-ratings'
import data from '@/components/functions/data'

export default defineComponent({
	components: {
		vue3StarRatings
	},

	setup() {
		const { skillArr } = data()

		/**
         * devicon class追加
         */
		const getClass = (catkey, skillkey) => {
			return skillArr.value[catkey]['skills'][skillkey]['icon']
		}

		/**
         * アコーディオンメニュークリック
         */
		const toggleShow = (catkey) => {
			skillArr.value[catkey]['visible'] = !skillArr.value[catkey]['visible']
		}

		return {
			// value
			skillArr,
			// function
			getClass, toggleShow
		}
	},
})
</script>

<style lang="scss" scoped>
:deep(.vue3-star-ratings__wrapper) {
    padding: 0 !important;
    margin: 0 !important;
    .stars {
        margin: 0;
    }
}
</style>