(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3331],{53457:function(e,o,n){"use strict";n.d(o,{Z:function(){return f}});var r=n(63366),a=n(87462),l=n(67294),t=n(93680),i=n(27192),s=n(11496),d=n(71657),c=n(28979);function u(e){return(0,c.Z)("MuiFormGroup",e)}(0,n(76087).Z)("MuiFormGroup",["root","row","error"]);var m=n(74423),p=n(15704),h=n(85893);const x=["className","row"],b=(0,s.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.row&&o.row]}})((({ownerState:e})=>(0,a.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var f=l.forwardRef((function(e,o){const n=(0,d.Z)({props:e,name:"MuiFormGroup"}),{className:l,row:s=!1}=n,c=(0,r.Z)(n,x),f=(0,m.Z)(),j=(0,p.Z)({props:n,muiFormControl:f,states:["error"]}),g=(0,a.Z)({},n,{row:s,error:j.error}),v=(e=>{const{classes:o,row:n,error:r}=e,a={root:["root",n&&"row",r&&"error"]};return(0,i.Z)(a,u,o)})(g);return(0,h.jsx)(b,(0,a.Z)({className:(0,t.Z)(v.root,l),ownerState:g,ref:o},c))}))},68061:function(e,o,n){"use strict";var r=n(87462),a=n(63366),l=n(67294),t=n(53457),i=n(51705),s=n(49299),d=n(80209),c=n(27909),u=n(85893);const m=["actions","children","defaultValue","name","onChange","value"],p=l.forwardRef((function(e,o){const{actions:n,children:p,defaultValue:h,name:x,onChange:b,value:f}=e,j=(0,a.Z)(e,m),g=l.useRef(null),[v,C]=(0,s.Z)({controlled:f,default:h,name:"RadioGroup"});l.useImperativeHandle(n,(()=>({focus:()=>{let e=g.current.querySelector("input:not(:disabled):checked");e||(e=g.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const Z=(0,i.Z)(o,g),R=(0,c.Z)(x);return(0,u.jsx)(d.Z.Provider,{value:{name:R,onChange:e=>{C(e.target.value),b&&b(e,e.target.value)},value:v},children:(0,u.jsx)(t.Z,(0,r.Z)({role:"radiogroup",ref:Z},j,{children:p}))})}));o.Z=p},66485:function(e){function o(){return new DOMException("The request is not allowed","NotAllowedError")}e.exports=async function(e){try{await async function(e){if(!navigator.clipboard)throw o();return navigator.clipboard.writeText(e)}(e)}catch(n){try{await async function(e){const n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);const r=window.getSelection(),a=window.document.createRange();r.removeAllRanges(),a.selectNode(n),r.addRange(a);let l=!1;try{l=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(n)}if(!l)throw o()}(e)}catch(r){throw r||n||o()}}}},99770:function(e,o,n){"use strict";var r;o.Z=void 0;var a=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z","CodeTags");o.Z=a},90738:function(e,o,n){"use strict";var r;o.Z=void 0;var a=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z","ContentCopy");o.Z=a},53917:function(e,o,n){"use strict";var r;o.Z=void 0;var a=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z","LanguageJavascript");o.Z=a},93031:function(e,o,n){"use strict";var r;o.Z=void 0;var a=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z","LanguageTypescript");o.Z=a},97915:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/radio",function(){return n(54979)}])},39913:function(e,o,n){"use strict";n.d(o,{Z:function(){return S}});var r=n(85893),a=n(67294),l=n(79172),t=n(66242),i=n(34386),s=n(67720),d=n(57922),c=n(93946),u=n(78445),m=n(44267),p=n(96420),h=n(98396),x=n(33454),b=n(99770),f=n(90738),j=n(53917),g=n(93031),v=n(15660),C=n.n(v),Z=n(74931),R=n(66485),w=n.n(R),k=function(e){return e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName)},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,a.useRef)(null),n=function(){e.onSuccess&&e.onSuccess(),e.selectOnCopy&&k(o.current)&&o.current.select()},r=function(){e.onError&&e.onError(),!1!==e.selectOnError&&k(o.current)&&o.current.select()},l=function(e){w()(e).then(n).catch(r)},t=(0,a.useCallback)((function(e){"string"===typeof e?l(e):o.current&&l(o.current.value)}),[]);return{copy:t,target:o}};function F(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function L(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(o){F(e,o,n[o])}))}return e}var S=function(e){var o=e.id,n=e.sx,v=e.code,R=e.title,w=e.children,k=e.className,F=(0,a.useState)(!1),S=F[0],G=F[1],P=(0,a.useState)(null!==v.tsx?"tsx":"jsx"),I=P[0],V=P[1],M=y(),T=(0,h.Z)((function(e){return e.breakpoints.down("md")}));return(0,a.useEffect)((function(){C().highlightAll()}),[S,I]),(0,r.jsxs)(t.Z,{className:k,sx:L({"& .MuiCardHeader-action":{lineHeight:.8}},n),id:o||"card-snippet--".concat(R.toLowerCase().replace(/ /g,"-")),children:[(0,r.jsx)(u.Z,L({title:R,titleTypographyProps:{variant:"h6"}},T?{}:{action:(0,r.jsx)(c.Z,{onClick:function(){return G(!S)},children:(0,r.jsx)(b.Z,{fontSize:"small"})})})),(0,r.jsx)(m.Z,{children:w}),T?null:(0,r.jsxs)(d.Z,{in:S,children:[(0,r.jsx)(s.Z,{sx:{my:0}}),(0,r.jsxs)(m.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,r.jsx)(l.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,r.jsxs)(x.Z,{exclusive:!0,size:"small",color:"primary",value:I,onChange:function(e,o){return null!==o?V(o):null},children:[null!==v.tsx?(0,r.jsx)(p.Z,{value:"tsx",children:(0,r.jsx)(g.Z,{fontSize:"small"})}):null,null!==v.jsx?(0,r.jsx)(p.Z,{value:"jsx",children:(0,r.jsx)(j.Z,{fontSize:"small"})}):null]})}),(0,r.jsx)(i.Z,{title:"Copy the source",placement:"top",children:(0,r.jsx)(c.Z,{onClick:function(){M.copy(null!==v.tsx&&"tsx"===I?v.tsx.props.children.props.children:null!==v.jsx&&"jsx"===I?v.jsx.props.children.props.children:""),Z.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})},sx:{top:"5rem",right:"2.5625rem",position:"absolute",color:function(e){return e.palette.grey[100]}},children:(0,r.jsx)(f.Z,{fontSize:"small"})})}),(0,r.jsx)(l.Z,{children:null!==v[I]?v[I]:null})]})]})]})}},54979:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return N}});var r=n(85893),a=n(86886),l=n(15861),t=n(39913),i=n(67294),s=n(36872),d=n(68061),c=n(94054),u=n(50480),m=function(){var e=(0,i.useState)("checked"),o=e[0],n=e[1];return(0,r.jsxs)(c.Z,{sx:{flexWrap:"wrap",flexDirection:"row"},children:[(0,r.jsxs)(d.Z,{row:!0,value:o,name:"simple-radio",onChange:function(e){n(e.target.value)},"aria-label":"simple-radio",children:[(0,r.jsx)(u.Z,{value:"checked",control:(0,r.jsx)(s.Z,{}),label:"Checked"}),(0,r.jsx)(u.Z,{value:"unchecked",control:(0,r.jsx)(s.Z,{}),label:"Unchecked"})]}),(0,r.jsxs)(d.Z,{row:!0,value:"disabled-checked",name:"simple-disabled-radio","aria-label":"simple-disabled-radio",children:[(0,r.jsx)(u.Z,{disabled:!0,value:"disabled-checked",label:"Disabled Checked",control:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(u.Z,{disabled:!0,value:"disabled-unchecked",label:"Disabled Unchecked",control:(0,r.jsx)(s.Z,{})})]})]})},p=function(){return(0,r.jsxs)(d.Z,{row:!0,"aria-label":"colored",name:"colored",defaultValue:"primary",children:[(0,r.jsx)(u.Z,{value:"primary",control:(0,r.jsx)(s.Z,{}),label:"Primary"}),(0,r.jsx)(u.Z,{value:"secondary",control:(0,r.jsx)(s.Z,{color:"secondary"}),label:"Secondary"}),(0,r.jsx)(u.Z,{value:"success",label:"Success",control:(0,r.jsx)(s.Z,{color:"success"})}),(0,r.jsx)(u.Z,{value:"error",label:"Error",control:(0,r.jsx)(s.Z,{color:"error"})}),(0,r.jsx)(u.Z,{value:"warning",label:"Warning",control:(0,r.jsx)(s.Z,{color:"warning"})}),(0,r.jsx)(u.Z,{value:"info",label:"Info",control:(0,r.jsx)(s.Z,{color:"info"})})]})},h=function(){return(0,r.jsxs)(d.Z,{row:!0,"aria-label":"sizes",name:"sizes",defaultValue:"small",children:[(0,r.jsx)(u.Z,{value:"small",control:(0,r.jsx)(s.Z,{size:"small"}),label:"Small"}),(0,r.jsx)(u.Z,{value:"default",control:(0,r.jsx)(s.Z,{}),label:"Default"})]})},x=n(11057),b=n(40476),f=n(56815),j=function(){var e=(0,i.useState)(""),o=e[0],n=e[1],a=(0,i.useState)(!1),l=a[0],t=a[1],m=(0,i.useState)("Choose wisely"),p=m[0],h=m[1];return(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault(),"best"===o?(t(!1),h("You got it!")):"worst"===o?(t(!0),h("Sorry, wrong answer!")):(t(!0),h("Please select an option."))},children:(0,r.jsxs)(c.Z,{error:l,children:[(0,r.jsx)(b.Z,{component:"legend",children:"Pop quiz: MUI is..."}),(0,r.jsxs)(d.Z,{"aria-label":"quiz",name:"quiz",value:o,onChange:function(e){t(!1),h(" "),n(e.target.value)},children:[(0,r.jsx)(u.Z,{value:"best",control:(0,r.jsx)(s.Z,{}),label:"The best!"}),(0,r.jsx)(u.Z,{value:"worst",control:(0,r.jsx)(s.Z,{}),label:"The worst."})]}),(0,r.jsx)(f.Z,{children:p}),(0,r.jsx)(x.Z,{type:"submit",variant:"outlined",sx:{mt:3},children:"Check Answer"})]})})},g=function(){var e=(0,i.useState)("a"),o=e[0],n=e[1],a=function(e){n(e.target.value)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z,{value:"a",onChange:a,name:"radio-button-demo",checked:"a"===o,inputProps:{"aria-label":"A"}}),(0,r.jsx)(s.Z,{value:"b",onChange:a,name:"radio-button-demo",checked:"b"===o,inputProps:{"aria-label":"B"}})]})},v=n(11496);function C(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}var Z=(0,v.ZP)("span")((function(e){var o=e.theme;return{width:16,height:16,borderRadius:"50%",backgroundColor:"dark"===o.palette.mode?"#394b59":"#f5f8fa","input:hover ~ &":{backgroundColor:"dark"===o.palette.mode?"#30404d":"#ebf1f5"},".Mui-focusVisible &":{outlineOffset:2,outline:"2px auto rgba(19,124,189,.6)"},"input:disabled ~ &":{boxShadow:"none",background:"dark"===o.palette.mode?"rgba(57,75,89,.5)":"rgba(206,217,224,.5)"},boxShadow:"dark"===o.palette.mode?"0 0 0 1px rgb(16 22 26 / 40%)":"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundImage:"dark"===o.palette.mode?"linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))":"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))"}})),R=(0,v.ZP)(Z)({backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","input:hover ~ &":{backgroundColor:"#106ba3"},"&:before":{width:16,height:16,content:'""',display:"block",backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)"}}),w=function(e){return(0,r.jsx)(s.Z,function(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(o){C(e,o,n[o])}))}return e}({},e,{disableRipple:!0,color:"default",icon:(0,r.jsx)(Z,{}),checkedIcon:(0,r.jsx)(R,{}),sx:{"&:hover":{backgroundColor:"transparent"}}}))},k=function(){return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(b.Z,{component:"legend",children:"Gender"}),(0,r.jsxs)(d.Z,{row:!0,defaultValue:"female","aria-label":"gender",name:"customized-radios",children:[(0,r.jsx)(u.Z,{value:"female",control:(0,r.jsx)(w,{}),label:"Female"}),(0,r.jsx)(u.Z,{value:"male",control:(0,r.jsx)(w,{}),label:"Male"}),(0,r.jsx)(u.Z,{value:"other",control:(0,r.jsx)(w,{}),label:"Other"}),(0,r.jsx)(u.Z,{value:"disabled",disabled:!0,control:(0,r.jsx)(w,{}),label:"Disabled"})]})]})},y=function(){return(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)(d.Z,{row:!0,"aria-label":"position",name:"vertical",defaultValue:"top",children:[(0,r.jsx)(u.Z,{value:"top",label:"Top",labelPlacement:"top",sx:{mr:8.8},control:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(u.Z,{value:"bottom",control:(0,r.jsx)(s.Z,{}),label:"Bottom",labelPlacement:"bottom"})]}),(0,r.jsxs)(d.Z,{row:!0,"aria-label":"position",name:"horizontal",defaultValue:"start",sx:{mt:4},children:[(0,r.jsx)(u.Z,{value:"start",label:"Start",labelPlacement:"start",sx:{mr:4},control:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(u.Z,{value:"end",control:(0,r.jsx)(s.Z,{}),label:"End"})]})]})},F=function(){var e=(0,i.useState)("controlled-checked"),o=e[0],n=e[1];return(0,r.jsxs)(a.ZP,{container:!0,spacing:6,children:[(0,r.jsxs)(a.ZP,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(l.Z,{children:"Controlled"}),(0,r.jsxs)(d.Z,{row:!0,"aria-label":"controlled",name:"controlled",value:o,onChange:function(e){n(e.target.value)},children:[(0,r.jsx)(u.Z,{value:"controlled-checked",control:(0,r.jsx)(s.Z,{}),label:"Checked"}),(0,r.jsx)(u.Z,{value:"controlled-unchecked",control:(0,r.jsx)(s.Z,{}),label:"Unchecked"})]})]}),(0,r.jsxs)(a.ZP,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(l.Z,{children:"Uncontrolled"}),(0,r.jsxs)(d.Z,{row:!0,"aria-label":"uncontrolled",name:"uncontrolled",defaultValue:"uncontrolled-checked",children:[(0,r.jsx)(u.Z,{value:"uncontrolled-checked",control:(0,r.jsx)(s.Z,{}),label:"Checked"}),(0,r.jsx)(u.Z,{value:"uncontrolled-unchecked",control:(0,r.jsx)(s.Z,{}),label:"Unchecked"})]})]})]})},L=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioColor = () => {\n  return (\n    <RadioGroup row aria-label='colored' name='colored' defaultValue='primary'>\n      <FormControlLabel value='primary' control={<Radio />} label='Primary' />\n      <FormControlLabel value='secondary' control={<Radio color='secondary' />} label='Secondary' />\n      <FormControlLabel value='success' label='Success' control={<Radio color='success' />} />\n      <FormControlLabel value='error' label='Error' control={<Radio color='error' />} />\n      <FormControlLabel value='warning' label='Warning' control={<Radio color='warning' />} />\n      <FormControlLabel value='info' label='Info' control={<Radio color='info' />} />\n    </RadioGroup>\n  )\n}\n\nexport default RadioColor\n"})}),S=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioLabelPlacement = () => {\n  return (\n    <FormControl>\n      <RadioGroup row aria-label='position' name='vertical' defaultValue='top'>\n        <FormControlLabel value='top' label='Top' labelPlacement='top' sx={{ mr: 8.8 }} control={<Radio />} />\n        <FormControlLabel value='bottom' control={<Radio />} label='Bottom' labelPlacement='bottom' />\n      </RadioGroup>\n      <RadioGroup row aria-label='position' name='horizontal' defaultValue='start' sx={{ mt: 4 }}>\n        <FormControlLabel value='start' label='Start' labelPlacement='start' sx={{ mr: 4 }} control={<Radio />} />\n        <FormControlLabel value='end' control={<Radio />} label='End' />\n      </RadioGroup>\n    </FormControl>\n  )\n}\n\nexport default RadioLabelPlacement\n"})}),G=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\nimport Radio from '@mui/material/Radio'\nimport Typography from '@mui/material/Typography'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioControlledUncontrolled = () => {\n  // ** State\n  const [value, setValue] = useState('controlled-checked')\n\n  const handleChange = event => {\n    setValue(event.target.value)\n  }\n\n  return (\n    <Grid container spacing={6}>\n      <Grid item xs={12} sm={6}>\n        <Typography>Controlled</Typography>\n        <RadioGroup row aria-label='controlled' name='controlled' value={value} onChange={handleChange}>\n          <FormControlLabel value='controlled-checked' control={<Radio />} label='Checked' />\n          <FormControlLabel value='controlled-unchecked' control={<Radio />} label='Unchecked' />\n        </RadioGroup>\n      </Grid>\n      <Grid item xs={12} sm={6}>\n        <Typography>Uncontrolled</Typography>\n        <RadioGroup row aria-label='uncontrolled' name='uncontrolled' defaultValue='uncontrolled-checked'>\n          <FormControlLabel value='uncontrolled-checked' control={<Radio />} label='Checked' />\n          <FormControlLabel value='uncontrolled-unchecked' control={<Radio />} label='Unchecked' />\n        </RadioGroup>\n      </Grid>\n    </Grid>\n  )\n}\n\nexport default RadioControlledUncontrolled\n"})}),P=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport { styled } from '@mui/material/styles'\nimport FormLabel from '@mui/material/FormLabel'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport Radio from '@mui/material/Radio'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst BpIcon = styled('span')(({ theme }) => ({\n  width: 16,\n  height: 16,\n  borderRadius: '50%',\n  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',\n  'input:hover ~ &': {\n    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5'\n  },\n  '.Mui-focusVisible &': {\n    outlineOffset: 2,\n    outline: '2px auto rgba(19,124,189,.6)'\n  },\n  'input:disabled ~ &': {\n    boxShadow: 'none',\n    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)'\n  },\n  boxShadow:\n    theme.palette.mode === 'dark'\n      ? '0 0 0 1px rgb(16 22 26 / 40%)'\n      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',\n  backgroundImage:\n    theme.palette.mode === 'dark'\n      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'\n      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))'\n}))\n\nconst BpCheckedIcon = styled(BpIcon)({\n  backgroundColor: '#137cbd',\n  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',\n  'input:hover ~ &': {\n    backgroundColor: '#106ba3'\n  },\n  '&:before': {\n    width: 16,\n    height: 16,\n    content: '\"\"',\n    display: 'block',\n    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)'\n  }\n})\n\n// Inspired by blueprintjs\nconst BpRadio = props => {\n  return (\n    <Radio\n      {...props}\n      disableRipple\n      color='default'\n      icon={<BpIcon />}\n      checkedIcon={<BpCheckedIcon />}\n      sx={{ '&:hover': { backgroundColor: 'transparent' } }}\n    />\n  )\n}\n\nconst RadioCustomized = () => {\n  return (\n    <FormControl>\n      <FormLabel component='legend'>Gender</FormLabel>\n      <RadioGroup row defaultValue='female' aria-label='gender' name='customized-radios'>\n        <FormControlLabel value='female' control={<BpRadio />} label='Female' />\n        <FormControlLabel value='male' control={<BpRadio />} label='Male' />\n        <FormControlLabel value='other' control={<BpRadio />} label='Other' />\n        <FormControlLabel value='disabled' disabled control={<BpRadio />} label='Disabled' />\n      </RadioGroup>\n    </FormControl>\n  )\n}\n\nexport default RadioCustomized\n"})}),I=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioGroupComponent = () => {\n  // ** State\n  const [value, setValue] = useState('checked')\n\n  const handleChange = event => {\n    setValue(event.target.value)\n  }\n\n  return (\n    <FormControl sx={{ flexWrap: 'wrap', flexDirection: 'row' }}>\n      <RadioGroup row value={value} name='simple-radio' onChange={handleChange} aria-label='simple-radio'>\n        <FormControlLabel value='checked' control={<Radio />} label='Checked' />\n        <FormControlLabel value='unchecked' control={<Radio />} label='Unchecked' />\n      </RadioGroup>\n\n      <RadioGroup row value='disabled-checked' name='simple-disabled-radio' aria-label='simple-disabled-radio'>\n        <FormControlLabel disabled value='disabled-checked' label='Disabled Checked' control={<Radio />} />\n        <FormControlLabel disabled value='disabled-unchecked' label='Disabled Unchecked' control={<Radio />} />\n      </RadioGroup>\n    </FormControl>\n  )\n}\n\nexport default RadioGroupComponent\n"})}),V=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport Button from '@mui/material/Button'\nimport FormLabel from '@mui/material/FormLabel'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport FormHelperText from '@mui/material/FormHelperText'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioShowError = () => {\n  // ** States\n  const [value, setValue] = useState('')\n  const [error, setError] = useState(false)\n  const [helperText, setHelperText] = useState('Choose wisely')\n\n  const handleRadioChange = event => {\n    setError(false)\n    setHelperText(' ')\n    setValue(event.target.value)\n  }\n\n  const handleSubmit = event => {\n    event.preventDefault()\n    if (value === 'best') {\n      setError(false)\n      setHelperText('You got it!')\n    } else if (value === 'worst') {\n      setError(true)\n      setHelperText('Sorry, wrong answer!')\n    } else {\n      setError(true)\n      setHelperText('Please select an option.')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <FormControl error={error}>\n        <FormLabel component='legend'>Pop quiz: MUI is...</FormLabel>\n        <RadioGroup aria-label='quiz' name='quiz' value={value} onChange={handleRadioChange}>\n          <FormControlLabel value='best' control={<Radio />} label='The best!' />\n          <FormControlLabel value='worst' control={<Radio />} label='The worst.' />\n        </RadioGroup>\n        <FormHelperText>{helperText}</FormHelperText>\n        <Button type='submit' variant='outlined' sx={{ mt: 3 }}>\n          Check Answer\n        </Button>\n      </FormControl>\n    </form>\n  )\n}\n\nexport default RadioShowError\n"})}),M=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Radio from '@mui/material/Radio'\n\nconst RadioStandalone = () => {\n  // ** State\n  const [selectedValue, setSelectedValue] = useState('a')\n\n  const handleChange = event => {\n    setSelectedValue(event.target.value)\n  }\n\n  return (\n    <div>\n      <Radio\n        value='a'\n        onChange={handleChange}\n        name='radio-button-demo'\n        checked={selectedValue === 'a'}\n        inputProps={{ 'aria-label': 'A' }}\n      />\n      <Radio\n        value='b'\n        onChange={handleChange}\n        name='radio-button-demo'\n        checked={selectedValue === 'b'}\n        inputProps={{ 'aria-label': 'B' }}\n      />\n    </div>\n  )\n}\n\nexport default RadioStandalone\n"})}),T=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioSizes = () => {\n  return (\n    <RadioGroup row aria-label='sizes' name='sizes' defaultValue='small'>\n      <FormControlLabel value='small' control={<Radio size='small' />} label='Small' />\n      <FormControlLabel value='default' control={<Radio />} label='Default' />\n    </RadioGroup>\n  )\n}\n\nexport default RadioSizes\n"})});var N=function(){return(0,r.jsxs)(a.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,r.jsx)(a.ZP,{item:!0,xs:12,children:(0,r.jsxs)(t.Z,{title:"RadioGroup",code:{tsx:null,jsx:I},children:[(0,r.jsxs)(l.Z,{sx:{mb:2},children:[(0,r.jsx)("code",{children:"RadioGroup"})," is a helpful wrapper used to group ",(0,r.jsx)("code",{children:"Radio"})," components that provides an easier API, and proper keyboard accessibility to the group."]}),(0,r.jsx)(m,{})]})}),(0,r.jsx)(a.ZP,{item:!0,xs:12,children:(0,r.jsxs)(t.Z,{title:"Controlled and Uncontrolled",code:{tsx:null,jsx:G},children:[(0,r.jsxs)(l.Z,{sx:{mb:4},children:["Manage ",(0,r.jsx)("code",{children:"value"})," prop with ",(0,r.jsx)("code",{children:"RadioGroup"})," component with the help of a state for controlled radio and ",(0,r.jsx)("code",{children:"defaultValue"})," prop with ",(0,r.jsx)("code",{children:"RadioGroup"})," component for uncontrolled radio."]}),(0,r.jsx)(F,{})]})}),(0,r.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Standalone Radio Buttons",code:{tsx:null,jsx:M},children:[(0,r.jsxs)(l.Z,{sx:{mb:2},children:[(0,r.jsx)("code",{children:"Radio"})," can also be used standalone, without the RadioGroup wrapper."]}),(0,r.jsx)(g,{})]})}),(0,r.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Colors",code:{tsx:null,jsx:L},children:[(0,r.jsxs)(l.Z,{sx:{mb:2},children:["Use ",(0,r.jsx)("code",{children:"color"})," prop with ",(0,r.jsx)("code",{children:"Radio"})," component for different colored radio button."]}),(0,r.jsx)(p,{})]})}),(0,r.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Sizes",code:{tsx:null,jsx:T},children:[(0,r.jsxs)(l.Z,{sx:{mb:2},children:["Use ",(0,r.jsx)("code",{children:"color"})," prop with ",(0,r.jsx)("code",{children:"Radio"})," component for different colored radio button."]}),(0,r.jsx)(h,{})]})}),(0,r.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Customized Radio",code:{tsx:null,jsx:P},children:[(0,r.jsxs)(l.Z,{sx:{mb:2},children:["Use ",(0,r.jsx)("code",{children:"styled"})," hook to customize your radio button."]}),(0,r.jsx)(k,{})]})}),(0,r.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Label Placement",code:{tsx:null,jsx:S},children:[(0,r.jsxs)(l.Z,{sx:{mb:4},children:["You can change the placement of the label with ",(0,r.jsx)("code",{children:"FormControlLabel"})," component's"," ",(0,r.jsx)("code",{children:"labelPlacement"})," prop."]}),(0,r.jsx)(y,{})]})}),(0,r.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Show Error",code:{tsx:null,jsx:V},children:[(0,r.jsx)(l.Z,{sx:{mb:4},children:"In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted."}),(0,r.jsx)(j,{})]})})]})}}},function(e){e.O(0,[4386,5511,8722,9774,2888,179],(function(){return o=97915,e(e.s=o);var o}));var o=e.O();_N_E=o}]);