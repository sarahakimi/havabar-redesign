(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4608],{12066:function(r,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hub/requests",function(){return t(68773)}])},68773:function(r,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d},deleteUser:function(){return v},downloadDataFromServer:function(){return w},editUser:function(){return h},fetchData:function(){return p},registerUser:function(){return l}});var e=t(34051),u=t.n(e),o=t(85893),a=t(5370),c=t(63543);function i(r,n,t,e,u,o,a){try{var c=r[o](a),i=c.value}catch(s){return void t(s)}c.done?n(i):Promise.resolve(i).then(e,u)}function s(r){return function(){var n=this,t=arguments;return new Promise((function(e,u){var o=r.apply(n,t);function a(r){i(o,e,u,a,c,"next",r)}function c(r){i(o,e,u,a,c,"throw",r)}a(void 0)}))}}var f={asc:1,desc:0},p=function(){var r=s(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(t=n.sort_by.split(" "))[1]=f[t[1]],r.next=4,a.Z.post(c.Z.getHubsFromAdmin(n.page,Number(t.join(""))),{},{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 4:return e=r.sent,r.abrupt("return",e);case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),w=function(){var r=s(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.Z.post(c.Z.hubReport,{},{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),v=function(){var r=s(u().mark((function r(n){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.Z.delete(c.Z.singleHub(n),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=s(u().mark((function r(n){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.Z.post(c.Z.registerHub,n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),h=function(){var r=s(u().mark((function r(n,t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.Z.put(c.Z.singleHub(n),t,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}();function d(){return(0,o.jsx)("div",{})}}},function(r){r.O(0,[9774,2888,179],(function(){return n=12066,r(r.s=n);var n}));var n=r.O();_N_E=n}]);