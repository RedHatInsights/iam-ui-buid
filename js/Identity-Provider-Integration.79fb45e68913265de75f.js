(self.webpackChunkiam=self.webpackChunkiam||[]).push([[600],{68994:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(21527),a=r.n(n),i=r(22021),o=r(22069),l=r(77334);const c=()=>a().createElement("div",{className:"disabledDiv"},a().createElement(l.Ay,{className:"lockIcon"}),a().createElement(i.h,{headingLevel:"h2",size:"xl",className:"pf-u-mt-lg"},"This page is temporarily disabled or unavailable at this time"),a().createElement(o.E,{className:"pf-u-mt-lg"},"Please check again at a another time or reach out to Red Hat customer service for additional support"))},41195:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ge});var n=r(21527),a=r.n(n),i=r(88072),o=r(7851),l=r(24209),c=r(16401),s=r(22069),d=r(23285),u=r(73539),m=r(22021),p=r(73133),h=r(56780),E=r(59257),f=r(9937),I=r(94747),g=r(5556),S=r.n(g);const C=({resetNextClicked:e,rootUserChoices:t,rootValidation:r,updateStatus:i})=>{const[o,l]=(0,n.useState)({custName:{inputType:"GENERAL",status:"default",message:""},protocol:{inputType:"RADIO",status:"default",message:""}}),c=n=>{((e,t,r,n,a,i,o)=>{o(!1),t.current||(t.current={}),t.current.selections||(t.current.selections={}),t.current.selections[e.target.id]=e.target.value;const l=(0,I.SS)(t.current.selections,r,n);a.current||(a.current={}),a.current.CUST_INFO=!l,!l&&t.current.selections.protocol&&i(t.current.selections.protocol)})(n,t,o,l,r,i,e)};return a().createElement(p.l,null,a().createElement(m.h,{headingLevel:"h2"},"Customer Information"),a().createElement(s.E,{className:"pf-u-color-400 pf-u-font-size-sm"},"All fields are required"),a().createElement(h.g,{label:"Identity provider display name",onChange:e=>{c(e)},fieldId:"custName"},a().createElement(d.ks,{type:"text",id:"custName"}),a().createElement(E.E,null,a().createElement(f.j,null,"Enter a personalized display name for your Identity Provider (IdP). It is important to use unique names for your IdP display name, since multiple Red Hat accounts can be linked to one IdP."))),a().createElement(h.g,{onChange:e=>{c(e)},role:"radiogroup",fieldId:"authType",label:"Choose identity provider protocol",id:"protocol"},a().createElement(u.s,{name:"authType",id:"protocol",label:"OpenID Connect",value:"OIDC_CONFIG"}),a().createElement(u.s,{name:"authType",id:"protocol",label:"Saml 2.0",value:"SAML_CONFIG"})))};C.propTypes={resetNextClicked:S().func,rootUserChoices:S().object,rootValidation:S().object,nextClicked:S().func,updateStatus:S().func};const y=C,v=({updateStatus:e,resetNextClicked:t,rootValidation:r,rootUserChoices:i})=>{const[o,l]=(0,n.useState)(),[c,m]=(0,n.useState)({clientId:{inputType:"GENERAL",status:"default",message:""},clientSecret:{inputType:"GENERAL",status:"default",message:""},inputMethod:{inputType:"RADIO",status:"default",message:""}}),g=n=>{t(!1),i.current.selections[n.target.id]=n.target.value;const a=(0,I.SS)(i.current.selections,c,m);r.current.OIDC_CONFIG=!a,!a&&i.current.selections.inputMethod&&e(i.current.selections.inputMethod)};return a().createElement(p.l,null,a().createElement(s.E,{className:"pf-u-color-400 pf-u-font-size-sm"},"All fields are required"),a().createElement(h.g,{label:"Client ID/SP entity ID",onChange:e=>{g(e)}},a().createElement(d.ks,{onChange:(e,t)=>(0,I.Xr)(t,"clientId",o,l),type:"text",id:"clientId"}),a().createElement(E.E,null,a().createElement(f.j,null,"The Red Hat client identifier registered within the customer identity provider. Your indentity provider generates this client ID when a Red Hat client is added"))),a().createElement(h.g,{label:"Client Secret",onChange:e=>{g(e)}},a().createElement(d.ks,{onChange:(e,t)=>(0,I.Xr)(t,"clientSecret",o,l),type:"text",id:"clientSecret"}),a().createElement(E.E,null,a().createElement(f.j,null,"Enter the client secret associated with your client identifier  by your identity provider"))),a().createElement(h.g,{onChange:e=>{g(e)},label:"Load external IDP metadata from a config file or download it from a url"},a().createElement(u.s,{name:"inputChoice",id:"inputMethod",label:"Import from URL",value:"IMPORT_FROM_URL"}),a().createElement(u.s,{name:"inputChoice",id:"inputMethod",label:"Import from file",value:"IMPORT_FROM_FILE"})))};v.propTypes={resetNextClicked:S().func,rootUserChoices:S().object,rootValidation:S().object,nextClicked:S().func,updateStatus:S().func};const R=v,L=({updateStatus:e,resetNextClicked:t,rootValidation:r,rootUserChoices:i})=>{const[o,l]=(0,n.useState)({inputMethod:{inputType:"RADIO",status:"default",message:""}});return a().createElement(p.l,null,a().createElement(h.g,{onChange:n=>{(n=>{t(!1),i.current.selections[n.target.id]=n.target.value;const a=(0,I.SS)(i.current.selections,o,l);r.current.SAML_CONFIG=!a,!a&&i.current.selections.inputMethod&&e(i.current.selections.inputMethod)})(n)},label:"Load external IDP metadata from a config file or download it from a url",isRequired:!0},a().createElement(u.s,{name:"inputChoice",id:"inputMethod",label:"Import from URL",value:"IMPORT_SAML_FROM_URL"}),a().createElement(u.s,{name:"inputChoice",id:"inputMethod",label:"Import from file",value:"IMPORT_SAML_FROM_FILE"})))};L.propTypes={resetNextClicked:S().func,rootUserChoices:S().object,rootValidation:S().object,nextClicked:S().func,updateStatus:S().func};const T=L;var O=r(62382),N=r(38805),F=r.n(N);const M=({updateStatus:e,rootValidation:t,rootUserChoices:r})=>{const[i,o]=(0,n.useState)("");return a().createElement(p.l,null,a().createElement(m.h,{headingLevel:"h2"},"Import from file"),a().createElement(h.g,{label:"File Upload",isRequired:!0},a().createElement(O.e,{value:i.toString(),id:"text-file-with-edits-allowed",type:"text",onDataChange:(n,a)=>{o(a),F().parseString(a,((n,a)=>{n?console.error(n):a&&(e("FINAL_STEP"),r.current.current.configFileData=a,t.current.IMPORT_FROM_FILE=!0)}))},browseButtonText:"Upload"})),a().createElement(s.E,{className:"pf-u-color-400 pf-u-font-size-sm"},"An XML formatted file detailing the configuration of your IDP, minimally including the OpenID Connect Identity provider discovery URL"))};M.propTypes={rootUserChoices:S().object,rootValidation:S().object,updateStatus:S().func};const A=M,b=({updateStatus:e,resetNextClicked:t,rootValidation:r,rootUserChoices:i})=>{const[o,l]=(0,n.useState)({importURL:{inputType:"DOMAIN",status:"default",message:""}});return a().createElement(p.l,null,a().createElement(m.h,{headingLevel:"h2"},"Import from URL"),a().createElement(h.g,{label:"URL"},a().createElement(d.ks,{type:"text",id:"importURL",onChange:n=>{(n=>{t(!1),i.current.selections[n.currentTarget.id]=n.currentTarget.value;const a=(0,I.SS)(i.current.selections,o,l);r.current.IMPORT_FROM_URL=!a,a||e("FINAL_STEP")})(n)}}),a().createElement(E.E,null,a().createElement(f.j,null,"import metadata from a remote identity provider discovery descriptor"))))};b.propTypes={resetNextClicked:S().func,rootUserChoices:S().object,rootValidation:S().object,nextClicked:S().func,updateStatus:S().func};const k=b,_=({updateStatus:e,resetNextClicked:t,rootValidation:r,rootUserChoices:i})=>{const[o,l]=(0,n.useState)("");return a().createElement(p.l,null,a().createElement(m.h,{headingLevel:"h2"},"Import from file"),a().createElement(h.g,{label:"File Upload",isRequired:!0},a().createElement(O.e,{value:o.toString(),id:"text-file-with-edits-allowed",type:"text",filenamePlaceholder:"Drag and drop a file or upload one",onDataChange:(t,n)=>{l(n),F().parseString(n,((t,n)=>{t?console.error("failed to parse xml file: "+t):n&&(e("FINAL_STEP"),i.current.current.configFileData=n,r.current.IMPORT_SAML_FROM_FILE=!0)}))},browseButtonText:"Upload"})),a().createElement(s.E,{className:"pf-u-color-400 pf-u-font-size-sm"},"A XML formatted file detailing the configuration of your IDP"))};_.propTypes={rootUserChoices:S().object,rootValidation:S().object,updateStatus:S().func};const x=_,P=({updateStatus:e,resetNextClicked:t,rootValidation:r,rootUserChoices:i})=>{const[o,l]=(0,n.useState)({importURL:{inputType:"DOMAIN",status:"default",message:""}});return a().createElement(p.l,null,a().createElement(m.h,{headingLevel:"h2"},"Import from URL"),a().createElement(h.g,{label:"URL"},a().createElement(d.ks,{type:"text",id:"importURL",onChange:n=>{(n=>{t(!1),i.current.selections[n.currentTarget.id]=n.currentTarget.value;const a=(0,I.SS)(i.current.selections,o,l);r.current.IMPORT_SAML_FROM_URL=!a,a||e("FINAL_STEP")})(n)}}),a().createElement(E.E,null,a().createElement(f.j,null,"import metadata from a remote identity provider discovery descriptor"))))};P.propTypes={resetNextClicked:S().func,rootUserChoices:S().object,rootValidation:S().object,nextClicked:S().func,updateStatus:S().func};const U=P;var D=r(56165);const w=({updateStatus:e,redirectDomain:t})=>((0,n.useEffect)((()=>{e("VALIDATE_STEP")}),[]),a().createElement(p.l,null,a().createElement(m.h,{headingLevel:"h2"},"Configure URLs"),a().createElement(s.E,{className:"pf-u-color-400 pf-u-font-size-sm"},"Some Identity Provider Services require additional configuration when enabling third party single sign on. Please review the following information and verify that these are filled in where required in your company IDP."),a().createElement(h.g,{label:"Identifier (Entity ID)"},a().createElement(D.Ck,{isReadOnly:!0,clickTip:"copied"},"https://sso.redhat.com/auth/realms/redhat-external")),a().createElement(h.g,{label:"Sign on URL"},a().createElement(D.Ck,{isReadOnly:!0,clickTip:"copied"},"https://sso.redhat.com/auth/realms/redhat-external/protocol/saml")),a().createElement(h.g,{label:"Redirect URL or ACS (Assertion Consumption Service) URL"},a().createElement(D.Ck,{isReadOnly:!0,clickTip:"copied"},"https://sso.redhat.com/auth/realms/redhat-external/broker/"+{redirectDomain:t}+"/endpoint"))));w.propTypes={updateStatus:S().func,redirectDomain:S().string};const V=w;var z=r(83579),G=r(58168),j=r(72583);const H=({updateStatus:e})=>((0,n.useEffect)((()=>{e("VALIDATESTEP")}),[]),a().createElement(p.l,null,a().createElement(m.h,{headingLevel:"h2"},"Test your identity provider"),a().createElement(s.E,{className:"pf-u-color-400 pf-u-font-size-sm"},"Test your identity provider integration before enabling it for your entire organization"),a().createElement(z.B8,null,a().createElement(G.c,null,"Click the button to initiate login redirect to your identity provider"),a().createElement(G.c,null,"Log in with your identity provider user your company Single Sign-on credentials"),a().createElement(G.c,null,"You will be redirected back to identity provider integration configuration where you can then enable it for your entire organization")),a().createElement(s.E,null,"If you encounter any errors or are having trouble, contact",a().createElement(j.$n,{variant:"link",href:"www.google.com",target:"_blank",component:"a",isInline:!0,className:"pf-u-ml-xs"},"CustomerService"))));H.propTypes={updateStatus:S().func};const $=H;var W=r(60915),q=r(30620),B=r(58352),Z=r(8490),X=r(96998),Y=r(96553),J=r(23215),K=r(10615),Q=r(59779),ee=r(44397);const te=({idValue:e,title:t,current:r})=>{const[i,o]=(0,n.useState)(!1),[l,c]=(0,n.useState)("");return a().createElement("div",null,a().createElement(J.E,{hidden:i},a().createElement(m.h,{headingLevel:"h4"},t,a().createElement(j.$n,{variant:"link",onClick:()=>{o(!0)},isInline:!0,icon:a().createElement(K.Ay,null),iconPosition:"right",className:"pf-u-ml-xs  editIcon"})),a().createElement(s.E,{id:e+"-current"},r)),a().createElement(J.E,{hidden:!i},a().createElement(m.h,{headingLevel:"h4"},t),a().createElement(X.s,null,a().createElement(Y.Z,null,a().createElement(d.ks,{id:e,value:l,onChange:(e,t)=>{c(t)}})),a().createElement(Y.Z,null,a().createElement(j.$n,{variant:"link",onClick:()=>{console.log("triggered submit value: "+l),o(!1)},isInline:!0,icon:a().createElement(Q.Ay,null),iconPosition:"right",className:"pf-u-ml-xs  editIcon"})),a().createElement(Y.Z,null,a().createElement(j.$n,{variant:"link",onClick:()=>{o(!1)},isInline:!0,icon:a().createElement(ee.Ay,null),iconPosition:"right",className:"pf-u-ml-xs  editIcon"})))))};te.propTypes={title:S().string,idValue:S().string,current:S().string};const re=te;var ne=r(99851);const ae=()=>{const[e,t]=(0,n.useState)({idpAlias:"",displayName:"",enabled:"false"}),[r,i]=(0,n.useState)(!1),o=a().createElement(a().Fragment,null,a().createElement(X.s,null,a().createElement(Y.Z,null,a().createElement(Z.I,{status:"warning"},a().createElement(ne.Ay,null))),a().createElement(Y.Z,null,a().createElement(m.h,{id:"modal-custom-header-label",headingLevel:"h1"},"Enable Identity Provider for your entire organization?"))));return a().createElement(W.Z,{className:"configuredCard",isCompact:!1},a().createElement(B.a,{variant:B.d.small,isOpen:r,title:"Enable Identity Provider for your entire organization?",header:o,"aria-labelledby":"modal-custom-header-label","aria-describedby":"modal-custom-header-description",actions:[a().createElement(j.$n,{key:"confirm",onClick:()=>{console.log("Enable IDP")}},"Confirm"),a().createElement(j.$n,{key:"cancel",variant:"link",onClick:()=>{i(!1)}},"Cancel")]},"Are you sure you wish to enable Third Party SSO for your entire organization?"),a().createElement(q.x,{hasGutter:!0,span:12},a().createElement(q.x,{hasGutter:!0,span:6},a().createElement(re,{idValue:"displayName",title:"Display Name",current:e.displayName})),a().createElement(q.x,{hasGutter:!0,span:6},a().createElement(re,{idValue:"clientID",title:"Client ID",current:e.idpAlias}),a().createElement(re,{idValue:"clientSecret",title:"Client Secret",current:e.idpAlias})),a().createElement(q.x,{hasGutter:!0,span:6},a().createElement(re,{idValue:"logourl",title:"Logo URL",current:e.idpAlias}))),a().createElement(h.g,{className:"buttonGroup"},a().createElement(j.$n,{variant:"primary",onClick:()=>{i(!0)}},"Enable"),a().createElement(j.$n,{variant:"link",onClick:()=>{console.log("Delete this IDP config")}},"Delete")))};var ie=r(3913);const oe=({setupIDP:e})=>a().createElement("div",{className:"notSetupDiv"},a().createElement(ie.Ay,{className:"cubesIcon"}),a().createElement(m.h,{headingLevel:"h2",size:"xl",className:"pf-u-mt-lg"},"Identity provider not setup"),a().createElement(s.E,{className:"pf-u-mt-md"},"You haven't set up an identity provider for your organization"),a().createElement(j.$n,{className:"pf-u-mt-lg",variant:"primary",onClick:e},"Set up an identity provider"));oe.propTypes={setupIDP:S().func};const le=oe;var ce=r(94698),se=r(76882);const de=({valid:e,next:t})=>{const{goToNextStep:r,goToPrevStep:n}=(0,ce.CV)();return a().createElement(se.W,null,a().createElement(j.$n,{onClick:()=>{e?r():t(!0)},disabled:e},"Next"),a().createElement(j.$n,{variant:"secondary",onClick:n},"Back"))},ue=({userChoiceData:e})=>{const{goToNextStep:t,goToPrevStep:r}=(0,ce.CV)(),[n,i]=a().useState(!1);return a().createElement(se.W,null,a().createElement(j.$n,{onClick:async()=>{console.log("Submitting with this data: "+JSON.stringify(e,null,2)),i(!0),await new Promise((e=>setTimeout(e,2e3))),i(!1),t()},isLoading:n},"Next"),a().createElement(j.$n,{variant:"secondary",onClick:r},"Back"))};ue.propTypes={userChoiceData:S().object};const me=ue;var pe=r(20881);const he=({accessToken:e})=>{const t=(0,n.useRef)({current:{},selections:{}}),[r,s]=(0,n.useState)(!0),[d,u]=(0,n.useState)(!0),m=(0,I.AR)((0,pe.A)(),"apis/organizations/v1/identity-providers");(0,n.useEffect)((()=>{fetch(m,{method:"GET",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then((e=>e.json())).then((e=>{null!==e.idpAlias&&s(!0)})).catch((e=>{console.error("Error: ",e)}))}),[]);const p=(0,n.useRef)({CUST_INFO:!1,OIDC_CONFIG:!1,SAML_CONFIG:!1,IMPORT_FROM_FILE:!1,IMPORT_FROM_URL:!1,IMPORT_SAML_FROM_FILE:!1,IMPORT_SAML_FROM_URL:!1}),[h,E]=(0,n.useState)({currentState:"CUSTOMERINFORMATION",previousState:"",nextState:""}),[f,g]=(0,n.useState)({hideCustomerInformation:!1,hideOIDC:!0,hideSAML:!0,hideImportFromURL:!0,hideImportFromFile:!0,hideFinish:!0,hideValidate:!0}),[S,C]=(0,n.useState)(!1),v=e=>{let t;switch(e){case"OIDC_CONFIG":t={...f},t.hideOIDC=!1,g(t),E({currentState:e,previousState:"CUSTOMER_INFORMATION",nextState:""});break;case"SAML_CONFIG":t={...f},t.hideSAML=!1,g(t),E({currentState:e,previousState:"CUSTOMER_INFORMATION",nextState:""});break;case"IMPORT_FROM_FILE":t={...f},t.hideImportFromFile=!1,g(t),E({currentState:e,previousState:" OIDC_CONFIG",nextState:"FINAL_STEP"});break;case"IMPORT_FROM_URL":t={...f},t.hideImportFromURL=!1,g(t),E({currentState:e,previousState:"OIDC_CONFIG",nextState:"FINAL_STEP"});break;case"IMPORT_SAML_FROM_FILE":t={...f},t.hideImportFromFile=!1,g(t),E({currentState:e,previousState:"SAML_CONFIG",nextState:"FINAL_STEP"});break;case"IMPORT_SAML_FROM_URL":t={...f},t.hideImportFromURL=!1,g(t),E({currentState:e,previousState:"SAML_CONFIG",nextState:"FINAL_STEP"});break;case"FINAL_STEP":t={...f},t.hideFinish=!1,g(t),E({currentState:e,previousState:h.currentState,nextState:"VALIDATE_STEP"});break;case"VALIDATE_STEP":t={...f},t.hideValidate=!1,g(t),E({currentState:e,previousState:h.currentState,nextState:""});break;default:g({hideCustomerInformation:!1,hideOIDC:!0,hideSAML:!0,hideImportFromURL:!0,hideImportFromFile:!0,hideFinish:!0,hideValidate:!0})}};return a().createElement("div",{className:"flowPage"},a().createElement(l.A,{className:"wizardHeader"},a().createElement(c.A,{title:"Identity Provider Integration",className:"pf-u-mb-lg"}),a().createElement("p",null," Manage identity provider integration for your organization ")),a().createElement("br",null),a().createElement("div",{className:r?"":"hiddenPage"},a().createElement(ae,null)),a().createElement("div",{className:!r&&d?"initPage":"hiddenPage"},a().createElement(le,{setupIDP:()=>{u(!1)}})),a().createElement("div",{className:r||d?"hiddenPage":""},a().createElement(i.s,{onClose:()=>{console.log("close fancy window")},isProgressive:!0},a().createElement(o.W,{id:"CUSTOMERINFORMATION",name:"Customer Information",isHidden:f.hideCustomerInformation,footer:a().createElement(de,{valid:p.current.CUST_INFO,next:C})},a().createElement(y,{updateStatus:v,resetNextClicked:C,rootValidation:p,rootUserChoices:t})),a().createElement(o.W,{id:"OIDCCONFIG",name:"OIDC Configuration",isHidden:f.hideOIDC,footer:a().createElement(de,{valid:p.current.OIDC_CONFIG,next:C})},a().createElement(R,{updateStatus:v,resetNextClicked:C,rootValidation:p,rootUserChoices:t})),a().createElement(o.W,{id:"IMPORTFROMFILE",name:"Import config from file",isHidden:!(!f.hideOIDC&&!f.hideImportFromFile)},a().createElement(A,{updateStatus:v,resetNextClicked:C,rootValidation:p,rootUserChoices:t})),a().createElement(o.W,{id:"IMPORTFROMURL",name:"Import config from URL",isHidden:!(!f.hideOIDC&&!f.hideImportFromURL),footer:a().createElement(de,{valid:p.current.IMPORT_FROM_URL,next:C})},a().createElement(k,{updateStatus:v,resetNextClicked:C,rootValidation:p,rootUserChoices:t})),a().createElement(o.W,{id:"SAMLCONFIG",name:"Saml Configuration",isHidden:f.hideSAML,footer:a().createElement(de,{valid:p.current.SAML_CONFIG,next:C})},a().createElement(T,{updateStatus:v,resetNextClicked:C,rootValidation:p,rootUserChoices:t})),a().createElement(o.W,{name:"Import SAML from file",id:"IMPORTSAMLFROMFILE",isHidden:!(!f.hideSAML&&!f.hideImportFromFile)},a().createElement(x,{updateStatus:v,resetNextClicked:C,rootValidation:p,rootUserChoices:t})),a().createElement(o.W,{id:"IMPORTSAMLFROMURL",name:"Import SAML from URL",isHidden:!(!f.hideSAML&&!f.hideImportFromURL),footer:a().createElement(de,{valid:p.current.IMPORT_SAML_FROM_URL,next:C})},a().createElement(U,{updateStatus:v,resetNextClicked:C,rootValidation:p,rootUserChoices:t})),a().createElement(o.W,{id:"FINALSTEP",name:"Final Steps",isHidden:f.hideFinish,footer:a().createElement(me,{userChoiceData:t.current.selections})},a().createElement(V,{updateStatus:v,redirectDomain:t.current.orgDomain})),a().createElement(o.W,{id:"VALIDATESTEP",name:"Test your identity provider",isHidden:f.hideValidate,footer:{nextButtonText:"Test identity provider integration",onNext:()=>{const e="http://sso.stage.redhat.com/auth/realms/redhat-external/protocol/openid-connect/logout?redirect_uri="+encodeURIComponent("https://sso.stage.redhat.com/auth/realms/redhat-external/protocol/openid-connect/auth?response_type=code&client_id=account&redirect_uri=https%3A%2F%2Fsso.stage.redhat.com%2Fauth%2Frealms%2Fredhat-external%2Faccount%2Flogin-redirect&state=fd315d76-0154-4eac-bfff-d23dedf3a9cf&login=true&scope=openid&kc_idp_hint=customer-idp-b");window.open(e,"IDPTest","height="+window.outerHeight+",width="+window.outerWidth)},isNextDisabled:!1,isBackDisabled:!1}},a().createElement($,{updateStatus:v})))))};he.propTypes={accessToken:S().string};const Ee=he;var fe=r(68994),Ie=r(88095);const ge=()=>{const e=(0,pe.A)();let t=null;const[r,i]=(0,n.useState)({adminUser:!1,selfServiceIDP:a().createElement(fe.A,null)}),o=(0,Ie.useFlag)("iamconsole.IDPIntegration.enabled");return(0,n.useEffect)((()=>{e?.appAction?.("identity-provider-integration"),e.auth.getToken().then((e=>{t=e,(0,I.X2)(t)&&o&&i({adminUser:!0,selfServiceIDP:a().createElement(Ee,{accessToken:t})})}))}),[]),a().createElement(a().Fragment,null,r.selfServiceIDP)}},94747:(e,t,r)=>{"use strict";function n(e){const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=JSON.parse(decodeURIComponent(window.atob(t).split("").map((e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2))).join("")));return r&&r.is_org_admin}function a(e,t,r,n){const a={};a[t]=e,n({...r,...a})}function i(e,t,r){let n=!1;const a={};return Object.keys(t).forEach((r=>{const i=e&&e[r],o=t[r].inputType,l=function(e,t,r){if(!e)return{status:"error",message:"This field can not be left empty"};let n,a;switch(t){case"GENERAL":a=/^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/.test(e),n={status:a?"default":"error",message:a?"":"This text is invalid please check for uncommonly used characters"};break;case"DOMAIN":a=/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(e),n={status:a?"default":"error",message:a?"":"This field needs to be a valid URL"};break;default:n={status:"default",message:""}}return n}(i,o);"error"===l.status&&(n=!0),a[r]={inputType:o,status:l.status,message:l.message}})),r(a),n}r.d(t,{AR:()=>o,SS:()=>i,X2:()=>n,Xr:()=>a});const o=(e,t)=>"prod"===e.getEnvironment()?"https://sso.redhat.com/auth/realms/redhat-external/"+t:"https://sso.stage.redhat.com/auth/realms/redhat-external/"+t},95067:()=>{},11902:()=>{},51662:()=>{},74895:()=>{},7302:()=>{},63701:()=>{},71036:()=>{},40819:()=>{},26078:()=>{},5637:()=>{},21289:()=>{},36752:()=>{},85586:()=>{},15340:()=>{},79838:()=>{}}]);