// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e};function f(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function _(e,t,r,n,o,a){var i,u,l;if(e<=0)return n;for(i=r<0?(1-e)*r:0,u=o<0?(1-e)*o:0,l=0;l<e;l++)n[u]=a(t[i]),i+=r,u+=o;return n}function p(e,t,r,n,o,a,i,u){var l,c,f;if(e<=0)return o;for(l=n,c=i,f=0;f<e;f++)o[c]=u(t[l]),l+=r,c+=a;return o}f(_,"ndarray",p);var d=Math.ceil;function y(e,t,r,n,o){return _(e,t,r,n,o,d)}function s(e,t,r,n,o,a,i){return p(e,t,r,n,o,a,i,d)}f(y,"ndarray",s),e.default=y,e.ndarray=s,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).sceil={});
//# sourceMappingURL=browser.js.map