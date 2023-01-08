"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7414],{46901:function(e,i,n){n.d(i,{Z:function(){return W}});var r=n(63366),s=n(87462),t=n(67294),a=n(93680),l=n(27192),o=n(41796),c=n(11496),d=n(71657),x=n(98216),h=n(55113),j=n(28979);function m(e){return(0,j.Z)("MuiAlert",e)}var Z,p=(0,n(76087).Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),u=n(93946),f=n(82066),v=n(85893),g=(0,f.Z)((0,v.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),y=(0,f.Z)((0,v.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),b=(0,f.Z)((0,v.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),w=(0,f.Z)((0,v.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),S=n(34484);const M=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],P=(0,c.ZP)(h.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:n}=e;return[i.root,i[n.variant],i[`${n.variant}${(0,x.Z)(n.color||n.severity)}`]]}})((({theme:e,ownerState:i})=>{const n="light"===e.palette.mode?o._j:o.$n,r="light"===e.palette.mode?o.$n:o._j,t=i.color||i.severity;return(0,s.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&"standard"===i.variant&&{color:n(e.palette[t].light,.6),backgroundColor:r(e.palette[t].light,.9),[`& .${p.icon}`]:{color:"dark"===e.palette.mode?e.palette[t].main:e.palette[t].light}},t&&"outlined"===i.variant&&{color:n(e.palette[t].light,.6),border:`1px solid ${e.palette[t].light}`,[`& .${p.icon}`]:{color:"dark"===e.palette.mode?e.palette[t].main:e.palette[t].light}},t&&"filled"===i.variant&&{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:"dark"===e.palette.mode?e.palette[t].dark:e.palette[t].main})})),k=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,i)=>i.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),C=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,i)=>i.message})({padding:"8px 0"}),A=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,i)=>i.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),I={success:(0,v.jsx)(g,{fontSize:"inherit"}),warning:(0,v.jsx)(y,{fontSize:"inherit"}),error:(0,v.jsx)(b,{fontSize:"inherit"}),info:(0,v.jsx)(w,{fontSize:"inherit"})};var W=t.forwardRef((function(e,i){const n=(0,d.Z)({props:e,name:"MuiAlert"}),{action:t,children:o,className:c,closeText:h="Close",color:j,icon:p,iconMapping:f=I,onClose:g,role:y="alert",severity:b="success",variant:w="standard"}=n,W=(0,r.Z)(n,M),_=(0,s.Z)({},n,{color:j,severity:b,variant:w}),T=(e=>{const{variant:i,color:n,severity:r,classes:s}=e,t={root:["root",`${i}${(0,x.Z)(n||r)}`,`${i}`],icon:["icon"],message:["message"],action:["action"]};return(0,l.Z)(t,m,s)})(_);return(0,v.jsxs)(P,(0,s.Z)({role:y,elevation:0,ownerState:_,className:(0,a.Z)(T.root,c),ref:i},W,{children:[!1!==p?(0,v.jsx)(k,{ownerState:_,className:T.icon,children:p||f[b]||I[b]}):null,(0,v.jsx)(C,{ownerState:_,className:T.message,children:o}),null!=t?(0,v.jsx)(A,{className:T.action,children:t}):null,null==t&&g?(0,v.jsx)(A,{ownerState:_,className:T.action,children:(0,v.jsx)(u.Z,{size:"small","aria-label":h,title:h,color:"inherit",onClick:g,children:Z||(Z=(0,v.jsx)(S.Z,{fontSize:"small"}))})}):null]}))}))},53184:function(e,i,n){n.d(i,{Z:function(){return f}});var r=n(87462),s=n(63366),t=n(67294),a=n(93680),l=n(27192),o=n(44063),c=n(71657),d=n(11496),x=n(28979);function h(e){return(0,x.Z)("MuiTableHead",e)}(0,n(76087).Z)("MuiTableHead",["root"]);var j=n(85893);const m=["className","component"],Z=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,i)=>i.root})({display:"table-header-group"}),p={variant:"head"},u="thead";var f=t.forwardRef((function(e,i){const n=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:t,component:d=u}=n,x=(0,s.Z)(n,m),f=(0,r.Z)({},n,{component:d}),v=(e=>{const{classes:i}=e;return(0,l.Z)({root:["root"]},h,i)})(f);return(0,j.jsx)(o.Z.Provider,{value:p,children:(0,j.jsx)(Z,(0,r.Z)({as:d,className:(0,a.Z)(v.root,t),ref:i,role:d===u?null:"rowgroup",ownerState:f},x))})}))},37414:function(e,i,n){var r=n(85893),s=n(67294),t=n(41664),a=n.n(t),l=n(86886),o=n(46901),c=n(7906),d=n(67720),x=n(68509),h=n(53184),j=n(295),m=n(15861),Z=n(79172),p=n(11496),u=n(2734),f=n(98102),v=n(9669),g=n.n(v),y=n(30152),b=(0,p.ZP)(Z.Z)((function(e){return{display:"flex",alignItems:"center",justifyContent:"space-between","&:not(:last-of-type)":{marginBottom:e.theme.spacing(2)}}})),w=(0,p.ZP)(f.Z)((function(e){var i=e.theme;return{borderBottom:0,padding:"".concat(i.spacing(1,0)," !important")}}));i.Z=function(e){var i=e.id,n=(0,s.useState)(!1),t=n[0],p=n[1],v=(0,s.useState)(null),S=v[0],M=v[1],P=(0,u.Z)();if((0,s.useEffect)((function(){setTimeout((function(){window.print()}),100)}),[]),(0,s.useEffect)((function(){g().get("/apps/invoice/single-invoice",{params:{id:i}}).then((function(e){M(e.data),p(!1)})).catch((function(){M(null),p(!0)}))}),[i]),S){var k=S.invoice,C=S.paymentDetails;return(0,r.jsxs)(Z.Z,{sx:{p:12,pb:6},children:[(0,r.jsxs)(l.ZP,{container:!0,children:[(0,r.jsx)(l.ZP,{item:!0,xs:8,sx:{mb:{sm:0,xs:4}},children:(0,r.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(Z.Z,{sx:{mb:6,display:"flex",alignItems:"center"},children:[(0,r.jsxs)("svg",{width:40,fill:"none",height:22,viewBox:"0 0 268 150",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:P.palette.primary.main,transform:"matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"}),(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fillOpacity:"0.4",fill:"url(#paint0_linear_7821_79167)",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"}),(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:P.palette.primary.main,transform:"matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"}),(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:P.palette.primary.main,transform:"matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"}),(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fillOpacity:"0.4",fill:"url(#paint1_linear_7821_79167)",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"}),(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:P.palette.primary.main,transform:"matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"}),(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{y1:"0",x1:"25.1443",x2:"25.1443",y2:"143.953",id:"paint0_linear_7821_79167",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{}),(0,r.jsx)("stop",{offset:"1",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{y1:"0",x1:"25.1443",x2:"25.1443",y2:"143.953",id:"paint1_linear_7821_79167",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{}),(0,r.jsx)("stop",{offset:"1",stopOpacity:"0"})]})]})]}),(0,r.jsx)(m.Z,{variant:"h6",sx:{ml:2,fontWeight:700,lineHeight:1.2},children:y.Z.templateName})]}),(0,r.jsxs)(Z.Z,{children:[(0,r.jsx)(m.Z,{variant:"body2",sx:{mb:1},children:"Office 149, 450 South Brand Brooklyn"}),(0,r.jsx)(m.Z,{variant:"body2",sx:{mb:1},children:"San Diego County, CA 91905, USA"}),(0,r.jsx)(m.Z,{variant:"body2",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]})]})}),(0,r.jsx)(l.ZP,{item:!0,xs:4,children:(0,r.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{sm:"flex-end",xs:"flex-start"}},children:[(0,r.jsx)(m.Z,{variant:"h6",sx:{mb:2},children:"Invoice #".concat(k.id)}),(0,r.jsxs)(Z.Z,{sx:{mb:2,display:"flex"},children:[(0,r.jsx)(m.Z,{variant:"body2",sx:{mr:3},children:"Date Issued:"}),(0,r.jsx)(m.Z,{variant:"body2",sx:{fontWeight:600},children:k.issuedDate})]}),(0,r.jsxs)(Z.Z,{sx:{display:"flex"},children:[(0,r.jsx)(m.Z,{variant:"body2",sx:{mr:3},children:"Date Due:"}),(0,r.jsx)(m.Z,{variant:"body2",sx:{fontWeight:600},children:k.dueDate})]})]})})]}),(0,r.jsx)(d.Z,{sx:{my:6}}),(0,r.jsxs)(l.ZP,{container:!0,children:[(0,r.jsxs)(l.ZP,{item:!0,xs:7,md:8,sx:{mb:{lg:0,xs:4}},children:[(0,r.jsx)(m.Z,{variant:"body2",sx:{mb:3.5,fontWeight:600},children:"Invoice To:"}),(0,r.jsx)(m.Z,{variant:"body2",sx:{mb:2},children:k.name}),(0,r.jsx)(m.Z,{variant:"body2",sx:{mb:2},children:k.company}),(0,r.jsx)(m.Z,{variant:"body2",sx:{mb:2},children:k.address}),(0,r.jsx)(m.Z,{variant:"body2",sx:{mb:2},children:k.contact}),(0,r.jsx)(m.Z,{variant:"body2",sx:{mb:2},children:k.companyEmail})]}),(0,r.jsxs)(l.ZP,{item:!0,xs:5,md:4,children:[(0,r.jsx)(m.Z,{variant:"body2",sx:{mb:3.5,fontWeight:600},children:"Bill To:"}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(j.Z,{children:[(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(w,{children:"Total Due:"}),(0,r.jsx)(w,{children:C.totalDue})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(w,{children:"Bank name:"}),(0,r.jsx)(w,{children:C.bankName})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(w,{children:"Country:"}),(0,r.jsx)(w,{children:C.country})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(w,{children:"IBAN:"}),(0,r.jsx)(w,{children:C.iban})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(w,{children:"SWIFT code:"}),(0,r.jsx)(w,{children:C.swiftCode})]})]})})]})]}),(0,r.jsx)(d.Z,{sx:{mt:6,mb:0}}),(0,r.jsxs)(c.Z,{sx:{mb:6},children:[(0,r.jsx)(h.Z,{children:(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(f.Z,{children:"Item"}),(0,r.jsx)(f.Z,{children:"Description"}),(0,r.jsx)(f.Z,{children:"hours"}),(0,r.jsx)(f.Z,{children:"qty"}),(0,r.jsx)(f.Z,{children:"Total"})]})}),(0,r.jsxs)(j.Z,{children:[(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(f.Z,{children:"Premium Branding Package"}),(0,r.jsx)(f.Z,{children:"Branding & Promotion"}),(0,r.jsx)(f.Z,{children:"48"}),(0,r.jsx)(f.Z,{children:"1"}),(0,r.jsx)(f.Z,{children:"$32"})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(f.Z,{children:"Social Media"}),(0,r.jsx)(f.Z,{children:"Social media templates"}),(0,r.jsx)(f.Z,{children:"42"}),(0,r.jsx)(f.Z,{children:"1"}),(0,r.jsx)(f.Z,{children:"$28"})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(f.Z,{children:"Web Design"}),(0,r.jsx)(f.Z,{children:"Web designing package"}),(0,r.jsx)(f.Z,{children:"46"}),(0,r.jsx)(f.Z,{children:"1"}),(0,r.jsx)(f.Z,{children:"$24"})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(f.Z,{children:"SEO"}),(0,r.jsx)(f.Z,{children:"Search engine optimization"}),(0,r.jsx)(f.Z,{children:"40"}),(0,r.jsx)(f.Z,{children:"1"}),(0,r.jsx)(f.Z,{children:"$22"})]})]})]}),(0,r.jsxs)(l.ZP,{container:!0,children:[(0,r.jsxs)(l.ZP,{item:!0,xs:8,sm:7,lg:9,children:[(0,r.jsxs)(Z.Z,{sx:{mb:2,display:"flex",alignItems:"center"},children:[(0,r.jsx)(m.Z,{variant:"body2",sx:{mr:2,fontWeight:600},children:"Salesperson:"}),(0,r.jsx)(m.Z,{variant:"body2",children:"Tommy Shelby"})]}),(0,r.jsx)(m.Z,{variant:"body2",children:"Thanks for your business"})]}),(0,r.jsxs)(l.ZP,{item:!0,xs:4,sm:5,lg:3,children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(m.Z,{variant:"body2",children:"Subtotal:"}),(0,r.jsx)(m.Z,{variant:"body2",sx:{fontWeight:600},children:"$1800"})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(m.Z,{variant:"body2",children:"Discount:"}),(0,r.jsx)(m.Z,{variant:"body2",sx:{fontWeight:600},children:"$28"})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(m.Z,{variant:"body2",children:"Tax:"}),(0,r.jsx)(m.Z,{variant:"body2",sx:{fontWeight:600},children:"21%"})]}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)(b,{children:[(0,r.jsx)(m.Z,{variant:"body2",children:"Total:"}),(0,r.jsx)(m.Z,{variant:"body2",sx:{fontWeight:600},children:"$1690"})]})]})]}),(0,r.jsx)(d.Z,{sx:{my:6}}),(0,r.jsxs)(m.Z,{variant:"body2",children:[(0,r.jsx)("strong",{children:"Note:"})," It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"]})]})}return t?(0,r.jsx)(Z.Z,{sx:{p:5},children:(0,r.jsx)(l.ZP,{container:!0,spacing:6,children:(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsxs)(o.Z,{severity:"error",children:["Invoice with the id: ",i," does not exist. Please check the list of invoices:"," ",(0,r.jsx)(a(),{href:"/apps/invoice/list",children:"Invoice List"})]})})})}):null}}}]);