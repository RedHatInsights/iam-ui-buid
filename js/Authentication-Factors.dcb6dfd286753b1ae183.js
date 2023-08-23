/*! For license information please see Authentication-Factors.dcb6dfd286753b1ae183.js.LICENSE.txt */
(self.webpackChunkiam_console=self.webpackChunkiam_console||[]).push([[402],{9225:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>r});const r=(0,n(7245).IU)({name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0})},9332:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a,mB:()=>r});const r=(0,n(7245).IU)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0}),a=r},4453:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var r=n(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(2950),i=n.n(o),c=n(3669),s=n(9390),l=n(9225);const u=(0,n(7245).IU)({name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0});var p=n(6113),f=n(3215),h=n(5697),m=n.n(h),d="",g="http://localhost:8081/auth/realms/redhat-external/apis/organizations/v1/my/authentication-policy";"stage"===insights.chrome.getEnvironment()?(g="https://sso.stage.redhat.com/auth/realms/redhat-external/apis/organizations/v1/my/authentication-policy",d="https://access.stage.redhat.com/documentation/en-us/red_hat_customer_portal/1/html/using_two-factor_authentication/con-ciam-2fa-about_two-factor-authentication"):"prod"===insights.chrome.getEnvironment()&&(g="https://sso.redhat.com/auth/realms/redhat-external/apis/organizations/v1/my/authentication-policy",d="https://access.redhat.com/documentation/en-us/red_hat_customer_portal/1/html/using_two-factor_authentication/con-ciam-2fa-about_two-factor-authentication");var y=function(e){var t=(0,p.I0)(),n=a((0,o.useState)({checked:!1,changed:!1}),2),r=n[0],s=n[1],h=a((0,o.useState)({loading:!0}),2),m=h[0],y=h[1],v=function(e){t((0,f.wN)({variant:"danger",description:e,title:"Error"}))},b=function(){fetch(g,{method:"GET",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.tokenData}}).then((function(e){return e.json()})).then((function(e){e.error?(console.error(e.error),v("Failed to fetch the current status")):(s({checked:e.authenticationFactors.otp.required,changed:!1}),y({loading:!1}))}))};return(0,o.useEffect)((function(){b()}),[]),i().createElement(c.PageSection,null,i().createElement(c.Form,null,i().createElement("div",null,i().createElement(c.Title,{headingLevel:"h2",size:"xl"},"Organizational two-factor authentication"),i().createElement(c.Text,{className:"primaryTextBox pf-u-mt-md"},"Enable organizational two-factor authentication to require all users to use a password and a one-time code to log in. When enabled, each user in your organization must install an authenticator application on a compatible mobile device in order to log in.",i().createElement(c.Button,{variant:"link",href:d,target:"_blank",component:"a",isInline:!0,icon:i().createElement(l.ZP,null),iconPosition:"right",className:"pf-u-ml-xs"},"Learn more about two-factor authentication")),i().createElement(c.FormGroup,{className:"pf-u-mt-md"},i().createElement(c.Checkbox,{onChange:function(){s({checked:!r.checked,changed:!0})},label:"Enable two-factor authentication for your organization",id:"confirmed",className:"twofaCheck",isChecked:r.checked}),i().createElement(c.Button,{id:"infoIcon",variant:"link",component:"span",isInline:!0,className:"questionIcon pf-u-ml-xs",icon:i().createElement(u,null)}),i().createElement(c.Popover,{"aria-label":"Advanced popover usages example",position:"right",hideOnOutsideClick:!0,enableFlip:!0,appendTo:function(){return document.body},maxWidth:"18rem",minWidth:"2rem",bodyContent:i().createElement("div",null,"Users will be required to set up two-factor authentication the next time they attempt to log in."),reference:function(){return document.getElementById("infoIcon")},className:"pf-u-text-align-center"})),i().createElement(c.ActionGroup,{className:"pf-u-mt-3xl"},i().createElement(c.Button,{onClick:function(){var e={authenticationFactors:{otp:{required:!1}}};r.checked?e.authenticationFactors.otp.required=!0:e.authenticationFactors.otp.required=!1,insights.chrome.auth.getToken().then((function(n){fetch(g,{method:"POST",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.error&&(console.error(e.error),v(e.error)),s({checked:e.authenticationFactors.otp.required,changed:!1}),t((0,f.wN)({variant:"success",description:"Authentication policy settings saved",title:"Success"}))}))}))},isDisabled:m.loading||!r.changed},"Save"),i().createElement(c.Button,{onClick:b,variant:"link",isInline:!0,className:"pf-u-ml-lg"},"Cancel")))))};y.propTypes={tokenData:m().string};const v=y;var b=n(9332);const O=function(){return i().createElement("div",{className:"disabledDiv"},i().createElement(b.ZP,{className:"lockIcon"}),i().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-lg"},"This page is temporarily disabled or unavailable at this time"),i().createElement(c.Text,{className:"pf-u-mt-lg"},"Please check again at a another time or reach out to Red Hat customer service for additional support"))},E=function(){return i().createElement("div",{className:"nonAdminDiv"},i().createElement(b.ZP,{className:"lockIcon"}),i().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-lg"},"You do not have access to Authentication Factors"),i().createElement(c.Text,{className:"pf-u-mt-lg"},"Contact your organization administrator(s) for more information, or visit My User Access to learn more about your permissions."),i().createElement(c.Button,{variant:"link",onClick:function(){window.location.href="/iam/my-user-access"},className:"pf-u-mt-lg"},"Go to landing page"))};var w=n(5893),_=n(4184),k=n.n(_);const x=i().createContext("light");var j=function(){return j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},j.apply(this,arguments)};const P=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),a=k()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,w.jsx)(x.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var i=k()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,w.jsx)("section",j({},r,{className:"".concat(a," ").concat(i),"widget-type":"InsightsPageHeader"},{children:n}))}})};var N=function(){return N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},N.apply(this,arguments)};const T=function(e){var t=e.className,n=e.title,r=k()(t);return(0,w.jsx)(c.Title,N({headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},{children:n}))},C=function(){var e=null,t=a((0,o.useState)({adminUser:!1,twofadisplay:i().createElement(E,null)}),2),n=t[0],r=t[1],l=(0,s.useFlag)("iamconsole.authfactors.enabled");return(0,o.useEffect)((function(){var t,n,a;null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.appAction)||void 0===a||a.call(n,"authentication-factors"),insights.chrome.auth.getToken().then((function(t){(function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=JSON.parse(decodeURIComponent(window.atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")));return n&&n.is_org_admin})(e=t)&&l&&r({adminUser:!0,twofadisplay:i().createElement(v,{tokenData:e})}),l||r({adminUser:!1,twofadisplay:i().createElement(O,null)})}))}),[]),i().createElement(i().Fragment,null,!0===n.adminUser&&i().createElement("div",null,i().createElement(P,null,i().createElement(T,{title:"Authentication Factors",className:"pf-u-mb-lg"}),i().createElement("p",null," Manage authentication factors for your organization. ")),i().createElement(c.Divider,null)),n.twofadisplay)}},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var o,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in o=Object(arguments[s]))n.call(o,l)&&(c[l]=o[l]);if(t){i=t(o);for(var u=0;u<i.length;u++)r.call(o,i[u])&&(c[i[u]]=o[i[u]])}}return c}},2703:(e,t,n)=>{"use strict";var r=n(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5251:(e,t,n)=>{"use strict";n(7418);var r=n(2950),a=60103;if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),o("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:i.current}}t.jsx=l,t.jsxs=l},5893:(e,t,n)=>{"use strict";e.exports=n(5251)}}]);