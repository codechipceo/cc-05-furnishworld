"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[5242],{4912:function(e,t,s){s.d(t,{D:function(){return n}});var r=s(3686),a=s(8615),n=function(){return{dispatch:(0,r.wA)(),navigate:(0,a.Zp)()}}},5242:function(e,t,s){s.r(t);var r=s(8057),a=s(8),n=s(2462),i=s(3686),c=s(8615),o=s(6026),l=s(879),d=s(7513),u=s(3671),h=s(7100),m=s(2480),p=s(6096),g=s(6356);t.default=function(e){e.location;var t=(0,a.useState)("grid three-column"),s=(0,r.A)(t,2),x=s[0],f=s[1],j=(0,a.useState)(""),v=(0,r.A)(j,2),S=v[0],b=v[1],N=(0,a.useState)(""),C=(0,r.A)(N,2),A=C[0],P=C[1],k=(0,a.useState)(""),w=(0,r.A)(k,2),y=w[0],L=w[1],F=(0,a.useState)(""),T=(0,r.A)(F,2),_=T[0],D=T[1],E=(0,a.useState)(0),G=(0,r.A)(E,2),z=G[0],H=G[1],O=(0,a.useState)(1),R=(0,r.A)(O,2),Z=R[0],q=R[1],B=(0,a.useState)([]),I=(0,r.A)(B,2),J=I[0],K=I[1],M=(0,a.useState)([]),Q=(0,r.A)(M,2),U=Q[0],V=Q[1],W=(0,i.d4)((function(e){return e.product})).products,X=(0,c.zy)().pathname;return(0,a.useEffect)((function(){var e=(0,o.Gj)(W,S,A),t=(0,o.Gj)(e,y,_);V(e=t),K(e.slice(z,z+15))}),[z,W,S,A,y,_]),(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)(l.A,{titleTemplate:"Shop Page",description:"Shop page of flone react minimalist eCommerce template."}),(0,g.jsxs)(d.A,{headerTop:"visible",children:[(0,g.jsx)(u.A,{pages:[{label:"Home",path:"/"},{label:"Shop",path:""+X}]}),(0,g.jsx)("div",{className:"shop-area pt-95 pb-100",children:(0,g.jsx)("div",{className:"container-fluid",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-lg-3 order-2 order-lg-1",children:(0,g.jsx)(h.A,{products:W,getSortParams:function(e,t){b(e),P(t)},sideSpaceClass:"mr-30"})}),(0,g.jsxs)("div",{className:"col-lg-9 order-1 order-lg-2",children:[(0,g.jsx)(m.A,{getLayout:function(e){f(e)},getFilterSortParams:function(e,t){L(e),D(t)},productCount:W.length,sortedProductCount:J.length}),(0,g.jsx)(p.A,{layout:x,products:J}),(0,g.jsx)("div",{className:"pro-pagination-style text-center mt-30",children:(0,g.jsx)(n.A,{totalRecords:U.length,pageLimit:15,pageNeighbours:2,setOffset:H,currentPage:Z,setCurrentPage:q,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"})})]})]})})})]})]})}},7100:function(e,t,s){s.d(t,{A:function(){return h}});var r=s(6161),a=s(6026),n=s(8057),i=s(8),c=s(4912),o=s(7045),l=s(6356),d=function(){var e=(0,i.useState)(""),t=(0,n.A)(e,2),s=t[0],r=t[1],a=(0,c.D)().dispatch;return(0,i.useEffect)((function(){a((0,o.AS)())}),[s]),(0,l.jsxs)("div",{className:"sidebar-widget",children:[(0,l.jsx)("h4",{className:"pro-sidebar-title",children:"Search "}),(0,l.jsx)("div",{className:"pro-sidebar-search mb-50 mt-25",children:(0,l.jsxs)("form",{className:"pro-sidebar-search-form",action:"#",children:[(0,l.jsx)("input",{type:"text",placeholder:"Search here...",onChange:function(e){r(e.target.value)}}),(0,l.jsx)("button",{children:(0,l.jsx)("i",{className:"pe-7s-search"})})]})})]})},u=function(e){var t=e.categories,s=e.getSortParams;return(0,l.jsxs)("div",{className:"sidebar-widget",children:[(0,l.jsx)("h4",{className:"pro-sidebar-title",children:"Categories "}),(0,l.jsx)("div",{className:"sidebar-widget-list mt-30",children:t?(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{className:"sidebar-widget-list-left",children:(0,l.jsxs)("button",{onClick:function(e){s(""),(0,a.nL)(e)},children:[(0,l.jsx)("span",{className:"checkmark"})," All Categories"]})})}),t.map((function(e,t){var r=e.categoryTitle,n=e._id;return(0,l.jsx)("li",{children:(0,l.jsx)("div",{className:"sidebar-widget-list-left",children:(0,l.jsxs)("button",{onClick:function(e){s(n),(0,a.nL)(e)},children:[" ",(0,l.jsx)("span",{className:"checkmark"})," ",r," "]})})},t)}))]}):"No categories found"})]})},h=function(e){var t=e.products,s=e.getSortParams,n=e.sideSpaceClass,i=e.category;(0,a.SC)(t);return(0,l.jsxs)("div",{className:(0,r.A)("sidebar-style",n),children:[(0,l.jsx)(d,{}),(0,l.jsx)(u,{categories:i,getSortParams:s})]})}},2480:function(e,t,s){s.d(t,{A:function(){return c}});var r=s(8),a=s(6026),n=s(6356),i=function(e){var t=e.getLayout,s=(e.getFilterSortParams,e.productCount),r=e.sortedProductCount;return(0,n.jsxs)("div",{className:"shop-top-bar mb-35",children:[(0,n.jsx)("div",{className:"select-shoing-wrap",children:(0,n.jsxs)("p",{children:["Showing ",r," of ",s," result"]})}),(0,n.jsxs)("div",{className:"shop-tab",children:[(0,n.jsx)("button",{onClick:function(e){t("grid two-column"),(0,a.L)(e)},children:(0,n.jsx)("i",{className:"fa fa-th-large"})}),(0,n.jsx)("button",{onClick:function(e){t("grid three-column"),(0,a.L)(e)},children:(0,n.jsx)("i",{className:"fa fa-th"})})]})]})},c=function(e){var t=e.getLayout,s=e.getFilterSortParams,a=e.productCount,c=e.sortedProductCount;return(0,n.jsx)(r.Fragment,{children:(0,n.jsx)(i,{getLayout:t,getFilterSortParams:s,productCount:a,sortedProductCount:c})})}}}]);
//# sourceMappingURL=5242.5be93aef.chunk.js.map