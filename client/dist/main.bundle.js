/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var r=n(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d={};function p(){}function v(){}function y(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(P([])));w&&w!==n&&i.call(w,c)&&(g=w);var b=y.prototype=p.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,a,c,s){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=y,l(b,"constructor",y),l(y,"constructor",v),v.displayName=l(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},_(x.prototype),l(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new x(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),l(b,u,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var r=n(61)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";try{self["workbox:window:6.5.2"]&&_()}catch(t){}function t(t,e){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(t){n(t.data)},t.postMessage(e,[r.port2])}))}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.2"]&&_()}catch(t){}var o=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))};function i(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var a=function(t,e){this.type=t,Object.assign(this,e)};function c(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function s(){}var u={type:"SKIP_WAITING"};function l(t,e){if(!e)return t&&t.then?t.then(s):Promise.resolve()}var f=function(e){var n,r;function s(t,n){var r,s;return void 0===n&&(n={}),(r=e.call(this)||this).nn={},r.tn=0,r.rn=new o,r.en=new o,r.on=new o,r.un=0,r.an=new Set,r.cn=function(){var t=r.fn,e=t.installing;r.tn>0||!i(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,t.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(t){var e=r.fn,n=t.target,o=n.state,i=n===r.vn,c={sw:n,isExternal:i,originalEvent:t};!i&&r.mn&&(c.isUpdate=!0),r.dispatchEvent(new a(o,c)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&e.waiting===n&&r.dispatchEvent(new a("waiting",c))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(n))},r.dn=function(t){var e=r.hn,n=e!==navigator.serviceWorker.controller;r.dispatchEvent(new a("controlling",{isExternal:n,originalEvent:t,sw:e,isUpdate:r.mn})),n||r.on.resolve(e)},r.gn=(s=function(t){var e=t.data,n=t.ports,o=t.source;return c(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new a("message",{data:e,originalEvent:t,ports:n,sw:o}))}))},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(s.apply(this,t))}catch(t){return Promise.reject(t)}}),r.sn=t,r.nn=n,navigator.serviceWorker.addEventListener("message",r.gn),r}r=e,(n=s).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var f,h=s.prototype;return h.register=function(t){var e=(void 0===t?{}:t).immediate,n=void 0!==e&&e;try{var r=this;return function(t,e){var n=t();return n&&n.then?n.then(e):e()}((function(){if(!n&&"complete"!==document.readyState)return l(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),c(r.bn(),(function(t){r.fn=t,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var e=r.fn.waiting;return e&&i(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then((function(){r.dispatchEvent(new a("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(t){return Promise.reject(t)}},h.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(t){return Promise.reject(t)}},h.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},h.messageSW=function(e){try{return c(this.getSW(),(function(n){return t(n,e)}))}catch(t){return Promise.reject(t)}},h.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&t(this.fn.waiting,u)},h.pn=function(){var t=navigator.serviceWorker.controller;return t&&i(t.scriptURL,this.sn.toString())?t:void 0},h.bn=function(){try{var t=this;return function(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}((function(){return c(navigator.serviceWorker.register(t.sn,t.nn),(function(e){return t.un=performance.now(),e}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(s.prototype,f),s}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(t,e){this.Sn(t).add(e)},e.removeEventListener=function(t,e){this.Sn(t).delete(e)},e.dispatchEvent=function(t){t.target=this;for(var e,n=r(this.Sn(t.type));!(e=n()).done;)(0,e.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}());function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){p(i,r,o,a,c,"next",t)}function c(t){p(i,r,o,a,c,"throw",t)}a(void 0)}))}}var y=n(687),g=n.n(y);let m,w;const b=new WeakMap,x=new WeakMap,E=new WeakMap,L=new WeakMap,j=new WeakMap;let S={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return x.get(t);if("objectStoreNames"===e)return t.objectStoreNames||E.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return k(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function P(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(w||(w=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(I(this),t),k(b.get(this))}:function(...t){return k(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return E.set(r,t.sort?t.sort():[t]),k(r)}:(t instanceof IDBTransaction&&function(t){if(x.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));x.set(t,e)}(t),n=t,(m||(m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>n instanceof t))?new Proxy(t,S):t);var e,n}function k(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{e(k(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&b.set(e,t)})).catch((()=>{})),j.set(e,t),e}(t);if(L.has(t))return L.get(t);const e=P(t);return e!==t&&(L.set(t,e),j.set(e,t)),e}const I=t=>j.get(t);function O(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(t,e),c=k(a);return r&&a.addEventListener("upgradeneeded",(t=>{r(k(a.result),t.oldVersion,t.newVersion,k(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const D=["get","getKey","getAll","getAllKeys","count"],B=["put","add","delete","clear"],M=new Map;function T(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(M.get(e))return M.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=B.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!D.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),o&&i.done]))[0]};return M.set(e,i),i}var W;W=S,S={...W,get:(t,e,n)=>T(t,e)||W.get(t,e,n),has:(t,e)=>!!T(t,e)||W.has(t,e)};var N=function(){var t=v(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O("jate",1,{upgrade:function(t){t.objectStoreNames.contains("jate")?console.log("jate database already exists"):(t.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=v(g().mark((function t(e){var n,r,o,i,a;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Put to the DB"),t.next=3,O("jate",1);case 3:return n=t.sent,r=n.transaction("jate","readwrite"),o=r.objectStore("jate"),i=o.add({content:e}),t.next=9,i;case 9:a=t.sent,console.log("🚀 - data saved to the database",a);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=v(g().mark((function t(){var e,n,r,o,i,a;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("GET from the database"),t.next=3,O("jate",1);case 3:return e=t.sent,n=e.transaction("jate","readonly"),r=n.objectStore("jate"),o=r.getAll(),t.next=9,o;case 9:return i=t.sent,a=i[i.length-1].content,console.log("bananas"),console.log("result.value",a),t.abrupt("return",a);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();N();var G,R=d((function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),C().then((function(t){console.info("Loaded data from IndexedDB, injecting into editor"),e.editor.setValue(t||n||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",e.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),A(localStorage.getItem("content"))}))})),U=document.querySelector("#main");U.innerHTML="",void 0===new R&&((G=document.createElement("div")).classList.add("spinner"),G.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',U.appendChild(G)),"serviceWorker"in navigator?new f("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();