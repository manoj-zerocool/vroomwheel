(this.webpackJsonpvroom=this.webpackJsonpvroom||[]).push([[6],{33:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(15),c=t.n(l),i=t(10),r=t(2),s=t(9),u=t(1),b=window.location.pathname,d=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(8),t.e(11)]).then(t.bind(null,316))})),h=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(1),t.e(20)]).then(t.bind(null,317))})),j=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(21),t.e(1),t.e(18)]).then(t.bind(null,319))})),m=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(4),t.e(10)]).then(t.bind(null,312))})),p=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(22),t.e(16)]).then(t.bind(null,318))})),f=o.a.lazy((function(){return Promise.all([t.e(15),t.e(25)]).then(t.bind(null,320))})),x=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(4),t.e(12)]).then(t.bind(null,313))})),O=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(4),t.e(13)]).then(t.bind(null,314))})),y=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,321))})),w=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(28)]).then(t.bind(null,322))})),g=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(23)]).then(t.bind(null,323))})),v=o.a.lazy((function(){return Promise.all([t.e(0),t.e(3),t.e(17),t.e(1),t.e(24)]).then(t.bind(null,324))})),P=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(26)]).then(t.bind(null,325))})),z=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(27)]).then(t.bind(null,326))})),I=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(29)]).then(t.bind(null,327))})),S=window.location.protocol,k=window.location.host;if("localhost:3000"==k)var _=S+"//blog.vroomwheel.com";else _=S+"//blog."+k;if(b.indexOf("blogs/news")>=0){var F=b.split("/blogs/news");window.location.href=_+"/"+F[1];var C=null}else if(b.indexOf("collections")>=0&&b.indexOf("lakhs")<=1){var E=_+"/used-"+b.split("/collections/")[1]+"-cars-in-india";localStorage.setItem("city_id","all"),localStorage.setItem("selected_city","india"),window.location.href=E;C=null}else if(b.indexOf("lakhs")>=0){var L=b.split("-to-"),T=_+"/used-cars-over-"+1e5*L[0].replace(/[^\d.]/g,"")+"-rs-under-"+1e5*L[1].replace(/[^\d.]/g,"")+"-rs-in-india";localStorage.setItem("city_id","all"),localStorage.setItem("selected_city","india"),window.location.href=T;C=null}else C=o.a.lazy((function(){return t.e(14).then(t.bind(null,328))}));var B=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,321))})),J=Object(r.f)((function(e){var n=e.children,t=e.location.pathname;return Object(a.useLayoutEffect)((function(){window.scrollTo(0,0)}),[t]),n||null})),q=function(){localStorage.removeItem("auth"),window.location.href="/"};var D=function(){return Object(u.jsx)(s.a,{basename:"/",children:Object(u.jsx)(a.Suspense,{fallback:Object(u.jsx)("div",{}),children:Object(u.jsx)(J,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:d}),Object(u.jsx)(r.a,{exact:!0,path:"/about",component:h}),Object(u.jsx)(r.a,{exact:!0,path:"/blog",component:j}),Object(u.jsx)(r.a,{exact:!0,path:"/used:id",component:m}),Object(u.jsx)(r.a,{exact:!0,path:"/car-details/:query_path",component:function(e){return Object(a.createElement)(p,Object(i.a)(Object(i.a)({},e),{},{key:window.location.pathname}))}}),Object(u.jsx)(r.a,{exact:!0,path:"/coming-soon",component:f}),Object(u.jsx)(r.a,{exact:!0,path:"/error",component:C}),Object(u.jsx)(r.a,{exact:!0,path:"/contact",component:B}),Object(u.jsx)(r.a,{exact:!0,path:"/privacy-policy",component:x}),Object(u.jsx)(r.a,{exact:!0,path:"/term-condition",component:O}),Object(u.jsx)(r.a,{exact:!0,path:"/contact-us",component:y}),Object(u.jsx)(r.a,{exact:!0,path:"/login",component:w}),Object(u.jsx)(r.a,{exact:!0,path:"/register",component:g}),Object(u.jsx)(r.a,{exact:!0,path:"/logout",component:q}),Object(u.jsx)(r.a,{exact:!0,path:"/dashboard",component:v}),Object(u.jsx)(r.a,{exact:!0,path:"/editprofile",component:P}),Object(u.jsx)(r.a,{exact:!0,path:"/forgotpassword",component:z}),Object(u.jsx)(r.a,{exact:!0,path:"/verifyemail",component:I}),Object(u.jsx)(r.a,{exact:!0,component:C})]})})})})},A=function(e){e&&e instanceof Function&&t.e(30).then(t.bind(null,315)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,l=n.getLCP,c=n.getTTFB;t(e),a(e),o(e),l(e),c(e)}))};t(21),t(22),t(23),t(33),t(34),t(35),t(36),t(37),t(38);c.a.render(Object(u.jsx)(s.a,{basename:"/",children:Object(u.jsx)(D,{})}),document.getElementById("rumble")),A()}},[[39,7,9]]]);
//# sourceMappingURL=main.15406abf.chunk.js.map