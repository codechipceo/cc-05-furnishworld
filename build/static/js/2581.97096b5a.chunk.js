"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2581],{1806:function(e,s,a){var r=a(6161),l=a(4025),t=a(6356);s.A=function(e){var s=e.footerLogo,a=e.spaceBottomClass,i=e.colorClass;return(0,t.jsxs)("div",{className:(0,r.A)("copyright",a,i),children:[(0,t.jsx)("div",{className:"footer-logo",children:(0,t.jsx)(l.N_,{to:"/",children:(0,t.jsx)("img",{alt:"",src:""+s,width:200})})}),(0,t.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,t.jsx)(l.N_,{href:"/",children:"Furnishworld"}),".",(0,t.jsx)("br",{})," All Rights Reserved"]})]})}},7003:function(e,s,a){a.d(s,{A:function(){return c}});var r=a(6161),l=a(1052),t=a(6356),i=function(e){var s,a=e.status,r=e.message,l=e.onValidated;return(0,t.jsxs)("div",{className:"subscribe-form",children:[(0,t.jsxs)("div",{className:"mc-form",children:[(0,t.jsx)("div",{children:(0,t.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,t.jsx)("div",{className:"clear",children:(0,t.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&l({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===a&&(0,t.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===a&&(0,t.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),"success"===a&&(0,t.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}})]})},n=function(e){var s=e.mailchimpUrl;return(0,t.jsx)("div",{children:(0,t.jsx)(l.A,{url:s,render:function(e){var s=e.subscribe,a=e.status,r=e.message;return(0,t.jsx)(i,{status:a,message:r,onValidated:function(e){return s(e)}})}})})},c=function(e){var s=e.spaceBottomClass,a=e.spaceLeftClass,l=e.sideMenu,i=e.colorClass,c=e.widgetColorClass;return(0,t.jsxs)("div",{className:(0,r.A)("footer-widget",s,l?"ml-ntv5":a,c),children:[(0,t.jsx)("div",{className:"footer-title",children:(0,t.jsx)("h3",{children:"SUBSCRIBE"})}),(0,t.jsxs)("div",{className:(0,r.A)("subscribe-style",i),children:[(0,t.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,t.jsx)(n,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},7513:function(e,s,a){var r=a(8),l=a(3947),t=a(5327),i=a(3667),n=a(6356);s.A=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(l.A,{layout:a,top:c,headerPaddingClass:o,headerPositionClass:d}),s,(0,n.jsx)(t.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,n.jsx)(i.A,{})]})}},2581:function(e,s,a){a.r(s),a.d(s,{default:function(){return w}});var r=a(8),l=a(879),t=a(7513),i=a(3396),n=a(1855),c=JSON.parse('[{"id":1,"title":"Enjoy This Offer Today","subtitle":"New Collection <br /> Sale 40%","image":"/assets/img/slider/slider-17.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Enjoy This Offer Today","subtitle":"New Collection <br /> Sale 20%","image":"/assets/img/slider/slider-18.jpg","url":"/shop-grid-standard"}]'),o=a(4025),d=a(6356),m=function(e){var s=e.data;return(0,d.jsx)("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12 ms-auto",children:(0,d.jsxs)("div",{className:"slider-content-2 slider-animated-1",children:[(0,d.jsx)("h3",{className:"animated no-style",children:s.title}),(0,d.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,d.jsx)("div",{className:"slider-btn slider-btn--style2 btn-hover",children:(0,d.jsx)(o.N_,{className:"animated rounden-btn",to:""+s.url,children:"SHOP NOW"})})]})})})})})},h={effect:"fade",fadeEffect:{crossFade:!0},modules:[i._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},u=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,d.jsx)(n.A,{options:h,children:null===c||void 0===c?void 0:c.map((function(e,s){return(0,d.jsx)(n.q,{children:(0,d.jsx)(m,{data:e})},s)}))})})})},x=a(6161),j=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner17.jpg","title":"Featured Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"right"},{"id":2,"image":"/assets/img/banner/banner18.jpg","title":"New Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"left"}]'),g=function(e){var s=e.data,a=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,x.A)("single-banner-2",a,"right"===s.textAlign&&"align_right"),children:[(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content-2 banner-content-2--style2",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsxs)("h4",{children:[s.subtitle," ",(0,d.jsx)("span",{children:s.price})]}),(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},p=function(e){var s=e.spaceBottomClass,a=e.spaceTopClass;return(0,d.jsx)("div",{className:(0,x.A)("banner-area",a,s),children:(0,d.jsx)("div",{className:"row no-gutters",children:null===j||void 0===j?void 0:j.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,d.jsx)(g,{data:e,spaceBottomClass:"mb-30"})},s)}))})})},v=a(2304),f=a(3559),b=a(2515),N=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner14.jpg","title":"New Arrivals","subtitle":"Choose your products here","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner15.jpg","title":"Featured Products","subtitle":"Choose your products here","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner16.jpg","title":"Best Seller","subtitle":"Choose your products here","link":"/shop-grid-standard"}]'),C=function(e){var s=e.data,a=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,x.A)("single-banner",a),children:[(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content banner-content--style2",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsx)("h4",{children:s.subtitle}),(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,x.A)("banner-area banner-area-2",s,a),children:(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsx)("div",{className:"custom-row-2",children:null===N||void 0===N?void 0:N.map((function(e,s){return(0,d.jsx)("div",{className:"col-xl-4 col-md-6",children:(0,d.jsx)(C,{spaceBottomClass:"mb-10",data:e})},s)}))})})})},y=a(2649),w=function(){return(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)(l.A,{titleTemplate:"Furniture Home",description:"Furniture home of flone react minimalist eCommerce template."}),(0,d.jsxs)(t.A,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",headerTop:"visible",children:[(0,d.jsx)(u,{}),(0,d.jsx)(A,{spaceTopClass:"pt-10",spaceBottomClass:"pb-85"}),(0,d.jsx)(f.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",dateTime:"November 13, 2023 12:12:00",countDownImage:"/assets/img/banner/deal-5.png"}),(0,d.jsx)(v.A,{bgImg:"/assets/img/bg/shape.png",containerClass:"container-fluid",gutterClass:"padding-10-row-col",spaceTopClass:"pt-50",spaceBottomClass:"pb-40"}),(0,d.jsx)(y.A,{category:"furniture",spaceTopClass:"pt-95",sectionTitle:"Best Products"}),(0,d.jsx)(p,{spaceTopClass:"pt-95"}),(0,d.jsx)(b.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",subscribeBtnClass:"dark-red-subscribe"})]})]})}},3559:function(e,s,a){var r=a(6161),l=a(4025),t=a(6932),i=a(6356);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,n=e.dateTime,c=e.countDownImage;return(0,i.jsx)("div",{className:(0,r.A)("funfact-area",s,a),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-md-8 col-lg-6 order-1 order-lg-2",children:(0,i.jsxs)("div",{className:"funfact-content funfact-res text-center",children:[(0,i.jsx)("h2",{children:"Deal of the day"}),(0,i.jsx)("div",{className:"timer",children:(0,i.jsx)(t.A,{date:n})}),(0,i.jsx)("div",{className:"funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover",children:(0,i.jsx)(l.N_,{to:"/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,i.jsx)("div",{className:"col-md-4 col-lg-6 order-2 order-lg-1",children:(0,i.jsx)("div",{className:"funfact-image",children:(0,i.jsx)(l.N_,{to:"/shop-grid-standard",children:(0,i.jsx)("img",{src:""+c,alt:"",className:"img-fluid"})})})})]})})})}},2304:function(e,s,a){a.d(s,{A:function(){return n}});var r=a(6161),l=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-8.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#ccfbe9"},{"id":2,"titleImage":"/assets/img/icon-img/support-9.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#f2fbcc"},{"id":3,"titleImage":"/assets/img/icon-img/support-10.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#ddfbcc"}]'),t=a(6356),i=function(e){var s=e.data,a=e.spaceBottomClass;return(0,t.jsxs)("div",{className:(0,r.A)("support-wrap-3 text-center",a),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,t.jsx)("div",{className:"support-icon-2",children:(0,t.jsx)("img",{className:"animated",src:""+s.iconImage,alt:""})}),(0,t.jsxs)("div",{className:"support-content-3",children:[(0,t.jsx)("img",{src:""+s.titleImage,alt:""}),(0,t.jsx)("p",{children:s.title})]})]})},n=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,n=e.containerClass,c=e.gutterClass,o=e.responsiveClass,d=e.bgImg;return(0,t.jsx)("div",{className:(0,r.A)("support-area hm9-section-padding",s,a,o),style:d?{backgroundImage:"url(".concat(""+d,")")}:{},children:(0,t.jsx)("div",{className:(0,r.A)(n,c),children:(0,t.jsx)("div",{className:"row",children:null===l||void 0===l?void 0:l.map((function(e,s){return(0,t.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,t.jsx)(i,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})}},5327:function(e,s,a){var r=a(6161),l=a(4025),t=a(1806),i=a(7003),n=a(6356);s.A=function(e){var s=e.backgroundColorClass,a=e.spaceTopClass,c=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,m=e.containerClass,h=e.extraFooterClass,u=e.sideMenu;return(0,n.jsx)("footer",{className:(0,r.A)("footer-area",s,a,c,h,o,d),children:(0,n.jsx)("div",{className:"".concat(m||"container"),children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,n.jsx)(t.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,n.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,n.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,n.jsx)("div",{className:"footer-title",children:(0,n.jsx)("h3",{children:"ABOUT US"})}),(0,n.jsx)("div",{className:"footer-list",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(l.N_,{to:"/about",children:"About us"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l.N_,{to:"#/",children:"Store location"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l.N_,{to:"/contact",children:"Contact"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,n.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,n.jsxs)("div",{className:"".concat(u?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,n.jsx)("div",{className:"footer-title",children:(0,n.jsx)("h3",{children:"USEFUL LINKS"})}),(0,n.jsx)("div",{className:"footer-list",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(l.N_,{to:"#/",children:"Returns"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l.N_,{to:"#/",children:"Support Policy"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l.N_,{to:"#/",children:"Size guide"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,n.jsx)("div",{className:"".concat(u?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,n.jsxs)("div",{className:"".concat(u?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,n.jsx)("div",{className:"footer-title",children:(0,n.jsx)("h3",{children:"FOLLOW US"})}),(0,n.jsx)("div",{className:"footer-list",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,n.jsx)("div",{className:"".concat(u?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,n.jsx)(i.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:u})})]})})})}},2649:function(e,s,a){var r=a(6161),l=a(4385),t=a(5348),i=a(7300),n=a(2598),c=a(6356);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.bgColorClass,d=e.category,m=e.sectionTitle;return(0,c.jsx)("div",{className:(0,r.A)("product-area product-area--style2",s,a,o),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"product-tab-slider-wrapper position-relative",children:(0,c.jsxs)(l.A.Container,{defaultActiveKey:"newArrival",children:[(0,c.jsxs)("div",{className:"product-top-bar section-border mb-60",children:[(0,c.jsx)(i.A,{titleText:m}),(0,c.jsxs)(t.A,{variant:"pills",className:"product-tab-list-3 bg-gray-5 text-center",children:[(0,c.jsx)(t.A.Item,{children:(0,c.jsx)(t.A.Link,{eventKey:"newArrival",children:(0,c.jsx)("h4",{children:"New Arrivals"})})}),(0,c.jsx)(t.A.Item,{children:(0,c.jsx)(t.A.Link,{eventKey:"bestSeller",children:(0,c.jsx)("h4",{children:"Best Sellers"})})}),(0,c.jsx)(t.A.Item,{children:(0,c.jsx)(t.A.Link,{eventKey:"saleItems",children:(0,c.jsx)("h4",{children:"Sale Items"})})})]})]}),(0,c.jsxs)(l.A.Content,{children:[(0,c.jsx)(l.A.Pane,{eventKey:"newArrival",children:(0,c.jsx)(n.A,{category:d,type:"new",limit:8,spaceBottomClass:"mb-25"})}),(0,c.jsx)(l.A.Pane,{eventKey:"bestSeller",children:(0,c.jsx)(n.A,{category:d,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})}),(0,c.jsx)(l.A.Pane,{eventKey:"saleItems",children:(0,c.jsx)(n.A,{category:d,type:"saleItems",limit:8,spaceBottomClass:"mb-25",sliderClassName:"swiper-slide"})})]})]})})})})}}}]);
//# sourceMappingURL=2581.97096b5a.chunk.js.map