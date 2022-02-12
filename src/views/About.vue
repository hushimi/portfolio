<template>
  <div id="about" class="mb-16">
    <header class="header mb-3">
        <img src="@/assets/img/banner.png" class="banner">
        <h1 class="banner-title text-3xl font-bold w-full">ABOUT ME</h1>
    </header>

    <section class="fade-in mx-auto mt-24 w-4/5 md:w-3/5 text-left">
        <h2 class="text-lg md:text-2xl border-b-2">伏見 皓介 (Fushimi Kosuke)</h2>
        <p class="whitespace-pre-line mt-6 text-sm pl-3">
            宮城県仙台市在住のエンジニア。フロントエンド、バックエンド開発をメインに、Flutterによるモバイルアプリ開発も行う。<br><br>
            16歳から27歳まで自衛隊で勤務。自衛隊勤務時はIP電話サーバの管理、ネットワーク構築、アナログ・IP電話機の設置工事を担当。
            また、特技の英語を活かし、他国との共同訓練において英語での訓練調整なども経験。<br><br>
        </p>
    </section>

    <section class="fade-in mx-auto mt-24 w-4/5 md:w-3/5 text-left">
        <h2 class="text-lg md:text-2xl border-b-2">趣 味</h2>
        <div class="mt-6">
            <p class="text-sm pl-3 text-center">
                休日は出歩いていることが多い。<br>
                人見知りだが、いろんな人と話すのが好き。
            </p>
            <ul class="likes text-sm pl-3 mt-4 mx-auto w-full md:mt-0 md:w-3/5">
                <li>旅行</li>
                <li>タイ語、英語の勉強</li>
                <li>映画(特にアクション系とSF系)</li>
                <li>ChillなHipHop聴きながら散歩</li>
                <li>ライブやフェスに行くこと</li>
            </ul>
        </div>
    </section>

    <section class="fade-in history mx-auto mt-24 w-4/5 md:w-3/5 text-left">
        <h2 class="text-lg md:text-2xl border-b-2">略 歴</h2>
        <table>
            <tbody>
                <tr v-for="(history, index) of history" :key="index">
                    <th class="w-1/5 border-r-4 pr-3 text-right">
                        {{ history['year'] }}
                    </th>
                    <td class="pl-3">
                        <h4 class="text-lg whitespace-pre-line">
                            {{ history['title'] }}
                        </h4>
                        <p class="text-sm whitespace-pre-line">
                            {{ history['description'] }}
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import data from '@/components/functions/data'

export default defineComponent({
	setup() {
		const { history } = data()

		onMounted(() => {
			window.scrollTo(0, 0)

			setObserveAPI()
		})

		// -----------------------------------------------
		// スクロールイベント
		// -----------------------------------------------
		const observer = ref(null)
		/**
         * fade-inクラスにobserverAPI設定
         */
		const setObserveAPI = () => {
			const fadeIns = document.querySelectorAll('.fade-in')
			const options = {
				root: null,
				rootMargin: '0px 0px 0px 0px',
				threshold: 0.0
			}

			observer.value = new IntersectionObserver(whenIntersect, options)
			fadeIns.forEach(fadeIn => { observer.value.observe(fadeIn) })
		}

		/**
         * captionクラスがobserverと交差した際に実行
         * @param entries
         */
		const whenIntersect = (entries) => {
			entries.forEach(entry => {
				let target = entry.target
				if (entry.isIntersecting && !target.classList.contains('show')) {
					entry.target.classList.add('show')
				}
			})
		}

		return {
			history
		}
	},
})
</script>
