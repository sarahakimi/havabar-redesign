(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7091],{89947:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/account-settings",function(){return r(23044)}])},52890:function(e,n,r){"use strict";var s=(0,r(11496).ZP)("div")({display:"flex","& .rccs, & .rccs__card":{margin:0}});n.Z=s},59882:function(e,n,r){"use strict";r.d(n,{N:function(){return l},mf:function(){return a},oS:function(){return t},tE:function(){return o}});var s=function(e){var n=new Date;return new Date(e).getDate()===n.getDate()&&new Date(e).getMonth()===n.getMonth()&&new Date(e).getFullYear()===n.getFullYear()},t=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=new Date(e),t={month:"short",day:"numeric"};return n&&s(r)&&(t={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",t).format(new Date(e))},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\D+/g,"")},a=function(e,n){if(!e)return e;var r,s=n.fns.cardType(e),t=i(e);switch(s){case"amex":r="".concat(t.slice(0,4)," ").concat(t.slice(4,10)," ").concat(t.slice(10,15));break;case"dinersclub":r="".concat(t.slice(0,4)," ").concat(t.slice(4,10)," ").concat(t.slice(10,14));break;default:r="".concat(t.slice(0,4)," ").concat(t.slice(4,8)," ").concat(t.slice(8,12)," ").concat(t.slice(12,19))}return r.trim()},l=function(e){return e.replace(/^([1-9]\/|[2-9])$/g,"0$1/").replace(/^(0[1-9]|1[0-2])$/g,"$1/").replace(/^([0-1])([3-9])$/g,"0$1/$2").replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g,"$1/$2").replace(/^([0]+)\/|[0]+$/g,"0").replace(/[^\d\/]|^[\/]*$/g,"").replace(/\/\//g,"/")},o=function(e,n,r){var s=i(e),t="amex"===r.fns.cardType(n)?4:3;return s.slice(0,t)}},23044:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Pe}});var s=r(85893),t=r(67294),i=r(79172),a=r(66242),l=r(66568),o=r(55050),c=r(45670),d=r(11496),u=r(40044),x=r(37142),h=r(99642),m=r(41036),j=r(54889),f=r(74496),Z=r(86886),p=r(36872),g=r(18360),v=r(11057),b=r(18972),w=r(50135),P=r(40476),y=r(47312),C=r(68061),S=r(44267),D=r(94054),k=r(57709),N=r(50480),W=r(9198),A=r.n(W),I=r(64488);function O(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var E=(0,t.forwardRef)((function(e,n){return(0,s.jsx)(w.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(n){O(e,n,r[n])}))}return e}({inputRef:n,label:"Birth Date",fullWidth:!0},e))}));var R=function(){var e=(0,t.useState)(null),n=e[0],r=e[1];return(0,s.jsx)(S.Z,{children:(0,s.jsx)("form",{children:(0,s.jsxs)(Z.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(Z.ZP,{item:!0,xs:12,sx:{mt:5},children:(0,s.jsx)(w.Z,{fullWidth:!0,multiline:!0,label:"Bio",minRows:2,placeholder:"Bio",defaultValue:"The name\u2019s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant \ud83d\ude0e, scalable \ud83d\ude00, and lightning \ud83d\ude0d fast search and discovery experiences."})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsx)(I.Z,{children:(0,s.jsx)(A(),{selected:n,showYearDropdown:!0,showMonthDropdown:!0,id:"account-settings-date",placeholderText:"MM-DD-YYYY",customInput:(0,s.jsx)(E,{}),onChange:function(e){return r(e)}})})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsx)(w.Z,{fullWidth:!0,type:"number",label:"Phone",placeholder:"(123) 456-7890"})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsx)(w.Z,{fullWidth:!0,label:"Website",placeholder:"https://example.com/",defaultValue:"https://pixinvent.com/"})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsxs)(D.Z,{fullWidth:!0,children:[(0,s.jsx)(y.Z,{children:"Country"}),(0,s.jsxs)(g.Z,{label:"Country",defaultValue:"USA",children:[(0,s.jsx)(b.Z,{value:"USA",children:"USA"}),(0,s.jsx)(b.Z,{value:"UK",children:"UK"}),(0,s.jsx)(b.Z,{value:"Australia",children:"Australia"}),(0,s.jsx)(b.Z,{value:"Germany",children:"Germany"})]})]})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsxs)(D.Z,{fullWidth:!0,children:[(0,s.jsx)(y.Z,{id:"form-layouts-separator-multiple-select-label",children:"Languages"}),(0,s.jsxs)(g.Z,{multiple:!0,defaultValue:["English"],id:"account-settings-multiple-select",labelId:"account-settings-multiple-select-label",input:(0,s.jsx)(k.Z,{label:"Languages",id:"select-multiple-language"}),children:[(0,s.jsx)(b.Z,{value:"English",children:"English"}),(0,s.jsx)(b.Z,{value:"French",children:"French"}),(0,s.jsx)(b.Z,{value:"Spanish",children:"Spanish"}),(0,s.jsx)(b.Z,{value:"Portuguese",children:"Portuguese"}),(0,s.jsx)(b.Z,{value:"Italian",children:"Italian"}),(0,s.jsx)(b.Z,{value:"German",children:"German"}),(0,s.jsx)(b.Z,{value:"Arabic",children:"Arabic"})]})]})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsxs)(D.Z,{children:[(0,s.jsx)(P.Z,{sx:{lineHeight:1.5},children:"Gender"}),(0,s.jsxs)(C.Z,{row:!0,defaultValue:"male","aria-label":"gender",name:"account-settings-info-radio",children:[(0,s.jsx)(N.Z,{value:"male",label:"Male",control:(0,s.jsx)(p.Z,{})}),(0,s.jsx)(N.Z,{value:"female",label:"Female",control:(0,s.jsx)(p.Z,{})}),(0,s.jsx)(N.Z,{value:"other",label:"Other",control:(0,s.jsx)(p.Z,{})})]})]})}),(0,s.jsxs)(Z.ZP,{item:!0,xs:12,sx:{pt:function(e){return"".concat(e.spacing(7)," !important")}},children:[(0,s.jsx)(v.Z,{variant:"contained",sx:{mr:4},children:"Save Changes"}),(0,s.jsx)(v.Z,{type:"reset",variant:"outlined",color:"secondary",onClick:function(){return r(null)},children:"Reset"})]})]})})})},M=r(50122),z=r(46901),B=r(15861),F=r(92401),T=r(93946),_=r(42734);function L(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var V=(0,d.ZP)("img")((function(e){var n=e.theme;return{width:120,height:120,marginRight:n.spacing(5),borderRadius:n.shape.borderRadius}})),$=(0,d.ZP)(v.Z)((function(e){return L({},e.theme.breakpoints.down("sm"),{width:"100%",textAlign:"center"})})),U=(0,d.ZP)(v.Z)((function(e){var n=e.theme;return L({marginLeft:n.spacing(4)},n.breakpoints.down("sm"),{width:"100%",marginLeft:0,textAlign:"center",marginTop:n.spacing(4)})})),Y=function(){var e=(0,t.useState)(!0),n=e[0],r=e[1],a=(0,t.useState)("/images/avatars/1.png"),l=a[0],o=a[1];return(0,s.jsx)(S.Z,{children:(0,s.jsx)("form",{children:(0,s.jsxs)(Z.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(Z.ZP,{item:!0,xs:12,sx:{my:5},children:(0,s.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(V,{src:l,alt:"Profile Pic"}),(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)($,{component:"label",variant:"contained",htmlFor:"account-settings-upload-image",children:["Upload New Photo",(0,s.jsx)("input",{hidden:!0,type:"file",onChange:function(e){var n=new FileReader,r=e.target.files;r&&0!==r.length&&(n.onload=function(){return o(n.result)},n.readAsDataURL(r[0]))},accept:"image/png, image/jpeg",id:"account-settings-upload-image"})]}),(0,s.jsx)(U,{color:"error",variant:"outlined",onClick:function(){return o("/images/avatars/1.png")},children:"Reset"}),(0,s.jsx)(B.Z,{sx:{mt:4},component:"p",variant:"caption",children:"Allowed PNG or JPEG. Max size of 800K."})]})]})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsx)(w.Z,{fullWidth:!0,label:"Username",placeholder:"johnDoe",defaultValue:"johnDoe"})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsx)(w.Z,{fullWidth:!0,label:"Name",placeholder:"John Doe",defaultValue:"John Doe"})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsx)(w.Z,{fullWidth:!0,type:"email",label:"Email",placeholder:"johnDoe@example.com",defaultValue:"johnDoe@example.com"})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsxs)(D.Z,{fullWidth:!0,children:[(0,s.jsx)(y.Z,{children:"Role"}),(0,s.jsxs)(g.Z,{label:"Role",defaultValue:"admin",children:[(0,s.jsx)(b.Z,{value:"admin",children:"Admin"}),(0,s.jsx)(b.Z,{value:"author",children:"Author"}),(0,s.jsx)(b.Z,{value:"editor",children:"Editor"}),(0,s.jsx)(b.Z,{value:"maintainer",children:"Maintainer"}),(0,s.jsx)(b.Z,{value:"subscriber",children:"Subscriber"})]})]})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsxs)(D.Z,{fullWidth:!0,children:[(0,s.jsx)(y.Z,{children:"Status"}),(0,s.jsxs)(g.Z,{label:"Status",defaultValue:"active",children:[(0,s.jsx)(b.Z,{value:"active",children:"Active"}),(0,s.jsx)(b.Z,{value:"inactive",children:"Inactive"}),(0,s.jsx)(b.Z,{value:"pending",children:"Pending"})]})]})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsx)(w.Z,{fullWidth:!0,label:"Company",placeholder:"ABC Pvt. Ltd.",defaultValue:"ABC Pvt. Ltd."})}),n?(0,s.jsx)(Z.ZP,{item:!0,xs:12,children:(0,s.jsxs)(z.Z,{severity:"warning",sx:{"& a":{fontWeight:400}},action:(0,s.jsx)(T.Z,{size:"small",color:"inherit","aria-label":"close",onClick:function(){return r(!1)},children:(0,s.jsx)(_.Z,{fontSize:"inherit"})}),children:[(0,s.jsx)(F.Z,{sx:{mb:".15rem"},children:"Your email is not confirmed. Please check your inbox."}),(0,s.jsx)(M.Z,{href:"/",onClick:function(e){return e.preventDefault()},children:"Resend Confirmation"})]})}):null,(0,s.jsxs)(Z.ZP,{item:!0,xs:12,children:[(0,s.jsx)(v.Z,{variant:"contained",sx:{mr:4},children:"Save Changes"}),(0,s.jsx)(v.Z,{type:"reset",variant:"outlined",color:"secondary",children:"Reset"})]})]})})})},G=r(581),H=r(40111),J=r(77028),q=r.n(J),K=r(16054),X=r(7071),Q=r(52890),ee=r(59882);r(61310);function ne(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var re=(0,d.ZP)(Z.ZP)((function(e){var n=e.theme;return ne({marginTop:n.spacing(5)},n.breakpoints.down("md"),{order:-1})})),se=(0,d.ZP)(X.Z)((function(e){var n=e.theme;return{height:20,fontWeight:600,fontSize:"0.75rem",marginTop:n.spacing(2.25),marginBottom:n.spacing(5.5),"& .MuiChip-label":{padding:n.spacing(0,1.7)}}})),te=(0,d.ZP)(i.Z)((function(e){var n,r=e.theme;return ne(n={display:"flex",flexDirection:"column"},r.breakpoints.down("xl"),{"& > div:first-of-type":{marginBottom:r.spacing(6)}}),ne(n,r.breakpoints.up("xl"),{alignItems:"center",flexDirection:"row","& > div:first-of-type":{marginRight:r.spacing(6)}}),n}));var ie=function(){var e=(0,t.useState)(""),n=e[0],r=e[1],a=(0,t.useState)(""),l=a[0],o=a[1],c=(0,t.useState)(""),d=c[0],u=c[1],x=(0,t.useState)(),m=x[0],j=x[1],f=(0,t.useState)(""),g=f[0],b=f[1],y=(0,t.useState)("card"),k=y[0],W=y[1],A=function(){return j(void 0)},I=function(e){var n=e.target;"number"===n.name?(n.value=(0,ee.mf)(n.value,q()),u(n.value)):"expiry"===n.name?(n.value=(0,ee.N)(n.value),b(n.value)):"cvc"===n.name&&(n.value=(0,ee.tE)(n.value,d,q()),o(n.value))};return(0,s.jsx)(S.Z,{children:(0,s.jsx)("form",{children:(0,s.jsxs)(Z.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(Z.ZP,{item:!0,xs:12,md:8,sx:{mt:5},children:(0,s.jsxs)(Z.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(Z.ZP,{item:!0,xs:12,children:(0,s.jsxs)(D.Z,{children:[(0,s.jsx)(P.Z,{sx:{mb:1,color:"text.secondary"},children:"Payment Method"}),(0,s.jsxs)(C.Z,{row:!0,value:k,"aria-label":"payment method",name:"account-settings-billing-radio",onChange:function(e){return W(e.target.value)},children:[(0,s.jsx)(N.Z,{value:"card",label:"Credit/Debit/ATM Card",control:(0,s.jsx)(p.Z,{}),sx:{mr:6.75}}),(0,s.jsx)(N.Z,{value:"cod",label:"COD/Cheque",control:(0,s.jsx)(p.Z,{})})]})]})}),"card"===k?(0,s.jsx)(Z.ZP,{item:!0,xs:12,children:(0,s.jsxs)(te,{children:[(0,s.jsx)(Q.Z,{children:(0,s.jsx)(K.Z,{cvc:l,focused:m,expiry:g,name:n,number:d})}),(0,s.jsxs)(Z.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(Z.ZP,{item:!0,xs:12,sx:{pt:function(e){return"".concat(e.spacing(4)," !important")}},children:(0,s.jsx)(w.Z,{fullWidth:!0,name:"number",value:d,autoComplete:"off",label:"Card Number",onBlur:A,onChange:I,placeholder:"0000 0000 0000 0000",onFocus:function(e){return j(e.target.name)}})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,children:(0,s.jsx)(w.Z,{fullWidth:!0,name:"name",value:n,label:"Name",autoComplete:"off",onBlur:A,placeholder:"John Doe",onFocus:function(e){return j(e.target.name)},onChange:function(e){return r(e.target.value)}})}),(0,s.jsx)(Z.ZP,{item:!0,xs:6,children:(0,s.jsx)(w.Z,{fullWidth:!0,name:"expiry",value:g,autoComplete:"off",label:"Expiry Date",placeholder:"MM/YY",onBlur:A,onChange:I,inputProps:{maxLength:"5"},onFocus:function(e){return j(e.target.name)}})}),(0,s.jsx)(Z.ZP,{item:!0,xs:6,children:(0,s.jsx)(w.Z,{fullWidth:!0,name:"cvc",value:l,label:"CVC Code",autoComplete:"off",onBlur:A,onChange:I,onFocus:function(e){return j(e.target.name)},placeholder:"amex"===q().fns.cardType(d)?"1234":"123"})})]})]})}):null]})}),(0,s.jsx)(re,{item:!0,xs:12,md:4,children:(0,s.jsxs)(i.Z,{sx:{p:5,borderRadius:1,border:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,s.jsx)(B.Z,{variant:"h6",sx:{mb:4,color:"text.secondary"},children:"Your Current Plan"}),(0,s.jsx)(se,{skin:"light",size:"small",color:"primary",label:"Basic Plan"}),(0,s.jsxs)(i.Z,{sx:{my:4,display:"flex",alignItems:"center"},children:[(0,s.jsx)(h.Z,{sx:{mr:1.5}}),(0,s.jsx)(B.Z,{variant:"body2",sx:{fontSize:"1rem",lineHeight:1.5},children:"5 Users"})]}),(0,s.jsxs)(i.Z,{sx:{mb:4,display:"flex",alignItems:"center"},children:[(0,s.jsx)(G.Z,{sx:{mr:1.5}}),(0,s.jsx)(B.Z,{variant:"body2",sx:{fontSize:"1rem",lineHeight:1.5},children:"10 GB storage"})]}),(0,s.jsxs)(i.Z,{sx:{mb:4,display:"flex",alignItems:"center"},children:[(0,s.jsx)(H.Z,{sx:{mr:1.5}}),(0,s.jsx)(B.Z,{variant:"body2",sx:{fontSize:"1rem",lineHeight:1.5},children:"Basic Support"})]}),(0,s.jsx)(v.Z,{fullWidth:!0,variant:"contained",children:"Upgrade Plan"})]})}),(0,s.jsxs)(Z.ZP,{item:!0,xs:12,sx:{mt:"card"===k?3:void 0},children:[(0,s.jsx)(v.Z,{variant:"contained",sx:{mr:4},children:"Save Changes"}),(0,s.jsx)(v.Z,{type:"reset",variant:"outlined",color:"secondary",onClick:function(){o(""),r(""),b(""),u("")},children:"Reset"})]})]})})})},ae=r(67720),le=r(87109),oe=r(51206),ce=r(95898),de=r(42218),ue=r(92024);function xe(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function he(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(n){xe(e,n,r[n])}))}return e}var me=function(){var e,n=(0,t.useState)({newPassword:"",currentPassword:"",showNewPassword:!1,confirmNewPassword:"",showCurrentPassword:!1,showConfirmNewPassword:!1}),r=n[0],a=n[1];return(0,s.jsx)("form",{children:(0,s.jsxs)(S.Z,{children:[(0,s.jsxs)(Z.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(Z.ZP,{item:!0,xs:12,sm:6,sx:{mt:5,mb:[0,6]},children:(0,s.jsxs)(Z.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(Z.ZP,{item:!0,xs:12,children:(0,s.jsxs)(D.Z,{fullWidth:!0,children:[(0,s.jsx)(y.Z,{htmlFor:"account-settings-current-password",children:"Current Password"}),(0,s.jsx)(k.Z,{label:"Current Password",value:r.currentPassword,id:"account-settings-current-password",type:r.showCurrentPassword?"text":"password",onChange:(e="currentPassword",function(n){a(he({},r,xe({},e,n.target.value)))}),endAdornment:(0,s.jsx)(le.Z,{position:"end",children:(0,s.jsx)(T.Z,{edge:"end","aria-label":"toggle password visibility",onClick:function(){a(he({},r,{showCurrentPassword:!r.showCurrentPassword}))},onMouseDown:function(e){e.preventDefault()},children:r.showCurrentPassword?(0,s.jsx)(ce.Z,{}):(0,s.jsx)(de.Z,{})})})})]})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,children:(0,s.jsxs)(D.Z,{fullWidth:!0,children:[(0,s.jsx)(y.Z,{htmlFor:"account-settings-new-password",children:"New Password"}),(0,s.jsx)(k.Z,{label:"New Password",value:r.newPassword,id:"account-settings-new-password",onChange:function(e){return function(n){a(he({},r,xe({},e,n.target.value)))}}("newPassword"),type:r.showNewPassword?"text":"password",endAdornment:(0,s.jsx)(le.Z,{position:"end",children:(0,s.jsx)(T.Z,{edge:"end",onClick:function(){a(he({},r,{showNewPassword:!r.showNewPassword}))},"aria-label":"toggle password visibility",onMouseDown:function(e){e.preventDefault()},children:r.showNewPassword?(0,s.jsx)(ce.Z,{}):(0,s.jsx)(de.Z,{})})})})]})}),(0,s.jsx)(Z.ZP,{item:!0,xs:12,children:(0,s.jsxs)(D.Z,{fullWidth:!0,children:[(0,s.jsx)(y.Z,{htmlFor:"account-settings-confirm-new-password",children:"Confirm New Password"}),(0,s.jsx)(k.Z,{label:"Confirm New Password",value:r.confirmNewPassword,id:"account-settings-confirm-new-password",type:r.showConfirmNewPassword?"text":"password",onChange:function(e){return function(n){a(he({},r,xe({},e,n.target.value)))}}("confirmNewPassword"),endAdornment:(0,s.jsx)(le.Z,{position:"end",children:(0,s.jsx)(T.Z,{edge:"end","aria-label":"toggle password visibility",onClick:function(){a(he({},r,{showConfirmNewPassword:!r.showConfirmNewPassword}))},onMouseDown:function(e){e.preventDefault()},children:r.showConfirmNewPassword?(0,s.jsx)(ce.Z,{}):(0,s.jsx)(de.Z,{})})})})]})})]})}),(0,s.jsx)(Z.ZP,{item:!0,sm:6,xs:12,sx:{display:"flex",mt:2.5,alignItems:"flex-end",justifyContent:"center"},children:(0,s.jsx)("img",{alt:"avatar",src:"/images/pages/account-settings-security-illustration.png"})})]}),(0,s.jsx)(ae.Z,{sx:{mt:0,mb:6}}),(0,s.jsxs)(i.Z,{sx:{mb:11,display:"flex",alignItems:"center"},children:[(0,s.jsx)(oe.Z,{sx:{mr:4}}),(0,s.jsx)(B.Z,{variant:"h5",children:"Two-factor authentication"})]}),(0,s.jsx)(i.Z,{sx:{mb:11,display:"flex",justifyContent:"center"},children:(0,s.jsxs)(i.Z,{sx:{maxWidth:440,display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column"},children:[(0,s.jsx)(ue.Z,{skin:"light",variant:"rounded",sx:{mb:4,width:48,height:48},children:(0,s.jsx)(m.Z,{})}),(0,s.jsx)(B.Z,{variant:"h6",sx:{mb:4},children:"Two factor authentication is not enabled yet."}),(0,s.jsx)(B.Z,{variant:"body2",children:"Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. Learn more."})]})}),(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(v.Z,{variant:"contained",sx:{mr:4},children:"Save Changes"}),(0,s.jsx)(v.Z,{type:"reset",variant:"outlined",color:"secondary",onClick:function(){return a(he({},r,{currentPassword:"",newPassword:"",confirmNewPassword:""}))},children:"Reset"})]})]})})},je=r(72852),fe=r(34111),Ze=r(42255),pe=(0,d.ZP)(N.Z)((function(e){var n=e.theme;return{"& .MuiFormControlLabel-label":{fontSize:"0.875rem",marginLeft:n.spacing(1.5),color:n.palette.text.secondary}}})),ge=function(){return(0,s.jsx)(S.Z,{sx:{pt:10},children:(0,s.jsxs)("form",{children:[(0,s.jsxs)(i.Z,{sx:{mb:4.5,display:"flex",alignItems:"center"},children:[(0,s.jsx)(fe.Z,{sx:{fontSize:"1.75rem",mr:2}}),(0,s.jsx)(B.Z,{variant:"h6",children:"Activity"})]}),(0,s.jsx)(i.Z,{sx:{mb:2},children:(0,s.jsx)(pe,{control:(0,s.jsx)(je.Z,{defaultChecked:!0}),label:"Email me when someone comments on my article"})}),(0,s.jsx)(i.Z,{sx:{mb:2},children:(0,s.jsx)(pe,{control:(0,s.jsx)(je.Z,{defaultChecked:!0}),label:"Email me when someone answers on my forum thread"})}),(0,s.jsx)(i.Z,{sx:{mb:2},children:(0,s.jsx)(pe,{control:(0,s.jsx)(je.Z,{}),label:"Email me when someone follows me"})}),(0,s.jsxs)(i.Z,{sx:{mt:6,mb:4.5,display:"flex",alignItems:"center"},children:[(0,s.jsx)(Ze.Z,{sx:{fontSize:"1.75rem",mr:2}}),(0,s.jsx)(B.Z,{variant:"h6",children:"Application"})]}),(0,s.jsx)(i.Z,{sx:{mb:2},children:(0,s.jsx)(pe,{control:(0,s.jsx)(je.Z,{}),label:"News and announcements"})}),(0,s.jsx)(i.Z,{sx:{mb:2},children:(0,s.jsx)(pe,{control:(0,s.jsx)(je.Z,{defaultChecked:!0}),label:"Weekly product updates"})}),(0,s.jsx)(i.Z,{sx:{mb:2},children:(0,s.jsx)(pe,{control:(0,s.jsx)(je.Z,{}),label:"Weekly blog digest"})}),(0,s.jsxs)(i.Z,{sx:{mt:6},children:[(0,s.jsx)(v.Z,{variant:"contained",sx:{mr:4},children:"Save Changes"}),(0,s.jsx)(v.Z,{type:"reset",variant:"outlined",color:"secondary",children:"Reset"})]})]})})};r(95828);function ve(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var be=(0,d.ZP)(u.Z)((function(e){var n,r=e.theme;return ve(n={},r.breakpoints.down("md"),{minWidth:100}),ve(n,r.breakpoints.down("sm"),{minWidth:67}),n})),we=(0,d.ZP)("span")((function(e){var n=e.theme;return ve({lineHeight:1.71,marginLeft:n.spacing(2.5)},n.breakpoints.down("md"),{display:"none"})}));var Pe=function(){var e=(0,t.useState)("account"),n=e[0],r=e[1];return(0,s.jsx)(a.Z,{children:(0,s.jsxs)(c.ZP,{value:n,children:[(0,s.jsxs)(l.Z,{onChange:function(e,n){r(n)},"aria-label":"account-settings tabs",sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,s.jsx)(be,{value:"account",label:(0,s.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(h.Z,{sx:{fontSize:"1.125rem"}}),(0,s.jsx)(we,{children:"Account"})]})}),(0,s.jsx)(be,{value:"security",label:(0,s.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(m.Z,{sx:{fontSize:"1.125rem"}}),(0,s.jsx)(we,{children:"Security"})]})}),(0,s.jsx)(be,{value:"info",label:(0,s.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(f.Z,{sx:{fontSize:"1.125rem"}}),(0,s.jsx)(we,{children:"Info"})]})}),(0,s.jsx)(be,{value:"billing",label:(0,s.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(j.Z,{sx:{fontSize:"1.125rem"}}),(0,s.jsx)(we,{children:"Billing"})]})}),(0,s.jsx)(be,{value:"notifications",label:(0,s.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(x.Z,{sx:{fontSize:"1.125rem"}}),(0,s.jsx)(we,{children:"Notifications"})]})})]}),(0,s.jsx)(o.Z,{sx:{p:0},value:"account",children:(0,s.jsx)(Y,{})}),(0,s.jsx)(o.Z,{sx:{p:0},value:"security",children:(0,s.jsx)(me,{})}),(0,s.jsx)(o.Z,{sx:{p:0},value:"info",children:(0,s.jsx)(R,{})}),(0,s.jsx)(o.Z,{sx:{p:0},value:"billing",children:(0,s.jsx)(ie,{})}),(0,s.jsx)(o.Z,{sx:{p:0},value:"notifications",children:(0,s.jsx)(ge,{})})]})})}}},function(e){e.O(0,[8960,285,8722,4964,4096,9774,2888,179],(function(){return n=89947,e(e.s=n);var n}));var n=e.O();_N_E=n}]);