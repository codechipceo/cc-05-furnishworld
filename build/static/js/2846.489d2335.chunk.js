"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2846],{6609:function(e,s,i){var r=i(3686),n=i(3924),a=(i(2481),i(6356));s.A=function(e){e.currency,(0,n.Bd)().i18n,(0,r.wA)();return(0,a.jsx)("div",{className:"language-currency-wrap",children:(0,a.jsx)("div",{className:"same-language-currency",children:(0,a.jsx)("p",{children:"Call Us +91 92057 53225"})})})}},1759:function(e,s,i){var r=i(8057),n=i(8),a=i(6161),t=i(4025),c=i(3686),l=i(7014),d=i(6026),o=i(3454),u=i(3280),m=i(925),h=i(6356);s.A=function(e){var s=e.product,i=e.currency,p=e.cartItem,x=e.wishlistItem,j=e.compareItem,f=e.spaceBottomClass,v=(0,n.useState)(!1),N=(0,r.A)(v,2),g=N[0],b=N[1],A=(0,d.do)(s.price,s.discount),y=+(s.price*i.currencyRate).toFixed(2),w=+(A*i.currencyRate).toFixed(2),k=(0,c.wA)();return(0,h.jsxs)(n.Fragment,{children:[(0,h.jsxs)("div",{className:(0,a.A)("product-wrap",f),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(t.N_,{to:"/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action",children:[(0,h.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,h.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to wishlist":"Add to wishlist",onClick:function(){return k((0,m.U4)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(t.N_,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return k((0,u.bE)(s))},className:void 0!==p&&p.quantity>0?"active":"",disabled:void 0!==p&&p.quantity>0,title:void 0!==p?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==p&&p.quantity>0?"Added":"Add to cart"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,h.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,h.jsx)("button",{title:"Quick View",onClick:function(){return b(!0)},children:(0,h.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,h.jsxs)("div",{className:"product-content text-center",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(t.N_,{to:"/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"product-rating",children:(0,h.jsx)(l.A,{ratingValue:s.rating})}):"",(0,h.jsx)("div",{className:"product-price",children:null!==A?(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)("span",{children:i.currencySymbol+w})," ",(0,h.jsx)("span",{className:"old",children:i.currencySymbol+y})]}):(0,h.jsxs)("span",{children:[i.currencySymbol+y," "]})})]})]}),(0,h.jsx)(o.A,{show:g,onHide:function(){return b(!1)},product:s,currency:i,discountedPrice:A,finalProductPrice:y,finalDiscountedPrice:w,wishlistItem:x,compareItem:j})]})}},7513:function(e,s,i){var r=i(8),n=i(3947),a=i(5327),t=i(3667),c=i(6356);s.A=function(e){var s=e.children,i=e.headerContainerClass,l=e.headerTop,d=e.headerPaddingClass,o=e.headerPositionClass;return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(n.A,{layout:i,top:l,headerPaddingClass:d,headerPositionClass:o}),s,(0,c.jsx)(a.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,c.jsx)(t.A,{})]})}},2846:function(e,s,i){i.r(s),i.d(s,{default:function(){return k}});var r=i(8),n=i(3686),a=i(8615),t=i(879),c=i(7513),l=i(3671),d=i(4869),o=i(8162),u=i(6161),m=i(6026),h=i(1855),p=i(6356),x=function(e){var s,i=e.product;return(0,p.jsx)("div",{className:"product-large-image-wrapper product-large-image-wrapper--slider",children:null!==i&&void 0!==i&&null!==(s=i.image)&&void 0!==s&&s.length?(0,p.jsx)(h.A,{options:{spaceBetween:15,slidesPerView:3,loop:!0,navigation:!0,breakpoints:{320:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:3}}},children:i.image.map((function(e,s){return(0,p.jsx)(h.q,{children:(0,p.jsx)("div",{className:"single-image",children:(0,p.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))}):null})},j=i(1348),f=i(8057),v=i(4025),N=i(7014),g=i(3280),b=i(925),A=i(5761),y=function(e){var s=e.product,i=e.discountedPrice,a=e.currency,t=e.finalDiscountedPrice,c=e.finalProductPrice,l=e.cartItems,d=e.wishlistItem,o=e.compareItem,u=(0,n.wA)(),h=(0,r.useState)(s.variation?s.variation[0].color:""),x=(0,f.A)(h,2),y=x[0],w=x[1],k=(0,r.useState)(s.variation?s.variation[0].size[0].name:""),P=(0,f.A)(k,2),C=P[0],I=P[1],S=(0,r.useState)(s.variation?s.variation[0].size[0].stock:s.stock),B=(0,f.A)(S,2),z=B[0],V=B[1],q=(0,r.useState)(1),D=(0,f.A)(q,2),F=D[0],T=D[1],_=(0,m.pQ)(l,s,y,C);return(0,p.jsxs)("div",{className:"product-details-content pro-details-slider-content",children:[(0,p.jsx)("h2",{children:s.name}),(0,p.jsx)("div",{className:"product-details-price justify-content-center",children:null!==i?(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("span",{children:a.currencySymbol+t})," ",(0,p.jsx)("span",{className:"old",children:a.currencySymbol+c})]}):(0,p.jsxs)("span",{children:[a.currencySymbol+c," "]})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap justify-content-center",children:(0,p.jsx)("div",{className:"pro-details-rating mr-0",children:(0,p.jsx)(N.A,{ratingValue:s.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:s.shortDescription})}),s.variation?(0,p.jsxs)("div",{className:"pro-details-size-color justify-content-center",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===y?"checked":"",onChange:function(){w(e.color),I(e.size[0].name),V(e.size[0].stock),T(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===y?e.size.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===C?"checked":"",onChange:function(){I(e.name),V(e.stock),T(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality justify-content-center",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,p.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,p.jsxs)("div",{className:"pro-details-quality justify-content-center",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return T(F>1?F-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:F,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return T(F<z-_?F+1:F)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:z&&z>0?(0,p.jsxs)("button",{onClick:function(){return u((0,g.bE)((0,j.A)((0,j.A)({},s),{},{quantity:F,selectedProductColor:y||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:C||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:_>=z,children:[" ","Add To Cart"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==d?"active":"",disabled:void 0!==d,title:void 0!==d?"Added to wishlist":"Add to wishlist",onClick:function(){return u((0,b.U4)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==o?"active":"",disabled:void 0!==o,title:void 0!==o?"Added to compare":"Add to compare",onClick:function(){return u((0,A.wL)(s))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,p.jsxs)("div",{className:"pro-details-meta justify-content-center",children:[(0,p.jsx)("span",{children:"Categories :"}),(0,p.jsx)("ul",{children:s.category.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(v.N_,{to:"/shop-grid-standard",children:e})},s)}))})]}):"",s.tag?(0,p.jsxs)("div",{className:"pro-details-meta justify-content-center",children:[(0,p.jsx)("span",{children:"Tags :"}),(0,p.jsx)("ul",{children:s.tag.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(v.N_,{to:"/shop-grid-standard",children:e})},s)}))})]}):"",(0,p.jsx)("div",{className:"pro-details-social",children:(0,p.jsxs)("ul",{className:"justify-content-center",children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//facebook.com",children:(0,p.jsx)("i",{className:"fa fa-facebook"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//dribbble.com",children:(0,p.jsx)("i",{className:"fa fa-dribbble"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//pinterest.com",children:(0,p.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//twitter.com",children:(0,p.jsx)("i",{className:"fa fa-twitter"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//linkedin.com",children:(0,p.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})},w=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,r=e.product,a=(0,n.d4)((function(e){return e.currency})),t=(0,n.d4)((function(e){return e.cart})).cartItems,c=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,l=(0,n.d4)((function(e){return e.compare})).compareItems,d=c.find((function(e){return e.id===r.id})),o=l.find((function(e){return e.id===r.id})),h=(0,m.do)(r.price,r.discount),j=+(r.price*a.currencyRate).toFixed(2),f=+(h*a.currencyRate).toFixed(2);return(0,p.jsx)("div",{className:(0,u.A)("shop-area",s,i),children:(0,p.jsx)("div",{className:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-12 mb-50",children:(0,p.jsx)(x,{product:r})}),(0,p.jsx)("div",{className:"col-lg-12 text-center",children:(0,p.jsx)(y,{product:r,discountedPrice:h,currency:a,finalDiscountedPrice:f,finalProductPrice:j,cartItems:t,wishlistItem:d,compareItem:o})})]})})})},k=function(){var e=(0,a.zy)().pathname,s=(0,a.g)().id,i=(0,n.d4)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)(t.A,{titleTemplate:"Product Page",description:"Product page of flone react minimalist eCommerce template."}),(0,p.jsxs)(c.A,{headerTop:"visible",children:[(0,p.jsx)(l.A,{pages:[{label:"Home",path:"/"},{label:"Shop Product",path:""+e}]}),(0,p.jsx)(w,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",product:i}),(0,p.jsx)(o.A,{spaceBottomClass:"pb-90",productFullDesc:i.fullDescription}),(0,p.jsx)(d.A,{spaceBottomClass:"pb-95",category:i.category[0]})]})]})}},3671:function(e,s,i){var r=i(3381),n=i(4025),a=i(6356);s.A=function(e){var s=e.pages;return(0,a.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)(r.A,{children:null===s||void 0===s?void 0:s.map((function(e,i){var t=e.path,c=e.label;return i!==s.length-1?(0,a.jsx)(r.A.Item,{linkProps:{to:t},linkAs:n.N_,children:c},c):(0,a.jsx)(r.A.Item,{active:!0,children:c},c)}))})})})}},3947:function(e,s,i){i.d(s,{A:function(){return p}});var r=i(8057),n=i(8),a=i(6161),t=i(729),c=i(4370),l=i(8990),d=i(5314),o=i(3686),u=i(6609),m=i(6356),h=function(e){var s=e.borderStyle,i=(0,o.d4)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,a.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,m.jsx)(u.A,{currency:i}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Gate no.02 vijay market Ansari road shastri\xa0park | 110053"," ",(0,m.jsx)("span",{})]})})]})},p=function(e){var s=e.layout,i=e.top,o=e.borderStyle,u=e.headerPaddingClass,p=e.headerPositionClass,x=e.headerBgClass,j=(0,n.useState)(0),f=(0,r.A)(j,2),v=f[0],N=f[1],g=(0,n.useState)(0),b=(0,r.A)(g,2),A=b[0],y=b[1];(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){N(window.scrollY)};return(0,m.jsxs)("header",{className:(0,a.A)("header-area clearfix",x,p),children:[(0,m.jsx)("div",{className:(0,a.A)("header-top-area",u,"visible"===i?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsx)(h,{borderStyle:o})})}),(0,m.jsx)("div",{className:(0,a.A)(u,"sticky-bar header-res-padding clearfix",v>A&&"stick"),children:(0,m.jsxs)("div",{className:"container-fluid"===s?s:"container",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)(t.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(c.A,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(l.A,{})})]}),(0,m.jsx)(d.A,{})]})})]})}},8162:function(e,s,i){var r=i(6161),n=i(4385),a=i(5348),t=i(6356);s.A=function(e){var s=e.spaceBottomClass,i=e.productFullDesc;return(0,t.jsx)("div",{className:(0,r.A)("description-review-area",s),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"description-review-wrapper",children:(0,t.jsxs)(n.A.Container,{defaultActiveKey:"productDescription",children:[(0,t.jsxs)(a.A,{variant:"pills",className:"description-review-topbar",children:[(0,t.jsx)(a.A.Item,{children:(0,t.jsx)(a.A.Link,{eventKey:"additionalInfo",children:"Additional Information"})}),(0,t.jsx)(a.A.Item,{children:(0,t.jsx)(a.A.Link,{eventKey:"productDescription",children:"Description"})})]}),(0,t.jsxs)(n.A.Content,{className:"description-review-bottom",children:[(0,t.jsx)(n.A.Pane,{eventKey:"additionalInfo",children:(0,t.jsx)("div",{className:"product-anotherinfo-wrapper",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:"Weight"})," 400 g"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:"Dimensions"}),"10 x 10 x 15 cm"," "]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:"Materials"})," 60% cotton, 40% polyester"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:"Other Info"})," American heirloom jean shorts pug seitan letterpress"]})]})})}),(0,t.jsx)(n.A.Pane,{eventKey:"productDescription",children:i})]})]})})})})}},4869:function(e,s,i){var r=i(3686),n=i(6161),a=i(1855),t=i(1756),c=i(1759),l=i(6026),d=i(6356),o={loop:!1,slidesPerView:4,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}};s.A=function(e){var s=e.spaceBottomClass,i=e.category,u=(0,r.d4)((function(e){return e.product})).products,m=(0,r.d4)((function(e){return e.currency})),h=(0,r.d4)((function(e){return e.cart})).cartItems,p=(0,r.d4)((function(e){return e.wishlist})).wishlistItems,x=(0,r.d4)((function(e){return e.compare})).compareItems,j=(0,l.d$)(u,i,null,6);return(0,d.jsx)("div",{className:(0,n.A)("related-product-area",s),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(t.A,{titleText:"Related Products",positionClass:"text-center",spaceClass:"mb-50"}),null!==j&&void 0!==j&&j.length?(0,d.jsx)(a.A,{options:o,children:j.map((function(e){return(0,d.jsx)(a.q,{children:(0,d.jsx)(c.A,{product:e,currency:m,cartItem:h.find((function(s){return s.id===e.id})),wishlistItem:p.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})}},3381:function(e,s,i){i.d(s,{A:function(){return j}});var r=i(1348),n=i(18),a=i(8406),t=i.n(a),c=i(8),l=i(4894),d=i(2646),o=i(6356),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=c.forwardRef((function(e,s){var i=e.bsPrefix,a=e.active,c=void 0!==a&&a,m=e.children,h=e.className,p=e.as,x=void 0===p?"li":p,j=e.linkAs,f=void 0===j?d.A:j,v=e.linkProps,N=void 0===v?{}:v,g=e.href,b=e.title,A=e.target,y=(0,n.A)(e,u),w=(0,l.oU)(i,"breadcrumb-item");return(0,o.jsx)(x,(0,r.A)((0,r.A)({ref:s},y),{},{className:t()(w,h,{active:c}),"aria-current":c?"page":void 0,children:c?m:(0,o.jsx)(f,(0,r.A)((0,r.A)({},N),{},{href:g,title:b,target:A,children:m}))}))}));m.displayName="BreadcrumbItem";var h=m,p=["bsPrefix","className","listProps","children","label","as"],x=c.forwardRef((function(e,s){var i=e.bsPrefix,a=e.className,c=e.listProps,d=void 0===c?{}:c,u=e.children,m=e.label,h=void 0===m?"breadcrumb":m,x=e.as,j=void 0===x?"nav":x,f=(0,n.A)(e,p),v=(0,l.oU)(i,"breadcrumb");return(0,o.jsx)(j,(0,r.A)((0,r.A)({"aria-label":h,className:a,ref:s},f),{},{children:(0,o.jsx)("ol",(0,r.A)((0,r.A)({},d),{},{className:t()(v,null==d?void 0:d.className),children:u}))}))}));x.displayName="Breadcrumb";var j=Object.assign(x,{Item:h})}}]);
//# sourceMappingURL=2846.489d2335.chunk.js.map