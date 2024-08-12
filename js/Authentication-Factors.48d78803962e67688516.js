(self.webpackChunkiam=self.webpackChunkiam||[]).push([[244],{14082:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var n=a(21527),o=a.n(n),r=a(22021),i=a(22069),c=a(77334);const s=()=>o().createElement("div",{className:"disabledDiv"},o().createElement(c.Ay,{className:"lockIcon"}),o().createElement(r.h,{headingLevel:"h2",size:"xl",className:"pf-u-mt-lg"},"This page is temporarily disabled or unavailable at this time"),o().createElement(i.E,{className:"pf-u-mt-lg"},"Please check again at a another time or reach out to Red Hat customer service for additional support"))},41404:(e,t,a)=>{"use strict";function n(e){const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=JSON.parse(decodeURIComponent(window.atob(t).split("").map((e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2))).join("")));return a&&a.is_org_admin}function o(e,t,a,n){const o={};o[t]=e,n({...a,...o})}function r(e,t,a){let n=!1,o={};return Object.keys(t).forEach((a=>{const r=e&&e[a],i=t[a].inputType,c=function(e,t,a){if(!e)return{status:"error",message:"This field can not be left empty"};let n,o;switch(t){case"GENERAL":o=/^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/.test(e),n={status:o?"default":"error",message:o?"":"This text is invalid please check for uncommonly used characters"};break;case"DOMAIN":o=/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(e),n={status:o?"default":"error",message:o?"":"This field needs to be a valid URL"};break;default:n={status:"default",message:""}}return n}(r,i);"error"===c.status&&(n=!0),o[a]={inputType:i,status:c.status,message:c.message}})),a(o),n}a.d(t,{SS:()=>r,X2:()=>n,Xr:()=>o})},46835:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>O});var n=a(21527),o=a.n(n),r=a(15322),i=a(88095),c=a(22021),s=a(22069),l=a(72583),u=a(73133),m=a(56780),h=a(35600),d=a(83873),p=a(44461),f=a(27565),g=a(40167);const E=(0,a(68419).w)({name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0});var v=a(2896),y=a(11830),k=a(20881),b=a(5556);let z="",w="http://localhost:8081/auth/realms/redhat-external/apis/organizations/v1/my/authentication-policy";const A=({tokenData:e})=>{const t=(0,k.A)();"stage"===t.getEnvironment()?(w="https://sso.stage.redhat.com/auth/realms/redhat-external/apis/organizations/v1/my/authentication-policy",z="https://access.stage.redhat.com/documentation/en-us/red_hat_customer_portal/1/html/using_two-factor_authentication/con-ciam-2fa-about_two-factor-authentication"):"prod"===t.getEnvironment()&&(w="https://sso.redhat.com/auth/realms/redhat-external/apis/organizations/v1/my/authentication-policy",z="https://access.redhat.com/documentation/en-us/red_hat_customer_portal/1/html/using_two-factor_authentication/con-ciam-2fa-about_two-factor-authentication");const a=(0,v.wA)(),[r,i]=(0,n.useState)({checked:!1,changed:!1}),[b,A]=(0,n.useState)({loading:!0}),N=e=>{a((0,y.z8)({variant:"danger",description:e,title:"Error"}))},C=()=>{fetch(w,{method:"GET",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then((e=>e.json())).then((e=>{e.error?(console.error(e.error),N("Failed to fetch the current status")):(i({checked:e.authenticationFactors.otp.required,changed:!1}),A({loading:!1}))}))};return(0,n.useEffect)((()=>{C()}),[]),o().createElement(f.d8,null,o().createElement(u.l,null,o().createElement("div",null,o().createElement(c.h,{headingLevel:"h2",size:"xl"},"Organizational two-factor authentication"),o().createElement(s.E,{className:"primaryTextBox pf-u-mt-md"},"Enable organizational two-factor authentication to require all users to use a password and a one-time code to log in. When enabled, each user in your organization must install an authenticator application on a compatible mobile device in order to log in.",o().createElement(l.$n,{variant:"link",href:z,target:"_blank",component:"a",isInline:!0,icon:o().createElement(g.Ay,null),iconPosition:"right",className:"pf-u-ml-xs"},"Learn more about two-factor authentication")),o().createElement(m.g,{className:"pf-u-mt-md"},o().createElement(d.S,{onChange:()=>{i({checked:!r.checked,changed:!0})},label:"Enable two-factor authentication for your organization",id:"confirmed",className:"twofaCheck",isChecked:r.checked}),o().createElement(p.A,{"aria-label":"Advanced popover usages example",position:"right",hideOnOutsideClick:!0,enableFlip:!0,appendTo:()=>document.body,maxWidth:"18rem",minWidth:"2rem",bodyContent:o().createElement("div",null,"Users will be required to set up two-factor authentication the next time they attempt to log in."),children:o().createElement(l.$n,{id:"infoIcon",variant:"link",component:"span",isInline:!0,className:"questionIcon pf-u-ml-xs",icon:o().createElement(E,null)}),className:"pf-u-text-align-center"})),o().createElement(h.K,{className:"pf-u-mt-3xl"},o().createElement(l.$n,{onClick:()=>{const e={authenticationFactors:{otp:{required:!1}}};r.checked?e.authenticationFactors.otp.required=!0:e.authenticationFactors.otp.required=!1,t.auth.getToken().then((t=>{fetch(w,{method:"POST",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{e.error&&(console.error(e.error),N(e.error)),i({checked:e.authenticationFactors.otp.required,changed:!1}),a((0,y.z8)({variant:"success",description:"Authentication policy settings saved",title:"Success"}))}))}))},isDisabled:b.loading||!r.changed},"Save"),o().createElement(l.$n,{onClick:C,variant:"link",isInline:!0,className:"pf-u-ml-lg"},"Cancel")))))};A.propTypes={tokenData:a.n(b)().string};const N=A;var C=a(14082),x=a(77334);const _=()=>o().createElement("div",{className:"nonAdminDiv"},o().createElement(x.Ay,{className:"lockIcon"}),o().createElement(c.h,{headingLevel:"h2",size:"xl",className:"pf-u-mt-lg"},"You do not have access to Authentication Factors"),o().createElement(s.E,{className:"pf-u-mt-lg"},"Contact your organization administrator(s) for more information, or visit My User Access to learn more about your permissions."),o().createElement(l.$n,{variant:"link",onClick:()=>{window.location.href="/iam/my-user-access"},className:"pf-u-mt-lg"},"Go to landing page"));var T=a(24209),S=a(16401),F=a(41404);const O=()=>{const e=(0,k.A)();let t=null;const[a,c]=(0,n.useState)({adminUser:!1,twofadisplay:o().createElement(_,null)}),s=(0,i.useFlag)("iamconsole.authfactors.enabled");return(0,n.useEffect)((()=>{e?.appAction?.("authentication-factors"),e.auth.getToken().then((e=>{t=e,(0,F.X2)(t)&&s&&c({adminUser:!0,twofadisplay:o().createElement(N,{tokenData:t})}),s||c({adminUser:!1,twofadisplay:o().createElement(C.A,null)})}))}),[]),o().createElement(o().Fragment,null,!0===a.adminUser&&o().createElement("div",null,o().createElement(T.A,null,o().createElement(S.A,{title:"Authentication Factors",className:"pf-u-mb-lg"}),o().createElement("p",null," Manage authentication factors for your organization. ")),o().createElement(r.c,null)),a.twofadisplay)}},1537:()=>{},74895:()=>{},50545:()=>{},5937:()=>{},36752:()=>{}}]);