"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[1013],{8358:function(e,s,t){var i=t(4025),n=t(6356);s.A=function(e){var s=e.singlePost;return(0,n.jsxs)("div",{className:"blog-wrap mb-30 scroll-zoom",children:[(0,n.jsxs)("div",{className:"blog-img",children:[(0,n.jsx)(i.N_,{to:""+s.url,children:(0,n.jsx)("img",{src:""+s.image,alt:""})}),(0,n.jsx)("div",{className:"blog-category-names",children:s.category.map((function(e,s){return(0,n.jsx)("span",{className:"purple",children:e},s)}))})]}),(0,n.jsx)("div",{className:"blog-content-wrap",children:(0,n.jsxs)("div",{className:"blog-content text-center",children:[(0,n.jsx)("h3",{children:(0,n.jsx)(i.N_,{to:""+s.url,children:s.title})}),(0,n.jsxs)("span",{children:["By"," ",(0,n.jsx)(i.N_,{to:""+s.authorUrl,children:s.author})]})]})})]})}},8074:function(e,s,t){var i=t(6161),n=t(6356);s.A=function(e){var s=e.data,t=e.spaceBottomClass;return(0,n.jsx)("div",{className:(0,i.A)("single-brand-logo",t),children:(0,n.jsx)("img",{src:""+s.image,alt:""})})}},1806:function(e,s,t){var i=t(6161),n=t(4025),r=t(6356);s.A=function(e){var s=e.footerLogo,t=e.spaceBottomClass,a=e.colorClass;return(0,r.jsxs)("div",{className:(0,i.A)("copyright",t,a),children:[(0,r.jsx)("div",{className:"footer-logo",children:(0,r.jsx)(n.N_,{to:"/",children:(0,r.jsx)("img",{alt:"",src:""+s,width:200})})}),(0,r.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,r.jsx)(n.N_,{href:"/",children:"Furnishworld"}),".",(0,r.jsx)("br",{})," All Rights Reserved"]})]})}},7003:function(e,s,t){t.d(s,{A:function(){return c}});var i=t(6161),n=t(1052),r=t(6356),a=function(e){var s,t=e.status,i=e.message,n=e.onValidated;return(0,r.jsxs)("div",{className:"subscribe-form",children:[(0,r.jsxs)("div",{className:"mc-form",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,r.jsx)("div",{className:"clear",children:(0,r.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&n({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===t&&(0,r.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===t&&(0,r.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}}),"success"===t&&(0,r.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}})]})},l=function(e){var s=e.mailchimpUrl;return(0,r.jsx)("div",{children:(0,r.jsx)(n.A,{url:s,render:function(e){var s=e.subscribe,t=e.status,i=e.message;return(0,r.jsx)(a,{status:t,message:i,onValidated:function(e){return s(e)}})}})})},c=function(e){var s=e.spaceBottomClass,t=e.spaceLeftClass,n=e.sideMenu,a=e.colorClass,c=e.widgetColorClass;return(0,r.jsxs)("div",{className:(0,i.A)("footer-widget",s,n?"ml-ntv5":t,c),children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h3",{children:"SUBSCRIBE"})}),(0,r.jsxs)("div",{className:(0,i.A)("subscribe-style",a),children:[(0,r.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,r.jsx)(l,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},729:function(e,s,t){var i=t(6161),n=t(4025),r=t(6356);s.A=function(e){var s=e.imageUrl,t=e.logoClass;return(0,r.jsx)("div",{className:(0,i.A)(t),children:(0,r.jsx)(n.N_,{to:"/",children:(0,r.jsx)("img",{alt:"",src:""+s,width:200})})})}},6609:function(e,s,t){var i=t(3686),n=t(3924),r=(t(2481),t(6356));s.A=function(e){e.currency,(0,n.Bd)().i18n,(0,i.wA)();return(0,r.jsx)("div",{className:"language-currency-wrap",children:(0,r.jsx)("div",{className:"same-language-currency",children:(0,r.jsx)("p",{children:"Call Us +91 92057 53225"})})})}},3454:function(e,s,t){var i=t(8057),n=t(8),r=t(3396),a=t(6431),l=t(3686),c=t(7014),o=t(1855),d=t(6026),u=(t(3280),t(925)),m=t(5761),h=t(4025),p=t(6356);s.A=function(e){var s=e.product,t=e.currency,x=e.discountedPrice,f=e.finalProductPrice,g=e.finalDiscountedPrice,j=e.show,v=e.onHide,N=e.wishlistItem,b=e.compareItem,w=(0,n.useState)(null),A=(0,i.A)(w,2),y=A[0],C=A[1],k=(0,l.wA)(),S=(0,l.d4)((function(e){return e.cart})).cartItems,B=(0,n.useState)(s.variation?s.variation[0].color:""),I=(0,i.A)(B,2),_=I[0],L=(I[1],(0,n.useState)(s.variation?s.variation[0].size[0].name:"")),P=(0,i.A)(L,2),q=P[0],T=(P[1],(0,n.useState)(s.variation?s.variation[0].size[0].stock:s.stock)),U=(0,i.A)(T,2),E=U[0],O=(U[1],(0,n.useState)(1)),F=(0,i.A)(O,2),H=F[0],V=F[1],R=(0,d.pQ)(S,s,_,q),z={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:y},modules:[r._R,r.WO]},K={onSwiper:C,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,p.jsxs)(a.A,{show:j,onHide:function(){C(null),v()},className:"product-quickview-modal-wrapper",children:[(0,p.jsx)(a.A.Header,{closeButton:!0}),(0,p.jsx)("div",{className:"modal-body",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,p.jsx)("div",{className:"product-large-image-wrapper",children:(0,p.jsx)(o.A,{options:z,children:s.productImages&&s.productImages.map((function(e,s){return(0,p.jsx)(o.q,{children:(0,p.jsx)("div",{className:"single-image",children:(0,p.jsx)("img",{src:e.imageUrl,className:"img-fluid",alt:"Product"})})},s)}))})}),(0,p.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,p.jsx)(o.A,{options:K,children:s.productImages&&s.productImages.map((function(e,s){return(0,p.jsx)(o.q,{children:(0,p.jsx)("div",{className:"single-image",children:(0,p.jsx)("img",{src:e.imageUrl,className:"img-fluid",alt:""})})},s)}))})})]}),(0,p.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,p.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,p.jsx)("h2",{children:s.productTitle}),(0,p.jsx)("div",{className:"product-details-price",children:null!==x?(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)("span",{children:t.currencySymbol+g})," ",(0,p.jsx)("span",{className:"old",children:t.currencySymbol+f})]}):(0,p.jsxs)("span",{children:[t.currencySymbol+f," "]})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(c.A,{ratingValue:s.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:s.productDescription})}),s._id?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,p.jsx)(h.N_,{to:"/product/".concat(s._id),rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return V(H>1?H-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:H,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return V(H<E-R?H+1:H)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover"}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Added to wishlist":"Add to wishlist",onClick:function(){return k((0,u.U4)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to compare":"Add to compare",onClick:function(){return k((0,m.wL)(s))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},7014:function(e,s,t){var i=t(8),n=t(6356);s.A=function(e){for(var s=e.ratingValue,t=[],r=0;r<5;r++)t.push((0,n.jsx)("i",{className:"fa fa-star-o"},r));if(s&&s>0)for(var a=0;a<=s-1;a++)t[a]=(0,n.jsx)("i",{className:"fa fa-star-o yellow"},a);return(0,n.jsx)(i.Fragment,{children:t})}},3667:function(e,s,t){t.d(s,{A:function(){return l}});var i=t(8057),n=t(8),r=function(){var e=(0,n.useState)(!1),s=(0,i.A)(e,2),t=s[0],r=s[1];return(0,n.useEffect)((function(){var e=function(){var e=window.pageYOffset;r(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[t]),{stick:t,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},a=t(6356),l=function(){var e=r(),s=e.stick,t=e.onClickHandler;return s?(0,a.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:t,children:(0,a.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},6196:function(e,s,t){var i=t(6161),n=t(6356);s.A=function(e){var s=e.titleText,t=e.subTitleText,r=e.positionClass,a=e.spaceClass;return(0,n.jsxs)("div",{className:(0,i.A)("section-title-2",r,a),children:[(0,n.jsx)("h2",{children:s}),(0,n.jsx)("p",{children:t})]})}},311:function(e,s,t){var i=t(6161),n=t(6356);s.A=function(e){var s=e.spaceTopClass,t=e.spaceBottomClass;return(0,n.jsx)("div",{className:(0,i.A)("welcome-area",s,t),children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"welcome-content text-center",children:[(0,n.jsx)("h5",{children:"Who Are We"}),(0,n.jsx)("h1",{children:"Welcome To Furnishworld"}),(0,n.jsxs)("p",{children:["Explore exquisite furniture from top brands on our site and elevate your home with just a click. Discover style, comfort, and elegance in one seamless shopping experience."," "]})]})})})}},1855:function(e,s,t){t.d(s,{q:function(){return c.qr}});var i=t(737),n=t(1348),r=t(8),a=t(6161),l=t(3396),c=t(1440),o=t(6356),d=(0,r.forwardRef)((function(e,s){var t=e.options,r=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,h=e.navClass,p=void 0!==(null===t||void 0===t?void 0:t.modules)?t.modules:[],x="prev-".concat(h||"swiper-nav"),f="next-".concat(h||"swiper-nav"),g=(0,n.A)((0,n.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===t||void 0===t||!t.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},t),{},{modules:[l.Vx,l.dK,l.Jq,l.Ij].concat((0,i.A)(p)),navigation:!(null===t||void 0===t||!t.navigation)&&{prevEl:".".concat(x),nextEl:".".concat(f)},pagination:!(null===t||void 0===t||!t.pagination)&&{clickable:!0}});return(0,o.jsxs)("div",{className:(0,a.A)("swiper-wrap",m),ref:s,children:[(0,o.jsx)(c.RC,(0,n.A)((0,n.A)({},g),{},{children:u})),(null===g||void 0===g?void 0:g.navigation)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(x),children:(0,o.jsx)("i",{className:(0,a.A)(r,"icon")})}),(0,o.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(f),children:(0,o.jsx)("i",{className:(0,a.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.A=d},9531:function(e,s,t){var i=t(6161),n=t(6356);s.A=function(e){var s=e.data,t=e.testimonialClass;return(0,n.jsxs)("div",{className:(0,i.A)(t||"single-testimonial","text-center"),children:[(0,n.jsx)("img",{src:""+s.image,alt:""}),(0,n.jsx)("p",{children:s.content}),(0,n.jsxs)("div",{className:"client-info",children:[(0,n.jsx)("i",{className:"fa fa-map-signs"}),(0,n.jsx)("h5",{children:s.customerName}),(0,n.jsx)("span",{children:s.title})]})]})}},6026:function(e,s,t){t.d(s,{Gj:function(){return c},L:function(){return x},SC:function(){return d},VI:function(){return u},d$:function(){return n},do:function(){return r},e1:function(){return l},nL:function(){return p},pQ:function(){return a},sQ:function(){return f},ur:function(){return h},zf:function(){return m}});var i=t(737),n=function(e,s,t,i){var n=s?e.filter((function(e){return e.category.filter((function(e){return e===s}))[0]})):e;if(t&&"new"===t){var r=n.filter((function(e){return e.new}));return r.slice(0,i||r.length)}if(t&&"bestSeller"===t)return n.sort((function(e,s){return s.saleCount-e.saleCount})).slice(0,i||n.length);if(t&&"saleItems"===t){var a=n.filter((function(e){return e.discount&&e.discount>0}));return a.slice(0,i||a.length)}return n.slice(0,i||n.length)},r=function(e,s){return s&&s>0?e-e*(s/100):null},a=function(e,s,t,i){var n=e.find((function(e){return e.id===s.id&&(!e.selectedProductColor||e.selectedProductColor===t)&&(!e.selectedProductSize||e.selectedProductSize===i)}));return e.length>=1&&n?s.variation?e.find((function(e){return e.id===s.id&&e.selectedProductColor===t&&e.selectedProductSize===i})).quantity:e.find((function(e){return s.id===e.id})).quantity:0},l=function(e,s,t){return e.stock?e.stock:e.variation.filter((function(e){return e.color===s}))[0].size.filter((function(e){return e.name===t}))[0].stock},c=function(e,s,t){if(e&&s&&t){if("category"===s)return e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]}));if("tag"===s)return e.filter((function(e){return e.tag.filter((function(e){return e===t}))[0]}));if("color"===s)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===t}))[0]}));if("size"===s)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===t}))[0]}))[0]}));if("filterSort"===s){var n=(0,i.A)(e);if("default"===t)return n;if("priceHighToLow"===t)return n.sort((function(e,s){return s.price-e.price}));if("priceLowToHigh"===t)return n.sort((function(e,s){return e.price-s.price}))}}return e},o=function(e){return e.filter((function(e,s,t){return s===t.indexOf(e)}))},d=function(e){var s=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return s.push(e)}))})),o(s)},u=function(e){var s=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return s.push(e)}))})),o(s)},m=function(e){var s=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return s.push(e.color)}))})),o(s)},h=function(e){var s=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return s.push(e.name)}))}))})),o(s)},p=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},x=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},f=function(e){var s=document.querySelector("#product-filter-wrapper");s.classList.toggle("active"),s.style.height?s.style.height=null:s.style.height=s.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},4763:function(e,s,t){t.d(s,{A:function(){return x}});var i=t(8),n=t(8057),r=t(3686),a=t(729),l=t(8990),c=t(4370),o=t(5314),d=t(6609),u=t(6356),m=function(){var e=(0,i.useState)(0),s=(0,n.A)(e,2),t=s[0],m=s[1],h=(0,i.useState)(0),p=(0,n.A)(h,2),x=p[0],f=p[1],g=(0,r.d4)((function(e){return e.currency}));(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return f(e.offsetTop),window.addEventListener("scroll",j),function(){window.removeEventListener("scroll",j)}}),[]);var j=function(){m(window.scrollY)};return(0,u.jsxs)("header",{className:"header-area clearfix header-hm9 transparent-bar",children:[(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"header-top-area d-none d-lg-block",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-lg-5 col-md-8 col-12",children:(0,u.jsx)(d.A,{currency:g})}),(0,u.jsx)("div",{className:"col-lg-2 d-none d-lg-block text-center",children:(0,u.jsx)(a.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo-hm-9"})}),(0,u.jsx)("div",{className:"col-lg-5 col-md-4 col-12",children:(0,u.jsx)(l.A,{})})]})})}),(0,u.jsx)("div",{className:"header-bottom sticky-bar header-res-padding header-padding-2 ".concat(t>x?"stick":""),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,u.jsx)(a.A,{imageUrl:"/assets/img/logo/logo.png"})}),(0,u.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,u.jsx)(l.A,{})}),(0,u.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,u.jsx)(c.A,{})})]}),(0,u.jsx)(o.A,{})]})})]})},h=t(5327),p=t(3667),x=function(e){var s=e.children,t=e.footerBgClass;return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(m,{}),s,(0,u.jsx)(h.A,{backgroundColorClass:t||"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,u.jsx)(p.A,{})]})}},1013:function(e,s,t){t.r(s),t.d(s,{default:function(){return R}});var i=t(8),n=t(879),r=t(4763),a=t(3396),l=t(1855),c=JSON.parse('[{"id":1,"title":"New Arrival","subtitle":"New Design <br/> Bluetooth Speaker","image":"/assets/img/slider/single-slide-3.png","url":"/shop-grid-standard"},{"id":2,"title":"Smart Products","subtitle":"Summer Offer <br/> 2024 Collection","image":"/assets/img/slider/single-slide-6.png","url":"/shop-grid-standard"}]'),o=t(4025),d=t(6356),u=function(e){var s=e.data;return(0,d.jsx)("div",{className:"slider-height-7 bg-glaucous d-flex align-items-center",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row align-items-center slider-h9-mrg",children:[(0,d.jsx)("div",{className:"col-lg-6 col-md-6 col-12 col-sm-6",children:(0,d.jsxs)("div",{className:"slider-content-7 slider-animated-1",children:[(0,d.jsx)("h3",{className:"animated",children:s.title}),(0,d.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,d.jsx)("div",{className:"slider-btn-9 btn-hover",children:(0,d.jsx)(o.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})}),(0,d.jsx)("div",{className:"col-lg-6 col-md-6 col-12 col-sm-6",children:(0,d.jsx)("div",{className:"slider-singleimg-hm9 slider-animated-1",children:(0,d.jsx)("img",{className:"animated",src:""+s.image,alt:""})})})]})})})},m={effect:"fade",fadeEffect:{crossFade:!0},modules:[a._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},h=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,d.jsx)(l.A,{options:m,children:null===c||void 0===c?void 0:c.map((function(e,s){return(0,d.jsx)(l.q,{children:(0,d.jsx)(u,{data:e})},s)}))})})})},p=t(6161),x=JSON.parse('[{"id":"1","image":"/assets/img/product/hm9-cagi-1.jpg","subtitle":"4 Products","title":"Bluetooth Speaker","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/product/hm9-cagi-2.jpg","subtitle":"8 Products","title":"Bluetooth Headphone","link":"/shop-grid-standard"},{"id":"3","image":"/assets/img/product/hm9-cagi-3.jpg","subtitle":"9 Products","title":"Kardon Aura Studio","link":"/shop-grid-standard"},{"id":"4","image":"/assets/img/product/hm9-cagi-2.jpg","subtitle":"4 Products","title":"Bluetooth Speaker","link":"/shop-grid-standard"}]'),f=function(e){var s=e.data;return(0,d.jsxs)("div",{className:"collection-product-2",children:[(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})}),(0,d.jsxs)("div",{className:"collection-content-2 text-center",children:[(0,d.jsx)("span",{children:s.subtitle}),(0,d.jsx)("h4",{children:(0,d.jsx)(o.N_,{to:""+s.link,children:s.title})})]})]})},g={loop:!1,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},992:{slidesPerView:3}}},j=function(e){var s=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,p.A)("collections-area",s),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"collection-wrap-2",children:(0,d.jsx)("div",{className:"collection-active-2",children:x&&(0,d.jsx)(l.A,{options:g,children:x.map((function(e,s){return(0,d.jsx)(l.q,{children:(0,d.jsx)(f,{data:e})},s)}))})})})})})},v=t(311),N=t(4385),b=t(5348),w=t(3686),A=t(6026),y=t(8057),C=t(3454),k=t(3280),S=t(925),B=t(5761),I=function(e){var s=e.product,t=e.currency,n=e.cartItem,r=e.wishlistItem,a=e.compareItem,l=e.spaceBottomClass,c=(0,i.useState)(!1),u=(0,y.A)(c,2),m=u[0],h=u[1],x=(0,A.do)(s.price,s.discount),f=+(s.price*t.currencyRate).toFixed(2),g=+(x*t.currencyRate).toFixed(2),j=(0,w.wA)();return(0,d.jsxs)(i.Fragment,{children:[(0,d.jsxs)("div",{className:(0,p.A)("product-wrap-2 pro-glaucous-color",l),children:[(0,d.jsxs)("div",{className:"product-img",children:[(0,d.jsxs)(o.N_,{to:"/product/"+s.id,children:[(0,d.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,d.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,d.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,d.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,d.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,d.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,d.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,d.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,d.jsx)(o.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,d.jsx)("i",{class:"fa fa-cog"})}):s.stock&&s.stock>0?(0,d.jsxs)("button",{onClick:function(){return j((0,k.bE)(s))},className:void 0!==n&&n.quantity>0?"active":"",disabled:void 0!==n&&n.quantity>0,title:void 0!==n?"Added to cart":"Add to cart",children:[" ",(0,d.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,d.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,d.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,d.jsx)("button",{onClick:function(){return h(!0)},title:"Quick View",children:(0,d.jsx)("i",{className:"fa fa-eye"})}),(0,d.jsx)("button",{className:void 0!==a?"active":"",disabled:void 0!==a,title:void 0!==a?"Added to compare":"Add to compare",onClick:function(){return j((0,B.wL)(s))},children:(0,d.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,d.jsxs)("div",{className:"product-content-2",children:[(0,d.jsxs)("div",{className:"title-price-wrap-2",children:[(0,d.jsx)("h3",{children:(0,d.jsx)(o.N_,{to:"/product/"+s.id,children:s.name})}),(0,d.jsx)("div",{className:"price-2",children:null!==x?(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)("span",{children:t.currencySymbol+g})," ",(0,d.jsx)("span",{className:"old",children:t.currencySymbol+f})]}):(0,d.jsxs)("span",{children:[t.currencySymbol+f," "]})})]}),(0,d.jsx)("div",{className:"pro-wishlist-2",children:(0,d.jsx)("button",{className:void 0!==r?"active":"",disabled:void 0!==r,title:void 0!==r?"Added to wishlist":"Add to wishlist",onClick:function(){return j((0,S.U4)(s))},children:(0,d.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,d.jsx)(C.A,{show:m,onHide:function(){return h(!1)},product:s,currency:t,discountedPrice:x,finalProductPrice:f,finalDiscountedPrice:g,wishlistItem:r,compareItem:a})]})},_=function(e){var s=e.spaceBottomClass,t=e.category,n=e.type,r=e.limit,a=(0,w.d4)((function(e){return e.product})).products,l=(0,w.d4)((function(e){return e.currency})),c=(0,w.d4)((function(e){return e.cart})).cartItems,o=(0,w.d4)((function(e){return e.wishlist})).wishlistItems,u=(0,w.d4)((function(e){return e.compare})).compareItems,m=(0,A.d$)(a,t,n,r);return(0,d.jsx)(i.Fragment,{children:null===m||void 0===m?void 0:m.map((function(e){return(0,d.jsx)("div",{className:"custom2-col-5",children:(0,d.jsx)(I,{spaceBottomClass:s,product:e,currency:l,cartItem:c.find((function(s){return s.id===e.id})),wishlistItem:o.find((function(s){return s.id===e.id})),compareItem:u.find((function(s){return s.id===e.id}))})},e.id)}))})},L=function(e){var s=e.spaceBottomClass,t=e.category;return(0,d.jsx)("div",{className:(0,p.A)("product-area hm9-section-padding",s),children:(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)(N.A.Container,{defaultActiveKey:"bestSeller",children:[(0,d.jsxs)(b.A,{variant:"pills",className:"product-tab-list pb-55 text-center",children:[(0,d.jsx)(b.A.Item,{children:(0,d.jsx)(b.A.Link,{eventKey:"newArrival",children:(0,d.jsx)("h4",{children:"New Arrivals"})})}),(0,d.jsx)(b.A.Item,{children:(0,d.jsx)(b.A.Link,{eventKey:"bestSeller",children:(0,d.jsx)("h4",{children:"Best Sellers"})})}),(0,d.jsx)(b.A.Item,{children:(0,d.jsx)(b.A.Link,{eventKey:"saleItems",children:(0,d.jsx)("h4",{children:"Sale Items"})})})]}),(0,d.jsxs)(N.A.Content,{children:[(0,d.jsx)(N.A.Pane,{eventKey:"newArrival",children:(0,d.jsx)("div",{className:"custom-row-4",children:(0,d.jsx)(_,{category:t,type:"new",limit:10,spaceBottomClass:"mb-35"})})}),(0,d.jsx)(N.A.Pane,{eventKey:"bestSeller",children:(0,d.jsx)("div",{className:"custom-row-4",children:(0,d.jsx)(_,{category:t,type:"bestSeller",limit:10,spaceBottomClass:"mb-35"})})}),(0,d.jsx)(N.A.Pane,{eventKey:"saleItems",children:(0,d.jsx)("div",{className:"custom-row-4",children:(0,d.jsx)(_,{category:t,type:"saleItems",limit:10,spaceBottomClass:"mb-35"})})})]})]})})})},P=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-8.png","title":"HeadPhone","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-9.png","title":"Bluetooth","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"}]'),q=function(e){var s=e.data,t=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,p.A)("single-banner-2",t),children:[(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content-2",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsxs)("h4",{children:[s.subtitle," ",(0,d.jsx)("span",{children:s.price})]}),(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},T=function(e){var s=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,p.A)("banner-area",s),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:null===P||void 0===P?void 0:P.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,d.jsx)(q,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},U=t(2907),E=t(2461),O=t(5513),F=t(8358),H=t(6196),V=function(e){var s=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,p.A)("blog-area",s),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(H.A,{titleText:"OUR BLOG",subTitleText:"Lorem ipsum dolor sit amet conse ctetu.",positionClass:"text-center",spaceClass:"mb-55"}),(0,d.jsx)("div",{className:"row",children:null===O||void 0===O?void 0:O.map((function(e){return(0,d.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,d.jsx)(F.A,{singlePost:e})},e.id)}))})]})})},R=function(){return(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)(n.A,{titleTemplate:"Electronics Home",description:"Electronics home of flone react minimalist eCommerce template."}),(0,d.jsxs)(r.A,{children:[(0,d.jsx)(h,{}),(0,d.jsx)(j,{spaceBottomClass:"pb-95"}),(0,d.jsx)(v.A,{spaceBottomClass:"pb-90"}),(0,d.jsx)(L,{spaceBottomClass:"pb-60",category:"electronics"}),(0,d.jsx)(T,{spaceBottomClass:"pb-100"}),(0,d.jsx)(U.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",bgColorClass:"bg-gray-3"}),(0,d.jsx)(E.A,{spaceBottomClass:"pb-95",spaceTopClass:"pt-100"}),(0,d.jsx)(V,{spaceBottomClass:"pb-55"})]})]})}},2461:function(e,s,t){var i=t(6161),n=t(1855),r=t(8074),a=t(4885),l=t(6356),c={loop:!0,autoplay:!0,grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},1024:{slidesPerView:5},768:{slidesPerView:4}}};s.A=function(e){var s=e.spaceBottomClass,t=e.spaceTopClass;return(0,l.jsx)("div",{className:(0,i.A)("brand-logo-area",s,t),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"brand-logo-active",children:a&&(0,l.jsx)(n.A,{options:c,children:a.map((function(e,s){return(0,l.jsx)(n.q,{children:(0,l.jsx)(r.A,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})})}},5327:function(e,s,t){var i=t(6161),n=t(4025),r=t(1806),a=t(7003),l=t(6356);s.A=function(e){var s=e.backgroundColorClass,t=e.spaceTopClass,c=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.containerClass,m=e.extraFooterClass,h=e.sideMenu;return(0,l.jsx)("footer",{className:(0,i.A)("footer-area",s,t,c,m,o,d),children:(0,l.jsx)("div",{className:"".concat(u||"container"),children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsx)(r.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"ABOUT US"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"/about",children:"About us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"#/",children:"Store location"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"/contact",children:"Contact"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"USEFUL LINKS"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"#/",children:"Returns"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"#/",children:"Support Policy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"#/",children:"Size guide"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,l.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"FOLLOW US"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,l.jsx)(a.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h})})]})})})}},2907:function(e,s,t){var i=t(6161),n=t(1855),r=t(5672),a=t(9531),l=t(6356),c={slidesPerView:1,loop:!0,autoplay:!0};s.A=function(e){var s=e.spaceTopClass,t=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.bgColorClass,m=e.testimonialClass;return(0,l.jsx)("div",{className:(0,i.A)("testimonial-area",s,t,o,d,u),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,l.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:r&&(0,l.jsx)(n.A,{options:c,children:r.map((function(e,s){return(0,l.jsx)(n.q,{children:(0,l.jsx)(a.A,{data:e,testimonialClass:m})},s)}))})})})})})})}},5513:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-1.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-2.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-3.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]')},4885:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=1013.fd6c243c.chunk.js.map