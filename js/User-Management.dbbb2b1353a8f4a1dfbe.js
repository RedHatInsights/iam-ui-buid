/*! For license information please see User-Management.dbbb2b1353a8f4a1dfbe.js.LICENSE.txt */
(self.webpackChunkiam_console=self.webpackChunkiam_console||[]).push([[864],{9332:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a,mB:()=>r});const r=(0,n(7245).IU)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0}),a=r},9376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(5893),a=n(4184),o=n.n(a),c=n(2950);const l=n.n(c)().createContext("light");var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};const s=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),c=o()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(l.Consumer,{children:function(e){var t,l;void 0===e&&(e="light");var s=o()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return(0,r.jsx)("section",i({},a,{className:"".concat(c," ").concat(s),"widget-type":"InsightsPageHeader"},{children:n}))}})}},9173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(5893),a=n(4184),o=n.n(a),c=n(154),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};const i=function(e){var t=e.className,n=e.title,a=o()(t);return(0,r.jsx)(c.Title,l({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},1279:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(2950),a=n.n(r),o=n(154),c=n(9332);const l=function(){return a().createElement("div",{className:"disabledDiv"},a().createElement(c.ZP,{className:"lockIcon"}),a().createElement(o.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-lg"},"This page is temporarily disabled or unavailable at this time"),a().createElement(o.Text,{className:"pf-u-mt-lg"},"Please check again at a another time or reach out to Red Hat customer service for additional support"))}},4747:(e,t,n)=>{"use strict";n.d(t,{AS:()=>i,VN:()=>c,Xj:()=>l});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=JSON.parse(decodeURIComponent(window.atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")));return n&&n.is_org_admin}function l(e,t,n,r){var a={};a[t]=e,r(o(o({},n),a))}function i(e,t,n){var r=!1,a={};return Object.keys(t).forEach((function(n){var o=e&&e[n],c=t[n].inputType,l=function(e,t,n){if(!e)return{status:"error",message:"This field can not be left empty"};var r={},a="";switch(t){case"GENERAL":r={status:(a=/^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/.test(e))?"default":"error",message:a?"":"This text is invalid please check for uncommonly used characters"};break;case"DOMAIN":r={status:(a=/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(e))?"default":"error",message:a?"":"This field needs to be a valid URL"};break;default:r={status:"default",message:""}}return r}(o,c);"error"===l.status&&(r=!0),a[n]={inputType:c,status:l.status,message:l.message}})),n(a),r}},4801:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var r=n(885),a=n(2950),o=n.n(a),c=n(9376),l=n(9173),i=n(154),s=n(4942),u=n(3444),d=n(5697),m=n.n(d);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=(0,a.useContext)(j),n=(0,a.useState)([]),c=(0,r.Z)(n,2),l=c[0],d=c[1],m=(0,a.useState)({}),p=(0,r.Z)(m,2),g=p[0],h=p[1],b=(0,a.useState)(10),y=(0,r.Z)(b,2),E=y[0],v=y[1],O=(0,a.useState)(0),T=(0,r.Z)(O,2),C=T[0],k=T[1],P=(0,a.useState)(20),w=(0,r.Z)(P,2),S=w[0];w[1],(0,a.useEffect)((function(){var e;e=t.accountAPI+"/"+t.accountID+"/users?",e+=new URLSearchParams({firstResultIndex:C,maxResults:E}),fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.userToken}}).then((function(e){return e.json()})).then((function(e){d(e.body);for(var t={},n=0;n<e.body.length;n++){var r={status:e.body[n].user.status,username:e.body[n].user.username,checked:!1};t[e.body[n].user.id]=r}h(t)}))}),[C]);var _=function(){console.log("doing nothing")},I=function(){for(var e,n=Object.keys(g),r=0;r<n.length;r++)if(g[n[r]].checked){e=n[r];break}e&&fetch(t.accountAPI+"/"+t.accountID+"/users/"+e+"/status",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.userToken},body:JSON.stringify({status:"disabled"})}).then((function(e){return e.json()})).then((function(){window.location.reload(!1)}))},x=function(){for(var n,r=Object.keys(g),a=0;a<r.length;a++)if(g[r[a]].checked){n=r[a];break}n&&fetch(t.accountAPI+"/"+t.accountID+"/users/"+n,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.userToken}}).then((function(e){return e.json()})).then((function(t){e.triggerEditUser(t.body)}))},N=function(){k(C+E)},A=function(){k(C-E)},D=function(){return l.length>0?o().createElement("div",null,o().createElement(i.Toolbar,{id:"userListToolbar"},o().createElement(i.ToolbarContent,null,o().createElement(i.ToolbarItem,null,o().createElement(i.SearchInput,{"aria-label":"Search user list"})),o().createElement(i.ToolbarItem,null,o().createElement(i.Button,{onClick:e.triggerAddUser,variant:"primary"},"Add User")),o().createElement(i.ToolbarItem,null,o().createElement(i.Button,{onClick:x,variant:"primary"},"Edit User")),o().createElement(i.ToolbarItem,null,o().createElement(i.Button,{onClick:I,variant:"link"},"Disable User")))),o().createElement(u.TableComposable,{"aria-label":"Sortable table"},o().createElement(u.Thead,null,o().createElement(u.Tr,null,o().createElement(u.Th,{select:{onSelect:function(){return _()},isSelected:_()}}),o().createElement(u.Th,null,"Name"),o().createElement(u.Th,{modifier:"wrap"},"Email"),o().createElement(u.Th,{modifier:"wrap",info:{tooltip:"More information "}},"LastName"),o().createElement(u.Th,{modifier:"wrap"},"First Name"),o().createElement(u.Th,{modifier:"wrap"},"Status"))),o().createElement(u.Tbody,null,l.map((function(e){return o().createElement(u.Tr,{key:e.user.username},o().createElement(u.Td,null,o().createElement(i.Checkbox,{onChange:function(t){return n=e.user.id,r=t,(a=g[n]).checked=!!r,void h(f(f({},g),{},(0,s.Z)({},n,a)));var n,r,a},isChecked:g[e.user.id].checked,id:e.user.id+"-check"})),o().createElement(u.Td,null,e.user.username),o().createElement(u.Td,null,e.user.email),o().createElement(u.Td,null,e.user.lastName),o().createElement(u.Td,null,e.user.firstName),o().createElement(u.Td,null,e.user.status))})))),o().createElement(i.Pagination,{perPageComponent:"button",widgetId:"bottom-pagination",itemCount:S,perPage:E,variant:i.PaginationVariant.bottom,onPerPageSelect:function(e){v(e)},onNextClick:N,onPreviousClick:A,page:C})):o().createElement("div",null,"spinner ....")};return o().createElement("div",null,o().createElement(D,null))};g.propTypes={triggerEditUser:m().func,triggerAddUser:m().func};const h=g;var b=n(2982),y=function(e){var t=o().useState(!1),n=(0,r.Z)(t,2),a=n[0],c=n[1],l=o().useState(e.defaultText),s=(0,r.Z)(l,2),u=s[0],d=s[1];return o().createElement(i.Dropdown,{onSelect:function(){c(!1),document.getElementById(e.idValue).focus()},toggle:o().createElement(i.DropdownToggle,{id:e.idValue,onToggle:function(e){c(e)}},u),isOpen:a,dropdownItems:e.items.map((function(t){return o().createElement(i.DropdownItem,{key:t,onClick:function(){e.onSelect(t),d(t)}},t)}))})};y.propTypes={defaultText:m().string,idValue:m().string,items:m().array,onSelect:m().func};const E=y;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){var t=(0,a.useContext)(j),n=(0,a.useState)([]),c=(0,r.Z)(n,2),l=c[0],u=c[1],d=(0,a.useState)(!1),m=(0,r.Z)(d,2),p=m[0],f=m[1],g=(0,a.useState)({salutation:"",firstName:"",lastName:"",email:"",address:{city:"",country:"",county:"",state:"",streets:[],zipCode:""},permissions:[""],phone:"",roles:[],username:""}),h=(0,r.Z)(g,2),y=h[0],v=h[1];(0,a.useEffect)((function(){e.editingUser&&(f(!0),v(e.editingUser))}),[]);var T=(0,a.useState)({portal_manage_subscriptions:!1,portal_download:!1,portal_system_management:!1,portal_manage_cases:!1,admin:!1}),C=(0,r.Z)(T,2),k=C[0],P=C[1],w=function(e,t){var n=(0,b.Z)(y.address.streets);n[t]=e;var r=O({},y.address);r.streets=n,v(O(O({},y),{},{address:r}))},S=function(e,t){var n=O({},y.address);n[e]=t,v(O(O({},y),{},{address:n}))},_=function(e){var t=O({},k);t[e]=!k[e],P(t);for(var n=Object.keys(t),r=[],a=0;a<n.length;a++)!0===t[n[a]]&&("admin"===n[a]?v(O(O({},y),{},{roles:["organization_administrator"]})):(r.push(n[a]),v(O(O({},y),{},{permissions:r}))))};return o().createElement("div",null,o().createElement(i.Form,null,o().createElement("div",null,o().createElement(i.AlertGroup,{isLiveRegion:!0},l)),o().createElement(i.Card,null,o().createElement(i.CardHeader,null,"Name"),o().createElement(i.CardBody,null,o().createElement(i.FormGroup,null,o().createElement(E,{items:["Mr.","Mrs.","Other"],idValue:"greetingDropdown",defaultText:"Greeting",onSelect:function(e){var t;t=e,v(O(O({},y),{},(0,s.Z)({},"salutation",t)))}})),o().createElement(i.FormGroup,{label:"First Name"},o().createElement(i.TextInput,{id:"firstName",onChange:function(e){v(O(O({},y),{},{firstName:e}))},value:y.firstName})),o().createElement(i.FormGroup,{label:"Last Name"},o().createElement(i.TextInput,{id:"lastName",onChange:function(e){v(O(O({},y),{},{lastName:e}))},value:y.lastName})))),o().createElement(i.Card,null,o().createElement(i.CardHeader,null,"Address"),o().createElement(i.CardBody,null,o().createElement(i.FormGroup,{label:"Email"},o().createElement(i.TextInput,{id:"email",onChange:function(e){v(O(O({},y),{},{email:e}))},value:y.email})),o().createElement(i.FormGroup,{label:"Address Line 1"},o().createElement(i.TextInput,{id:"address1",onChange:function(e){w(e,0)},value:y.address.streets[0]})),o().createElement(i.FormGroup,{label:"Address Line 2"},o().createElement(i.TextInput,{id:"address2",onChange:function(e){w(e,1)},value:y.address.streets[1]})),o().createElement(i.FormGroup,{label:"Address Line 3"},o().createElement(i.TextInput,{id:"address3",onChange:function(e){w(e,2)},value:y.address.streets[2]})),o().createElement(i.FormGroup,{label:"Postal Code"},o().createElement(i.TextInput,{id:"postalcode",onChange:function(e){S("zipCode",e)},value:y.address.zipCode})),o().createElement(i.FormGroup,{label:"City"},o().createElement(i.TextInput,{id:"city",onChange:function(e){S("city",e)},value:y.address.city})),o().createElement(i.FormGroup,{label:"State"},o().createElement(i.TextInput,{id:"state",onChange:function(e){S("state",e)},value:y.address.state})),o().createElement(i.FormGroup,{label:"County"},o().createElement(i.TextInput,{id:"county",onChange:function(e){S("county",e)},value:y.address.county})),o().createElement(i.FormGroup,{label:"Country"},o().createElement(i.TextInput,{id:"country",onChange:function(e){S("country",e)},value:y.address.country})),o().createElement(i.FormGroup,{label:"Phone Number"},o().createElement(i.TextInput,{id:"phoneNumber",onChange:function(e){v(O(O({},y),{},{phone:e}))},value:y.phone})))),o().createElement(i.Card,null,o().createElement(i.CardHeader,null,"Red Hat Login"),o().createElement(i.CardBody,null,o().createElement(i.FormGroup,null,o().createElement(i.TextInput,{id:"login",onChange:function(e){v(O(O({},y),{},{username:e}))},value:y.username})))),o().createElement(i.Card,null,o().createElement(i.CardHeader,null,"Permissions"),o().createElement(i.CardBody,null,o().createElement(i.FormGroup,null,o().createElement(i.Checkbox,{label:"Manage Support Cases",isChecked:k.portal_manage_cases,onChange:function(){_("portal_manage_cases")},id:"controlled-check-1",name:"check1"}),o().createElement(i.Checkbox,{label:"Download Software and Updates",isChecked:k.portal_download,onChange:function(){_("portal_download")},id:"controlled-check-2",name:"check2"}),o().createElement(i.Checkbox,{label:"View/Renew Subscription Information",isChecked:k.portal_system_management,onChange:function(){_("portal_system_management")},id:"controlled-check-3",name:"check3"}),o().createElement(i.Checkbox,{label:"Manage Your Subscriptions",isChecked:k.portal_manage_subscriptions,onChange:function(){_("portal_manage_subscriptions")},id:"controlled-check-4",name:"check4"}),o().createElement(i.Divider,{id:"adminDivider",component:"div"}),o().createElement(i.Checkbox,{label:"Account Administrator",isChecked:k.admin,onChange:function(){_("admin")},id:"admin",name:"check5"})))),o().createElement(i.ActionGroup,null,o().createElement(i.Button,{onClick:function(){console.log("submitting formData object: "),console.log(y);var n,r=O({},y);p&&(delete r.id,delete r.username,delete r.status),n=p?t.accountAPI+"/"+t.accountID+"/users/"+y.id:t.accountAPI+"/"+t.accountID+"/users",fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.userToken},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(t){t.status?400===t.status?(u([o().createElement(i.Alert,{title:t.title,key:t.title,variant:"danger",timeout:"8000"},JSON.stringify(t.errors))]),document.getElementsByClassName("pf-c-page__main")[0].scrollTop=0):200===t.status?e.triggerReturn():(u([o().createElement(i.Alert,{key:"mainAlert",title:t.title,variant:"danger",timeout:"8000"},"Unexpected Result")]),document.getElementsByClassName("pf-c-page__main")[0].scrollTop=0):t.body&&e.triggerReturn()}))},variant:"primary"},"Submit"),o().createElement(i.Button,{onClick:e.triggerReturn,variant:"link"},"Cancel"))))};T.propTypes={editingUser:m().bool,triggerReturn:m().func};const C=T;var j=(0,a.createContext)(null);const k=function(){var e;e="stage.foo.redhat.com:1337"===window.location.host||"console.stage.redhat.com"===window.location.host?"https://api.access.stage.redhat.com/account/v1/accounts":"https://api.access.redhat.com/account/v1/accounts";var t=(0,a.useState)({accountAPI:e,accountID:"",userToken:""}),n=(0,r.Z)(t,2),s=n[0],u=n[1],d={accountAPI:e,accountID:"",userToken:""},m=(0,a.useState)({userList:!0,addUser:!1,editUser:!1}),p=(0,r.Z)(m,2),f=p[0],g=p[1],b=(0,a.useState)(),y=(0,r.Z)(b,2),E=y[0],v=y[1],O=function(){g({userList:!1,addUser:!0,editUser:!1})},T=function(){g({userList:!0,addUser:!1,editUser:!1})},k=function(e){v(e),g({userList:!1,addUser:!1,editUser:!0})},P=function(){return s.accountID&&s.accountID.length>0?f.userList?o().createElement(h,{triggerAddUser:O,triggerEditUser:k,triggerCancel:T}):f.addUser?o().createElement(C,{triggerReturn:T}):f.editUser?o().createElement(C,{triggerReturn:T,editingUser:E}):void 0:o().createElement("div",null,"Loading Spinner...")};return(0,a.useEffect)((function(){insights.chrome.auth.getToken().then((function(e){d.userToken=e,fetch(s.accountAPI,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){var t=e.body[0];d.accountID=t.id,u(d)}))}))}),[]),o().createElement("div",null,o().createElement(c.Z,null,o().createElement(l.Z,{title:"User Management",className:"pf-u-mb-lg"}),o().createElement("p",null," Manage organization users and privelages")),o().createElement(i.Divider,null),o().createElement(i.PageSection,null,o().createElement(j.Provider,{value:s},o().createElement(P,null))))};var P=n(4747),w=n(1279),S=n(9390);const _=function(){var e=null,t=(0,a.useState)({adminUser:!0,renderedPage:o().createElement(k,null)}),n=(0,r.Z)(t,2),c=n[0],l=n[1],i=(0,S.useFlag)("iamconsole.usermanagement.enabled");return(0,a.useEffect)((function(){insights.chrome.auth.getToken().then((function(t){e=t,(0,P.VN)(e)&&i&&l({adminUser:!0,renderedPage:o().createElement(k,null)}),i||l({adminUser:!1,renderedPage:o().createElement(w.Z,null)})}))}),[]),o().createElement(o().Fragment,null,c.renderedPage)}},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var c=a.apply(null,n);c&&e.push(c)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var o,c,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var s in o=Object(arguments[i]))n.call(o,s)&&(l[s]=o[s]);if(t){c=t(o);for(var u=0;u<c.length;u++)r.call(o,c[u])&&(l[c[u]]=o[c[u]])}}return l}},2703:(e,t,n)=>{"use strict";var r=n(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,c){if(c!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5251:(e,t,n)=>{"use strict";n(7418);var r=n(2950),a=60103;if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),o("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:s,ref:u,props:o,_owner:c.current}}t.jsx=s,t.jsxs=s},5893:(e,t,n)=>{"use strict";e.exports=n(5251)},885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);