"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2997],{8358:function(e,s,a){var t=a(4025),i=a(6356);s.A=function(e){var s=e.singlePost;return(0,i.jsxs)("div",{className:"blog-wrap mb-30 scroll-zoom",children:[(0,i.jsxs)("div",{className:"blog-img",children:[(0,i.jsx)(t.N_,{to:""+s.url,children:(0,i.jsx)("img",{src:""+s.image,alt:""})}),(0,i.jsx)("div",{className:"blog-category-names",children:s.category.map((function(e,s){return(0,i.jsx)("span",{className:"purple",children:e},s)}))})]}),(0,i.jsx)("div",{className:"blog-content-wrap",children:(0,i.jsxs)("div",{className:"blog-content text-center",children:[(0,i.jsx)("h3",{children:(0,i.jsx)(t.N_,{to:""+s.url,children:s.title})}),(0,i.jsxs)("span",{children:["By"," ",(0,i.jsx)(t.N_,{to:""+s.authorUrl,children:s.author})]})]})})]})}},6932:function(e,s,a){a.d(s,{A:function(){return o}});var t=a(8057),i=a(6161),r=a(8),n=function(e){var s=new Date(e).getTime(),a=(0,r.useState)(s-(new Date).getTime()),i=(0,t.A)(a,2),n=i[0],l=i[1];return(0,r.useEffect)((function(){if(!(n<=0)){var e=setInterval((function(){l(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,n]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(n)},l=a(6356),c=function(e){var s=e.value,a=e.type;return(0,l.jsxs)("span",{className:"cdown",children:[s," ",(0,l.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,r=n(s),o=(0,t.A)(r,4),d=o[0],m=o[1],u=o[2],h=o[3];return(0,l.jsxs)("div",{className:(0,i.A)("timer timer-style",a),children:[(0,l.jsx)(c,{value:d,type:"days"}),(0,l.jsx)(c,{value:m,type:"hours"}),(0,l.jsx)(c,{value:u,type:"minutes"}),(0,l.jsx)(c,{value:h,type:"secs"})]})}},6609:function(e,s,a){var t=a(3686),i=a(3924),r=(a(2481),a(6356));s.A=function(e){e.currency,(0,i.Bd)().i18n,(0,t.wA)();return(0,r.jsx)("div",{className:"language-currency-wrap",children:(0,r.jsx)("div",{className:"same-language-currency",children:(0,r.jsx)("p",{children:"Call Us +91 92057 53225"})})})}},7513:function(e,s,a){var t=a(8),i=a(3947),r=a(5327),n=a(3667),l=a(6356);s.A=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(i.A,{layout:a,top:c,headerPaddingClass:o,headerPositionClass:d}),s,(0,l.jsx)(r.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(n.A,{})]})}},2997:function(e,s,a){a.r(s),a.d(s,{default:function(){return S}});var t=a(8),i=a(879),r=a(7513),n=a(3396),l=a(1855),c=JSON.parse('[{"id":1,"title":"Smart Products","subtitle":"Winter Offer 2024 Collection","image":"/assets/img/slider/single-slide-4.png","url":"/shop-grid-standard"},{"id":2,"title":"Smart Products","subtitle":"Summer Offer 2024 Collection","image":"/assets/img/slider/single-slide-5.png","url":"/shop-grid-standard"}]'),o=a(4025),d=a(6356),m=function(e){var s=e.data;return(0,d.jsx)("div",{className:"single-slider single-slider-10 slider-height-8 bg-aqua",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-12 col-sm-6 d-flex align-items-center",children:(0,d.jsxs)("div",{className:"slider-content slider-content-10 slider-animated-2",children:[(0,d.jsx)("h3",{className:"animated",children:s.title}),(0,d.jsx)("h1",{className:"animated",children:s.subtitle}),(0,d.jsx)("div",{className:"slider-btn btn-hover",children:(0,d.jsx)(o.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})}),(0,d.jsx)("div",{className:"col-12 col-sm-6",children:(0,d.jsx)("div",{className:"slider-singleimg-hm10 slider-animated-2 ml-40 mr-40",children:(0,d.jsx)("img",{className:"animated img-fluid",src:""+s.image,alt:""})})})]})})})},u={effect:"fade",fadeEffect:{crossFade:!0},modules:[n._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},h=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,d.jsx)(l.A,{options:u,children:c.map((function(e,s){return(0,d.jsx)(l.q,{children:(0,d.jsx)(m,{data:e})},s)}))})})})},p=a(6161),x=JSON.parse('[{"id":"1","image":"/assets/img/banner/banner-10.png","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/banner/banner-11.png","link":"/shop-grid-standard"}]'),j=function(e){var s=e.data,a=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,p.A)("single-banner",a),children:(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})})})},g=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,p.A)("banner-area",s,a),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:null===x||void 0===x?void 0:x.map((function(e,s){return(0,d.jsx)("div",{className:"col-sm-6 col-12",children:(0,d.jsx)(j,{data:e})},s)}))})})})},v=a(4385),f=a(5348),N=a(1756),b=a(3408),A=function(e){var s=e.spaceBottomClass,a=e.category;return(0,d.jsx)("div",{className:(0,p.A)("product-area",s),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(N.A,{titleText:"DAILY DEALS!",positionClass:"text-center"}),(0,d.jsxs)(v.A.Container,{defaultActiveKey:"bestSeller",children:[(0,d.jsxs)(f.A,{variant:"pills",className:"product-tab-list pt-30 pb-55 text-center",children:[(0,d.jsx)(f.A.Item,{children:(0,d.jsx)(f.A.Link,{eventKey:"newArrival",children:(0,d.jsx)("h4",{children:"New Arrivals"})})}),(0,d.jsx)(f.A.Item,{children:(0,d.jsx)(f.A.Link,{eventKey:"bestSeller",children:(0,d.jsx)("h4",{children:"Best Sellers"})})}),(0,d.jsx)(f.A.Item,{children:(0,d.jsx)(f.A.Link,{eventKey:"saleItems",children:(0,d.jsx)("h4",{children:"Sale Items"})})})]}),(0,d.jsxs)(v.A.Content,{children:[(0,d.jsx)(v.A.Pane,{eventKey:"newArrival",children:(0,d.jsx)("div",{className:"row three-column",children:(0,d.jsx)(b.A,{category:a,type:"new",limit:6,spaceBottomClass:"mb-25"})})}),(0,d.jsx)(v.A.Pane,{eventKey:"bestSeller",children:(0,d.jsx)("div",{className:"row three-column",children:(0,d.jsx)(b.A,{category:a,type:"bestSeller",limit:6,spaceBottomClass:"mb-25"})})}),(0,d.jsx)(v.A.Pane,{eventKey:"saleItems",children:(0,d.jsx)("div",{className:"row three-column",children:(0,d.jsx)(b.A,{category:a,type:"saleItems",limit:6,spaceBottomClass:"mb-25"})})})]})]}),(0,d.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,d.jsx)(o.N_,{className:"loadMore6",to:"/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})},y=a(6932),C=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,t=e.bgImg,i=e.dateTime;return(0,d.jsx)("div",{className:(0,p.A)("funfact-area",s,a),style:{backgroundImage:"url(".concat(""+t,")")},children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-lg-6 ms-auto",children:(0,d.jsxs)("div",{className:"funfact-content text-center",children:[(0,d.jsx)("h2",{children:"Deal of the day"}),(0,d.jsx)("div",{className:"timer",children:(0,d.jsx)(y.A,{date:i})}),(0,d.jsx)("div",{className:"funfact-btn btn-hover",children:(0,d.jsx)(o.N_,{to:"/shop-grid-standard",children:"SHOP NOW"})})]})})})})})},w=a(7006),k=a(862),S=function(){return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)(i.A,{titleTemplate:"Furniture Home",description:"Furniture home of flone react minimalist eCommerce template."}),(0,d.jsxs)(r.A,{headerTop:"visible",children:[(0,d.jsx)(h,{}),(0,d.jsx)(g,{spaceTopClass:"pt-80",spaceBottomClass:"pb-60"}),(0,d.jsx)(A,{spaceBottomClass:"pb-100",category:"furniture"}),(0,d.jsx)(C,{spaceTopClass:"pt-115",spaceBottomClass:"pb-115",bgImg:"/assets/img/bg/bg-1.jpg",dateTime:"November 13, 2023 12:12:00"}),(0,d.jsx)(w.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-60"}),(0,d.jsx)(k.A,{spaceBottomClass:"pb-55"})]})]})}},862:function(e,s,a){var t=a(6161),i=a(5513),r=a(8358),n=a(1756),l=a(6356);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,l.jsx)("div",{className:(0,t.A)("blog-area",s,a),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.A,{titleText:"OUR BLOG",positionClass:"text-center",spaceClass:"mb-55"}),(0,l.jsx)("div",{className:"row",children:null===i||void 0===i?void 0:i.map((function(e){return(0,l.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,l.jsx)(r.A,{singlePost:e})},e.id)}))})]})})}},7006:function(e,s,a){a.d(s,{A:function(){return l}});var t=a(6161),i=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Shipping","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"},{"id":2,"image":"/assets/img/icon-img/support-2.png","title":"Support 24/7","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"},{"id":3,"image":"/assets/img/icon-img/support-3.png","title":"Money Return","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"}]'),r=a(6356),n=function(e){var s=e.data,a=e.spaceBottomClass,i=e.textAlignClass;return(0,r.jsx)("div",{className:(0,t.A)("support-wrap-2 support-shape",a,i),children:(0,r.jsxs)("div",{className:"support-content-2",children:[(0,r.jsx)("img",{className:"animated",src:""+s.image,alt:""}),(0,r.jsx)("h5",{children:s.title}),(0,r.jsx)("p",{children:s.subtitle})]})})},l=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,r.jsx)("div",{className:(0,t.A)("support-area",s,a),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row feature-icon-two-wrap",children:null===i||void 0===i?void 0:i.map((function(e,s){return(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)(n,{data:e,spaceBottomClass:"mb-30",textAlignClass:"text-center"})},s)}))})})})}},3947:function(e,s,a){a.d(s,{A:function(){return p}});var t=a(8057),i=a(8),r=a(6161),n=a(729),l=a(4370),c=a(8990),o=a(5314),d=a(3686),m=a(6609),u=a(6356),h=function(e){var s=e.borderStyle,a=(0,d.d4)((function(e){return e.currency}));return(0,u.jsxs)("div",{className:(0,r.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,u.jsx)(m.A,{currency:a}),(0,u.jsx)("div",{className:"header-offer",children:(0,u.jsxs)("p",{children:["Gate no.02 vijay market Ansari road shastri\xa0park | 110053"," ",(0,u.jsx)("span",{})]})})]})},p=function(e){var s=e.layout,a=e.top,d=e.borderStyle,m=e.headerPaddingClass,p=e.headerPositionClass,x=e.headerBgClass,j=(0,i.useState)(0),g=(0,t.A)(j,2),v=g[0],f=g[1],N=(0,i.useState)(0),b=(0,t.A)(N,2),A=b[0],y=b[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){f(window.scrollY)};return(0,u.jsxs)("header",{className:(0,r.A)("header-area clearfix",x,p),children:[(0,u.jsx)("div",{className:(0,r.A)("header-top-area",m,"visible"===a?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsx)(h,{borderStyle:d})})}),(0,u.jsx)("div",{className:(0,r.A)(m,"sticky-bar header-res-padding clearfix",v>A&&"stick"),children:(0,u.jsxs)("div",{className:"container-fluid"===s?s:"container",children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsx)(n.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,u.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,u.jsx)(l.A,{})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,u.jsx)(c.A,{})})]}),(0,u.jsx)(o.A,{})]})})]})}},3408:function(e,s,a){a.d(s,{A:function(){return x}});var t=a(8),i=a(3686),r=a(6026),n=a(8057),l=a(4025),c=a(6161),o=a(3454),d=a(3280),m=a(925),u=a(5761),h=a(6356),p=function(e){var s=e.product,a=e.currency,p=e.cartItem,x=e.wishlistItem,j=e.compareItem,g=e.spaceBottomClass,v=e.colorClass,f=e.titlePriceClass,N=(0,t.useState)(!1),b=(0,n.A)(N,2),A=b[0],y=b[1],C=(0,r.do)(s.price,s.discount),w=+(s.price*a.currencyRate).toFixed(2),k=+(C*a.currencyRate).toFixed(2),S=(0,i.wA)();return(0,h.jsxs)(t.Fragment,{children:[(0,h.jsxs)("div",{className:(0,c.A)("product-wrap-2",g,v),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(l.N_,{to:"/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(l.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,h.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return S((0,d.bE)(s))},className:void 0!==p&&p.quantity>0?"active":"",disabled:void 0!==p&&p.quantity>0,title:void 0!==p?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,h.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,h.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,h.jsx)("button",{onClick:function(){return y(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"fa fa-eye"})}),(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to compare":"Add to compare",onClick:function(){return S((0,u.wL)(s))},children:(0,h.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,h.jsxs)("div",{className:"product-content-2",children:[(0,h.jsxs)("div",{className:"title-price-wrap-2 ".concat(f||""),children:[(0,h.jsx)("h3",{children:(0,h.jsx)(l.N_,{to:"/product/"+s.id,children:s.name})}),(0,h.jsx)("div",{className:"price-2",children:null!==C?(0,h.jsxs)(t.Fragment,{children:[(0,h.jsx)("span",{children:a.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:a.currencySymbol+w})]}):(0,h.jsxs)("span",{children:[a.currencySymbol+w," "]})})]}),(0,h.jsx)("div",{className:"pro-wishlist-2",children:(0,h.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,m.U4)(s))},children:(0,h.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,h.jsx)(o.A,{show:A,onHide:function(){return y(!1)},product:s,currency:a,discountedPrice:C,finalProductPrice:w,finalDiscountedPrice:k,wishlistItem:x,compareItem:j})]})},x=function(e){var s=e.spaceBottomClass,a=e.colorClass,n=e.titlePriceClass,l=e.category,c=e.type,o=e.limit,d=(0,i.d4)((function(e){return e.product})).products,m=(0,i.d4)((function(e){return e.currency})),u=(0,i.d4)((function(e){return e.cart})).cartItems,x=(0,i.d4)((function(e){return e.wishlist})).wishlistItems,j=(0,i.d4)((function(e){return e.compare})).compareItems,g=(0,r.d$)(d,l,c,o);return(0,h.jsx)(t.Fragment,{children:null===g||void 0===g?void 0:g.map((function(e){return(0,h.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,h.jsx)(p,{spaceBottomClass:s,colorClass:a,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:x.find((function(s){return s.id===e.id})),compareItem:j.find((function(s){return s.id===e.id})),titlePriceClass:n})},e.id)}))})}},5513:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-1.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-2.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-3.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]')}}]);
//# sourceMappingURL=2997.0ce829af.chunk.js.map