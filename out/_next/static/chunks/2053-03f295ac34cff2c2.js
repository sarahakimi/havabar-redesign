"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2053],{2053:function(e,r,n){n.r(r);var o=n(34051),a=n.n(o),l=n(85893),s=n(67294),t=n(58826),i=n(11057),u=n(11496),d=n(50135),c=n(15861),h=n(79172),m=n(94054),x=n(56815),p=n(74231),f=n(2638),g=n(42283),j=n(42734),Z=n(64666),v=n(33090),b=n(6514),_=n(31425),w=n(5370),B=n(58951),C=n(47312),y=n(57709),q=n(18360),k=n(18972),S=n(87109),F=n(93946),P=n(95898),W=n(42218);function Q(e,r,n,o,a,l,s){try{var t=e[l](s),i=t.value}catch(u){return void n(u)}t.done?r(i):Promise.resolve(i).then(o,a)}var I=(0,u.ZP)(h.Z)((function(e){var r=e.theme;return{display:"flex",alignItems:"center",padding:r.spacing(3,4),justifyContent:"space-between",backgroundColor:r.palette.background.default}})),z=p.Ry().shape({natural_code:p.Z_().required("\u06a9\u062f\u0645\u0644\u06cc  \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").matches(/d*/,"\u06a9\u062f\u0645\u0644\u06cc \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").test("len","\u06a9\u062f\u0645\u0644\u06cc \u0628\u0627\u06cc\u062f 10 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f",(function(e){return 10===e.toString().length})),name:p.Z_().required("\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(5,"\u0641\u06cc\u0644\u062f \u0631\u0627 \u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u067e\u0631 \u06a9\u0646\u06cc\u062f"),phone:p.Z_().required("\u0645\u0648\u0628\u0627\u06cc\u0644 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").matches(/d*/," \u0645\u0648\u0628\u0627\u06cc\u0644 \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f \u0648 \u0628\u0627 09 \u0634\u0631\u0648\u0639 \u0634\u0648\u062f").test("len","\u0645\u0648\u0628\u0627\u06cc\u0644 \u0628\u0627\u06cc\u062f 11 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f",(function(e){return 11===e.toString().length})),hub_id:p.Rx().required("\u0647\u0627\u0628 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"),username:p.Z_().required("\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(4,"\u062d\u062f\u0627\u0642\u0644 \u0628\u0627\u06cc\u062f \u0639 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f"),password:p.Z_().required("\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(4,"\u062d\u062f\u0627\u0642\u0644 \u0628\u0627\u06cc\u062f \u0639 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f"),vehicle:p.Z_().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(3,"\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f")});r.default=function(e){var r=e.open,n=e.toggle,o=e.setChange,u=e.user,p=e.edit,E=e.showUser,M=e.setLoading,A=(0,s.useState)(!1),D=A[0],L=A[1],N=(0,s.useState)(!1),R=N[0],T=N[1],V=(0,s.useState)([]),U=V[0],X=V[1];(0,s.useEffect)((function(){M(!0),console.log("user",u),w.Z.get("hub/all").then(function(){var e,r=(e=a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M(!1),null!=r.data?X(r.data):X([]),console.log(U);case 3:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(o,a){var l=e.apply(r,n);function s(e){Q(l,o,a,s,t,"next",e)}function t(e){Q(l,o,a,s,t,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}()).catch((function(e){M(!1),console.log(e)}))}),[]);var G={natural_code:"",name:"",phone:"",hub_id:0,username:"",password:"",vehicle:""},H=u?{natural_code:u.natural_code,name:u.name,phone:u.phone,hub_id:u.hub_id,username:u.username,password:"********",vehicle:u.vehicle}:G,J=(0,g.cI)({defaultValues:H,mode:"onChange",resolver:(0,f.X)(z)}),K=J.reset,O=J.control,Y=J.handleSubmit,$=J.setError,ee=J.formState.errors,re=function(){n(),K(H)};return(0,l.jsxs)(t.ZP,{open:r,anchor:"left",variant:"temporary",onClose:re,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,l.jsxs)(I,{children:[(0,l.jsx)(c.Z,{variant:"h6",children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0631\u0627\u0646\u0646\u062f\u0647"}),(0,l.jsx)(j.Z,{fontSize:"small",onClick:re,sx:{cursor:"pointer"}})]}),(0,l.jsx)(h.Z,{sx:{p:5},children:(0,l.jsxs)("form",{onSubmit:Y((function(e){M(!0),p?w.Z.put("user/admin/".concat(u.id),e,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){K(G),L(!0),M(!1),n(),o(!0)})).catch((function(e){M(!1),$("natural_code",{type:"custom",message:e.response.data.message})})):(M(!0),w.Z.post("user/admin/courier/register",e,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){K(G),L(!0),M(!1),n(),o(!0)})).catch((function(e){$("natural_code",{type:"custom",message:e.response.data.message}),M(!1)})))})),children:[(0,l.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,l.jsx)(g.Qr,{fullWidth:!0,name:"natural_code",control:O,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,l.jsx)(d.Z,{autoFocus:!0,label:"\u06a9\u062f\u0645\u0644\u06cc",value:n,onBlur:a,onChange:o,error:Boolean(ee.natural_code),inputProps:{maxLength:10},dir:"ltr",disabled:E})}}),ee.natural_code&&(0,l.jsx)(x.Z,{sx:{color:"error.main"},children:ee.natural_code.message})]}),(0,l.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,l.jsx)(g.Qr,{name:"name",control:O,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,l.jsx)(d.Z,{autoFocus:!0,label:"\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",value:n,onBlur:a,onChange:o,error:Boolean(ee.name),disabled:E})}}),ee.name&&(0,l.jsx)(x.Z,{sx:{color:"error.main"},children:ee.name.message})]}),(0,l.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,l.jsx)(g.Qr,{name:"phone",control:O,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,l.jsx)(d.Z,{autoFocus:!0,label:"\u0645\u0648\u0628\u0627\u06cc\u0644",value:n,onBlur:a,onChange:o,error:Boolean(ee.phone),inputProps:{maxLength:11},placeholder:"09*********",dir:"ltr",disabled:E})}}),ee.phone&&(0,l.jsx)(x.Z,{sx:{color:"error.main"},children:ee.phone.message})]}),(0,l.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,l.jsx)(g.Qr,{name:"vehicle",control:O,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,l.jsx)(d.Z,{autoFocus:!0,label:"\u0648\u0633\u06cc\u0644\u0647 \u0646\u0642\u0644\u06cc\u0647",value:n,onBlur:a,onChange:o,error:Boolean(ee.vehicle),disabled:E})}}),ee.vehicle&&(0,l.jsx)(x.Z,{sx:{color:"error.main"},children:ee.vehicle.message})]}),(0,l.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,l.jsx)(g.Qr,{name:"username",control:O,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,l.jsx)(d.Z,{autoFocus:!0,label:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",value:n,onBlur:a,onChange:o,error:Boolean(ee.username),disabled:E})}}),ee.username&&(0,l.jsx)(x.Z,{sx:{color:"error.main"},children:ee.username.message})]}),(0,l.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,l.jsx)(C.Z,{htmlFor:"auth-login-v2-password",error:Boolean(ee.password),children:"\u06a9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631"}),(0,l.jsx)(g.Qr,{name:"password",control:O,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,l.jsx)(y.Z,{disabled:E,value:n,onBlur:a,label:"Password",onChange:o,id:"auth-login-v2-password",error:Boolean(ee.password),type:R?"text":"password",endAdornment:(0,l.jsx)(S.Z,{position:"end",children:(0,l.jsx)(F.Z,{edge:"end",onMouseDown:function(e){return e.preventDefault()},onClick:function(){return!E&&T(!R)},children:R?(0,l.jsx)(P.Z,{}):(0,l.jsx)(W.Z,{})})})})}})]}),(0,l.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,l.jsx)(g.Qr,{name:"hub_id",control:O,rules:{required:!0},render:function(e){var r=e.field,n=r.onChange,o=r.onBlur;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(C.Z,{children:"\u0647\u0627\u0628"}),(0,l.jsx)(q.Z,{type:"number",onBlur:o,id:"demo-multiple-name",onChange:n,input:(0,l.jsx)(y.Z,{label:"Name"}),error:Boolean(ee.hub_id),disabled:E,defaultValue:u?u.hub_id:0,children:U.map((function(e){return(0,l.jsx)(k.Z,{value:parseInt(e.id,10),children:e.name},e.id)}))})]})}}),ee.hub_id&&(0,l.jsx)(x.Z,{sx:{color:"error.main"},children:ee.hub_id.message})]}),(0,l.jsx)(h.Z,{sx:{display:"flex",alignItems:"center"},children:!E&&(0,l.jsx)(i.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},children:"\u0630\u062e\u06cc\u0631\u0647"})})]})}),(0,l.jsxs)(Z.Z,{open:D,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,l.jsx)(v.Z,{id:"alert-dialog-title",children:"\u0627\u06cc\u062c\u0627\u062f \u0631\u0627\u0646\u0646\u062f\u0647"}),(0,l.jsx)(b.Z,{children:(0,l.jsx)(B.Z,{id:"alert-dialog-description",children:"\u0631\u0627\u0646\u0646\u062f\u0647 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0627\u06cc\u062c\u0627\u062f \u0634\u062f"})}),(0,l.jsx)(_.Z,{children:(0,l.jsx)(i.Z,{onClick:function(){L(!1),o(!0)},autoFocus:!0,children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})})]})]})}}}]);