(function(t){function e(e){for(var c,i,a=e[0],l=e[1],s=e[2],b=0,d=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(c=!1)}c&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},o={app:0},r=[];function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2bea":function(t,e,n){},4876:function(t,e,n){"use strict";n("fa7f")},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.bb19e03d.png"},5509:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={id:"app"};function r(t,e,n,r,i,a){var l=Object(c["B"])("Navigation"),s=Object(c["B"])("router-view"),u=Object(c["B"])("Footer");return Object(c["t"])(),Object(c["f"])("div",o,[Object(c["j"])(l),Object(c["j"])(s),Object(c["j"])(u)])}n("9c7d");var i={class:"site-logo"},a=Object(c["i"])("0xF3"),l=Object(c["g"])("div",{class:"line1"},null,-1),s=Object(c["g"])("div",{class:"line2"},null,-1),u=Object(c["g"])("div",{class:"line3"},null,-1),b=[l,s,u],d={class:"nav-links"},f=Object(c["i"])("Home"),v=Object(c["i"])("About"),p=Object(c["i"])("Works");function g(t,e,n,o,r,l){var s=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["f"])("nav",null,[Object(c["g"])("div",i,[Object(c["j"])(s,{to:"/",class:"neontext font-bold text-xl pl-3"},{default:Object(c["G"])((function(){return[a]})),_:1})]),Object(c["g"])("div",{class:"hamburger z-40",onClick:e[0]||(e[0]=function(){return t.toggle&&t.toggle.apply(t,arguments)})},b),Object(c["g"])("ul",d,[Object(c["j"])(s,{to:"/",onClick:t.removeClass},{default:Object(c["G"])((function(){return[f]})),_:1},8,["onClick"]),Object(c["j"])(s,{to:"/about",onClick:t.removeClass},{default:Object(c["G"])((function(){return[v]})),_:1},8,["onClick"]),Object(c["j"])(s,{to:"/works",onClick:t.removeClass},{default:Object(c["G"])((function(){return[p]})),_:1},8,["onClick"])])])}n("159b");var j=Object(c["k"])({setup:function(){var t=function(){var t=document.querySelector(".hamburger"),e=document.querySelector(".nav-links"),c=document.querySelectorAll(".nav-links li"),o=document.body;t.classList.toggle("toggle"),e.classList.toggle("open"),e.classList.toggle("nav-appear"),c.forEach((function(t){t.classList.toggle("fade")})),o.classList.toggle("stop-scrolling"),o.classList.contains("stop-scrolling")?document.addEventListener("touchmove",n,{passive:!1}):document.removeEventListener("touchmove",n,{passive:!1})},e=function(){var t=document.querySelector(".hamburger"),e=document.querySelector(".nav-links"),c=document.querySelectorAll(".nav-links li"),o=document.body;t.classList.remove("toggle"),e.classList.remove("open"),e.classList.remove("nav-appear"),c.forEach((function(t){t.classList.remove("fade")})),o.classList.remove("stop-scrolling"),document.removeEventListener("touchmove",n,{passive:!1})},n=function(t){t.preventDefault()};return{toggle:t,removeClass:e}}}),O=n("6b0d"),m=n.n(O);const h=m()(j,[["render",g]]);var k=h,y=Object(c["h"])('<div class="text-white flex flex-col h-full" data-v-0191a2ba><div class="mt-3" data-v-0191a2ba><a href="https://github.com/hushimi/portfolio" data-v-0191a2ba><i class="devicon-github-original-wordmark github" data-v-0191a2ba></i></a></div><div class="copyright text-xs mb-1" data-v-0191a2ba><small data-v-0191a2ba>© 2022 Kosuke Fushimi</small></div></div>',1),w=[y];function x(t,e,n,o,r,i){return Object(c["t"])(),Object(c["f"])("footer",null,w)}var L=Object(c["k"])({setup:function(){}});n("cbfd");const S=m()(L,[["render",x],["__scopeId","data-v-0191a2ba"]]);var _=S,C=Object(c["k"])({components:{Navigation:k,Footer:_},setup:function(){}});n("d17f");const A=m()(C,[["render",r]]);var P=A,q=(n("5509"),n("6c02")),B=(n("a4d3"),n("e01a"),n("4ffd")),V=n.n(B),E=function(t){return Object(c["w"])("data-v-cafaa1a6"),t=t(),Object(c["u"])(),t},F={id:"home"},M={class:"header"},D={class:"w-11/12 h-11/12 message glass two-c-six-r text-lg md:text-2xl"},I=E((function(){return Object(c["g"])("div",{class:"m-auto two-c-merge row-span-2 md:row-span-3"},[Object(c["g"])("img",{src:V.a,class:"m-auto h-full w-auto"})],-1)})),z=E((function(){return Object(c["g"])("div",{class:"h-auto table m-auto two-r-merge"},[Object(c["g"])("div",{class:"table-cell align-middle text-left"},[Object(c["g"])("p",{class:"break-words font-bold"},[Object(c["i"])(" Hi, I'm "),Object(c["g"])("span",null,"Kosuke")]),Object(c["g"])("p",{class:"break-words font-bold"}," self taught programmer ")])],-1)})),G={class:"t-shift h-auto m-auto two-r-merge"},H=E((function(){return Object(c["g"])("p",{class:"t-shift_title text-3xl"},"My Skills",-1)})),K={class:"t-shift_container"},N={class:"t-shift_container_list m-auto"},R=E((function(){return Object(c["g"])("div",{class:"w-3/5 mx-auto mt-1 skill-header"},[Object(c["g"])("h1",null,"SKILL DETAIL")],-1)})),T={class:"skill-container"},W={class:"skill-title w-4/5 mx-auto mt-3"},J={class:"title-w-icon"},U={class:"mr-2"},Q={class:"whitespace-pre-line text-sm"};function Y(t,e,n,o,r,i){var a=Object(c["B"])("vue3starRatings");return Object(c["t"])(),Object(c["f"])("div",F,[Object(c["g"])("div",M,[Object(c["g"])("div",D,[I,z,Object(c["g"])("div",G,[H,Object(c["g"])("div",K,[Object(c["g"])("ul",N,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(t.skillArr,(function(t,e){return Object(c["t"])(),Object(c["f"])("li",{class:"t-shift_container_list_item",key:e},Object(c["D"])(t["category"]),1)})),128))])])])])]),R,Object(c["g"])("div",T,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(t.skillArr,(function(e,n){return Object(c["t"])(),Object(c["f"])("div",{class:"text-left mt-4 mx-auto",key:n},[Object(c["g"])("p",W,Object(c["D"])(e["category"]),1),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(e["skills"],(function(e,o){return Object(c["t"])(),Object(c["f"])("div",{class:"w-4/5 mx-auto mt-3 skill-box",key:o},[Object(c["g"])("div",J,[Object(c["g"])("div",U,[Object(c["g"])("i",{class:Object(c["p"])(["devicon",t.getClass(n,o)])},null,2)]),Object(c["g"])("p",null,Object(c["D"])(e["title"]),1)]),Object(c["j"])(a,{modelValue:e["rating"],"onUpdate:modelValue":function(t){return e["rating"]=t},starColor:"#f396ff",showControl:!1,disableClick:!0,starSize:"18"},null,8,["modelValue","onUpdate:modelValue"]),Object(c["g"])("p",Q,Object(c["D"])(e["description"]),1)])})),128))])})),128))])])}var $=n("12f7"),X=function(){var t=Object(c["z"])([{category:"Front-end",skills:[{title:"Vuejs",icon:"devicon-vuejs-plain",rating:4.5,description:"Vuejsをフロントエンド、Laravelをバックエンドとしたレスポンシブページ開発を経験。"},{title:"React",icon:"devicon-react-original colored",rating:2,description:"Youtube(freeCodeCamp)のチュートリアル動画で学習中。"},{title:"Electron",icon:"devicon-electron-original colored",rating:3.5,description:"自分用のダッシュボードを開発。Vue3を併用。"}]},{category:"Back-end",skills:[{title:"Laravel",icon:"devicon-laravel-plain colored",rating:4,description:"LaravelでのAPI開発、Laravelを用いたShopifyアプリの開発を経験。"},{title:"Postgres,MySQL,Sqlite",icon:"devicon-postgresql-plain colored",rating:3,description:"Linuxサーバへの導入・テーブル設計等も経験。"}]},{category:"Mobile app",skills:[{title:"Flutter",icon:"devicon-flutter-plain colored",rating:3.5,description:"iOS,Android向けアプリ開発～申請までを経験。\n開発・ステージング・本番環境の設定や、Firebaseを用いたプッシュ通知機能作成も可能。"}]},{category:"Server admin",skills:[{title:"Linux",icon:"devicon-linux-plain",rating:4,description:"基本的なコマンドは問題なく使用可能。DB、WEBサーバ環境の構築やバッジ処理の作成などを経験。"},{title:"Apache",icon:"devicon-apache-plain colored",rating:2.5,description:"AliasやVirtual host作成など基本的な設定が可能。"},{title:"Vim",icon:"devicon-vim-plain colored",rating:4.5,description:"Configファイルの編集や簡易的なスクリプトを書く際に使用。お気に入りのカラーはMolokai。"},{title:"Shell script",icon:"devicon-bash-plain",rating:2.5,description:"簡易的なスクリプトを作成可能。"}]}]);return{skillArr:Object(c["y"])(t)}},Z=Object(c["k"])({components:{vue3starRatings:$["a"]},setup:function(){var t=Object(c["z"])(4),e=X(),n=e.skillArr,o=function(t,e){return n.value[t]["skills"][e]["icon"]};return{rating:t,skillArr:n,getClass:o}}});n("4876");const tt=m()(Z,[["render",Y],["__scopeId","data-v-cafaa1a6"]]);var et=tt,nt={id:"about"};function ct(t,e,n,o,r,i){return Object(c["t"])(),Object(c["f"])("div",nt," About ")}var ot=Object(c["k"])({setup:function(){}});const rt=m()(ot,[["render",ct]]);var it=rt,at={id:"works"},lt=Object(c["g"])("div",{class:"row"},[Object(c["g"])("div",{class:"left"}," left "),Object(c["g"])("div",{class:"right"}," right ")],-1),st=[lt];function ut(t,e,n,o,r,i){return Object(c["t"])(),Object(c["f"])("div",at,st)}var bt=Object(c["k"])({setup:function(){}});const dt=m()(bt,[["render",ut]]);var ft=dt,vt=[{path:"/",name:"Home",component:et},{path:"/about",name:"About",component:it},{path:"/works",name:"Works",component:ft}],pt=Object(q["a"])({history:Object(q["b"])("home"),routes:vt}),gt=pt,jt=n("ecee"),Ot=n("c074"),mt=n("f2d1"),ht=(n("99af"),["viewBox"]),kt=["d"];function yt(t,e,n,o,r,i){return Object(c["t"])(),Object(c["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:Object(c["p"])(t.$props.class),viewBox:"0 0 ".concat(t.width," ").concat(t.height)},[Object(c["g"])("path",{fill:"currentColor",d:t.svgPath},null,8,kt)],10,ht)}var wt=Object(c["k"])({name:"FontAwesome",props:{icon:{type:String,required:!0},type:{type:String,default:"fas",required:!1},class:String},setup:function(t){var e=Object(c["b"])((function(){return Object(jt["a"])({prefix:t.type,iconName:t.icon})})),n=Object(c["b"])((function(){return e.value.icon[0]})),o=Object(c["b"])((function(){return e.value.icon[1]})),r=Object(c["b"])((function(){return e.value.icon[4]}));return{width:n,height:o,svgPath:r}}});const xt=m()(wt,[["render",yt]]);var Lt=xt;jt["b"].add(Ot["a"],mt["a"]),Object(c["c"])(P).use(gt).component("fa",Lt).component("vue3-star-ratings",$["a"]).mount("#app")},cbfd:function(t,e,n){"use strict";n("e828")},d17f:function(t,e,n){"use strict";n("2bea")},e828:function(t,e,n){},fa7f:function(t,e,n){}});
//# sourceMappingURL=app.dfa4b668.js.map