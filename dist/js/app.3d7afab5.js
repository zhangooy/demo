(function(n){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);a&&a(t);while(p.length)p.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var n,t=0;t<l.length;t++){for(var o=l[t],r=!0,c=1;c<o.length;c++){var u=o[c];0!==e[u]&&(r=!1)}r&&(l.splice(t--,1),n=i(i.s=o[0]))}return n}var r={},e={app:0},l=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=n,i.c=r,i.d=function(n,t,o){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(o,r,function(t){return n[t]}.bind(null,r));return o},i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var a=u;l.push([0,"chunk-vendors"]),o()})({0:function(n,t,o){n.exports=o("56d7")},"034f":function(n,t,o){"use strict";var r=o("85ec"),e=o.n(r);e.a},"56d7":function(n,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),e=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"box-1"},[o("div",{staticClass:"red"},[n._v("第"+n._s(n.n)+"次")]),o("div",[o("div",{staticClass:"row"},[o("Box",{attrs:{n:n.n},on:{click:function(t){return n.onClickBox(0,t)}}}),o("Box",{attrs:{n:n.n},on:{click:function(t){return n.onClickBox(1,t)}}}),o("Box",{attrs:{n:n.n},on:{click:function(t){return n.onClickBox(2,t)}}})],1),o("div",{staticClass:"row"},[o("Box",{attrs:{n:n.n},on:{click:function(t){return n.onClickBox(3,t)}}}),o("Box",{attrs:{n:n.n},on:{click:function(t){return n.onClickBox(4,t)}}}),o("Box",{attrs:{n:n.n},on:{click:function(t){return n.onClickBox(5,t)}}})],1),o("div",{staticClass:"row"},[o("Box",{attrs:{n:n.n},on:{click:function(t){return n.onClickBox(6,t)}}}),o("Box",{attrs:{n:n.n},on:{click:function(t){return n.onClickBox(7,t)}}}),o("Box",{attrs:{n:n.n},on:{click:function(t){return n.onClickBox(8,t)}}})],1)]),o("div",[n._v(" 结果:"+n._s(null===n.result?"胜负未分":"胜方为"+n.result)+" ")])])},l=[],i=(o("99af"),o("d81d"),function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("div",{staticClass:"box",on:{click:n.onClickSelf}},[n.a?[n._v(n._s(n.text))]:void 0],2)])}),c=[],u={props:["n"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""===this.text&&(this.a=!0,this.text=this.n%2===0?"X":"O",this.$emit("click",this.text))}}},s=u,a=(o("8875"),o("2877")),f=Object(a["a"])(s,i,c,!1,null,null,null),p=f.exports,d={components:{Box:p},data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:null}},methods:{onClickBox:function(n,t){console.log("".concat(n,"号被点击;内容是:").concat(t)),this.map[Math.floor(n/3)][n%3]=t,this.n=this.n+1,this.tell()},tell:function(){for(var n=this.map,t=0;t<2;t++)null!==n[t][0]&&n[t][0]===n[t][1]&&n[t][1]===n[t][2]&&(this.result=n[t][0]);for(var o=0;o<2;o++)null!==n[0][o]&&n[0][o]===n[1][o]&&n[1][o]===n[2][o]&&(this.result=n[0][o]);null!==n[0][2]&&n[0][2]===n[1][1]&&n[1][1]===n[2][0]&&(this.result=n[0][2])}}},v=d,h=(o("034f"),Object(a["a"])(v,e,l,!1,null,null,null)),x=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(x)}}).$mount("#app")},"85ec":function(n,t,o){},8875:function(n,t,o){"use strict";var r=o("cb40"),e=o.n(r);e.a},cb40:function(n,t,o){}});
//# sourceMappingURL=app.3d7afab5.js.map