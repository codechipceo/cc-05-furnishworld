"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[5641],{8074:function(e,r,n){var t=n(6161),i=n(6356);r.A=function(e){var r=e.data,n=e.spaceBottomClass;return(0,i.jsx)("div",{className:(0,t.A)("single-brand-logo",n),children:(0,i.jsx)("img",{src:""+r.image,alt:""})})}},1806:function(e,r,n){var t=n(6161),i=n(4025),s=n(6356);r.A=function(e){var r=e.footerLogo,n=e.spaceBottomClass,a=e.colorClass;return(0,s.jsxs)("div",{className:(0,t.A)("copyright",n,a),children:[(0,s.jsx)("div",{className:"footer-logo",children:(0,s.jsx)(i.N_,{to:"/",children:(0,s.jsx)("img",{alt:"",src:""+r})})}),(0,s.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,s.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),".",(0,s.jsx)("br",{})," All Rights Reserved"]})]})}},7003:function(e,r,n){n.d(r,{A:function(){return l}});var t=n(6161),i=n(1052),s=n(6356),a=function(e){var r,n=e.status,t=e.message,i=e.onValidated;return(0,s.jsxs)("div",{className:"subscribe-form",children:[(0,s.jsxs)("div",{className:"mc-form",children:[(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return r=e},type:"email",placeholder:"Enter your email address..."})}),(0,s.jsx)("div",{className:"clear",children:(0,s.jsx)("button",{className:"button",onClick:function(){r&&r.value.indexOf("@")>-1&&i({EMAIL:r.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===n&&(0,s.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===n&&(0,s.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:t}}),"success"===n&&(0,s.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:t}})]})},o=function(e){var r=e.mailchimpUrl;return(0,s.jsx)("div",{children:(0,s.jsx)(i.A,{url:r,render:function(e){var r=e.subscribe,n=e.status,t=e.message;return(0,s.jsx)(a,{status:n,message:t,onValidated:function(e){return r(e)}})}})})},l=function(e){var r=e.spaceBottomClass,n=e.spaceLeftClass,i=e.sideMenu,a=e.colorClass,l=e.widgetColorClass;return(0,s.jsxs)("div",{className:(0,t.A)("footer-widget",r,i?"ml-ntv5":n,l),children:[(0,s.jsx)("div",{className:"footer-title",children:(0,s.jsx)("h3",{children:"SUBSCRIBE"})}),(0,s.jsxs)("div",{className:(0,t.A)("subscribe-style",a),children:[(0,s.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,s.jsx)(o,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},729:function(e,r,n){var t=n(6161),i=n(4025),s=n(6356);r.A=function(e){var r=e.imageUrl,n=e.logoClass;return(0,s.jsx)("div",{className:(0,t.A)(n),children:(0,s.jsx)(i.N_,{to:"/",children:(0,s.jsx)("img",{alt:"",src:""+r})})})}},6609:function(e,r,n){var t=n(3686),i=n(3924),s=(n(2481),n(6356));r.A=function(e){e.currency,(0,i.Bd)().i18n,(0,t.wA)();return(0,s.jsx)("div",{className:"language-currency-wrap",children:(0,s.jsx)("div",{className:"same-language-currency",children:(0,s.jsx)("p",{children:"Call Us +91 92057 53225"})})})}},3454:function(e,r,n){var t=n(8057),i=n(8),s=n(3396),a=n(6431),o=n(3686),l=n(7014),c=n(1855),d=n(6026),u=(n(3280),n(925)),m=n(5761),f=n(4025),h=n(6356);r.A=function(e){var r=e.product,n=e.currency,x=e.discountedPrice,p=e.finalProductPrice,v=e.finalDiscountedPrice,g=e.show,j=e.onHide,b=e.wishlistItem,N=e.compareItem,w=(0,i.useState)(null),A=(0,t.A)(w,2),y=A[0],C=A[1],S=(0,o.wA)(),k=(0,o.d4)((function(e){return e.cart})).cartItems,L=(0,i.useState)(r.variation?r.variation[0].color:""),q=(0,t.A)(L,2),_=q[0],I=(q[1],(0,i.useState)(r.variation?r.variation[0].size[0].name:"")),B=(0,t.A)(I,2),P=B[0],E=(B[1],(0,i.useState)(r.variation?r.variation[0].size[0].stock:r.stock)),U=(0,t.A)(E,2),T=U[0],z=(U[1],(0,i.useState)(1)),O=(0,t.A)(z,2),F=O[0],H=O[1],R=(0,d.pQ)(k,r,_,P),V={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:y},modules:[s._R,s.WO]},M={onSwiper:C,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,h.jsxs)(a.A,{show:g,onHide:function(){C(null),j()},className:"product-quickview-modal-wrapper",children:[(0,h.jsx)(a.A.Header,{closeButton:!0}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,h.jsx)("div",{className:"product-large-image-wrapper",children:(0,h.jsx)(c.A,{options:V,children:r.productImages&&r.productImages.map((function(e,r){return(0,h.jsx)(c.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:e.imageUrl,className:"img-fluid",alt:"Product"})})},r)}))})}),(0,h.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,h.jsx)(c.A,{options:M,children:r.productImages&&r.productImages.map((function(e,r){return(0,h.jsx)(c.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:e.imageUrl,className:"img-fluid",alt:""})})},r)}))})})]}),(0,h.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,h.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,h.jsx)("h2",{children:r.productTitle}),(0,h.jsx)("div",{className:"product-details-price",children:null!==x?(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)("span",{children:n.currencySymbol+v})," ",(0,h.jsx)("span",{className:"old",children:n.currencySymbol+p})]}):(0,h.jsxs)("span",{children:[n.currencySymbol+p," "]})}),r.rating&&r.rating>0?(0,h.jsx)("div",{className:"pro-details-rating-wrap",children:(0,h.jsx)("div",{className:"pro-details-rating",children:(0,h.jsx)(l.A,{ratingValue:r.rating})})}):"",(0,h.jsx)("div",{className:"pro-details-list",children:(0,h.jsx)("p",{children:r.productDescription})}),r._id?(0,h.jsx)("div",{className:"pro-details-quality",children:(0,h.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,h.jsx)(f.N_,{to:"/product/".concat(r._id),rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,h.jsxs)("div",{className:"pro-details-quality",children:[(0,h.jsxs)("div",{className:"cart-plus-minus",children:[(0,h.jsx)("button",{onClick:function(){return H(F>1?F-1:1)},className:"dec qtybutton",children:"-"}),(0,h.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:F,readOnly:!0}),(0,h.jsx)("button",{onClick:function(){return H(F<T-R?F+1:F)},className:"inc qtybutton",children:"+"})]}),(0,h.jsx)("div",{className:"pro-details-cart btn-hover"}),(0,h.jsx)("div",{className:"pro-details-wishlist",children:(0,h.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,u.U4)(r))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-details-compare",children:(0,h.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Added to compare":"Add to compare",onClick:function(){return S((0,m.wL)(r))},children:(0,h.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},7014:function(e,r,n){var t=n(8),i=n(6356);r.A=function(e){for(var r=e.ratingValue,n=[],s=0;s<5;s++)n.push((0,i.jsx)("i",{className:"fa fa-star-o"},s));if(r&&r>0)for(var a=0;a<=r-1;a++)n[a]=(0,i.jsx)("i",{className:"fa fa-star-o yellow"},a);return(0,i.jsx)(t.Fragment,{children:n})}},3667:function(e,r,n){n.d(r,{A:function(){return o}});var t=n(8057),i=n(8),s=function(){var e=(0,i.useState)(!1),r=(0,t.A)(e,2),n=r[0],s=r[1];return(0,i.useEffect)((function(){var e=function(){var e=window.pageYOffset;s(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[n]),{stick:n,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},a=n(6356),o=function(){var e=s(),r=e.stick,n=e.onClickHandler;return r?(0,a.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:n,children:(0,a.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},1855:function(e,r,n){n.d(r,{q:function(){return l.qr}});var t=n(737),i=n(1348),s=n(8),a=n(6161),o=n(3396),l=n(1440),c=n(6356),d=(0,s.forwardRef)((function(e,r){var n=e.options,s=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,f=e.navClass,h=void 0!==(null===n||void 0===n?void 0:n.modules)?n.modules:[],x="prev-".concat(f||"swiper-nav"),p="next-".concat(f||"swiper-nav"),v=(0,i.A)((0,i.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===n||void 0===n||!n.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},n),{},{modules:[o.Vx,o.dK,o.Jq,o.Ij].concat((0,t.A)(h)),navigation:!(null===n||void 0===n||!n.navigation)&&{prevEl:".".concat(x),nextEl:".".concat(p)},pagination:!(null===n||void 0===n||!n.pagination)&&{clickable:!0}});return(0,c.jsxs)("div",{className:(0,a.A)("swiper-wrap",m),ref:r,children:[(0,c.jsx)(l.RC,(0,i.A)((0,i.A)({},v),{},{children:u})),(null===v||void 0===v?void 0:v.navigation)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(x),children:(0,c.jsx)("i",{className:(0,a.A)(s,"icon")})}),(0,c.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(p),children:(0,c.jsx)("i",{className:(0,a.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},r.A=d},6026:function(e,r,n){n.d(r,{Gj:function(){return l},L:function(){return x},SC:function(){return d},VI:function(){return u},d$:function(){return i},do:function(){return s},e1:function(){return o},nL:function(){return h},pQ:function(){return a},sQ:function(){return p},ur:function(){return f},zf:function(){return m}});var t=n(737),i=function(e,r,n,t){var i=r?e.filter((function(e){return e.category.filter((function(e){return e===r}))[0]})):e;if(n&&"new"===n){var s=i.filter((function(e){return e.new}));return s.slice(0,t||s.length)}if(n&&"bestSeller"===n)return i.sort((function(e,r){return r.saleCount-e.saleCount})).slice(0,t||i.length);if(n&&"saleItems"===n){var a=i.filter((function(e){return e.discount&&e.discount>0}));return a.slice(0,t||a.length)}return i.slice(0,t||i.length)},s=function(e,r){return r&&r>0?e-e*(r/100):null},a=function(e,r,n,t){var i=e.find((function(e){return e.id===r.id&&(!e.selectedProductColor||e.selectedProductColor===n)&&(!e.selectedProductSize||e.selectedProductSize===t)}));return e.length>=1&&i?r.variation?e.find((function(e){return e.id===r.id&&e.selectedProductColor===n&&e.selectedProductSize===t})).quantity:e.find((function(e){return r.id===e.id})).quantity:0},o=function(e,r,n){return e.stock?e.stock:e.variation.filter((function(e){return e.color===r}))[0].size.filter((function(e){return e.name===n}))[0].stock},l=function(e,r,n){if(e&&r&&n){if("category"===r)return e.filter((function(e){return e.category.filter((function(e){return e===n}))[0]}));if("tag"===r)return e.filter((function(e){return e.tag.filter((function(e){return e===n}))[0]}));if("color"===r)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===n}))[0]}));if("size"===r)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===n}))[0]}))[0]}));if("filterSort"===r){var i=(0,t.A)(e);if("default"===n)return i;if("priceHighToLow"===n)return i.sort((function(e,r){return r.price-e.price}));if("priceLowToHigh"===n)return i.sort((function(e,r){return e.price-r.price}))}}return e},c=function(e){return e.filter((function(e,r,n){return r===n.indexOf(e)}))},d=function(e){var r=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return r.push(e)}))})),c(r)},u=function(e){var r=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return r.push(e)}))})),c(r)},m=function(e){var r=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return r.push(e.color)}))})),c(r)},f=function(e){var r=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return r.push(e.name)}))}))})),c(r)},h=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},x=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},p=function(e){var r=document.querySelector("#product-filter-wrapper");r.classList.toggle("active"),r.style.height?r.style.height=null:r.style.height=r.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},5327:function(e,r,n){var t=n(6161),i=n(4025),s=n(1806),a=n(7003),o=n(6356);r.A=function(e){var r=e.backgroundColorClass,n=e.spaceTopClass,l=e.spaceBottomClass,c=e.spaceLeftClass,d=e.spaceRightClass,u=e.containerClass,m=e.extraFooterClass,f=e.sideMenu;return(0,o.jsx)("footer",{className:(0,t.A)("footer-area",r,n,l,m,c,d),children:(0,o.jsx)("div",{className:"".concat(u||"container"),children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"".concat(f?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,o.jsx)(s.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,o.jsx)("div",{className:"".concat(f?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,o.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,o.jsx)("div",{className:"footer-title",children:(0,o.jsx)("h3",{children:"ABOUT US"})}),(0,o.jsx)("div",{className:"footer-list",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"/about",children:"About us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"Store location"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"/contact",children:"Contact"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,o.jsx)("div",{className:"".concat(f?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,o.jsxs)("div",{className:"".concat(f?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,o.jsx)("div",{className:"footer-title",children:(0,o.jsx)("h3",{children:"USEFUL LINKS"})}),(0,o.jsx)("div",{className:"footer-list",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"Returns"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"Support Policy"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"Size guide"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,o.jsx)("div",{className:"".concat(f?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,o.jsxs)("div",{className:"".concat(f?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,o.jsx)("div",{className:"footer-title",children:(0,o.jsx)("h3",{children:"FOLLOW US"})}),(0,o.jsx)("div",{className:"footer-list",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,o.jsx)("div",{className:"".concat(f?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,o.jsx)(a.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:f})})]})})})}},3947:function(e,r,n){n.d(r,{A:function(){return h}});var t=n(8057),i=n(8),s=n(6161),a=n(729),o=n(4370),l=n(8990),c=n(5314),d=n(3686),u=n(6609),m=n(6356),f=function(e){var r=e.borderStyle,n=(0,d.d4)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,s.A)("header-top-wap","fluid-border"===r&&"border-bottom"),children:[(0,m.jsx)(u.A,{currency:n}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Gate no.02 vijay market Ansari road shastri\xa0park | 110053"," ",(0,m.jsx)("span",{})]})})]})},h=function(e){var r=e.layout,n=e.top,d=e.borderStyle,u=e.headerPaddingClass,h=e.headerPositionClass,x=e.headerBgClass,p=(0,i.useState)(0),v=(0,t.A)(p,2),g=v[0],j=v[1],b=(0,i.useState)(0),N=(0,t.A)(b,2),w=N[0],A=N[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return A(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){j(window.scrollY)};return(0,m.jsxs)("header",{className:(0,s.A)("header-area clearfix",x,h),children:[(0,m.jsx)("div",{className:(0,s.A)("header-top-area",u,"visible"===n?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===r?r:"container",children:(0,m.jsx)(f,{borderStyle:d})})}),(0,m.jsx)("div",{className:(0,s.A)(u,"sticky-bar header-res-padding clearfix",g>w&&"stick"),children:(0,m.jsxs)("div",{className:"container-fluid"===r?r:"container",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)(a.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(o.A,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(l.A,{})})]}),(0,m.jsx)(c.A,{})]})})]})}},7785:function(e,r,n){n.d(r,{A:function(){return c}});var t=n(6161),i=n(1855),s=n(5672),a=n(6356),o=function(e){var r=e.data;e.sliderClass;return(0,a.jsxs)("div",{className:"single-testimonial single-testimonial--style2 text-center",children:[(0,a.jsx)("img",{src:""+r.image,alt:""}),(0,a.jsx)("p",{children:r.content}),(0,a.jsxs)("div",{className:"client-info",children:[(0,a.jsx)("h5",{children:r.customerName}),(0,a.jsx)("span",{children:r.title})]})]})},l={slidesPerView:1,loop:!0,autoplay:!0},c=function(e){var r=e.spaceTopClass,n=e.spaceBottomClass,c=e.spaceLeftClass,d=e.spaceRightClass,u=e.bgColorClass,m=e.backgroundImage;return(0,a.jsx)("div",{className:(0,t.A)("testimonial-area bg-img",r,n,c,d,u),style:{backgroundImage:"url(".concat(""+m,")")},children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-10 ms-auto me-auto",children:(0,a.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:s&&(0,a.jsx)(i.A,{options:l,children:s.map((function(e,r){return(0,a.jsx)(i.q,{children:(0,a.jsx)(o,{data:e})},r)}))})})})})})})}},4885:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=5641.424452b4.chunk.js.map