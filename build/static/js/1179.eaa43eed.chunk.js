"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[1179],{8074:function(e,r,n){var t=n(6161),s=n(6356);r.A=function(e){var r=e.data,n=e.spaceBottomClass;return(0,s.jsx)("div",{className:(0,t.A)("single-brand-logo",n),children:(0,s.jsx)("img",{src:""+r.image,alt:""})})}},1806:function(e,r,n){var t=n(6161),s=n(4025),i=n(6356);r.A=function(e){var r=e.footerLogo,n=e.spaceBottomClass,o=e.colorClass;return(0,i.jsxs)("div",{className:(0,t.A)("copyright",n,o),children:[(0,i.jsx)("div",{className:"footer-logo",children:(0,i.jsx)(s.N_,{to:"/",children:(0,i.jsx)("img",{alt:"",src:""+r,width:200})})}),(0,i.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,i.jsx)(s.N_,{href:"/",children:"Furnishworld"}),".",(0,i.jsx)("br",{})," All Rights Reserved"]})]})}},7003:function(e,r,n){n.d(r,{A:function(){return l}});var t=n(6161),s=n(1052),i=n(6356),o=function(e){var r,n=e.status,t=e.message,s=e.onValidated;return(0,i.jsxs)("div",{className:"subscribe-form",children:[(0,i.jsxs)("div",{className:"mc-form",children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return r=e},type:"email",placeholder:"Enter your email address..."})}),(0,i.jsx)("div",{className:"clear",children:(0,i.jsx)("button",{className:"button",onClick:function(){r&&r.value.indexOf("@")>-1&&s({EMAIL:r.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===n&&(0,i.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===n&&(0,i.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:t}}),"success"===n&&(0,i.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:t}})]})},c=function(e){var r=e.mailchimpUrl;return(0,i.jsx)("div",{children:(0,i.jsx)(s.A,{url:r,render:function(e){var r=e.subscribe,n=e.status,t=e.message;return(0,i.jsx)(o,{status:n,message:t,onValidated:function(e){return r(e)}})}})})},l=function(e){var r=e.spaceBottomClass,n=e.spaceLeftClass,s=e.sideMenu,o=e.colorClass,l=e.widgetColorClass;return(0,i.jsxs)("div",{className:(0,t.A)("footer-widget",r,s?"ml-ntv5":n,l),children:[(0,i.jsx)("div",{className:"footer-title",children:(0,i.jsx)("h3",{children:"SUBSCRIBE"})}),(0,i.jsxs)("div",{className:(0,t.A)("subscribe-style",o),children:[(0,i.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,i.jsx)(c,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},729:function(e,r,n){var t=n(6161),s=n(4025),i=n(6356);r.A=function(e){var r=e.imageUrl,n=e.logoClass;return(0,i.jsx)("div",{className:(0,t.A)(n),children:(0,i.jsx)(s.N_,{to:"/",children:(0,i.jsx)("img",{alt:"",src:""+r,width:200})})})}},6609:function(e,r,n){var t=n(3686),s=n(3924),i=(n(2481),n(6356));r.A=function(e){e.currency,(0,s.Bd)().i18n,(0,t.wA)();return(0,i.jsx)("div",{className:"language-currency-wrap",children:(0,i.jsx)("div",{className:"same-language-currency",children:(0,i.jsx)("p",{children:"Call Us +91 92057 53225"})})})}},3454:function(e,r,n){var t=n(8057),s=n(8),i=n(3396),o=n(6431),c=n(3686),l=n(7014),a=n(1855),d=n(6026),u=(n(3280),n(925)),f=n(5761),m=n(4025),h=n(6356);r.A=function(e){var r=e.product,n=e.currency,x=e.discountedPrice,v=e.finalProductPrice,p=e.finalDiscountedPrice,g=e.show,j=e.onHide,b=e.wishlistItem,N=e.compareItem,w=(0,s.useState)(null),A=(0,t.A)(w,2),y=A[0],C=A[1],S=(0,c.wA)(),k=(0,c.d4)((function(e){return e.cart})).cartItems,L=(0,s.useState)(r.variation?r.variation[0].color:""),_=(0,t.A)(L,2),I=_[0],B=(_[1],(0,s.useState)(r.variation?r.variation[0].size[0].name:"")),E=(0,t.A)(B,2),P=E[0],q=(E[1],(0,s.useState)(r.variation?r.variation[0].size[0].stock:r.stock)),T=(0,t.A)(q,2),z=T[0],U=(T[1],(0,s.useState)(1)),F=(0,t.A)(U,2),H=F[0],O=F[1],R=(0,d.pQ)(k,r,I,P),V={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:y},modules:[i._R,i.WO]},M={onSwiper:C,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,h.jsxs)(o.A,{show:g,onHide:function(){C(null),j()},className:"product-quickview-modal-wrapper",children:[(0,h.jsx)(o.A.Header,{closeButton:!0}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,h.jsx)("div",{className:"product-large-image-wrapper",children:(0,h.jsx)(a.A,{options:V,children:r.productImages&&r.productImages.map((function(e,r){return(0,h.jsx)(a.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:e.imageUrl,className:"img-fluid",alt:"Product"})})},r)}))})}),(0,h.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,h.jsx)(a.A,{options:M,children:r.productImages&&r.productImages.map((function(e,r){return(0,h.jsx)(a.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:e.imageUrl,className:"img-fluid",alt:""})})},r)}))})})]}),(0,h.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,h.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,h.jsx)("h2",{children:r.productTitle}),(0,h.jsx)("div",{className:"product-details-price",children:null!==x?(0,h.jsxs)(s.Fragment,{children:[(0,h.jsx)("span",{children:n.currencySymbol+p})," ",(0,h.jsx)("span",{className:"old",children:n.currencySymbol+v})]}):(0,h.jsxs)("span",{children:[n.currencySymbol+v," "]})}),r.rating&&r.rating>0?(0,h.jsx)("div",{className:"pro-details-rating-wrap",children:(0,h.jsx)("div",{className:"pro-details-rating",children:(0,h.jsx)(l.A,{ratingValue:r.rating})})}):"",(0,h.jsx)("div",{className:"pro-details-list",children:(0,h.jsx)("p",{children:r.productDescription})}),r._id?(0,h.jsx)("div",{className:"pro-details-quality",children:(0,h.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,h.jsx)(m.N_,{to:"/product/".concat(r._id),rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,h.jsxs)("div",{className:"pro-details-quality",children:[(0,h.jsxs)("div",{className:"cart-plus-minus",children:[(0,h.jsx)("button",{onClick:function(){return O(H>1?H-1:1)},className:"dec qtybutton",children:"-"}),(0,h.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:H,readOnly:!0}),(0,h.jsx)("button",{onClick:function(){return O(H<z-R?H+1:H)},className:"inc qtybutton",children:"+"})]}),(0,h.jsx)("div",{className:"pro-details-cart btn-hover"}),(0,h.jsx)("div",{className:"pro-details-wishlist",children:(0,h.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,u.U4)(r))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-details-compare",children:(0,h.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Added to compare":"Add to compare",onClick:function(){return S((0,f.wL)(r))},children:(0,h.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},7014:function(e,r,n){var t=n(8),s=n(6356);r.A=function(e){for(var r=e.ratingValue,n=[],i=0;i<5;i++)n.push((0,s.jsx)("i",{className:"fa fa-star-o"},i));if(r&&r>0)for(var o=0;o<=r-1;o++)n[o]=(0,s.jsx)("i",{className:"fa fa-star-o yellow"},o);return(0,s.jsx)(t.Fragment,{children:n})}},3667:function(e,r,n){n.d(r,{A:function(){return c}});var t=n(8057),s=n(8),i=function(){var e=(0,s.useState)(!1),r=(0,t.A)(e,2),n=r[0],i=r[1];return(0,s.useEffect)((function(){var e=function(){var e=window.pageYOffset;i(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[n]),{stick:n,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},o=n(6356),c=function(){var e=i(),r=e.stick,n=e.onClickHandler;return r?(0,o.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:n,children:(0,o.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},9975:function(e,r,n){var t=n(6161),s=n(6356);r.A=function(e){var r=e.titleText,n=e.subtitleText,i=e.positionClass,o=e.spaceClass,c=e.borderClass;return(0,s.jsxs)("div",{className:(0,t.A)("section-title-8",i,o,c),children:[(0,s.jsx)("h2",{children:r}),(0,s.jsx)("p",{children:n})]})}},1855:function(e,r,n){n.d(r,{q:function(){return l.qr}});var t=n(737),s=n(1348),i=n(8),o=n(6161),c=n(3396),l=n(1440),a=n(6356),d=(0,i.forwardRef)((function(e,r){var n=e.options,i=e.prevIcon,d=e.nextIcon,u=e.children,f=e.className,m=e.navClass,h=void 0!==(null===n||void 0===n?void 0:n.modules)?n.modules:[],x="prev-".concat(m||"swiper-nav"),v="next-".concat(m||"swiper-nav"),p=(0,s.A)((0,s.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===n||void 0===n||!n.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},n),{},{modules:[c.Vx,c.dK,c.Jq,c.Ij].concat((0,t.A)(h)),navigation:!(null===n||void 0===n||!n.navigation)&&{prevEl:".".concat(x),nextEl:".".concat(v)},pagination:!(null===n||void 0===n||!n.pagination)&&{clickable:!0}});return(0,a.jsxs)("div",{className:(0,o.A)("swiper-wrap",f),ref:r,children:[(0,a.jsx)(l.RC,(0,s.A)((0,s.A)({},p),{},{children:u})),(null===p||void 0===p?void 0:p.navigation)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(x),children:(0,a.jsx)("i",{className:(0,o.A)(i,"icon")})}),(0,a.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(v),children:(0,a.jsx)("i",{className:(0,o.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},r.A=d},6026:function(e,r,n){n.d(r,{Gj:function(){return l},L:function(){return x},SC:function(){return d},VI:function(){return u},d$:function(){return s},do:function(){return i},e1:function(){return c},nL:function(){return h},pQ:function(){return o},sQ:function(){return v},ur:function(){return m},zf:function(){return f}});var t=n(737),s=function(e,r,n,t){var s=r?e.filter((function(e){return e.category.filter((function(e){return e===r}))[0]})):e;if(n&&"new"===n){var i=s.filter((function(e){return e.new}));return i.slice(0,t||i.length)}if(n&&"bestSeller"===n)return s.sort((function(e,r){return r.saleCount-e.saleCount})).slice(0,t||s.length);if(n&&"saleItems"===n){var o=s.filter((function(e){return e.discount&&e.discount>0}));return o.slice(0,t||o.length)}return s.slice(0,t||s.length)},i=function(e,r){return r&&r>0?e-e*(r/100):null},o=function(e,r,n,t){var s=e.find((function(e){return e.id===r.id&&(!e.selectedProductColor||e.selectedProductColor===n)&&(!e.selectedProductSize||e.selectedProductSize===t)}));return e.length>=1&&s?r.variation?e.find((function(e){return e.id===r.id&&e.selectedProductColor===n&&e.selectedProductSize===t})).quantity:e.find((function(e){return r.id===e.id})).quantity:0},c=function(e,r,n){return e.stock?e.stock:e.variation.filter((function(e){return e.color===r}))[0].size.filter((function(e){return e.name===n}))[0].stock},l=function(e,r,n){if(e&&r&&n){if("category"===r)return e.filter((function(e){return e.category.filter((function(e){return e===n}))[0]}));if("tag"===r)return e.filter((function(e){return e.tag.filter((function(e){return e===n}))[0]}));if("color"===r)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===n}))[0]}));if("size"===r)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===n}))[0]}))[0]}));if("filterSort"===r){var s=(0,t.A)(e);if("default"===n)return s;if("priceHighToLow"===n)return s.sort((function(e,r){return r.price-e.price}));if("priceLowToHigh"===n)return s.sort((function(e,r){return e.price-r.price}))}}return e},a=function(e){return e.filter((function(e,r,n){return r===n.indexOf(e)}))},d=function(e){var r=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return r.push(e)}))})),a(r)},u=function(e){var r=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return r.push(e)}))})),a(r)},f=function(e){var r=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return r.push(e.color)}))})),a(r)},m=function(e){var r=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return r.push(e.name)}))}))})),a(r)},h=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},x=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},v=function(e){var r=document.querySelector("#product-filter-wrapper");r.classList.toggle("active"),r.style.height?r.style.height=null:r.style.height=r.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},5327:function(e,r,n){var t=n(6161),s=n(4025),i=n(1806),o=n(7003),c=n(6356);r.A=function(e){var r=e.backgroundColorClass,n=e.spaceTopClass,l=e.spaceBottomClass,a=e.spaceLeftClass,d=e.spaceRightClass,u=e.containerClass,f=e.extraFooterClass,m=e.sideMenu;return(0,c.jsxs)("footer",{className:(0,t.A)("footer-area",r,n,l,f,a,d),children:[(0,c.jsx)("div",{className:"".concat(u||"container"),children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsx)(i.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,c.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"ABOUT US"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{to:"/about",children:"About us"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{to:"#/",children:"Store location"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{to:"/contact",children:"Contact"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"USEFUL LINKS"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{to:"#/",children:"Returns"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{to:"#/",children:"Support Policy"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{to:"#/",children:"Size guide"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,c.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"FOLLOW US"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,c.jsx)(o.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:m})})]})}),(0,c.jsx)("div",{}),(0,c.jsxs)("p",{style:{fontSize:"12px",textAlign:"center"},children:["Design & Developed By",(0,c.jsxs)("a",{href:"https://www.codechip.in",target:"_blank",rel:"noreferrer",children:[" ","Codechip Studios"]})]})]})}},3947:function(e,r,n){n.d(r,{A:function(){return h}});var t=n(8057),s=n(8),i=n(6161),o=n(729),c=n(4370),l=n(8990),a=n(5314),d=n(3686),u=n(6609),f=n(6356),m=function(e){var r=e.borderStyle,n=(0,d.d4)((function(e){return e.currency}));return(0,f.jsxs)("div",{className:(0,i.A)("header-top-wap","fluid-border"===r&&"border-bottom"),children:[(0,f.jsx)(u.A,{currency:n}),(0,f.jsx)("div",{className:"header-offer",children:(0,f.jsxs)("p",{children:["Gate no.02 vijay market Ansari road shastri\xa0park | 110053"," ",(0,f.jsx)("span",{})]})})]})},h=function(e){var r=e.layout,n=e.top,d=e.borderStyle,u=e.headerPaddingClass,h=e.headerPositionClass,x=e.headerBgClass,v=(0,s.useState)(0),p=(0,t.A)(v,2),g=p[0],j=p[1],b=(0,s.useState)(0),N=(0,t.A)(b,2),w=N[0],A=N[1];(0,s.useEffect)((function(){var e=document.querySelector(".sticky-bar");return A(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){j(window.scrollY)};return(0,f.jsxs)("header",{className:(0,i.A)("header-area clearfix",x,h),children:[(0,f.jsx)("div",{className:(0,i.A)("header-top-area",u,"visible"===n?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,f.jsx)("div",{className:"container-fluid"===r?r:"container",children:(0,f.jsx)(m,{borderStyle:d})})}),(0,f.jsx)("div",{className:(0,i.A)(u,"sticky-bar header-res-padding clearfix",g>w&&"stick"),children:(0,f.jsxs)("div",{className:"container-fluid"===r?r:"container",children:[(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,f.jsx)(o.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,f.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,f.jsx)(c.A,{})}),(0,f.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,f.jsx)(l.A,{})})]}),(0,f.jsx)(a.A,{})]})})]})}},4885:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')}}]);
//# sourceMappingURL=1179.eaa43eed.chunk.js.map