(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({favorite:"favorite",video:"video"}[t]||t)+"."+{favorite:"c3e92206",video:"25d020d1"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:["fas","home"]}})],1),t._v(" | "),n("router-link",{attrs:{to:"/favorite"}},[n("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1)],1),n("router-view")],1)])},a=[],i=n("2877"),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"flex"},t._l(t.videos[0].slice(t.pageStart,t.pageStart+t.countOfPage),(function(e,r){return n("div",{key:r,staticClass:"card"},[n("div",{staticClass:"image-text"},[n("img",{attrs:{src:e.image},on:{click:function(n){return t.jump(e.id)}}}),n("p",{staticClass:"time"},[t._v(t._s(e.time))])]),n("div",[n("p",{staticClass:"title"},[t._v(t._s(e.title))]),n("p",{staticClass:"description"},[t._v(t._s(e.description))])]),e.Favorite||t.Favorites.includes(e.id)?n("button",{staticClass:"deleteFavoritebutton",on:{click:function(n){return t.dele(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1):n("button",{staticClass:"Favoritebutton",on:{click:function(n){return t.add(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1)])})),0),n("div",[n("ul",{staticClass:"button-flex"},[n("li",{on:{click:function(e){return e.preventDefault(),t.setPage(t.currPage-1)}}},[n("a",{attrs:{href:"#"}},[n("button",{attrs:{disabled:1===t.currPage}},[n("font-awesome-icon",{attrs:{icon:["fas","angle-double-left"]}})],1)])]),t._l(t.totalPage,(function(e,r){return n("li",{key:r,on:{click:function(n){return n.preventDefault(),t.setPage(e)}}},[n("a",{attrs:{href:"#"}},[n("button",{attrs:{disabled:t.currPage===e}},[t._v(t._s(e))])])])})),n("li",{on:{click:function(e){return e.preventDefault(),t.setPage(t.currPage+1)}}},[n("a",{attrs:{href:"#"}},[n("button",{attrs:{disabled:t.currPage===t.totalPage}},[n("font-awesome-icon",{attrs:{icon:["fas","angle-double-right"]}})],1)])])],2)])])},f=[],p=(n("99af"),n("d81d"),n("96cf"),n("1da1")),v={data:function(){return{countOfPage:12,currPage:1}},computed:{pageStart:function(){return(this.currPage-1)*this.countOfPage},totalPage:function(){return Math.ceil(this.videos[0].length/this.countOfPage)},Favorites:function(){return this.$store.getters.Favorites.map((function(t){return t.id}))},videos:function(){return this.$store.getters.Videos}},methods:{setPage:function(t){t<=0||t>this.totalPage||(this.currPage=t)},add:function(t){t.Favorite=!0,this.$store.commit("addVideo",t)},dele:function(t){t.Favorite=!1,this.$store.commit("deleVideohome",t)},jump:function(t){this.$router.push("/video/"+t)}},mounted:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("https://zerozeroone-video.herokuapp.com/video");case 3:return n=e.sent,e.next=6,t.axios.get("https://zerozeroone-video.herokuapp.com/video/"+n.data.response.nextPageToken);case 6:r=e.sent,o=n.data.response.items.concat(r.data.response.items),t.$store.commit("addVideos",o),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0),alert("發生錯誤");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},m=v,h=Object(i["a"])(m,d,f,!1,null,null,null),g=h.exports;r["a"].use(l["a"]);var b=[{path:"/",name:"Home",component:g,meta:{title:"首頁"}},{path:"/favorite",name:"Favorite",component:function(){return n.e("favorite").then(n.bind(null,"a09f"))},meta:{title:"收藏"}},{path:"/video/:id",name:"Video",component:function(){return n.e("video").then(n.bind(null,"81a8"))},meta:{title:"影片"}}],P=new l["a"]({routes:b});P.afterEach((function(t,e){document.title=t.meta.title}));var w=P,y=(n("c740"),n("a434"),n("2f62")),_=n("0e44"),k=n("c441");r["a"].use(y["a"]);var x=new y["a"].Store({state:{Videos:[],Favorites:[]},getters:{Favorites:function(t){return t.Favorites},Videos:function(t){return t.Videos}},mutations:{addVideos:function(t,e){t.Videos.splice(0,100),t.Videos.push(e.map((function(t){return{id:t.id,time:k.format(t.contentDetails.duration),image:t.snippet.thumbnails.medium.url,title:t.snippet.localized.title,description:t.snippet.channelTitle,Favorite:!1}})))},addVideo:function(t,e){t.Favorites.push(e)},deleVideo:function(t,e){t.Favorites.splice(e,1)},deleVideohome:function(t,e){var n=t.Favorites.findIndex((function(t,n){return t.id===e.id}));t.Favorites.splice(n,1)}},plugins:[Object(_["a"])()]}),O=n("bc3a"),j=n.n(O),F=n("a7fe"),C=n.n(F),V=n("ecee"),S=n("ad3d"),$=n("c074");n("df2d");V["c"].add($["a"],$["b"],$["c"],$["d"]),r["a"].component("font-awesome-icon",S["a"]),j.a.defaults.withCredentials=!0,r["a"].config.productionTip=!1,r["a"].use(C.a,j.a),new r["a"]({router:w,store:x,render:function(t){return t(u)}}).$mount("#app")},df2d:function(t,e,n){}});
//# sourceMappingURL=app.30586de5.js.map