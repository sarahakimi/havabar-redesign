(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4815],{1942:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-wizard",function(){return n(72812)}])},72812:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return le}});var a=n(85893),t=n(86886),i=n(15861),s=n(67294),l=n(79172),o=n(66242),c=n(44472),d=n(11057),u=n(76624),p=n(18972),h=n(83578),m=n(50135),x=n(93946),j=n(47312),f=n(44267),b=n(94054),g=n(57709),Z=n(87109),v=n(18360),w=n(95898),y=n(42218),C=n(74931),k=n(11496),P=n(5026);function S(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var L=(0,k.ZP)(l.Z)((function(e){var r,n=e.theme;return S(r={},n.breakpoints.down("md"),{"& .MuiStepper-horizontal:not(.MuiStepper-alternativeLabel)":{flexDirection:"column",alignItems:"flex-start"}}),S(r,"& .MuiStep-root",{"& .step-label":{display:"flex",alignItems:"center",justifyContent:"center"},"& .step-number":{fontWeight:600,letterSpacing:.25,fontSize:"2.125rem",marginRight:n.spacing(2.5),color:n.palette.text.primary},"& .step-title":{fontWeight:500,fontSize:"0.875rem",letterSpacing:"0.1px",color:n.palette.text.primary},"& .step-subtitle":{fontWeight:400,fontSize:"0.75rem",letterSpacing:"0.4px",color:n.palette.text.secondary},"& .MuiStepLabel-root.Mui-disabled":{"& .step-number":{color:n.palette.text.disabled}},"& .Mui-error":{"& .MuiStepLabel-labelContainer, & .step-number, & .step-title, & .step-subtitle":{color:n.palette.error.main}}}),S(r,"& .MuiStepConnector-root",{"& .MuiStepConnector-line":{borderWidth:3,borderRadius:3},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:n.palette.primary.main}},"&.Mui-disabled .MuiStepConnector-line":{borderColor:(0,P.E)(n.palette.primary.main,.12)}}),S(r,"& .MuiStepper-alternativeLabel",{"& .MuiStepConnector-root":{top:10},"& .MuiStepLabel-labelContainer":{display:"flex",alignItems:"center",flexDirection:"column","& > * + *":{marginTop:n.spacing(1)}}}),S(r,"& .MuiStepper-vertical",{"& .MuiStep-root":{"& .step-label":{justifyContent:"flex-start"},"& .MuiStepContent-root":{borderWidth:3,marginLeft:n.spacing(2.25),borderColor:n.palette.primary.main},"& .button-wrapper":{marginTop:n.spacing(4)},"&.active + .MuiStepConnector-root .MuiStepConnector-line":{borderColor:n.palette.primary.main}},"& .MuiStepConnector-root":{marginLeft:n.spacing(2.25),"& .MuiStepConnector-line":{borderRadius:0}}}),r})),q=n(48075),I=n(39693);function A(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function N(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(r){A(e,r,n[r])}))}return e}var W=(0,k.ZP)(l.Z)((function(e){var r=e.theme;return{width:20,height:20,borderWidth:3,borderRadius:"50%",borderStyle:"solid",borderColor:(0,P.E)(r.palette.primary.main,.12)}}));var M=function(e){var r=e.active,n=e.completed;return e.error?(0,a.jsx)(q.Z,{sx:{width:20,height:20,color:"error.main",transform:"scale(1.2)"}}):n?(0,a.jsx)(I.Z,{sx:{width:20,height:20,color:"primary.main",transform:"scale(1.2)"}}):(0,a.jsx)(W,{sx:N({},r&&{borderColor:"primary.main"})})};function O(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function z(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(r){O(e,r,n[r])}))}return e}var B=[{title:"Account Details",subtitle:"Enter your Account Details"},{title:"Personal Info",subtitle:"Setup Information"},{title:"Social Links",subtitle:"Add Social Links"}];var F=function(){var e=(0,s.useState)(""),r=e[0],n=e[1],k=(0,s.useState)(""),P=k[0],S=k[1],q=(0,s.useState)(""),I=q[0],A=q[1],N=(0,s.useState)(""),W=N[0],F=N[1],_=(0,s.useState)(""),D=_[0],E=_[1],T=(0,s.useState)(""),G=T[0],Q=T[1],R=(0,s.useState)(""),U=R[0],V=R[1],X=(0,s.useState)(""),K=X[0],H=X[1],J=(0,s.useState)(""),Y=J[0],$=J[1],ee=(0,s.useState)(0),re=ee[0],ne=ee[1],ae=(0,s.useState)([]),te=ae[0],ie=ae[1],se=(0,s.useState)({password:"",password2:"",showPassword:!1,showPassword2:!1}),le=se[0],oe=se[1],ce=function(){ne((function(e){return e-1}))},de=function(){ne((function(e){return e+1})),re===B.length-1&&C.ZP.success("Form Submitted")},ue=function(){n(""),S(""),A(""),F(""),E(""),Q(""),V(""),H(""),ie([]),$(""),ne(0),oe(z({},le,{password:"",password2:""}))},pe=function(){oe(z({},le,{showPassword:!le.showPassword}))},he=function(e){e.preventDefault()},me=function(e){return function(r){oe(z({},le,O({},e,r.target.value)))}},xe=function(){oe(z({},le,{showPassword2:!le.showPassword2}))},je=function(e){e.preventDefault()},fe=function(e){ie(e.target.value)},be=function(e){switch(e){case 0:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(m.Z,{fullWidth:!0,label:"Username",value:D,placeholder:"carterLeonard",onChange:function(e){return E(e.target.value)}})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(m.Z,{fullWidth:!0,type:"email",label:"Email",value:r,placeholder:"carterleonard@gmail.com",onChange:function(e){return n(e.target.value)}})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(j.Z,{htmlFor:"stepper-alternative-account-password",children:"Password"}),(0,a.jsx)(g.Z,{label:"Password",value:le.password,id:"stepper-alternative-account-password",onChange:(i="password",function(e){oe(z({},le,O({},i,e.target.value)))}),type:le.showPassword?"text":"password",endAdornment:(0,a.jsx)(Z.Z,{position:"end",children:(0,a.jsx)(x.Z,{edge:"end",onClick:pe,onMouseDown:he,"aria-label":"toggle password visibility",children:le.showPassword?(0,a.jsx)(w.Z,{}):(0,a.jsx)(y.Z,{})})})})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(j.Z,{htmlFor:"stepper-alternative-account-password-2",children:"Confirm Password"}),(0,a.jsx)(g.Z,{value:le.password2,label:"Confirm Password",id:"stepper-alternative-account-password-2",onChange:me("password2"),type:le.showPassword2?"text":"password",endAdornment:(0,a.jsx)(Z.Z,{position:"end",children:(0,a.jsx)(x.Z,{edge:"end","aria-label":"toggle password visibility",onClick:xe,onMouseDown:je,children:le.showPassword2?(0,a.jsx)(w.Z,{}):(0,a.jsx)(y.Z,{})})})})]})})]});case 1:return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(m.Z,{fullWidth:!0,label:"First Name",placeholder:"Leonard",value:Y,onChange:function(e){return $(e.target.value)}})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(m.Z,{fullWidth:!0,label:"Last Name",placeholder:"Carter",value:G,onChange:function(e){return Q(e.target.value)}})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(j.Z,{id:"stepper-alternative-personal-select-label",children:"Country"}),(0,a.jsxs)(v.Z,{label:"Country",value:I,id:"stepper-alternative-personal-select",onChange:function(e){return A(e.target.value)},labelId:"stepper-alternative-personal-select-label",children:[(0,a.jsx)(p.Z,{value:"UK",children:"UK"}),(0,a.jsx)(p.Z,{value:"USA",children:"USA"}),(0,a.jsx)(p.Z,{value:"Australia",children:"Australia"}),(0,a.jsx)(p.Z,{value:"Germany",children:"Germany"})]})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(j.Z,{id:"stepper-alternative-personal-multiple-select-label",children:"Language"}),(0,a.jsxs)(v.Z,{multiple:!0,value:te,onChange:fe,id:"stepper-alternative-personal-multiple-select",labelId:"stepper-alternative-personal-multiple-select-label",input:(0,a.jsx)(g.Z,{label:"Language",id:"stepper-alternative-select-multiple-language"}),children:[(0,a.jsx)(p.Z,{value:"English",children:"English"}),(0,a.jsx)(p.Z,{value:"French",children:"French"}),(0,a.jsx)(p.Z,{value:"Spanish",children:"Spanish"}),(0,a.jsx)(p.Z,{value:"Portuguese",children:"Portuguese"}),(0,a.jsx)(p.Z,{value:"Italian",children:"Italian"}),(0,a.jsx)(p.Z,{value:"German",children:"German"}),(0,a.jsx)(p.Z,{value:"Arabic",children:"Arabic"})]})]})})]},e);case 2:return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(m.Z,{fullWidth:!0,label:"Twitter",value:W,onChange:function(e){return F(e.target.value)},placeholder:"https://twitter.com/carterLeonard"})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(m.Z,{fullWidth:!0,label:"Facebook",value:U,onChange:function(e){return V(e.target.value)},placeholder:"https://facebook.com/carterLeonard"})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(m.Z,{fullWidth:!0,label:"Google+",value:P,onChange:function(e){return S(e.target.value)},placeholder:"https://plus.google.com/carterLeonard"})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(m.Z,{fullWidth:!0,label:"LinkedIn",value:K,onChange:function(e){return H(e.target.value)},placeholder:"https://linkedin.com/carterLeonard"})})]},e);default:return"Unknown Step"}var i};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(L,{children:(0,a.jsx)(u.Z,{activeStep:re,alternativeLabel:!0,children:B.map((function(e,r){return(0,a.jsx)(c.Z,{children:(0,a.jsx)(h.Z,{StepIconComponent:M,children:(0,a.jsx)("div",{className:"step-label",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{className:"step-title",children:e.title}),(0,a.jsx)(i.Z,{className:"step-subtitle",children:e.subtitle})]})})})},r)}))})}),(0,a.jsx)(o.Z,{sx:{mt:4},children:(0,a.jsx)(f.Z,{children:re===B.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{children:"All steps are completed!"}),(0,a.jsx)(l.Z,{sx:{mt:4,display:"flex",justifyContent:"flex-end"},children:(0,a.jsx)(d.Z,{size:"large",variant:"contained",onClick:ue,children:"Reset"})})]}):(0,a.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:(0,a.jsxs)(t.ZP,{container:!0,spacing:5,children:[(0,a.jsxs)(t.ZP,{item:!0,xs:12,children:[(0,a.jsx)(i.Z,{variant:"body2",sx:{fontWeight:600,color:"text.primary"},children:B[re].title}),(0,a.jsx)(i.Z,{variant:"caption",component:"p",children:B[re].subtitle})]}),be(re),(0,a.jsxs)(t.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(d.Z,{size:"large",variant:"outlined",color:"secondary",disabled:0===re,onClick:ce,children:"Back"}),(0,a.jsx)(d.Z,{size:"large",variant:"contained",onClick:de,children:re===B.length-1?"Submit":"Next"})]})]})})})})]})},_=n(78445),D=n(76229),E=n(86010),T=[{title:"Account Details",subtitle:"Enter your Account Details",description:"Chocolate cookie lollipop toffee candy canes marzipan liquorice chocolate. Cake gummi bears dessert lollipop apple pie candy. Candy pie sesame snaps lollipop biscuit chocolate cake fruitcake apple pie. Toffee carrot cake biscuit oat cake jujubes fruitcake biscuit gummi bears. Cake carrot cake jujubes sugar plum pastry gummi bears gingerbread icing. Lemon drops pie cake. Halvah marzipan bonbon gingerbread cupcake pastry gummi bears cake jujubes."},{title:"Personal Info",subtitle:"Setup Information",description:"Lemon drops ice cream danish macaroon bear claw cookie. Liquorice ice cream chocolate bar pastry chocolate bar candy. Caramels candy canes marshmallow souffl\xe9 biscuit tart fruitcake tiramisu. Gummi bears icing gingerbread pastry bonbon gummies candy canes pastry. Candy canes chocolate chupa chups cake cheesecake apple pie halvah dessert. Chupa chups wafer tootsie roll fruitcake lemon drops cookie donut topping powder."},{title:"Social Links",subtitle:"Add Social Links",description:"Jelly lollipop halvah bear claw jujubes macaroon candy canes. Souffl\xe9 halvah lollipop liquorice macaroon powder. Cookie topping pastry oat cake caramels bonbon. Sesame snaps sweet cookie macaroon souffl\xe9 pudding. Chocolate donut macaroon muffin donut biscuit marzipan halvah. Bear claw biscuit chocolate cake chupa chups oat cake bear claw cupcake tiramisu apple pie. Carrot cake bear claw marshmallow sweet pudding toffee."}];var G=function(){var e=(0,s.useState)(0),r=e[0],n=e[1],t=function(){n((function(e){return e-1}))},p=function(){n((function(e){return e+1})),r===T.length-1&&C.ZP.success("Completed All Steps!!")};return(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(_.Z,{title:"Vertical Stepper with Numbers",titleTypographyProps:{variant:"h6"}}),(0,a.jsxs)(f.Z,{children:[(0,a.jsx)(L,{children:(0,a.jsx)(u.Z,{activeStep:r,orientation:"vertical",children:T.map((function(e,n){return(0,a.jsxs)(c.Z,{className:(0,E.Z)({active:r===n}),children:[(0,a.jsx)(h.Z,{StepIconComponent:M,children:(0,a.jsxs)("div",{className:"step-label",children:[(0,a.jsxs)(i.Z,{className:"step-number",children:["0",n+1]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{className:"step-title",children:e.title}),(0,a.jsx)(i.Z,{className:"step-subtitle",children:e.subtitle})]})]})}),(0,a.jsxs)(D.Z,{children:[(0,a.jsx)(i.Z,{children:e.description}),(0,a.jsxs)("div",{className:"button-wrapper",children:[(0,a.jsx)(d.Z,{size:"small",color:"secondary",variant:"outlined",onClick:t,disabled:0===r,children:"Back"}),(0,a.jsx)(d.Z,{size:"small",variant:"contained",onClick:p,sx:{ml:4},children:r===T.length-1?"Finish":"Next"})]})]})]},n)}))})}),r===T.length&&(0,a.jsxs)(l.Z,{sx:{mt:2},children:[(0,a.jsx)(i.Z,{children:"All steps are completed!"}),(0,a.jsx)(d.Z,{size:"small",sx:{mt:2},variant:"contained",onClick:function(){n(0)},children:"Reset"})]})]})]})},Q=n(67720),R=n(56815),U=n(74231),V=n(42283),X=n(57492);function K(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function H(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(r){K(e,r,n[r])}))}return e}var J=[{title:"Account Details",subtitle:"Enter your Account Details"},{title:"Personal Info",subtitle:"Setup Information"},{title:"Social Links",subtitle:"Add Social Links"}],Y={email:"",username:"",password:"","confirm-password":""},$={country:"",language:[],"last-name":"","first-name":""},ee={google:"",twitter:"",facebook:"",linkedIn:""},re=U.Ry().shape({username:U.Z_().required(),email:U.Z_().email().required(),password:U.Z_().min(6).required(),"confirm-password":U.Z_().required().oneOf([U.iH("password"),null],"Passwords must match")}),ne=U.Ry().shape({country:U.Z_().required(),"last-name":U.Z_().required(),"first-name":U.Z_().required(),language:U.IX().min(1).required()}),ae=U.Ry().shape({google:U.Z_().required(),twitter:U.Z_().required(),facebook:U.Z_().required(),linkedIn:U.Z_().required()});var te=function(){var e=(0,s.useState)(0),r=e[0],n=e[1],k=(0,s.useState)({password:"",password2:"",showPassword:!1,showPassword2:!1}),P=k[0],S=k[1],q=(0,V.cI)({defaultValues:Y,resolver:(0,X.X)(re)}),I=q.reset,A=q.control,N=q.handleSubmit,W=q.formState.errors,O=(0,V.cI)({defaultValues:$,resolver:(0,X.X)(ne)}),z=O.reset,B=O.control,F=O.handleSubmit,_=O.formState.errors,D=(0,V.cI)({defaultValues:ee,resolver:(0,X.X)(ae)}),E=D.reset,T=D.control,G=D.handleSubmit,U=D.formState.errors,K=function(){n((function(e){return e-1}))},te=function(){n(0),E({google:"",twitter:"",facebook:"",linkedIn:""}),I({email:"",username:"",password:"","confirm-password":""}),z({country:"",language:[],"last-name":"","first-name":""})},ie=function(){n(r+1),r===J.length-1&&C.ZP.success("Form Submitted")},se=function(){S(H({},P,{showPassword:!P.showPassword}))},le=function(e){e.preventDefault()},oe=function(){S(H({},P,{showPassword2:!P.showPassword2}))},ce=function(e){e.preventDefault()};return(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(f.Z,{children:(0,a.jsx)(L,{children:(0,a.jsx)(u.Z,{activeStep:r,children:J.map((function(e,n){var t={};return n===r&&(t.error=!1,(W.email||W.username||W.password||W["confirm-password"])&&0===r||(_.country||_.language||_["last-name"]||_["first-name"])&&1===r||(U.google||U.twitter||U.facebook||U.linkedIn)&&2===r?t.error=!0:t.error=!1),(0,a.jsx)(c.Z,{children:(0,a.jsx)(h.Z,H({},t,{StepIconComponent:M,children:(0,a.jsxs)("div",{className:"step-label",children:[(0,a.jsxs)(i.Z,{className:"step-number",children:["0",n+1]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{className:"step-title",children:e.title}),(0,a.jsx)(i.Z,{className:"step-subtitle",children:e.subtitle})]})]})}))},n)}))})})}),(0,a.jsx)(Q.Z,{sx:{m:0}}),(0,a.jsx)(f.Z,{children:r===J.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{children:"All steps are completed!"}),(0,a.jsx)(l.Z,{sx:{mt:4,display:"flex",justifyContent:"flex-end"},children:(0,a.jsx)(d.Z,{size:"large",variant:"contained",onClick:te,children:"Reset"})})]}):function(e){switch(e){case 0:return(0,a.jsx)("form",{onSubmit:N(ie),children:(0,a.jsxs)(t.ZP,{container:!0,spacing:5,children:[(0,a.jsxs)(t.ZP,{item:!0,xs:12,children:[(0,a.jsx)(i.Z,{variant:"body2",sx:{fontWeight:600,color:"text.primary"},children:J[0].title}),(0,a.jsx)(i.Z,{variant:"caption",component:"p",children:J[0].subtitle})]}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(V.Qr,{name:"username",control:A,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsx)(m.Z,{value:n,label:"Username",onChange:t,placeholder:"carterLeonard",error:Boolean(W.username),"aria-describedby":"stepper-linear-account-username"})}}),W.username&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-account-username",children:"This field is required"})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(V.Qr,{name:"email",control:A,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsx)(m.Z,{type:"email",value:n,label:"Email",onChange:t,error:Boolean(W.email),placeholder:"carterleonard@gmail.com","aria-describedby":"stepper-linear-account-email"})}}),W.email&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-account-email",children:W.email.message})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(j.Z,{htmlFor:"stepper-linear-account-password",error:Boolean(W.password),children:"Password"}),(0,a.jsx)(V.Qr,{name:"password",control:A,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsx)(g.Z,{value:n,label:"Password",onChange:t,id:"stepper-linear-account-password",error:Boolean(W.password),type:P.showPassword?"text":"password",endAdornment:(0,a.jsx)(Z.Z,{position:"end",children:(0,a.jsx)(x.Z,{edge:"end",onClick:se,onMouseDown:le,"aria-label":"toggle password visibility",children:P.showPassword?(0,a.jsx)(w.Z,{}):(0,a.jsx)(y.Z,{})})})})}}),W.password&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-account-password-helper",children:W.password.message})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(j.Z,{htmlFor:"stepper-linear-account-confirm-password",error:Boolean(W["confirm-password"]),children:"Confirm Password"}),(0,a.jsx)(V.Qr,{name:"confirm-password",control:A,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsx)(g.Z,{value:n,onChange:t,label:"Confirm Password",id:"stepper-linear-account-confirm-password",type:P.showPassword2?"text":"password",error:Boolean(W["confirm-password"]),endAdornment:(0,a.jsx)(Z.Z,{position:"end",children:(0,a.jsx)(x.Z,{edge:"end","aria-label":"toggle password visibility",onClick:oe,onMouseDown:ce,children:P.showPassword2?(0,a.jsx)(w.Z,{}):(0,a.jsx)(y.Z,{})})})})}}),W["confirm-password"]&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-account-confirm-password-helper",children:W["confirm-password"].message})]})}),(0,a.jsxs)(t.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(d.Z,{size:"large",variant:"outlined",color:"secondary",disabled:!0,children:"Back"}),(0,a.jsx)(d.Z,{size:"large",type:"submit",variant:"contained",children:"Next"})]})]})},0);case 1:return(0,a.jsx)("form",{onSubmit:F(ie),children:(0,a.jsxs)(t.ZP,{container:!0,spacing:5,children:[(0,a.jsxs)(t.ZP,{item:!0,xs:12,children:[(0,a.jsx)(i.Z,{variant:"body2",sx:{fontWeight:600,color:"text.primary"},children:J[1].title}),(0,a.jsx)(i.Z,{variant:"caption",component:"p",children:J[1].subtitle})]}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(V.Qr,{name:"first-name",control:B,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsx)(m.Z,{value:n,label:"First Name",onChange:t,placeholder:"Leonard",error:Boolean(_["first-name"]),"aria-describedby":"stepper-linear-personal-first-name"})}}),_["first-name"]&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-personal-first-name",children:"This field is required"})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(V.Qr,{name:"last-name",control:B,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsx)(m.Z,{value:n,label:"Last Name",onChange:t,placeholder:"Carter",error:Boolean(_["last-name"]),"aria-describedby":"stepper-linear-personal-last-name"})}}),_["last-name"]&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-personal-last-name",children:"This field is required"})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(j.Z,{id:"stepper-linear-personal-country",error:Boolean(_.country),htmlFor:"stepper-linear-personal-country",children:"Country"}),(0,a.jsx)(V.Qr,{name:"country",control:B,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsxs)(v.Z,{value:n,label:"Country",onChange:t,error:Boolean(_.country),labelId:"stepper-linear-personal-country","aria-describedby":"stepper-linear-personal-country-helper",children:[(0,a.jsx)(p.Z,{value:"UK",children:"UK"}),(0,a.jsx)(p.Z,{value:"USA",children:"USA"}),(0,a.jsx)(p.Z,{value:"Australia",children:"Australia"}),(0,a.jsx)(p.Z,{value:"Germany",children:"Germany"})]})}}),_.country&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-personal-country-helper",children:"This field is required"})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(j.Z,{error:Boolean(_.language),htmlFor:"stepper-linear-personal-language",id:"stepper-linear-personal-language-label",children:"Language"}),(0,a.jsx)(V.Qr,{name:"language",control:B,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsxs)(v.Z,{multiple:!0,onChange:t,id:"stepper-linear-personal-language",value:Array.isArray(n)?n:[],error:Boolean(_.language),labelId:"stepper-linear-personal-language-label",input:(0,a.jsx)(g.Z,{label:"Language",id:"stepper-linear-select-multiple-language"}),children:[(0,a.jsx)(p.Z,{value:"English",children:"English"}),(0,a.jsx)(p.Z,{value:"French",children:"French"}),(0,a.jsx)(p.Z,{value:"Spanish",children:"Spanish"}),(0,a.jsx)(p.Z,{value:"Portuguese",children:"Portuguese"}),(0,a.jsx)(p.Z,{value:"Italian",children:"Italian"}),(0,a.jsx)(p.Z,{value:"German",children:"German"}),(0,a.jsx)(p.Z,{value:"Arabic",children:"Arabic"})]})}}),_.language&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-personal-language-helper",children:"This field is required"})]})}),(0,a.jsxs)(t.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(d.Z,{size:"large",variant:"outlined",color:"secondary",onClick:K,children:"Back"}),(0,a.jsx)(d.Z,{size:"large",type:"submit",variant:"contained",children:"Next"})]})]})},1);case 2:return(0,a.jsx)("form",{onSubmit:G(ie),children:(0,a.jsxs)(t.ZP,{container:!0,spacing:5,children:[(0,a.jsxs)(t.ZP,{item:!0,xs:12,children:[(0,a.jsx)(i.Z,{variant:"body2",sx:{fontWeight:600,color:"text.primary"},children:J[2].title}),(0,a.jsx)(i.Z,{variant:"caption",component:"p",children:J[2].subtitle})]}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(V.Qr,{name:"twitter",control:T,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsx)(m.Z,{value:n,label:"Twitter",onChange:t,error:Boolean(U.twitter),placeholder:"https://twitter.com/carterLeonard","aria-describedby":"stepper-linear-social-twitter"})}}),U.twitter&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-social-twitter",children:"This field is required"})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(V.Qr,{name:"facebook",control:T,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsx)(m.Z,{value:n,label:"Facebook",onChange:t,error:Boolean(U.facebook),placeholder:"https://facebook.com/carterLeonard","aria-describedby":"stepper-linear-social-facebook"})}}),U.facebook&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-social-facebook",children:"This field is required"})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(V.Qr,{name:"google",control:T,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsx)(m.Z,{value:n,label:"Google+",onChange:t,error:Boolean(U.google),"aria-describedby":"stepper-linear-social-google",placeholder:"https://plus.google.com/carterLeonard"})}}),U.google&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-social-google",children:"This field is required"})]})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(b.Z,{fullWidth:!0,children:[(0,a.jsx)(V.Qr,{name:"linkedIn",control:T,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange;return(0,a.jsx)(m.Z,{value:n,label:"LinkedIn",onChange:t,error:Boolean(U.linkedIn),placeholder:"https://linkedin.com/carterLeonard","aria-describedby":"stepper-linear-social-linkedIn"})}}),U.linkedIn&&(0,a.jsx)(R.Z,{sx:{color:"error.main"},id:"stepper-linear-social-linkedIn",children:"This field is required"})]})}),(0,a.jsxs)(t.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(d.Z,{size:"large",variant:"outlined",color:"secondary",onClick:K,children:"Back"}),(0,a.jsx)(d.Z,{size:"large",type:"submit",variant:"contained",children:"Submit"})]})]})},2);default:return null}}(r)})]})},ie=[{title:"Account Details",subtitle:"Enter your Account Details",description:"Chocolate cookie lollipop toffee candy canes marzipan liquorice chocolate. Cake gummi bears dessert lollipop apple pie candy. Candy pie sesame snaps lollipop biscuit chocolate cake fruitcake apple pie. Toffee carrot cake biscuit oat cake jujubes fruitcake biscuit gummi bears. Cake carrot cake jujubes sugar plum pastry gummi bears gingerbread icing. Lemon drops pie cake. Halvah marzipan bonbon gingerbread cupcake pastry gummi bears cake jujubes."},{title:"Personal Info",subtitle:"Setup Information",description:"Lemon drops ice cream danish macaroon bear claw cookie. Liquorice ice cream chocolate bar pastry chocolate bar candy. Caramels candy canes marshmallow souffl\xe9 biscuit tart fruitcake tiramisu. Gummi bears icing gingerbread pastry bonbon gummies candy canes pastry. Candy canes chocolate chupa chups cake cheesecake apple pie halvah dessert. Chupa chups wafer tootsie roll fruitcake lemon drops cookie donut topping powder."},{title:"Social Links",subtitle:"Add Social Links",description:"Jelly lollipop halvah bear claw jujubes macaroon candy canes. Souffl\xe9 halvah lollipop liquorice macaroon powder. Cookie topping pastry oat cake caramels bonbon. Sesame snaps sweet cookie macaroon souffl\xe9 pudding. Chocolate donut macaroon muffin donut biscuit marzipan halvah. Bear claw biscuit chocolate cake chupa chups oat cake bear claw cupcake tiramisu apple pie. Carrot cake bear claw marshmallow sweet pudding toffee."}];var se=function(){var e=(0,s.useState)(0),r=e[0],n=e[1],t=function(){n((function(e){return e-1}))},p=function(){n((function(e){return e+1})),r===ie.length-1&&C.ZP.success("Completed All Steps!!")};return(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(_.Z,{title:"Vertical Stepper without Numbers",titleTypographyProps:{variant:"h6"}}),(0,a.jsxs)(f.Z,{children:[(0,a.jsx)(L,{children:(0,a.jsx)(u.Z,{activeStep:r,orientation:"vertical",children:ie.map((function(e,n){return(0,a.jsxs)(c.Z,{className:(0,E.Z)({active:r===n}),children:[(0,a.jsx)(h.Z,{StepIconComponent:M,children:(0,a.jsx)("div",{className:"step-label",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{className:"step-title",children:e.title}),(0,a.jsx)(i.Z,{className:"step-subtitle",children:e.subtitle})]})})}),(0,a.jsxs)(D.Z,{children:[(0,a.jsx)(i.Z,{children:e.description}),(0,a.jsxs)("div",{className:"button-wrapper",children:[(0,a.jsx)(d.Z,{size:"small",color:"secondary",variant:"outlined",onClick:t,disabled:0===r,children:"Back"}),(0,a.jsx)(d.Z,{size:"small",variant:"contained",onClick:p,sx:{ml:4},children:r===ie.length-1?"Finish":"Next"})]})]})]},n)}))})}),r===ie.length&&(0,a.jsxs)(l.Z,{sx:{mt:4},children:[(0,a.jsx)(i.Z,{children:"All steps are completed!"}),(0,a.jsx)(d.Z,{size:"small",sx:{mt:2},variant:"contained",onClick:function(){n(0)},children:"Reset"})]})]})]})};var le=function(){return(0,a.jsxs)(t.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(t.ZP,{item:!0,xs:12,children:(0,a.jsx)(i.Z,{variant:"h6",children:"Linear Stepper with Validation"})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,children:(0,a.jsx)(te,{})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,sx:{pt:function(e){return"".concat(e.spacing(8)," !important")}},children:(0,a.jsx)(i.Z,{variant:"h6",children:"Alternative Label"})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,children:(0,a.jsx)(F,{})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,children:(0,a.jsx)(G,{})}),(0,a.jsx)(t.ZP,{item:!0,xs:12,children:(0,a.jsx)(se,{})})]})}}},function(e){e.O(0,[2283,1524,9075,3305,9774,2888,179],(function(){return r=1942,e(e.s=r);var r}));var r=e.O();_N_E=r}]);