"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[6701],{6932:function(e,s,a){a.d(s,{A:function(){return o}});var t=a(8057),n=a(6161),r=a(8),i=function(e){var s=new Date(e).getTime(),a=(0,r.useState)(s-(new Date).getTime()),n=(0,t.A)(a,2),i=n[0],l=n[1];return(0,r.useEffect)((function(){if(!(i<=0)){var e=setInterval((function(){l(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,i]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(i)},l=a(6356),c=function(e){var s=e.value,a=e.type;return(0,l.jsxs)("span",{className:"cdown",children:[s," ",(0,l.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,r=i(s),o=(0,t.A)(r,4),d=o[0],m=o[1],u=o[2],p=o[3];return(0,l.jsxs)("div",{className:(0,n.A)("timer timer-style",a),children:[(0,l.jsx)(c,{value:d,type:"days"}),(0,l.jsx)(c,{value:m,type:"hours"}),(0,l.jsx)(c,{value:u,type:"minutes"}),(0,l.jsx)(c,{value:p,type:"secs"})]})}},6609:function(e,s,a){var t=a(3686),n=a(3924),r=(a(2481),a(6356));s.A=function(e){e.currency,(0,n.Bd)().i18n,(0,t.wA)();return(0,r.jsx)("div",{className:"language-currency-wrap",children:(0,r.jsx)("div",{className:"same-language-currency",children:(0,r.jsx)("p",{children:"Call Us +91 92057 53225"})})})}},7513:function(e,s,a){var t=a(8),n=a(3947),r=a(5327),i=a(3667),l=a(6356);s.A=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(n.A,{layout:a,top:c,headerPaddingClass:o,headerPositionClass:d}),s,(0,l.jsx)(r.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(i.A,{})]})}},6701:function(e,s,a){a.r(s),a.d(s,{default:function(){return B}});var t=a(8),n=a(879),r=a(7513),i=a(3396),l=a(1855),c=JSON.parse('[{"id":1,"title":"2020 Latest Collection","subtitle":"-40% Offer All <br>New Book.","image":"/assets/img/slider/slider-24.jpg","url":"/shop-grid-standard"},{"id":2,"title":"2020 Latest Collection","subtitle":"-20% Offer All <br>New Book.","image":"/assets/img/slider/slider-25.jpg","url":"/shop-grid-standard"}]'),o=a(4025),d=a(6356),m=function(e){var s=e.data;return(0,d.jsx)("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12",children:(0,d.jsxs)("div",{className:"slider-content-2 slider-content-2--white slider-animated-1",children:[(0,d.jsx)("h3",{className:"animated no-style",children:s.title}),(0,d.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,d.jsx)("div",{className:"slider-btn btn-hover",children:(0,d.jsx)(o.N_,{className:"animated rounden-btn",to:""+s.url,children:"SHOP NOW"})})]})})})})})},u={effect:"fade",fadeEffect:{crossFade:!0},modules:[i._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},p=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,d.jsx)(l.A,{options:u,children:c.map((function(e,s){return(0,d.jsx)(l.q,{children:(0,d.jsx)(m,{data:e})},s)}))})})})},h=a(6161),g=JSON.parse('[{"id":"1","image":"/assets/img/banner/banner34.jpg","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/banner/banner35.jpg","link":"/shop-grid-standard"}]'),x=function(e){var s=e.data,a=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,h.A)("single-banner",a),children:(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})})})},j=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,h.A)("banner-area",s,a),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:null===g||void 0===g?void 0:g.map((function(e,s){return(0,d.jsx)("div",{className:"col-sm-6 col-12",children:(0,d.jsx)(x,{data:e})},s)}))})})})},v=a(4385),f=a(5348),N=a(5769),b=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,t=e.category,n=e.productTabClass;return(0,d.jsx)("div",{className:(0,h.A)("product-area",s,a),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)(v.A.Container,{defaultActiveKey:"bestSeller",children:[(0,d.jsxs)(f.A,{variant:"pills",className:(0,h.A)("product-tab-list-2 mb-60 justify-content-center",n),children:[(0,d.jsx)(f.A.Item,{children:(0,d.jsx)(f.A.Link,{eventKey:"newArrival",children:(0,d.jsx)("h4",{children:"New Arrivals"})})}),(0,d.jsx)(f.A.Item,{children:(0,d.jsx)(f.A.Link,{eventKey:"bestSeller",children:(0,d.jsx)("h4",{children:"Best Sellers"})})}),(0,d.jsx)(f.A.Item,{children:(0,d.jsx)(f.A.Link,{eventKey:"saleItems",children:(0,d.jsx)("h4",{children:"Sale Items"})})})]}),(0,d.jsxs)(v.A.Content,{children:[(0,d.jsx)(v.A.Pane,{eventKey:"newArrival",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(N.A,{category:t,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,d.jsx)(v.A.Pane,{eventKey:"bestSeller",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(N.A,{category:t,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,d.jsx)(v.A.Pane,{eventKey:"saleItems",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(N.A,{category:t,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]}),(0,d.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,d.jsx)(o.N_,{className:"loadMore6",to:"/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})},y=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-38.png","title":"Historical","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-39.png","title":"Magazine","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-36.jpg","title":"Bestseller","subtitle":"Starting at","price":"$29.00","link":"/shop-grid-standard"}]'),A=function(e){var s=e.data,a=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,h.A)("single-banner",a),children:[(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsxs)("h4",{children:[s.subtitle," ",(0,d.jsx)("span",{children:s.price})]}),(0,d.jsx)(o.N_,{to:s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},C=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,h.A)("banner-area",s,a),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:null===y||void 0===y?void 0:y.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,d.jsx)(A,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},w=a(3559),k=a(2304),I=a(1022),B=function(){return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)(n.A,{titleTemplate:"Book store Home",description:"Book store home of flone react minimalist eCommerce template."}),(0,d.jsxs)(r.A,{headerTop:"visible",children:[(0,d.jsx)(p,{}),(0,d.jsx)(j,{spaceTopClass:"pt-60"}),(0,d.jsx)(b,{category:"book",spaceTopClass:"pt-95"}),(0,d.jsx)(C,{spaceTopClass:"pt-100"}),(0,d.jsx)(w.A,{spaceTopClass:"pt-70",spaceBottomClass:"pb-95",dateTime:"November 13, 2023 12:12:00",countDownImage:"/assets/img/banner/deal-8.png"}),(0,d.jsx)(k.A,{spaceBottomClass:"pb-90",containerClass:"container",responsiveClass:"res-mrg-md-mt"}),(0,d.jsx)(I.A,{spaceBottomClass:"pb-70"})]})]})}},1022:function(e,s,a){a.d(s,{A:function(){return o}});var t=a(6161),n=a(5513),r=a(4025),i=a(6356),l=function(e){var s=e.singlePost;return(0,i.jsxs)("div",{className:"blog-wrap mb-30 scroll-zoom",children:[(0,i.jsxs)("div",{className:"blog-img",children:[(0,i.jsx)(r.N_,{to:""+s.url,children:(0,i.jsx)("img",{src:""+s.image,alt:""})}),(0,i.jsx)("div",{className:"blog-category-names blog-category-names--style2",children:s.category.map((function(e,s){return(0,i.jsx)("span",{className:"red",children:e},s)}))})]}),(0,i.jsx)("div",{className:"blog-content-wrap",children:(0,i.jsxs)("div",{className:"blog-content blog-content--style2 text-center",children:[(0,i.jsx)("h3",{children:(0,i.jsx)(r.N_,{to:""+s.url,children:s.title})}),(0,i.jsxs)("span",{children:["By"," ",(0,i.jsx)(r.N_,{to:""+s.authorUrl,children:s.author})]})]})})]})},c=a(1756),o=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,i.jsx)("div",{className:(0,t.A)("blog-area",s,a),children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(c.A,{titleText:"Latest News",subtitleText:"But I must explain to you how all this mistaken idea of denouncing.",positionClass:"text-center",spaceClass:"mb-55",borderClass:"no-border"}),(0,i.jsx)("div",{className:"row",children:null===n||void 0===n?void 0:n.map((function(e){return(0,i.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,i.jsx)(l,{singlePost:e})},e.id)}))})]})})}},3559:function(e,s,a){var t=a(6161),n=a(4025),r=a(6932),i=a(6356);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,l=e.dateTime,c=e.countDownImage;return(0,i.jsx)("div",{className:(0,t.A)("funfact-area",s,a),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-md-8 col-lg-6 order-1 order-lg-2",children:(0,i.jsxs)("div",{className:"funfact-content funfact-res text-center",children:[(0,i.jsx)("h2",{children:"Deal of the day"}),(0,i.jsx)("div",{className:"timer",children:(0,i.jsx)(r.A,{date:l})}),(0,i.jsx)("div",{className:"funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover",children:(0,i.jsx)(n.N_,{to:"/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,i.jsx)("div",{className:"col-md-4 col-lg-6 order-2 order-lg-1",children:(0,i.jsx)("div",{className:"funfact-image",children:(0,i.jsx)(n.N_,{to:"/shop-grid-standard",children:(0,i.jsx)("img",{src:""+c,alt:"",className:"img-fluid"})})})})]})})})}},2304:function(e,s,a){a.d(s,{A:function(){return l}});var t=a(6161),n=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-8.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#ccfbe9"},{"id":2,"titleImage":"/assets/img/icon-img/support-9.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#f2fbcc"},{"id":3,"titleImage":"/assets/img/icon-img/support-10.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#ddfbcc"}]'),r=a(6356),i=function(e){var s=e.data,a=e.spaceBottomClass;return(0,r.jsxs)("div",{className:(0,t.A)("support-wrap-3 text-center",a),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,r.jsx)("div",{className:"support-icon-2",children:(0,r.jsx)("img",{className:"animated",src:""+s.iconImage,alt:""})}),(0,r.jsxs)("div",{className:"support-content-3",children:[(0,r.jsx)("img",{src:""+s.titleImage,alt:""}),(0,r.jsx)("p",{children:s.title})]})]})},l=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,l=e.containerClass,c=e.gutterClass,o=e.responsiveClass,d=e.bgImg;return(0,r.jsx)("div",{className:(0,t.A)("support-area hm9-section-padding",s,a,o),style:d?{backgroundImage:"url(".concat(""+d,")")}:{},children:(0,r.jsx)("div",{className:(0,t.A)(l,c),children:(0,r.jsx)("div",{className:"row",children:null===n||void 0===n?void 0:n.map((function(e,s){return(0,r.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,r.jsx)(i,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})}},3947:function(e,s,a){a.d(s,{A:function(){return h}});var t=a(8057),n=a(8),r=a(6161),i=a(729),l=a(4370),c=a(8990),o=a(5314),d=a(3686),m=a(6609),u=a(6356),p=function(e){var s=e.borderStyle,a=(0,d.d4)((function(e){return e.currency}));return(0,u.jsxs)("div",{className:(0,r.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,u.jsx)(m.A,{currency:a}),(0,u.jsx)("div",{className:"header-offer",children:(0,u.jsxs)("p",{children:["Gate no.02 vijay market Ansari road shastri\xa0park | 110053"," ",(0,u.jsx)("span",{})]})})]})},h=function(e){var s=e.layout,a=e.top,d=e.borderStyle,m=e.headerPaddingClass,h=e.headerPositionClass,g=e.headerBgClass,x=(0,n.useState)(0),j=(0,t.A)(x,2),v=j[0],f=j[1],N=(0,n.useState)(0),b=(0,t.A)(N,2),y=b[0],A=b[1];(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return A(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){f(window.scrollY)};return(0,u.jsxs)("header",{className:(0,r.A)("header-area clearfix",g,h),children:[(0,u.jsx)("div",{className:(0,r.A)("header-top-area",m,"visible"===a?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsx)(p,{borderStyle:d})})}),(0,u.jsx)("div",{className:(0,r.A)(m,"sticky-bar header-res-padding clearfix",v>y&&"stick"),children:(0,u.jsxs)("div",{className:"container-fluid"===s?s:"container",children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsx)(i.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,u.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,u.jsx)(l.A,{})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,u.jsx)(c.A,{})})]}),(0,u.jsx)(o.A,{})]})})]})}},5769:function(e,s,a){a.d(s,{A:function(){return g}});var t=a(8),n=a(3686),r=a(6026),i=a(8057),l=a(4025),c=a(6161),o=a(3454),d=a(3280),m=a(925),u=a(5761),p=a(6356),h=function(e){var s=e.product,a=e.currency,h=e.cartItem,g=e.wishlistItem,x=e.compareItem,j=e.spaceBottomClass,v=(0,t.useState)(!1),f=(0,i.A)(v,2),N=f[0],b=f[1],y=(0,r.do)(s.price,s.discount),A=+(s.price*a.currencyRate).toFixed(2),C=+(y*a.currencyRate).toFixed(2),w=(0,n.wA)();return(0,p.jsxs)(t.Fragment,{children:[(0,p.jsxs)("div",{className:(0,c.A)("product-wrap-5",j),children:[(0,p.jsxs)("div",{className:"product-img",children:[(0,p.jsx)(l.N_,{to:"/product/"+s.id,children:(0,p.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""})}),s.discount||s.new?(0,p.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,p.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,p.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,p.jsxs)("div",{className:"product-action-4",children:[(0,p.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,p.jsx)("button",{className:void 0!==g?"active":"",disabled:void 0!==g,title:void 0!==g?"Added to wishlist":"Add to wishlist",onClick:function(){return w((0,m.U4)(s))},children:(0,p.jsx)("i",{className:"fa fa-heart-o"})})}),(0,p.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,p.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,p.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,p.jsx)(l.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,p.jsx)("i",{class:"fa fa-cog"})}):s.stock&&s.stock>0?(0,p.jsxs)("button",{onClick:function(){return w((0,d.bE)(s))},className:void 0!==h&&h.quantity>0?"active":"",disabled:void 0!==h&&h.quantity>0,title:void 0!==h?"Added to cart":"Add to cart",children:[" ",(0,p.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,p.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,p.jsx)("i",{className:"fa fa-shopping-cart"})})}),(0,p.jsx)("div",{className:"pro-same-action pro-compare",children:(0,p.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to compare":"Add to compare",onClick:function(){return w((0,u.wL)(s))},children:(0,p.jsx)("i",{className:"fa fa-retweet"})})}),(0,p.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,p.jsx)("button",{onClick:function(){return b(!0)},title:"Quick View",children:(0,p.jsx)("i",{className:"fa fa-eye"})})})]})]}),(0,p.jsxs)("div",{className:"product-content-5 text-center",children:[(0,p.jsx)("h3",{children:(0,p.jsx)(l.N_,{to:"/product/"+s.id,children:s.name})}),(0,p.jsx)("div",{className:"price-5",children:null!==y?(0,p.jsxs)(t.Fragment,{children:[(0,p.jsx)("span",{children:a.currencySymbol+C})," ",(0,p.jsx)("span",{className:"old",children:a.currencySymbol+A})]}):(0,p.jsxs)("span",{children:[a.currencySymbol+A," "]})})]})]}),(0,p.jsx)(o.A,{show:N,onHide:function(){return b(!1)},product:s,currency:a,discountedPrice:y,finalProductPrice:A,finalDiscountedPrice:C,wishlistItem:g,compareItem:x})]})},g=function(e){var s=e.spaceBottomClass,a=e.category,i=e.type,l=e.limit,c=(0,n.d4)((function(e){return e.product})).products,o=(0,n.d4)((function(e){return e.currency})),d=(0,n.d4)((function(e){return e.cart})).cartItems,m=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,u=(0,n.d4)((function(e){return e.compare})).compareItems,g=(0,r.d$)(c,a,i,l);return(0,p.jsx)(t.Fragment,{children:null===g||void 0===g?void 0:g.map((function(e){return(0,p.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,p.jsx)(h,{spaceBottomClass:s,product:e,currency:o,cartItem:d.find((function(s){return s.id===e.id})),wishlistItem:m.find((function(s){return s.id===e.id})),compareItem:u.find((function(s){return s.id===e.id}))})},e.id)}))})}},5513:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-1.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-2.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-3.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]')}}]);
//# sourceMappingURL=6701.37763aee.chunk.js.map