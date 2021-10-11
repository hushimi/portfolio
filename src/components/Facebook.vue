<template>
  <div class="fb-wrapper">
        <div id="fb-root"></div>
        <div
            id="fb-page"
            class="fb-page"
            data-href="https://www.facebook.com/facebook"
            data-tabs="timeline"
            data-width="250"
            data-height="450"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
        >
            <blockquote
                cite="https://www.facebook.com/facebook"
                class="fb-xfbml-parse-ignore"
            >
                <a href="https://www.facebook.com/facebook">Facebook</a>
            </blockquote>
        </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import {useRouter} from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const isReload = ref(false);

        onMounted(() => {
            if (!document.getElementById('facebook-jssdk')) {
                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v12.0';
                    js.setAttribute('async', '');
                    js.setAttribute('defer', '');
                    js.setAttribute('crossorigin', 'anonymous');
                    js.setAttribute('nonce', 'UlciYVCd');
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            } else if (!isReload.value) {
                isReload.value = true;
                router.go({path: router.currentRoute.path, force: true});
            }
        })
    },
})
</script>
