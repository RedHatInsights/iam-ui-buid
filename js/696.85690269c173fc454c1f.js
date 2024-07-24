"use strict";(self.webpackChunkiam_console=self.webpackChunkiam_console||[]).push([[696],{35696:(t,e,r)=>{r.r(e),r.d(e,{FlagContext:()=>A,FlagProvider:()=>D,InMemoryStorageProvider:()=>f,LocalStorageProvider:()=>p,UnleashClient:()=>U,default:()=>D,useFlag:()=>j,useFlags:()=>H,useFlagsStatus:()=>_,useUnleashClient:()=>K,useUnleashContext:()=>M,useVariant:()=>F});var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)};function i(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))}function s(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}"function"==typeof SuppressedError&&SuppressedError;var a={exports:{}};function c(){}c.prototype={on:function(t,e,r){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:r}),this},once:function(t,e,r){var n=this;function o(){n.off(t,o),e.apply(r,arguments)}return o._=e,this.on(t,o,r)},emit:function(t){for(var e=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=r.length;n<o;n++)r[n].fn.apply(r[n].ctx,e);return this},off:function(t,e){var r=this.e||(this.e={}),n=r[t],o=[];if(n&&e)for(var i=0,s=n.length;i<s;i++)n[i].fn!==e&&n[i].fn._!==e&&o.push(n[i]);return o.length?r[t]=o:delete r[t],this}},a.exports=c;var u=a.exports.TinyEmitter=c,l=function(t){return null!=t[1]},h=function(){},d=function(){function t(t){var e=t.onError,r=t.onSent,n=t.appName,o=t.metricsInterval,i=t.disableMetrics,s=void 0!==i&&i,a=t.url,c=t.clientKey,u=t.fetch,l=t.headerName,d=t.customHeaders,f=void 0===d?{}:d,p=t.metricsIntervalInitial;this.onError=e,this.onSent=r||h,this.disabled=s,this.metricsInterval=1e3*o,this.metricsIntervalInitial=1e3*p,this.appName=n,this.url=a instanceof URL?a:new URL(a),this.clientKey=c,this.bucket=this.createEmptyBucket(),this.fetch=u,this.headerName=l,this.customHeaders=f}return t.prototype.start=function(){var t=this;if(this.disabled)return!1;"number"==typeof this.metricsInterval&&this.metricsInterval>0&&(this.metricsIntervalInitial>0?setTimeout((function(){t.startTimer(),t.sendMetrics()}),this.metricsIntervalInitial):this.startTimer())},t.prototype.stop=function(){this.timer&&(clearTimeout(this.timer),delete this.timer)},t.prototype.createEmptyBucket=function(){return{start:new Date,stop:null,toggles:{}}},t.prototype.getHeaders=function(){var t,e=((t={})[this.headerName]=this.clientKey,t.Accept="application/json",t["Content-Type"]="application/json",t);return Object.entries(this.customHeaders).filter(l).forEach((function(t){var r=t[0],n=t[1];return e[r]=n})),e},t.prototype.sendMetrics=function(){return i(this,void 0,void 0,(function(){var t,e,r;return s(this,(function(n){switch(n.label){case 0:if(t="".concat(this.url,"/client/metrics"),e=this.getPayload(),this.bucketIsEmpty(e))return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.fetch(t,{cache:"no-cache",method:"POST",headers:this.getHeaders(),body:JSON.stringify(e)})];case 2:return n.sent(),this.onSent(e),[3,4];case 3:return r=n.sent(),console.error("Unleash: unable to send feature metrics",r),this.onError(r),[3,4];case 4:return[2]}}))}))},t.prototype.count=function(t,e){return!(this.disabled||!this.bucket||(this.assertBucket(t),this.bucket.toggles[t][e?"yes":"no"]++,0))},t.prototype.countVariant=function(t,e){return!(this.disabled||!this.bucket||(this.assertBucket(t),this.bucket.toggles[t].variants[e]?this.bucket.toggles[t].variants[e]+=1:this.bucket.toggles[t].variants[e]=1,0))},t.prototype.assertBucket=function(t){if(this.disabled||!this.bucket)return!1;this.bucket.toggles[t]||(this.bucket.toggles[t]={yes:0,no:0,variants:{}})},t.prototype.startTimer=function(){var t=this;this.timer=setInterval((function(){t.sendMetrics()}),this.metricsInterval)},t.prototype.bucketIsEmpty=function(t){return 0===Object.keys(t.bucket.toggles).length},t.prototype.getPayload=function(){var t=o(o({},this.bucket),{stop:new Date});return this.bucket=this.createEmptyBucket(),{bucket:t,appName:this.appName,instanceId:"browser"}},t}(),f=function(){function t(){this.store=new Map}return t.prototype.save=function(t,e){return i(this,void 0,void 0,(function(){return s(this,(function(r){return this.store.set(t,e),[2]}))}))},t.prototype.get=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){return[2,this.store.get(t)]}))}))},t}(),p=function(){function t(){this.prefix="unleash:repository"}return t.prototype.save=function(t,e){return i(this,void 0,void 0,(function(){var r,n;return s(this,(function(o){r=JSON.stringify(e),n="".concat(this.prefix,":").concat(t);try{window.localStorage.setItem(n,r)}catch(t){console.error(t)}return[2]}))}))},t.prototype.get=function(t){try{var e="".concat(this.prefix,":").concat(t),r=window.localStorage.getItem(e);return r?JSON.parse(r):void 0}catch(t){console.error(t)}},t}();let v;const g=new Uint8Array(16);function m(){if(!v&&(v="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(g)}const y=[];for(let t=0;t<256;++t)y.push((t+256).toString(16).slice(1));var b={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function w(t,e,r){if(b.randomUUID&&!e&&!t)return b.randomUUID();const n=(t=t||{}).random||(t.rng||m)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=n[t];return e}return function(t,e=0){return y[t[e+0]]+y[t[e+1]]+y[t[e+2]]+y[t[e+3]]+"-"+y[t[e+4]]+y[t[e+5]]+"-"+y[t[e+6]]+y[t[e+7]]+"-"+y[t[e+8]]+y[t[e+9]]+"-"+y[t[e+10]]+y[t[e+11]]+y[t[e+12]]+y[t[e+13]]+y[t[e+14]]+y[t[e+15]]}(n)}var E=function(){function t(){}return t.prototype.generateEventId=function(){return w()},t.prototype.createImpressionEvent=function(t,e,r,n,i,s){var a=this.createBaseEvent(t,e,r,n,i);return s?o(o({},a),{variant:s}):a},t.prototype.createBaseEvent=function(t,e,r,n,o){return{eventType:n,eventId:this.generateEventId(),context:t,enabled:e,featureName:r,impressionData:o}},t}(),x=["userId","sessionId","remoteAddress","currentTime"],I=function(t){return x.includes(t)},S="error",k="ready",T="impression",C={name:"disabled",enabled:!1,feature_enabled:!1},O="repo",U=function(t){function e(e){var r=e.storageProvider,n=e.url,i=e.clientKey,s=e.disableRefresh,a=void 0!==s&&s,c=e.refreshInterval,u=void 0===c?30:c,l=e.metricsInterval,h=void 0===l?30:l,v=e.metricsIntervalInitial,g=void 0===v?2:v,m=e.disableMetrics,y=void 0!==m&&m,b=e.appName,w=e.environment,x=void 0===w?"default":w,I=e.context,k=e.fetch,T=void 0===k?function(){try{if("undefined"!=typeof window&&"fetch"in window)return fetch.bind(window);if("fetch"in globalThis)return fetch.bind(globalThis)}catch(t){console.error('Unleash failed to resolve "fetch"',t)}}():k,C=e.createAbortController,O=void 0===C?function(){try{if("undefined"!=typeof window&&"AbortController"in window)return function(){return new window.AbortController};if("fetch"in globalThis)return function(){return new globalThis.AbortController}}catch(t){console.error('Unleash failed to resolve "AbortController" factory',t)}}():C,U=e.bootstrap,N=e.bootstrapOverride,A=void 0===N||N,R=e.headerName,P=void 0===R?"Authorization":R,D=e.customHeaders,j=void 0===D?{}:D,H=e.impressionDataAll,_=void 0!==H&&H,F=e.usePOSTrequests,M=void 0!==F&&F,K=t.call(this)||this;if(K.toggles=[],K.etag="",K.readyEventEmitted=!1,K.fetchedFromServer=!1,K.usePOSTrequests=!1,K.started=!1,!n)throw new Error("url is required");if(!i)throw new Error("clientKey is required");if(!b)throw new Error("appName is required.");return K.eventsHandler=new E,K.impressionDataAll=_,K.toggles=U&&U.length>0?U:[],K.url=n instanceof URL?n:new URL(n),K.clientKey=i,K.headerName=P,K.customHeaders=j,K.storage=r||("undefined"!=typeof window?new p:new f),K.refreshInterval=a?0:1e3*u,K.context=o({appName:b,environment:x},I),K.usePOSTrequests=M,K.sdkState="initializing",K.ready=new Promise((function(t){K.init().then(t).catch((function(e){console.error(e),K.sdkState="error",K.emit(S,e),K.lastError=e,t()}))})),T||console.error('Unleash: You must either provide your own "fetch" implementation or run in an environment where "fetch" is available.'),O||console.error('Unleash: You must either provide your own "AbortController" implementation or run in an environment where "AbortController" is available.'),K.fetch=T,K.createAbortController=O,K.bootstrap=U&&U.length>0?U:void 0,K.bootstrapOverride=A,K.metrics=new d({onError:K.emit.bind(K,S),onSent:K.emit.bind(K,"sent"),appName:b,metricsInterval:h,disableMetrics:y,url:K.url,clientKey:i,fetch:T,headerName:P,customHeaders:j,metricsIntervalInitial:g}),K}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.getAllToggles=function(){return function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}([],this.toggles,!0)},e.prototype.isEnabled=function(t){var e,r=this.toggles.find((function(e){return e.name===t})),n=!!r&&r.enabled;if(this.metrics.count(t,n),(null==r?void 0:r.impressionData)||this.impressionDataAll){var o=this.eventsHandler.createImpressionEvent(this.context,n,t,"isEnabled",null!==(e=null==r?void 0:r.impressionData)&&void 0!==e?e:void 0);this.emit(T,o)}return n},e.prototype.getVariant=function(t){var e,r=this.toggles.find((function(e){return e.name===t})),n=(null==r?void 0:r.enabled)||!1,i=r?r.variant:C;if(i.name&&this.metrics.countVariant(t,i.name),this.metrics.count(t,n),(null==r?void 0:r.impressionData)||this.impressionDataAll){var s=this.eventsHandler.createImpressionEvent(this.context,n,t,"getVariant",null!==(e=null==r?void 0:r.impressionData)&&void 0!==e?e:void 0,i.name);this.emit(T,s)}return o(o({},i),{feature_enabled:n})},e.prototype.updateToggles=function(){return i(this,void 0,void 0,(function(){var t=this;return s(this,(function(e){switch(e.label){case 0:return this.timerRef||this.fetchedFromServer?[4,this.fetchToggles()]:[3,2];case 1:return e.sent(),[3,4];case 2:return this.started?[4,new Promise((function(e){var r=function(){t.fetchToggles().then((function(){t.off(k,r),e()}))};t.once(k,r)}))]:[3,4];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))},e.prototype.updateContext=function(t){return i(this,void 0,void 0,(function(){var e;return s(this,(function(r){switch(r.label){case 0:return(t.appName||t.environment)&&console.warn("appName and environment are static. They can't be updated with updateContext."),e={environment:this.context.environment,appName:this.context.appName,sessionId:this.context.sessionId},this.context=o(o({},e),t),[4,this.updateToggles()];case 1:return r.sent(),[2]}}))}))},e.prototype.getContext=function(){return o({},this.context)},e.prototype.setContextField=function(t,e){var r,n;if(I(t))this.context=o(o({},this.context),((r={})[t]=e,r));else{var i=o(o({},this.context.properties),((n={})[t]=e,n));this.context=o(o({},this.context),{properties:i})}this.updateToggles()},e.prototype.removeContextField=function(t){var e;I(t)?this.context=o(o({},this.context),((e={})[t]=void 0,e)):"object"==typeof this.context.properties&&delete this.context.properties[t],this.updateToggles()},e.prototype.init=function(){return i(this,void 0,void 0,(function(){var t,e;return s(this,(function(r){switch(r.label){case 0:return[4,this.resolveSessionId()];case 1:return t=r.sent(),this.context=o({sessionId:t},this.context),e=this,[4,this.storage.get(O)];case 2:return e.toggles=r.sent()||[],!this.bootstrap||!this.bootstrapOverride&&0!==this.toggles.length?[3,4]:[4,this.storage.save(O,this.bootstrap)];case 3:r.sent(),this.toggles=this.bootstrap,this.sdkState="healthy",this.readyEventEmitted=!0,this.emit(k),r.label=4;case 4:return this.sdkState="healthy",this.emit("initialized"),[2]}}))}))},e.prototype.start=function(){return i(this,void 0,void 0,(function(){var t,e=this;return s(this,(function(r){switch(r.label){case 0:return this.started=!0,this.timerRef?(console.error("Unleash SDK has already started, if you want to restart the SDK you should call client.stop() before starting again."),[2]):[4,this.ready];case 1:return r.sent(),this.metrics.start(),t=this.refreshInterval,[4,this.fetchToggles()];case 2:return r.sent(),t>0&&(this.timerRef=setInterval((function(){return e.fetchToggles()}),t)),[2]}}))}))},e.prototype.stop=function(){this.timerRef&&(clearInterval(this.timerRef),this.timerRef=void 0),this.metrics.stop()},e.prototype.isReady=function(){return this.readyEventEmitted},e.prototype.getError=function(){return"error"===this.sdkState?this.lastError:void 0},e.prototype.resolveSessionId=function(){return i(this,void 0,void 0,(function(){var t;return s(this,(function(e){switch(e.label){case 0:return this.context.sessionId?[2,this.context.sessionId]:[4,this.storage.get("sessionId")];case 1:return(t=e.sent())?[3,3]:(t=Math.floor(1e9*Math.random()),[4,this.storage.save("sessionId",t)]);case 2:e.sent(),e.label=3;case 3:return[2,t]}}))}))},e.prototype.getHeaders=function(){var t,e=this.usePOSTrequests,r=((t={})[this.headerName]=this.clientKey,t.Accept="application/json",t);return e&&(r["Content-Type"]="application/json"),this.etag&&(r["If-None-Match"]=this.etag),Object.entries(this.customHeaders).filter(l).forEach((function(t){var e=t[0],n=t[1];return r[e]=n})),r},e.prototype.storeToggles=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return this.toggles=t,this.emit("update"),[4,this.storage.save(O,t)];case 1:return e.sent(),[2]}}))}))},e.prototype.fetchToggles=function(){var t;return i(this,void 0,void 0,(function(){var e,r,n,o,i,a,c,u;return s(this,(function(s){switch(s.label){case 0:if(!this.fetch)return[3,9];this.abortController&&this.abortController.abort(),this.abortController=null===(t=this.createAbortController)||void 0===t?void 0:t.call(this),e=this.abortController?this.abortController.signal:void 0,s.label=1;case 1:return s.trys.push([1,7,8,9]),r=this.usePOSTrequests,n=r?this.url:function(t,e){var r=new URL(t.toString());return Object.entries(e).filter(l).forEach((function(t){var e=t[0],n=t[1];"properties"===e&&n?Object.entries(n).filter(l).forEach((function(t){var e=t[0],n=t[1];return r.searchParams.append("properties[".concat(e,"]"),n)})):r.searchParams.append(e,n)})),r}(this.url,this.context),o=r?"POST":"GET",i=r?JSON.stringify({context:this.context}):void 0,[4,this.fetch(n.toString(),{method:o,cache:"no-cache",headers:this.getHeaders(),body:i,signal:e})];case 2:return a=s.sent(),"error"===this.sdkState&&a.status<400&&(this.sdkState="healthy",this.emit("recovered")),a.ok&&304!==a.status?(this.etag=a.headers.get("ETag")||"",[4,a.json()]):[3,5];case 3:return c=s.sent(),[4,this.storeToggles(c.toggles)];case 4:return s.sent(),"healthy"!==this.sdkState&&(this.sdkState="healthy"),this.fetchedFromServer||(this.fetchedFromServer=!0,this.readyEventEmitted=!0,this.emit(k)),[3,6];case 5:a.ok||304===a.status||(console.error("Unleash: Fetching feature toggles did not have an ok response"),this.sdkState="error",this.emit(S,{type:"HttpError",code:a.status}),this.lastError={type:"HttpError",code:a.status}),s.label=6;case 6:return[3,9];case 7:return(u=s.sent())instanceof DOMException&&"AbortError"===u.name||(console.error("Unleash: unable to fetch feature toggles",u),this.sdkState="error",this.emit(S,u),this.lastError=u),[3,9];case 8:return this.abortController=null,[7];case 9:return[2]}}))}))},e}(u),N=r(21527);const A=N.createContext(null),R={bootstrap:[],disableRefresh:!0,disableMetrics:!0,url:"http://localhost",appName:"offline",clientKey:"not-used"},P=N.startTransition||(t=>t()),D=({config:t,children:e,unleashClient:r,startClient:n=!0,stopClient:o=!0})=>{var i,s,a;const c=t||R,u=N.useRef(r||new U(c)),[l,h]=N.useState(!!(r?null!=t&&t.bootstrap&&!1!==(null==t?void 0:t.bootstrapOverride)||null!=(i=r.isReady)&&i.call(r):c.bootstrap&&!1!==c.bootstrapOverride)),[d,f]=(0,N.useState)((null==(a=(s=u.current).getError)?void 0:a.call(s))||null);(0,N.useEffect)((()=>{!c&&!r&&console.error("You must provide either a config or an unleash client to the flag provider.\n        If you are initializing the client in useEffect, you can avoid this warning\n        by checking if the client exists before rendering.");const t=t=>{P((()=>{f((e=>e||t))}))},e=t=>{P((()=>{f(null)}))};let i=null;const s=()=>{i=setTimeout((()=>{P((()=>{h(!0)}))}),0)};return u.current.on("ready",s),u.current.on("error",t),u.current.on("recovered",e),n&&(u.current.stop(),u.current.start()),function(){u.current&&(u.current.off("error",t),u.current.off("ready",s),u.current.off("recovered",e),o&&u.current.stop()),i&&clearTimeout(i)}}),[]);const p=(0,N.useMemo)((()=>({on:(t,e,r)=>u.current.on(t,e,r),off:(t,e)=>u.current.off(t,e),updateContext:async t=>await u.current.updateContext(t),isEnabled:t=>u.current.isEnabled(t),getVariant:t=>u.current.getVariant(t),client:u.current,flagsReady:l,flagsError:d,setFlagsReady:h,setFlagsError:f})),[l,d]);return N.createElement(A.Provider,{value:p},e)},j=t=>{const{isEnabled:e,client:r}=(0,N.useContext)(A),[n,o]=(0,N.useState)(!!e(t)),i=(0,N.useRef)();return i.current=n,(0,N.useEffect)((()=>{if(!r)return;const n=()=>{const r=e(t);r!==i.current&&(i.current=r,o(!!r))},s=()=>{const r=e(t);i.current=r,o(r)};return r.on("update",n),r.on("ready",s),()=>{r.off("update",n),r.off("ready",s)}}),[r]),n},H=()=>{const{client:t}=(0,N.useContext)(A),[e,r]=(0,N.useState)(t.getAllToggles());return(0,N.useEffect)((()=>{const e=()=>{r(t.getAllToggles())};return t.on("update",e),()=>{t.off("update",e)}}),[]),e},_=()=>{const{flagsReady:t,flagsError:e}=(0,N.useContext)(A);return{flagsReady:t,flagsError:e}},F=t=>{const{getVariant:e,client:r}=(0,N.useContext)(A),[n,o]=(0,N.useState)(e(t)),i=(0,N.useRef)({name:n.name,enabled:n.enabled});return i.current=n,(0,N.useEffect)((()=>{if(!r)return;const n=()=>{const r=e(t);((t,e)=>{var r,n,o,i;return!(t.name===(null==e?void 0:e.name)&&t.enabled===(null==e?void 0:e.enabled)&&t.feature_enabled===(null==e?void 0:e.feature_enabled)&&(null==(r=t.payload)?void 0:r.type)===(null==(n=null==e?void 0:e.payload)?void 0:n.type)&&(null==(o=t.payload)?void 0:o.value)===(null==(i=null==e?void 0:e.payload)?void 0:i.value))})(i.current,r)&&(o(r),i.current=r)},s=()=>{const r=e(t);i.current.name=null==r?void 0:r.name,i.current.enabled=null==r?void 0:r.enabled,o(r)};return r.on("update",n),r.on("ready",s),()=>{r.off("update",n),r.off("ready",s)}}),[r]),n||{}},M=()=>{const{updateContext:t}=(0,N.useContext)(A);return t},K=()=>{const{client:t}=(0,N.useContext)(A);return t}}}]);