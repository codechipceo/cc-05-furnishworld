"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[1026],{1806:function(e,r,n){var t=n(6161),i=n(4025),s=n(6356);r.A=function(e){var r=e.footerLogo,n=e.spaceBottomClass,c=e.colorClass;return(0,s.jsxs)("div",{className:(0,t.A)("copyright",n,c),children:[(0,s.jsx)("div",{className:"footer-logo",children:(0,s.jsx)(i.N_,{to:"/",children:(0,s.jsx)("img",{alt:"",src:""+r})})}),(0,s.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,s.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),".",(0,s.jsx)("br",{})," All Rights Reserved"]})]})}},7003:function(e,r,n){n.d(r,{A:function(){return l}});var t=n(6161),i=n(1052),s=n(6356),c=function(e){var r,n=e.status,t=e.message,i=e.onValidated;return(0,s.jsxs)("div",{className:"subscribe-form",children:[(0,s.jsxs)("div",{className:"mc-form",children:[(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return r=e},type:"email",placeholder:"Enter your email address..."})}),(0,s.jsx)("div",{className:"clear",children:(0,s.jsx)("button",{className:"button",onClick:function(){r&&r.value.indexOf("@")>-1&&i({EMAIL:r.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===n&&(0,s.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===n&&(0,s.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:t}}),"success"===n&&(0,s.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:t}})]})},a=function(e){var r=e.mailchimpUrl;return(0,s.jsx)("div",{children:(0,s.jsx)(i.A,{url:r,render:function(e){var r=e.subscribe,n=e.status,t=e.message;return(0,s.jsx)(c,{status:n,message:t,onValidated:function(e){return r(e)}})}})})},l=function(e){var r=e.spaceBottomClass,n=e.spaceLeftClass,i=e.sideMenu,c=e.colorClass,l=e.widgetColorClass;return(0,s.jsxs)("div",{className:(0,t.A)("footer-widget",r,i?"ml-ntv5":n,l),children:[(0,s.jsx)("div",{className:"footer-title",children:(0,s.jsx)("h3",{children:"SUBSCRIBE"})}),(0,s.jsxs)("div",{className:(0,t.A)("subscribe-style",c),children:[(0,s.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,s.jsx)(a,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},729:function(e,r,n){var t=n(6161),i=n(4025),s=n(6356);r.A=function(e){var r=e.imageUrl,n=e.logoClass;return(0,s.jsx)("div",{className:(0,t.A)(n),children:(0,s.jsx)(i.N_,{to:"/",children:(0,s.jsx)("img",{alt:"",src:""+r})})})}},6609:function(e,r,n){var t=n(3686),i=n(3924),s=(n(2481),n(6356));r.A=function(e){e.currency,(0,i.Bd)().i18n,(0,t.wA)();return(0,s.jsx)("div",{className:"language-currency-wrap",children:(0,s.jsx)("div",{className:"same-language-currency",children:(0,s.jsx)("p",{children:"Call Us +91 92057 53225"})})})}},3667:function(e,r,n){n.d(r,{A:function(){return a}});var t=n(8057),i=n(8),s=function(){var e=(0,i.useState)(!1),r=(0,t.A)(e,2),n=r[0],s=r[1];return(0,i.useEffect)((function(){var e=function(){var e=window.pageYOffset;s(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[n]),{stick:n,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=n(6356),a=function(){var e=s(),r=e.stick,n=e.onClickHandler;return r?(0,c.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:n,children:(0,c.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},6026:function(e,r,n){n.d(r,{Gj:function(){return l},L:function(){return x},SC:function(){return d},VI:function(){return u},d$:function(){return i},do:function(){return s},e1:function(){return a},nL:function(){return m},pQ:function(){return c},sQ:function(){return j},ur:function(){return h},zf:function(){return f}});var t=n(737),i=function(e,r,n,t){var i=r?e.filter((function(e){return e.category.filter((function(e){return e===r}))[0]})):e;if(n&&"new"===n){var s=i.filter((function(e){return e.new}));return s.slice(0,t||s.length)}if(n&&"bestSeller"===n)return i.sort((function(e,r){return r.saleCount-e.saleCount})).slice(0,t||i.length);if(n&&"saleItems"===n){var c=i.filter((function(e){return e.discount&&e.discount>0}));return c.slice(0,t||c.length)}return i.slice(0,t||i.length)},s=function(e,r){return r&&r>0?e-e*(r/100):null},c=function(e,r,n,t){var i=e.find((function(e){return e.id===r.id&&(!e.selectedProductColor||e.selectedProductColor===n)&&(!e.selectedProductSize||e.selectedProductSize===t)}));return e.length>=1&&i?r.variation?e.find((function(e){return e.id===r.id&&e.selectedProductColor===n&&e.selectedProductSize===t})).quantity:e.find((function(e){return r.id===e.id})).quantity:0},a=function(e,r,n){return e.stock?e.stock:e.variation.filter((function(e){return e.color===r}))[0].size.filter((function(e){return e.name===n}))[0].stock},l=function(e,r,n){if(e&&r&&n){if("category"===r)return e.filter((function(e){return e.category.filter((function(e){return e===n}))[0]}));if("tag"===r)return e.filter((function(e){return e.tag.filter((function(e){return e===n}))[0]}));if("color"===r)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===n}))[0]}));if("size"===r)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===n}))[0]}))[0]}));if("filterSort"===r){var i=(0,t.A)(e);if("default"===n)return i;if("priceHighToLow"===n)return i.sort((function(e,r){return r.price-e.price}));if("priceLowToHigh"===n)return i.sort((function(e,r){return e.price-r.price}))}}return e},o=function(e){return e.filter((function(e,r,n){return r===n.indexOf(e)}))},d=function(e){var r=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return r.push(e)}))})),o(r)},u=function(e){var r=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return r.push(e)}))})),o(r)},f=function(e){var r=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return r.push(e.color)}))})),o(r)},h=function(e){var r=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return r.push(e.name)}))}))})),o(r)},m=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},x=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},j=function(e){var r=document.querySelector("#product-filter-wrapper");r.classList.toggle("active"),r.style.height?r.style.height=null:r.style.height=r.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},7513:function(e,r,n){var t=n(8),i=n(3947),s=n(5327),c=n(3667),a=n(6356);r.A=function(e){var r=e.children,n=e.headerContainerClass,l=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,a.jsxs)(t.Fragment,{children:[(0,a.jsx)(i.A,{layout:n,top:l,headerPaddingClass:o,headerPositionClass:d}),r,(0,a.jsx)(s.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,a.jsx)(c.A,{})]})}},1026:function(e,r,n){n.r(r);var t=n(8),i=n(3686),s=n(8615),c=n(4025),a=n(6026),l=n(879),o=n(7513),d=n(3671),u=n(3280),f=n(925),h=n(6356);r.default=function(){var e=(0,i.wA)(),r=(0,s.zy)().pathname,n=(0,i.d4)((function(e){return e.currency})),m=(0,i.d4)((function(e){return e.wishlist})).wishlistItems,x=(0,i.d4)((function(e){return e.cart})).cartItems;return(0,h.jsxs)(t.Fragment,{children:[(0,h.jsx)(l.A,{titleTemplate:"Wishlist",description:"Wishlist page of flone react minimalist eCommerce template."}),(0,h.jsxs)(o.A,{headerTop:"visible",children:[(0,h.jsx)(d.A,{pages:[{label:"Home",path:"/"},{label:"Wishlist",path:""+r}]}),(0,h.jsx)("div",{className:"cart-main-area pt-90 pb-100",children:(0,h.jsx)("div",{className:"container",children:m&&m.length>=1?(0,h.jsxs)(t.Fragment,{children:[(0,h.jsx)("h3",{className:"cart-page-title",children:"Your wishlist items"}),(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-12",children:(0,h.jsx)("div",{className:"table-content table-responsive cart-table-content",children:(0,h.jsxs)("table",{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Image"}),(0,h.jsx)("th",{children:"Product Name"}),(0,h.jsx)("th",{children:"Unit Price"}),(0,h.jsx)("th",{children:"Add To Cart"}),(0,h.jsx)("th",{children:"action"})]})}),(0,h.jsx)("tbody",{children:m.map((function(r,i){var s=(0,a.do)(r.price,r.discount),l=(r.price*n.currencyRate).toFixed(2),o=(s*n.currencyRate).toFixed(2),d=x.find((function(e){return e.id===r.id}));return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:"product-thumbnail",children:(0,h.jsx)(c.N_,{to:"/product/"+r.id,children:(0,h.jsx)("img",{className:"img-fluid",src:""+r.image[0],alt:""})})}),(0,h.jsx)("td",{className:"product-name text-center",children:(0,h.jsx)(c.N_,{to:"/product/"+r.id,children:r.name})}),(0,h.jsx)("td",{className:"product-price-cart",children:null!==s?(0,h.jsxs)(t.Fragment,{children:[(0,h.jsx)("span",{className:"amount old",children:n.currencySymbol+l}),(0,h.jsx)("span",{className:"amount",children:n.currencySymbol+o})]}):(0,h.jsx)("span",{className:"amount",children:n.currencySymbol+l})}),(0,h.jsx)("td",{className:"product-wishlist-cart",children:r.affiliateLink?(0,h.jsxs)("a",{href:r.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):r.variation&&r.variation.length>=1?(0,h.jsx)(c.N_,{to:"".concat("","/product/").concat(r.id),children:"Select option"}):r.stock&&r.stock>0?(0,h.jsx)("button",{onClick:function(){return e((0,u.bE)(r))},className:void 0!==d&&d.quantity>0?"active":"",disabled:void 0!==d&&d.quantity>0,title:void 0!==r?"Added to cart":"Add to cart",children:void 0!==d&&d.quantity>0?"Added":"Add to cart"}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Out of stock"})}),(0,h.jsx)("td",{className:"product-remove",children:(0,h.jsx)("button",{onClick:function(){return e((0,f.zN)(r.id))},children:(0,h.jsx)("i",{className:"fa fa-times"})})})]},i)}))})]})})})}),(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-lg-12",children:(0,h.jsxs)("div",{className:"cart-shiping-update-wrapper",children:[(0,h.jsx)("div",{className:"cart-shiping-update",children:(0,h.jsx)(c.N_,{to:"/shop-grid-standard",children:"Continue Shopping"})}),(0,h.jsx)("div",{className:"cart-clear",children:(0,h.jsx)("button",{onClick:function(){return e((0,f.mL)())},children:"Clear Wishlist"})})]})})})]}):(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-lg-12",children:(0,h.jsxs)("div",{className:"item-empty-area text-center",children:[(0,h.jsx)("div",{className:"item-empty-area__icon mb-30",children:(0,h.jsx)("i",{className:"pe-7s-like"})}),(0,h.jsxs)("div",{className:"item-empty-area__text",children:["No items found in wishlist ",(0,h.jsx)("br",{})," ",(0,h.jsx)(c.N_,{to:"/shop-grid-standard",children:"Add Items"})]})]})})})})})]})]})}},3671:function(e,r,n){var t=n(3381),i=n(4025),s=n(6356);r.A=function(e){var r=e.pages;return(0,s.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(t.A,{children:null===r||void 0===r?void 0:r.map((function(e,n){var c=e.path,a=e.label;return n!==r.length-1?(0,s.jsx)(t.A.Item,{linkProps:{to:c},linkAs:i.N_,children:a},a):(0,s.jsx)(t.A.Item,{active:!0,children:a},a)}))})})})}},5327:function(e,r,n){var t=n(6161),i=n(4025),s=n(1806),c=n(7003),a=n(6356);r.A=function(e){var r=e.backgroundColorClass,n=e.spaceTopClass,l=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.containerClass,f=e.extraFooterClass,h=e.sideMenu;return(0,a.jsx)("footer",{className:(0,t.A)("footer-area",r,n,l,f,o,d),children:(0,a.jsx)("div",{className:"".concat(u||"container"),children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsx)(s.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,a.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"ABOUT US"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.N_,{to:"/about",children:"About us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.N_,{to:"#/",children:"Store location"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.N_,{to:"/contact",children:"Contact"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"USEFUL LINKS"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.N_,{to:"#/",children:"Returns"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.N_,{to:"#/",children:"Support Policy"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.N_,{to:"#/",children:"Size guide"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,a.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"FOLLOW US"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,a.jsx)(c.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h})})]})})})}},3947:function(e,r,n){n.d(r,{A:function(){return m}});var t=n(8057),i=n(8),s=n(6161),c=n(729),a=n(4370),l=n(8990),o=n(5314),d=n(3686),u=n(6609),f=n(6356),h=function(e){var r=e.borderStyle,n=(0,d.d4)((function(e){return e.currency}));return(0,f.jsxs)("div",{className:(0,s.A)("header-top-wap","fluid-border"===r&&"border-bottom"),children:[(0,f.jsx)(u.A,{currency:n}),(0,f.jsx)("div",{className:"header-offer",children:(0,f.jsxs)("p",{children:["Gate no.02 vijay market Ansari road shastri\xa0park | 110053"," ",(0,f.jsx)("span",{})]})})]})},m=function(e){var r=e.layout,n=e.top,d=e.borderStyle,u=e.headerPaddingClass,m=e.headerPositionClass,x=e.headerBgClass,j=(0,i.useState)(0),v=(0,t.A)(j,2),p=v[0],g=v[1],b=(0,i.useState)(0),N=(0,t.A)(b,2),A=N[0],w=N[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){g(window.scrollY)};return(0,f.jsxs)("header",{className:(0,s.A)("header-area clearfix",x,m),children:[(0,f.jsx)("div",{className:(0,s.A)("header-top-area",u,"visible"===n?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,f.jsx)("div",{className:"container-fluid"===r?r:"container",children:(0,f.jsx)(h,{borderStyle:d})})}),(0,f.jsx)("div",{className:(0,s.A)(u,"sticky-bar header-res-padding clearfix",p>A&&"stick"),children:(0,f.jsxs)("div",{className:"container-fluid"===r?r:"container",children:[(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,f.jsx)(c.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,f.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,f.jsx)(a.A,{})}),(0,f.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,f.jsx)(l.A,{})})]}),(0,f.jsx)(o.A,{})]})})]})}},3381:function(e,r,n){n.d(r,{A:function(){return j}});var t=n(1348),i=n(18),s=n(8406),c=n.n(s),a=n(8),l=n(4894),o=n(2646),d=n(6356),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=a.forwardRef((function(e,r){var n=e.bsPrefix,s=e.active,a=void 0!==s&&s,f=e.children,h=e.className,m=e.as,x=void 0===m?"li":m,j=e.linkAs,v=void 0===j?o.A:j,p=e.linkProps,g=void 0===p?{}:p,b=e.href,N=e.title,A=e.target,w=(0,i.A)(e,u),y=(0,l.oU)(n,"breadcrumb-item");return(0,d.jsx)(x,(0,t.A)((0,t.A)({ref:r},w),{},{className:c()(y,h,{active:a}),"aria-current":a?"page":void 0,children:a?f:(0,d.jsx)(v,(0,t.A)((0,t.A)({},g),{},{href:b,title:N,target:A,children:f}))}))}));f.displayName="BreadcrumbItem";var h=f,m=["bsPrefix","className","listProps","children","label","as"],x=a.forwardRef((function(e,r){var n=e.bsPrefix,s=e.className,a=e.listProps,o=void 0===a?{}:a,u=e.children,f=e.label,h=void 0===f?"breadcrumb":f,x=e.as,j=void 0===x?"nav":x,v=(0,i.A)(e,m),p=(0,l.oU)(n,"breadcrumb");return(0,d.jsx)(j,(0,t.A)((0,t.A)({"aria-label":h,className:s,ref:r},v),{},{children:(0,d.jsx)("ol",(0,t.A)((0,t.A)({},o),{},{className:c()(p,null==o?void 0:o.className),children:u}))}))}));x.displayName="Breadcrumb";var j=Object.assign(x,{Item:h})}}]);
//# sourceMappingURL=1026.f8ac75fd.chunk.js.map