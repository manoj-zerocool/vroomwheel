(this.webpackJsonpvroom=this.webpackJsonpvroom||[]).push([[19],{113:function(e,a,t){"use strict";var s=t(3),c=t(7),n=t(45),r=t.n(n),i=t(0),o=t.n(i),l=t(47),d=t(79),m=["bsPrefix","variant","size","active","className","block","type","as"],b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,i=e.size,b=e.active,u=e.className,j=e.block,h=e.type,p=e.as,x=Object(c.a)(e,m),f=Object(l.a)(t,"btn"),O=r()(u,f,b&&"active",n&&f+"-"+n,j&&f+"-block",i&&f+"-"+i);if(x.href)return o.a.createElement(d.a,Object(s.a)({},x,{as:p,ref:a,className:r()(O,x.disabled&&"disabled")}));a&&(x.ref=a),h?x.type=h:p||(x.type="button");var g=p||"button";return o.a.createElement(g,Object(s.a)({},x,{className:O}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=b},122:function(e,a,t){"use strict";var s=t(3),c=t(7),n=t(45),r=t.n(n),i=t(0),o=t.n(i),l=t(73),d=t(47),m=t(54),b=o.a.createContext(null);b.displayName="AccordionContext";var u=b,j=["as","children","eventKey","onClick"];var h,p=o.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"button":t,r=e.children,l=e.eventKey,d=e.onClick,b=Object(c.a)(e,j),h=function(e,a){var t=Object(i.useContext)(u),s=Object(i.useContext)(m.a);return function(c){s&&s(e===t?null:e,c),a&&a(c)}}(l,d);return"button"===n&&(b.type="button"),o.a.createElement(n,Object(s.a)({ref:a,onClick:h},b),r)})),x=t(72),f=t(89),O=t(86),g=t(76),v=t(77),N=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],y={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function k(e,a){var t=a["offset"+e[0].toUpperCase()+e.slice(1)],s=y[e];return t+parseInt(Object(x.a)(a,s[0]),10)+parseInt(Object(x.a)(a,s[1]),10)}var w=((h={})[f.c]="collapse",h[f.d]="collapsing",h[f.b]="collapsing",h[f.a]="collapse show",h),E={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:k},C=o.a.forwardRef((function(e,a){var t=e.onEnter,n=e.onEntering,l=e.onEntered,d=e.onExit,m=e.onExiting,b=e.className,u=e.children,j=e.dimension,h=void 0===j?"height":j,p=e.getDimensionValue,x=void 0===p?k:p,y=Object(c.a)(e,N),E="function"===typeof h?h():h,C=Object(i.useMemo)((function(){return Object(g.a)((function(e){e.style[E]="0"}),t)}),[E,t]),P=Object(i.useMemo)((function(){return Object(g.a)((function(e){var a="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[a]+"px"}),n)}),[E,n]),S=Object(i.useMemo)((function(){return Object(g.a)((function(e){e.style[E]=null}),l)}),[E,l]),W=Object(i.useMemo)((function(){return Object(g.a)((function(e){e.style[E]=x(E,e)+"px",Object(v.a)(e)}),d)}),[d,x,E]),T=Object(i.useMemo)((function(){return Object(g.a)((function(e){e.style[E]=null}),m)}),[E,m]);return o.a.createElement(f.e,Object(s.a)({ref:a,addEndListener:O.a},y,{"aria-expanded":y.role?y.in:null,onEnter:C,onEntering:P,onEntered:S,onExit:W,onExiting:T}),(function(e,a){return o.a.cloneElement(u,Object(s.a)({},a,{className:r()(b,u.props.className,w[e],"width"===E&&"width")}))}))}));C.defaultProps=E;var P=C,S=["children","eventKey"],W=o.a.forwardRef((function(e,a){var t=e.children,n=e.eventKey,r=Object(c.a)(e,S),l=Object(i.useContext)(u);return o.a.createElement(m.a.Provider,{value:null},o.a.createElement(P,Object(s.a)({ref:a,in:l===n},r),o.a.createElement("div",null,o.a.Children.only(t))))}));W.displayName="AccordionCollapse";var T=W,I=["as","activeKey","bsPrefix","children","className","onSelect"],R=o.a.forwardRef((function(e,a){var t=Object(l.a)(e,{activeKey:"onSelect"}),n=t.as,i=void 0===n?"div":n,b=t.activeKey,j=t.bsPrefix,h=t.children,p=t.className,x=t.onSelect,f=Object(c.a)(t,I),O=r()(p,Object(d.a)(j,"accordion"));return o.a.createElement(u.Provider,{value:b||null},o.a.createElement(m.a.Provider,{value:x||null},o.a.createElement(i,Object(s.a)({ref:a},f,{className:O}),h)))}));R.displayName="Accordion",R.Toggle=p,R.Collapse=T;a.a=R},123:function(e,a,t){"use strict";var s=t(3),c=t(7),n=t(45),r=t.n(n),i=t(0),o=t.n(i),l=t(47),d=/-(.)/g;var m=["className","bsPrefix","as"],b=function(e){return e[0].toUpperCase()+(a=e,a.replace(d,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e,a){var t=void 0===a?{}:a,n=t.displayName,i=void 0===n?b(e):n,d=t.Component,u=t.defaultProps,j=o.a.forwardRef((function(a,t){var n=a.className,i=a.bsPrefix,b=a.as,u=void 0===b?d||"div":b,j=Object(c.a)(a,m),h=Object(l.a)(i,e);return o.a.createElement(u,Object(s.a)({ref:t,className:r()(n,h)},j))}));return j.defaultProps=u,j.displayName=i,j}var j=function(e){return o.a.forwardRef((function(a,t){return o.a.createElement("div",Object(s.a)({},a,{ref:t,className:r()(a.className,e)}))}))},h=t(78),p=["bsPrefix","className","variant","as"],x=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.variant,d=e.as,m=void 0===d?"img":d,b=Object(c.a)(e,p),u=Object(l.a)(t,"card-img");return o.a.createElement(m,Object(s.a)({ref:a,className:r()(i?u+"-"+i:u,n)},b))}));x.displayName="CardImg",x.defaultProps={variant:null};var f=x,O=["bsPrefix","className","bg","text","border","body","children","as"],g=j("h5"),v=j("h6"),N=u("card-body"),y=u("card-title",{Component:g}),k=u("card-subtitle",{Component:v}),w=u("card-link",{Component:"a"}),E=u("card-text",{Component:"p"}),C=u("card-header"),P=u("card-footer"),S=u("card-img-overlay"),W=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,d=e.bg,m=e.text,b=e.border,u=e.body,j=e.children,p=e.as,x=void 0===p?"div":p,f=Object(c.a)(e,O),g=Object(l.a)(t,"card"),v=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return o.a.createElement(h.a.Provider,{value:v},o.a.createElement(x,Object(s.a)({ref:a},f,{className:r()(n,g,d&&"bg-"+d,m&&"text-"+m,b&&"border-"+b)}),u?o.a.createElement(N,null,j):j))}));W.displayName="Card",W.defaultProps={body:!1},W.Img=f,W.Title=y,W.Subtitle=k,W.Body=N,W.Link=w,W.Text=E,W.Header=C,W.Footer=P,W.ImgOverlay=S;a.a=W},305:function(e){e.exports=JSON.parse('[{"id":1,"title":"Where can one buy used cars online in India?","text":"<p class=\'text-theme\'>When it comes to buying used cars in India, one could not find a better companion for their needs than Vroom Wheel \u2013 the No. 1 search platform for used cars in India. With Vroom Wheel, one can search for their car according to their residence and budget without any hassle.</p>"},{"id":2,"title":"Why should one use Vroom Wheel to search for used cars in India?","text":"<p class=\'text-theme\'>When it comes to buying used cars in India, one could not find a better companion for their needs than Vroom Wheel \u2013 the No. 1 search platform for used cars in India. With Vroom Wheel, one can search for their car according to their residence and budget without any hassle.</p>"},{"id":3,"title":"Do you guarantee the used car I buy from Vroom Wheel?  ","text":"<p class=\'text-theme\'>At Vroom Wheel, we are the search engines for providing used cars of different brands. We have a wide range of options of used cars available for you. You can check our extensive range to find the ideal option for you.</p>"},{"id":4,"title":"How much used car will cost?  ","text":"<p class=\'text-theme\'>The price of a used car depends on various factors such as the model number and brand. You can connect with our professionals and discuss your needs to seize the best deals. We understand your needs and provide you with the best quote that fits your budget.</p>"},{"id":5,"title":"Can you help me compare the prices of used cars? ","text":"<p class=\'text-theme\'> Yes, we provide you with a reliable tool through which you can compare the prices before you buy used cars.</p>"}]')},328:function(e,a,t){"use strict";t.r(a);var s=t(40),c=t(41),n=t(43),r=t(42),i=t(0),o=t(52),l=t.n(o),d=t(49),m=t(55),b=t(50),u=t(305),j=t(122),h=t(123),p=t(113),x=t(82),f=t(1),O=function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)("section",{className:"section-padding bg-light-white faqs",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h6",{className:"d-none",children:"1"}),Object(f.jsx)("div",{className:"col-lg-8",children:Object(f.jsx)(j.a,{defaultActiveKey:1,className:"custom-accordion mb-md-80 d-block",children:u.map((function(e,a){return Object(f.jsxs)(h.a,{children:[Object(f.jsx)(j.a.Collapse,{eventKey:1+a,className:"collapseparent",children:Object(f.jsx)(h.a.Body,{children:Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:e.text}})})}),Object(f.jsx)(h.a.Header,{children:Object(f.jsx)(j.a.Toggle,{as:p.a,variant:"link",eventKey:1+a,children:e.title})})]},a)}))})}),Object(f.jsx)("aside",{className:"col-lg-4",children:Object(f.jsx)("div",{className:"sidebar_wrap",children:Object(f.jsxs)("div",{className:"sidebar",children:[Object(f.jsxs)("div",{className:"sidebar_widgets mb-xl-30",children:[Object(f.jsx)("div",{className:"widget_title",children:Object(f.jsx)("h5",{className:"no-margin text-custom-white",children:"Search"})}),Object(f.jsx)("form",{children:Object(f.jsxs)("div",{className:"input-group group-form",children:[Object(f.jsx)("input",{type:"search",name:"#",className:"form-control form-control-custom",placeholder:"Search"}),Object(f.jsxs)("span",{className:"input-group-append",children:[" ",Object(f.jsx)("i",{className:"fas fa-search"})," "]})]})})]}),Object(f.jsxs)("div",{className:"sidebar_widgets",children:[Object(f.jsx)("div",{className:"widget_title",children:Object(f.jsx)("h5",{className:"no-margin text-custom-white",children:"FAQs Topic"})}),Object(f.jsxs)("form",{className:"checkbox-group",children:[Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{className:"custom-checkbox",children:[Object(f.jsx)("input",{type:"checkbox",name:"#",defaultChecked:!0}),Object(f.jsx)("span",{className:"checkmark"})," All "]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{className:"custom-checkbox",children:[Object(f.jsx)("input",{type:"checkbox",name:"#"}),Object(f.jsx)("span",{className:"checkmark"})," Features "]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{className:"custom-checkbox",children:[Object(f.jsx)("input",{type:"checkbox",name:"#"}),Object(f.jsx)("span",{className:"checkmark"})," Sliders "]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{className:"custom-checkbox",children:[Object(f.jsx)("input",{type:"checkbox",name:"#"}),Object(f.jsx)("span",{className:"checkmark"})," Manage Listing "]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{className:"custom-checkbox",children:[Object(f.jsx)("input",{type:"checkbox",name:"#"}),Object(f.jsx)("span",{className:"checkmark"})," Address & Map "]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{className:"custom-checkbox",children:[Object(f.jsx)("input",{type:"checkbox",name:"#"}),Object(f.jsx)("span",{className:"checkmark"})," Reservation Request "]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{className:"custom-checkbox",children:[Object(f.jsx)("input",{type:"checkbox",name:"#"}),Object(f.jsx)("span",{className:"checkmark"})," Your Reservation "]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{className:"custom-checkbox",children:[Object(f.jsx)("input",{type:"checkbox",name:"#"}),Object(f.jsx)("span",{className:"checkmark"})," Other Questions "]})})]})]})]})})})]})})}),Object(f.jsx)("section",{className:"section-padding partners",children:Object(f.jsx)(x.a,{})})]})}}]),t}(i.Component),g=O,v="FAQ's",N=function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsxs)(l.a,{children:[Object(f.jsxs)("title",{children:["Vroom-wheel | ",v]}),Object(f.jsx)("meta",{name:"description",content:"#"})]}),Object(f.jsx)(d.a,{}),Object(f.jsx)(m.a,{breadcrumb:{pagename:v}}),Object(f.jsx)(g,{}),Object(f.jsx)(b.a,{})]})}}]),t}(i.Component);a.default=N},82:function(e,a,t){"use strict";var s=t(10),c=t(40),n=t(41),r=t(43),i=t(42),o=t(0),l=t(9),d=t(51),m=t.n(d),b=t(83),u=t(1),j={infinite:!0,slidesToShow:7,slidesToScroll:1,arrows:!1,dots:!0,dotsClass:"d-flex slick-dots",autoplay:!0,autoplaySpeed:2e3,speed:500,cssEase:"linear",responsive:[{breakpoint:1200,settings:{arrows:!0,slidesToShow:5}},{breakpoint:768,settings:{arrows:!1,dots:!0,slidesToShow:4}},{breakpoint:576,settings:{arrows:!1,dots:!0,slidesToShow:3}},{breakpoint:400,settings:{arrows:!1,dots:!0,slidesToShow:2}}]},h=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"section-header text-center",children:Object(u.jsx)("div",{className:"section-heading",children:Object(u.jsxs)("h3",{className:"text-custom-black",style:{color:"#2e054e"},children:["Popular ",Object(u.jsx)("span",{className:"text-custom-blue",children:"Brands"})]})})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)(m.a,Object(s.a)(Object(s.a)({className:"carousel"},j),{},{children:b.map((function(e,a){return Object(u.jsxs)("div",{className:"slide-item col-12",children:[Object(u.jsx)("div",{className:"partner-box bx-wrapper animate-img",children:Object(u.jsxs)(l.b,{to:"#",children:[" ",Object(u.jsx)("img",{loading:"lazy",src:"/"+e.img,className:"img-fluid image-fit",alt:"img"})," "]})}),Object(u.jsx)("div",{className:"partner-box bx-wrapper animate-img mt-3",children:Object(u.jsxs)(l.b,{to:"#",children:[" ",Object(u.jsx)("img",{loading:"lazy",src:"/"+e.img,className:"img-fluid image-fit",alt:"img"})," "]})})]},a)}))}))})})]})}}]),t}(o.Component);a.a=h},83:function(e){e.exports=JSON.parse('[{"id":1,"img":"assets/images/logo-1-t.png"},{"id":2,"img":"assets/images/logo-2.png"},{"id":3,"img":"assets/images/logo-3.png"},{"id":4,"img":"assets/images/logo-4.png"},{"id":5,"img":"assets/images/logo-1-t.png"},{"id":6,"img":"assets/images/logo-2.png"},{"id":7,"img":"assets/images/logo-3.png"},{"id":8,"img":"assets/images/logo-4.png"}]')}}]);
//# sourceMappingURL=19.cb2ec390.chunk.js.map