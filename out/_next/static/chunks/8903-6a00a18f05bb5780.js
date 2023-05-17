"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8903],{57129:function(e,t){var r=Object.prototype.hasOwnProperty;function n(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return null}}function o(e){try{return encodeURIComponent(e)}catch(t){return null}}t.stringify=function(e,t){t=t||"";var n,i,a=[];for(i in"string"!==typeof t&&(t="?"),e)if(r.call(e,i)){if((n=e[i])||null!==n&&undefined!==n&&!isNaN(n)||(n=""),i=o(i),n=o(n),null===i||null===n)continue;a.push(i+"="+n)}return a.length?t+a.join("&"):""},t.parse=function(e){for(var t,r=/([^=?#&]+)=?([^&]*)/g,o={};t=r.exec(e);){var i=n(t[1]),a=n(t[2]);null===i||null===a||i in o||(o[i]=a)}return o}},47418:function(e){e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},98903:function(e,t,r){r.d(t,{gq:function(){return je}});var n=r(48764).Buffer;const o="function"===typeof btoa,i="function"===typeof n,a=("function"===typeof TextDecoder&&new TextDecoder,"function"===typeof TextEncoder?new TextEncoder:void 0),s=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),l=((e=>{let t={};e.forEach(((e,r)=>t[e]=r))})(s),String.fromCharCode.bind(String)),u=("function"===typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array),e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_"))),c=e=>{let t,r,n,o,i="";const a=e.length%3;for(let l=0;l<e.length;){if((r=e.charCodeAt(l++))>255||(n=e.charCodeAt(l++))>255||(o=e.charCodeAt(l++))>255)throw new TypeError("invalid character found");t=r<<16|n<<8|o,i+=s[t>>18&63]+s[t>>12&63]+s[t>>6&63]+s[63&t]}return a?i.slice(0,a-3)+"===".substring(a):i},f=o?e=>btoa(e):i?e=>n.from(e,"binary").toString("base64"):c,p=i?e=>n.from(e).toString("base64"):e=>{let t=[];for(let r=0,n=e.length;r<n;r+=4096)t.push(l.apply(null,e.subarray(r,r+4096)));return f(t.join(""))},h=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?l(192|t>>>6)+l(128|63&t):l(224|t>>>12&15)+l(128|t>>>6&63)+l(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return l(240|t>>>18&7)+l(128|t>>>12&63)+l(128|t>>>6&63)+l(128|63&t)},d=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,y=e=>e.replace(d,h),v=i?e=>n.from(e,"utf8").toString("base64"):a?e=>p(a.encode(e)):e=>f(y(e)),m=(e,t=!1)=>t?u(v(e)):v(e),g=m;var _=r(84564),b=r.n(_);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(t&&("object"===w(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){var t="function"===typeof Map?new Map:void 0;return P=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return R(e,arguments,j(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),E(n,e)},P(e)}function R(e,t,r){return R=k()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&E(o,r.prototype),o},R.apply(null,arguments)}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(i,e);var t,r,n,o=function(e){var t=k();return function(){var r,n=j(e);if(t){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}(i);function i(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(S(this,i),(t=o.call(this,e)).originalRequest=n,t.originalResponse=a,t.causingError=r,null!=r&&(e+=", caused by ".concat(r.toString())),null!=n){var s=n.getHeader("X-Request-ID")||"n/a",l=n.getMethod(),u=n.getURL(),c=a?a.getStatus():"n/a",f=a?a.getBody()||"":"n/a";e+=", originated from request (method: ".concat(l,", url: ").concat(u,", response code: ").concat(c,", response text: ").concat(f,", request id: ").concat(s,")")}return t.message=e,t}return t=i,r&&U(t.prototype,r),n&&U(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(P(Error)),C=x,D=!1;function z(e){D&&console.log(e)}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var B={endpoint:null,uploadUrl:null,metadata:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:null,chunkSize:1/0,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null},F=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"resume"in r&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=r,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=t,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}var t,r,n;return t=e,r=[{key:"findPreviousUploads",value:function(){var e=this;return this.options.fingerprint(this.file,this.options).then((function(t){return e._urlStorage.findUploadsByFingerprint(t)}))}},{key:"resumeFromPreviousUpload",value:function(e){this.url=e.uploadUrl||null,this._parallelUploadUrls=e.parallelUploadUrls||null,this._urlStorageKey=e.urlStorageKey}},{key:"start",value:function(){var e=this,t=this.file;if(t)if(this.options.endpoint||this.options.uploadUrl||this.url){var r=this.options.retryDelays;if(null==r||"[object Array]"===Object.prototype.toString.call(r)){if(this.options.parallelUploads>1)for(var n=0,o=["uploadUrl","uploadSize","uploadLengthDeferred"];n<o.length;n++){var i=o[n];if(this.options[i])return void this._emitError(new Error("tus: cannot use the ".concat(i," option when parallelUploads is enabled")))}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1)return void this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length)return void this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"))}this.options.fingerprint(t,this.options).then((function(r){return z(null==r?"No fingerprint was calculated meaning that the upload cannot be stored in the URL storage.":"Calculated fingerprint: ".concat(r)),e._fingerprint=r,e._source?e._source:e.options.fileReader.openFile(t,e.options.chunkSize)})).then((function(t){if(e._source=t,e.options.uploadLengthDeferred)e._size=null;else if(null!=e.options.uploadSize){if(e._size=Number(e.options.uploadSize),Number.isNaN(e._size))return void e._emitError(new Error("tus: cannot convert `uploadSize` option into a number"))}else if(e._size=e._source.size,null==e._size)return void e._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));e.options.parallelUploads>1||null!=e._parallelUploadUrls?e._startParallelUpload():e._startSingleUpload()})).catch((function(t){e._emitError(t)}))}else this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"))}else this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));else this._emitError(new Error("tus: no file or stream to upload provided"))}},{key:"_startParallelUpload",value:function(){var t,r=this,n=this._size,o=0;this._parallelUploads=[];var i=null!=this._parallelUploadUrls?this._parallelUploadUrls.length:this.options.parallelUploads,a=null!==(t=this.options.parallelUploadBoundaries)&&void 0!==t?t:function(e,t){for(var r=Math.floor(e/t),n=[],o=0;o<t;o++)n.push({start:r*o,end:r*(o+1)});return n[t-1].end=e,n}(this._source.size,i);this._parallelUploadUrls&&a.forEach((function(e,t){e.uploadUrl=r._parallelUploadUrls[t]||null})),this._parallelUploadUrls=new Array(a.length);var s,l=a.map((function(t,i){var s=0;return r._source.slice(t.start,t.end).then((function(l){var u=l.value;return new Promise((function(l,c){var f=q(q({},r.options),{},{uploadUrl:t.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:{},headers:q(q({},r.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:l,onError:c,onProgress:function(e){o=o-s+e,s=e,r._emitProgress(o,n)},onUploadUrlAvailable:function(){r._parallelUploadUrls[i]=p.url,r._parallelUploadUrls.filter((function(e){return Boolean(e)})).length===a.length&&r._saveUploadInUrlStorage()}}),p=new e(u,f);p.start(),r._parallelUploads.push(p)}))}))}));Promise.all(l).then((function(){(s=r._openRequest("POST",r.options.endpoint)).setHeader("Upload-Concat","final;".concat(r._parallelUploadUrls.join(" ")));var e=N(r.options.metadata);return""!==e&&s.setHeader("Upload-Metadata",e),r._sendRequest(s,null)})).then((function(e){if(M(e.getStatus(),200)){var t=e.getHeader("Location");null!=t?(r.url=Z(r.options.endpoint,t),z("Created upload at ".concat(r.url)),r._emitSuccess()):r._emitHttpError(s,e,"tus: invalid or missing Location header")}else r._emitHttpError(s,e,"tus: unexpected response while creating upload")})).catch((function(e){r._emitError(e)}))}},{key:"_startSingleUpload",value:function(){return this._aborted=!1,null!=this.url?(z("Resuming upload from previous URL: ".concat(this.url)),void this._resumeUpload()):null!=this.options.uploadUrl?(z("Resuming upload from provided URL: ".concat(this.options.uploadUrl)),this.url=this.options.uploadUrl,void this._resumeUpload()):(z("Creating a new upload"),void this._createUpload())}},{key:"abort",value:function(t){var r=this;return null!=this._parallelUploads&&this._parallelUploads.forEach((function(e){e.abort(t)})),null!==this._req&&this._req.abort(),this._aborted=!0,null!=this._retryTimeout&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),t&&null!=this.url?e.terminate(this.url,this.options).then((function(){return r._removeFromUrlStorage()})):Promise.resolve()}},{key:"_emitHttpError",value:function(e,t,r,n){this._emitError(new C(r,n,e,t))}},{key:"_emitError",value:function(e){var t=this;if(!this._aborted){if(null!=this.options.retryDelays&&(null!=this._offset&&this._offset>this._offsetBeforeRetry&&(this._retryAttempt=0),J(e,this._retryAttempt,this.options))){var r=this.options.retryDelays[this._retryAttempt++];return this._offsetBeforeRetry=this._offset,void(this._retryTimeout=setTimeout((function(){t.start()}),r))}if("function"!==typeof this.options.onError)throw e;this.options.onError(e)}}},{key:"_emitSuccess",value:function(){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),"function"===typeof this.options.onSuccess&&this.options.onSuccess()}},{key:"_emitProgress",value:function(e,t){"function"===typeof this.options.onProgress&&this.options.onProgress(e,t)}},{key:"_emitChunkComplete",value:function(e,t,r){"function"===typeof this.options.onChunkComplete&&this.options.onChunkComplete(e,t,r)}},{key:"_createUpload",value:function(){var e=this;if(this.options.endpoint){var t=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?t.setHeader("Upload-Defer-Length",1):t.setHeader("Upload-Length",this._size);var r,n=N(this.options.metadata);""!==n&&t.setHeader("Upload-Metadata",n),this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,r=this._addChunkToRequest(t)):r=this._sendRequest(t,null),r.then((function(r){if(M(r.getStatus(),200)){var n=r.getHeader("Location");if(null!=n){if(e.url=Z(e.options.endpoint,n),z("Created upload at ".concat(e.url)),"function"===typeof e.options.onUploadUrlAvailable&&e.options.onUploadUrlAvailable(),0===e._size)return e._emitSuccess(),void e._source.close();e._saveUploadInUrlStorage().then((function(){e.options.uploadDataDuringCreation?e._handleUploadResponse(t,r):(e._offset=0,e._performUpload())}))}else e._emitHttpError(t,r,"tus: invalid or missing Location header")}else e._emitHttpError(t,r,"tus: unexpected response while creating upload")})).catch((function(r){e._emitHttpError(t,null,"tus: failed to create upload",r)}))}else this._emitError(new Error("tus: unable to create upload because no endpoint is provided"))}},{key:"_resumeUpload",value:function(){var e=this,t=this._openRequest("HEAD",this.url);this._sendRequest(t,null).then((function(r){var n=r.getStatus();if(!M(n,200))return 423===n?void e._emitHttpError(t,r,"tus: upload is currently locked; retry later"):(M(n,400)&&e._removeFromUrlStorage(),e.options.endpoint?(e.url=null,void e._createUpload()):void e._emitHttpError(t,r,"tus: unable to resume upload (new upload cannot be created without an endpoint)"));var o=parseInt(r.getHeader("Upload-Offset"),10);if(Number.isNaN(o))e._emitHttpError(t,r,"tus: invalid or missing offset value");else{var i=parseInt(r.getHeader("Upload-Length"),10);!Number.isNaN(i)||e.options.uploadLengthDeferred?("function"===typeof e.options.onUploadUrlAvailable&&e.options.onUploadUrlAvailable(),e._saveUploadInUrlStorage().then((function(){if(o===i)return e._emitProgress(i,i),void e._emitSuccess();e._offset=o,e._performUpload()}))):e._emitHttpError(t,r,"tus: invalid or missing length value")}})).catch((function(r){e._emitHttpError(t,null,"tus: failed to resume upload",r)}))}},{key:"_performUpload",value:function(){var e,t=this;this._aborted||(this.options.overridePatchMethod?(e=this._openRequest("POST",this.url)).setHeader("X-HTTP-Method-Override","PATCH"):e=this._openRequest("PATCH",this.url),e.setHeader("Upload-Offset",this._offset),this._addChunkToRequest(e).then((function(r){M(r.getStatus(),200)?t._handleUploadResponse(e,r):t._emitHttpError(e,r,"tus: unexpected response while uploading chunk")})).catch((function(r){t._aborted||t._emitHttpError(e,null,"tus: failed to upload chunk at offset ".concat(t._offset),r)})))}},{key:"_addChunkToRequest",value:function(e){var t=this,r=this._offset,n=this._offset+this.options.chunkSize;return e.setProgressHandler((function(e){t._emitProgress(r+e,t._size)})),e.setHeader("Content-Type","application/offset+octet-stream"),(n===1/0||n>this._size)&&!this.options.uploadLengthDeferred&&(n=this._size),this._source.slice(r,n).then((function(r){var n=r.value,o=r.done;return t.options.uploadLengthDeferred&&o&&(t._size=t._offset+(n&&n.size?n.size:0),e.setHeader("Upload-Length",t._size)),null===n?t._sendRequest(e):(t._emitProgress(t._offset,t._size),t._sendRequest(e,n))}))}},{key:"_handleUploadResponse",value:function(e,t){var r=parseInt(t.getHeader("Upload-Offset"),10);if(Number.isNaN(r))this._emitHttpError(e,t,"tus: invalid or missing offset value");else{if(this._emitProgress(r,this._size),this._emitChunkComplete(r-this._offset,r,this._size),this._offset=r,r===this._size)return this._emitSuccess(),void this._source.close();this._performUpload()}}},{key:"_openRequest",value:function(e,t){var r=K(e,t,this.options);return this._req=r,r}},{key:"_removeFromUrlStorage",value:function(){var e=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch((function(t){e._emitError(t)})),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var e=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||null!==this._urlStorageKey)return Promise.resolve();var t={size:this._size,metadata:this.options.metadata,creationTime:(new Date).toString()};return this._parallelUploads?t.parallelUploadUrls=this._parallelUploadUrls:t.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,t).then((function(t){e._urlStorageKey=t}))}},{key:"_sendRequest",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return X(e,t,this.options)}}],n=[{key:"terminate",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=K("DELETE",t,r);return X(n,null,r).then((function(e){if(204!==e.getStatus())throw new C("tus: unexpected response while terminating upload",null,n,e)})).catch((function(o){if(o instanceof C||(o=new C("tus: failed to terminate upload",o,n,null)),!J(o,0,r))throw o;var i=r.retryDelays[0],a=r.retryDelays.slice(1),s=q(q({},r),{},{retryDelays:a});return new Promise((function(e){return setTimeout(e,i)})).then((function(){return e.terminate(t,s)}))}))}}],r&&L(t.prototype,r),n&&L(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e){return Object.entries(e).map((function(e){var t=A(e,2),r=t[0],n=t[1];return"".concat(r," ").concat(g(String(n)))})).join(",")}function M(e,t){return e>=t&&e<t+100}function K(e,t,r){var n=r.httpStack.createRequest(e,t);n.setHeader("Tus-Resumable","1.0.0");var o=r.headers||{};if(Object.entries(o).forEach((function(e){var t=A(e,2),r=t[0],o=t[1];n.setHeader(r,o)})),r.addRequestId){var i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}));n.setHeader("X-Request-ID",i)}return n}function X(e,t,r){return("function"===typeof r.onBeforeRequest?Promise.resolve(r.onBeforeRequest(e)):Promise.resolve()).then((function(){return e.send(t).then((function(t){return("function"===typeof r.onAfterResponse?Promise.resolve(r.onAfterResponse(e,t)):Promise.resolve()).then((function(){return t}))}))}))}function J(e,t,r){if(null==r.retryDelays||t>=r.retryDelays.length||null==e.originalRequest)return!1;if(r&&"function"===typeof r.onShouldRetry)return r.onShouldRetry(e,t,r);var n=e.originalResponse?e.originalResponse.getStatus():0;return(!M(n,400)||409===n||423===n)&&function(){var e=!0;return"undefined"!==typeof window&&"navigator"in window&&!1===window.navigator.onLine&&(e=!1),e}()}function Z(e,t){return new(b())(t,e).toString()}F.defaultOptions=B;var G=F;function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Q=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(e){return Promise.resolve([])}},{key:"removeUpload",value:function(e){return Promise.resolve()}},{key:"addUpload",value:function(e,t){return Promise.resolve(null)}}])&&$(t.prototype,r),n&&$(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var V=!1;try{V="localStorage"in window;var W="tusSupport",ee=localStorage.getItem(W);localStorage.setItem(W,ee),null===ee&&localStorage.removeItem(W)}catch(ze){if(ze.code!==ze.SECURITY_ERR&&ze.code!==ze.QUOTA_EXCEEDED_ERR)throw ze;V=!1}var te=V,re=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,r=[{key:"findAllUploads",value:function(){var e=this._findEntries("tus::");return Promise.resolve(e)}},{key:"findUploadsByFingerprint",value:function(e){var t=this._findEntries("tus::".concat(e,"::"));return Promise.resolve(t)}},{key:"removeUpload",value:function(e){return localStorage.removeItem(e),Promise.resolve()}},{key:"addUpload",value:function(e,t){var r=Math.round(1e12*Math.random()),n="tus::".concat(e,"::").concat(r);return localStorage.setItem(n,JSON.stringify(t)),Promise.resolve(n)}},{key:"_findEntries",value:function(e){for(var t=[],r=0;r<localStorage.length;r++){var n=localStorage.key(r);if(0===n.indexOf(e))try{var o=JSON.parse(localStorage.getItem(n));o.urlStorageKey=n,t.push(o)}catch(ze){}}return t}}],r&&Y(t.prototype,r),n&&Y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ie(e,t,r){return t&&oe(e.prototype,t),r&&oe(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var ae=function(){function e(){ne(this,e)}return ie(e,[{key:"createRequest",value:function(e,t){return new se(e,t)}},{key:"getName",value:function(){return"XHRHttpStack"}}]),e}(),se=function(){function e(t,r){ne(this,e),this._xhr=new XMLHttpRequest,this._xhr.open(t,r,!0),this._method=t,this._url=r,this._headers={}}return ie(e,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(e,t){this._xhr.setRequestHeader(e,t),this._headers[e]=t}},{key:"getHeader",value:function(e){return this._headers[e]}},{key:"setProgressHandler",value:function(e){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(t){t.lengthComputable&&e(t.loaded)})}},{key:"send",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(r,n){e._xhr.onload=function(){r(new le(e._xhr))},e._xhr.onerror=function(e){n(e)},e._xhr.send(t)}))}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}]),e}(),le=function(){function e(t){ne(this,e),this._xhr=t}return ie(e,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(e){return this._xhr.getResponseHeader(e)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}]),e}(),ue=function(){return"undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase()};var ce=function(){return"undefined"!==typeof window&&("undefined"!==typeof window.PhoneGap||"undefined"!==typeof window.Cordova||"undefined"!==typeof window.cordova)};function fe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var pe=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._file=t,this.size=t.size}var t,r,n;return t=e,(r=[{key:"slice",value:function(e,t){if(ce())return r=this._file.slice(e,t),new Promise((function(e,t){var n=new FileReader;n.onload=function(){var t=new Uint8Array(n.result);e({value:t})},n.onerror=function(e){t(e)},n.readAsArrayBuffer(r)}));var r,n=this._file.slice(e,t);return Promise.resolve({value:n})}},{key:"close",value:function(){}}])&&fe(t.prototype,r),n&&fe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function he(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function de(e){return void 0===e?0:void 0!==e.size?e.size:e.length}var ye=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._buffer=void 0,this._bufferOffset=0,this._reader=t,this._done=!1}var t,r,n;return t=e,(r=[{key:"slice",value:function(e,t){return e<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(e,t)}},{key:"_readUntilEnoughDataOrDone",value:function(e,t){var r=this,n=t<=this._bufferOffset+de(this._buffer);if(this._done||n){var o=this._getDataFromBuffer(e,t),i=null==o&&this._done;return Promise.resolve({value:o,done:i})}return this._reader.read().then((function(n){var o=n.value;return n.done?r._done=!0:void 0===r._buffer?r._buffer=o:r._buffer=function(e,t){if(e.concat)return e.concat(t);if(e instanceof Blob)return new Blob([e,t],{type:e.type});if(e.set){var r=new e.constructor(e.length+t.length);return r.set(e),r.set(t,e.length),r}throw new Error("Unknown data type")}(r._buffer,o),r._readUntilEnoughDataOrDone(e,t)}))}},{key:"_getDataFromBuffer",value:function(e,t){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var r=0===de(this._buffer);return this._done&&r?null:this._buffer.slice(0,t-e)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])&&he(t.prototype,r),n&&he(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ve(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var me=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"openFile",value:function(e,t){return ue()&&e&&"undefined"!==typeof e.uri?(r=e.uri,new Promise((function(e,t){var n=new XMLHttpRequest;n.responseType="blob",n.onload=function(){var t=n.response;e(t)},n.onerror=function(e){t(e)},n.open("GET",r),n.send()}))).then((function(e){return new pe(e)})).catch((function(e){throw new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(e))})):"function"===typeof e.slice&&"undefined"!==typeof e.size?Promise.resolve(new pe(e)):"function"===typeof e.read?(t=Number(t),Number.isFinite(t)?Promise.resolve(new ye(e,t)):Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option"))):Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment"));var r}}])&&ve(t.prototype,r),n&&ve(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ge(e){return ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ge(e)}function _e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function be(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function we(e,t){return we=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},we(e,t)}function Ue(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(ze){return!1}}();return function(){var r,n=Oe(e);if(t){var o=Oe(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Se(this,r)}}function Se(e,t){if(t&&("object"===ge(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Oe(e){return Oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Oe(e)}function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){ke(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ke(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ee=Re(Re({},G.defaultOptions),{},{httpStack:new ae,fileReader:new me,urlStorage:te?new re:new Q,fingerprint:function(e,t){return ue()?Promise.resolve(function(e,t){var r=e.exif?function(e){var t=0;if(0===e.length)return t;for(var r=0;r<e.length;r++){t=(t<<5)-t+e.charCodeAt(r),t&=t}return t}(JSON.stringify(e.exif)):"noexif";return["tus-rn",e.name||"noname",e.size||"nosize",r,t.endpoint].join("/")}(e,t)):Promise.resolve(["tus-br",e.name,e.type,e.size,e.lastModified,t.endpoint].join("-"))}}),je=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&we(e,t)}(i,e);var t,r,n,o=Ue(i);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _e(this,i),t=Re(Re({},Ee),t),o.call(this,e,t)}return t=i,n=[{key:"terminate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Re(Re({},Ee),t),G.terminate(e,t)}}],(r=null)&&be(t.prototype,r),n&&be(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(G),xe=window,Ce=xe.XMLHttpRequest,De=xe.Blob;Ce&&De&&De.prototype.slice},84564:function(e,t,r){var n=r(47418),o=r(57129),i=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,a=/[\n\r\t]/g,s=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,l=/:\d+$/,u=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,c=/^[a-zA-Z]:/;function f(e){return(e||"").toString().replace(i,"")}var p=[["#","hash"],["?","query"],function(e,t){return y(t.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],h={hash:1,query:1};function d(e){var t,n=("undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:"undefined"!==typeof self?self:{}).location||{},o={},i=typeof(e=e||n);if("blob:"===e.protocol)o=new m(unescape(e.pathname),{});else if("string"===i)for(t in o=new m(e,{}),h)delete o[t];else if("object"===i){for(t in e)t in h||(o[t]=e[t]);void 0===o.slashes&&(o.slashes=s.test(e.href))}return o}function y(e){return"file:"===e||"ftp:"===e||"http:"===e||"https:"===e||"ws:"===e||"wss:"===e}function v(e,t){e=(e=f(e)).replace(a,""),t=t||{};var r,n=u.exec(e),o=n[1]?n[1].toLowerCase():"",i=!!n[2],s=!!n[3],l=0;return i?s?(r=n[2]+n[3]+n[4],l=n[2].length+n[3].length):(r=n[2]+n[4],l=n[2].length):s?(r=n[3]+n[4],l=n[3].length):r=n[4],"file:"===o?l>=2&&(r=r.slice(2)):y(o)?r=n[4]:o?i&&(r=r.slice(2)):l>=2&&y(t.protocol)&&(r=n[4]),{protocol:o,slashes:i||y(o),slashesCount:l,rest:r}}function m(e,t,r){if(e=(e=f(e)).replace(a,""),!(this instanceof m))return new m(e,t,r);var i,s,l,u,h,g,_=p.slice(),b=typeof t,w=this,U=0;for("object"!==b&&"string"!==b&&(r=t,t=null),r&&"function"!==typeof r&&(r=o.parse),i=!(s=v(e||"",t=d(t))).protocol&&!s.slashes,w.slashes=s.slashes||i&&t.slashes,w.protocol=s.protocol||t.protocol||"",e=s.rest,("file:"===s.protocol&&(2!==s.slashesCount||c.test(e))||!s.slashes&&(s.protocol||s.slashesCount<2||!y(w.protocol)))&&(_[3]=[/(.*)/,"pathname"]);U<_.length;U++)"function"!==typeof(u=_[U])?(l=u[0],g=u[1],l!==l?w[g]=e:"string"===typeof l?~(h="@"===l?e.lastIndexOf(l):e.indexOf(l))&&("number"===typeof u[2]?(w[g]=e.slice(0,h),e=e.slice(h+u[2])):(w[g]=e.slice(h),e=e.slice(0,h))):(h=l.exec(e))&&(w[g]=h[1],e=e.slice(0,h.index)),w[g]=w[g]||i&&u[3]&&t[g]||"",u[4]&&(w[g]=w[g].toLowerCase())):e=u(e,w);r&&(w.query=r(w.query)),i&&t.slashes&&"/"!==w.pathname.charAt(0)&&(""!==w.pathname||""!==t.pathname)&&(w.pathname=function(e,t){if(""===e)return t;for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=r.length,o=r[n-1],i=!1,a=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),a++):a&&(0===n&&(i=!0),r.splice(n,1),a--);return i&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}(w.pathname,t.pathname)),"/"!==w.pathname.charAt(0)&&y(w.protocol)&&(w.pathname="/"+w.pathname),n(w.port,w.protocol)||(w.host=w.hostname,w.port=""),w.username=w.password="",w.auth&&(~(h=w.auth.indexOf(":"))?(w.username=w.auth.slice(0,h),w.username=encodeURIComponent(decodeURIComponent(w.username)),w.password=w.auth.slice(h+1),w.password=encodeURIComponent(decodeURIComponent(w.password))):w.username=encodeURIComponent(decodeURIComponent(w.auth)),w.auth=w.password?w.username+":"+w.password:w.username),w.origin="file:"!==w.protocol&&y(w.protocol)&&w.host?w.protocol+"//"+w.host:"null",w.href=w.toString()}m.prototype={set:function(e,t,r){var i=this;switch(e){case"query":"string"===typeof t&&t.length&&(t=(r||o.parse)(t)),i[e]=t;break;case"port":i[e]=t,n(t,i.protocol)?t&&(i.host=i.hostname+":"+t):(i.host=i.hostname,i[e]="");break;case"hostname":i[e]=t,i.port&&(t+=":"+i.port),i.host=t;break;case"host":i[e]=t,l.test(t)?(t=t.split(":"),i.port=t.pop(),i.hostname=t.join(":")):(i.hostname=t,i.port="");break;case"protocol":i.protocol=t.toLowerCase(),i.slashes=!r;break;case"pathname":case"hash":if(t){var a="pathname"===e?"/":"#";i[e]=t.charAt(0)!==a?a+t:t}else i[e]=t;break;case"username":case"password":i[e]=encodeURIComponent(t);break;case"auth":var s=t.indexOf(":");~s?(i.username=t.slice(0,s),i.username=encodeURIComponent(decodeURIComponent(i.username)),i.password=t.slice(s+1),i.password=encodeURIComponent(decodeURIComponent(i.password))):i.username=encodeURIComponent(decodeURIComponent(t))}for(var u=0;u<p.length;u++){var c=p[u];c[4]&&(i[c[1]]=i[c[1]].toLowerCase())}return i.auth=i.password?i.username+":"+i.password:i.username,i.origin="file:"!==i.protocol&&y(i.protocol)&&i.host?i.protocol+"//"+i.host:"null",i.href=i.toString(),i},toString:function(e){e&&"function"===typeof e||(e=o.stringify);var t,r=this,n=r.host,i=r.protocol;i&&":"!==i.charAt(i.length-1)&&(i+=":");var a=i+(r.protocol&&r.slashes||y(r.protocol)?"//":"");return r.username?(a+=r.username,r.password&&(a+=":"+r.password),a+="@"):r.password?(a+=":"+r.password,a+="@"):"file:"!==r.protocol&&y(r.protocol)&&!n&&"/"!==r.pathname&&(a+="@"),(":"===n[n.length-1]||l.test(r.hostname)&&!r.port)&&(n+=":"),a+=n+r.pathname,(t="object"===typeof r.query?e(r.query):r.query)&&(a+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(a+=r.hash),a}},m.extractProtocol=v,m.location=d,m.trimLeft=f,m.qs=o,e.exports=m}}]);