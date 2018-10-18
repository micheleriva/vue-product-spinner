(function(i){function r(r){for(var g,e,t=r[0],_=r[1],u=r[2],o=0,p=[];o<t.length;o++)e=t[o],n[e]&&p.push(n[e][0]),n[e]=0;for(g in _)Object.prototype.hasOwnProperty.call(_,g)&&(i[g]=_[g]);m&&m(r);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var i,r=0;r<s.length;r++){for(var a=s[r],g=!0,t=1;t<a.length;t++){var _=a[t];0!==n[_]&&(g=!1)}g&&(s.splice(r--,1),i=e(e.s=a[0]))}return i}var g={},n={app:0},s=[];function e(r){if(g[r])return g[r].exports;var a=g[r]={i:r,l:!1,exports:{}};return i[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=i,e.c=g,e.d=function(i,r,a){e.o(i,r)||Object.defineProperty(i,r,{enumerable:!0,get:a})},e.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},e.t=function(i,r){if(1&r&&(i=e(i)),8&r)return i;if(4&r&&"object"===typeof i&&i&&i.__esModule)return i;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),2&r&&"string"!=typeof i)for(var g in i)e.d(a,g,function(r){return i[r]}.bind(null,g));return a},e.n=function(i){var r=i&&i.__esModule?function(){return i["default"]}:function(){return i};return e.d(r,"a",r),r},e.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},e.p="/vue-product-spinner/";var t=window["webpackJsonp"]=window["webpackJsonp"]||[],_=t.push.bind(t);t.push=r,t=t.slice();for(var u=0;u<t.length;u++)r(t[u]);var m=_;s.push([0,"chunk-vendors"]),a()})({0:function(i,r,a){i.exports=a("56d7")},2856:function(i,r,a){},"56d7":function(i,r,a){"use strict";a.r(r);a("cadf"),a("551c"),a("097d");var g=a("2b0e"),n=function(){var i=this,r=i.$createElement,a=i._self._c||r;return a("div",{style:{backgroundColor:i.bgColor},attrs:{id:"app"}},[a("GitHubRibbon"),i.imagesAreReady?a("VueProductSpinner",{attrs:{imgs:i.images,showRange:!0,rangeClass:"custom-range"}}):a("div",{staticClass:"spinner-cont"},[a("Spinner")],1),a("div",{staticClass:"car-selector"},i._l(i.availableCars,function(r){return a("div",{staticClass:"car",on:{click:function(a){i.handleCarSelection(r)}}},[i._v(i._s(r))])})),a("div",{staticClass:"color-selection"},i._l(i.colors,function(r){return a("div",{staticClass:"color",style:{backgroundColor:r},on:{click:function(a){i.changeBgColor(r)}}})}))],1)},s=[],e=(a("ac6a"),a("456d"),function(){var i=this,r=i.$createElement,a=i._self._c||r;return a("div",{ref:"mainDiv",staticClass:"vue-product-spinner",attrs:{id:"VueProductSpinnerImgRef"},on:{touchstart:i.handleTouchStart,touchmove:i.handleTouchMove,tuochend:i.handleTouchEnd}},[a("img",{attrs:{src:i.currentImg,draggable:"false"},on:{mousedown:i.handleMouseDown,mouseup:i.handleMouseUp,mousemove:i.handleMouseMove}}),i.showRange?a("input",{class:i.rangeClass,attrs:{type:"range",min:"1",max:i.imgsNum,step:"1"},domProps:{value:i.currentIndex},on:{input:i.handleRange}}):i._e()])}),t=[],_={name:"VueProductSpinner",props:{imgs:Array,showRange:Boolean,rangeClass:String},data:function(){return{capture:{enabled:!1,start:0},drag:{x:0},bounds:{width:0},currentIndex:0,lastIndex:0}},mounted:function(){this.bounds.width=this.$refs.mainDiv.clientWidth},computed:{imgsNum:function(){return this.imgs.length},pixelPerFrame:function(){return Math.floor(this.bounds.width/(this.imgsNum/2))},currentImg:function(){return this.imgs[this.currentIndex]}},methods:{handleMouseDown:function(i){this.capture.enabled=!0,this.capture.start=i.x},handleMouseUp:function(){this.capture.enabled=!1,this.lastIndex=this.currentIndex},handleMouseMove:function(i){this.capture.enabled&&(this.drag.x=i.x,this.computeCurrentImage())},handleTouchStart:function(i){this.capture.enabled=!0,this.capture.start=i.x,this.computeCurrentImage()},handleTouchEnd:function(){this.capture.enabled=!1},handleTouchMove:function(i){this.capture.enabled&&(this.drag.x=i.touches[0].clientX)},computeCurrentImage:function(){var i=this.imgsNum,r=(Math.floor(this.bounds.width/(this.capture.start-this.drag.x)),Math.floor(i/(this.bounds.width/this.drag.x)));console.log(this.capture.start-this.drag.x),this.currentIndex=r>=52?51:r},handleRange:function(i){return this.currentIndex=i.target.value-1}}},u=_,m=(a("fe7f"),a("2877")),o=Object(m["a"])(u,e,t,!1,null,"a3953916",null);o.options.__file="VueProductSpinner.vue";var p=o.exports,d=function(){var i=this,r=i.$createElement,a=i._self._c||r;return a("div",[a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/micheleriva/vue-product-spinner","aria-label":"View source on GitHub"}},[a("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])])},h=[],l={name:"GitHubRibbon"},c=l,j=(a("9c6e"),Object(m["a"])(c,d,h,!1,null,null,null));j.options.__file="GitHubRibbon.vue";var f=j.exports,y=function(){var i=this,r=i.$createElement;i._self._c;return i._m(0)},v=[function(){var i=this,r=i.$createElement,a=i._self._c||r;return a("div",{staticClass:"lds-roller"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])}],b={name:"Spinner"},I=b,F=(a("f22a"),Object(m["a"])(I,y,v,!1,null,null,null));F.options.__file="Spinner.vue";var C=F.exports,k={honda:{colors:["#CED2D8","#A7B8CE","#A46C00","#319289","#A14C85","#3D4856","#303337"],imgs:["/imgs/honda/1.png","/imgs/honda/2.png","/imgs/honda/3.png","/imgs/honda/4.png","/imgs/honda/5.png","/imgs/honda/6.png","/imgs/honda/7.png","/imgs/honda/8.png","/imgs/honda/9.png","/imgs/honda/10.png","/imgs/honda/11.png","/imgs/honda/12.png","/imgs/honda/13.png","/imgs/honda/14.png","/imgs/honda/15.png","/imgs/honda/16.png","/imgs/honda/17.png","/imgs/honda/18.png","/imgs/honda/19.png","/imgs/honda/20.png","/imgs/honda/21.png","/imgs/honda/22.png","/imgs/honda/23.png","/imgs/honda/24.png","/imgs/honda/25.png","/imgs/honda/26.png","/imgs/honda/27.png","/imgs/honda/28.png","/imgs/honda/29.png","/imgs/honda/30.png","/imgs/honda/31.png","/imgs/honda/32.png","/imgs/honda/33.png","/imgs/honda/34.png","/imgs/honda/35.png","/imgs/honda/36.png","/imgs/honda/37.png","/imgs/honda/38.png","/imgs/honda/39.png","/imgs/honda/40.png","/imgs/honda/41.png","/imgs/honda/42.png","/imgs/honda/43.png","/imgs/honda/44.png","/imgs/honda/45.png","/imgs/honda/46.png","/imgs/honda/47.png","/imgs/honda/48.png","/imgs/honda/49.png","/imgs/honda/50.png","/imgs/honda/51.png"]},hyundai:{colors:["#b6b1af","#757472","#5dadb8","#fd7a4e"],imgs:["/imgs/hyundai/1.jpg","/imgs/hyundai/2.jpg","/imgs/hyundai/3.jpg","/imgs/hyundai/4.jpg","/imgs/hyundai/5.jpg","/imgs/hyundai/6.jpg","/imgs/hyundai/7.jpg","/imgs/hyundai/8.jpg","/imgs/hyundai/9.jpg","/imgs/hyundai/10.jpg","/imgs/hyundai/11.jpg","/imgs/hyundai/12.jpg","/imgs/hyundai/13.jpg","/imgs/hyundai/14.jpg","/imgs/hyundai/15.jpg","/imgs/hyundai/16.jpg","/imgs/hyundai/17.jpg","/imgs/hyundai/18.jpg","/imgs/hyundai/19.jpg","/imgs/hyundai/20.jpg","/imgs/hyundai/21.jpg","/imgs/hyundai/22.jpg","/imgs/hyundai/23.jpg","/imgs/hyundai/24.jpg","/imgs/hyundai/25.jpg","/imgs/hyundai/26.jpg","/imgs/hyundai/27.jpg","/imgs/hyundai/28.jpg","/imgs/hyundai/29.jpg","/imgs/hyundai/30.jpg","/imgs/hyundai/31.jpg","/imgs/hyundai/32.jpg","/imgs/hyundai/33.jpg","/imgs/hyundai/34.jpg","/imgs/hyundai/35.jpg","/imgs/hyundai/36.jpg","/imgs/hyundai/37.jpg","/imgs/hyundai/38.jpg","/imgs/hyundai/39.jpg","/imgs/hyundai/40.jpg","/imgs/hyundai/41.jpg","/imgs/hyundai/42.jpg","/imgs/hyundai/43.jpg","/imgs/hyundai/44.jpg","/imgs/hyundai/45.jpg","/imgs/hyundai/46.jpg","/imgs/hyundai/47.jpg","/imgs/hyundai/48.jpg","/imgs/hyundai/49.jpg","/imgs/hyundai/50.jpg","/imgs/hyundai/51.jpg","/imgs/hyundai/52.jpg","/imgs/hyundai/53.jpg","/imgs/hyundai/54.jpg","/imgs/hyundai/55.jpg","/imgs/hyundai/56.jpg","/imgs/hyundai/57.jpg","/imgs/hyundai/58.jpg","/imgs/hyundai/59.jpg","/imgs/hyundai/60.jpg","/imgs/hyundai/61.jpg","/imgs/hyundai/62.jpg","/imgs/hyundai/63.jpg","/imgs/hyundai/64.jpg","/imgs/hyundai/65.jpg","/imgs/hyundai/66.jpg","/imgs/hyundai/67.jpg","/imgs/hyundai/68.jpg","/imgs/hyundai/69.jpg","/imgs/hyundai/70.jpg","/imgs/hyundai/71.jpg","/imgs/hyundai/72.jpg"]},suzuki:{colors:["#FFF"],imgs:["/imgs/suzuki/img_0_0_1.jpg","/imgs/suzuki/img_0_0_2.jpg","/imgs/suzuki/img_0_0_3.jpg","/imgs/suzuki/img_0_0_4.jpg","/imgs/suzuki/img_0_0_5.jpg","/imgs/suzuki/img_0_0_6.jpg","/imgs/suzuki/img_0_0_7.jpg","/imgs/suzuki/img_0_0_8.jpg","/imgs/suzuki/img_0_0_9.jpg","/imgs/suzuki/img_0_0_10.jpg","/imgs/suzuki/img_0_0_11.jpg","/imgs/suzuki/img_0_0_12.jpg","/imgs/suzuki/img_0_0_13.jpg","/imgs/suzuki/img_0_0_14.jpg","/imgs/suzuki/img_0_0_15.jpg","/imgs/suzuki/img_0_0_16.jpg","/imgs/suzuki/img_0_0_17.jpg","/imgs/suzuki/img_0_0_18.jpg","/imgs/suzuki/img_0_0_19.jpg","/imgs/suzuki/img_0_0_20.jpg","/imgs/suzuki/img_0_0_21.jpg","/imgs/suzuki/img_0_0_22.jpg","/imgs/suzuki/img_0_0_23.jpg","/imgs/suzuki/img_0_0_24.jpg","/imgs/suzuki/img_0_0_25.jpg","/imgs/suzuki/img_0_0_26.jpg","/imgs/suzuki/img_0_0_27.jpg","/imgs/suzuki/img_0_0_28.jpg","/imgs/suzuki/img_0_0_29.jpg","/imgs/suzuki/img_0_0_30.jpg","/imgs/suzuki/img_0_0_31.jpg","/imgs/suzuki/img_0_0_32.jpg","/imgs/suzuki/img_0_0_33.jpg","/imgs/suzuki/img_0_0_34.jpg"]},ferrari:{colors:["#0c0b09","#930900"],imgs:["/imgs/ferrari/Ferrari_458_Italia_2009_360_1.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_2.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_3.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_4.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_5.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_6.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_7.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_8.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_9.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_10.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_11.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_12.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_13.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_14.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_15.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_16.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_17.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_18.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_19.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_20.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_21.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_22.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_23.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_24.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_25.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_26.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_27.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_28.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_29.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_30.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_31.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_32.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_33.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_34.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_35.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_36.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_37.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_38.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_39.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_40.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_41.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_42.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_43.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_44.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_45.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_46.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_47.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_48.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_49.jpg","/imgs/ferrari/Ferrari_458_Italia_2009_360_50.jpg"]}},z={name:"app",data:function(){return{imagesAreReady:!1,bgColor:k.honda.colors[0],colors:k.honda.colors,imgs:k.honda.imgs,availableCars:Object.keys(k)}},mounted:function(){this.preloadImages()},methods:{changeBgColor:function(i){this.bgColor=i},preloadImages:function(){this.images.forEach(function(i){var r=new Image;r.src=i}),this.imagesAreReady=!0},handleCarSelection:function(i){this.bgColor=k[i].colors[0],this.colors=k[i].colors,this.imgs=k[i].imgs,this.imagesAreReady=!1,this.preloadImages()}},computed:{images:function(){var i="https://micheleriva.github.io/vue-product-spinner/";return"/"===window.location.pathname?this.imgs:this.imgs.map(function(r){return i+r})}},components:{VueProductSpinner:p,GitHubRibbon:f,Spinner:C}},x=z,w=(a("5c0b"),Object(m["a"])(x,n,s,!1,null,null,null));w.options.__file="App.vue";var S=w.exports;g["a"].config.productionTip=!1,new g["a"]({render:function(i){return i(S)}}).$mount("#app")},"5c0b":function(i,r,a){"use strict";var g=a("2856"),n=a.n(g);n.a},"89cc":function(i,r,a){},9758:function(i,r,a){},"9c6e":function(i,r,a){"use strict";var g=a("cd2c"),n=a.n(g);n.a},cd2c:function(i,r,a){},f22a:function(i,r,a){"use strict";var g=a("89cc"),n=a.n(g);n.a},fe7f:function(i,r,a){"use strict";var g=a("9758"),n=a.n(g);n.a}});
//# sourceMappingURL=app.2e51467c.js.map