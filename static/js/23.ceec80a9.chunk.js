(this.webpackJsonpvroom=this.webpackJsonpvroom||[]).push([[23],{323:function(e,t,n){"use strict";n.r(t);var a=n(40),r=n(41),s=n(43),i=n(42),o=n(0),c=n(52),d=n.n(c),l=n(49),h=n(55),p=n(50),u=n(61),m=(n(86),n(88),n(44)),f=n(46),v=n.n(f),g=n(1),b=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),1==localStorage.getItem("auth")?(window.location.href="/",Object(u.a)(r,!1)):((r=t.call(this)).state={fname:"",lname:"",email:"",password:"",message:"",isVerified:!1},r)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){v()("#server_response_parent").hide(),this.setState({message:""}),v()(".close").on("click",(function(){v()("#server_response_parent").hide()}))}},{key:"onfNameChange",value:function(e){this.setState({fname:e.target.value})}},{key:"onlNameChange",value:function(e){this.setState({lname:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch(m.a+"/services/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:this.state.fname,lname:this.state.lname,email:this.state.email,password:this.state.password})}).then((function(e){return e.json()})).then((function(e){1==e.message?(t.setState({message:"Success! : Account Create Successfully."}),v()("#server_response").addClass("alert-success"),v()("#server_response_parent").slideDown().delay(5e3).slideUp(),t.resetForm(),t.setState({isVerified:!0})):(t.setState({message:"Oops! : Something bad happened.Please try again later."}),v()("#server_response").addClass("alert-danger"),v()("#server_response_parent").slideDown().delay(5e3).slideUp())}))}},{key:"resetForm",value:function(){this.setState({fname:"",lname:"",email:"",password:""})}},{key:"render",value:function(){return Object(g.jsx)(o.Fragment,{children:Object(g.jsx)("div",{className:"section-padding contact-form-map",children:Object(g.jsx)("div",{className:"container-flude",children:Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"offset-3 col-md-6 text-left",children:[Object(g.jsx)("div",{className:"section-header style-left pb-3",children:Object(g.jsx)("div",{className:"section-heading",children:Object(g.jsx)("h3",{className:"text-custom-black",children:"Create Account"})})}),Object(g.jsx)("div",{className:"col-md-12",id:"server_response_parent",children:Object(g.jsxs)("div",{class:"alert  alert-dismissible fade show ",role:"alert",id:"server_response",children:[this.state.message,Object(g.jsx)("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close",children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})}),Object(g.jsxs)("form",{className:"mb-md-80",onSubmit:this.handleSubmit.bind(this),method:"GET",children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-md-6 mt-3",children:Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",name:"user",className:"form-control form-control-custom",onChange:this.onfNameChange.bind(this),Value:this.state.fname,placeholder:"Enter First Name",required:!0})})}),Object(g.jsx)("div",{className:"col-md-6 mt-3",children:Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",name:"user",className:"form-control form-control-custom",onChange:this.onlNameChange.bind(this),Value:this.state.lname,placeholder:"Enter Last Name",required:!0})})}),Object(g.jsx)("div",{className:"col-md-12 mt-3",children:Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"email",name:"user",className:"form-control form-control-custom",onChange:this.onEmailChange.bind(this),Value:this.state.email,placeholder:"Email Address ",required:!0})})})]}),Object(g.jsxs)("div",{className:"row mt-3",children:[Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("input",{type:"password",name:"password",className:"form-control form-control-custom",onChange:this.onPasswordChange.bind(this),Value:this.state.password,placeholder:"passowrd",required:!0}),Object(g.jsx)("span",{children:"The password policy a minimum of 6 characters"})]})}),Object(g.jsx)("div",{className:"col-md-12 mt-3",children:Object(g.jsx)("button",{type:"submit",className:"btn-first btn-submit",children:"Create Account"})})]})]})]})})})})})}}]),n}(o.Component),j="Register",y=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(o.Fragment,{children:[Object(g.jsxs)(d.a,{children:[Object(g.jsxs)("title",{children:["Vroom-wheel | ",j]}),Object(g.jsx)("meta",{name:"description",content:"#"})]}),Object(g.jsx)(l.a,{}),Object(g.jsx)(h.a,{breadcrumb:{pagename:j}}),Object(g.jsx)(b,{}),Object(g.jsx)(p.a,{})]})}}]),n}(o.Component);t.default=y},86:function(e,t,n){"use strict";var a=n(40),r=n(41),s=n(43),i=n(42),o=n(0),c=n(44),d=n(46),l=n.n(d),h=n(1),p=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={name:"",phone:"",email:"",subject:"",mess:"",message:"",isVerified:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){l()("#server_response_parent").hide(),this.setState({message:""}),l()(".close").on("click",(function(){l()("#server_response_parent").hide()}))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onPhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMessChange",value:function(e){this.setState({mess:e.target.value})}},{key:"reCaptchaLoaded",value:function(e){console.log("Captcha Successfully Loaded",e)}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),this.state.phone.length<10||this.state.phone.length>10)return this.state.phone.length<10?(this.setState({message:"Please enter 10 digits of number."}),l()("#server_response").addClass("alert-danger"),l()("#server_response_parent").slideDown().delay(5e3).slideUp()):this.state.phone.length>10&&(this.setState({message:"Can`t ender more then 10 digits."}),l()("#server_response").addClass("alert-danger"),l()("#server_response_parent").slideDown().delay(5e3).slideUp()),!1;l()("#server_response").removeClass("alert-danger"),fetch(c.a+"/services/contact_insert",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if(1==e.message)return t.setState({message:"Success! : Form submitted Successfully...."}),l()("#server_response").addClass("alert-success"),l()("#server_response_parent").slideDown().delay(5e3).slideUp(),t.resetForm(),void t.setState({isVerified:!0});t.setState({message:"Oops! : Something bad happened.Please try again later."}),l()("#server_response").addClass("alert-danger"),l()("#server_response_parent").slideDown().delay(5e3).slideUp()}))}},{key:"resetForm",value:function(){this.setState({name:"",phone:"",email:"",subject:"",mess:""})}},{key:"render",value:function(){return Object(h.jsx)(o.Fragment,{})}}]),n}(o.Component);t.a=p},88:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(8),i=n.n(s);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,n;function a(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(c(t)),t.handleErrored=t.handleErrored.bind(c(t)),t.handleChange=t.handleChange.bind(c(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(c(t)),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},s.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},s.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},s.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},s.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},s.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},s.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},s.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},s.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},s.componentDidMount=function(){this.explicitRender()},s.componentDidUpdate=function(){this.explicitRender()},s.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},s.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},s.handleRecaptchaRef=function(e){this.captcha=e},s.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return r.a.createElement("div",o({},t,{ref:this.handleRecaptchaRef}))},a}(r.a.Component);d.displayName="ReCAPTCHA",d.propTypes={sitekey:i.a.string.isRequired,onChange:i.a.func,grecaptcha:i.a.object,theme:i.a.oneOf(["dark","light"]),type:i.a.oneOf(["image","audio"]),tabindex:i.a.number,onExpired:i.a.func,onErrored:i.a.func,size:i.a.oneOf(["compact","normal","invisible"]),stoken:i.a.string,hl:i.a.string,badge:i.a.oneOf(["bottomright","bottomleft","inline"])},d.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var l=n(16),h=n.n(l);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}var u={},m=0;var f="onloadcallback";var v,g;(v=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+f+"&render=explicit"},g=(g={callbackName:f,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,r;function s(e,n){var a;return(a=t.call(this,e,n)||this).state={},a.__scriptURL="",a}r=t,(n=s).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var i=s.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+m++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"===typeof v?v():v,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=u[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[g.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),a=g,r=a.globalName,s=a.callbackName,i=a.scriptId;if(r&&"undefined"!==typeof window[r]&&(u[t]={loaded:!0,observers:{}}),u[t]){var o=u[t];return o&&(o.loaded||o.errored)?void this.asyncScriptLoaderHandleLoad(o):void(o.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},u[t]={loaded:!1,observers:c};var d=document.createElement("script");for(var l in d.src=t,d.async=!0,g.attributes)d.setAttribute(l,g.attributes[l]);i&&(d.id=i);var h=function(e){if(u[t]){var n=u[t].observers;for(var a in n)e(n[a])&&delete n[a]}};s&&"undefined"!==typeof window&&(window[s]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=u[t];e&&(e.loaded=!0,h((function(t){return!s&&(t(e),!0)})))},d.onerror=function(){var e=u[t];e&&(e.errored=!0,h((function(t){return t(e),!0})))},document.body.appendChild(d)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===g.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var a=u[e];a&&(delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===g.removeOnUnmount&&delete u[e])},i.render=function(){var t=g.globalName,n=this.props,r=(n.asyncScriptOnLoad,n.forwardedRef),s=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(s[t]="undefined"!==typeof window[t]?window[t]:void 0),s.ref=r,Object(a.createElement)(e,s)},s}(a.Component),r=Object(a.forwardRef)((function(e,t){return Object(a.createElement)(n,p({},e,{forwardedRef:t}))}));return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:i.a.func},h()(r,e)})(d)}}]);
//# sourceMappingURL=23.ceec80a9.chunk.js.map