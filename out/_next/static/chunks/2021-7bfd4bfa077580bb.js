(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2021,585],{69368:function(e,t,o){"use strict";o.d(t,{Z:function(){return x}});var r=o(63366),n=o(87462),a=o(67294),l=o(27192),c=o(41796),i=o(21964),d=o(82066),s=o(85893),u=(0,d.Z)((0,s.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,d.Z)((0,s.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,d.Z)((0,s.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=o(98216),Z=o(71657),b=o(11496),C=o(28979);function h(e){return(0,C.Z)("MuiCheckbox",e)}var v=(0,o(76087).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const L=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],w=(0,b.ZP)(i.Z,{shouldForwardProp:e=>(0,b.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,"default"!==o.color&&t[`color${(0,m.Z)(o.color)}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({color:e.palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:(0,c.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${v.checked}, &.${v.indeterminate}`]:{color:e.palette[t.color].main},[`&.${v.disabled}`]:{color:e.palette.action.disabled}}))),g=(0,s.jsx)(p,{}),M=(0,s.jsx)(u,{}),k=(0,s.jsx)(f,{});var x=a.forwardRef((function(e,t){var o,c;const i=(0,Z.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=g,color:u="primary",icon:p=M,indeterminate:f=!1,indeterminateIcon:b=k,inputProps:C,size:v="medium"}=i,x=(0,r.Z)(i,L),y=f?b:p,H=f?b:d,P=(0,n.Z)({},i,{color:u,indeterminate:f,size:v}),R=(e=>{const{classes:t,indeterminate:o,color:r}=e,a={root:["root",o&&"indeterminate",`color${(0,m.Z)(r)}`]},c=(0,l.Z)(a,h,t);return(0,n.Z)({},t,c)})(P);return(0,s.jsx)(w,(0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":f},C),icon:a.cloneElement(y,{fontSize:null!=(o=y.props.fontSize)?o:v}),checkedIcon:a.cloneElement(H,{fontSize:null!=(c=H.props.fontSize)?c:v}),ownerState:P,ref:t},x,{classes:R}))}))},50480:function(e,t,o){"use strict";o.d(t,{Z:function(){return L}});var r=o(63366),n=o(87462),a=o(67294),l=o(93680),c=o(27192),i=o(74423),d=o(15861),s=o(98216),u=o(11496),p=o(71657),f=o(28979);function m(e){return(0,f.Z)("MuiFormControlLabel",e)}var Z=(0,o(76087).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),b=o(15704),C=o(85893);const h=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],v=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${Z.label}`]:t.label},t.root,t[`labelPlacement${(0,s.Z)(o.labelPlacement)}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Z.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${Z.label}`]:{[`&.${Z.disabled}`]:{color:e.palette.text.disabled}}})));var L=a.forwardRef((function(e,t){const o=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),{className:u,componentsProps:f={},control:Z,disabled:L,disableTypography:w,label:g,labelPlacement:M="end"}=o,k=(0,r.Z)(o,h),x=(0,i.Z)();let y=L;"undefined"===typeof y&&"undefined"!==typeof Z.props.disabled&&(y=Z.props.disabled),"undefined"===typeof y&&x&&(y=x.disabled);const H={disabled:y};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof Z.props[e]&&"undefined"!==typeof o[e]&&(H[e]=o[e])}));const P=(0,b.Z)({props:o,muiFormControl:x,states:["error"]}),R=(0,n.Z)({},o,{disabled:y,labelPlacement:M,error:P.error}),S=(e=>{const{classes:t,disabled:o,labelPlacement:r,error:n}=e,a={root:["root",o&&"disabled",`labelPlacement${(0,s.Z)(r)}`,n&&"error"],label:["label",o&&"disabled"]};return(0,c.Z)(a,m,t)})(R);let V=g;return null==V||V.type===d.Z||w||(V=(0,C.jsx)(d.Z,(0,n.Z)({component:"span",className:S.label},f.typography,{children:V}))),(0,C.jsxs)(v,(0,n.Z)({className:(0,l.Z)(S.root,u),ownerState:R,ref:t},k,{children:[a.cloneElement(Z,H),V]}))}))},53457:function(e,t,o){"use strict";o.d(t,{Z:function(){return C}});var r=o(63366),n=o(87462),a=o(67294),l=o(93680),c=o(27192),i=o(11496),d=o(71657),s=o(28979);function u(e){return(0,s.Z)("MuiFormGroup",e)}(0,o(76087).Z)("MuiFormGroup",["root","row","error"]);var p=o(74423),f=o(15704),m=o(85893);const Z=["className","row"],b=(0,i.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.row&&t.row]}})((({ownerState:e})=>(0,n.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var C=a.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiFormGroup"}),{className:a,row:i=!1}=o,s=(0,r.Z)(o,Z),C=(0,p.Z)(),h=(0,f.Z)({props:o,muiFormControl:C,states:["error"]}),v=(0,n.Z)({},o,{row:i,error:h.error}),L=(e=>{const{classes:t,row:o,error:r}=e,n={root:["root",o&&"row",r&&"error"]};return(0,c.Z)(n,u,t)})(v);return(0,m.jsx)(b,(0,n.Z)({className:(0,l.Z)(L.root,a),ownerState:v,ref:t},s))}))},21964:function(e,t,o){"use strict";o.d(t,{Z:function(){return v}});var r=o(63366),n=o(87462),a=o(67294),l=o(93680),c=o(27192),i=o(98216),d=o(11496),s=o(49299),u=o(74423),p=o(49990),f=o(28979);function m(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,o(76087).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=o(85893);const b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],C=(0,d.ZP)(p.Z)((({ownerState:e})=>(0,n.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),h=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var v=a.forwardRef((function(e,t){const{autoFocus:o,checked:a,checkedIcon:d,className:p,defaultChecked:f,disabled:v,disableFocusRipple:L=!1,edge:w=!1,icon:g,id:M,inputProps:k,inputRef:x,name:y,onBlur:H,onChange:P,onFocus:R,readOnly:S,required:V,tabIndex:F,type:_,value:z}=e,B=(0,r.Z)(e,b),[N,I]=(0,s.Z)({controlled:a,default:Boolean(f),name:"SwitchBase",state:"checked"}),A=(0,u.Z)();let j=v;A&&"undefined"===typeof j&&(j=A.disabled);const $="checkbox"===_||"radio"===_,E=(0,n.Z)({},e,{checked:N,disabled:j,disableFocusRipple:L,edge:w}),O=(e=>{const{classes:t,checked:o,disabled:r,edge:n}=e,a={root:["root",o&&"checked",r&&"disabled",n&&`edge${(0,i.Z)(n)}`],input:["input"]};return(0,c.Z)(a,m,t)})(E);return(0,Z.jsxs)(C,(0,n.Z)({component:"span",className:(0,l.Z)(O.root,p),centerRipple:!0,focusRipple:!L,disabled:j,tabIndex:null,role:void 0,onFocus:e=>{R&&R(e),A&&A.onFocus&&A.onFocus(e)},onBlur:e=>{H&&H(e),A&&A.onBlur&&A.onBlur(e)},ownerState:E,ref:t},B,{children:[(0,Z.jsx)(h,(0,n.Z)({autoFocus:o,checked:a,defaultChecked:f,className:O.input,disabled:j,id:$&&M,name:y,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;I(t),P&&P(e,t)},readOnly:S,ref:x,required:V,ownerState:E,tabIndex:F,type:_},"checkbox"===_&&void 0===z?{}:{value:z},k)),N?d:g]}))}))},66485:function(e){function t(){return new DOMException("The request is not allowed","NotAllowedError")}e.exports=async function(e){try{await async function(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}(e)}catch(o){try{await async function(e){const o=document.createElement("span");o.textContent=e,o.style.whiteSpace="pre",o.style.webkitUserSelect="auto",o.style.userSelect="all",document.body.appendChild(o);const r=window.getSelection(),n=window.document.createRange();r.removeAllRanges(),n.selectNode(o),r.addRange(n);let a=!1;try{a=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(o)}if(!a)throw t()}(e)}catch(r){throw r||o||t()}}}},63635:function(e,t,o){"use strict";var r;t.Z=void 0;var n=(0,((r=o(65129))&&r.__esModule?r:{default:r}).default)("M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z","CheckboxBlankOutline");t.Z=n},4013:function(e,t,o){"use strict";var r;t.Z=void 0;var n=(0,((r=o(65129))&&r.__esModule?r:{default:r}).default)("M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z","CheckboxMarked");t.Z=n},99770:function(e,t,o){"use strict";var r;t.Z=void 0;var n=(0,((r=o(65129))&&r.__esModule?r:{default:r}).default)("M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z","CodeTags");t.Z=n},90738:function(e,t,o){"use strict";var r;t.Z=void 0;var n=(0,((r=o(65129))&&r.__esModule?r:{default:r}).default)("M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z","ContentCopy");t.Z=n},93365:function(e,t,o){"use strict";var r;t.Z=void 0;var n=(0,((r=o(65129))&&r.__esModule?r:{default:r}).default)("M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z","Heart");t.Z=n},31056:function(e,t,o){"use strict";var r;t.Z=void 0;var n=(0,((r=o(65129))&&r.__esModule?r:{default:r}).default)("M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z","HeartOutline");t.Z=n},53917:function(e,t,o){"use strict";var r;t.Z=void 0;var n=(0,((r=o(65129))&&r.__esModule?r:{default:r}).default)("M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z","LanguageJavascript");t.Z=n},93031:function(e,t,o){"use strict";var r;t.Z=void 0;var n=(0,((r=o(65129))&&r.__esModule?r:{default:r}).default)("M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z","LanguageTypescript");t.Z=n},91910:function(e,t,o){"use strict";var r;t.Z=void 0;var n=(0,((r=o(65129))&&r.__esModule?r:{default:r}).default)("M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z","Star");t.Z=n}}]);