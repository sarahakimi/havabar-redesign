(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2047],{5941:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password/firsPageForm",function(){return r(75201)}])},75201:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return F}});var t=r(34051),o=r.n(t),a=r(85893),s=r(79172),i=r(15861),u=r(94054),c=r(42283),l=r(50135),d=r(56815),h=r(33841),m=r(18360),p=r(57709),f=r(22224),x=r(83321),g=r(41664),v=r.n(g),j=r(50122),Z=r(90935),_=r(11496),b=r(74231),y=r(67294),w=r(95496),C=r(74931),P=r(5370);function B(e,n,r,t,o,a,s){try{var i=e[a](s),u=i.value}catch(c){return void r(c)}i.done?n(u):Promise.resolve(u).then(t,o)}function S(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function s(e){B(a,t,o,s,i,"next",e)}function i(e){B(a,t,o,s,i,"throw",e)}s(void 0)}))}}var k=(0,_.ZP)(i.Z)((function(e){var n,r,t,o=e.theme;return n={fontWeight:600,letterSpacing:"0.18px",marginBottom:o.spacing(1.5)},r=o.breakpoints.down("md"),t={marginTop:o.spacing(8)},r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n})),E=b.Ry().shape({phone:b.Z_().required("\u0645\u0648\u0628\u0627\u06cc\u0644 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").matches(/d*/," \u0645\u0648\u0628\u0627\u06cc\u0644 \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f \u0648 \u0628\u0627 09 \u0634\u0631\u0648\u0639 \u0634\u0648\u062f").test("len","\u0645\u0648\u0628\u0627\u06cc\u0644 \u0628\u0627\u06cc\u062f 11 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f",(function(e){return 11===e.toString().length})),hub_id:b.Rx(),company_id:b.Rx()});function F(e){var n=e.setPage,r=e.setFirstFormData,t=(0,y.useState)([]),g=t[0],_=t[1],b=(0,y.useState)([]),B=b[0],F=b[1],I={phone:"",company_id:0,hub_id:0},N=(0,c.cI)({defaultValues:I,mode:"onChange",resolver:(0,w.X)(E)}),W=N.control,T=N.setError,z=N.reset,O=N.handleSubmit,Q=N.formState.errors;(0,y.useEffect)((function(){P.Z.get("hub/all").then(function(){var e=S(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!=n.data?_(n.data):_([]);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){T("hub_id",{type:"custom",message:e.response.data.message}),C.ZP.error("\u062e\u0637\u0627 \u062f\u0631 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a.\u0644\u0637\u0641\u0627 \u0645\u062c\u062f\u062f \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f")})),P.Z.get("company/all").then(function(){var e=S(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!=n.data?F(n.data):F([]);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){T("comapny_id",{type:"custom",message:e.response.data.message}),C.ZP.error("\u062e\u0637\u0627 \u062f\u0631 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a.\u0644\u0637\u0641\u0627 \u0645\u062c\u062f\u062f \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f")}))}),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.Z,{sx:{mb:6},children:[(0,a.jsx)(k,{variant:"h5",children:"\u06a9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06a9\u0631\u062f\u06cc\u062f \u061f \ud83d\udd12"}),(0,a.jsx)(i.Z,{variant:"body2",children:"\u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u06a9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631"})]}),(0,a.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:O((function(e){C.ZP.promise(P.Z.post("auth/user/validate_phone",e,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){z(I),r(e),n(2)})).catch((function(e){T("phone",{type:"custom",message:e.response.data.message})})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a \u0641\u0631\u0645",success:"\u0641\u0631\u0645 \u062b\u0628\u062a \u0634\u062f",error:function(e){var n,r,t,o;return(null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)?null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}})})),children:[(0,a.jsxs)(u.Z,{fullWidth:!0,sx:{mb:4},children:[(0,a.jsx)(c.Qr,{name:"phone",control:W,rules:{required:!0},render:function(e){var n=e.field,r=n.value,t=n.onChange,o=n.onBlur;return(0,a.jsx)(l.Z,{label:"\u0645\u0648\u0628\u0627\u06cc\u0644",value:r,onBlur:o,onChange:t,error:Boolean(Q.phone),inputProps:{maxLength:11},placeholder:"09*********",dir:"ltr"})}}),Q.phone&&(0,a.jsx)(d.Z,{sx:{color:"error.main"},children:Q.phone.message})]}),(0,a.jsxs)(u.Z,{fullWidth:!0,sx:{mb:4},children:[(0,a.jsx)(c.Qr,{name:"company_id",control:W,render:function(e){var n=e.field,r=n.onChange,t=n.onBlur;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{children:"\u0634\u0631\u06a9\u062a"}),(0,a.jsx)(m.Z,{type:"number",onBlur:t,onChange:r,input:(0,a.jsx)(p.Z,{}),error:Boolean(Q.comapny_id),children:B.map((function(e){return(0,a.jsx)(f.Z,{value:parseInt(e.id,10),children:e.name},e.id)}))})]})}}),Q.comapny_id&&(0,a.jsx)(d.Z,{sx:{color:"error.main"},children:Q.comapny_id.message})]}),(0,a.jsxs)(u.Z,{fullWidth:!0,sx:{mb:4},children:[(0,a.jsx)(c.Qr,{name:"hub_id",control:W,render:function(e){var n=e.field,r=n.onChange,t=n.onBlur;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{children:"\u0647\u0627\u0628"}),(0,a.jsx)(m.Z,{type:"number",onBlur:t,onChange:r,input:(0,a.jsx)(p.Z,{}),error:Boolean(Q.hub_id),children:g.map((function(e){return(0,a.jsx)(f.Z,{value:parseInt(e.id,10),children:e.name},e.id)}))})]})}}),Q.hub_id&&(0,a.jsx)(d.Z,{sx:{color:"error.main"},children:Q.hub_id.message})]}),(0,a.jsx)(x.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:5.25},children:"\u0627\u0631\u0633\u0627\u0644 \u06a9\u062f"}),(0,a.jsx)(i.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)(v(),{passHref:!0,href:"/login",children:(0,a.jsxs)(i.Z,{component:j.Z,sx:{display:"flex",alignItems:"center",color:"primary.main",justifyContent:"center"},children:[(0,a.jsx)("span",{children:"\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0648\u0631\u0648\u062f"}),(0,a.jsx)(Z.Z,{sx:{mr:1.5,fontSize:"2rem"}})]})})})]})]})}}},function(e){e.O(0,[3978,9774,2888,179],(function(){return n=5941,e(e.s=n);var n}));var n=e.O();_N_E=n}]);