(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7404],{34822:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboards",function(){return r(61691)}])},12300:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var t=r(85893),i=r(79172),o=r(83321),a=r(67294),l=r(15861),s=r(95534),c=r(83461);var d=function(e){var n=e.api,r=e.headers,i=e.data,l=(0,a.useState)(!1),d=l[0],x=l[1];return(0,a.useEffect)((function(){(null===i||void 0===i?void 0:i.length)>0&&x(!0)}),[i,d]),(0,t.jsxs)(o.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",startIcon:(0,t.jsx)(s.Z,{fontSize:"small"}),onClick:function(){x(!1),n()},children:["\u062e\u0631\u0648\u062c\u06cc",d?(0,t.jsx)(c.CSVDownload,{data:i,headers:r,target:"_blank"}):null]})};var x=function(e){var n=e.toggle,r=e.data,a=e.headers,s=e.api,c=e.name,x=e.noAdd,u=e.children,h=e.noExport,p=e.withTitle;return(0,t.jsxs)(i.Z,{sx:{p:5,pb:0,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,t.jsxs)(i.Z,{children:[!h&&(0,t.jsx)(d,{api:s,headers:a,data:r}),p&&(0,t.jsx)(l.Z,{variant:"h6",children:c})]}),(0,t.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:2},children:[u,!x&&(0,t.jsxs)(o.Z,{sx:{mb:2},onClick:n,variant:"contained",children:["\u0627\u0641\u0632\u0648\u062f\u0646 ",c]})]})]})}},46893:function(e,n,r){"use strict";var t=r(85893),i=r(67294),o=r(11888),a=r(4718),l=r(50853);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){s(e,n,r[n])}))}return e}n.Z=function(e){var n=e.data,r=e.columns,d=e.sortModel,x=e.setSortModel,u=e.selfFilter,h=e.noFilter,p=e.pageSizeDefault,f=(0,i.useState)(p||10),m=f[0],j=f[1],g=(0,i.useState)(0),v=g[0],Z=g[1],b=(0,i.useState)({}),y=b[0],_=b[1],w=(0,i.useCallback)((function(e){var n,r;(_(e),0!==Object.keys(e).length&&void 0!==(null===(n=e.items[0])||void 0===n?void 0:n.value))?x(c({},d,{search:s({},e.items[0].columnField.split(" ")[1],null===(r=e.items[0])||void 0===r?void 0:r.value)})):x(c({},d,{search:""}))}),[y,_]);return(0,t.jsx)(o._,{autoHeight:!0,pagination:!0,rows:n,columns:r,pageSize:m,disableSelectionOnClick:!0,rowsPerPageOptions:[m],sx:{"& .MuiDataGrid-columnHeaders":{borderRadius:0}},paginationMode:!u&&"server",onPageSizeChange:function(e){j(e),x(c({},d,{page_size:e}))},localeText:a.T.components.MuiDataGrid.defaultProps.localeText,disableColumnSelector:!0,sortingMode:!u&&"server",onSortModelChange:function(e){var n,r,t=0!==e.length?"".concat(null===(n=e[0])||void 0===n?void 0:n.field," ").concat(null===(r=e[0])||void 0===r?void 0:r.sort):"1 asc";x(c({},d,{sort_by:"".concat(t)}))},onPageChange:function(e){Z(e),x(c({},d,{page:e+1}))},page:v,rowCount:50,onFilterModelChange:w,components:!h&&{Toolbar:l.M}})}},61691:function(e,n,r){"use strict";r.r(n),r.d(n,{GridContainer:function(){return j}});var t=r(85893),i=r(86886),o=r(67294),a=r(74931),l=r(66242),s=r(78445),c=r(44267),d=r(15861),x=r(79172),u=r(46893),h=r(11496),p=r(55113),f=r(34887),m=r(12300),j=(0,h.ZP)(p.Z)({".MuiTablePagination-displayedRows":{display:"none"}});function g(){var e=(0,o.useState)({most_destination:[],most_orders:[],numbers:{collect_count:0,collect_price:0,order_count:0,order_price:0,pas_keraye_count:0,pas_keraye_price:0,pish_keraye_count:0,pish_keraye_price:0}}),n=e[0],r=e[1];(0,o.useEffect)((function(){(0,f.fetchData)().then((function(e){null===e.data.dashboard?r([]):r(e.data.dashboard)})).catch((function(e){var n,r,t=(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a";a.ZP.error(t)}))}),[]);var h=[{flex:.1,minWidth:50,field:"id",headerName:"\u0631\u062f\u06cc\u0641",hideable:!1,renderCell:function(e){var n=e.row;return(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(d.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.id})})})}},{flex:.1,minWidth:50,field:"city",headerName:"\u0634\u0647\u0631",hideable:!1,renderCell:function(e){var n=e.row;return(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(d.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.city})})})}},{flex:.1,minWidth:50,field:"counter",headerName:"\u062a\u0639\u062f\u0627\u062f \u0633\u0641\u0627\u0631\u0634",hideable:!1,renderCell:function(e){var n=e.row;return(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(d.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.counter})})})}}],p=[{flex:.1,minWidth:50,field:"id",headerName:"\u0631\u062f\u06cc\u0641",hideable:!1,renderCell:function(e){var n=e.row;return(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(d.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.id})})})}},{flex:.1,minWidth:50,field:"person_name",headerName:"\u0646\u0627\u0645 \u0645\u0634\u062a\u0631\u06cc",hideable:!1,renderCell:function(e){var n=e.row;return(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(d.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.person_name})})})}},{flex:.1,minWidth:50,field:"counter",headerName:"\u062a\u0639\u062f\u0627\u062f \u0633\u0641\u0627\u0631\u0634",hideable:!1,renderCell:function(e){var n=e.row;return(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(x.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(d.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.counter})})})}}];return(0,t.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(i.ZP,{item:!0,lg:3,xl:3,xs:6,children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{sx:{backgroundColor:"#666CFF",color:"white"},title:(0,t.jsx)(d.Z,{sx:{color:"white"},children:"\u0633\u0641\u0627\u0631\u0634"})}),(0,t.jsx)(c.Z,{children:(0,t.jsxs)(x.Z,{py:4,children:[(0,t.jsxs)(d.Z,{color:"primary",variant:"h6",children:[n.numbers.order_count," \u0633\u0641\u0627\u0631\u0634"]}),(0,t.jsx)("br",{}),(0,t.jsxs)(d.Z,{color:"primary",variant:"h6",children:[n.numbers.order_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," \u0631\u06cc\u0627\u0644"]})]})})]})}),(0,t.jsx)(i.ZP,{item:!0,lg:3,xl:3,xs:6,children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{sx:{backgroundColor:"green",color:"white"},title:(0,t.jsx)(d.Z,{sx:{color:"white"},children:"\u062c\u0645\u0639 \u0622\u0648\u0631\u06cc"})}),(0,t.jsx)(c.Z,{children:(0,t.jsxs)(x.Z,{py:4,children:[(0,t.jsxs)(d.Z,{color:"green",variant:"h6",children:[n.numbers.collect_count," \u0633\u0641\u0627\u0631\u0634"]}),(0,t.jsx)("br",{}),(0,t.jsxs)(d.Z,{color:"green",variant:"h6",children:[n.numbers.collect_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," \u0631\u06cc\u0627\u0644"]})]})})]})}),(0,t.jsx)(i.ZP,{item:!0,lg:3,xl:3,xs:6,children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{sx:{backgroundColor:"orange",color:"white"},title:(0,t.jsx)(d.Z,{sx:{color:"white"},children:"\u067e\u0633 \u06a9\u0631\u0627\u06cc\u0647"})}),(0,t.jsx)(c.Z,{children:(0,t.jsxs)(x.Z,{py:4,children:[(0,t.jsxs)(d.Z,{color:"orange",variant:"h6",children:[n.numbers.pas_keraye_count," \u0633\u0641\u0627\u0631\u0634"]}),(0,t.jsx)("br",{}),(0,t.jsxs)(d.Z,{color:"orange",variant:"h6",children:[n.numbers.pas_keraye_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," \u0631\u06cc\u0627\u0644"]})]})})]})}),(0,t.jsx)(i.ZP,{item:!0,lg:3,xl:3,xs:6,children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{sx:{backgroundColor:"red",color:"white"},title:(0,t.jsx)(d.Z,{sx:{color:"white"},children:"\u067e\u06cc\u0634 \u06a9\u0631\u0627\u06cc\u0647 "})}),(0,t.jsx)(c.Z,{children:(0,t.jsxs)(x.Z,{py:4,children:[(0,t.jsxs)(d.Z,{color:"red",variant:"h6",children:[n.numbers.pish_keraye_count," \u0633\u0641\u0627\u0631\u0634"]}),(0,t.jsx)("br",{}),(0,t.jsxs)(d.Z,{color:"red",variant:"h6",children:[n.numbers.pish_keraye_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," \u0631\u06cc\u0627\u0644"]})]})})]})}),(0,t.jsx)(i.ZP,{item:!0,lg:6,xl:6,xs:12,children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(m.Z,{name:"\u0628\u06cc\u0634\u062a\u0631\u06cc\u0646 \u0645\u0642\u0627\u0635\u062f",noAdd:!0,noExport:!0,withTitle:!0}),(0,t.jsx)(j,{sx:{mt:4},children:(0,t.jsx)(u.Z,{columns:h,data:n.most_destination,noFilter:!0,pageSizeDefault:100})})]})}),(0,t.jsx)(i.ZP,{item:!0,lg:6,xl:6,xs:12,children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(m.Z,{name:"\u0628\u06cc\u0634\u062a\u0631\u06cc\u0646 \u0633\u0641\u0627\u0631\u0634\u0627\u062a",noAdd:!0,noExport:!0,withTitle:!0}),(0,t.jsx)(j,{sx:{mt:4},children:(0,t.jsx)(u.Z,{columns:p,data:n.most_orders,noFilter:!0,pageSizeDefault:100})})]})})]})}g.acl={action:"read",subject:"every-page"},n.default=g},34887:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d},fetchData:function(){return c}});var t=r(34051),i=r.n(t),o=r(85893),a=r(5370),l=r(63543);function s(e,n,r,t,i,o,a){try{var l=e[o](a),s=l.value}catch(c){return void r(c)}l.done?n(s):Promise.resolve(s).then(t,i)}var c=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get(l.Z.dashboard,{},{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){s(o,t,i,a,l,"next",e)}function l(e){s(o,t,i,a,l,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();function d(){return(0,o.jsx)("div",{})}}},function(e){e.O(0,[778,6903,1703,9774,2888,179],(function(){return n=34822,e(e.s=n);var n}));var n=e.O();_N_E=n}]);