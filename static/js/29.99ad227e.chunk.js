(this.webpackJsonpvroom=this.webpackJsonpvroom||[]).push([[29],{327:function(e,t,s){"use strict";s.r(t);var a=s(40),c=s(41),n=s(43),i=s(42),r=s(0),l=s(52),o=s.n(l),d=s(49),m=s(55),j=s(50),h=s(61),b=(s(44),s(46)),u=s.n(b),p=s(1),O=function(e){Object(n.a)(s,e);var t=Object(i.a)(s);function s(e){var c;return Object(a.a)(this,s),1==localStorage.getItem("auth")?(window.location.href="/",Object(h.a)(c,!1)):((c=t.call(this)).state={email:"",password:"",message:""},c)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){u()("#server_response_parent").hide(),this.setState({message:""}),u()(".close").on("click",(function(){u()("#server_response_parent").hide()}))}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({message:"Success! : Please wait while redirecting To Collection...."}),u()("#server_response").addClass("alert-success"),u()("#server_response_parent").slideDown().delay(5e3).slideUp(),setTimeout((function(){window.location.href="/forgotpassword"}),3e3)}},{key:"resetForm",value:function(){this.setState({email:"",password:""})}},{key:"render",value:function(){return Object(p.jsx)(r.Fragment,{children:Object(p.jsx)("div",{className:"section-padding contact-form-map",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"offset-3 col-md-6 text-left",children:[Object(p.jsx)("div",{className:"section-header style-left pt-4 pb-3",children:Object(p.jsx)("div",{className:"section-heading text-center",mt:"5",children:Object(p.jsx)("h3",{className:"text-custom-black",children:"Verify Email"})})}),Object(p.jsx)("div",{className:"col-md-12",id:"server_response_parent",children:Object(p.jsxs)("div",{class:"alert  alert-dismissible fade show ",role:"alert",id:"server_response",children:[this.state.message,Object(p.jsx)("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close",children:Object(p.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})}),Object(p.jsxs)("form",{className:"mb-md-80 w-75",onSubmit:this.handleSubmit.bind(this),method:"Get",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"email",name:"email",className:"form-control form-control-custom",onChange:this.onEmailChange.bind(this),Value:this.state.email,placeholder:"Email Address ",required:!0,autoComplete:"off"})})})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12 ",children:Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",className:"btn-first btn-submit w-50",children:"Verify"})})})})]})]})})})})})}}]),s}(r.Component),v="Verify",f=function(e){Object(n.a)(s,e);var t=Object(i.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsxs)(o.a,{children:[Object(p.jsxs)("title",{children:["Vroom-wheel | ",v]}),Object(p.jsx)("meta",{name:"description",content:"#"})]}),Object(p.jsx)(d.a,{}),Object(p.jsx)(m.a,{breadcrumb:{pagename:v}}),Object(p.jsx)(O,{}),Object(p.jsx)(j.a,{})]})}}]),s}(r.Component);t.default=f}}]);
//# sourceMappingURL=29.99ad227e.chunk.js.map