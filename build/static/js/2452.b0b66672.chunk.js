"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2452],{8868:function(e,s,i){var a=i(6161),r=i(1052),n=i(6356),t=function(e){var s,i=e.status,r=e.message,t=e.onValidated,c=e.spaceTopClass,l=e.subscribeBtnClass;return(0,n.jsx)("div",{className:(0,a.A)("subscribe-form-3",c),children:(0,n.jsxs)("div",{className:"mc-form",children:[(0,n.jsx)("div",{children:(0,n.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===i&&(0,n.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===i&&(0,n.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),"success"===i&&(0,n.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),(0,n.jsx)("div",{className:"clear-3 ".concat(l||""),children:(0,n.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&t({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,i=e.spaceTopClass,a=e.subscribeBtnClass;return(0,n.jsx)("div",{children:(0,n.jsx)(r.A,{url:s,render:function(e){var s=e.subscribe,r=e.status,c=e.message;return(0,n.jsx)(t,{status:r,message:c,onValidated:function(e){return s(e)},spaceTopClass:i,subscribeBtnClass:a})}})})}},1759:function(e,s,i){var a=i(8057),r=i(8),n=i(6161),t=i(4025),c=i(3686),l=i(7014),d=i(6026),o=i(3454),m=i(3280),u=i(925),h=i(6356);s.A=function(e){var s=e.product,i=e.currency,x=e.cartItem,j=e.wishlistItem,p=e.compareItem,g=e.spaceBottomClass,f=(0,r.useState)(!1),v=(0,a.A)(f,2),b=v[0],N=v[1],A=(0,d.do)(s.price,s.discount),w=+(s.price*i.currencyRate).toFixed(2),k=+(A*i.currencyRate).toFixed(2),y=(0,c.wA)();return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsxs)("div",{className:(0,n.A)("product-wrap",g),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(t.N_,{to:"/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action",children:[(0,h.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to wishlist":"Add to wishlist",onClick:function(){return y((0,u.U4)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(t.N_,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return y((0,m.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==x&&x.quantity>0?"Added":"Add to cart"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,h.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,h.jsx)("button",{title:"Quick View",onClick:function(){return N(!0)},children:(0,h.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,h.jsxs)("div",{className:"product-content text-center",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(t.N_,{to:"/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"product-rating",children:(0,h.jsx)(l.A,{ratingValue:s.rating})}):"",(0,h.jsx)("div",{className:"product-price",children:null!==A?(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)("span",{children:i.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:i.currencySymbol+w})]}):(0,h.jsxs)("span",{children:[i.currencySymbol+w," "]})})]})]}),(0,h.jsx)(o.A,{show:b,onHide:function(){return N(!1)},product:s,currency:i,discountedPrice:A,finalProductPrice:w,finalDiscountedPrice:k,wishlistItem:j,compareItem:p})]})}},311:function(e,s,i){var a=i(6161),r=i(6356);s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass;return(0,r.jsx)("div",{className:(0,a.A)("welcome-area",s,i),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"welcome-content text-center",children:[(0,r.jsx)("h5",{children:"Who Are We"}),(0,r.jsx)("h1",{children:"Welcome To Flone"}),(0,r.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure"," "]})]})})})}},2452:function(e,s,i){i.r(s),i.d(s,{default:function(){return y}});var a=i(8),r=i(879),n=i(9582),t=i(5327),c=i(3667),l=i(6356),d=function(e){var s=e.children;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(n.A,{layout:"container-fluid"}),s,(0,l.jsx)(t.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(c.A,{})]})},o=i(3396),m=i(1855),u=JSON.parse('[{"id":1,"title":"Welcome to Flone","subtitle":"30% off Summer Vacation","image":"/assets/img/slider/slider-5.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Smart Products","subtitle":"40% off Summer Vacation","image":"/assets/img/slider/slider-5-1.jpg","url":"/shop-grid-standard"}]'),h=i(4025),x=function(e){var s=e.data;return(0,l.jsx)("div",{className:"slider-height-5 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12",children:(0,l.jsxs)("div",{className:"slider-content-6 slider-animated-1 text-center",children:[(0,l.jsx)("h1",{className:"animated",children:s.title}),(0,l.jsx)("p",{className:"animated",children:s.subtitle}),(0,l.jsx)("div",{className:"slider-btn-5 btn-hover",children:(0,l.jsx)(h.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},j={effect:"fade",fadeEffect:{crossFade:!0},modules:[o._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},p=function(){return(0,l.jsx)("div",{className:"slider-area",children:(0,l.jsx)("div",{className:"slider-active-2 nav-style-3",children:(0,l.jsx)(m.A,{options:j,className:"overflow-hidden",children:null===u||void 0===u?void 0:u.map((function(e,s){return(0,l.jsx)(m.q,{children:(0,l.jsx)(x,{data:e})},s)}))})})})},g=i(311),f=i(6161),v=i(4385),b=i(5348),N=i(3775),A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,a=e.bgColorClass,r=e.category;return(0,l.jsx)("div",{className:(0,f.A)("product-area",s,i,a),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)(v.A.Container,{defaultActiveKey:"bestSeller",children:[(0,l.jsxs)(b.A,{variant:"pills",className:"product-tab-list pb-55 text-center",children:[(0,l.jsx)(b.A.Item,{children:(0,l.jsx)(b.A.Link,{eventKey:"newArrival",children:(0,l.jsx)("h4",{children:"New Arrivals"})})}),(0,l.jsx)(b.A.Item,{children:(0,l.jsx)(b.A.Link,{eventKey:"bestSeller",children:(0,l.jsx)("h4",{children:"Best Sellers"})})}),(0,l.jsx)(b.A.Item,{children:(0,l.jsx)(b.A.Link,{eventKey:"saleItems",children:(0,l.jsx)("h4",{children:"Sale Items"})})})]}),(0,l.jsxs)(v.A.Content,{children:[(0,l.jsx)(v.A.Pane,{eventKey:"newArrival",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(N.A,{category:r,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,l.jsx)(v.A.Pane,{eventKey:"bestSeller",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(N.A,{category:r,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,l.jsx)(v.A.Pane,{eventKey:"saleItems",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(N.A,{category:r,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]})})})},w=i(7049),k=i(8945),y=function(){return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(r.A,{titleTemplate:"Fashion Home",description:"Fashion home of flone react minimalist eCommerce template."}),(0,l.jsxs)(d,{children:[(0,l.jsx)(p,{}),(0,l.jsx)(g.A,{spaceTopClass:"pt-95",spaceBottomClass:"pb-90"}),(0,l.jsx)(A,{spaceBottomClass:"pb-70",category:"fashion",sectionTitle:!1}),(0,l.jsx)(w.A,{spaceBottomClass:"pb-100"}),(0,l.jsx)(k.A,{})]})]})}},9582:function(e,s,i){i.d(s,{A:function(){return h}});var a=i(8057),r=i(8),n=i(6161),t=i(4025),c=i(8990),l=i(5314),d=i(6356),o=function(){return(0,d.jsx)("div",{className:"side-social",children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)("a",{className:"facebook",href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)("i",{className:"fa fa-facebook"})})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{className:"dribbble",href:"//www.dribbble.com",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)("i",{className:"fa fa-dribbble"})})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{className:"pinterest",href:"//www.pinterest.com",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{className:"twitter",href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)("i",{className:"fa fa-twitter"})})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{className:"linkedin",href:"//www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)("i",{className:"fa fa-linkedin"})})})]})})},m=i(4370),u=function(e){var s=e.activeState,i=e.getActiveState;return(0,d.jsxs)("div",{className:(0,n.A)("clickable-mainmenu",s?"inside":""),children:[(0,d.jsx)("div",{className:"clickable-mainmenu-icon",children:(0,d.jsx)("button",{className:"clickable-mainmenu-close",onClick:function(){return i(!1)},children:(0,d.jsx)("span",{className:"pe-7s-close"})})}),(0,d.jsx)("div",{className:"side-logo",children:(0,d.jsx)(t.N_,{to:"/",children:(0,d.jsx)("img",{alt:"",src:"/assets/img/logo/logo.png"})})}),(0,d.jsx)(m.A,{sidebarMenu:!0}),(0,d.jsx)(o,{})]})},h=function(e){var s=e.layout,i=e.headerPaddingClass,o=e.headerBgClass,m=(0,r.useState)(0),h=(0,a.A)(m,2),x=h[0],j=h[1],p=(0,r.useState)(0),g=(0,a.A)(p,2),f=g[0],v=g[1],b=(0,r.useState)(!1),N=(0,a.A)(b,2),A=N[0],w=N[1];(0,r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return v(e.offsetTop),window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}}),[]);var k=function(){j(window.scrollY)};return(0,d.jsxs)("header",{className:(0,n.A)("header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar header-hm-7",o,i,x>f&&"stick"),children:[(0,d.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-xl-5 col-lg-6 d-none d-lg-block",children:(0,d.jsx)("div",{className:"clickable-menu clickable-mainmenu-active",children:(0,d.jsx)("button",{onClick:function(){w(!0)},children:(0,d.jsx)("i",{className:"pe-7s-menu"})})})}),(0,d.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-6",children:(0,d.jsxs)("div",{className:"logo text-center logo-hm5",children:[(0,d.jsx)(t.N_,{className:"sticky-none",to:"/",children:(0,d.jsx)("img",{alt:"",src:"assets/img/logo/logo-2.png"})}),(0,d.jsx)(t.N_,{className:"sticky-block",to:"/",children:(0,d.jsx)("img",{alt:"",src:"assets/img/logo/logo.png"})})]})}),(0,d.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-6 col-6",children:(0,d.jsx)(c.A,{iconWhiteClass:"header-right-wrap-white"})})]})}),(0,d.jsx)(u,{activeState:A,getActiveState:function(e){w(e)}}),(0,d.jsx)(l.A,{})]})}},8945:function(e,s,i){i.d(s,{A:function(){return l}});var a=i(1855),r=i(8410),n=JSON.parse('[{"id":"1","image":"/assets/img/image-slider/image-slider-1.jpg","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/image-slider/image-slider-2.jpg","link":"/shop-grid-standard"},{"id":"3","image":"/assets/img/image-slider/image-slider-3.jpg","link":"/shop-grid-standard"},{"id":"4","image":"/assets/img/image-slider/image-slider-4.jpg","link":"/shop-grid-standard"},{"id":"5","image":"/assets/img/image-slider/image-slider-5.jpg","link":"/shop-grid-standard"},{"id":"6","image":"/assets/img/image-slider/image-slider-2.jpg","link":"/shop-grid-standard"}]'),t=i(6356),c={loop:!1,grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}}},l=function(){return(0,t.jsx)("div",{className:"image-slider-area",children:(0,t.jsx)("div",{className:"image-slider-active",children:n&&(0,t.jsx)(a.A,{options:c,children:n.map((function(e,s){return(0,t.jsx)(a.q,{children:(0,t.jsx)(r.A,{data:e})},s)}))})})})}},7049:function(e,s,i){var a=i(6161),r=i(8868),n=i(6356);s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,t=e.subscribeBtnClass;return(0,n.jsx)("div",{className:(0,a.A)("subscribe-area-3",s,i),children:(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,n.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,n.jsx)("h2",{children:"Subscribe "}),(0,n.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,n.jsx)(r.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:t})]})})})})})}},3775:function(e,s,i){var a=i(8),r=i(3686),n=i(6026),t=i(1759),c=i(6356);s.A=function(e){var s=e.spaceBottomClass,i=e.category,l=e.type,d=e.limit,o=(0,r.d4)((function(e){return e.product})).products,m=(0,r.d4)((function(e){return e.currency})),u=(0,r.d4)((function(e){return e.cart})).cartItems,h=(0,r.d4)((function(e){return e.wishlist})).wishlistItems,x=(0,r.d4)((function(e){return e.compare})).compareItems,j=(0,n.d$)(o,i,l,d);return(0,c.jsx)(a.Fragment,{children:null===j||void 0===j?void 0:j.map((function(e){return(0,c.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,c.jsx)(t.A,{spaceBottomClass:s,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))})}}}]);
//# sourceMappingURL=2452.b0b66672.chunk.js.map