(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3853],{66242:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(87462),o=n(63366),a=n(67294),i=n(93680),s=n(27192),l=n(11496),u=n(71657),c=n(55113),f=n(28979);function d(e){return(0,f.Z)("MuiCard",e)}(0,n(76087).Z)("MuiCard",["root"]);var p=n(85893);const y=["className","raised"],h=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var v=a.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCard"}),{className:a,raised:l=!1}=n,c=(0,o.Z)(n,y),f=(0,r.Z)({},n,{raised:l}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},d,t)})(f);return(0,p.jsx)(h,(0,r.Z)({className:(0,i.Z)(v.root,a),elevation:l?8:void 0,ref:t,ownerState:f},c))}))},95534:function(e,t,n){"use strict";var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z","ExportVariant");t.Z=o},37927:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculate-price/regionalTable",function(){return n(7981)}])},7981:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),a=n(74931),i=n(3512),s=n(79172),l=n(15861),u=n(86886),c=n(66242),f=n(40609),d=n(12300),p=n(46893),y=n(20792),h=n(20058),v=n(64023);t.default=function(e){var t=e.data,n=e.setChange,b=(0,o.useState)({}),g=b[0],m=b[1],x=(0,o.useState)(!1),w=x[0],_=x[1],j=(0,o.useState)(!1),C=j[0],O=j[1],k=(0,o.useState)(!1),Z=k[0],P=k[1],S=(0,o.useState)({page:1,page_size:100,sort_by:"1 asc"}),E=S[0],F=S[1],A=function(){return P(!Z)},R=function(){return _(!w)},D=function(){return O(!C)},M=function(e){a.ZP.promise((0,v.deleteRegional)(e.id).then(n(!0)),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062d\u0630\u0641 \u0642\u06cc\u0645\u062a \u0645\u0646\u0637\u0642\u0647 \u0627\u06cc",success:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062d\u0630\u0641 \u0634\u062f",error:function(e){return(null===e||void 0===e?void 0:e.response.data.message)?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a"}})},U=(0,i.s)().filter((function(e){var t=e.value;return["contains"].includes(t)})),I=[{flex:.1,minWidth:50,field:"origin_state",headerName:"\u0627\u0633\u062a\u0627\u0646 \u0645\u0628\u062f\u0627",filterOperators:U,hideable:!1,sortable:!1,renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,r.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:t.origin_state})})})}},{flex:.1,minWidth:50,field:"origin_city",headerName:"\u0634\u0647\u0631 \u0645\u0628\u062f\u0627",filterOperators:U,hideable:!1,sortable:!1,renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,r.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:t.origin_city})})})}},{flex:.1,minWidth:50,field:"destination_state",headerName:"\u0627\u0633\u062a\u0627\u0646 \u0645\u0642\u0635\u062f",filterOperators:U,hideable:!1,sortable:!1,renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,r.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:t.destination_state})})})}},{flex:.1,minWidth:50,field:"destination_city",headerName:"\u0634\u0647\u0631 \u0645\u0642\u0635\u062f",filterOperators:U,hideable:!1,sortable:!1,renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,r.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:t.destination_city})})})}},{flex:.1,minWidth:50,sortable:!1,hideable:!1,filterable:!1,field:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",headerName:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",renderCell:function(e){var t=e.row;return(0,r.jsx)(f.Z,{company:t,toggleShowUserDrawer:D,toggleEditUserDrawer:R,setSelectedCompany:m,setChange:n,selectedCompany:g,deleteFunction:M,noEdit:!0})}}];return(0,r.jsxs)(u.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(u.ZP,{item:!0,xs:12,children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{toggle:A,name:"\u0642\u06cc\u0645\u062a \u0645\u0646\u0637\u0642\u0647 \u0627\u06cc",noExport:!0,withTitle:!0}),(0,r.jsx)(y.GridContainer,{sx:{p:4,m:1},children:(0,r.jsx)(p.Z,{columns:I,data:t,sortModel:E,setSortModel:F,noFilter:!0,pageSizeDefault:100})})]})}),Z&&(0,r.jsx)(h.default,{open:Z,toggle:A,setChange:n,edit:!1,company:null,showUser:!1}),w&&(0,r.jsx)(h.default,{open:w,toggle:R,setChange:n,user:g,edit:!0,showUser:!1}),C&&(0,r.jsx)(h.default,{open:C,toggle:D,setChange:n,edit:!0,user:g,showUser:!0})]})}},83461:function(e,t,n){e.exports=n(5090)},89469:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(67294),i=(r=a)&&r.__esModule?r:{default:r},s=n(99182),l=n(69695);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,o=e.enclosingCharacter,a=e.uFEFF,i=e.target,s=e.specs,l=e.replace;this.state.page=window.open(this.buildURI(t,a,n,r,o),i,s,l)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(i.default.Component);u.defaultProps=Object.assign(l.defaultProps,{target:"_blank"}),u.propTypes=l.propTypes,t.default=u},26425:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(67294),s=(r=i)&&r.__esModule?r:{default:r},l=n(99182),u=n(69695);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return l.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,r=n.data,o=n.headers,a=n.separator,i=n.filename,s=n.enclosingCharacter,u=n.uFEFF,c=t&&"function"===typeof r?r():r,f=new Blob([u?"\ufeff":"",(0,l.toCSV)(c,o,a,s)]);return window.navigator.msSaveBlob(f,i),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,a=t.separator,i=t.filename,l=t.uFEFF,u=t.children,c=(t.onClick,t.asyncOnClick,t.enclosingCharacter),f=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),d="undefined"===typeof window?"":this.buildURI(n,l,r,a,c);return s.default.createElement("a",o({download:i},f,{ref:function(t){return e.link=t},target:"_self",href:d,onClick:this.handleClick()}),u)}}]),t}(s.default.Component);c.defaultProps=u.defaultProps,c.propTypes=u.propTypes,t.default=c},99182:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},a=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},i=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},s=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(r(e),r(t)))}),[]))},l=t.jsons2arrays=function(e,t){var n=t=t||s(e),o=t;a(t)&&(n=t.map((function(e){return e.label})),o=t.map((function(e){return e.key})));var i=e.map((function(e){return o.map((function(t){return u(t,e)}))}));return[n].concat(r(i))},u=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,r){var o=e[t];if(void 0!==o&&null!==o)return o;r.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},c=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},f=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return c(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},d=t.arrays2csv=function(e,t,n,o){return f(t?[t].concat(r(e)):e,n,o)},p=t.jsons2csv=function(e,t,n,r){return f(l(e,t),n,r)},y=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},h=t.toCSV=function(e,t,n,r){if(a(e))return p(e,t,n,r);if(i(e))return d(e,t,n,r);if("string"===typeof e)return y(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,a){var i=h(e,n,r,a),s=o()?"application/csv":"text/csv",l=new Blob([t?"\ufeff":"",i],{type:s}),u="data:"+s+";charset=utf-8,"+(t?"\ufeff":"")+i,c=window.URL||window.webkitURL;return"undefined"===typeof c.createObjectURL?u:c.createObjectURL(l)}},5090:function(e,t,n){"use strict";t.CSVDownload=void 0;var r=a(n(89469)),o=a(n(26425));function a(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=r.default,o.default},69695:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,o=n(67294),a=((r=o)&&r.__esModule,n(45697));t.propTypes={data:(0,a.oneOfType)([a.string,a.array,a.func]).isRequired,headers:a.array,target:a.string,separator:a.string,filename:a.string,uFEFF:a.bool,onClick:a.func,asyncOnClick:a.bool,enclosingCharacter:a.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]}},function(e){e.O(0,[3978,778,3116,7438,6786,3664,792,58,9774,2888,179],(function(){return t=37927,e(e.s=t);var t}));var t=e.O();_N_E=t}]);