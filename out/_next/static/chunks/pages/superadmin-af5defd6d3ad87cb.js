(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7200],{83296:function(e,n,t){"use strict";var r;n.Z=void 0;var a=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z","DeleteOutline");n.Z=a},46160:function(e,n,t){"use strict";var r;n.Z=void 0;var a=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z","DotsVertical");n.Z=a},78687:function(e,n,t){"use strict";var r;n.Z=void 0;var a=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z","Laptop");n.Z=a},80030:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin",function(){return t(98804)}])},36376:function(e,n,t){"use strict";t.r(n);var r=t(85893),a=(t(67294),t(45697)),i=t.n(a),o=t(84808),l=t(98456);function s(e){var n=e.open;return(0,r.jsx)(o.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:n,children:(0,r.jsx)(l.Z,{color:"inherit"})})}s.propTypes={open:i().bool.isRequired},n.default=s},35515:function(e,n,t){"use strict";t.r(n);var r=t(85893),a=t(67294),i=t(58826),o=t(11057),l=t(11496),s=t(50135),c=t(15861),u=t(79172),d=t(94054),f=t(56815),x=t(74231),m=t(2638),h=t(42283),p=t(42734),v=t(57709),g=t(64666),j=t(37645),b=t(6514),y=t(31425),Z=t(58951),_=t(47312),C=t(18360),w=t(18972),S=t(5370),k=(0,l.ZP)(u.Z)((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(3,4),justifyContent:"space-between",backgroundColor:n.palette.background.default}})),M=x.Ry().shape({duration_of_activity:x.Rx().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(1,"\u062d\u062f\u0627\u0642\u0644 1 \u0631\u0648\u0632").typeError("\u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f"),active:x.O7().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0641\u06cc\u0644\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"),name:x.Z_()});n.default=function(e){var n=e.open,t=e.toggle,l=e.setChange,x=e.company,O=e.edit,P=e.setLoading,z=(0,a.useState)(!1),D=z[0],I=z[1],W={duration_of_activity:x.duration_of_activity,name:x.name,active:x.active},A=(0,h.cI)({defaultValues:W,mode:"onChange",resolver:(0,m.X)(M)}),T=A.reset,H=A.control,Y=A.handleSubmit,V=A.setError,B=A.formState.errors,N=function(){I(!1),l(!0),t(),T({duration_of_activity:0,name:"",active:!1})},E=function(){t(),T(W)};return(0,r.jsxs)(i.ZP,{open:n,anchor:"left",variant:"temporary",onClose:E,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)(k,{children:[(0,r.jsxs)(c.Z,{variant:"h6",children:[" ",O?"\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9":"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0648\u0631\u06cc\u0631"]}),(0,r.jsx)(p.Z,{fontSize:"small",onClick:E,sx:{cursor:"pointer"}})]}),(0,r.jsx)(u.Z,{sx:{p:5,"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"},"& \t.MuiInputLabel-root.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"}},children:(0,r.jsxs)("form",{onSubmit:Y((function(e){P(!0),S.Z.put("company/".concat(x.id),e,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){P(!1),N()})).catch((function(e){P(!1),V("name",{type:"custom",message:e.response.data.message})}))})),children:[(0,r.jsx)(d.Z,{fullWidth:!0,sx:{mb:4},children:(0,r.jsx)(h.Qr,{name:"name",control:H,rules:{required:!0},render:function(e){var n=e.field,t=n.value,a=n.onChange,i=n.onBlur;return(0,r.jsx)(s.Z,{autoFocus:!0,label:"\u0646\u0627\u0645 \u0634\u0631\u06a9\u062a",value:t,onBlur:i,onChange:a,disabled:O||!1})}})}),(0,r.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,r.jsx)(h.Qr,{name:"duration_of_activity",control:H,type:"number",rules:{required:!0},render:function(e){var n=e.field,t=n.value,a=n.onChange,i=n.onBlur;return(0,r.jsx)(s.Z,{autoFocus:!0,label:"\u0627\u0639\u062a\u0628\u0627\u0631 \u0627\u06a9\u0627\u0646\u062a (\u0631\u0648\u0632)",value:t,onBlur:i,onChange:a,error:Boolean(B.duration_of_activity)})}}),B.duration_of_activity&&(0,r.jsx)(f.Z,{sx:{color:"error.main"},children:B.duration_of_activity.message})]}),(0,r.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,r.jsx)(h.Qr,{name:"active",control:H,render:function(e){var n=e.field,t=n.onChange,a=n.onBlur;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Z,{id:"demo-multiple-name-label",children:"\u0648\u0636\u0639\u06cc\u062a"}),(0,r.jsxs)(C.Z,{onBlur:a,labelId:"demo-multiple-name-label",id:"demo-multiple-name",onChange:t,defaultValue:x.active,error:Boolean(B.active),input:(0,r.jsx)(v.Z,{label:"Name"}),children:[(0,r.jsx)(w.Z,{value:!0,children:"\u0641\u0639\u0627\u0644"}),(0,r.jsx)(w.Z,{value:!1,children:"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644"})]})]})}}),B.active&&(0,r.jsx)(f.Z,{sx:{color:"error.main"},children:B.active.message})]}),(0,r.jsx)(o.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},fullWidth:!0,children:"\u0630\u062e\u06cc\u0631\u0647"})]})}),(0,r.jsxs)(g.Z,{open:D,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsx)(j.Z,{id:"alert-dialog-title",children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u0631\u06a9\u062a"}),(0,r.jsx)(b.Z,{children:(0,r.jsxs)(Z.Z,{id:"alert-dialog-description",children:["\u0634\u0631\u06a9\u062a ",x.name," \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f."]})}),(0,r.jsx)(y.Z,{children:(0,r.jsx)(o.Z,{onClick:N,autoFocus:!0,children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})})]})]})}},18848:function(e,n,t){"use strict";t.r(n);var r=t(34051),a=t.n(r),i=t(85893),o=t(79172),l=t(11057),s=t(95534),c=t(83461),u=t(67294),d=t(3067),f=t.n(d),x=t(5370);function m(e,n,t,r,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,a)}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}n.default=function(e){var n=e.toggle,t=e.setLoading,r=(0,u.useState)([]),d=r[0],h=r[1],v=(0,u.useState)(!1),g=v[0],j=v[1];return(0,u.useEffect)((function(){d.length&&j(!0)}),[d]),(0,i.jsxs)(o.Z,{sx:{p:5,pb:3,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsxs)(l.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",startIcon:(0,i.jsx)(s.Z,{fontSize:"small"}),onClick:function(){t(!0),x.Z.get("company/all/admin",{},{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then(function(){var e,n=(e=a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(n.data.map((function(e){var n=e.active?"\u0641\u0639\u0627\u0644":"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644";return p({},e,{created_at:f()(e.created_at,"YYYY/MM/DD").locale("fa").format("YYYY/MM/DD"),active:n})}))),t(!1);case 2:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){m(i,r,a,o,l,"next",e)}function l(e){m(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}()).catch((function(){return t(!1),!1}))},children:["\u062e\u0631\u0648\u062c\u06cc",g&&(0,i.jsx)(c.CSVDownload,{data:d,headers:[{key:"id",label:"\u0634\u0646\u0627\u0633\u0647"},{key:"name",label:"\u062a\u0627\u0645 \u0634\u0631\u06a9\u062a"},{key:"duration_of_activity",label:"\u0627\u0634\u062a\u0631\u0627\u06a9"},{key:"active",label:"\u0648\u0636\u0639\u06cc\u062a"},{key:"created_at",label:"\u062a\u0627\u0631\u06cc\u062e \u0627\u06cc\u062c\u0627\u062f"}],target:"_blank"})]}),(0,i.jsx)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:(0,i.jsx)(l.Z,{sx:{mb:2},onClick:n,variant:"contained",children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0648\u0631\u06cc\u0631"})})]})}},98804:function(e,n,t){"use strict";t.r(n),t.d(n,{GridContainer:function(){return G}});var r=t(34051),a=t.n(r),i=t(85893),o=t(67294),l=t(86886),s=t(66242),c=t(15861),u=t(79172),d=t(38333),f=t(3512),x=t(94603),m=t(4718),h=t(50853),p=t(18972),v=t(11496),g=t(93946),j=t(3067),b=t.n(j),y=t(55113),Z=t(78687),_=t(9657),C=t(17261),w=t(46160),S=t(3690),k=t(83296),M=t(99642),O=t(95898),P=t(59872),z=t(5370),D=t(7071),I=t(64666),W=t(37645),A=t(6514),T=t(31425),H=t(58951),Y=t(11057),V=t(46353),B=t(18848),N=t(35515),E=t(36376);function L(e,n,t,r,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,a)}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}var G=(0,v.ZP)(y.Z)({flexGrow:1,".MuiDataGrid-root":{border:"none"},".MuiTablePagination-displayedRows":{display:"none"}}),R={admin:(0,i.jsx)(Z.Z,{sx:{mr:2,color:"error.main"}}),author:(0,i.jsx)(C.Z,{sx:{mr:2,color:"warning.main"}}),editor:(0,i.jsx)(S.Z,{sx:{mr:2,color:"info.main"}}),maintainer:(0,i.jsx)(_.Z,{sx:{mr:2,color:"success.main"}}),subscriber:(0,i.jsx)(M.Z,{sx:{mr:2,color:"primary.main"}})},Q={true:"success",false:"secondary"};function X(){var e=function(e){var n=e.company,t=(0,o.useState)(null),a=t[0],l=t[1],s=Boolean(a),c=function(){l(null)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.Z,{size:"small",onClick:function(e){l(e.currentTarget)},children:(0,i.jsx)(w.Z,{})}),(0,i.jsxs)(d.Z,{keepMounted:!0,anchorEl:a,open:s,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:[(0,i.jsxs)(p.Z,{onClick:function(){return ae(n),void be()},children:[(0,i.jsx)(O.Z,{fontSize:"small",sx:{mr:2}}),"\u0646\u0645\u0627\u06cc\u0634 \u0634\u0631\u06a9\u062a"]}),(0,i.jsxs)(p.Z,{onClick:function(){return ae(n),void je()},children:[(0,i.jsx)(P.Z,{fontSize:"small",sx:{mr:2}}),"\u062a\u0645\u062f\u06cc\u062f \u0627\u0634\u062a\u0631\u0627\u06a9"]}),(0,i.jsxs)(p.Z,{onClick:function(){return ae(n),void ge()},children:[(0,i.jsx)(S.Z,{fontSize:"small",sx:{mr:2}}),"\u0648\u06cc\u0631\u0627\u06cc\u0634"]}),(0,i.jsxs)(p.Z,{onClick:function(){return e=n.id,r(!0),z.Z.delete("company/".concat(e),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){xe(!0),r(!1)})).catch((function(){r(!1)})),void c();var e},children:[(0,i.jsx)(k.Z,{fontSize:"small",sx:{mr:2}}),"\u062d\u0630\u0641"]})]})]})},n=(0,o.useState)(!1),t=n[0],r=n[1],v=(0,o.useState)(10),j=v[0],y=v[1],Z=(0,o.useState)(!1),_=Z[0],C=Z[1],M=(0,o.useState)({page:1,page_size:10,sort_by:"id desc"}),F=M[0],X=M[1],U=(0,o.useState)([]),J=U[0],K=U[1],$=(0,o.useState)(!0),ee=$[0],ne=$[1],te=(0,o.useState)({}),re=te[0],ae=te[1],ie=(0,o.useState)(!1),oe=ie[0],le=ie[1],se=(0,o.useState)(!1),ce=se[0],ue=se[1],de=(0,o.useState)(!1),fe=de[0],xe=de[1],me=(0,o.useState)(!1),he=me[0],pe=me[1],ve=function(){return C(!_)},ge=function(){return le(!oe)},je=function(){return ue(!ce)},be=function(){return pe(!he)},ye=(0,f.s)().filter((function(e){var n=e.value;return["contains"].includes(n)})),Ze=[{flex:.1,minWidth:230,field:"name",filterOperators:ye,headerName:"\u0646\u0627\u0645 \u06a9\u0648\u0631\u06cc\u0631",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,i.jsx)(c.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.name})})})}},{flex:.1,minWidth:230,field:"adminName",filterable:!1,headerName:"\u0646\u0627\u0645 \u0627\u062f\u0645\u06cc\u0646",hideable:!1,renderCell:function(e){var n,t=e.row;return(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,i.jsx)(c.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:null===t||void 0===t||null===(n=t.admin)||void 0===n?void 0:n.name})})})}},{flex:.2,minWidth:230,field:"adminUsername",headerName:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u062f\u0645\u06cc\u0646",filterable:!1,hideable:!1,renderCell:function(e){var n,t=e.row;return(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,i.jsx)(c.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:null===t||void 0===t||null===(n=t.admin)||void 0===n?void 0:n.username})})})}},{flex:.15,field:"created_at",minWidth:150,filterOperators:ye,headerName:"\u062a\u0627\u0631\u06cc\u062e \u062b\u0628\u062a \u0646\u0627\u0645",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[R[n.role],(0,i.jsx)(c.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:b()(n.created_at,"YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")})]})}},{flex:.15,minWidth:120,headerName:"\u0627\u0634\u062a\u0631\u0627\u06a9",filterOperators:ye,field:"duration_of_activity",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsxs)(c.Z,{variant:"subtitle1",noWrap:!0,sx:{textTransform:"capitalize"},children:[n.duration_of_activity," \u0631\u0648\u0632"]})}},{flex:.1,minWidth:110,field:"active",filterable:!1,headerName:"\u0648\u0636\u0639\u06cc\u062a",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsx)(D.Z,{skin:"light",size:"small",label:n.active?"\u0641\u0639\u0627\u0644":"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644",color:Q[n.active],sx:{textTransform:"capitalize","& .MuiChip-label":{lineHeight:"18px"}}})}},{flex:.1,minWidth:90,sortable:!1,hideable:!1,field:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",headerName:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",renderCell:function(n){var t=n.row;return(0,i.jsx)(e,{company:t})}}];(0,o.useEffect)((function(){z.Z.get("company/all/admin",F,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then(function(){var e,n=(e=a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K(n.data),ne(!1),console.log(n.data);case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){L(i,r,a,o,l,"next",e)}function l(e){L(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}),[F,ee]);var _e=function(){xe(!1),ne(!0)},Ce=(0,o.useState)(0),we=Ce[0],Se=Ce[1],ke=(0,o.useState)({}),Me=ke[0],Oe=ke[1],Pe=(0,o.useCallback)((function(e){var n,t,r;(console.log(e),Oe(e),0!==Object.keys(e).length&&void 0!==(null===(n=e.items[0])||void 0===n?void 0:n.value))?(X(q({},F,{search:"".concat(e.items[0].columnField,"|").concat(null===(t=e.items[0])||void 0===t?void 0:t.value)})),console.log("".concat(e.items[0].columnField,"|").concat(null===(r=e.items[0])||void 0===r?void 0:r.value))):X(q({},F,{search:""}))}),[Me,Oe]);return(0,i.jsxs)(l.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(B.default,{toggle:ve,setLoading:r}),(0,i.jsxs)(G,{children:[(0,i.jsx)(x._,{autoHeight:!0,pagination:!0,rows:J,columns:Ze,pageSize:j,disableSelectionOnClick:!0,rowsPerPageOptions:[10,25,50],sx:{"& .MuiDataGrid-columnHeaders":{borderRadius:0}},paginationMode:"server",onPageSizeChange:function(e){console.log(e),y(e),X(q({},F,{page_size:e}))},localeText:m.T.components.MuiDataGrid.defaultProps.localeText,disableColumnSelector:!0,sortingMode:"server",onSortModelChange:function(e){var n,t,r=0!==e.length?"".concat(null===(n=e[0])||void 0===n?void 0:n.field," ").concat(null===(t=e[0])||void 0===t?void 0:t.sort):"id desc";X(q({},F,{sort_by:"".concat(r)}))},onPageChange:function(e){Se(e),X(q({},F,{page:e+1}))},page:we,rowCount:50,onFilterModelChange:Pe,isLoading:t,components:{Toolbar:h.M}}),"/>"]})]})}),_&&(0,i.jsx)(V.default,{open:_,toggle:ve,setChange:ne,edit:!1,company:null,setLoading:r}),oe&&(0,i.jsx)(N.default,{open:oe,toggle:ge,setChange:ne,company:re,edit:!1,setLoading:r}),ce&&(0,i.jsx)(N.default,{open:ce,toggle:je,setChange:ne,company:re,edit:!0,setLoading:r}),he&&(0,i.jsx)(V.default,{open:he,toggle:be,setChange:ne,edit:!0,company:re,setLoading:r}),(0,i.jsxs)(I.Z,{open:fe,onClose:_e,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,i.jsx)(W.Z,{id:"alert-dialog-title",children:"\u062d\u0630\u0641 \u0634\u0631\u06a9\u062a"}),(0,i.jsx)(A.Z,{children:(0,i.jsx)(H.Z,{id:"alert-dialog-description",children:"\u0634\u0631\u06a9\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062d\u0630\u0641 \u0634\u062f"})}),(0,i.jsx)(T.Z,{children:(0,i.jsx)(Y.Z,{onClick:_e,autoFocus:!0,children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})})]}),(0,i.jsx)(E.default,{open:t})]})}X.acl={action:"read",subject:"acl-page"},n.default=X}},function(e){e.O(0,[4885,4386,2283,1524,9075,7693,4603,2718,9762,6353,9774,2888,179],(function(){return n=80030,e(e.s=n);var n}));var n=e.O();_N_E=n}]);