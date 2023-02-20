/*! For license information please see Authentication-Factors.385169010cf3902a9ae0.js.LICENSE.txt */
(self.webpackChunkiam_console=self.webpackChunkiam_console||[]).push([[402],{9225:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a});const a=(0,n(7245).IU)({name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0})},9332:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>r,mB:()=>a});const a=(0,n(7245).IU)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0}),r=a},4453:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var a=n(181);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(e){c=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw r}}return o}}(e,t)||(0,a.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(2950),i=n.n(o),c=n(6113),l=n(3669),s=n(9390),u=n(9225);const h=(0,n(7245).IU)({name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0});var m=n(3215),f="",d="http://localhost:8081/auth/realms/redhat-external/apis/organizations/v1/my/authentication-policy";"stage"===insights.chrome.getEnvironment()?(d="https://sso.stage.redhat.com/auth/realms/redhat-external/apis/organizations/v1/my/authentication-policy",f="https://access.stage.redhat.com/documentation/en-us/red_hat_customer_portal/1/html/using_two-factor_authentication/con-ciam-2fa-about_two-factor-authentication"):"prod"===insights.chrome.getEnvironment()&&(d="https://sso.redhat.com/auth/realms/redhat-external/apis/organizations/v1/my/authentication-policy",f="https://access.redhat.com/documentation/en-us/red_hat_customer_portal/1/html/using_two-factor_authentication/con-ciam-2fa-about_two-factor-authentication");const p=function(e){var t=(0,c.I0)(),n=r((0,o.useState)({checked:!1,changed:!1}),2),a=n[0],s=n[1],p=r((0,o.useState)({loading:!0}),2),g=p[0],v=p[1],y=function(){fetch(d,{method:"GET",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.tokenData}}).then((function(e){return e.json()})).then((function(e){e.error?(console.error(e.error),b("Failed to fetch the current status")):(s({checked:e.authenticationFactors.otp.required,changed:!1}),v({loading:!1}))}))};(0,o.useEffect)((function(){y()}),[]);var b=function(e){t((0,m.wN)({variant:"danger",description:e,title:"Error"}))};return i().createElement(l.PageSection,null,i().createElement(l.Form,null,i().createElement("div",null,i().createElement(l.Title,{headingLevel:"h2",size:"xl"},"Organizational two-factor authentication"),i().createElement(l.Text,{className:"primaryTextBox pf-u-mt-md"},"Enable organizational two-factor authentication to require all users to use a password and a one-time code to log in. When enabled, each user in your organization must install an authenticator application on a compatible mobile device in order to log in.",i().createElement(l.Button,{variant:"link",href:f,target:"_blank",component:"a",isInline:!0,icon:i().createElement(u.ZP,null),iconPosition:"right",className:"pf-u-ml-xs"},"Learn more about two-factor authentication")),i().createElement(l.FormGroup,{className:"pf-u-mt-md"},i().createElement(l.Checkbox,{onChange:function(){s({checked:!a.checked,changed:!0})},label:"Enable two-factor authentication for your organization",id:"confirmed",className:"twofaCheck",isChecked:a.checked}),i().createElement(l.Button,{id:"infoIcon",variant:"link",component:"span",isInline:!0,className:"questionIcon pf-u-ml-xs",icon:i().createElement(h,null)}),i().createElement(l.Popover,{"aria-label":"Advanced popover usages example",position:"right",hideOnOutsideClick:!0,enableFlip:!0,appendTo:function(){return document.body},maxWidth:"18rem",minWidth:"2rem",bodyContent:i().createElement("div",null,"Users will be required to set up two-factor authentication the next time they attempt to log in."),reference:function(){return document.getElementById("infoIcon")},className:"pf-u-text-align-center"})),i().createElement(l.ActionGroup,{className:"pf-u-mt-3xl"},i().createElement(l.Button,{onClick:function(e){var n={authenticationFactors:{otp:{required:!1}}};a.checked?n.authenticationFactors.otp.required=!0:n.authenticationFactors.otp.required=!1,insights.chrome.auth.getToken().then((function(e){fetch(d,{method:"POST",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.error&&(console.error(e.error),b(e.error)),s({checked:e.authenticationFactors.otp.required,changed:!1}),t((0,m.wN)({variant:"success",description:"Authentication policy settings saved",title:"Success"}))}))}))},isDisabled:g.loading||!a.changed},"Save"),i().createElement(l.Button,{onClick:y,variant:"link",isInline:!0,className:"pf-u-ml-lg"},"Cancel")))))};var g=n(9332);const v=function(e){return i().createElement("div",{className:"disabledDiv"},i().createElement(g.ZP,{className:"lockIcon"}),i().createElement(l.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-lg"},"This page is temporarily disabled or unavailable at this time"),i().createElement(l.Text,{className:"pf-u-mt-lg"},"Please check again at a another time or reach out to Red Hat customer service for additional support"))},y=function(e){return i().createElement("div",{className:"nonAdminDiv"},i().createElement(g.ZP,{className:"lockIcon"}),i().createElement(l.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-lg"},"You do not have access to Authentication Factors"),i().createElement(l.Text,{className:"pf-u-mt-lg"},"Contact your organization administrator(s) for more information, or visit My User Access to learn more about your permissions."),i().createElement(l.Button,{className:"pf-u-mt-lg"},"Go to landing page"))};var b=n(5893),E=n(4184),w=n.n(E);const x=i().createContext("light");var k=function(){return k=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},k.apply(this,arguments)};const O=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","children"]),r=w()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,b.jsx)(x.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var i=w()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,b.jsx)("section",k({},a,{className:"".concat(r," ").concat(i),"widget-type":"InsightsPageHeader"},{children:n}))}})};var N=function(){return N=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},N.apply(this,arguments)};const C=function(e){var t=e.className,n=e.title,a=w()(t);return(0,b.jsx)(l.Title,N({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))},P=function(){var e=null,t=r((0,o.useState)({adminUser:!1,twofadisplay:i().createElement(y,null)}),2),n=t[0],a=t[1],c=(0,s.useFlag)("iamconsole.authfactors.enabled");return(0,o.useEffect)((function(){var t,n,r;null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(r=n.appAction)||void 0===r||r.call(n,"authentication-factors"),insights.chrome.auth.getToken().then((function(t){(function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=JSON.parse(decodeURIComponent(window.atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")));return n&&n.is_org_admin})(e=t)&&c&&a({adminUser:!0,twofadisplay:i().createElement(p,{tokenData:e})}),c||a({adminUser:!1,twofadisplay:i().createElement(v,null)})}))}),[]),i().createElement(i().Fragment,null,!0===n.adminUser&&i().createElement("div",null,i().createElement(O,null,i().createElement(C,{title:"Authentication Factors",className:"pf-u-mb-lg"}),i().createElement("p",null," Manage authentication factors for your organization. ")),i().createElement(l.Divider,null)),n.twofadisplay)}},4184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);