(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,r){e.exports=r.p+"static/media/no-image.c2ef26a8.jpg"},31:function(e,t,r){},37:function(e,t,r){e.exports=r(89)},46:function(e,t,r){},48:function(e,t,r){},50:function(e,t,r){},87:function(e,t,r){},89:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),o=r(36),i=r.n(o),c=(r(46),r(5)),l=(r(48),r(17)),u=r(0),s=r(13),h=r(7),f=r(90),m=(r(50),r(19)),p=r.n(m),d=r(21),v=r.n(d),y=r(20),g=r.n(y);r(31);var E=function(e){var t=e.movieTitle,r=e.toggle,o=Object(n.useState)(""),i=Object(c.a)(o,2),l=i[0],u=i[1],s=Object(n.useState)(""),h=Object(c.a)(s,2),f=h[0],m=h[1];return Object(n.useEffect)(function(){!function(){try{u(t),g()(l).then(function(e){m(e)})}catch(e){console.error("An error occurred:",e)}}()},[f]),console.log(l),a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"Container"}),a.a.createElement("div",{className:"player"},a.a.createElement("h1",{id:r?"TrailerMovie-name-dark":"TrailerMovie-name-light"},t),a.a.createElement("div",{className:"player-container"},a.a.createElement(v.a,{url:f,controls:!0,width:"50rem",height:"31rem",muted:!1}))))};function b(){b=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),c=new C(n||[]);return a(i,"_invoke",{value:N(e,r,c)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",m="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function E(){}var w={};u(w,i,function(){return this});var O=Object.getPrototypeOf,j=O&&O(O(P([])));j&&j!==r&&n.call(j,i)&&(w=j);var x=E.prototype=y.prototype=Object.create(w);function k(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function L(e,t){function r(a,o,i,c){var l=h(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t(function(t,a){r(e,n,t,a)})}return o=o?o.then(a,a):a()}})}function N(t,r,n){var a=f;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===d){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var l=S(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var u=h(t,r,n);if("normal"===u.type){if(a=n.done?d:m,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=d,n.method="throw",n.arg=u.arg)}}}function S(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return g.prototype=E,a(x,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:g,configurable:!0}),g.displayName=u(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},k(L.prototype),u(L.prototype,c,function(){return this}),t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new L(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},k(x),u(x,l,"Generator"),u(x,i,function(){return this}),u(x,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}var w=function(){var e=Object(n.useContext)(_),t=e.toggle,r=e.inputValue,o=Object(n.useState)([]),i=Object(c.a)(o,2),l=i[0],u=i[1],m=Object(n.useState)(!0),d=Object(c.a)(m,2),v=d[0],y=d[1],g=Object(n.useState)(""),w=Object(c.a)(g,2),O=w[0],j=w[1],x="https://api.themoviedb.org/3/".concat(r?"search":"discover","/movie"),k=function(){var e=Object(h.a)(b().mark(function e(){var t,n;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(x,{params:{api_key:"0f898ec93930a149724e4e4c3c310af8",query:r}});case 2:t=e.sent,n=t.data.results,u(n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){setTimeout(function(){k()},100)},[r]);var L=function(e){j(e.title),y(!v)};return a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:t?"mainBgcolor":"secondaryBgColor"},a.a.createElement("div",{className:"movies-container"},l.map(function(e){return a.a.createElement(n.Fragment,null,a.a.createElement("div",{id:v?"container":"NoContainer"},a.a.createElement(s.a,{color:"#fff",fontSize:40,id:"playIcon",onClick:function(){return L(e)}}),a.a.createElement("img",{src:e.poster_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(e.poster_path):p.a,alt:"no images",onClick:function(){return L(e)}}),a.a.createElement("h3",{id:e.title.length>28?"smaler-Text":"",className:t?"mainColor":"secondaryColor"},e.title)))}),a.a.createElement(s.b,{id:v?"Nothing":"Exit1",className:t?"DarkTheme":"LightThemeClose",fontSize:55,color:"fff",cursor:"pointer",onClick:function(e){return y(!0)}}),v?console.log:a.a.createElement(E,{movieTitle:O,toggle:t}))))};var O=function(e){var t=e.TvShowsTitle,r=e.toggle,o=Object(n.useState)(""),i=Object(c.a)(o,2),l=i[0],u=i[1],s=Object(n.useState)(""),h=Object(c.a)(s,2),f=h[0],m=h[1];return Object(n.useEffect)(function(){u(t),g()(l).then(function(e){m(e)})},[f]),a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"Container"}),a.a.createElement("div",{className:"player"},a.a.createElement("h1",{id:r?"TrailerMovie-name-dark":"TrailerMovie-name-light"},t),a.a.createElement(v.a,{url:f,controls:!0,width:"800px",height:"500px",muted:!1})))};function j(){j=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),c=new C(n||[]);return a(i,"_invoke",{value:N(e,r,c)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",m="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function E(){}var b={};u(b,i,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(P([])));O&&O!==r&&n.call(O,i)&&(b=O);var x=E.prototype=y.prototype=Object.create(b);function k(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function L(e,t){function r(a,o,i,c){var l=h(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t(function(t,a){r(e,n,t,a)})}return o=o?o.then(a,a):a()}})}function N(t,r,n){var a=f;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===d){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var l=S(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var u=h(t,r,n);if("normal"===u.type){if(a=n.done?d:m,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=d,n.method="throw",n.arg=u.arg)}}}function S(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return g.prototype=E,a(x,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:g,configurable:!0}),g.displayName=u(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},k(L.prototype),u(L.prototype,c,function(){return this}),t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new L(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},k(x),u(x,l,"Generator"),u(x,i,function(){return this}),u(x,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}var x=function(){var e=Object(n.useContext)(_),t=e.toggle,r=e.inputValue,o=Object(n.useState)([]),i=Object(c.a)(o,2),l=i[0],u=i[1],m=Object(n.useState)(!0),d=Object(c.a)(m,2),v=d[0],y=d[1],g=r?"search":"discover",E=Object(n.useState)(""),b=Object(c.a)(E,2),w=b[0],x=b[1],k="https://api.themoviedb.org/3/".concat(g,"/tv"),L=function(){var e=Object(h.a)(j().mark(function e(){var t,n;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(k,{params:{api_key:"0f898ec93930a149724e4e4c3c310af8",query:r}});case 2:t=e.sent,n=t.data.results,u(n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){setTimeout(function(){L()},100)},[r]);var N=function(e){x(e.name),y(!v)};return a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:t?"mainBgcolor":"secondaryBgColor"},a.a.createElement("div",{className:"movies-container"},l.map(function(e){return a.a.createElement(n.Fragment,{id:e.id},a.a.createElement("div",{id:v?"container":"NoContainer"},a.a.createElement(s.a,{color:"#fff",fontSize:40,id:v?"playIcon":"hide",onClick:function(){return N(e)}}),a.a.createElement("img",{src:e.poster_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(e.poster_path):p.a,alt:"no images",onClick:function(){return N(e)}}),a.a.createElement("h3",{id:e.name.length>28?"smaler-Text":"",className:t?"mainColor":"secondaryColor"},e.name)))}),v?console.log:a.a.createElement(O,{TvShowsTitle:w,toggle:t}),a.a.createElement(s.b,{id:v?"Nothing":"Exit1",className:t?"DarkTheme":"LightThemeClose",fontSize:55,color:"fff",cursor:"pointer",onClick:function(e){return y(!0)}}))))};var k=function(e){var t=e.TrendingTitle,r=e.toggle,o=Object(n.useState)(""),i=Object(c.a)(o,2),l=i[0],u=i[1],s=Object(n.useState)(""),h=Object(c.a)(s,2),f=h[0],m=h[1];return Object(n.useEffect)(function(){!function(){try{t&&"string"===typeof t?(u(t),g()(l).then(function(e){m(e)})):console.error("Invalid TrendingTitle:",t)}catch(e){console.error("An error occurred:",e)}}()},[f]),a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"Container"}),a.a.createElement("div",{className:"player"},a.a.createElement("h1",{id:r?"TrailerMovie-name-dark":"TrailerMovie-name-light"},t),a.a.createElement(v.a,{url:f,controls:!0,width:"800px",height:"500px",muted:!1})))};function L(){L=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),c=new C(n||[]);return a(i,"_invoke",{value:N(e,r,c)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",m="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function E(){}var b={};u(b,i,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(P([])));O&&O!==r&&n.call(O,i)&&(b=O);var j=E.prototype=y.prototype=Object.create(b);function x(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){function r(a,o,i,c){var l=h(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t(function(t,a){r(e,n,t,a)})}return o=o?o.then(a,a):a()}})}function N(t,r,n){var a=f;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===d){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var l=S(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var u=h(t,r,n);if("normal"===u.type){if(a=n.done?d:m,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=d,n.method="throw",n.arg=u.arg)}}}function S(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return g.prototype=E,a(j,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:g,configurable:!0}),g.displayName=u(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},x(k.prototype),u(k.prototype,c,function(){return this}),t.AsyncIterator=k,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new k(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},x(j),u(j,l,"Generator"),u(j,i,function(){return this}),u(j,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}var N=function(){var e=Object(n.useContext)(_),t=e.toggle,r=e.inputValue,o=Object(n.useState)([]),i=Object(c.a)(o,2),l=i[0],u=i[1],m=Object(n.useState)(!0),d=Object(c.a)(m,2),v=d[0],y=d[1],g=Object(n.useState)(""),E=Object(c.a)(g,2),b=E[0],w=E[1],O=r,j=function(){var e=Object(h.a)(L().mark(function e(){var t,r;return L().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("https://api.themoviedb.org/3").concat("/trending/all/week"),{params:{api_key:"0f898ec93930a149724e4e4c3c310af8",query:O}});case 2:t=e.sent,r=t.data.results,u(r);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){setTimeout(function(){j()},100)},[O]);var x=function(e){w(e.name),y(!v)};return a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:t?"mainBgcolor":"secondaryBgColor"},a.a.createElement("div",{className:"movies-container"},l.map(function(e){return a.a.createElement(n.Fragment,{id:e.id},a.a.createElement("div",{id:v?"container":"NoContainer"},a.a.createElement(s.a,{color:"#fff",fontSize:40,id:v?"playIcon":"hide",onClick:function(){return x(e)}}),a.a.createElement("img",{src:e.poster_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(e.poster_path):p.a,alt:"no images",onClick:function(){return x(e)}}),a.a.createElement("h3",{id:e.name>28?"smaler-Text":"",className:t?"mainColor":"secondaryColor"},e.name)))}),a.a.createElement(s.b,{id:v?"Nothing":"Exit1",className:t?"DarkTheme":"LightThemeClose",fontSize:55,color:"fff",cursor:"pointer",onClick:function(e){return y(!0)}}),v?console.log:a.a.createElement(k,{TrendingTitle:b,toggle:t}))))},S=r(9);r(87);var T=function(){var e=Object(n.useContext)(_).toggle,t=Object(n.useState)(!0),r=Object(c.a)(t,2),o=r[0],i=r[1],l=Object(n.useState)(!0),u=Object(c.a)(l,2),s=u[0],h=u[1],f=Object(n.useState)(!0),m=Object(c.a)(f,2),p=m[0],d=m[1],v=Object(n.useState)("7.99"),y=Object(c.a)(v,2),g=y[0],E=y[1],b=Object(n.useState)("12.99"),w=Object(c.a)(b,2),O=w[0],j=w[1],x=Object(n.useState)("18.99"),k=Object(c.a)(x,2),L=k[0],N=k[1];return a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:e?"backgroun-Color-Main":"backgroun-Color-secondary"},a.a.createElement("div",{className:"Pricing-container"},a.a.createElement("div",{className:e?"Pricing-option1":"light-Theme1"},a.a.createElement("h2",null,"Basic"),a.a.createElement("div",{className:"Price"},a.a.createElement("h3",null,g,"$"),a.a.createElement("h4",{id:"MonthlyYearly"},o?"/Monthly":"/Yearly")),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"Ulimaited film and tv programmes"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"Watch on mobile phones and tablets"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"Cancel at anytime"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"First month completely free"),a.a.createElement("button",{id:"button1"},"Buy Now"),a.a.createElement("div",{id:"darktheme"},a.a.createElement("div",{className:"Pricing-yearly-darktheme",onClick:function(){i(!o),E(o?"60":"7.99")}},a.a.createElement("div",{className:o?"Pricing-monthly-darktheme ":"Pricing-monthly-light"})))),a.a.createElement("div",{className:e?"Pricing-option2":"light-Theme2"},a.a.createElement("h2",null,"Standard"),a.a.createElement("div",{className:"Price"},a.a.createElement("h3",null,O,"$"),a.a.createElement("h4",{id:"MonthlyYearly"},s?"/Monthly":"/Yearly")),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"Ulimaited film and tv programmes"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"Watch on mobile phones and tablets"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"Cancel at anytime"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"First month completely free"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"HD available"),a.a.createElement("button",{id:"button2"},"Buy Now"),a.a.createElement("div",{id:"darktheme"},a.a.createElement("div",{className:"Pricing-yearly-darktheme",onClick:function(){h(!s),j(s?"120":"12.99")}},a.a.createElement("div",{className:s?"Pricing-monthly-darktheme":"Pricing-monthly-light"})))),a.a.createElement("div",{className:e?"Pricing-option2":"light-Theme2"},a.a.createElement("h2",null,"Premium"),a.a.createElement("div",{className:"Price"},a.a.createElement("h3",null,L,"$"),a.a.createElement("h4",{id:"MonthlyYearly"},p?"/Monthly":"/Yearly")),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"Ulimaited film and tv programmes"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"Watch on mobile phones and tablets"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"Cancel at anytime"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"First month completely free"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"HD available"),a.a.createElement("span",null,a.a.createElement(S.a,{fontSize:25,id:"checkmark"}),"Ultra HD"),a.a.createElement("button",{id:"button3"},"Buy Now"),a.a.createElement("div",{id:"darktheme"},a.a.createElement("div",{className:"Pricing-yearly-darktheme",onClick:function(){d(!p),N(p?"180":"18.99")}},a.a.createElement("div",{className:p?"Pricing-monthly-darktheme":"Pricing-monthly-light"})))))))},_=a.a.createContext();var C=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),r=t[0],o=t[1],i=Object(n.useState)(""),h=Object(c.a)(i,2),f=h[0],m=h[1];return a.a.createElement(_.Provider,{value:{toggle:r,inputValue:f}},a.a.createElement(n.Fragment,null,a.a.createElement("nav",{className:r?"":"navBarColor"},a.a.createElement("div",{className:"nav-options"},a.a.createElement("h1",{id:r?" ":"heading"},"KURD FLIX"),a.a.createElement("div",{className:"nav-options "},a.a.createElement(l.b,{to:"",style:function(e){return{color:e.isActive?"#fff":"#ee9b00"}}},a.a.createElement("span",{id:r?"Movies":"MoviesLight"},"Movies")),a.a.createElement(l.b,{to:"/TvShows",style:function(e){return{color:e.isActive?"#fff":"#ee9b00"}}},a.a.createElement("span",{id:r?"Movies":"MoviesLight"},"TV Show")),a.a.createElement(l.b,{to:"/Trends",style:function(e){return{color:e.isActive?"#fff":"#ee9b00"}}},a.a.createElement("span",{id:r?"Movies":"MoviesLight"},"Trendings")),a.a.createElement(l.b,{to:"/Pricing",style:function(e){return{color:e.isActive?"#fff":"#ee9b00"}}},a.a.createElement("span",{id:r?"Movies":"MoviesLight"},"Pricing")))),a.a.createElement("div",{className:"input-group"},a.a.createElement("input",{type:"text",placeholder:"Search whatever you want",onChange:function(e){return m(e.target.value)},className:"input-font custom-placeholder"}),a.a.createElement(s.c,{fontSize:21,color:"green",id:"search"}),a.a.createElement("div",{id:"Color-switcher",onClick:function(){return o(!r)}},a.a.createElement("div",{id:r?"Color-switcher-mover":"Color-switcher-moved"})))),a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"",element:a.a.createElement(w,null)}),a.a.createElement(u.a,{path:"TvShows",element:a.a.createElement(x,null)}),a.a.createElement(u.a,{path:"Trends",element:a.a.createElement(N,null)}),a.a.createElement(u.a,{path:"Pricing",element:a.a.createElement(T,null)}))))},P=function(){return a.a.createElement("div",null,a.a.createElement(C,null))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,null,a.a.createElement(P,null))))}},[[37,2,1]]]);
//# sourceMappingURL=main.d32f00f8.chunk.js.map