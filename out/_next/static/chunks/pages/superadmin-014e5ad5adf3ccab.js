(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7200],{83296:function(e,n,t){"use strict";var r;n.Z=void 0;var a=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z","DeleteOutline");n.Z=a},46160:function(e,n,t){"use strict";var r;n.Z=void 0;var a=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z","DotsVertical");n.Z=a},78687:function(e,n,t){"use strict";var r;n.Z=void 0;var a=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z","Laptop");n.Z=a},80030:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin",function(){return t(98804)}])},36376:function(e,n,t){"use strict";t.r(n);var r=t(85893),a=(t(67294),t(45697)),i=t.n(a),o=t(84808),l=t(98456);function s(e){var n=e.open;return(0,r.jsx)(o.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:n,children:(0,r.jsx)(l.Z,{color:"inherit"})})}s.propTypes={open:i().bool.isRequired},n.default=s},35515:function(e,n,t){"use strict";t.r(n);var r=t(85893),a=t(67294),i=t(58826),o=t(11057),l=t(11496),s=t(50135),c=t(15861),u=t(79172),d=t(94054),f=t(56815),x=t(74231),m=t(2638),h=t(42283),p=t(42734),v=t(57709),g=t(64666),j=t(37645),b=t(6514),Z=t(31425),y=t(58951),_=t(47312),w=t(18360),C=t(18972),S=t(5370),k=(0,l.ZP)(u.Z)((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(3,4),justifyContent:"space-between",backgroundColor:n.palette.background.default}})),M=x.Ry().shape({duration_of_activity:x.Rx().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(1,"\u062d\u062f\u0627\u0642\u0644 1 \u0631\u0648\u0632").typeError("\u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f"),active:x.O7().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0641\u06cc\u0644\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"),name:x.Z_()});n.default=function(e){var n=e.open,t=e.toggle,l=e.setChange,x=e.company,P=e.edit,z=e.setLoading,O=(0,a.useState)(!1),D=O[0],A=O[1],I={duration_of_activity:x.duration_of_activity,name:x.name,active:x.active},W=(0,h.cI)({defaultValues:I,mode:"onChange",resolver:(0,m.X)(M)}),H=W.reset,Y=W.control,T=W.handleSubmit,V=W.setError,N=W.formState.errors,B=function(){A(!1),l(!0),t(),H({duration_of_activity:0,name:"",active:!1})},E=function(){t(),H(I)};return(0,r.jsxs)(i.ZP,{open:n,anchor:"left",variant:"temporary",onClose:E,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)(k,{children:[(0,r.jsxs)(c.Z,{variant:"h6",children:[" ",P?"\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9":"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0648\u0631\u06cc\u0631"]}),(0,r.jsx)(p.Z,{fontSize:"small",onClick:E,sx:{cursor:"pointer"}})]}),(0,r.jsx)(u.Z,{sx:{p:5},children:(0,r.jsxs)("form",{onSubmit:T((function(e){z(!0),S.Z.put("company/".concat(x.id),e,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){z(!1),B()})).catch((function(e){z(!1),V("name",{type:"custom",message:e.response.data.message})}))})),children:[(0,r.jsx)(d.Z,{fullWidth:!0,sx:{mb:4},children:(0,r.jsx)(h.Qr,{name:"name",control:Y,rules:{required:!0},render:function(e){var n=e.field,t=n.value,a=n.onChange,i=n.onBlur;return(0,r.jsx)(s.Z,{autoFocus:!0,label:"\u0646\u0627\u0645 \u0634\u0631\u06a9\u062a",value:t,onBlur:i,onChange:a,disabled:P||!1})}})}),(0,r.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,r.jsx)(h.Qr,{name:"duration_of_activity",control:Y,type:"number",rules:{required:!0},render:function(e){var n=e.field,t=n.value,a=n.onChange,i=n.onBlur;return(0,r.jsx)(s.Z,{autoFocus:!0,label:"\u0627\u0639\u062a\u0628\u0627\u0631 \u0627\u06a9\u0627\u0646\u062a (\u0631\u0648\u0632)",value:t,onBlur:i,onChange:a,error:Boolean(N.duration_of_activity)})}}),N.duration_of_activity&&(0,r.jsx)(f.Z,{sx:{color:"error.main"},children:N.duration_of_activity.message})]}),(0,r.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,r.jsx)(h.Qr,{name:"active",control:Y,render:function(e){var n=e.field,t=n.onChange,a=n.onBlur;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Z,{id:"demo-multiple-name-label",children:"\u0648\u0636\u0639\u06cc\u062a"}),(0,r.jsxs)(w.Z,{onBlur:a,labelId:"demo-multiple-name-label",id:"demo-multiple-name",onChange:t,defaultValue:x.active,error:Boolean(N.active),input:(0,r.jsx)(v.Z,{label:"Name"}),children:[(0,r.jsx)(C.Z,{value:!0,children:"\u0641\u0639\u0627\u0644"}),(0,r.jsx)(C.Z,{value:!1,children:"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644"})]})]})}}),N.active&&(0,r.jsx)(f.Z,{sx:{color:"error.main"},children:N.active.message})]}),(0,r.jsx)(o.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},fullWidth:!0,children:"\u0630\u062e\u06cc\u0631\u0647"})]})}),(0,r.jsxs)(g.Z,{open:D,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsx)(j.Z,{id:"alert-dialog-title",children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u0631\u06a9\u062a"}),(0,r.jsx)(b.Z,{children:(0,r.jsxs)(y.Z,{id:"alert-dialog-description",children:["\u0634\u0631\u06a9\u062a ",x.name," \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f."]})}),(0,r.jsx)(Z.Z,{children:(0,r.jsx)(o.Z,{onClick:B,autoFocus:!0,children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})})]})]})}},18848:function(e,n,t){"use strict";t.r(n);var r=t(34051),a=t.n(r),i=t(85893),o=t(79172),l=t(11057),s=t(50135),c=t(95534),u=t(83461),d=t(67294),f=t(3067),x=t.n(f),m=t(5370);function h(e,n,t,r,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,a)}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}n.default=function(e){var n=e.handleFilter,t=e.toggle,r=e.value,f=e.setLoading,p=(0,d.useState)([]),g=p[0],j=p[1],b=(0,d.useState)(!1),Z=b[0],y=b[1];return(0,d.useEffect)((function(){g.length&&y(!0)}),[g]),(0,i.jsxs)(o.Z,{sx:{p:5,pb:3,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsxs)(l.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",startIcon:(0,i.jsx)(c.Z,{fontSize:"small"}),onClick:function(){f(!0),m.Z.get("company/all/admin",{},{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then(function(){var e,n=(e=a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(n.data.map((function(e){var n=e.active?"\u0641\u0639\u0627\u0644":"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644";return v({},e,{created_at:x()(e.created_at,"YYYY/MM/DD").locale("fa").format("YYYY/MM/DD"),active:n})}))),f(!1);case 2:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){h(i,r,a,o,l,"next",e)}function l(e){h(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}()).catch((function(){return f(!1),!1}))},children:["\u062e\u0631\u0648\u062c\u06cc",Z&&(0,i.jsx)(u.CSVDownload,{data:g,headers:[{key:"id",label:"\u0634\u0646\u0627\u0633\u0647"},{key:"name",label:"\u062a\u0627\u0645 \u0634\u0631\u06a9\u062a"},{key:"duration_of_activity",label:"\u0627\u0634\u062a\u0631\u0627\u06a9"},{key:"active",label:"\u0648\u0636\u0639\u06cc\u062a"},{key:"created_at",label:"\u062a\u0627\u0631\u06cc\u062e \u0627\u06cc\u062c\u0627\u062f"}],target:"_blank"})]}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[(0,i.jsx)(s.Z,{size:"small",value:r,sx:{mr:6,mb:2},placeholder:"\u062c\u0633\u062a\u062c\u0648\u06cc \u0634\u0631\u06a9\u062a",onChange:function(e){return n(e.target.value)}}),(0,i.jsx)(l.Z,{sx:{mb:2},onClick:t,variant:"contained",children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0648\u0631\u06cc\u0631"})]})]})}},98804:function(e,n,t){"use strict";t.r(n),t.d(n,{GridContainer:function(){return F}});var r=t(34051),a=t.n(r),i=t(85893),o=t(67294),l=t(86886),s=t(66242),c=t(15861),u=t(79172),d=t(38333),f=t(11281),x=t(4718),m=t(18972),h=t(11496),p=t(93946),v=t(3067),g=t.n(v),j=t(55113),b=t(78687),Z=t(9657),y=t(17261),_=t(46160),w=t(3690),C=t(83296),S=t(99642),k=t(95898),M=t(59872),P=t(5370),z=t(7071),O=t(64666),D=t(37645),A=t(6514),I=t(31425),W=t(58951),H=t(11057),Y=t(46353),T=t(18848),V=t(35515),N=t(36376);function B(e,n,t,r,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,a)}function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){E(e,n,t[n])}))}return e}var F=(0,h.ZP)(j.Z)({flexGrow:1,".MuiDataGrid-root":{border:"none"},".MuiTablePagination-displayedRows":{display:"none"}}),q={admin:(0,i.jsx)(b.Z,{sx:{mr:2,color:"error.main"}}),author:(0,i.jsx)(y.Z,{sx:{mr:2,color:"warning.main"}}),editor:(0,i.jsx)(w.Z,{sx:{mr:2,color:"info.main"}}),maintainer:(0,i.jsx)(Z.Z,{sx:{mr:2,color:"success.main"}}),subscriber:(0,i.jsx)(S.Z,{sx:{mr:2,color:"primary.main"}})},G={true:"success",false:"secondary"};function R(){var e=function(e){var n=e.company,t=(0,o.useState)(null),a=t[0],l=t[1],s=Boolean(a),c=function(){l(null)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.Z,{size:"small",onClick:function(e){l(e.currentTarget)},children:(0,i.jsx)(_.Z,{})}),(0,i.jsxs)(d.Z,{keepMounted:!0,anchorEl:a,open:s,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:[(0,i.jsxs)(m.Z,{onClick:function(){return ie(n),void Ze()},children:[(0,i.jsx)(k.Z,{fontSize:"small",sx:{mr:2}}),"\u0646\u0645\u0627\u06cc\u0634 \u0634\u0631\u06a9\u062a"]}),(0,i.jsxs)(m.Z,{onClick:function(){return ie(n),void be()},children:[(0,i.jsx)(M.Z,{fontSize:"small",sx:{mr:2}}),"\u062a\u0645\u062f\u06cc\u062f \u0627\u0634\u062a\u0631\u0627\u06a9"]}),(0,i.jsxs)(m.Z,{onClick:function(){return ie(n),void je()},children:[(0,i.jsx)(w.Z,{fontSize:"small",sx:{mr:2}}),"\u0648\u06cc\u0631\u0627\u06cc\u0634"]}),(0,i.jsxs)(m.Z,{onClick:function(){return e=n.id,r(!0),P.Z.delete("company/".concat(e),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){me(!0),r(!1)})).catch((function(){r(!1)})),void c();var e},children:[(0,i.jsx)(C.Z,{fontSize:"small",sx:{mr:2}}),"\u062d\u0630\u0641"]})]})]})},n=(0,o.useState)(!1),t=n[0],r=n[1],h=(0,o.useState)(""),v=h[0],j=h[1],b=(0,o.useState)(10),Z=b[0],y=b[1],S=(0,o.useState)(!1),E=S[0],R=S[1],Q=(0,o.useState)({page:1,page_size:10,sort_by:""}),X=Q[0],U=Q[1],J=(0,o.useState)([]),K=J[0],$=J[1],ee=(0,o.useState)(!0),ne=ee[0],te=ee[1],re=(0,o.useState)({}),ae=re[0],ie=re[1],oe=(0,o.useState)(!1),le=oe[0],se=oe[1],ce=(0,o.useState)(!1),ue=ce[0],de=ce[1],fe=(0,o.useState)(!1),xe=fe[0],me=fe[1],he=(0,o.useState)(!1),pe=he[0],ve=he[1],ge=function(){return R(!E)},je=function(){return se(!le)},be=function(){return de(!ue)},Ze=function(){return ve(!pe)},ye=[{flex:.1,minWidth:230,field:"name",headerName:"\u0646\u0627\u0645 \u06a9\u0648\u0631\u06cc\u0631",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,i.jsx)(c.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.name})})})}},{flex:.1,minWidth:230,field:"adminName",headerName:"\u0646\u0627\u0645 \u0627\u062f\u0645\u06cc\u0646",hideable:!1,renderCell:function(e){var n,t=e.row;return(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,i.jsx)(c.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:null===t||void 0===t||null===(n=t.admin)||void 0===n?void 0:n.name})})})}},{flex:.2,minWidth:230,field:"adminUsername",headerName:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u062f\u0645\u06cc\u0646",hideable:!1,renderCell:function(e){var n,t=e.row;return(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,i.jsx)(c.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:null===t||void 0===t||null===(n=t.admin)||void 0===n?void 0:n.username})})})}},{flex:.15,field:"created_at",minWidth:150,headerName:"\u062a\u0627\u0631\u06cc\u062e \u062b\u0628\u062a \u0646\u0627\u0645",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[q[n.role],(0,i.jsx)(c.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:g()(n.created_at,"YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")})]})}},{flex:.15,minWidth:120,headerName:"\u0627\u0634\u062a\u0631\u0627\u06a9",field:"duration_of_activity",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsxs)(c.Z,{variant:"subtitle1",noWrap:!0,sx:{textTransform:"capitalize"},children:[n.duration_of_activity," \u0631\u0648\u0632"]})}},{flex:.1,minWidth:110,field:"active",headerName:"\u0648\u0636\u0639\u06cc\u062a",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsx)(z.Z,{skin:"light",size:"small",label:n.active?"\u0641\u0639\u0627\u0644":"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644",color:G[n.active],sx:{textTransform:"capitalize","& .MuiChip-label":{lineHeight:"18px"}}})}},{flex:.1,minWidth:90,sortable:!1,hideable:!1,field:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",headerName:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",renderCell:function(n){var t=n.row;return(0,i.jsx)(e,{company:t})}}];(0,o.useEffect)((function(){P.Z.get("company/all/admin",X,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then(function(){var e,n=(e=a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$(n.data),te(!1),console.log(n.data);case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){B(i,r,a,o,l,"next",e)}function l(e){B(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}),[X,ne]);var _e=(0,o.useCallback)((function(e){j(e)}),[ne]),we=function(){me(!1),te(!0)},Ce=(0,o.useState)(0)[0];return(0,i.jsxs)(l.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(T.default,{value:v,handleFilter:_e,toggle:ge,setLoading:r}),(0,i.jsx)(F,{children:(0,i.jsx)(f._,{autoHeight:!0,pagination:!0,rows:K,columns:ye,pageSize:Z,disableSelectionOnClick:!0,rowsPerPageOptions:[10,25,50],sx:{"& .MuiDataGrid-columnHeaders":{borderRadius:0}},paginationMode:"server",onPageSizeChange:function(e){console.log(e),y(e),U(L({},X,{page_size:e}))},localeText:x.T.components.MuiDataGrid.defaultProps.localeText,disableColumnSelector:!0,sortingMode:"server",onSortModelChange:function(e){var n,t;U(L({},X,{sort_by:"".concat(null===(n=e[0])||void 0===n?void 0:n.field," ").concat(null===(t=e[0])||void 0===t?void 0:t.sort)}))},onPageChange:function(e){y(e),U(L({},X,{page:e+1}))},page:Ce,disableColumnFilter:!0,rowCount:50})})]})}),E&&(0,i.jsx)(Y.default,{open:E,toggle:ge,setChange:te,edit:!1,company:null,setLoading:r}),le&&(0,i.jsx)(V.default,{open:le,toggle:je,setChange:te,company:ae,edit:!1,setLoading:r}),ue&&(0,i.jsx)(V.default,{open:ue,toggle:be,setChange:te,company:ae,edit:!0,setLoading:r}),pe&&(0,i.jsx)(Y.default,{open:pe,toggle:Ze,setChange:te,edit:!0,company:ae,setLoading:r}),(0,i.jsxs)(O.Z,{open:xe,onClose:we,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,i.jsx)(D.Z,{id:"alert-dialog-title",children:"\u062d\u0630\u0641 \u0634\u0631\u06a9\u062a"}),(0,i.jsx)(A.Z,{children:(0,i.jsx)(W.Z,{id:"alert-dialog-description",children:"\u0634\u0631\u06a9\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062d\u0630\u0641 \u0634\u062f"})}),(0,i.jsx)(I.Z,{children:(0,i.jsx)(H.Z,{onClick:we,autoFocus:!0,children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})})]}),(0,i.jsx)(N.default,{open:t})]})}R.acl={action:"read",subject:"acl-page"},n.default=R}},function(e){e.O(0,[4885,4386,2283,1524,9075,7693,1281,2718,4099,6353,9774,2888,179],(function(){return n=80030,e(e.s=n);var n}));var n=e.O();_N_E=n}]);