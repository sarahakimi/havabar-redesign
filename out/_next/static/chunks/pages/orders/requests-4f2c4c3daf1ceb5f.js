(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2823],{14974:function(r,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders/requests",function(){return t(4893)}])},4893:function(r,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w},deleteUser:function(){return p},editUser:function(){return v},fetchData:function(){return f},registerUser:function(){return d}});var e=t(34051),u=t.n(e),a=t(85893),c=t(5370),o=t(63543);function i(r,n,t,e,u,a,c){try{var o=r[a](c),i=o.value}catch(s){return void t(s)}o.done?n(i):Promise.resolve(i).then(e,u)}function s(r){return function(){var n=this,t=arguments;return new Promise((function(e,u){var a=r.apply(n,t);function c(r){i(a,e,u,c,o,"next",r)}function o(r){i(a,e,u,c,o,"throw",r)}c(void 0)}))}}var f=function(){var r=s(u().mark((function r(n){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get(o.Z.getAdminOrders,n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=s(u().mark((function r(n){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.delete(o.Z.singleOrder(n),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),d=function(){var r=s(u().mark((function r(n){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.post(o.Z.createOrder,n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),v=function(){var r=s(u().mark((function r(n,t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.put(o.Z.singleOrder(n),t,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}();function w(){return(0,a.jsx)("div",{})}}},function(r){r.O(0,[9774,2888,179],(function(){return n=14974,r(r.s=n);var n}));var n=r.O();_N_E=n}]);