(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6341],{55956:function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customers/requests",function(){return n(76412)}])},76412:function(r,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h},deleteUser:function(){return v},downloadDataFromServer:function(){return l},editUser:function(){return d},fetchData:function(){return p},registerUser:function(){return w}});var e=n(34051),u=n.n(e),o=n(85893),a=n(5370),c=n(63543);function s(r,t,n,e,u,o,a){try{var c=r[o](a),s=c.value}catch(i){return void n(i)}c.done?t(s):Promise.resolve(s).then(e,u)}function i(r){return function(){var t=this,n=arguments;return new Promise((function(e,u){var o=r.apply(t,n);function a(r){s(o,e,u,a,c,"next",r)}function c(r){s(o,e,u,a,c,"throw",r)}a(void 0)}))}}var f={asc:1,desc:0},p=function(){var r=i(u().mark((function r(t){var n,e,o,s;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.sort_by.split(" "),e=n[1],(n=n.filter((function(r){return r!==e})))[1]=f[n[1]],o=""!==(null===t||void 0===t?void 0:t.search)?t.search:{},r.next=7,a.Z.post(c.Z.getCustomers(t.page,Number(n.join(""))),o,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 7:return s=r.sent,r.abrupt("return",s);case 9:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=i(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.Z.post(c.Z.customersReport,{},{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),v=function(){var r=i(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.Z.delete(c.Z.singleCustomer(t),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),w=function(){var r=i(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.Z.post(c.Z.registerCustomer,t,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=i(u().mark((function r(t,n){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.Z.put(c.Z.singleCustomer(t),n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(t,n){return r.apply(this,arguments)}}();function h(){return(0,o.jsx)("div",{})}}},function(r){r.O(0,[9774,2888,179],(function(){return t=55956,r(r.s=t);var t}));var t=r.O();_N_E=t}]);