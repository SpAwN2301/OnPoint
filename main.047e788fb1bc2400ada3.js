(()=>{"use strict";var e,t={10:(e,t,n)=>{n(727);let l=document.getElementsByClassName("fullpageScroll")[0],o=innerWidth,d=document.getElementById("bg-pink-sperm"),a=document.getElementById("modalTitle"),s=document.getElementById("modal"),r=document.getElementById("openModal"),i=document.getElementById("closeModal"),c=document.getElementsByClassName("dot"),m=1,u=document.getElementsByClassName("prev")[0],y=document.getElementsByClassName("next")[0];window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),500)},l.addEventListener("scroll",(()=>{let e=Math.abs(document.getElementById("greet").getBoundingClientRect().x);0==e&&(d.style.opacity=0,d.style.transform="translate(100px, 100px)"),e==o&&(d.style.opacity=1,d.style.transform="translate(0, 0)")})),r.addEventListener("click",(()=>{s.style.display="block",a.style.display="block"})),i.addEventListener("click",(()=>{s.style.display="none",a.style.display="none"})),p(m);for(let e=0;e<c.length;e++)c[e].addEventListener("click",(()=>{p(m=e+1)}));function p(e){let t,n=document.getElementsByClassName("slider"),l=document.getElementsByClassName("dot");for(e>n.length&&(m=1),e<1&&(m=n.length),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<l.length;t++)l[t].className=l[t].className.replace(" active","");n[m-1].style.display="block",l[m-1].className+=" active"}u.addEventListener("click",(()=>{p(m+=-1)})),y.addEventListener("click",(()=>{p(m+=1)}))}},n={};function l(e){var o=n[e];if(void 0!==o)return o.exports;var d=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(d.exports,d,d.exports,l),d.loaded=!0,d.exports}l.m=t,e=[],l.O=(t,n,o,d)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,d]=e[c],s=!0,r=0;r<n.length;r++)(!1&d||a>=d)&&Object.keys(l.O).every((e=>l.O[e](n[r])))?n.splice(r--,1):(s=!1,d<a&&(a=d));if(s){e.splice(c--,1);var i=o();void 0!==i&&(t=i)}}return t}d=d||0;for(var c=e.length;c>0&&e[c-1][2]>d;c--)e[c]=e[c-1];e[c]=[n,o,d]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var o,d,[a,s,r]=n,i=0;for(o in s)l.o(s,o)&&(l.m[o]=s[o]);if(r)var c=r(l);for(t&&t(n);i<a.length;i++)d=a[i],l.o(e,d)&&e[d]&&e[d][0](),e[a[i]]=0;return l.O(c)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=l.O(void 0,[727],(()=>l(10)));o=l.O(o)})();