(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2858],{66242:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(87462),o=t(63366),a=t(67294),i=t(93680),s=t(27192),c=t(11496),l=t(71657),u=t(55113),d=t(28979);function f(e){return(0,d.Z)("MuiCard",e)}(0,t(76087).Z)("MuiCard",["root"]);var v=t(85893);const p=["className","raised"],m=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"})));var h=a.forwardRef((function(e,n){const t=(0,l.Z)({props:e,name:"MuiCard"}),{className:a,raised:c=!1}=t,u=(0,o.Z)(t,p),d=(0,r.Z)({},t,{raised:c}),h=(e=>{const{classes:n}=e;return(0,s.Z)({root:["root"]},f,n)})(d);return(0,v.jsx)(m,(0,r.Z)({className:(0,i.Z)(h.root,a),elevation:c?8:void 0,ref:n,ownerState:d},u))}))},54827:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/couriers",function(){return t(79239)}])},79239:function(e,n,t){"use strict";t.r(n),t.d(n,{GridContainer:function(){return y}});var r=t(34051),o=t.n(r),a=t(85893),i=t(67294),s=t(86886),c=t(66242),l=t(15861),u=t(79172),d=t(3512),f=t(1031),v=t(4718),p=t(50853),m=t(11496),h=t(55113),x=t(5370),g=t(74931);function b(e,n,t,r,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,o)}function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Z(e,n,t[n])}))}return e}var y=(0,m.ZP)(h.Z)({flexGrow:1,".MuiDataGrid-root":{border:"none"},".MuiTablePagination-displayedRows":{display:"none"}});function P(){var e=(0,i.useState)(10),n=e[0],t=e[1],r=(0,i.useState)({page:1,page_size:10,sort_by:"1 asc"}),m=r[0],h=r[1],Z=(0,i.useState)([]),P=Z[0],j=Z[1],_=(0,i.useState)(!0),C=_[0],S=_[1],O=[{flex:.1,minWidth:50,field:"1",headerName:"\u0648\u0636\u0639\u06cc\u062a",filterable:!1,hideable:!1,renderCell:function(e){var n=e.row;return(0,a.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,a.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,a.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.id})})})}},{flex:.1,minWidth:50,field:"2",headerName:"\u0646\u0627\u0645 \u06a9\u0648\u0631\u06cc\u0631",filterOperators:(0,d.s)().filter((function(e){var n=e.value;return["contains"].includes(n)})),hideable:!1,renderCell:function(e){var n=e.row;return(0,a.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,a.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,a.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.name})})})}}],M={asc:1,desc:0};(0,i.useEffect)((function(){var e=g.ZP.loading("\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a"),n=m.sort_by.split(" ");n[1]=M[n[1]],x.Z.post("companies/".concat(m.page,"/").concat(Number(n.join("")),"/"),{},{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then(function(){var n,t=(n=o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null===t.data.courier?j([]):j(t.data.courier),S(!1),g.ZP.dismiss(e),g.ZP.success("\u0627\u0646\u062c\u0627\u0645 \u0634\u062f");case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function i(e){b(a,r,o,i,s,"next",e)}function s(e){b(a,r,o,i,s,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()).catch((function(e){var n,t,r,o,a=(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)?null===e||void 0===e||null===(r=e.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a";g.ZP.error(a)}))}),[m,C]);var N=(0,i.useState)(0),k=N[0],D=N[1],T=(0,i.useState)({}),E=T[0],z=T[1],G=(0,i.useCallback)((function(e){var n,t;(z(e),0!==Object.keys(e).length&&void 0!==(null===(n=e.items[0])||void 0===n?void 0:n.value))?h(w({},m,{search:"".concat(e.items[0].columnField,"|").concat(null===(t=e.items[0])||void 0===t?void 0:t.value)})):h(w({},m,{search:""}))}),[E,z]);return(0,a.jsx)(s.ZP,{container:!0,spacing:6,children:(0,a.jsx)(s.ZP,{item:!0,xs:12,children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(y,{sx:{p:4,m:1},children:(0,a.jsx)(f._,{autoHeight:!0,pagination:!0,rows:P,columns:O,pageSize:n,disableSelectionOnClick:!0,rowsPerPageOptions:[10],disableColumnFilter:!0,sx:{"& .MuiDataGrid-columnHeaders":{borderRadius:0}},paginationMode:"server",onPageSizeChange:function(e){t(e),h(w({},m,{page_size:e}))},localeText:v.T.components.MuiDataGrid.defaultProps.localeText,disableColumnSelector:!0,sortingMode:"server",onSortModelChange:function(e){var n,t,r=0!==e.length?"".concat(null===(n=e[0])||void 0===n?void 0:n.field," ").concat(null===(t=e[0])||void 0===t?void 0:t.sort):"id desc";h(w({},m,{sort_by:"".concat(r)}))},onPageChange:function(e){D(e),h(w({},m,{page:e+1}))},page:k,rowCount:50,onFilterModelChange:G,components:{Toolbar:p.M}})})})})})}P.acl={action:"read",subject:"every-page"},n.default=P}},function(e){e.O(0,[778,3116,9774,2888,179],(function(){return n=54827,e(e.s=n);var n}));var n=e.O();_N_E=n}]);