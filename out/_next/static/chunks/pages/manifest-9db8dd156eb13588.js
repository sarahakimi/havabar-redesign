(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7435],{17368:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manifest",function(){return r(5231)}])},85216:function(e,n,r){"use strict";var t=r(85893),o=r(67294),i=r(54776),a=r(50657),l=r(67564),s=r(6514),c=r(31425),u=r(83321),d=r(37645),f=r(58951),m=r(48075);function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var x=o.forwardRef((function(e,n){return(0,t.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){h(e,n,r[n])}))}return e}({direction:"up",ref:n},e))}));n.Z=function(e){var n=e.closeFunction,r=e.setOpen,o=e.open,i=e.company,h=function(){r(!1)};return(0,t.jsxs)(a.Z,{open:o,TransitionComponent:x,keepMounted:!0,onClose:h,"aria-describedby":"alert-dialog-slide-description",children:[(0,t.jsxs)(d.Z,{sx:{display:"flex",gap:2},children:[(0,t.jsx)(l.Z,{color:"warning",component:m.Z}),"\u062d\u0630\u0641 "]}),(0,t.jsx)(s.Z,{children:(0,t.jsxs)(f.Z,{id:"alert-dialog-slide-description",children:["\u0627\u06cc\u0627 \u0627\u0632 \u062d\u0630\u0641 ",i.name," \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f\u061f"]})}),(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(u.Z,{onClick:function(){r(!1),n(i)},children:"\u0628\u0644\u0647"}),(0,t.jsx)(u.Z,{onClick:h,children:"\u062e\u06cc\u0631"})]})]})}},40609:function(e,n,r){"use strict";r.d(n,{Z:function(){return m}});var t=r(85893),o=r(67294),i=r(93946),a=r(46160),l=r(38333),s=r(22224),c=r(95898),u=r(3690),d=r(83296),f=r(85216);function m(e){var n=e.company,r=e.setSelectedCompany,m=e.toggleEditUserDrawer,h=e.toggleShowUserDrawer,x=e.selectedCompany,p=e.deleteFunction,b=e.noShow,v=e.noEdit,g=(0,o.useState)(null),y=g[0],j=g[1],Z=Boolean(y),_=(0,o.useState)(!1),w=_[0],C=_[1],O=function(){j(null)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{size:"small",onClick:function(e){j(e.currentTarget)},children:(0,t.jsx)(a.Z,{})}),(0,t.jsxs)(l.Z,{keepMounted:!0,anchorEl:y,open:Z,onClose:O,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:[!b&&(0,t.jsxs)(s.Z,{onClick:function(){return r(n),h(),void O()},children:[(0,t.jsx)(c.Z,{fontSize:"small",sx:{mr:2}}),"\u0646\u0645\u0627\u06cc\u0634"]}),!v&&(0,t.jsxs)(s.Z,{onClick:function(){return r(n),m(),void O()},children:[(0,t.jsx)(u.Z,{fontSize:"small",sx:{mr:2}}),"\u0648\u06cc\u0631\u0627\u06cc\u0634"]}),(0,t.jsxs)(s.Z,{onClick:function(){return r(n),O(),void C(!0)},children:[(0,t.jsx)(d.Z,{fontSize:"small",sx:{mr:2}}),"\u062d\u0630\u0641"]})]}),(0,t.jsx)(f.Z,{open:w,setOpen:C,company:x,closeFunction:p})]})}},44951:function(e,n,r){"use strict";r.r(n);var t=r(34051),o=r.n(t),i=r(85893),a=r(58826),l=r(83321),s=r(11496),c=r(50135),u=r(15861),d=r(79172),f=r(94054),m=r(56815),h=r(74231),x=r(95496),p=r(42283),b=r(42734),v=(r(27166),r(95236)),g=r(67294);function y(e,n,r,t,o,i,a){try{var l=e[i](a),s=l.value}catch(c){return void r(c)}l.done?n(s):Promise.resolve(s).then(t,o)}function j(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Z(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){j(e,n,r[n])}))}return e}var _=(0,s.ZP)(d.Z)((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(3,4),justifyContent:"space-between",backgroundColor:n.palette.background.default}})),w=h.Ry().shape({hub_source_name:h.Z_().typeError("\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"),hub_destination_name:h.Z_().typeError("\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"),date:h.nK()});n.default=function(e){var n=e.open,r=e.toggle,t=e.setChange,s=e.filter,h=e.showUser,j=e.setFilter,C=(0,g.useState)({from:null,to:null}),O=C[0],k=C[1],S={hub_source_name:"",hub_destination_name:"",state:""},P=0!==Object.keys(s).length?s:S,D=(0,p.cI)({defaultValues:P,mode:"onChange",resolver:(0,x.X)(w)}),W=D.reset,M=D.control,E=D.handleSubmit,I=D.formState.errors,z=function(){r(),W(S)},F=function(){var e,n=(e=o().mark((function e(n){var i,a,l,s,c,u,d,f,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==O.from?null!==O.to?j(Z({},n,{start_day:null===(s=O.from)||void 0===s?void 0:s.day,start_month:null===(c=O.from)||void 0===c?void 0:c.month,start_year:null===(u=O.from)||void 0===u?void 0:u.year,finish_day:null===(d=O.to)||void 0===d?void 0:d.day,finish_month:null===(f=O.to)||void 0===f?void 0:f.month,finish_year:null===(m=O.to)||void 0===m?void 0:m.year})):j(Z({},n,{start_day:null===(i=O.from)||void 0===i?void 0:i.day,start_month:null===(a=O.from)||void 0===a?void 0:a.month,start_year:null===(l=O.from)||void 0===l?void 0:l.year})):j(n),t(!0),r();case 3:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){y(i,t,o,a,l,"next",e)}function l(e){y(i,t,o,a,l,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,i.jsxs)(a.ZP,{open:n,anchor:"right",variant:"temporary",onClose:z,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)(_,{children:[(0,i.jsx)(u.Z,{variant:"h6",children:"\u0641\u06cc\u0644\u062a\u0631"}),(0,i.jsx)(b.Z,{fontSize:"small",onClick:z,sx:{cursor:"pointer"}})]}),(0,i.jsx)(d.Z,{sx:{p:5,"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"},"& \t.MuiInputLabel-root.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"}},children:(0,i.jsxs)("form",{onSubmit:E(F),children:[(0,i.jsxs)(f.Z,{fullWidth:!0,sx:{mb:4},children:[(0,i.jsx)(p.Qr,{name:"hub_source_name",control:M,rules:{required:!0},render:function(e){var n=e.field,r=n.value,t=n.onChange,o=n.onBlur;return(0,i.jsx)(c.Z,{label:"\u0647\u0627\u0628 \u0645\u0628\u062f\u0627",value:r,onBlur:o,onChange:t,error:Boolean(I.hub_source_name),disabled:h})}}),I.hub_source_name&&(0,i.jsx)(m.Z,{sx:{color:"error.main"},children:I.hub_source_name.message})]}),(0,i.jsxs)(f.Z,{fullWidth:!0,sx:{mb:4},children:[(0,i.jsx)(p.Qr,{name:"hub_destination_name",control:M,rules:{required:!0},render:function(e){var n=e.field,r=n.value,t=n.onChange,o=n.onBlur;return(0,i.jsx)(c.Z,{label:"\u0647\u0627\u0628 \u0645\u0642\u0635\u062f",value:r,onBlur:o,onChange:t,error:Boolean(I.hub_destination_name),disabled:h})}}),I.hub_destination_name&&(0,i.jsx)(m.Z,{sx:{color:"error.main"},children:I.hub_destination_name.message})]}),(0,i.jsx)("p",{children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u0628\u0627\u0632\u0647 \u0632\u0645\u0627\u0646\u06cc:"}),(0,i.jsx)(d.Z,{display:"flex",justifyContent:"center",sx:{mb:4},children:(0,i.jsx)(v.f,{value:O,onChange:k,shouldHighlightWeekends:!0,locale:"fa"})}),(0,i.jsx)(l.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},fullWidth:!0,children:"\u0630\u062e\u06cc\u0631\u0647"})]})})]})}},5231:function(e,n,r){"use strict";r.r(n),r.d(n,{GridContainer:function(){return C}});var t=r(85893),o=r(67294),i=r(86886),a=r(66242),l=r(15861),s=r(79172),c=r(3512),u=r(11496),d=r(3067),f=r.n(d),m=r(55113),h=r(74931),x=r(46893),p=r(12300),b=r(83321),v=r(69497),g=r(91453),y=r(44951),j=r(40609),Z=r(3105),_=r(96369);function w(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var C=(0,u.ZP)(m.Z)({flexGrow:1,".MuiDataGrid-root":{border:"none"},".MuiTablePagination-displayedRows":{display:"none"}});function O(){var e=(0,o.useState)({page:1,page_size:10,sort_by:"1 asc",search:""}),n=e[0],r=e[1],u=(0,o.useState)([]),d=u[0],m=u[1],O=(0,o.useState)(!1),k=O[0],S=O[1],P=(0,o.useState)([]),D=P[0],W=P[1],M=(0,o.useState)({}),E=M[0],I=M[1],z=(0,o.useState)(!1),F=z[0],N=z[1],T=(0,o.useState)({}),B=T[0],Y=T[1],U=(0,o.useState)(!1),H=U[0],q=U[1],G=(0,o.useState)(!1),R=G[0],X=G[1],Q=function(){return q(!H)},K=function(){return X(!R)},L=function(e){h.ZP.promise((0,g.deleteUser)(e.order.id).then(S(!0)),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062d\u0630\u0641 \u0633\u0641\u0627\u0631\u0634",success:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062d\u0630\u0641 \u0634\u062f",error:function(e){return e.response.data.message?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a"}})},V=(0,c.s)().filter((function(e){var n=e.value;return["contains"].includes(n)})),A=[{flex:.1,field:"1",minWidth:50,headerName:"\u062a\u0627\u0631\u06cc\u062e",filterable:!1,hideable:!1,renderCell:function(e){var n=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.time})})}},{flex:.1,minWidth:50,field:"id",headerName:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0627\u0646\u06cc\u0641\u0633\u062a",sortable:!1,filterOperators:V,hideable:!1,renderCell:function(e){var n=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.manifest_id})})})}},{flex:.1,minWidth:50,field:"2",headerName:" \u0645\u0628\u062f\u0627",sortable:!1,filterOperators:V,hideable:!1,renderCell:function(e){var n=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.hub_source_name})})})}},{flex:.1,minWidth:50,field:"3",headerName:"\u0645\u0642\u0635\u062f",sortable:!1,hideable:!1,filterOperators:V,renderCell:function(e){var n=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.hub_destination_name})})})}},{flex:.1,field:"4",minWidth:50,headerName:"\u0646\u0627\u0645 \u0644\u0627\u062c\u0633\u062a\u06cc\u06a9",filterOperators:V,hideable:!1,sortable:!1,renderCell:function(e){var n=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.logistic_name})})}},{flex:.1,minWidth:50,sortable:!1,hideable:!1,filterable:!1,field:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",headerName:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",renderCell:function(e){var n=e.row;return(0,t.jsx)(j.Z,{company:n,toggleShowUserDrawer:K,setSelectedCompany:Y,setChange:S,selectedCompany:B,deleteFunction:L,noEdit:!0})}}];(0,o.useEffect)((function(){W([]),(0,g.fetchData)(n,E).then((function(e){null===e.data.manifest?m([]):m(e.data.manifest),k&&S(!1)})).catch((function(e){var n,r,t=(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a";h.ZP.error(t)}))}),[n,W,k,E]);var J=function(){return N(!F)},$=0!==Object.keys(E).length;return(0,t.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(i.ZP,{item:!0,xs:12,children:(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(p.Z,{data:D,api:function(){return h.ZP.promise((0,g.downloadDataFromServer)().then((function(e){W(e.data.map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){w(e,n,r[n])}))}return e}({},e,{time:f()(e.time,"YYYY/MM/DD HH:mm:ss").locale("fa").format("YYYY/MM/DD HH:mm:ss")})})))})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062f\u0627\u0646\u0644\u0648\u062f",success:"\u062f\u0627\u0646\u0644\u0648\u062f \u0627\u0646\u062c\u0627\u0645 \u0634\u062f",error:function(e){var n,r,t,o;return(null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)?null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a.\u0627\u0632 \u062e\u0627\u0644\u06cc \u0646\u0628\u0648\u062f\u0646 \u0645\u0648\u0627\u0631\u062f \u062f\u0627\u0646\u0644\u0648\u062f \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f."}})},headers:[{key:"manifest_id",label:"\u0634\u0646\u0627\u0633\u0647"},{key:"time",label:"\u062a\u0627\u0631\u06cc\u062e \u0648 \u0633\u0627\u0639\u062a"},{key:"qrcode",label:"qrcode"},{key:"logistic_name",label:"\u062a\u0627\u0645 \u0644\u0627\u062c\u0633\u062a\u06cc\u06a9"},{key:"manifest_id",label:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0627\u0646\u06cc\u0641\u0633\u062a"},{key:"hub_destination_name",label:"\u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"hub_source_name",label:"\u0641\u0631\u0633\u062a\u0646\u062f\u0647"}],name:"\u0645\u0627\u0646\u06cc\u0641\u0633\u062a",toggle:Q,children:[(0,t.jsx)(b.Z,{sx:{mb:2},onClick:J,variant:"contained",startIcon:(0,t.jsx)(v.Z,{}),color:"info",children:"\u0641\u06cc\u0644\u062a\u0631"}),$&&(0,t.jsx)(b.Z,{sx:{mb:2},onClick:function(){I({}),S(!0)},variant:"contained",color:"warning",children:"\u062d\u0630\u0641 \u0641\u06cc\u0644\u062a\u0631"})]}),(0,t.jsx)(C,{sx:{p:4,m:1},children:(0,t.jsx)(x.Z,{columns:A,data:d,sortModel:n,setSortModel:r,noFilter:!0})})]})}),F&&(0,t.jsx)(y.default,{setFilter:I,filter:E,open:F,toggle:J,setChange:S}),H&&(0,t.jsx)(Z.default,{open:H,toggle:Q,setChange:S,edit:!1,company:null,showUser:!1}),R&&(0,t.jsx)(_.default,{open:R,toggle:K,setChange:S,edit:!0,user:B,showUser:!0})]})}O.acl={action:"read",subject:"every-page"},n.default=O}},function(e){e.O(0,[4885,3978,778,3116,6786,2255,2277,3105,6369,9774,2888,179],(function(){return n=17368,e(e.s=n);var n}));var n=e.O();_N_E=n}]);