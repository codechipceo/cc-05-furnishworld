"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[8356],{4912:function(e,t,s){s.d(t,{D:function(){return n}});var a=s(3686),r=s(8615),n=function(){return{dispatch:(0,a.wA)(),navigate:(0,r.Zp)()}}},8356:function(e,t,s){s.r(t);var a=s(8057),r=s(8),n=s(2462),i=s(3686),c=s(8615),o=s(879),l=s(7513),d=s(3671),u=s(7100),h=s(2480),g=s(6096),f=s(4912),m=s(7045),p=s(6356);t.default=function(){var e=(0,r.useState)("grid three-column"),t=(0,a.A)(e,2),s=t[0],x=t[1],j=(0,r.useState)(""),v=(0,a.A)(j,2),S=(v[0],v[1]),b=(0,r.useState)(""),N=(0,a.A)(b,2),A=(N[0],N[1]),C=(0,r.useState)(0),y=(0,a.A)(C,2),w=y[0],P=y[1],k=(0,r.useState)(1),L=(0,a.A)(k,2),F=L[0],T=L[1],E=(0,r.useState)([]),D=(0,a.A)(E,2),_=D[0],I=D[1],z=(0,r.useState)([]),H=(0,a.A)(z,2),O=(H[0],H[1],(0,i.d4)((function(e){return null===e||void 0===e?void 0:e.product}))),Q=(O.products,O.data),R=O.count,U=(0,i.d4)((function(e){return e.category})).data,Z=(0,r.useState)(""),q=(0,a.A)(Z,2),B=q[0],G=q[1],J=(0,r.useState)(9),K=(0,a.A)(J,2),M=K[0],V=(K[1],(0,r.useState)(0)),W=(0,a.A)(V,2),X=(W[0],W[1],(0,c.zy)().pathname),Y=(0,f.D)().dispatch;return(0,r.useEffect)((function(){Y((0,m.AS)({categoryId:B,limit:M,skip:w}))}),[B,Y,M,w]),(0,r.useEffect)((function(){Y((0,m.QU)())}),[Y]),(0,r.useEffect)((function(){I(Q)}),[Q]),(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)(o.A,{titleTemplate:"Shop Page",description:"Shop page of Furnishworld"}),(0,p.jsxs)(l.A,{headerTop:"visible",children:[(0,p.jsx)(d.A,{pages:[{label:"Home",path:"/"},{label:"Shop",path:""+X}]}),(0,p.jsx)("div",{className:"shop-area pt-95 pb-100",children:(0,p.jsx)("div",{className:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-3 order-2 order-lg-1",children:(0,p.jsx)(u.A,{category:U,getSortParams:function(e){G(e)},sideSpaceClass:"mr-30"})}),(0,p.jsxs)("div",{className:"col-lg-9 order-1 order-lg-2",children:[(0,p.jsx)(h.A,{getLayout:function(e){x(e)},getFilterSortParams:function(e,t){S(e),A(t)},productCount:R,sortedProductCount:_.length}),_?(0,p.jsx)(g.A,{layout:s,products:_}):(0,p.jsx)("div",{style:{height:"100vh",width:"100wv",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,p.jsx)("img",{src:"/assets/img/logo/loading.gif",alt:"loading",width:40})}),(0,p.jsx)("div",{className:"pro-pagination-style text-center mt-30",children:(0,p.jsx)(n.A,{totalRecords:R,pageLimit:M,pageNeighbours:2,setOffset:P,currentPage:F,setCurrentPage:T,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"})})]})]})})})]})]})}},7100:function(e,t,s){s.d(t,{A:function(){return h}});var a=s(6161),r=s(6026),n=s(8057),i=s(8),c=s(4912),o=s(7045),l=s(6356),d=function(){var e=(0,i.useState)(""),t=(0,n.A)(e,2),s=t[0],a=t[1],r=(0,c.D)().dispatch;return(0,i.useEffect)((function(){r((0,o.AS)())}),[s]),(0,l.jsxs)("div",{className:"sidebar-widget",children:[(0,l.jsx)("h4",{className:"pro-sidebar-title",children:"Search "}),(0,l.jsx)("div",{className:"pro-sidebar-search mb-50 mt-25",children:(0,l.jsxs)("form",{className:"pro-sidebar-search-form",action:"#",children:[(0,l.jsx)("input",{type:"text",placeholder:"Search here...",onChange:function(e){a(e.target.value)}}),(0,l.jsx)("button",{children:(0,l.jsx)("i",{className:"pe-7s-search"})})]})})]})},u=function(e){var t=e.categories,s=e.getSortParams;return(0,l.jsxs)("div",{className:"sidebar-widget",children:[(0,l.jsx)("h4",{className:"pro-sidebar-title",children:"Categories "}),(0,l.jsx)("div",{className:"sidebar-widget-list mt-30",children:t?(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{className:"sidebar-widget-list-left",children:(0,l.jsxs)("button",{onClick:function(e){s(""),(0,r.nL)(e)},children:[(0,l.jsx)("span",{className:"checkmark"})," All Categories"]})})}),t.map((function(e,t){var a=e.categoryTitle,n=e._id;return(0,l.jsx)("li",{children:(0,l.jsx)("div",{className:"sidebar-widget-list-left",children:(0,l.jsxs)("button",{onClick:function(e){s(n),(0,r.nL)(e)},children:[" ",(0,l.jsx)("span",{className:"checkmark"})," ",a," "]})})},t)}))]}):"No categories found"})]})},h=function(e){var t=e.products,s=e.getSortParams,n=e.sideSpaceClass,i=e.category;(0,r.SC)(t);return(0,l.jsxs)("div",{className:(0,a.A)("sidebar-style",n),children:[(0,l.jsx)(d,{}),(0,l.jsx)(u,{categories:i,getSortParams:s})]})}},2480:function(e,t,s){s.d(t,{A:function(){return c}});var a=s(8),r=s(6026),n=s(6356),i=function(e){var t=e.getLayout,s=(e.getFilterSortParams,e.productCount),a=e.sortedProductCount;return(0,n.jsxs)("div",{className:"shop-top-bar mb-35",children:[(0,n.jsx)("div",{className:"select-shoing-wrap",children:(0,n.jsxs)("p",{children:["Showing ",a," of ",s," result"]})}),(0,n.jsxs)("div",{className:"shop-tab",children:[(0,n.jsx)("button",{onClick:function(e){t("grid two-column"),(0,r.L)(e)},children:(0,n.jsx)("i",{className:"fa fa-th-large"})}),(0,n.jsx)("button",{onClick:function(e){t("grid three-column"),(0,r.L)(e)},children:(0,n.jsx)("i",{className:"fa fa-th"})})]})]})},c=function(e){var t=e.getLayout,s=e.getFilterSortParams,r=e.productCount,c=e.sortedProductCount;return(0,n.jsx)(a.Fragment,{children:(0,n.jsx)(i,{getLayout:t,getFilterSortParams:s,productCount:r,sortedProductCount:c})})}}}]);
//# sourceMappingURL=8356.c2778aa8.chunk.js.map