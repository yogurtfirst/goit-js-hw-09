!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");const l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function d(e,n){const t=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}document.querySelector("button").addEventListener("click",(function(n){n.preventDefault();for(let n=1;n<=a.value;n+=1){d(n,parseInt(l.value)+parseInt(u.value)*n).then((({position:n,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}))}}))}();
//# sourceMappingURL=03-promises.d71af295.js.map
