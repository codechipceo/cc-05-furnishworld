"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[9081],{1806:function(e,s,n){var i=n(6161),t=n(4025),r=n(6356);s.A=function(e){var s=e.footerLogo,n=e.spaceBottomClass,a=e.colorClass;return(0,r.jsxs)("div",{className:(0,i.A)("copyright",n,a),children:[(0,r.jsx)("div",{className:"footer-logo",children:(0,r.jsx)(t.N_,{to:"/",children:(0,r.jsx)("img",{alt:"",src:""+s})})}),(0,r.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,r.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),".",(0,r.jsx)("br",{})," All Rights Reserved"]})]})}},7003:function(e,s,n){n.d(s,{A:function(){return c}});var i=n(6161),t=n(1052),r=n(6356),a=function(e){var s,n=e.status,i=e.message,t=e.onValidated;return(0,r.jsxs)("div",{className:"subscribe-form",children:[(0,r.jsxs)("div",{className:"mc-form",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,r.jsx)("div",{className:"clear",children:(0,r.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&t({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===n&&(0,r.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===n&&(0,r.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}}),"success"===n&&(0,r.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}})]})},l=function(e){var s=e.mailchimpUrl;return(0,r.jsx)("div",{children:(0,r.jsx)(t.A,{url:s,render:function(e){var s=e.subscribe,n=e.status,i=e.message;return(0,r.jsx)(a,{status:n,message:i,onValidated:function(e){return s(e)}})}})})},c=function(e){var s=e.spaceBottomClass,n=e.spaceLeftClass,t=e.sideMenu,a=e.colorClass,c=e.widgetColorClass;return(0,r.jsxs)("div",{className:(0,i.A)("footer-widget",s,t?"ml-ntv5":n,c),children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h3",{children:"SUBSCRIBE"})}),(0,r.jsxs)("div",{className:(0,i.A)("subscribe-style",a),children:[(0,r.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,r.jsx)(l,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},729:function(e,s,n){var i=n(6161),t=n(4025),r=n(6356);s.A=function(e){var s=e.imageUrl,n=e.logoClass;return(0,r.jsx)("div",{className:(0,i.A)(n),children:(0,r.jsx)(t.N_,{to:"/",children:(0,r.jsx)("img",{alt:"",src:""+s})})})}},6609:function(e,s,n){var i=n(3686),t=n(3924),r=(n(2481),n(6356));s.A=function(e){e.currency,(0,t.Bd)().i18n,(0,i.wA)();return(0,r.jsx)("div",{className:"language-currency-wrap",children:(0,r.jsx)("div",{className:"same-language-currency",children:(0,r.jsx)("p",{children:"Call Us +91 92057 53225"})})})}},8868:function(e,s,n){var i=n(6161),t=n(1052),r=n(6356),a=function(e){var s,n=e.status,t=e.message,a=e.onValidated,l=e.spaceTopClass,c=e.subscribeBtnClass;return(0,r.jsx)("div",{className:(0,i.A)("subscribe-form-3",l),children:(0,r.jsxs)("div",{className:"mc-form",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===n&&(0,r.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===n&&(0,r.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:t}}),"success"===n&&(0,r.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:t}}),(0,r.jsx)("div",{className:"clear-3 ".concat(c||""),children:(0,r.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&a({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,n=e.spaceTopClass,i=e.subscribeBtnClass;return(0,r.jsx)("div",{children:(0,r.jsx)(t.A,{url:s,render:function(e){var s=e.subscribe,t=e.status,l=e.message;return(0,r.jsx)(a,{status:t,message:l,onValidated:function(e){return s(e)},spaceTopClass:n,subscribeBtnClass:i})}})})}},3454:function(e,s,n){var i=n(8057),t=n(8),r=n(3396),a=n(6431),l=n(3686),c=n(7014),o=n(1855),d=n(6026),u=(n(3280),n(925)),m=n(5761),h=n(4025),x=n(6356);s.A=function(e){var s=e.product,n=e.currency,p=e.discountedPrice,f=e.finalProductPrice,j=e.finalDiscountedPrice,v=e.show,g=e.onHide,b=e.wishlistItem,N=e.compareItem,w=(0,t.useState)(null),A=(0,i.A)(w,2),C=A[0],y=A[1],S=(0,l.wA)(),k=(0,l.d4)((function(e){return e.cart})).cartItems,I=(0,t.useState)(s.variation?s.variation[0].color:""),B=(0,i.A)(I,2),_=B[0],L=(B[1],(0,t.useState)(s.variation?s.variation[0].size[0].name:"")),T=(0,i.A)(L,2),P=T[0],q=(T[1],(0,t.useState)(s.variation?s.variation[0].size[0].stock:s.stock)),F=(0,i.A)(q,2),E=F[0],U=(F[1],(0,t.useState)(1)),O=(0,i.A)(U,2),H=O[0],z=O[1],R=(0,d.pQ)(k,s,_,P),M={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:C},modules:[r._R,r.WO]},V={onSwiper:y,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,x.jsxs)(a.A,{show:v,onHide:function(){y(null),g()},className:"product-quickview-modal-wrapper",children:[(0,x.jsx)(a.A.Header,{closeButton:!0}),(0,x.jsx)("div",{className:"modal-body",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,x.jsx)("div",{className:"product-large-image-wrapper",children:(0,x.jsx)(o.A,{options:M,children:s.productImages&&s.productImages.map((function(e,s){return(0,x.jsx)(o.q,{children:(0,x.jsx)("div",{className:"single-image",children:(0,x.jsx)("img",{src:e.imageUrl,className:"img-fluid",alt:"Product"})})},s)}))})}),(0,x.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,x.jsx)(o.A,{options:V,children:s.productImages&&s.productImages.map((function(e,s){return(0,x.jsx)(o.q,{children:(0,x.jsx)("div",{className:"single-image",children:(0,x.jsx)("img",{src:e.imageUrl,className:"img-fluid",alt:""})})},s)}))})})]}),(0,x.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,x.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,x.jsx)("h2",{children:s.productTitle}),(0,x.jsx)("div",{className:"product-details-price",children:null!==p?(0,x.jsxs)(t.Fragment,{children:[(0,x.jsx)("span",{children:n.currencySymbol+j})," ",(0,x.jsx)("span",{className:"old",children:n.currencySymbol+f})]}):(0,x.jsxs)("span",{children:[n.currencySymbol+f," "]})}),s.rating&&s.rating>0?(0,x.jsx)("div",{className:"pro-details-rating-wrap",children:(0,x.jsx)("div",{className:"pro-details-rating",children:(0,x.jsx)(c.A,{ratingValue:s.rating})})}):"",(0,x.jsx)("div",{className:"pro-details-list",children:(0,x.jsx)("p",{children:s.productDescription})}),s._id?(0,x.jsx)("div",{className:"pro-details-quality",children:(0,x.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,x.jsx)(h.N_,{to:"/product/".concat(s._id),rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,x.jsxs)("div",{className:"pro-details-quality",children:[(0,x.jsxs)("div",{className:"cart-plus-minus",children:[(0,x.jsx)("button",{onClick:function(){return z(H>1?H-1:1)},className:"dec qtybutton",children:"-"}),(0,x.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:H,readOnly:!0}),(0,x.jsx)("button",{onClick:function(){return z(H<E-R?H+1:H)},className:"inc qtybutton",children:"+"})]}),(0,x.jsx)("div",{className:"pro-details-cart btn-hover"}),(0,x.jsx)("div",{className:"pro-details-wishlist",children:(0,x.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,u.U4)(s))},children:(0,x.jsx)("i",{className:"pe-7s-like"})})}),(0,x.jsx)("div",{className:"pro-details-compare",children:(0,x.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Added to compare":"Add to compare",onClick:function(){return S((0,m.wL)(s))},children:(0,x.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},7014:function(e,s,n){var i=n(8),t=n(6356);s.A=function(e){for(var s=e.ratingValue,n=[],r=0;r<5;r++)n.push((0,t.jsx)("i",{className:"fa fa-star-o"},r));if(s&&s>0)for(var a=0;a<=s-1;a++)n[a]=(0,t.jsx)("i",{className:"fa fa-star-o yellow"},a);return(0,t.jsx)(i.Fragment,{children:n})}},3667:function(e,s,n){n.d(s,{A:function(){return l}});var i=n(8057),t=n(8),r=function(){var e=(0,t.useState)(!1),s=(0,i.A)(e,2),n=s[0],r=s[1];return(0,t.useEffect)((function(){var e=function(){var e=window.pageYOffset;r(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[n]),{stick:n,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},a=n(6356),l=function(){var e=r(),s=e.stick,n=e.onClickHandler;return s?(0,a.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:n,children:(0,a.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},1486:function(e,s,n){var i=n(6161),t=n(6356);s.A=function(e){var s=e.titleText,n=e.positionClass,r=e.spaceClass,a=e.colorClass;return(0,t.jsx)("div",{className:(0,i.A)("section-title-5",n,r),children:(0,t.jsx)("h2",{className:(0,i.A)(a),children:s})})}},1855:function(e,s,n){n.d(s,{q:function(){return c.qr}});var i=n(737),t=n(1348),r=n(8),a=n(6161),l=n(3396),c=n(1440),o=n(6356),d=(0,r.forwardRef)((function(e,s){var n=e.options,r=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,h=e.navClass,x=void 0!==(null===n||void 0===n?void 0:n.modules)?n.modules:[],p="prev-".concat(h||"swiper-nav"),f="next-".concat(h||"swiper-nav"),j=(0,t.A)((0,t.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===n||void 0===n||!n.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},n),{},{modules:[l.Vx,l.dK,l.Jq,l.Ij].concat((0,i.A)(x)),navigation:!(null===n||void 0===n||!n.navigation)&&{prevEl:".".concat(p),nextEl:".".concat(f)},pagination:!(null===n||void 0===n||!n.pagination)&&{clickable:!0}});return(0,o.jsxs)("div",{className:(0,a.A)("swiper-wrap",m),ref:s,children:[(0,o.jsx)(c.RC,(0,t.A)((0,t.A)({},j),{},{children:u})),(null===j||void 0===j?void 0:j.navigation)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(p),children:(0,o.jsx)("i",{className:(0,a.A)(r,"icon")})}),(0,o.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(f),children:(0,o.jsx)("i",{className:(0,a.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.A=d},9531:function(e,s,n){var i=n(6161),t=n(6356);s.A=function(e){var s=e.data,n=e.testimonialClass;return(0,t.jsxs)("div",{className:(0,i.A)(n||"single-testimonial","text-center"),children:[(0,t.jsx)("img",{src:""+s.image,alt:""}),(0,t.jsx)("p",{children:s.content}),(0,t.jsxs)("div",{className:"client-info",children:[(0,t.jsx)("i",{className:"fa fa-map-signs"}),(0,t.jsx)("h5",{children:s.customerName}),(0,t.jsx)("span",{children:s.title})]})]})}},6026:function(e,s,n){n.d(s,{Gj:function(){return c},L:function(){return p},SC:function(){return d},VI:function(){return u},d$:function(){return t},do:function(){return r},e1:function(){return l},nL:function(){return x},pQ:function(){return a},sQ:function(){return f},ur:function(){return h},zf:function(){return m}});var i=n(737),t=function(e,s,n,i){var t=s?e.filter((function(e){return e.category.filter((function(e){return e===s}))[0]})):e;if(n&&"new"===n){var r=t.filter((function(e){return e.new}));return r.slice(0,i||r.length)}if(n&&"bestSeller"===n)return t.sort((function(e,s){return s.saleCount-e.saleCount})).slice(0,i||t.length);if(n&&"saleItems"===n){var a=t.filter((function(e){return e.discount&&e.discount>0}));return a.slice(0,i||a.length)}return t.slice(0,i||t.length)},r=function(e,s){return s&&s>0?e-e*(s/100):null},a=function(e,s,n,i){var t=e.find((function(e){return e.id===s.id&&(!e.selectedProductColor||e.selectedProductColor===n)&&(!e.selectedProductSize||e.selectedProductSize===i)}));return e.length>=1&&t?s.variation?e.find((function(e){return e.id===s.id&&e.selectedProductColor===n&&e.selectedProductSize===i})).quantity:e.find((function(e){return s.id===e.id})).quantity:0},l=function(e,s,n){return e.stock?e.stock:e.variation.filter((function(e){return e.color===s}))[0].size.filter((function(e){return e.name===n}))[0].stock},c=function(e,s,n){if(e&&s&&n){if("category"===s)return e.filter((function(e){return e.category.filter((function(e){return e===n}))[0]}));if("tag"===s)return e.filter((function(e){return e.tag.filter((function(e){return e===n}))[0]}));if("color"===s)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===n}))[0]}));if("size"===s)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===n}))[0]}))[0]}));if("filterSort"===s){var t=(0,i.A)(e);if("default"===n)return t;if("priceHighToLow"===n)return t.sort((function(e,s){return s.price-e.price}));if("priceLowToHigh"===n)return t.sort((function(e,s){return e.price-s.price}))}}return e},o=function(e){return e.filter((function(e,s,n){return s===n.indexOf(e)}))},d=function(e){var s=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return s.push(e)}))})),o(s)},u=function(e){var s=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return s.push(e)}))})),o(s)},m=function(e){var s=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return s.push(e.color)}))})),o(s)},h=function(e){var s=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return s.push(e.name)}))}))})),o(s)},x=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},p=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},f=function(e){var s=document.querySelector("#product-filter-wrapper");s.classList.toggle("active"),s.style.height?s.style.height=null:s.style.height=s.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},4763:function(e,s,n){n.d(s,{A:function(){return p}});var i=n(8),t=n(8057),r=n(3686),a=n(729),l=n(8990),c=n(4370),o=n(5314),d=n(6609),u=n(6356),m=function(){var e=(0,i.useState)(0),s=(0,t.A)(e,2),n=s[0],m=s[1],h=(0,i.useState)(0),x=(0,t.A)(h,2),p=x[0],f=x[1],j=(0,r.d4)((function(e){return e.currency}));(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return f(e.offsetTop),window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[]);var v=function(){m(window.scrollY)};return(0,u.jsxs)("header",{className:"header-area clearfix header-hm9 transparent-bar",children:[(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"header-top-area d-none d-lg-block",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-lg-5 col-md-8 col-12",children:(0,u.jsx)(d.A,{currency:j})}),(0,u.jsx)("div",{className:"col-lg-2 d-none d-lg-block text-center",children:(0,u.jsx)(a.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo-hm-9"})}),(0,u.jsx)("div",{className:"col-lg-5 col-md-4 col-12",children:(0,u.jsx)(l.A,{})})]})})}),(0,u.jsx)("div",{className:"header-bottom sticky-bar header-res-padding header-padding-2 ".concat(n>p?"stick":""),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,u.jsx)(a.A,{imageUrl:"/assets/img/logo/logo.png"})}),(0,u.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,u.jsx)(l.A,{})}),(0,u.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,u.jsx)(c.A,{})})]}),(0,u.jsx)(o.A,{})]})})]})},h=n(5327),x=n(3667),p=function(e){var s=e.children,n=e.footerBgClass;return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(m,{}),s,(0,u.jsx)(h.A,{backgroundColorClass:n||"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,u.jsx)(x.A,{})]})}},1462:function(e,s,n){n.r(s),n.d(s,{default:function(){return w}});var i=n(8),t=n(879),r=n(4763),a=n(3396),l=n(1855),c=JSON.parse('[{"id":1,"title":"New Arrivals","subtitle":"Fresh Your Mind & <br/> Feeling love","image":"/assets/img/slider/slider-10.jpg","url":"/shop-grid-standard"},{"id":2,"title":"New Arrivals","subtitle":"Fresh Your Mind & <br/> Feeling love","image":"/assets/img/slider/slider-10-2.jpg","url":"/shop-grid-standard"}]'),o=n(4025),d=n(6356),u=function(e){var s=e.data;return(0,d.jsx)("div",{className:"single-slider-2 slider-height-9 d-flex align-items-center slider-height-res hm-13-slider",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12",children:(0,d.jsxs)("div",{className:"slider-content-7 slider-content-mrg-hm17 slider-animated-1",children:[(0,d.jsx)("h3",{className:"animated",children:s.title}),(0,d.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,d.jsx)("div",{className:"slider-btn-9 btn-hover",children:(0,d.jsx)(o.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},m={effect:"fade",fadeEffect:{crossFade:!0},modules:[a._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},h=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,d.jsx)(l.A,{options:m,children:c.map((function(e,s){return(0,d.jsx)(l.q,{children:(0,d.jsx)(u,{data:e})},s)}))})})})},x=n(6161),p=function(e){var s=e.spaceTopClass,n=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,x.A)("banner-area",s,n),children:(0,d.jsx)("div",{className:"container padding-20-row-col",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,d.jsxs)("div",{className:"single-banner mb-20",children:[(0,d.jsx)(o.N_,{to:"/shop-grid-standard",children:(0,d.jsx)("img",{src:"/assets/img/banner/banner-32.png",alt:""})}),(0,d.jsxs)("div",{className:"banner-content-4 banner-position-hm15-2 pink-banner",children:[(0,d.jsx)("span",{children:"-20% Off"}),(0,d.jsx)("h2",{children:"New Tulip"}),(0,d.jsx)("h5",{children:"Best for your Mind."}),(0,d.jsx)(o.N_,{to:"/shop-grid-standard",children:"SHOP NOW"})]})]})}),(0,d.jsxs)("div",{className:"col-lg-6 col-md-6",children:[(0,d.jsxs)("div",{className:"single-banner mb-20",children:[(0,d.jsx)(o.N_,{to:"/shop-grid-standard",children:(0,d.jsx)("img",{src:"/assets/img/banner/banner-33.png",alt:""})}),(0,d.jsxs)("div",{className:"banner-content-3 banner-position-hm15-2 pink-banner",children:[(0,d.jsx)("h3",{children:"Pink Tulip "}),(0,d.jsxs)("p",{children:["Starting At ",(0,d.jsx)("span",{children:"$99.00"})]}),(0,d.jsx)(o.N_,{to:"/shop-grid-standard",children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]}),(0,d.jsxs)("div",{className:"single-banner mb-20",children:[(0,d.jsx)(o.N_,{to:"/shop-grid-standard",children:(0,d.jsx)("img",{src:"/assets/img/banner/banner-34.png",alt:""})}),(0,d.jsxs)("div",{className:"banner-content-3 banner-position-hm17-1 pink-banner",children:[(0,d.jsx)("h3",{children:"Pink Tulip "}),(0,d.jsxs)("p",{children:["Starting At ",(0,d.jsx)("span",{children:"$99.00"})]}),(0,d.jsx)(o.N_,{to:"/shop-grid-standard",children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})]})]})})})},f=n(7008),j=n(2907),v=n(7049),g=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-35.png","title":"Flower","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-36.png","title":"Flower","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-37.png","title":"Flower","subtitle":"Starting at","price":"$29.00","link":"/shop-grid-standard"}]'),b=function(e){var s=e.data,n=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,x.A)("single-banner",n),children:[(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content banner-pink",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsxs)("h4",{children:[s.subtitle," ",(0,d.jsx)("span",{children:s.price})]}),(0,d.jsx)(o.N_,{to:s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},N=function(e){var s=e.spaceTopClass,n=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,x.A)("banner-area",s,n),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:null===g||void 0===g?void 0:g.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,d.jsx)(b,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},w=function(){return(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)(t.A,{titleTemplate:"Flower Shop Home",description:"Flower Shop home of flone react minimalist eCommerce template."}),(0,d.jsxs)(r.A,{children:[(0,d.jsx)(h,{}),(0,d.jsx)(p,{spaceTopClass:"pt-100",spaceBottomClass:"pb-80"}),(0,d.jsx)(f.A,{spaceBottomClass:"pb-100",category:"flower",productTabClass:"product-tab-pink2"}),(0,d.jsx)(j.A,{}),(0,d.jsx)(N,{spaceTopClass:"pt-95",spaceBottomClass:"pb-70"}),(0,d.jsx)(v.A,{spaceBottomClass:"pb-100",subscribeBtnClass:"pink-subscribe"})]})]})}},5327:function(e,s,n){var i=n(6161),t=n(4025),r=n(1806),a=n(7003),l=n(6356);s.A=function(e){var s=e.backgroundColorClass,n=e.spaceTopClass,c=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.containerClass,m=e.extraFooterClass,h=e.sideMenu;return(0,l.jsx)("footer",{className:(0,i.A)("footer-area",s,n,c,m,o,d),children:(0,l.jsx)("div",{className:"".concat(u||"container"),children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsx)(r.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"ABOUT US"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(t.N_,{to:"/about",children:"About us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.N_,{to:"#/",children:"Store location"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.N_,{to:"/contact",children:"Contact"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"USEFUL LINKS"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(t.N_,{to:"#/",children:"Returns"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.N_,{to:"#/",children:"Support Policy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.N_,{to:"#/",children:"Size guide"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,l.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"FOLLOW US"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,l.jsx)(a.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h})})]})})})}},7049:function(e,s,n){var i=n(6161),t=n(8868),r=n(6356);s.A=function(e){var s=e.spaceTopClass,n=e.spaceBottomClass,a=e.subscribeBtnClass;return(0,r.jsx)("div",{className:(0,i.A)("subscribe-area-3",s,n),children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,r.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,r.jsx)("h2",{children:"Subscribe "}),(0,r.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,r.jsx)(t.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:a})]})})})})})}},3408:function(e,s,n){n.d(s,{A:function(){return p}});var i=n(8),t=n(3686),r=n(6026),a=n(8057),l=n(4025),c=n(6161),o=n(3454),d=n(3280),u=n(925),m=n(5761),h=n(6356),x=function(e){var s=e.product,n=e.currency,x=e.cartItem,p=e.wishlistItem,f=e.compareItem,j=e.spaceBottomClass,v=e.colorClass,g=e.titlePriceClass,b=(0,i.useState)(!1),N=(0,a.A)(b,2),w=N[0],A=N[1],C=(0,r.do)(s.price,s.discount),y=+(s.price*n.currencyRate).toFixed(2),S=+(C*n.currencyRate).toFixed(2),k=(0,t.wA)();return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsxs)("div",{className:(0,c.A)("product-wrap-2",j,v),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(l.N_,{to:"/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(l.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,h.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return k((0,d.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,h.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,h.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,h.jsx)("button",{onClick:function(){return A(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"fa fa-eye"})}),(0,h.jsx)("button",{className:void 0!==f?"active":"",disabled:void 0!==f,title:void 0!==f?"Added to compare":"Add to compare",onClick:function(){return k((0,m.wL)(s))},children:(0,h.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,h.jsxs)("div",{className:"product-content-2",children:[(0,h.jsxs)("div",{className:"title-price-wrap-2 ".concat(g||""),children:[(0,h.jsx)("h3",{children:(0,h.jsx)(l.N_,{to:"/product/"+s.id,children:s.name})}),(0,h.jsx)("div",{className:"price-2",children:null!==C?(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)("span",{children:n.currencySymbol+S})," ",(0,h.jsx)("span",{className:"old",children:n.currencySymbol+y})]}):(0,h.jsxs)("span",{children:[n.currencySymbol+y," "]})})]}),(0,h.jsx)("div",{className:"pro-wishlist-2",children:(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to wishlist":"Add to wishlist",onClick:function(){return k((0,u.U4)(s))},children:(0,h.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,h.jsx)(o.A,{show:w,onHide:function(){return A(!1)},product:s,currency:n,discountedPrice:C,finalProductPrice:y,finalDiscountedPrice:S,wishlistItem:p,compareItem:f})]})},p=function(e){var s=e.spaceBottomClass,n=e.colorClass,a=e.titlePriceClass,l=e.category,c=e.type,o=e.limit,d=(0,t.d4)((function(e){return e.product})).products,u=(0,t.d4)((function(e){return e.currency})),m=(0,t.d4)((function(e){return e.cart})).cartItems,p=(0,t.d4)((function(e){return e.wishlist})).wishlistItems,f=(0,t.d4)((function(e){return e.compare})).compareItems,j=(0,r.d$)(d,l,c,o);return(0,h.jsx)(i.Fragment,{children:null===j||void 0===j?void 0:j.map((function(e){return(0,h.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,h.jsx)(x,{spaceBottomClass:s,colorClass:n,product:e,currency:u,cartItem:m.find((function(s){return s.id===e.id})),wishlistItem:p.find((function(s){return s.id===e.id})),compareItem:f.find((function(s){return s.id===e.id})),titlePriceClass:a})},e.id)}))})}},7008:function(e,s,n){var i=n(6161),t=n(4025),r=n(4385),a=n(5348),l=n(1486),c=n(3408),o=n(6356);s.A=function(e){var s=e.spaceBottomClass,n=e.category,d=e.productTabClass;return(0,o.jsx)("div",{className:(0,i.A)("product-area",s),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.A,{titleText:"Featured Product",positionClass:"text-center"}),(0,o.jsxs)(r.A.Container,{defaultActiveKey:"bestSeller",children:[(0,o.jsxs)(a.A,{variant:"pills",className:(0,i.A)("product-tab-list pt-35 pb-60 text-center",d),children:[(0,o.jsx)(a.A.Item,{children:(0,o.jsx)(a.A.Link,{eventKey:"newArrival",children:(0,o.jsx)("h4",{children:"New Arrivals"})})}),(0,o.jsx)(a.A.Item,{children:(0,o.jsx)(a.A.Link,{eventKey:"bestSeller",children:(0,o.jsx)("h4",{children:"Best Sellers"})})}),(0,o.jsx)(a.A.Item,{children:(0,o.jsx)(a.A.Link,{eventKey:"saleItems",children:(0,o.jsx)("h4",{children:"Sale Items"})})})]}),(0,o.jsxs)(r.A.Content,{children:[(0,o.jsx)(r.A.Pane,{eventKey:"newArrival",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(c.A,{category:n,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(r.A.Pane,{eventKey:"bestSeller",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(c.A,{category:n,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(r.A.Pane,{eventKey:"saleItems",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(c.A,{category:n,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]}),(0,o.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,o.jsx)(t.N_,{className:"loadMore6",to:"/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})}},2907:function(e,s,n){var i=n(6161),t=n(1855),r=n(5672),a=n(9531),l=n(6356),c={slidesPerView:1,loop:!0,autoplay:!0};s.A=function(e){var s=e.spaceTopClass,n=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.bgColorClass,m=e.testimonialClass;return(0,l.jsx)("div",{className:(0,i.A)("testimonial-area",s,n,o,d,u),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,l.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:r&&(0,l.jsx)(t.A,{options:c,children:r.map((function(e,s){return(0,l.jsx)(t.q,{children:(0,l.jsx)(a.A,{data:e,testimonialClass:m})},s)}))})})})})})})}},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=9081.220ce485.chunk.js.map