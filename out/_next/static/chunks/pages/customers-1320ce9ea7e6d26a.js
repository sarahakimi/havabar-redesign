(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6525],{95534:function(e,n,t){"use strict";var r;n.Z=void 0;var o=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z","ExportVariant");n.Z=o},84477:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customers",function(){return t(91500)}])},85216:function(e,n,t){"use strict";var r=t(85893),o=t(67294),a=t(54776),i=t(50657),l=t(67564),s=t(6514),c=t(31425),u=t(83321),f=t(37645),d=t(58951),p=t(48075);function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=o.forwardRef((function(e,n){return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){y(e,n,t[n])}))}return e}({direction:"up",ref:n},e))}));n.Z=function(e){var n=e.closeFunction,t=e.setOpen,o=e.open,a=e.company,y=function(){t(!1)};return(0,r.jsxs)(i.Z,{open:o,TransitionComponent:h,keepMounted:!0,onClose:y,"aria-describedby":"alert-dialog-slide-description",children:[(0,r.jsxs)(f.Z,{sx:{display:"flex",gap:2},children:[(0,r.jsx)(l.Z,{color:"warning",component:p.Z}),"\u062d\u0630\u0641 "]}),(0,r.jsx)(s.Z,{children:(0,r.jsxs)(d.Z,{id:"alert-dialog-slide-description",children:["\u0627\u06cc\u0627 \u0627\u0632 \u062d\u0630\u0641 ",a.name," \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f\u061f"]})}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(u.Z,{onClick:function(){t(!1),n(a)},children:"\u0628\u0644\u0647"}),(0,r.jsx)(u.Z,{onClick:y,children:"\u062e\u06cc\u0631"})]})]})}},40609:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(85893),o=t(67294),a=t(93946),i=t(46160),l=t(38333),s=t(22224),c=t(95898),u=t(3690),f=t(83296),d=t(85216);function p(e){var n=e.company,t=e.setSelectedCompany,p=e.toggleEditUserDrawer,y=e.toggleShowUserDrawer,h=e.selectedCompany,b=e.deleteFunction,v=(0,o.useState)(null),m=v[0],g=v[1],x=Boolean(m),j=(0,o.useState)(!1),w=j[0],k=j[1],_=function(){g(null)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{size:"small",onClick:function(e){g(e.currentTarget)},children:(0,r.jsx)(i.Z,{})}),(0,r.jsxs)(l.Z,{keepMounted:!0,anchorEl:m,open:x,onClose:_,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:[(0,r.jsxs)(s.Z,{onClick:function(){return t(n),y(),void _()},children:[(0,r.jsx)(c.Z,{fontSize:"small",sx:{mr:2}}),"\u0646\u0645\u0627\u06cc\u0634"]}),(0,r.jsxs)(s.Z,{onClick:function(){return t(n),p(),void _()},children:[(0,r.jsx)(u.Z,{fontSize:"small",sx:{mr:2}}),"\u0648\u06cc\u0631\u0627\u06cc\u0634"]}),(0,r.jsxs)(s.Z,{onClick:function(){return t(n),_(),void k(!0)},children:[(0,r.jsx)(f.Z,{fontSize:"small",sx:{mr:2}}),"\u062d\u0630\u0641"]})]}),(0,r.jsx)(d.Z,{open:w,setOpen:k,company:h,closeFunction:b})]})}},12300:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),o=t(79172),a=t(83321),i=t(67294),l=t(95534),s=t(83461);var c=function(e){var n=e.api,t=e.headers,o=e.data,c=(0,i.useState)(!1),u=c[0],f=c[1];return(0,i.useEffect)((function(){o.length&&f(!0)}),[o,u]),(0,r.jsxs)(a.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",startIcon:(0,r.jsx)(l.Z,{fontSize:"small"}),onClick:function(){f(!1),n()},children:["\u062e\u0631\u0648\u062c\u06cc",u?(0,r.jsx)(s.CSVDownload,{data:o,headers:t,target:"_blank"}):null]})};var u=function(e){var n=e.toggle,t=e.data,i=e.headers,l=e.api,s=e.name,u=e.noAdd;return(0,r.jsxs)(o.Z,{sx:{p:5,pb:0,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(c,{api:l,headers:i,data:t}),(0,r.jsx)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:!u&&(0,r.jsxs)(a.Z,{sx:{mb:2},onClick:n,variant:"contained",children:["\u0627\u0641\u0632\u0648\u062f\u0646 ",s]})})]})}},46893:function(e,n,t){"use strict";var r=t(85893),o=t(67294),a=t(86117),i=t(4718),l=t(50853);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}n.Z=function(e){var n=e.data,t=e.columns,s=e.sortModel,u=e.setSortModel,f=e.selfFilter,d=(0,o.useState)(10),p=d[0],y=d[1],h=(0,o.useState)(0),b=h[0],v=h[1],m=(0,o.useState)({}),g=m[0],x=m[1],j=(0,o.useCallback)((function(e){var n,t;(x(e),0!==Object.keys(e).length&&void 0!==(null===(n=e.items[0])||void 0===n?void 0:n.value))?u(c({},s,{search:"".concat(e.items[0].columnField,"|").concat(null===(t=e.items[0])||void 0===t?void 0:t.value)})):u(c({},s,{search:""}))}),[g,x]);return(0,r.jsx)(a._,{autoHeight:!0,pagination:!0,rows:n,columns:t,pageSize:p,disableSelectionOnClick:!0,rowsPerPageOptions:[10,25,50],sx:{"& .MuiDataGrid-columnHeaders":{borderRadius:0}},paginationMode:!f&&"server",onPageSizeChange:function(e){console.log(e),y(e),u(c({},s,{page_size:e}))},localeText:i.T.components.MuiDataGrid.defaultProps.localeText,disableColumnSelector:!0,sortingMode:!f&&"server",onSortModelChange:function(e){var n,t,r=0!==e.length?"".concat(null===(n=e[0])||void 0===n?void 0:n.field," ").concat(null===(t=e[0])||void 0===t?void 0:t.sort):"id desc";u(c({},s,{sort_by:"".concat(r)}))},onPageChange:function(e){v(e),u(c({},s,{page:e+1}))},page:b,rowCount:50,onFilterModelChange:j,components:{Toolbar:l.M}})}},91500:function(e,n,t){"use strict";t.r(n),t.d(n,{GridContainer:function(){return j}});var r=t(85893),o=t(67294),a=t(86886),i=t(66242),l=t(15861),s=t(79172),c=t(3512),u=t(11496),f=t(3067),d=t.n(f),p=t(55113),y=t(74931),h=t(46893),b=t(12300),v=t(40609),m=t(67194),g=t(76412);function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var j=(0,u.ZP)(p.Z)({flexGrow:1,".MuiDataGrid-root":{border:"none"},".MuiTablePagination-displayedRows":{display:"none"}});function w(){var e=(0,o.useState)({}),n=e[0],t=e[1],u=(0,o.useState)(!1),f=u[0],p=u[1],w=(0,o.useState)(!1),k=w[0],_=w[1],O=(0,o.useState)(!1),C=O[0],Z=O[1],S=(0,o.useState)({page:1,page_size:10,sort_by:"id desc",serach:""}),P=S[0],M=S[1],E=(0,o.useState)([]),D=E[0],F=E[1],T=(0,o.useState)(!1),A=T[0],U=T[1],I=(0,o.useState)([]),R=I[0],W=I[1],z=function(){return Z(!C)},V=function(){return p(!f)},N=function(){return _(!k)},H=function(e){y.ZP.promise((0,g.deleteUser)(e.id).then(U(!0)),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062d\u0630\u0641 \u0645\u0634\u062a\u0631\u06cc",success:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062d\u0630\u0641 \u0634\u062f",error:function(e){return e.response.data.message?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a"}})},L=(0,c.s)().filter((function(e){var n=e.value;return["contains"].includes(n)})),Y=[{flex:.1,minWidth:150,field:"name",filterOperators:L,headerName:"\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,r.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.name})})})}},{flex:.1,minWidth:150,field:"username",filterOperators:L,headerName:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,r.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.username})})})}},{flex:.1,field:"natural_code",minWidth:150,filterOperators:L,headerName:"\u06a9\u062f\u0645\u0644\u06cc",hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.natural_code})})}},{flex:.1,field:"phone",minWidth:150,filterOperators:L,headerName:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646",hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsxs)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:[n.area_code,n.tel_number]})})}},{flex:.1,field:"postal_code",minWidth:150,filterOperators:L,headerName:"\u06a9\u062f\u067e\u0633\u062a\u06cc",hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.postal_code})})}},{flex:.1,field:"city",minWidth:150,filterOperators:L,headerName:"\u0634\u0647\u0631",hideable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.city})})}},{flex:.1,minWidth:50,sortable:!1,hideable:!1,filterable:!1,field:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",headerName:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",renderCell:function(e){var o=e.row;return(0,r.jsx)(v.Z,{company:o,toggleShowUserDrawer:N,toggleEditUserDrawer:V,setSelectedCompany:t,setChange:U,selectedCompany:n,deleteFunction:H})}}];return(0,o.useEffect)((function(){W([]),(0,g.fetchData)(P).then((function(e){null===e.data?F([]):F(e.data),A&&U(!1)})).catch((function(e){var n,t,r=(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a";y.ZP.error(r)}))}),[P,W,A]),(0,r.jsxs)(a.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(a.ZP,{item:!0,xs:12,children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(b.Z,{toggle:z,data:R,api:function(){return y.ZP.promise((0,g.fetchData)(P).then((function(e){W(e.data.map((function(e){var n=e.off_percent_status?"\u0645\u06cc \u0628\u0627\u0634\u062f":"\u0646\u0645\u06cc \u0628\u0627\u0634\u062f",t=e.texes?"\u0645\u06cc \u0628\u0627\u0634\u062f":"\u0646\u0645\u06cc \u0628\u0627\u0634\u062f";return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}({},e,{created_at:d()(e.created_at,"YYYY/MM/DD").locale("fa").format("YYYY/MM/DD"),off_percent_status:n,texes:t})})))})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062f\u0627\u0646\u0644\u0648\u062f",success:"\u062f\u0627\u0646\u0644\u0648\u062f \u0627\u0646\u062c\u0627\u0645 \u0634\u062f",error:function(e){var n,t,r,o;return(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)?null===(r=e.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a.\u0627\u0632 \u062e\u0627\u0644\u06cc \u0646\u0628\u0648\u062f\u0646 \u0645\u0648\u0627\u0631\u062f \u062f\u0627\u0646\u0644\u0648\u062f \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f."}})},headers:[{key:"id",label:"\u0634\u0646\u0627\u0633\u0647"},{key:"name",label:"\u062a\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631"},{key:"username",label:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc"},{key:"phone",label:"\u0645\u0648\u0628\u0627\u06cc\u0644"},{key:"area_code",label:"\u067e\u06cc\u0634 \u0634\u0645\u0627\u0631\u0647"},{key:"tel_number",label:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646"},{key:"postal_code",label:"\u06a9\u062f\u067e\u0633\u062a\u06cc"},{key:"natural_code",label:"\u06a9\u062f\u0645\u0644\u06cc"},{key:"provence",label:"\u0627\u0633\u062a\u0627\u0646"},{key:"city",label:"\u0634\u0647\u0631"},{key:"main_street",label:"\u062e\u06cc\u0627\u0628\u0627\u0646 \u0627\u0635\u0644\u06cc"},{key:"side_street",label:"\u062e\u06cc\u0627\u0628\u0627\u0646 \u0641\u0631\u0639\u06cc"},{key:"alley",label:"\u06a9\u0648\u0686\u0647"},{key:"floor",label:"\u0637\u0628\u0642\u0647"},{key:"home_unit",label:"\u0648\u0627\u062d\u062f"},{key:"address",label:"\u0627\u062f\u0631\u0633"},{key:"created_at",label:"\u062a\u0627\u0631\u06cc\u062e \u0627\u06cc\u062c\u0627\u062f"},{key:"other_information",label:"\u0633\u0627\u06cc\u0631 \u0627\u0637\u0644\u0627\u0639\u0627\u062a"},{key:"texes",label:"\u0634\u0627\u0645\u0644 \u0645\u0627\u0644\u06cc\u0627\u062a"},{key:"off_percent_status",label:"\u0634\u0627\u0645\u0644 \u062a\u062e\u0641\u06cc\u0641"},{key:"off_percent",label:"\u062f\u0631\u0635\u062f \u062a\u062e\u0641\u06cc\u0641"},{key:"company",label:"\u0634\u0631\u06a9\u062a"},{key:"header_code",label:"\u06a9\u062f \u0633\u0631\u0641\u0635\u0644"},{key:"level_code",label:"\u06a9\u062f \u0633\u0637\u062d"},{key:"money",label:"\u0627\u0639\u062a\u0628\u0627\u0631"}],name:"\u0645\u0634\u062a\u0631\u06cc"}),(0,r.jsx)(j,{sx:{p:4,m:1},children:(0,r.jsx)(h.Z,{columns:Y,data:D,sortModel:P,setSortModel:M})})]})}),C&&(0,r.jsx)(m.default,{open:C,toggle:z,setChange:U,edit:!1,company:null,showUser:!1}),f&&(0,r.jsx)(m.default,{open:f,toggle:V,setChange:U,user:n,edit:!0,showUser:!1}),k&&(0,r.jsx)(m.default,{open:k,toggle:N,setChange:U,edit:!0,user:n,showUser:!0})]})}w.acl={action:"read",subject:"every-page"},n.default=w},83461:function(e,n,t){e.exports=t(5090)},89469:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(67294),i=(r=a)&&r.__esModule?r:{default:r},l=t(99182),s=t(69695);var c=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={},t}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"buildURI",value:function(){return l.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,n=e.data,t=e.headers,r=e.separator,o=e.enclosingCharacter,a=e.uFEFF,i=e.target,l=e.specs,s=e.replace;this.state.page=window.open(this.buildURI(n,a,t,r,o),i,l,s)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),n}(i.default.Component);c.defaultProps=Object.assign(s.defaultProps,{target:"_blank"}),c.propTypes=s.propTypes,n.default=c},26425:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=t(67294),l=(r=i)&&r.__esModule?r:{default:r},s=t(99182),c=t(69695);var u=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.buildURI=t.buildURI.bind(t),t}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),a(n,[{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,r=t.data,o=t.headers,a=t.separator,i=t.filename,l=t.enclosingCharacter,c=t.uFEFF,u=n&&"function"===typeof r?r():r,f=new Blob([c?"\ufeff":"",(0,s.toCSV)(u,o,a,l)]);return window.navigator.msSaveBlob(f,i),!1}}},{key:"handleAsyncClick",value:function(e){var n=this;this.props.onClick(e,(function(t){!1!==t?n.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(n){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(n):e.handleSyncClick(n);e.handleLegacy(n)}}},{key:"render",value:function(){var e=this,n=this.props,t=n.data,r=n.headers,a=n.separator,i=n.filename,s=n.uFEFF,c=n.children,u=(n.onClick,n.asyncOnClick,n.enclosingCharacter),f=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(n,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),d="undefined"===typeof window?"":this.buildURI(t,s,r,a,u);return l.default.createElement("a",o({download:i},f,{ref:function(n){return e.link=n},target:"_self",href:d,onClick:this.handleClick()}),c)}}]),n}(l.default.Component);u.defaultProps=c.defaultProps,u.propTypes=c.propTypes,n.default=u},99182:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var o=n.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},a=n.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":t(e))&&!(e instanceof Array)}))},i=n.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},l=n.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,n){return new Set([].concat(r(e),r(n)))}),[]))},s=n.jsons2arrays=function(e,n){var t=n=n||l(e),o=n;a(n)&&(t=n.map((function(e){return e.label})),o=n.map((function(e){return e.key})));var i=e.map((function(e){return o.map((function(n){return c(n,e)}))}));return[t].concat(r(i))},c=n.getHeaderValue=function(e,n){var t=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,n,t,r){var o=e[n];if(void 0!==o&&null!==o)return o;r.splice(1)}),n);return void 0===t?e in n?n[e]:"":t},u=n.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},f=n.joiner=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return u(e)})).map((function(e){return""+t+e+t})).join(n)})).join("\n")},d=n.arrays2csv=function(e,n,t,o){return f(n?[n].concat(r(e)):e,t,o)},p=n.jsons2csv=function(e,n,t,r){return f(s(e,n),t,r)},y=n.string2csv=function(e,n,t,r){return n?n.join(t)+"\n"+e:e.replace(/"/g,'""')},h=n.toCSV=function(e,n,t,r){if(a(e))return p(e,n,t,r);if(i(e))return d(e,n,t,r);if("string"===typeof e)return y(e,n,t);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};n.buildURI=function(e,n,t,r,a){var i=h(e,t,r,a),l=o()?"application/csv":"text/csv",s=new Blob([n?"\ufeff":"",i],{type:l}),c="data:"+l+";charset=utf-8,"+(n?"\ufeff":"")+i,u=window.URL||window.webkitURL;return"undefined"===typeof u.createObjectURL?c:u.createObjectURL(s)}},5090:function(e,n,t){"use strict";n.CSVDownload=void 0;var r=a(t(89469)),o=a(t(26425));function a(e){return e&&e.__esModule?e:{default:e}}n.CSVDownload=r.default,o.default},69695:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.PropsNotForwarded=n.defaultProps=n.propTypes=void 0;var r,o=t(67294),a=((r=o)&&r.__esModule,t(45697));n.propTypes={data:(0,a.oneOfType)([a.string,a.array,a.func]).isRequired,headers:a.array,target:a.string,separator:a.string,filename:a.string,uFEFF:a.bool,onClick:a.func,asyncOnClick:a.bool,enclosingCharacter:a.string},n.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},n.PropsNotForwarded=["data","headers"]}},function(e){e.O(0,[4885,3978,3438,7438,5621,6786,7194,9774,2888,179],(function(){return n=84477,e(e.s=n);var n}));var n=e.O();_N_E=n}]);