"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[792],{85216:function(e,n,t){var r=t(85893),o=t(67294),a=t(54776),l=t(50657),i=t(67564),s=t(6514),c=t(31425),d=t(83321),u=t(37645),f=t(58951),x=t(48075);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=o.forwardRef((function(e,n){return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({direction:"up",ref:n},e))}));n.Z=function(e){var n=e.closeFunction,t=e.setOpen,o=e.open,a=e.company,p=function(){t(!1)};return(0,r.jsxs)(l.Z,{open:o,TransitionComponent:h,keepMounted:!0,onClose:p,"aria-describedby":"alert-dialog-slide-description",children:[(0,r.jsxs)(u.Z,{sx:{display:"flex",gap:2},children:[(0,r.jsx)(i.Z,{color:"warning",component:x.Z}),"\u062d\u0630\u0641 "]}),(0,r.jsx)(s.Z,{children:(0,r.jsxs)(f.Z,{id:"alert-dialog-slide-description",children:["\u0627\u06cc\u0627 \u0627\u0632 \u062d\u0630\u0641 ",a.name," \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f\u061f"]})}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{onClick:function(){t(!1),n(a)},children:"\u0628\u0644\u0647"}),(0,r.jsx)(d.Z,{onClick:p,children:"\u062e\u06cc\u0631"})]})]})}},40609:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(85893),o=t(67294),a=t(93946),l=t(46160),i=t(38333),s=t(22224),c=t(95898),d=t(3690),u=t(83296),f=t(85216);function x(e){var n=e.company,t=e.setSelectedCompany,x=e.toggleEditUserDrawer,p=e.toggleShowUserDrawer,h=e.selectedCompany,m=e.deleteFunction,g=e.noShow,v=e.noEdit,b=(0,o.useState)(null),j=b[0],y=b[1],Z=Boolean(j),w=(0,o.useState)(!1),C=w[0],S=w[1],k=function(){y(null)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{size:"small",onClick:function(e){y(e.currentTarget)},children:(0,r.jsx)(l.Z,{})}),(0,r.jsxs)(i.Z,{keepMounted:!0,anchorEl:j,open:Z,onClose:k,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:[!g&&(0,r.jsxs)(s.Z,{onClick:function(){return t(n),p(),void k()},children:[(0,r.jsx)(c.Z,{fontSize:"small",sx:{mr:2}}),"\u0646\u0645\u0627\u06cc\u0634"]}),!v&&(0,r.jsxs)(s.Z,{onClick:function(){return t(n),x(),void k()},children:[(0,r.jsx)(d.Z,{fontSize:"small",sx:{mr:2}}),"\u0648\u06cc\u0631\u0627\u06cc\u0634"]}),(0,r.jsxs)(s.Z,{onClick:function(){return t(n),k(),void S(!0)},children:[(0,r.jsx)(u.Z,{fontSize:"small",sx:{mr:2}}),"\u062d\u0630\u0641"]})]}),(0,r.jsx)(f.Z,{open:C,setOpen:S,company:h,closeFunction:m})]})}},12300:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(85893),o=t(79172),a=t(83321),l=t(67294),i=t(15861),s=t(65834),c=t(95534),d=t(83461);var u=function(e){var n=e.api,t=e.headers,o=e.data,i=(0,l.useState)(!1),s=i[0],u=i[1];return(0,l.useEffect)((function(){(null===o||void 0===o?void 0:o.length)>0&&u(!0)}),[o,s]),(0,r.jsxs)(a.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",startIcon:(0,r.jsx)(c.Z,{fontSize:"small"}),onClick:function(){u(!1),n()},children:["\u062e\u0631\u0648\u062c\u06cc",s?(0,r.jsx)(d.CSVDownload,{data:o,headers:t,target:"_blank"}):null]})};var f=function(e){var n=e.toggle,t=e.data,l=e.headers,c=e.api,d=e.name,f=e.noAdd,x=e.children,p=e.noExport,h=e.withTitle;return(0,r.jsxs)(o.Z,{sx:{p:5,pb:0,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsxs)(o.Z,{children:[!p&&(0,r.jsx)(u,{api:c,headers:l,data:t}),h&&(0,r.jsx)(i.Z,{variant:"h6",children:d})]}),(0,r.jsxs)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:2},children:[x,!f&&(0,r.jsxs)(a.Z,{sx:{mb:2},onClick:n,variant:"contained",startIcon:(0,r.jsx)(s.Z,{}),children:["\u0627\u0641\u0632\u0648\u062f\u0646 ",d]})]})]})}},46893:function(e,n,t){var r=t(85893),o=t(67294),a=t(11888),l=t(4718),i=t(50853);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}n.Z=function(e){var n=e.data,t=e.columns,d=e.sortModel,u=e.setSortModel,f=e.selfFilter,x=e.noFilter,p=e.pageSizeDefault,h=(0,o.useState)(p||10),m=h[0],g=h[1],v=(0,o.useState)(0),b=v[0],j=v[1],y=(0,o.useState)({}),Z=y[0],w=y[1],C=(0,o.useCallback)((function(e){var n,t;(w(e),0!==Object.keys(e).length&&void 0!==(null===(n=e.items[0])||void 0===n?void 0:n.value))?u(c({},d,{search:s({},e.items[0].columnField.split(" ")[1],null===(t=e.items[0])||void 0===t?void 0:t.value)})):u(c({},d,{search:""}))}),[Z,w]);return(0,r.jsx)(a._,{autoHeight:!0,pagination:!0,rows:n,columns:t,pageSize:m,disableSelectionOnClick:!0,rowsPerPageOptions:[m],sx:{"& .MuiDataGrid-columnHeaders":{borderRadius:0}},paginationMode:!f&&"server",onPageSizeChange:function(e){g(e),u(c({},d,{page_size:e}))},localeText:l.T.components.MuiDataGrid.defaultProps.localeText,disableColumnSelector:!0,sortingMode:!f&&"server",onSortModelChange:function(e){var n,t,r=0!==e.length?"".concat(null===(n=e[0])||void 0===n?void 0:n.field," ").concat(null===(t=e[0])||void 0===t?void 0:t.sort):"1 asc";u(c({},d,{sort_by:"".concat(r)}))},onPageChange:function(e){j(e),u(c({},d,{page:e+1}))},page:b,rowCount:50,onFilterModelChange:C,components:!x&&{Toolbar:i.M}})}},20792:function(e,n,t){t.r(n),t.d(n,{GridContainer:function(){return v}});var r=t(85893),o=t(67294),a=t(86886),l=t(66242),i=t(15861),s=t(79172),c=t(3512),d=t(11496),u=t(55113),f=t(74931),x=t(3664),p=t(68773),h=t(46893),m=t(12300),g=t(40609),v=(0,d.ZP)(u.Z)({flexGrow:1,".MuiDataGrid-root":{border:"none"},".MuiTablePagination-displayedRows":{display:"none"}});function b(){var e=(0,o.useState)({}),n=e[0],t=e[1],d=(0,o.useState)(!1),u=d[0],b=d[1],j=(0,o.useState)(!1),y=j[0],Z=j[1],w=(0,o.useState)([]),C=w[0],S=w[1],k=(0,o.useState)(!1),O=k[0],P=k[1],D=(0,o.useState)({page:1,page_size:10,sort_by:"1 asc"}),z=D[0],W=D[1],_=(0,o.useState)([]),M=_[0],I=_[1],T=(0,o.useState)(!1),E=T[0],F=T[1],N=function(){return P(!O)},U=function(){return b(!u)},G=function(){return Z(!y)},R=function(e){f.ZP.promise((0,p.deleteUser)(e.id).then(F(!0)),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062d\u0630\u0641 \u0647\u0627\u0628",success:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062d\u0630\u0641 \u0634\u062f",error:function(e){var n,t;return(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a"}})},H=(0,c.s)().filter((function(e){var n=e.value;return["contains"].includes(n)})),A=[{flex:.1,minWidth:50,field:"1",headerName:"\u0634\u0646\u0627\u0633\u0647",filterOperators:H,hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,r.jsx)(i.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.id})})})}},{flex:.1,minWidth:50,field:"2",headerName:"\u0646\u0627\u0645 \u0647\u0627\u0628",filterOperators:H,hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,r.jsx)(i.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.name})})})}},{flex:.1,field:"fax",minWidth:50,headerName:"\u0641\u06a9\u0633",filterOperators:H,hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(i.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.fax})})}},{flex:.1,field:"telephone",minWidth:50,filterOperators:H,headerName:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646",sortable:!1,hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(i.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.tel_phone})})}},{flex:.1,field:"provence",minWidth:50,headerName:"\u0627\u0633\u062a\u0627\u0646",sortable:!1,filterOperators:H,hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(i.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.state})})}},{flex:.1,field:"3",minWidth:50,headerName:"\u0634\u0647\u0631",filterOperators:H,hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(i.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.city})})}},{flex:.1,minWidth:50,sortable:!1,hideable:!1,filterable:!1,field:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",headerName:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",renderCell:function(e){var o=e.row;return(0,r.jsx)(g.Z,{company:o,toggleShowUserDrawer:G,toggleEditUserDrawer:U,setSelectedCompany:t,setChange:F,selectedCompany:n,deleteFunction:R})}}];return(0,o.useEffect)((function(){S([]),(0,p.fetchData)(z).then((function(e){null===e.data.hubs?I([]):I(e.data.hubs),E&&F(!1)})).catch((function(e){var n,t,r=(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a";f.ZP.error(r)}))}),[z,S,E]),(0,r.jsxs)(a.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(a.ZP,{item:!0,xs:12,children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(m.Z,{toggle:N,data:C,api:function(){f.ZP.promise((0,p.downloadDataFromServer)().then((function(e){S(e.data)})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062f\u0627\u0646\u0644\u0648\u062f",success:"\u062f\u0627\u0646\u0644\u0648\u062f \u0627\u0646\u062c\u0627\u0645 \u0634\u062f",error:function(e){var n,t,r,o;return(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)?null===(r=e.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a.\u0627\u0632 \u062e\u0627\u0644\u06cc \u0646\u0628\u0648\u062f\u0646 \u0645\u0648\u0627\u0631\u062f \u062f\u0627\u0646\u0644\u0648\u062f \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f."}})},headers:[{key:"id",label:"\u0634\u0646\u0627\u0633\u0647"},{key:"name",label:"\u062a\u0627\u0645 \u0647\u0627\u0628"},{key:"tel_phone",label:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646"},{key:"fax",label:"\u0641\u06a9\u0633"},{key:"state",label:"\u0627\u0633\u062a\u0627\u0646"},{key:"city",label:"\u0634\u0647\u0631"},{key:"economic_code",label:"\u06a9\u062f \u0627\u0642\u062a\u0635\u0627\u062f\u06cc"},{key:"management_name",label:"\u0646\u0627\u0645 \u0645\u062f\u06cc\u0631\u0639\u0627\u0645\u0644"},{key:"registration_number",label:"\u0634\u0645\u0627\u0631\u0647 \u062b\u0628\u062a"},{key:"workshop_number",label:"\u06a9\u062f \u06a9\u0627\u0631\u06af\u0627\u0647"}],name:"\u0647\u0627\u0628"}),(0,r.jsx)(v,{sx:{p:4,m:1},children:(0,r.jsx)(h.Z,{columns:A,data:M,sortModel:z,setSortModel:W,noFilter:!0})})]})}),O&&(0,r.jsx)(x.default,{open:O,toggle:N,setChange:F,edit:!1,company:null,showUser:!1}),u&&(0,r.jsx)(x.default,{open:u,toggle:U,setChange:F,user:n,edit:!0,showUser:!1}),y&&(0,r.jsx)(x.default,{open:y,toggle:G,setChange:F,edit:!0,user:n,showUser:!0})]})}b.acl={action:"read",subject:"every-page"},n.default=b}}]);