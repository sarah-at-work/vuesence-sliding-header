(function(e){function t(t){for(var n,a,l=t[0],s=t[1],d=t[2],c=0,p=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,d||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("3ebb"),o=r.n(n);o.a},"3ebb":function(e,t,r){var n=r("e31a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("499e").default;o("517436b3",n,!0,{sourceMap:!1,shadowMode:!1})},5273:function(e,t,r){var n=r("d2bc");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("499e").default;o("51bbf1bc",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("sliding-header",{attrs:{"treshold-hide":200,"treshold-open":400},scopedSlots:e._u([{key:"first-header",fn:function(){return[r("p",[e._v("The first header")])]},proxy:!0},{key:"second-header",fn:function(){return[r("p",[e._v("The second header")])]},proxy:!0}])}),e._l(25,(function(t){return r("p",{key:t},[e._v(" "+e._s(t)+". Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])}))],2)},i=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"sliding-header",class:{"first-header":e.scrollY<e.median,"second-header":e.scrollY>=e.median,hidden:e.scrollY>e.tresholdHide&&e.scrollY<e.tresholdOpen}},[e.scrollY<e.median?e._t("first-header"):e._t("second-header")],2)},l=[],s=(r("a9e3"),{name:"SlidingHeader",data:function(){return{scrollY:0}},props:{tresholdHide:Number,tresholdOpen:Number},computed:{median:function(){return(this.tresholdHide+this.tresholdOpen)/2}},created:function(){var e=this;window.addEventListener("scroll",(function(){e.scrollY=window.scrollY}))}}),d=s,u=(r("a670"),r("2877")),c=Object(u["a"])(d,a,l,!1,null,null,null),p=c.exports,f={name:"App",components:{SlidingHeader:p}},h=f,b=(r("034f"),Object(u["a"])(h,o,i,!1,null,null,null)),m=b.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(m)}}).$mount("#app")},a670:function(e,t,r){"use strict";var n=r("5273"),o=r.n(n);o.a},d2bc:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,".sliding-header{position:fixed;z-index:1;top:0;left:0;width:100%;transition:.3s}",""]),e.exports=t},e31a:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,".sliding-header{display:flex;justify-content:center;align-items:center;transition:.3s}.sliding-header.first-header{background-color:#90ee90;height:60px}.sliding-header.second-header{background-color:#add8e6;height:100px}.sliding-header.hidden{top:-100px}#app{font-family:Helvetica,Arial,sans-serif;color:#2c3e50;margin-top:100px}",""]),e.exports=t}});
//# sourceMappingURL=app.dcf7baa8.js.map