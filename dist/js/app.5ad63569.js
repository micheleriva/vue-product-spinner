(function(e){function n(n){for(var r,a,s=n[0],u=n[1],c=n[2],d=0,h=[];d<s.length;d++)a=s[d],i[a]&&h.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(h.length)h.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,s=1;s<t.length;s++){var u=t[s];0!==i[u]&&(r=!1)}r&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},i={app:0},o=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/vue-product-spinner/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1549:function(e,n,t){},"17af":function(e,n,t){"use strict";var r=t("caf5"),i=t.n(r);i.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Ribbon"),t("DemoCommands"),t("div",{staticClass:"demo demo-1"},[t("VueProductSpinner",{attrs:{images:e.productImages,slider:e.props.slider,infinite:e.props.infinite,touchDrag:e.props.touchDrag,mouseWheel:e.props.mouseWheel,mouseDrag:e.props.mouseDrag,sliderClass:"demo-slider"}},[t("PulseLoader",{attrs:{color:"#3f51b5"}})],1)],1),t("div",{staticClass:"demo demo-2"},[t("VueProductSpinner",{attrs:{images:e.shoeImages,slider:e.props.slider,infinite:e.props.infinite,touchDrag:e.props.touchDrag,mouseWheel:e.props.mouseWheel,mouseDrag:e.props.mouseDrag,sliderClass:"demo-slider"}},[t("PulseLoader",{attrs:{color:"#3f51b5"}})],1)],1)],1)},o=[],a=(t("7f7f"),t("5d73")),s=t.n(a),u=t("75fc"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"componentContainer",staticClass:"vue-product-spinner"},[e.imagesPreloaded?t("div",{staticClass:"vue-product-spinner-wrapper"},[t("img",{attrs:{tabindex:"1",draggable:"false",src:e.spinner.currentPath},on:{keydown:e.handleKeydown,mouseup:e.handleMouseUp,mousedown:e.handleMouseDown,mousemove:e.handleMouseMove,touchstart:e.handleTouchStart,touchend:e.handleTouchEnd,touchmove:e.handleTouchMove}}),e.slider?t("input",{staticClass:"vue-product-spinner-slider",class:e.sliderClass,attrs:{type:"range",tabindex:"1",min:"1",max:e.spinner.size},domProps:{value:e.spinner.current},on:{input:e.handleSlider}}):e._e()]):t("div",[e._t("default")],2)])},l=[],d=t("e814"),h=t.n(d),p=(t("96cf"),t("3b8d")),m=(t("ac6a"),t("5df3"),t("795b")),f=t.n(m);function v(e){function n(e){return new f.a(function(n,t){var r=new Image;r.onload=function(){n(r)},r.onerror=r.onabort=function(){t(e)},r.src=e})}for(var t=[],r=0;r<e.length;r++)t.push(n(e[r]));return f.a.all(t)}var g={name:"VueProductSpinner",props:{images:{type:Array,required:!0},infinite:{type:Boolean,required:!1,default:function(){return!0}},touchDrag:{type:Boolean,required:!1,default:function(){return!0}},mouseWheel:{type:Boolean,required:!1,default:function(){return!0}},mouseDrag:{type:Boolean,required:!1,default:function(){return!0}},slider:{type:Boolean,required:!1,default:function(){return!1}},sliderClass:{type:String,required:!1,default:function(){return""}}},data:function(){return{imagesPreloaded:!1,spinner:{current:0,size:0,currentPath:null},mouse:{isMoving:!1},touch:{isMoving:!1,initialX:0}}},beforeMount:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v(this.images);case 2:e.sent,this.imagesPreloaded=!0;case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),mounted:function(){this.$refs.componentContainer.addEventListener("mousewheel",this.handleWheel,!1),this.$refs.componentContainer.addEventListener("DOMMouseScroll",this.handleWheel,!1)},destroyed:function(){this.$refs.componentContainer.removeEventListener("mousewheel",this.handleWheel),this.$refs.componentContainer.removeEventListener("DOMMouseScroll",this.handleWheel)},created:function(){this.spinner.size=this.images.length,this.spinner.currentPath=this.images[0]},methods:{handleKeydown:function(e){39===e.keyCode&&(e.preventDefault(),this.handleMovement(1)),37===e.keyCode&&(e.preventDefault(),this.handleMovement(-1))},handleSlider:function(e){this.spinner.current=h()(e.target.value),this.spinner.currentPath=this.images[e.target.value-1]},handleMouseDown:function(){this.mouse.isMoving=!0},handleMouseUp:function(){this.mouse.isMoving=!1},handleMouseMove:function(e){this.mouse.isMoving&&this.mouseDrag&&this.handleMovement(e.movementX)},handleTouchStart:function(e){e.preventDefault(),this.touch.isMoving=!0,this.touch.initialX=e.touches[0].pageX},handleTouchEnd:function(){this.touch.isMoving=!1},handleTouchMove:function(e){if(this.touchDrag){var n=-(this.touch.initialX-e.touches[0].pageX);this.handleMovement(n)}},handleWheel:function(e){e.preventDefault(),this.mouseWheel&&this.handleMovement(e.deltaY)},handleMovement:function(e){e>=0?this.spinner.current>=0&&this.spinner.current<this.spinner.size?(this.spinner.current++,this.spinner.currentPath=this.images[this.spinner.current-1]):this.infinite&&(this.spinner.current=1,this.spinner.currentPath=this.images[this.spinner.current-1]):this.spinner.current>=0&&this.spinner.current-1>0?(this.spinner.current--,this.spinner.currentPath=this.images[this.spinner.current-1]):this.infinite&&(this.spinner.current=this.spinner.size,this.spinner.currentPath=this.images[this.spinner.current-1])}}},C=g,b=t("2877"),y=Object(b["a"])(C,c,l,!1,null,null,null),w=y.exports,M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"demo-commands"},[t("h3",[e._v("Play with props!")]),t("div",{staticClass:"commands"},e._l(e.commands,function(n){return t("div",{key:n.name,staticClass:"command"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.value,expression:"command.value"}],attrs:{type:"checkbox",id:n.name},domProps:{checked:Array.isArray(n.value)?e._i(n.value,null)>-1:n.value},on:{change:function(t){var r=n.value,i=t.target,o=!!i.checked;if(Array.isArray(r)){var a=null,s=e._i(r,a);i.checked?s<0&&e.$set(n,"value",r.concat([a])):s>-1&&e.$set(n,"value",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(n,"value",o)}}}),t("label",{attrs:{for:n.name}},[e._v(" "+e._s(n.name)+" ")])])}),0)])},D=[],P=new r["a"],_={name:"DemoCommands",data:function(){return{commands:[{name:"infinite",value:!0},{name:"touchDrag",value:!0},{name:"mouseWheel",value:!0},{name:"mouseDrag",value:!0},{name:"slider",value:!0}]}},watch:{commands:{handler:function(e){P.$emit("newCommand",e)},deep:!0}}},x=_,O=(t("e486"),Object(b["a"])(x,M,D,!1,null,null,null)),S=O.exports,j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("a",{staticClass:"github-corner",attrs:{href:"https://github.com/micheleriva/vue-product-spinner","aria-label":"View source on GitHub"}},[t("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[t("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])])},$=[],L={name:"Ribbon"},W=L,k=(t("17af"),Object(b["a"])(W,j,$,!1,null,null,null)),E=k.exports,T=t("8a5d"),A="localhost"!==window.location.hostname,q=function(){return Object(u["a"])(Array(51)).map(function(e,n){return"".concat(A?"/vue-product-spinner":"","/imgs/honda/").concat(n+1,".png")})},B=function(){return Object(u["a"])(Array(71)).map(function(e,n){return"".concat(A?"/vue-product-spinner":"","/imgs/shoe/UnderArmour-").concat(n+1,".jpg")})},X={name:"app",components:{VueProductSpinner:w,Ribbon:E,DemoCommands:S,PulseLoader:T["a"]},data:function(){return{productImages:q(),shoeImages:B(),props:{slider:!0,infinite:!0,touchDrag:!0,mouseWheel:!0,mouseDrag:!0}}},methods:{handleCommands:function(e){var n=!0,t=!1,r=void 0;try{for(var i,o=s()(e);!(n=(i=o.next()).done);n=!0){var a=i.value;this.props[a.name]=a.value}}catch(u){t=!0,r=u}finally{try{n||null==o.return||o.return()}finally{if(t)throw r}}}},mounted:function(){P.$on("newCommand",this.handleCommands)},beforeDestroy:function(){P.$off("newCommand",this.handleCommands)}},z=X,I=(t("a5d2"),Object(b["a"])(z,i,o,!1,null,null,null)),R=I.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(R)}}).$mount("#app")},a5d2:function(e,n,t){"use strict";var r=t("f809"),i=t.n(r);i.a},caf5:function(e,n,t){},e486:function(e,n,t){"use strict";var r=t("1549"),i=t.n(r);i.a},f809:function(e,n,t){}});
//# sourceMappingURL=app.5ad63569.js.map