"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[1249],{1806:function(e,t,r){var n=r(6161),i=r(4025),s=r(6356);t.A=function(e){var t=e.footerLogo,r=e.spaceBottomClass,c=e.colorClass;return(0,s.jsxs)("div",{className:(0,n.A)("copyright",r,c),children:[(0,s.jsx)("div",{className:"footer-logo",children:(0,s.jsx)(i.N_,{to:"/",children:(0,s.jsx)("img",{alt:"",src:""+t,width:200})})}),(0,s.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,s.jsx)(i.N_,{href:"/",children:"Furnishworld"}),".",(0,s.jsx)("br",{})," All Rights Reserved"]})]})}},7003:function(e,t,r){r.d(t,{A:function(){return l}});var n=r(6161),i=r(1052),s=r(6356),c=function(e){var t,r=e.status,n=e.message,i=e.onValidated;return(0,s.jsxs)("div",{className:"subscribe-form",children:[(0,s.jsxs)("div",{className:"mc-form",children:[(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})}),(0,s.jsx)("div",{className:"clear",children:(0,s.jsx)("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&i({EMAIL:t.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===r&&(0,s.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===r&&(0,s.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===r&&(0,s.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}})]})},o=function(e){var t=e.mailchimpUrl;return(0,s.jsx)("div",{children:(0,s.jsx)(i.A,{url:t,render:function(e){var t=e.subscribe,r=e.status,n=e.message;return(0,s.jsx)(c,{status:r,message:n,onValidated:function(e){return t(e)}})}})})},l=function(e){var t=e.spaceBottomClass,r=e.spaceLeftClass,i=e.sideMenu,c=e.colorClass,l=e.widgetColorClass;return(0,s.jsxs)("div",{className:(0,n.A)("footer-widget",t,i?"ml-ntv5":r,l),children:[(0,s.jsx)("div",{className:"footer-title",children:(0,s.jsx)("h3",{children:"SUBSCRIBE"})}),(0,s.jsxs)("div",{className:(0,n.A)("subscribe-style",c),children:[(0,s.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,s.jsx)(o,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},729:function(e,t,r){var n=r(6161),i=r(4025),s=r(6356);t.A=function(e){var t=e.imageUrl,r=e.logoClass;return(0,s.jsx)("div",{className:(0,n.A)(r),children:(0,s.jsx)(i.N_,{to:"/",children:(0,s.jsx)("img",{alt:"",src:""+t,width:200})})})}},3454:function(e,t,r){var n=r(8057),i=r(8),s=r(3396),c=r(6431),o=r(3686),l=r(7014),a=r(1855),d=r(6026),u=(r(3280),r(925)),f=r(5761),m=r(4025),h=r(6356);t.A=function(e){var t=e.product,r=e.currency,x=e.discountedPrice,p=e.finalProductPrice,v=e.finalDiscountedPrice,j=e.show,g=e.onHide,N=e.wishlistItem,b=e.compareItem,w=(0,i.useState)(null),A=(0,n.A)(w,2),y=A[0],C=A[1],S=(0,o.wA)(),k=(0,o.d4)((function(e){return e.cart})).cartItems,_=(0,i.useState)(t.variation?t.variation[0].color:""),L=(0,n.A)(_,2),I=L[0],B=(L[1],(0,i.useState)(t.variation?t.variation[0].size[0].name:"")),q=(0,n.A)(B,2),P=q[0],z=(q[1],(0,i.useState)(t.variation?t.variation[0].size[0].stock:t.stock)),E=(0,n.A)(z,2),T=E[0],U=(E[1],(0,i.useState)(1)),F=(0,n.A)(U,2),H=F[0],O=F[1],R=(0,d.pQ)(k,t,I,P),V={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:y},modules:[s._R,s.WO]},M={onSwiper:C,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,h.jsxs)(c.A,{show:j,onHide:function(){C(null),g()},className:"product-quickview-modal-wrapper",children:[(0,h.jsx)(c.A.Header,{closeButton:!0}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,h.jsx)("div",{className:"product-large-image-wrapper",children:(0,h.jsx)(a.A,{options:V,children:t.productImages&&t.productImages.map((function(e,t){return(0,h.jsx)(a.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:e.imageUrl,className:"img-fluid",alt:"Product"})})},t)}))})}),(0,h.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,h.jsx)(a.A,{options:M,children:t.productImages&&t.productImages.map((function(e,t){return(0,h.jsx)(a.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:e.imageUrl,className:"img-fluid",alt:""})})},t)}))})})]}),(0,h.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,h.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,h.jsx)("h2",{children:t.productTitle}),(0,h.jsx)("div",{className:"product-details-price",children:null!==x?(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)("span",{children:r.currencySymbol+v})," ",(0,h.jsx)("span",{className:"old",children:r.currencySymbol+p})]}):(0,h.jsxs)("span",{children:[r.currencySymbol+p," "]})}),t.rating&&t.rating>0?(0,h.jsx)("div",{className:"pro-details-rating-wrap",children:(0,h.jsx)("div",{className:"pro-details-rating",children:(0,h.jsx)(l.A,{ratingValue:t.rating})})}):"",(0,h.jsx)("div",{className:"pro-details-list",children:(0,h.jsx)("p",{children:t.productDescription})}),t._id?(0,h.jsx)("div",{className:"pro-details-quality",children:(0,h.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,h.jsx)(m.N_,{to:"/product/".concat(t._id),rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,h.jsxs)("div",{className:"pro-details-quality",children:[(0,h.jsxs)("div",{className:"cart-plus-minus",children:[(0,h.jsx)("button",{onClick:function(){return O(H>1?H-1:1)},className:"dec qtybutton",children:"-"}),(0,h.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:H,readOnly:!0}),(0,h.jsx)("button",{onClick:function(){return O(H<T-R?H+1:H)},className:"inc qtybutton",children:"+"})]}),(0,h.jsx)("div",{className:"pro-details-cart btn-hover"}),(0,h.jsx)("div",{className:"pro-details-wishlist",children:(0,h.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,u.U4)(t))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-details-compare",children:(0,h.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to compare":"Add to compare",onClick:function(){return S((0,f.wL)(t))},children:(0,h.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},7014:function(e,t,r){var n=r(8),i=r(6356);t.A=function(e){for(var t=e.ratingValue,r=[],s=0;s<5;s++)r.push((0,i.jsx)("i",{className:"fa fa-star-o"},s));if(t&&t>0)for(var c=0;c<=t-1;c++)r[c]=(0,i.jsx)("i",{className:"fa fa-star-o yellow"},c);return(0,i.jsx)(n.Fragment,{children:r})}},3667:function(e,t,r){r.d(t,{A:function(){return o}});var n=r(8057),i=r(8),s=function(){var e=(0,i.useState)(!1),t=(0,n.A)(e,2),r=t[0],s=t[1];return(0,i.useEffect)((function(){var e=function(){var e=window.pageYOffset;s(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[r]),{stick:r,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=r(6356),o=function(){var e=s(),t=e.stick,r=e.onClickHandler;return t?(0,c.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:r,children:(0,c.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},1756:function(e,t,r){var n=r(6161),i=r(6356);t.A=function(e){var t=e.titleText,r=e.subtitleText,s=e.subtitleColorClass,c=e.positionClass,o=e.spaceClass,l=e.borderClass;return(0,i.jsxs)("div",{className:(0,n.A)("section-title",c,o,l),children:[(0,i.jsx)("h2",{children:t}),(0,i.jsx)("p",{className:(0,n.A)(s),children:r})]})}},1855:function(e,t,r){r.d(t,{q:function(){return l.qr}});var n=r(737),i=r(1348),s=r(8),c=r(6161),o=r(3396),l=r(1440),a=r(6356),d=(0,s.forwardRef)((function(e,t){var r=e.options,s=e.prevIcon,d=e.nextIcon,u=e.children,f=e.className,m=e.navClass,h=void 0!==(null===r||void 0===r?void 0:r.modules)?r.modules:[],x="prev-".concat(m||"swiper-nav"),p="next-".concat(m||"swiper-nav"),v=(0,i.A)((0,i.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===r||void 0===r||!r.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},r),{},{modules:[o.Vx,o.dK,o.Jq,o.Ij].concat((0,n.A)(h)),navigation:!(null===r||void 0===r||!r.navigation)&&{prevEl:".".concat(x),nextEl:".".concat(p)},pagination:!(null===r||void 0===r||!r.pagination)&&{clickable:!0}});return(0,a.jsxs)("div",{className:(0,c.A)("swiper-wrap",f),ref:t,children:[(0,a.jsx)(l.RC,(0,i.A)((0,i.A)({},v),{},{children:u})),(null===v||void 0===v?void 0:v.navigation)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(x),children:(0,a.jsx)("i",{className:(0,c.A)(s,"icon")})}),(0,a.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(p),children:(0,a.jsx)("i",{className:(0,c.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},t.A=d},6026:function(e,t,r){r.d(t,{Gj:function(){return l},L:function(){return x},SC:function(){return d},VI:function(){return u},d$:function(){return i},do:function(){return s},e1:function(){return o},nL:function(){return h},pQ:function(){return c},sQ:function(){return p},ur:function(){return m},zf:function(){return f}});var n=r(737),i=function(e,t,r,n){var i=t?e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]})):e;if(r&&"new"===r){var s=i.filter((function(e){return e.new}));return s.slice(0,n||s.length)}if(r&&"bestSeller"===r)return i.sort((function(e,t){return t.saleCount-e.saleCount})).slice(0,n||i.length);if(r&&"saleItems"===r){var c=i.filter((function(e){return e.discount&&e.discount>0}));return c.slice(0,n||c.length)}return i.slice(0,n||i.length)},s=function(e,t){return t&&t>0?e-e*(t/100):null},c=function(e,t,r,n){var i=e.find((function(e){return e.id===t.id&&(!e.selectedProductColor||e.selectedProductColor===r)&&(!e.selectedProductSize||e.selectedProductSize===n)}));return e.length>=1&&i?t.variation?e.find((function(e){return e.id===t.id&&e.selectedProductColor===r&&e.selectedProductSize===n})).quantity:e.find((function(e){return t.id===e.id})).quantity:0},o=function(e,t,r){return e.stock?e.stock:e.variation.filter((function(e){return e.color===t}))[0].size.filter((function(e){return e.name===r}))[0].stock},l=function(e,t,r){if(e&&t&&r){if("category"===t)return e.filter((function(e){return e.category.filter((function(e){return e===r}))[0]}));if("tag"===t)return e.filter((function(e){return e.tag.filter((function(e){return e===r}))[0]}));if("color"===t)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===r}))[0]}));if("size"===t)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===r}))[0]}))[0]}));if("filterSort"===t){var i=(0,n.A)(e);if("default"===r)return i;if("priceHighToLow"===r)return i.sort((function(e,t){return t.price-e.price}));if("priceLowToHigh"===r)return i.sort((function(e,t){return e.price-t.price}))}}return e},a=function(e){return e.filter((function(e,t,r){return t===r.indexOf(e)}))},d=function(e){var t=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return t.push(e)}))})),a(t)},u=function(e){var t=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return t.push(e)}))})),a(t)},f=function(e){var t=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return t.push(e.color)}))})),a(t)},m=function(e){var t=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return t.push(e.name)}))}))})),a(t)},h=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},x=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},p=function(e){var t=document.querySelector("#product-filter-wrapper");t.classList.toggle("active"),t.style.height?t.style.height=null:t.style.height=t.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},5327:function(e,t,r){var n=r(6161),i=r(4025),s=r(1806),c=r(7003),o=r(6356);t.A=function(e){var t=e.backgroundColorClass,r=e.spaceTopClass,l=e.spaceBottomClass,a=e.spaceLeftClass,d=e.spaceRightClass,u=e.containerClass,f=e.extraFooterClass,m=e.sideMenu;return(0,o.jsxs)("footer",{className:(0,n.A)("footer-area",t,r,l,f,a,d),children:[(0,o.jsx)("div",{className:"".concat(u||"container"),children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,o.jsx)(s.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,o.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,o.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,o.jsx)("div",{className:"footer-title",children:(0,o.jsx)("h3",{children:"ABOUT US"})}),(0,o.jsx)("div",{className:"footer-list",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"/about",children:"About us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"Store location"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"/contact",children:"Contact"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,o.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,o.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,o.jsx)("div",{className:"footer-title",children:(0,o.jsx)("h3",{children:"USEFUL LINKS"})}),(0,o.jsx)("div",{className:"footer-list",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"Returns"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"Support Policy"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"Size guide"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,o.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,o.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,o.jsx)("div",{className:"footer-title",children:(0,o.jsx)("h3",{children:"FOLLOW US"})}),(0,o.jsx)("div",{className:"footer-list",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,o.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,o.jsx)(c.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:m})})]})}),(0,o.jsx)("div",{}),(0,o.jsxs)("p",{style:{fontSize:"12px",textAlign:"center"},children:["Design & Developed By",(0,o.jsxs)("a",{href:"https://www.codechip.in",target:"_blank",rel:"noreferrer",children:[" ","Codechip Studios"]})]})]})}}}]);
//# sourceMappingURL=1249.0bdad6c0.chunk.js.map