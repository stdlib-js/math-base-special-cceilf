// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,u=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(a.call(t,r)||u.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=c):t[r]=l.value),p="get"in l,y="set"in l,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,l.get),y&&i&&i.call(t,r,l.set),t};function c(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var s=y()?function(t){var r,e,n,o,i;if(null==t)return b.call(t);e=t[v],i=v,r=null!=(o=t)&&m.call(o,i);try{t[v]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[v]=e:delete t[v],n}:function(t){return b.call(t)},_=Number,h=_.prototype.toString;var w=y();function d(t){return"object"==typeof t&&(t instanceof _||(w?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function g(t){return f(t)||d(t)}c(g,"isPrimitive",f),c(g,"isObject",d);var E="function"==typeof Math.fround?Math.fround:null,S="function"==typeof Float32Array;var j=Number.POSITIVE_INFINITY,T="function"==typeof Float32Array?Float32Array:null;var O="function"==typeof Float32Array?Float32Array:void 0;var A=new(function(){var t,r,e;if("function"!=typeof T)return!1;try{r=new T([1,3.14,-3.14,5e40]),e=r,t=(S&&e instanceof Float32Array||"[object Float32Array]"===s(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===j}catch(r){t=!1}return t}()?O:function(){throw new Error("not implemented")})(1);var F="function"==typeof E?E:function(t){return A[0]=t,A[0]};function P(t,r){if(!(this instanceof P))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!f(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!f(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:F(t)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:F(r)}),this}c(P,"BYTES_PER_ELEMENT",4),c(P.prototype,"BYTES_PER_ELEMENT",4),c(P.prototype,"byteLength",8),c(P.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),c(P.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));var N=Math.ceil;function I(t){return new P(N(function(t){return t.re}(t)),N(function(t){return t.im}(t)))}export{I as default};
//# sourceMappingURL=mod.js.map