(function(t){function e(e){for(var c,r,l=e[0],a=e[1],s=e[2],b=0,d=[];b<l.length;b++)r=l[b],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(c=!1)}c&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var c={},o={app:0},i=[];function r(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=c,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)r.d(n,c,function(e){return t[e]}.bind(null,c));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/portfolio/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"026b":function(t,e,n){"use strict";n("59de")},"2bea":function(t,e,n){},3664:function(t,e,n){"use strict";n("e421")},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.bb19e03d.png"},5509:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={id:"app"};function i(t,e,n,i,r,l){var a=Object(c["A"])("Navigation"),s=Object(c["A"])("router-view"),u=Object(c["A"])("Footer");return Object(c["t"])(),Object(c["f"])("div",o,[Object(c["j"])(a),Object(c["j"])(s),Object(c["j"])(u)])}n("9c7d");var r={class:"site-logo"},l=Object(c["i"])("0xF3"),a=Object(c["g"])("div",{class:"line1"},null,-1),s=Object(c["g"])("div",{class:"line2"},null,-1),u=Object(c["g"])("div",{class:"line3"},null,-1),b=[a,s,u],d={class:"nav-links"},v=Object(c["i"])("Home"),f=Object(c["i"])("About"),p=Object(c["i"])("Works");function g(t,e,n,o,i,a){var s=Object(c["A"])("router-link");return Object(c["t"])(),Object(c["f"])("nav",null,[Object(c["g"])("div",r,[Object(c["j"])(s,{to:"/",class:"neontext font-bold text-xl pl-3"},{default:Object(c["F"])((function(){return[l]})),_:1})]),Object(c["g"])("div",{class:"hamburger z-40",onClick:e[0]||(e[0]=function(){return t.toggle&&t.toggle.apply(t,arguments)})},b),Object(c["g"])("ul",d,[Object(c["j"])(s,{to:"/",onClick:t.removeClass},{default:Object(c["F"])((function(){return[v]})),_:1},8,["onClick"]),Object(c["j"])(s,{to:"/about",onClick:t.removeClass},{default:Object(c["F"])((function(){return[f]})),_:1},8,["onClick"]),Object(c["j"])(s,{to:"/works",onClick:t.removeClass},{default:Object(c["F"])((function(){return[p]})),_:1},8,["onClick"])])])}n("159b");var j=Object(c["k"])({setup:function(){var t=function(){var t=document.querySelector(".hamburger"),e=document.querySelector(".nav-links"),c=document.querySelectorAll(".nav-links li"),o=document.body;t.classList.toggle("toggle"),e.classList.toggle("open"),e.classList.toggle("nav-appear"),c.forEach((function(t){t.classList.toggle("fade")})),o.classList.toggle("stop-scrolling"),o.classList.contains("stop-scrolling")?document.addEventListener("touchmove",n,{passive:!1}):document.removeEventListener("touchmove",n,{passive:!1})},e=function(){var t=document.querySelector(".hamburger"),e=document.querySelector(".nav-links"),c=document.querySelectorAll(".nav-links li"),o=document.body;t.classList.remove("toggle"),e.classList.remove("open"),e.classList.remove("nav-appear"),c.forEach((function(t){t.classList.remove("fade")})),o.classList.remove("stop-scrolling"),document.removeEventListener("touchmove",n,{passive:!1})},n=function(t){t.preventDefault()};return{toggle:t,removeClass:e}}}),O=n("6b0d"),m=n.n(O);const h=m()(j,[["render",g]]);var k=h,w=Object(c["h"])('<div class="text-white flex flex-col h-full" data-v-440b3e27><div class="mt-3" data-v-440b3e27><a href="https://github.com/hushimi/portfolio" data-v-440b3e27><i class="devicon-github-original-wordmark github" data-v-440b3e27></i></a></div><div class="copyright text-xs mb-1" data-v-440b3e27><small data-v-440b3e27>© 2022 Kosuke Fushimi</small></div></div>',1),y=[w];function x(t,e,n,o,i,r){return Object(c["t"])(),Object(c["f"])("footer",null,y)}var S=Object(c["k"])({setup:function(){}});n("026b");const C=m()(S,[["render",x],["__scopeId","data-v-440b3e27"]]);var L=C,A=Object(c["k"])({components:{Navigation:k,Footer:L},setup:function(){}});n("d17f");const _=m()(A,[["render",i]]);var F=_,P=(n("5509"),n("6c02")),q=(n("a4d3"),n("e01a"),n("4ffd")),V=n.n(q),E=function(t){return Object(c["w"])("data-v-aa3a8c80"),t=t(),Object(c["u"])(),t},M={id:"home"},I={class:"header"},z={class:"w-11/12 h-11/12 message glass two-c-six-r text-lg md:text-2xl"},B=E((function(){return Object(c["g"])("div",{class:"m-auto two-c-merge row-span-2 md:row-span-3"},[Object(c["g"])("img",{src:V.a,class:"m-auto h-4/5 w-auto"})],-1)})),D=E((function(){return Object(c["g"])("div",{class:"h-auto table m-auto two-r-merge"},[Object(c["g"])("div",{class:"table-cell align-middle text-left"},[Object(c["g"])("p",{class:"break-words font-bold"},[Object(c["i"])(" Hi, I'm "),Object(c["g"])("span",null,"Kosuke")]),Object(c["g"])("p",{class:"break-words font-bold"}," self taught programmer ")])],-1)})),H={class:"t-shift h-auto m-auto two-r-merge"},K=E((function(){return Object(c["g"])("p",{class:"t-shift_title text-2xl"},"My Skills",-1)})),N={class:"t-shift_container"},R={class:"t-shift_container_list m-auto"},T=E((function(){return Object(c["g"])("div",{class:"w-3/5 mx-auto mt-1 skill-header"},[Object(c["g"])("h1",null,"SKILL DETAIL")],-1)})),W={class:"skill-container"},J=["onClick"],U={class:"flex justify-start items-center mx-auto skill-title"},Q={class:"w-full mt-3"},Y={class:"accordion mx-auto"},$={class:"title-w-icon"},G={class:"mr-2"},X={class:"whitespace-pre-line text-sm"};function Z(t,e,n,o,i,r){var l=Object(c["A"])("fa"),a=Object(c["A"])("vue3StarRatings");return Object(c["t"])(),Object(c["f"])("div",M,[Object(c["g"])("div",I,[Object(c["g"])("div",z,[B,D,Object(c["g"])("div",H,[K,Object(c["g"])("div",N,[Object(c["g"])("ul",R,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(t.skillArr,(function(t,e){return Object(c["t"])(),Object(c["f"])("li",{class:"t-shift_container_list_item",key:e},Object(c["C"])(t["category"]),1)})),128))])])])])]),T,Object(c["g"])("div",W,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(t.skillArr,(function(e,n){return Object(c["t"])(),Object(c["f"])("div",{class:Object(c["p"])(["text-left mt-4 skill-cat",{active:e["visible"]}]),key:n,onClick:function(e){return t.toggleShow(n)}},[Object(c["g"])("div",U,[Object(c["g"])("p",Q,Object(c["C"])(e["category"]),1),Object(c["j"])(l,{icon:"chevron-down",class:"fa-icon arrow"})]),Object(c["g"])("div",Y,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(e["skills"],(function(e,o){return Object(c["t"])(),Object(c["f"])("div",{class:"mx-auto mt-3 skill-box",key:o},[Object(c["g"])("div",$,[Object(c["g"])("div",G,[Object(c["g"])("i",{class:Object(c["p"])(["devicon",t.getClass(n,o)])},null,2)]),Object(c["g"])("p",null,Object(c["C"])(e["title"]),1)]),Object(c["j"])(a,{modelValue:e["rating"],"onUpdate:modelValue":function(t){return e["rating"]=t},starColor:"#f396ff",showControl:!1,disableClick:!0,starSize:"18"},null,8,["modelValue","onUpdate:modelValue"]),Object(c["g"])("p",X,Object(c["C"])(e["description"]),1)])})),128))])],10,J)})),128))])])}var tt=n("12f7"),et=function(){var t=Object(c["y"])([{category:"Front-end",visible:!1,skills:[{title:"Vuejs",icon:"devicon-vuejs-plain",rating:4.5,description:"Vuejsをフロントエンド、Laravelをバックエンドとしたレスポンシブページ開発を経験。"},{title:"React",icon:"devicon-react-original colored",rating:2,description:"Youtube(freeCodeCamp)のチュートリアル動画で学習中。"},{title:"Electron",icon:"devicon-electron-original colored",rating:3.5,description:"自分用のダッシュボードを開発。Vue3を併用。"}]},{category:"Back-end",visible:!1,skills:[{title:"Laravel",icon:"devicon-laravel-plain colored",rating:4,description:"LaravelでのAPI開発、Laravelを用いたShopifyアプリの開発を経験。"},{title:"Postgres,MySQL,Sqlite",icon:"devicon-postgresql-plain colored",rating:3,description:"Linuxサーバへの導入・テーブル設計等も経験。"}]},{category:"Mobile app",visible:!1,skills:[{title:"Flutter",icon:"devicon-flutter-plain colored",rating:3.5,description:"iOS,Android向けアプリ開発～申請までを経験。\n開発・ステージング・本番環境の設定や、Firebaseを用いたプッシュ通知機能作成も可能。"}]},{category:"Server admin",visible:!1,skills:[{title:"Linux",icon:"devicon-linux-plain",rating:4,description:"基本的なコマンドは問題なく使用可能。DB、WEBサーバ環境の構築やバッジ処理の作成などを経験。"},{title:"Apache",icon:"devicon-apache-plain colored",rating:2.5,description:"AliasやVirtual host作成など基本的な設定が可能。"},{title:"Vim",icon:"devicon-vim-plain colored",rating:4.5,description:"Configファイルの編集や簡易的なスクリプトを書く際に使用。お気に入りのカラーはMolokai。"},{title:"Shell script",icon:"devicon-bash-plain",rating:2.5,description:"簡易的なスクリプトを作成可能。"}]}]);return{skillArr:t}},nt=Object(c["k"])({components:{vue3StarRatings:tt["a"]},setup:function(){var t=et(),e=t.skillArr,n=function(t,n){return e.value[t]["skills"][n]["icon"]},c=function(t){e.value[t]["visible"]=!e.value[t]["visible"]};return{skillArr:e,getClass:n,toggleShow:c}}});n("3664");const ct=m()(nt,[["render",Z],["__scopeId","data-v-aa3a8c80"]]);var ot=ct,it={id:"about"};function rt(t,e,n,o,i,r){return Object(c["t"])(),Object(c["f"])("div",it," About ")}var lt=Object(c["k"])({setup:function(){}});const at=m()(lt,[["render",rt]]);var st=at,ut={id:"works"},bt=Object(c["g"])("div",{class:"row"},[Object(c["g"])("div",{class:"left"}," left "),Object(c["g"])("div",{class:"right"}," right ")],-1),dt=[bt];function vt(t,e,n,o,i,r){return Object(c["t"])(),Object(c["f"])("div",ut,dt)}var ft=Object(c["k"])({setup:function(){}});const pt=m()(ft,[["render",vt]]);var gt=pt,jt=[{path:"/",name:"Home",component:ot},{path:"/about",name:"About",component:st},{path:"/works",name:"Works",component:gt}],Ot=Object(P["a"])({history:Object(P["b"])("/portfolio"),routes:jt}),mt=Ot,ht=n("ecee"),kt=n("c074"),wt=n("f2d1"),yt=(n("99af"),["viewBox"]),xt=["d"];function St(t,e,n,o,i,r){return Object(c["t"])(),Object(c["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:Object(c["p"])(t.$props.class),viewBox:"0 0 ".concat(t.width," ").concat(t.height)},[Object(c["g"])("path",{fill:"currentColor",d:t.svgPath},null,8,xt)],10,yt)}var Ct=Object(c["k"])({name:"FontAwesome",props:{icon:{type:String,required:!0},type:{type:String,default:"fas",required:!1},class:String},setup:function(t){var e=Object(c["b"])((function(){return Object(ht["a"])({prefix:t.type,iconName:t.icon})})),n=Object(c["b"])((function(){return e.value.icon[0]})),o=Object(c["b"])((function(){return e.value.icon[1]})),i=Object(c["b"])((function(){return e.value.icon[4]}));return{width:n,height:o,svgPath:i}}});const Lt=m()(Ct,[["render",St]]);var At=Lt;ht["b"].add(kt["a"],wt["a"]),Object(c["c"])(F).use(mt).component("fa",At).component("vue3-star-ratings",tt["a"]).mount("#app")},"59de":function(t,e,n){},d17f:function(t,e,n){"use strict";n("2bea")},e421:function(t,e,n){}});
//# sourceMappingURL=app.04d5925a.js.map