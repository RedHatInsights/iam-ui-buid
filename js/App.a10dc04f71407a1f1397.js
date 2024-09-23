(()=>{"use strict";var e,r,t,n,o,a,i,d,u,s,l,f,c,p,h,m,v,b={9589:(e,r,t)=>{Promise.all([t.e(766),t.e(125),t.e(786)]).then(t.bind(t,6052))}},g={};function y(e){var r=g[e];if(void 0!==r)return r.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,y),t.loaded=!0,t.exports}y.m=b,y.c=g,y.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return y.d(r,{a:r}),r},y.d=(e,r)=>{for(var t in r)y.o(r,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},y.f={},y.e=e=>Promise.all(Object.keys(y.f).reduce(((r,t)=>(y.f[t](e,r),r)),[])),y.u=e=>"js/"+({244:"Authentication-Factors",247:"OopsPage",459:"NoPermissionsPage",562:"User-Management",600:"Identity-Provider-Integration"}[e]||e)+"."+{27:"db578698ca17e36d0b21",125:"6d6903f487d4c10b0aef",244:"8325e0442d64b8d1e122",247:"373e0120a50451da86a9",459:"6d416b317c716e1a7871",562:"8389366db4232e97185f",586:"5aa21fbe06d6eb5ca026",600:"1b26c7a3a244b55e655b",659:"e587447e2f9f84e3728c",766:"bfe2091bb2dacef5ecc1",786:"2b1dff6f5c6897181625",903:"3288c0b988311ecfdc2b"}[e]+".js",y.miniCssF=e=>"css/"+({244:"Authentication-Factors",562:"User-Management",600:"Identity-Provider-Integration"}[e]||e)+"."+{244:"0e2196cec81642eefc88",562:"e90f1c0d1e5a2980ab77",600:"66c4636176675176b23e",786:"d4c50665f97261e38664"}[e]+".css",y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),y.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="iam:",y.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,d;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var l=u[s];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+o){i=l;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,y.nc&&i.setAttribute("nonce",y.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),d&&document.head.appendChild(i)}},y.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},y.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{y.S={};var e={},r={};y.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];y.o(y.S,t)||(y.S[t]={}),y.S[t];var a=[];return e[t]=a.length?Promise.all(a).then((()=>e[t]=1)):1}}})(),y.p="/apps/iam/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],d=(typeof i)[0];if(a!=d)return"o"==a&&"n"==d||"s"==d||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(d=e[a]))[0]?"-":(n>0?".":"")+(n=2,d);return t}var i=[];for(a=1;a<e.length;a++){var d=e[a];i.push(0===d?"not("+u()+")":1===d?"("+u()+" || "+u()+")":2===d?i.pop()+" "+i.pop():o(d))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,d=1,u=!0;;d++,i++){var s,l,f=d<e.length?(typeof e[d])[0]:"";if(i>=r.length||"o"==(l=(typeof(s=r[i]))[0]))return!u||("u"==f?d>n&&!o:""==f!=o);if("u"==l){if(!u||"u"!=f)return!1}else if(u)if(f==l)if(d<=n){if(s!=e[d])return!1}else{if(o?s>e[d]:s<e[d])return!1;s!=e[d]&&(u=!1)}else if("s"!=f&&"n"!=f){if(o||d<=n)return!1;u=!1,d--}else{if(d<=n||l<f!=o)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,d--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},i=(e,r)=>{var t=y.S[e];if(!t||!y.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},d=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",s=(e,r,t,n)=>{var o=d(e,t);return a(n,o)||l(u(e,t,o,n)),f(e[t][o])},l=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),c=(e=>function(r,t,n,o){var a=y.I(r);return a&&a.then?a.then(e.bind(e,r,y.S[r],t,n,o)):e(r,y.S[r],t,n)})(((e,r,t,n)=>(i(e,t),s(r,0,t,n)))),p={},h={1680:()=>c("default","react",[4,18,2,0]),3645:()=>c("default","react-dom",[4,18,2,0]),5507:()=>c("default","react-router-dom",[1,6,21,3]),9694:()=>c("default","@scalprum/react-core",[0]),1903:()=>c("default","@unleash/proxy-client-react",[1,4,1,2])},m={125:[1680,3645,5507,9694],903:[1903]},v={},y.f.consumes=(e,r)=>{y.o(m,e)&&m[e].forEach((e=>{if(y.o(p,e))return r.push(p[e]);if(!v[e]){var t=r=>{p[e]=0,y.m[e]=t=>{delete y.c[e],t.exports=r()}};v[e]=!0;var n=r=>{delete p[e],y.m[e]=t=>{throw delete y.c[e],r}};try{var o=h[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},(()=>{if("undefined"!=typeof document){var e={180:0};y.f.miniCss=(r,t)=>{e[r]?t.push(e[r]):0!==e[r]&&{244:1,562:1,600:1,786:1}[r]&&t.push(e[r]=(e=>new Promise(((r,t)=>{var n=y.miniCssF(e),o=y.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",y.nc&&(a.nonce=y.nc),a.onerror=a.onload=t=>{if(a.onerror=a.onload=null,"load"===t.type)n();else{var i=t&&t.type,d=t&&t.target&&t.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+d+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=d,a.parentNode&&a.parentNode.removeChild(a),o(u)}},a.href=r,document.head.appendChild(a)})(e,o,0,r,t)})))(r).then((()=>{e[r]=0}),(t=>{throw delete e[r],t})))}}})(),(()=>{var e={180:0};y.f.j=(r,t)=>{var n=y.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(125|903)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=y.p+y.u(r),i=new Error;y.l(a,(t=>{if(y.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,d]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)y.o(i,n)&&(y.m[n]=i[n]);d&&d(y)}for(r&&r(t);u<a.length;u++)o=a[u],y.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkiam=self.webpackChunkiam||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),y(9589)})();
//# sourceMappingURL=../sourcemaps/App.4b2eccfe9191e1244df43ca08188e91a.js.map