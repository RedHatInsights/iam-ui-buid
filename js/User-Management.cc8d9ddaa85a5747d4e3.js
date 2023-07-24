/*! For license information please see User-Management.cc8d9ddaa85a5747d4e3.js.LICENSE.txt */
(self.webpackChunkiam_console=self.webpackChunkiam_console||[]).push([[864],{9332:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a,mB:()=>r});const r=(0,n(7245).IU)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0}),a=r},9376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(5893),a=n(4184),o=n.n(a),c=n(2950);const l=n.n(c)().createContext("light");var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};const s=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),c=o()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(l.Consumer,{children:function(e){var t,l;void 0===e&&(e="light");var s=o()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return(0,r.jsx)("section",i({},a,{className:"".concat(c," ").concat(s),"widget-type":"InsightsPageHeader"},{children:n}))}})}},9173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(5893),a=n(4184),o=n.n(a),c=n(154),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};const i=function(e){var t=e.className,n=e.title,a=o()(t);return(0,r.jsx)(c.Title,l({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},1279:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(2950),a=n.n(r),o=n(154),c=n(9332);const l=function(e){return a().createElement("div",{className:"disabledDiv"},a().createElement(c.ZP,{className:"lockIcon"}),a().createElement(o.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-lg"},"This page is temporarily disabled or unavailable at this time"),a().createElement(o.Text,{className:"pf-u-mt-lg"},"Please check again at a another time or reach out to Red Hat customer service for additional support"))}},4747:(e,t,n)=>{"use strict";n.d(t,{AS:()=>i,VN:()=>c,Xj:()=>l});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=JSON.parse(decodeURIComponent(window.atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")));return n&&n.is_org_admin}function l(e,t,n,r){var a={};a[t]=e,r(o(o({},n),a))}function i(e,t,n){var r=!1,a={};return Object.keys(t).forEach((function(n){var o=e&&e[n],c=t[n].inputType,l=function(e,t,n){if(!e)return{status:"error",message:"This field can not be left empty"};var r={},a="";switch(t){case"GENERAL":r={status:(a=/^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/.test(e))?"default":"error",message:a?"":"This text is invalid please check for uncommonly used characters"};break;case"DOMAIN":r={status:(a=/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(e))?"default":"error",message:a?"":"This field needs to be a valid URL"};break;default:r={status:"default",message:""}}return r}(o,c);"error"===l.status&&(r=!0),a[n]={inputType:c,status:l.status,message:l.message}})),n(a),r}},4801:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(885),a=n(2950),o=n.n(a),c=n(4942),l=n(9376),i=n(9173),s=n(154),u=n(3444);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const p=function(e){var t=(0,a.useContext)(O),n=(0,a.useState)([]),l=(0,r.Z)(n,2),i=l[0],d=l[1],p=(0,a.useState)({}),f=(0,r.Z)(p,2),h=f[0],g=f[1],b=(0,a.useState)(10),y=(0,r.Z)(b,2),E=y[0],v=y[1],j=(0,a.useState)(0),C=(0,r.Z)(j,2),w=C[0],P=C[1],k=(0,a.useState)(20),T=(0,r.Z)(k,2),S=T[0];T[1],(0,a.useEffect)((function(){var e;e=t.accountAPI+"/"+t.accountID+"/users?",e+=new URLSearchParams({firstResultIndex:w,maxResults:E}),fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.userToken}}).then((function(e){return e.json()})).then((function(e){d(e.body);for(var t={},n=0;n<e.body.length;n++){var r={status:e.body[n].user.status,username:e.body[n].user.username,checked:!1};t[e.body[n].user.id]=r}g(t)}))}),[w]);var I=function(){for(var e,n=Object.keys(h),r=0;r<n.length;r++)if(h[n[r]].checked){e=n[r];break}e&&fetch(t.accountAPI+"/"+t.accountID+"/users/"+e+"/status",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.userToken},body:JSON.stringify({status:"disabled"})}).then((function(e){return e.json()})).then((function(e){window.location.reload(!1)}))},_=function(){for(var n,r=Object.keys(h),a=0;a<r.length;a++)if(h[r[a]].checked){n=r[a];break}n&&fetch(t.accountAPI+"/"+t.accountID+"/users/"+n,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.userToken}}).then((function(e){return e.json()})).then((function(t){e.triggerEditUser(t.body)}))},x=function(){P(w+E)},N=function(){P(w-E)},D=function(){return i.length>0?o().createElement("div",null,o().createElement(s.Toolbar,{id:"userListToolbar"},o().createElement(s.ToolbarContent,null,o().createElement(s.ToolbarItem,null,o().createElement(s.SearchInput,{"aria-label":"Search user list"})),o().createElement(s.ToolbarItem,null,o().createElement(s.Button,{onClick:e.triggerAddUser,variant:"primary"},"Add User")),o().createElement(s.ToolbarItem,null,o().createElement(s.Button,{onClick:_,variant:"primary"},"Edit User")),o().createElement(s.ToolbarItem,null,o().createElement(s.Button,{onClick:I,variant:"link"},"Disable User")))),o().createElement(u.TableComposable,{"aria-label":"Sortable table"},o().createElement(u.Thead,null,o().createElement(u.Tr,null,o().createElement(u.Th,{select:{onSelect:function(e,t){},isSelected:void 0}}),o().createElement(u.Th,null,"Name"),o().createElement(u.Th,{modifier:"wrap"},"Email"),o().createElement(u.Th,{modifier:"wrap",info:{tooltip:"More information "}},"LastName"),o().createElement(u.Th,{modifier:"wrap"},"First Name"),o().createElement(u.Th,{modifier:"wrap"},"Status"))),o().createElement(u.Tbody,null,i.map((function(e,t){return o().createElement(u.Tr,{key:e.user.username},o().createElement(u.Td,null,o().createElement(s.Checkbox,{onChange:function(t){return n=e.user.id,r=t,(a=h[n]).checked=!!r,void g(m(m({},h),{},(0,c.Z)({},n,a)));var n,r,a},isChecked:h[e.user.id].checked,id:e.user.id+"-check"})),o().createElement(u.Td,null,e.user.username),o().createElement(u.Td,null,e.user.email),o().createElement(u.Td,null,e.user.lastName),o().createElement(u.Td,null,e.user.firstName),o().createElement(u.Td,null,e.user.status))})))),o().createElement(s.Pagination,{perPageComponent:"button",widgetId:"bottom-pagination",itemCount:S,perPage:E,variant:s.PaginationVariant.bottom,onPerPageSelect:function(e){v(e)},onNextClick:x,onPreviousClick:N,page:w})):o().createElement("div",null,"spinner ....")};return o().createElement("div",null,o().createElement(D,null))};var f=n(2982);const h=function(e){var t=o().useState(!1),n=(0,r.Z)(t,2),a=n[0],c=n[1],l=o().useState(e.defaultText),i=(0,r.Z)(l,2),u=i[0],d=i[1];return o().createElement(s.Dropdown,{onSelect:function(){c(!1),document.getElementById(e.idValue).focus()},toggle:o().createElement(s.DropdownToggle,{id:e.idValue,onToggle:function(e){c(e)}},u),isOpen:a,dropdownItems:e.items.map((function(t){return o().createElement(s.DropdownItem,{key:t,onClick:function(){e.onSelect(t),d(t)}},t)}))})};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const y=function(e){var t=(0,a.useContext)(O),n=(0,a.useState)([]),l=(0,r.Z)(n,2),i=l[0],u=l[1],d=(0,a.useState)(!1),m=(0,r.Z)(d,2),p=m[0],g=m[1],y=(0,a.useState)({salutation:"",firstName:"",lastName:"",email:"",address:{city:"",country:"",county:"",state:"",streets:[],zipCode:""},permissions:[""],phone:"",roles:[],username:""}),E=(0,r.Z)(y,2),v=E[0],j=E[1];(0,a.useEffect)((function(){e.editingUser&&(g(!0),j(e.editingUser))}),[]);var C=(0,a.useState)({portal_manage_subscriptions:!1,portal_download:!1,portal_system_management:!1,portal_manage_cases:!1,admin:!1}),w=(0,r.Z)(C,2),P=w[0],k=w[1],T=function(e,t){var n=(0,f.Z)(v.address.streets);n[t]=e;var r=b({},v.address);r.streets=n,j(b(b({},v),{},{address:r}))},S=function(e,t){var n=b({},v.address);n[e]=t,j(b(b({},v),{},{address:n}))},I=function(e){var t=b({},P);t[e]=!P[e],k(t);for(var n=Object.keys(t),r=[],a=0;a<n.length;a++)!0===t[n[a]]&&("admin"===n[a]?j(b(b({},v),{},{roles:["organization_administrator"]})):(r.push(n[a]),j(b(b({},v),{},{permissions:r}))))};return o().createElement("div",null,o().createElement(s.Form,null,o().createElement("div",null,o().createElement(s.AlertGroup,{isLiveRegion:!0},i)),o().createElement(s.Card,null,o().createElement(s.CardHeader,null,"Name"),o().createElement(s.CardBody,null,o().createElement(s.FormGroup,null,o().createElement(h,{items:["Mr.","Mrs.","Other"],idValue:"greetingDropdown",defaultText:"Greeting",onSelect:function(e){var t;t=e,j(b(b({},v),{},(0,c.Z)({},"salutation",t)))}})),o().createElement(s.FormGroup,{label:"First Name"},o().createElement(s.TextInput,{id:"firstName",onChange:function(e){j(b(b({},v),{},{firstName:e}))},value:v.firstName})),o().createElement(s.FormGroup,{label:"Last Name"},o().createElement(s.TextInput,{id:"lastName",onChange:function(e){j(b(b({},v),{},{lastName:e}))},value:v.lastName})))),o().createElement(s.Card,null,o().createElement(s.CardHeader,null,"Address"),o().createElement(s.CardBody,null,o().createElement(s.FormGroup,{label:"Email"},o().createElement(s.TextInput,{id:"email",onChange:function(e){j(b(b({},v),{},{email:e}))},value:v.email})),o().createElement(s.FormGroup,{label:"Address Line 1"},o().createElement(s.TextInput,{id:"address1",onChange:function(e){T(e,0)},value:v.address.streets[0]})),o().createElement(s.FormGroup,{label:"Address Line 2"},o().createElement(s.TextInput,{id:"address2",onChange:function(e){T(e,1)},value:v.address.streets[1]})),o().createElement(s.FormGroup,{label:"Address Line 3"},o().createElement(s.TextInput,{id:"address3",onChange:function(e){T(e,2)},value:v.address.streets[2]})),o().createElement(s.FormGroup,{label:"Postal Code"},o().createElement(s.TextInput,{id:"postalcode",onChange:function(e){S("zipCode",e)},value:v.address.zipCode})),o().createElement(s.FormGroup,{label:"City"},o().createElement(s.TextInput,{id:"city",onChange:function(e){S("city",e)},value:v.address.city})),o().createElement(s.FormGroup,{label:"State"},o().createElement(s.TextInput,{id:"state",onChange:function(e){S("state",e)},value:v.address.state})),o().createElement(s.FormGroup,{label:"County"},o().createElement(s.TextInput,{id:"county",onChange:function(e){S("county",e)},value:v.address.county})),o().createElement(s.FormGroup,{label:"Country"},o().createElement(s.TextInput,{id:"country",onChange:function(e){S("country",e)},value:v.address.country})),o().createElement(s.FormGroup,{label:"Phone Number"},o().createElement(s.TextInput,{id:"phoneNumber",onChange:function(e){j(b(b({},v),{},{phone:e}))},value:v.phone})))),o().createElement(s.Card,null,o().createElement(s.CardHeader,null,"Red Hat Login"),o().createElement(s.CardBody,null,o().createElement(s.FormGroup,null,o().createElement(s.TextInput,{id:"login",onChange:function(e){j(b(b({},v),{},{username:e}))},value:v.username})))),o().createElement(s.Card,null,o().createElement(s.CardHeader,null,"Permissions"),o().createElement(s.CardBody,null,o().createElement(s.FormGroup,null,o().createElement(s.Checkbox,{label:"Manage Support Cases",isChecked:P.portal_manage_cases,onChange:function(){I("portal_manage_cases")},id:"controlled-check-1",name:"check1"}),o().createElement(s.Checkbox,{label:"Download Software and Updates",isChecked:P.portal_download,onChange:function(){I("portal_download")},id:"controlled-check-2",name:"check2"}),o().createElement(s.Checkbox,{label:"View/Renew Subscription Information",isChecked:P.portal_system_management,onChange:function(){I("portal_system_management")},id:"controlled-check-3",name:"check3"}),o().createElement(s.Checkbox,{label:"Manage Your Subscriptions",isChecked:P.portal_manage_subscriptions,onChange:function(){I("portal_manage_subscriptions")},id:"controlled-check-4",name:"check4"}),o().createElement(s.Divider,{id:"adminDivider",component:"div"}),o().createElement(s.Checkbox,{label:"Account Administrator",isChecked:P.admin,onChange:function(){I("admin")},id:"admin",name:"check5"})))),o().createElement(s.ActionGroup,null,o().createElement(s.Button,{onClick:function(){console.log("submitting formData object: "),console.log(v);var n,r=b({},v);p&&(delete r.id,delete r.username,delete r.status),n=p?t.accountAPI+"/"+t.accountID+"/users/"+v.id:t.accountAPI+"/"+t.accountID+"/users",fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.userToken},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(t){t.status?400===t.status?(u([o().createElement(s.Alert,{title:t.title,key:t.title,variant:"danger",timeout:"8000"},JSON.stringify(t.errors))]),document.getElementsByClassName("pf-c-page__main")[0].scrollTop=0):200===t.status?e.triggerReturn():(u([o().createElement(s.Alert,{title:t.title,variant:"danger",timeout:"8000"},"Unexpected Result")]),document.getElementsByClassName("pf-c-page__main")[0].scrollTop=0):t.body&&e.triggerReturn()}))},variant:"primary"},"Submit"),o().createElement(s.Button,{onClick:e.triggerReturn,variant:"link"},"Cancel"))))};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(1279);var O=(0,a.createContext)(null);const j=function(e){"stage.foo.redhat.com:1337"===window.location.host||window.location.host;var t=(0,a.useState)({accountAPI:"https://localhost:8443/v1/accounts",accountID:"",userToken:""}),n=(0,r.Z)(t,2),c=n[0],u=n[1],d=(0,a.useState)({userList:!0,addUser:!1,editUser:!1}),m=(0,r.Z)(d,2),f=m[0],h=m[1],g=(0,a.useState)(),b=(0,r.Z)(g,2),E=b[0],j=b[1],C=function(){h({userList:!1,addUser:!0,editUser:!1})},w=function(){h({userList:!0,addUser:!1,editUser:!1})},P=function(e){j(e),h({userList:!1,addUser:!1,editUser:!0})},k=function(){return c.accountID&&c.accountID.length>0?f.userList?o().createElement(p,{triggerAddUser:C,triggerEditUser:P,triggerCancel:w}):f.addUser?o().createElement(y,{triggerReturn:w}):f.editUser?o().createElement(y,{triggerReturn:w,editingUser:E}):void 0:o().createElement("div",null,"Loading Spinner...")};return(0,a.useEffect)((function(){insights.chrome.auth.getToken().then((function(e){u(v(v({},c),{},{userToken:e})),fetch(c.accountAPI,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){var t=e.body[0];u(v(v({},c),{},{accountID:t.id}))}))}))}),[]),o().createElement("div",null,o().createElement(l.Z,null,o().createElement(i.Z,{title:"User Management",className:"pf-u-mb-lg"}),o().createElement("p",null," Manage organization users and privelages")),o().createElement(s.Divider,null),o().createElement(s.PageSection,null,o().createElement(O.Provider,{value:c},o().createElement(k,null))))};n(9390);var C=n(4747);const w=function(e){var t=null,n=(0,a.useState)({adminUser:!0,renderedPage:o().createElement(j,null)}),c=(0,r.Z)(n,2),l=c[0],i=c[1];return(0,a.useEffect)((function(){insights.chrome.auth.getToken().then((function(e){t=e,(0,C.VN)(t)&&i({adminUser:!0,renderedPage:o().createElement(j,null)})}))}),[]),o().createElement(o().Fragment,null,l.renderedPage)}},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var c=a.apply(null,n);c&&e.push(c)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var o,c,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var s in o=Object(arguments[i]))n.call(o,s)&&(l[s]=o[s]);if(t){c=t(o);for(var u=0;u<c.length;u++)r.call(o,c[u])&&(l[c[u]]=o[c[u]])}}return l}},5251:(e,t,n)=>{"use strict";n(7418);var r=n(2950),a=60103;if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),o("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:s,ref:u,props:o,_owner:c.current}}t.jsx=s,t.jsxs=s},5893:(e,t,n)=>{"use strict";e.exports=n(5251)},885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=../sourcemaps/User-Management.7124591b1e31674c580caa9dda6d96fb.js.map