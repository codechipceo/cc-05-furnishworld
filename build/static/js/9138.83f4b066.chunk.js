"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[9138],{6932:function(e,s,a){a.d(s,{A:function(){return o}});var t=a(8057),i=a(6161),r=a(8),n=function(e){var s=new Date(e).getTime(),a=(0,r.useState)(s-(new Date).getTime()),i=(0,t.A)(a,2),n=i[0],l=i[1];return(0,r.useEffect)((function(){if(!(n<=0)){var e=setInterval((function(){l(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,n]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(n)},l=a(6356),c=function(e){var s=e.value,a=e.type;return(0,l.jsxs)("span",{className:"cdown",children:[s," ",(0,l.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,r=n(s),o=(0,t.A)(r,4),d=o[0],u=o[1],m=o[2],p=o[3];return(0,l.jsxs)("div",{className:(0,i.A)("timer timer-style",a),children:[(0,l.jsx)(c,{value:d,type:"days"}),(0,l.jsx)(c,{value:u,type:"hours"}),(0,l.jsx)(c,{value:m,type:"minutes"}),(0,l.jsx)(c,{value:p,type:"secs"})]})}},6609:function(e,s,a){var t=a(3686),i=a(3924),r=(a(2481),a(6356));s.A=function(e){e.currency,(0,i.Bd)().i18n,(0,t.wA)();return(0,r.jsx)("div",{className:"language-currency-wrap",children:(0,r.jsx)("div",{className:"same-language-currency",children:(0,r.jsx)("p",{children:"Call Us +91 92057 53225"})})})}},8868:function(e,s,a){var t=a(6161),i=a(1052),r=a(6356),n=function(e){var s,a=e.status,i=e.message,n=e.onValidated,l=e.spaceTopClass,c=e.subscribeBtnClass;return(0,r.jsx)("div",{className:(0,t.A)("subscribe-form-3",l),children:(0,r.jsxs)("div",{className:"mc-form",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===a&&(0,r.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===a&&(0,r.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}}),"success"===a&&(0,r.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}}),(0,r.jsx)("div",{className:"clear-3 ".concat(c||""),children:(0,r.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&n({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,a=e.spaceTopClass,t=e.subscribeBtnClass;return(0,r.jsx)("div",{children:(0,r.jsx)(i.A,{url:s,render:function(e){var s=e.subscribe,i=e.status,l=e.message;return(0,r.jsx)(n,{status:i,message:l,onValidated:function(e){return s(e)},spaceTopClass:a,subscribeBtnClass:t})}})})}},1759:function(e,s,a){var t=a(8057),i=a(8),r=a(6161),n=a(4025),l=a(3686),c=a(7014),o=a(6026),d=a(3454),u=a(3280),m=a(925),p=a(6356);s.A=function(e){var s=e.product,a=e.currency,h=e.cartItem,x=e.wishlistItem,g=e.compareItem,j=e.spaceBottomClass,v=(0,i.useState)(!1),f=(0,t.A)(v,2),b=f[0],N=f[1],C=(0,o.do)(s.price,s.discount),A=+(s.price*a.currencyRate).toFixed(2),y=+(C*a.currencyRate).toFixed(2),w=(0,l.wA)();return(0,p.jsxs)(i.Fragment,{children:[(0,p.jsxs)("div",{className:(0,r.A)("product-wrap",j),children:[(0,p.jsxs)("div",{className:"product-img",children:[(0,p.jsxs)(n.N_,{to:"/product/"+s.id,children:[(0,p.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,p.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,p.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,p.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,p.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,p.jsxs)("div",{className:"product-action",children:[(0,p.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,p.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to wishlist":"Add to wishlist",onClick:function(){return w((0,m.U4)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,p.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,p.jsx)(n.N_,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,p.jsxs)("button",{onClick:function(){return w((0,u.bE)(s))},className:void 0!==h&&h.quantity>0?"active":"",disabled:void 0!==h&&h.quantity>0,title:void 0!==h?"Added to cart":"Add to cart",children:[" ",(0,p.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==h&&h.quantity>0?"Added":"Add to cart"]}):(0,p.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,p.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,p.jsx)("button",{title:"Quick View",onClick:function(){return N(!0)},children:(0,p.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,p.jsxs)("div",{className:"product-content text-center",children:[(0,p.jsx)("h3",{children:(0,p.jsx)(n.N_,{to:"/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"product-rating",children:(0,p.jsx)(c.A,{ratingValue:s.rating})}):"",(0,p.jsx)("div",{className:"product-price",children:null!==C?(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)("span",{children:a.currencySymbol+y})," ",(0,p.jsx)("span",{className:"old",children:a.currencySymbol+A})]}):(0,p.jsxs)("span",{children:[a.currencySymbol+A," "]})})]})]}),(0,p.jsx)(d.A,{show:b,onHide:function(){return N(!1)},product:s,currency:a,discountedPrice:C,finalProductPrice:A,finalDiscountedPrice:y,wishlistItem:x,compareItem:g})]})}},9531:function(e,s,a){var t=a(6161),i=a(6356);s.A=function(e){var s=e.data,a=e.testimonialClass;return(0,i.jsxs)("div",{className:(0,t.A)(a||"single-testimonial","text-center"),children:[(0,i.jsx)("img",{src:""+s.image,alt:""}),(0,i.jsx)("p",{children:s.content}),(0,i.jsxs)("div",{className:"client-info",children:[(0,i.jsx)("i",{className:"fa fa-map-signs"}),(0,i.jsx)("h5",{children:s.customerName}),(0,i.jsx)("span",{children:s.title})]})]})}},7513:function(e,s,a){var t=a(8),i=a(3947),r=a(5327),n=a(3667),l=a(6356);s.A=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(i.A,{layout:a,top:c,headerPaddingClass:o,headerPositionClass:d}),s,(0,l.jsx)(r.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(n.A,{})]})}},9138:function(e,s,a){a.r(s),a.d(s,{default:function(){return B}});var t=a(8),i=a(879),r=a(7513),n=a(3396),l=a(1855),c=JSON.parse('[{"id":1,"title":"2020 Latest Collection","subtitle":"-30% Offer All <br /> Hand & Made.","image":"/assets/img/slider/slider-14.jpg","url":"/shop-grid-standard"},{"id":2,"title":"2020 Latest Collection","subtitle":"-40% Offer All <br /> Hand & Made.","image":"/assets/img/slider/slider-15.jpg","url":"/shop-grid-standard"}]'),o=a(4025),d=a(6356),u=function(e){var s=e.data;return(0,d.jsx)("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12",children:(0,d.jsxs)("div",{className:"slider-content-2 slider-animated-1",children:[(0,d.jsx)("h3",{className:"animated no-style",children:s.title}),(0,d.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,d.jsx)("div",{className:"slider-btn slider-btn--style2 btn-hover",children:(0,d.jsx)(o.N_,{className:"animated rounden-btn",to:""+s.url,children:"SHOP NOW"})})]})})})})})},m={effect:"fade",fadeEffect:{crossFade:!0},modules:[n._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},p=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,d.jsx)(l.A,{options:m,children:c.map((function(e,s){return(0,d.jsx)(l.q,{children:(0,d.jsx)(u,{data:e})},s)}))})})})},h=a(6161),x=JSON.parse('[{"id":"1","image":"/assets/img/product/category1.jpg","subtitle":"2 Products","title":"New","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/product/category2.jpg","subtitle":"3 Products","title":"Crafts","link":"/shop-grid-standard"},{"id":"3","image":"/assets/img/product/category3.jpg","subtitle":"6 Products","title":"Earthenware","link":"/shop-grid-standard"},{"id":"4","image":"/assets/img/product/category4.jpg","subtitle":"5 Products","title":"Featured","link":"/shop-grid-standard"},{"id":"5","image":"/assets/img/product/category2.jpg","subtitle":"3 Products","title":"Best Products","link":"/shop-grid-standard"}]'),g=function(e){var s=e.data;e.sliderClass;return(0,d.jsxs)("div",{className:"collection-product",children:[(0,d.jsx)("div",{className:"collection-img",children:(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})})}),(0,d.jsxs)("div",{className:"collection-content text-center",children:[(0,d.jsx)("span",{children:s.subtitle}),(0,d.jsx)("h4",{children:(0,d.jsx)(o.N_,{to:""+s.link,children:s.title})}),(0,d.jsx)(o.N_,{to:""+s.link,className:"collection-btn",children:"SHOP NOW"})]})]})},j={loop:!1,spaceBetween:30,autoplay:!0,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:3},992:{slidesPerView:4}}},v=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,h.A)("collections-area",s,a),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"collection-wrap",children:(0,d.jsx)("div",{className:"collection-active",children:x&&(0,d.jsx)(l.A,{options:j,children:x.map((function(e,s){return(0,d.jsx)(l.q,{children:(0,d.jsx)(g,{data:e})},s)}))})})})})})},f=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner9.jpg","title":"Featured Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"right"},{"id":2,"image":"/assets/img/banner/banner10.jpg","title":"New Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"left"}]'),b=function(e){var s=e.data,a=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,h.A)("single-banner-2",a,"right"===s.textAlign&&"align_right"),children:[(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content-2 banner-content-2--style2",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsxs)("h4",{children:[s.subtitle," ",(0,d.jsx)("span",{children:s.price})]}),(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},N=function(e){var s=e.spaceBottomClass;return(0,d.jsx)("div",{className:"banner-area ".concat(s||""),children:(0,d.jsx)("div",{className:"row no-gutters",children:null===f||void 0===f?void 0:f.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,d.jsx)(b,{data:e,spaceBottomClass:"mb-30"})},s)}))})})},C=a(3559),A=a(2304),y=a(2515),w=a(2907),k=a(7865),B=function(){return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)(i.A,{titleTemplate:"Handmade Home",description:"Handmade home of flone react minimalist eCommerce template."}),(0,d.jsxs)(r.A,{headerTop:"visible",children:[(0,d.jsx)(p,{}),(0,d.jsx)(v,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95"}),(0,d.jsx)(N,{}),(0,d.jsx)(k.A,{spaceBottomClass:"pb-65",spaceTopClass:"pt-70",category:"handmade"}),(0,d.jsx)(A.A,{bgImg:"/assets/img/bg/shape.png",containerClass:"container-fluid",gutterClass:"padding-10-row-col",spaceTopClass:"pt-50",spaceBottomClass:"pb-40"}),(0,d.jsx)(C.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",dateTime:"November 13, 2023 12:12:00",countDownImage:"/assets/img/banner/deal-3.png"}),(0,d.jsx)(w.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",bgColorClass:"bg-gray-3"}),(0,d.jsx)(y.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",subscribeBtnClass:"dark-red-subscribe"})]})]})}},3559:function(e,s,a){var t=a(6161),i=a(4025),r=a(6932),n=a(6356);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,l=e.dateTime,c=e.countDownImage;return(0,n.jsx)("div",{className:(0,t.A)("funfact-area",s,a),children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-md-8 col-lg-6 order-1 order-lg-2",children:(0,n.jsxs)("div",{className:"funfact-content funfact-res text-center",children:[(0,n.jsx)("h2",{children:"Deal of the day"}),(0,n.jsx)("div",{className:"timer",children:(0,n.jsx)(r.A,{date:l})}),(0,n.jsx)("div",{className:"funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover",children:(0,n.jsx)(i.N_,{to:"/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,n.jsx)("div",{className:"col-md-4 col-lg-6 order-2 order-lg-1",children:(0,n.jsx)("div",{className:"funfact-image",children:(0,n.jsx)(i.N_,{to:"/shop-grid-standard",children:(0,n.jsx)("img",{src:""+c,alt:"",className:"img-fluid"})})})})]})})})}},2304:function(e,s,a){a.d(s,{A:function(){return l}});var t=a(6161),i=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-8.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#ccfbe9"},{"id":2,"titleImage":"/assets/img/icon-img/support-9.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#f2fbcc"},{"id":3,"titleImage":"/assets/img/icon-img/support-10.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#ddfbcc"}]'),r=a(6356),n=function(e){var s=e.data,a=e.spaceBottomClass;return(0,r.jsxs)("div",{className:(0,t.A)("support-wrap-3 text-center",a),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,r.jsx)("div",{className:"support-icon-2",children:(0,r.jsx)("img",{className:"animated",src:""+s.iconImage,alt:""})}),(0,r.jsxs)("div",{className:"support-content-3",children:[(0,r.jsx)("img",{src:""+s.titleImage,alt:""}),(0,r.jsx)("p",{children:s.title})]})]})},l=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,l=e.containerClass,c=e.gutterClass,o=e.responsiveClass,d=e.bgImg;return(0,r.jsx)("div",{className:(0,t.A)("support-area hm9-section-padding",s,a,o),style:d?{backgroundImage:"url(".concat(""+d,")")}:{},children:(0,r.jsx)("div",{className:(0,t.A)(l,c),children:(0,r.jsx)("div",{className:"row",children:null===i||void 0===i?void 0:i.map((function(e,s){return(0,r.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,r.jsx)(n,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})}},3947:function(e,s,a){a.d(s,{A:function(){return h}});var t=a(8057),i=a(8),r=a(6161),n=a(729),l=a(4370),c=a(8990),o=a(5314),d=a(3686),u=a(6609),m=a(6356),p=function(e){var s=e.borderStyle,a=(0,d.d4)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,r.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,m.jsx)(u.A,{currency:a}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Gate no.02 vijay market Ansari road shastri\xa0park | 110053"," ",(0,m.jsx)("span",{})]})})]})},h=function(e){var s=e.layout,a=e.top,d=e.borderStyle,u=e.headerPaddingClass,h=e.headerPositionClass,x=e.headerBgClass,g=(0,i.useState)(0),j=(0,t.A)(g,2),v=j[0],f=j[1],b=(0,i.useState)(0),N=(0,t.A)(b,2),C=N[0],A=N[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return A(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){f(window.scrollY)};return(0,m.jsxs)("header",{className:(0,r.A)("header-area clearfix",x,h),children:[(0,m.jsx)("div",{className:(0,r.A)("header-top-area",u,"visible"===a?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsx)(p,{borderStyle:d})})}),(0,m.jsx)("div",{className:(0,r.A)(u,"sticky-bar header-res-padding clearfix",v>C&&"stick"),children:(0,m.jsxs)("div",{className:"container-fluid"===s?s:"container",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)(n.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(l.A,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(c.A,{})})]}),(0,m.jsx)(o.A,{})]})})]})}},2515:function(e,s,a){var t=a(6161),i=a(8868),r=a(6356);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,n=e.subscribeBtnClass,l=e.bgColorClass,c=e.subscribeColorClass;return(0,r.jsx)("div",{className:(0,t.A)("subscribe-area-3",l,s,a),children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 mx-auto",children:(0,r.jsxs)("div",{className:(0,t.A)("subscribe-style-3 text-center",c),children:[(0,r.jsx)("h2",{children:"Join With Us! "}),(0,r.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,r.jsx)(i.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:n})]})})})})})}},3775:function(e,s,a){var t=a(8),i=a(3686),r=a(6026),n=a(1759),l=a(6356);s.A=function(e){var s=e.spaceBottomClass,a=e.category,c=e.type,o=e.limit,d=(0,i.d4)((function(e){return e.product})).products,u=(0,i.d4)((function(e){return e.currency})),m=(0,i.d4)((function(e){return e.cart})).cartItems,p=(0,i.d4)((function(e){return e.wishlist})).wishlistItems,h=(0,i.d4)((function(e){return e.compare})).compareItems,x=(0,r.d$)(d,a,c,o);return(0,l.jsx)(t.Fragment,{children:null===x||void 0===x?void 0:x.map((function(e){return(0,l.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,l.jsx)(n.A,{spaceBottomClass:s,product:e,currency:u,cartItem:m.find((function(s){return s.id===e.id})),wishlistItem:p.find((function(s){return s.id===e.id})),compareItem:h.find((function(s){return s.id===e.id}))})},e.id)}))})}},7865:function(e,s,a){var t=a(6161),i=a(4385),r=a(5348),n=a(1756),l=a(3775),c=a(6356);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.bgColorClass,d=e.category;return(0,c.jsx)("div",{className:(0,t.A)("product-area",s,a,o),children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(n.A,{titleText:"Daily Deals",positionClass:"text-center",borderClass:"no-border"}),(0,c.jsxs)(i.A.Container,{defaultActiveKey:"bestSeller",children:[(0,c.jsxs)(r.A,{variant:"pills",className:"product-tab-list pt-30 pb-55 text-center",children:[(0,c.jsx)(r.A.Item,{children:(0,c.jsx)(r.A.Link,{eventKey:"newArrival",children:(0,c.jsx)("h4",{children:"New Arrivals"})})}),(0,c.jsx)(r.A.Item,{children:(0,c.jsx)(r.A.Link,{eventKey:"bestSeller",children:(0,c.jsx)("h4",{children:"Best Sellers"})})}),(0,c.jsx)(r.A.Item,{children:(0,c.jsx)(r.A.Link,{eventKey:"saleItems",children:(0,c.jsx)("h4",{children:"Sale Items"})})})]}),(0,c.jsxs)(i.A.Content,{children:[(0,c.jsx)(i.A.Pane,{eventKey:"newArrival",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.A,{category:d,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,c.jsx)(i.A.Pane,{eventKey:"bestSeller",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.A,{category:d,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,c.jsx)(i.A.Pane,{eventKey:"saleItems",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.A,{category:d,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]})]})})}},2907:function(e,s,a){var t=a(6161),i=a(1855),r=a(5672),n=a(9531),l=a(6356),c={slidesPerView:1,loop:!0,autoplay:!0};s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.bgColorClass,m=e.testimonialClass;return(0,l.jsx)("div",{className:(0,t.A)("testimonial-area",s,a,o,d,u),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,l.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:r&&(0,l.jsx)(i.A,{options:c,children:r.map((function(e,s){return(0,l.jsx)(i.q,{children:(0,l.jsx)(n.A,{data:e,testimonialClass:m})},s)}))})})})})})})}},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=9138.83f4b066.chunk.js.map