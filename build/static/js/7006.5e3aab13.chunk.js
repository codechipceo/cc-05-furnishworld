"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[7006],{1806:function(e,s,r){var n=r(6161),l=r(4025),a=r(6356);s.A=function(e){var s=e.footerLogo,r=e.spaceBottomClass,i=e.colorClass;return(0,a.jsxs)("div",{className:(0,n.A)("copyright",r,i),children:[(0,a.jsx)("div",{className:"footer-logo",children:(0,a.jsx)(l.N_,{to:"/",children:(0,a.jsx)("img",{alt:"",src:""+s,width:200})})}),(0,a.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,a.jsx)(l.N_,{href:"/",children:"Furnishworld"}),".",(0,a.jsx)("br",{})," All Rights Reserved"]})]})}},7003:function(e,s,r){r.d(s,{A:function(){return t}});var n=r(6161),l=r(1052),a=r(6356),i=function(e){var s,r=e.status,n=e.message,l=e.onValidated;return(0,a.jsxs)("div",{className:"subscribe-form",children:[(0,a.jsxs)("div",{className:"mc-form",children:[(0,a.jsx)("div",{children:(0,a.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,a.jsx)("div",{className:"clear",children:(0,a.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&l({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===r&&(0,a.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===r&&(0,a.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===r&&(0,a.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}})]})},c=function(e){var s=e.mailchimpUrl;return(0,a.jsx)("div",{children:(0,a.jsx)(l.A,{url:s,render:function(e){var s=e.subscribe,r=e.status,n=e.message;return(0,a.jsx)(i,{status:r,message:n,onValidated:function(e){return s(e)}})}})})},t=function(e){var s=e.spaceBottomClass,r=e.spaceLeftClass,l=e.sideMenu,i=e.colorClass,t=e.widgetColorClass;return(0,a.jsxs)("div",{className:(0,n.A)("footer-widget",s,l?"ml-ntv5":r,t),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"SUBSCRIBE"})}),(0,a.jsxs)("div",{className:(0,n.A)("subscribe-style",i),children:[(0,a.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,a.jsx)(c,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},729:function(e,s,r){var n=r(6161),l=r(4025),a=r(6356);s.A=function(e){var s=e.imageUrl,r=e.logoClass;return(0,a.jsx)("div",{className:(0,n.A)(r),children:(0,a.jsx)(l.N_,{to:"/",children:(0,a.jsx)("img",{alt:"",src:""+s,width:200})})})}},6609:function(e,s,r){var n=r(3686),l=r(3924),a=(r(2481),r(6356));s.A=function(e){e.currency,(0,l.Bd)().i18n,(0,n.wA)();return(0,a.jsx)("div",{className:"language-currency-wrap",children:(0,a.jsx)("div",{className:"same-language-currency",children:(0,a.jsx)("p",{children:"Call Us +91 92057 53225"})})})}},3667:function(e,s,r){r.d(s,{A:function(){return c}});var n=r(8057),l=r(8),a=function(){var e=(0,l.useState)(!1),s=(0,n.A)(e,2),r=s[0],a=s[1];return(0,l.useEffect)((function(){var e=function(){var e=window.pageYOffset;a(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[r]),{stick:r,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},i=r(6356),c=function(){var e=a(),s=e.stick,r=e.onClickHandler;return s?(0,i.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:r,children:(0,i.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},7513:function(e,s,r){var n=r(8),l=r(3947),a=r(5327),i=r(3667),c=r(6356);s.A=function(e){var s=e.children,r=e.headerContainerClass,t=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(l.A,{layout:r,top:t,headerPaddingClass:o,headerPositionClass:d}),s,(0,c.jsx)(a.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,c.jsx)(i.A,{})]})}},4497:function(e,s,r){r.r(s);var n=r(8),l=r(8615),a=r(4025),i=r(4385),c=r(5348),t=r(879),o=r(7513),d=r(3671),u=r(6356);s.default=function(){var e=(0,l.zy)().pathname;return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)(t.A,{titleTemplate:"Login",description:"Login page of flone react minimalist eCommerce template."}),(0,u.jsxs)(o.A,{headerTop:"visible",children:[(0,u.jsx)(d.A,{pages:[{label:"Home",path:"/"},{label:"Login Register",path:""+e}]}),(0,u.jsx)("div",{className:"login-register-area pt-100 pb-100",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-lg-7 col-md-12 ms-auto me-auto",children:(0,u.jsx)("div",{className:"login-register-wrapper",children:(0,u.jsxs)(i.A.Container,{defaultActiveKey:"login",children:[(0,u.jsxs)(c.A,{variant:"pills",className:"login-register-tab-list",children:[(0,u.jsx)(c.A.Item,{children:(0,u.jsx)(c.A.Link,{eventKey:"login",children:(0,u.jsx)("h4",{children:"Login"})})}),(0,u.jsx)(c.A.Item,{children:(0,u.jsx)(c.A.Link,{eventKey:"register",children:(0,u.jsx)("h4",{children:"Register"})})})]}),(0,u.jsxs)(i.A.Content,{children:[(0,u.jsx)(i.A.Pane,{eventKey:"login",children:(0,u.jsx)("div",{className:"login-form-container",children:(0,u.jsx)("div",{className:"login-register-form",children:(0,u.jsxs)("form",{children:[(0,u.jsx)("input",{type:"text",name:"user-name",placeholder:"Username"}),(0,u.jsx)("input",{type:"password",name:"user-password",placeholder:"Password"}),(0,u.jsxs)("div",{className:"button-box",children:[(0,u.jsxs)("div",{className:"login-toggle-btn",children:[(0,u.jsx)("input",{type:"checkbox"}),(0,u.jsx)("label",{className:"ml-10",children:"Remember me"}),(0,u.jsx)(a.N_,{to:"/",children:"Forgot Password?"})]}),(0,u.jsx)("button",{type:"submit",children:(0,u.jsx)("span",{children:"Login"})})]})]})})})}),(0,u.jsx)(i.A.Pane,{eventKey:"register",children:(0,u.jsx)("div",{className:"login-form-container",children:(0,u.jsx)("div",{className:"login-register-form",children:(0,u.jsxs)("form",{children:[(0,u.jsx)("input",{type:"text",name:"user-name",placeholder:"Username"}),(0,u.jsx)("input",{type:"password",name:"user-password",placeholder:"Password"}),(0,u.jsx)("input",{name:"user-email",placeholder:"Email",type:"email"}),(0,u.jsx)("div",{className:"button-box",children:(0,u.jsx)("button",{type:"submit",children:(0,u.jsx)("span",{children:"Register"})})})]})})})})]})]})})})})})})]})]})}},3671:function(e,s,r){var n=r(3381),l=r(4025),a=r(6356);s.A=function(e){var s=e.pages;return(0,a.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)(n.A,{children:null===s||void 0===s?void 0:s.map((function(e,r){var i=e.path,c=e.label;return r!==s.length-1?(0,a.jsx)(n.A.Item,{linkProps:{to:i},linkAs:l.N_,children:c},c):(0,a.jsx)(n.A.Item,{active:!0,children:c},c)}))})})})}},5327:function(e,s,r){var n=r(6161),l=r(4025),a=r(1806),i=r(7003),c=r(6356);s.A=function(e){var s=e.backgroundColorClass,r=e.spaceTopClass,t=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.containerClass,m=e.extraFooterClass,h=e.sideMenu;return(0,c.jsx)("footer",{className:(0,n.A)("footer-area",s,r,t,m,o,d),children:(0,c.jsx)("div",{className:"".concat(u||"container"),children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsx)(a.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"ABOUT US"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/about",children:"About us"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"#/",children:"Store location"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/contact",children:"Contact"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"USEFUL LINKS"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"#/",children:"Returns"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"#/",children:"Support Policy"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"#/",children:"Size guide"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,c.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"FOLLOW US"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,c.jsx)(i.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h})})]})})})}},3947:function(e,s,r){r.d(s,{A:function(){return x}});var n=r(8057),l=r(8),a=r(6161),i=r(729),c=r(4370),t=r(8990),o=r(5314),d=r(3686),u=r(6609),m=r(6356),h=function(e){var s=e.borderStyle,r=(0,d.d4)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,a.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,m.jsx)(u.A,{currency:r}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Gate no.02 vijay market Ansari road shastri\xa0park | 110053"," ",(0,m.jsx)("span",{})]})})]})},x=function(e){var s=e.layout,r=e.top,d=e.borderStyle,u=e.headerPaddingClass,x=e.headerPositionClass,f=e.headerBgClass,j=(0,l.useState)(0),v=(0,n.A)(j,2),p=v[0],g=v[1],b=(0,l.useState)(0),N=(0,n.A)(b,2),A=N[0],w=N[1];(0,l.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){g(window.scrollY)};return(0,m.jsxs)("header",{className:(0,a.A)("header-area clearfix",f,x),children:[(0,m.jsx)("div",{className:(0,a.A)("header-top-area",u,"visible"===r?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsx)(h,{borderStyle:d})})}),(0,m.jsx)("div",{className:(0,a.A)(u,"sticky-bar header-res-padding clearfix",p>A&&"stick"),children:(0,m.jsxs)("div",{className:"container-fluid"===s?s:"container",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)(i.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(c.A,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(t.A,{})})]}),(0,m.jsx)(o.A,{})]})})]})}},3276:function(e,s,r){r.d(s,{sE:function(){return a},y:function(){return i}});var n="data-rr-ui-",l="rrUi";function a(e){return"".concat(n).concat(e)}function i(e){return"".concat(l).concat(e)}},3008:function(e,s,r){var n=r(551),l=r(7932),a=r(8);s.A=function(e){var s=e.children,r=e.in,i=e.onExited,c=e.mountOnEnter,t=e.unmountOnExit,o=(0,a.useRef)(null),d=(0,a.useRef)(r),u=(0,n.A)(i);(0,a.useEffect)((function(){r?d.current=!0:u(o.current)}),[r,u]);var m=(0,l.A)(o,s.ref),h=(0,a.cloneElement)(s,{ref:m});return r?h:t||!d.current&&c?null:h}},7753:function(e,s,r){r.d(s,{A:function(){return l}});var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function l(e,s){return n(e.querySelectorAll(s))}},3381:function(e,s,r){r.d(s,{A:function(){return j}});var n=r(1348),l=r(18),a=r(8406),i=r.n(a),c=r(8),t=r(4894),o=r(2646),d=r(6356),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=c.forwardRef((function(e,s){var r=e.bsPrefix,a=e.active,c=void 0!==a&&a,m=e.children,h=e.className,x=e.as,f=void 0===x?"li":x,j=e.linkAs,v=void 0===j?o.A:j,p=e.linkProps,g=void 0===p?{}:p,b=e.href,N=e.title,A=e.target,w=(0,l.A)(e,u),y=(0,t.oU)(r,"breadcrumb-item");return(0,d.jsx)(f,(0,n.A)((0,n.A)({ref:s},w),{},{className:i()(y,h,{active:c}),"aria-current":c?"page":void 0,children:c?m:(0,d.jsx)(v,(0,n.A)((0,n.A)({},g),{},{href:b,title:N,target:A,children:m}))}))}));m.displayName="BreadcrumbItem";var h=m,x=["bsPrefix","className","listProps","children","label","as"],f=c.forwardRef((function(e,s){var r=e.bsPrefix,a=e.className,c=e.listProps,o=void 0===c?{}:c,u=e.children,m=e.label,h=void 0===m?"breadcrumb":m,f=e.as,j=void 0===f?"nav":f,v=(0,l.A)(e,x),p=(0,t.oU)(r,"breadcrumb");return(0,d.jsx)(j,(0,n.A)((0,n.A)({"aria-label":h,className:a,ref:s},v),{},{children:(0,d.jsx)("ol",(0,n.A)((0,n.A)({},o),{},{className:i()(p,null==o?void 0:o.className),children:u}))}))}));f.displayName="Breadcrumb";var j=Object.assign(f,{Item:h})},1322:function(e,s,r){var n=r(1348),l=r(18),a=r(7362),i=r(8406),c=r.n(i),t=r(8),o=r(5866),d=r(8354),u=r(8857),m=r(4672),h=r(6356),x=["className","children","transitionClasses","onEnter"],f=(0,a.A)((0,a.A)({},o.ns,"show"),o._K,"show"),j=t.forwardRef((function(e,s){var r=e.className,a=e.children,i=e.transitionClasses,o=void 0===i?{}:i,j=e.onEnter,v=(0,l.A)(e,x),p=(0,n.A)({in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v),g=(0,t.useCallback)((function(e,s){(0,u.A)(e),null==j||j(e,s)}),[j]);return(0,h.jsx)(m.A,(0,n.A)((0,n.A)({ref:s,addEndListener:d.A},p),{},{onEnter:g,childRef:a.ref,children:function(e,s){return t.cloneElement(a,(0,n.A)((0,n.A)({},s),{},{className:c()("fade",r,a.props.className,f[e],o[e])}))}}))}));j.displayName="Fade",s.A=j}}]);
//# sourceMappingURL=7006.5e3aab13.chunk.js.map