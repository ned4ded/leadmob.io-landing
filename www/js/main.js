!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var r="[data-form-error]",n="[data-form-label]",i="[data-form-input]",o="[data-form-input-container]",u="[data-form-submit]",l="[data-form]",a="[data-form-message]";document.addEventListener("DOMContentLoaded",function(){document.querySelector("html").classList.remove("no-js");var e=document.querySelector(i),t=document.querySelector(o),d=document.querySelector(n),s=document.querySelector(r),c=document.querySelector(u),f=document.querySelector(l),y=document.querySelector(a);e.addEventListener("input",function(e){""!=e.target.value?c.classList.add("has-value"):c.classList.remove("has-value"),e.target.validity.valid||""==e.target.value?(""==e.target.value&&(d.style.visibility="hidden"),s.style.visibility="hidden"):(d.style.visibility="visible",s.style.visibility="visible")}),f.addEventListener("submit",function(e){e.preventDefault(),t.style.display="none",d.style.visibility="hidden",s.style.visibility="hidden",y.style.display="block"})})}]);
//# sourceMappingURL=main.js.map