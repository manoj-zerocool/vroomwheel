(this.webpackJsonpvroom=this.webpackJsonpvroom||[]).push([[6],{33:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(15),c=t.n(l),i=t(10),r=t(2),s=t(9),u=t(1),d=window.location.pathname,h=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(8),t.e(11)]).then(t.bind(null,316))})),b=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(1),t.e(20)]).then(t.bind(null,317))})),m=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(21),t.e(1),t.e(18)]).then(t.bind(null,319))})),p=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(4),t.e(10)]).then(t.bind(null,312))})),j=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(22),t.e(16)]).then(t.bind(null,318))})),f=o.a.lazy((function(){return Promise.all([t.e(15),t.e(25)]).then(t.bind(null,320))})),x=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(4),t.e(12)]).then(t.bind(null,313))})),O=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(4),t.e(13)]).then(t.bind(null,314))})),w=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,321))})),y=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(28)]).then(t.bind(null,322))})),g=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(23)]).then(t.bind(null,323))})),v=o.a.lazy((function(){return Promise.all([t.e(0),t.e(3),t.e(17),t.e(1),t.e(24)]).then(t.bind(null,324))})),P=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(26)]).then(t.bind(null,325))})),z=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(27)]).then(t.bind(null,326))})),I=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(29)]).then(t.bind(null,327))}));if(d.indexOf("blogs/news")>=0){var S=window.location.protocol;if("localhost:3000"==(C=window.location.host))var k=S+"//blog.vroomwheel.com";else k=S+"//blog."+C;var _=d.split("/blogs/news");window.location.href=k+"/"+_[1];var F=null}else if(d.indexOf("collections")>=0&&d.indexOf("lakhs")<=1){var C;S=window.location.protocol;if("localhost:3000"==(C=window.location.host))var E=S+"//vroomwheel.com";else E=S+"//"+C;var L=E+"/used-"+d.split("/collections/")[1]+"-cars-in-india";localStorage.setItem("city_id","all"),localStorage.setItem("selected_city","india"),window.location.href=L;F=null}else if(d.indexOf("lakhs")>=0){var T=d.split("-to-"),B=k+"/used-cars-over-"+1e5*T[0].replace(/[^\d.]/g,"")+"-rs-under-"+1e5*T[1].replace(/[^\d.]/g,"")+"-rs-in-india";localStorage.setItem("city_id","all"),localStorage.setItem("selected_city","india"),window.location.href=B;F=null}else F=o.a.lazy((function(){return t.e(14).then(t.bind(null,328))}));var J=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,321))})),q=Object(r.f)((function(e){var n=e.children,t=e.location.pathname;return Object(a.useLayoutEffect)((function(){window.scrollTo(0,0)}),[t]),n||null})),D=function(){localStorage.removeItem("auth"),window.location.href="/"};var A=function(){return Object(u.jsx)(s.a,{basename:"/",children:Object(u.jsx)(a.Suspense,{fallback:Object(u.jsx)("div",{}),children:Object(u.jsx)(q,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:h}),Object(u.jsx)(r.a,{exact:!0,path:"/about",component:b}),Object(u.jsx)(r.a,{exact:!0,path:"/blog",component:m}),Object(u.jsx)(r.a,{exact:!0,path:"/used:id",component:p}),Object(u.jsx)(r.a,{exact:!0,path:"/car-details/:query_path",component:function(e){return Object(a.createElement)(j,Object(i.a)(Object(i.a)({},e),{},{key:window.location.pathname}))}}),Object(u.jsx)(r.a,{exact:!0,path:"/coming-soon",component:f}),Object(u.jsx)(r.a,{exact:!0,path:"/error",component:F}),Object(u.jsx)(r.a,{exact:!0,path:"/contact",component:J}),Object(u.jsx)(r.a,{exact:!0,path:"/privacy-policy",component:x}),Object(u.jsx)(r.a,{exact:!0,path:"/term-condition",component:O}),Object(u.jsx)(r.a,{exact:!0,path:"/contact-us",component:w}),Object(u.jsx)(r.a,{exact:!0,path:"/login",component:y}),Object(u.jsx)(r.a,{exact:!0,path:"/register",component:g}),Object(u.jsx)(r.a,{exact:!0,path:"/logout",component:D}),Object(u.jsx)(r.a,{exact:!0,path:"/dashboard",component:v}),Object(u.jsx)(r.a,{exact:!0,path:"/editprofile",component:P}),Object(u.jsx)(r.a,{exact:!0,path:"/forgotpassword",component:z}),Object(u.jsx)(r.a,{exact:!0,path:"/verifyemail",component:I}),Object(u.jsx)(r.a,{exact:!0,component:F})]})})})})},G=function(e){e&&e instanceof Function&&t.e(30).then(t.bind(null,315)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,l=n.getLCP,c=n.getTTFB;t(e),a(e),o(e),l(e),c(e)}))};t(21),t(22),t(23),t(33),t(34),t(35),t(36),t(37),t(38);c.a.render(Object(u.jsx)(s.a,{basename:"/",children:Object(u.jsx)(A,{})}),document.getElementById("rumble")),G()}},[[39,7,9]]]);
//# sourceMappingURL=main.5cb4a8c2.chunk.js.map