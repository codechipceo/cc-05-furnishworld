(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[5274],{6161:function(t,e,r){"use strict";function n(t){var e,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=n(t[e]))&&(i&&(i+=" "),i+=r);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}e.A=function(){for(var t,e,r=0,i="";r<arguments.length;)(t=arguments[r++])&&(e=n(t))&&(i&&(i+=" "),i+=e);return i}},411:function(t){"use strict";t.exports=function(t,e,r,n,i,o,a,s){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,i,o,a,s],l=0;(c=new Error(e.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},8590:function(t){var e="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(c=s;0!==c--;)if(!o(t[c],a[c]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(c=s;0!==c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"===typeof t.valueOf&&"function"===typeof a.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString&&"function"===typeof t.toString&&"function"===typeof a.toString)return t.toString()===a.toString();if((s=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=s;0!==c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(e&&t instanceof Element)return!1;for(c=s;0!==c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!t.$$typeof)&&!o(t[u[c]],a[u[c]]))return!1;return!0}return t!==t&&a!==a}t.exports=function(t,e){try{return o(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2970:function(t,e,r){"use strict";r.d(e,{mg:function(){return Z},vd:function(){return F}});var n=r(8),i=r(3958),o=r.n(i),a=r(8590),s=r.n(a),c=r(411),u=r.n(c),l=r(9259),f=r.n(l);function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p.apply(this,arguments)}function d(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function y(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)e.indexOf(r=o[n])>=0||(i[r]=t[r]);return i}var m={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},g={rel:["amphtml","canonical","alternate"]},T={type:["application/ld+json"]},v={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},b=Object.keys(m).map((function(t){return m[t]})),A={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},O=Object.keys(A).reduce((function(t,e){return t[A[e]]=e,t}),{}),C=function(t,e){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},S=function(t){var e=C(t,m.TITLE),r=C(t,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),r&&e)return r.replace(/%s/g,(function(){return e}));var n=C(t,"defaultTitle");return e||n||void 0},w=function(t){return C(t,"onChangeClientState")||function(){}},E=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return p({},t,e)}),{})},j=function(t,e){return e.filter((function(t){return void 0!==t[m.BASE]})).map((function(t){return t[m.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==t.indexOf(o)&&r[o])return e.concat(r)}return e}),[])},x=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof e[t]+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var i={};r.filter((function(t){for(var r,o=Object.keys(t),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===e.indexOf(c)||"rel"===r&&"canonical"===t[r].toLowerCase()||"rel"===c&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!t[r])return!1;var u=t[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a+=1){var s=o[a],c=p({},n[s],i[s]);n[s]=c}return t}),[]).reverse()},I=function(t,e){if(Array.isArray(t)&&t.length)for(var r=0;r<t.length;r+=1)if(t[r][e])return!0;return!1},P=function(t){return Array.isArray(t)?t.join(""):t},L=function(t,e){return Array.isArray(t)?t.reduce((function(t,r){return function(t,e){for(var r=Object.keys(t),n=0;n<r.length;n+=1)if(e[r[n]]&&e[r[n]].includes(t[r[n]]))return!0;return!1}(r,e)?t.priority.push(r):t.default.push(r),t}),{priority:[],default:[]}):{default:t}},k=function(t,e){var r;return p({},t,((r={})[e]=void 0,r))},M=[m.NOSCRIPT,m.SCRIPT,m.STYLE],H=function(t,e){return void 0===e&&(e=!0),!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},N=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},R=function(t,e){return void 0===e&&(e={}),Object.keys(t).reduce((function(e,r){return e[A[r]||r]=t[r],e}),e)},D=function(t,e){return e.map((function(e,r){var i,o=((i={key:r})["data-rh"]=!0,i);return Object.keys(e).forEach((function(t){var r=A[t]||t;"innerHTML"===r||"cssText"===r?o.dangerouslySetInnerHTML={__html:e.innerHTML||e.cssText}:o[r]=e[t]})),n.createElement(t,o)}))},B=function(t,e,r){switch(t){case m.TITLE:return{toComponent:function(){return r=e.titleAttributes,(i={key:t=e.title})["data-rh"]=!0,o=R(r,i),[n.createElement(m.TITLE,o,t)];var t,r,i,o},toString:function(){return function(t,e,r,n){var i=N(r),o=P(e);return i?"<"+t+' data-rh="true" '+i+">"+H(o,n)+"</"+t+">":"<"+t+' data-rh="true">'+H(o,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return R(e)},toString:function(){return N(e)}};default:return{toComponent:function(){return D(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var i=Object.keys(n).filter((function(t){return!("innerHTML"===t||"cssText"===t)})).reduce((function(t,e){var i=void 0===n[e]?e:e+'="'+H(n[e],r)+'"';return t?t+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===M.indexOf(t);return e+"<"+t+' data-rh="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,r)}}}},_=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,i=t.htmlAttributes,o=t.noscriptTags,a=t.styleTags,s=t.title,c=void 0===s?"":s,u=t.titleAttributes,l=t.linkTags,f=t.metaTags,p=t.scriptTags,d={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var h=function(t){var e=t.linkTags,r=t.scriptTags,n=t.encode,i=L(t.metaTags,v),o=L(e,g),a=L(r,T);return{priorityMethods:{toComponent:function(){return[].concat(D(m.META,i.priority),D(m.LINK,o.priority),D(m.SCRIPT,a.priority))},toString:function(){return B(m.META,i.priority,n)+" "+B(m.LINK,o.priority,n)+" "+B(m.SCRIPT,a.priority,n)}},metaTags:i.default,linkTags:o.default,scriptTags:a.default}}(t);d=h.priorityMethods,l=h.linkTags,f=h.metaTags,p=h.scriptTags}return{priority:d,base:B(m.BASE,e,n),bodyAttributes:B("bodyAttributes",r,n),htmlAttributes:B("htmlAttributes",i,n),link:B(m.LINK,l,n),meta:B(m.META,f,n),noscript:B(m.NOSCRIPT,o,n),script:B(m.SCRIPT,p,n),style:B(m.STYLE,a,n),title:B(m.TITLE,{title:c,titleAttributes:u},n)}},U=[],Y=function(t,e){var r=this;void 0===e&&(e="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(t){r.context.helmet=t},helmetInstances:{get:function(){return r.canUseDOM?U:r.instances},add:function(t){(r.canUseDOM?U:r.instances).push(t)},remove:function(t){var e=(r.canUseDOM?U:r.instances).indexOf(t);(r.canUseDOM?U:r.instances).splice(e,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=_({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},q=n.createContext({}),z=o().shape({setHelmet:o().func,helmetInstances:o().shape({get:o().func,add:o().func,remove:o().func})}),K="undefined"!=typeof document,F=function(t){function e(r){var n;return(n=t.call(this,r)||this).helmetData=new Y(n.props.context,e.canUseDOM),n}return d(e,t),e.prototype.render=function(){return n.createElement(q.Provider,{value:this.helmetData.value},this.props.children)},e}(n.Component);F.canUseDOM=K,F.propTypes={context:o().shape({helmet:o().shape()}),children:o().node.isRequired},F.defaultProps={context:{}},F.displayName="HelmetProvider";var V=function(t,e){var r,n=document.head||document.querySelector(m.HEAD),i=n.querySelectorAll(t+"[data-rh]"),o=[].slice.call(i),a=[];return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&("innerHTML"===i?n.innerHTML=e.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText)):n.setAttribute(i,void 0===e[i]?"":e[i]));n.setAttribute("data-rh","true"),o.some((function(t,e){return r=e,n.isEqualNode(t)}))?o.splice(r,1):a.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:a}},G=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s+=1){var c=a[s],u=e[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f-=1)r.removeAttribute(o[f]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},$=function(t,e){var r=t.baseTag,n=t.htmlAttributes,i=t.linkTags,o=t.metaTags,a=t.noscriptTags,s=t.onChangeClientState,c=t.scriptTags,u=t.styleTags,l=t.title,f=t.titleAttributes;G(m.BODY,t.bodyAttributes),G(m.HTML,n),function(t,e){void 0!==t&&document.title!==t&&(document.title=P(t)),G(m.TITLE,e)}(l,f);var p={baseTag:V(m.BASE,r),linkTags:V(m.LINK,i),metaTags:V(m.META,o),noscriptTags:V(m.NOSCRIPT,a),scriptTags:V(m.SCRIPT,c),styleTags:V(m.STYLE,u)},d={},h={};Object.keys(p).forEach((function(t){var e=p[t],r=e.newTags,n=e.oldTags;r.length&&(d[t]=r),n.length&&(h[t]=p[t].oldTags)})),e&&e(),s(t,d,h)},W=null,J=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).rendered=!1,e}d(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!f()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,e,r=this.props.context,n=r.setHelmet,i=null,o=(t=r.helmetInstances.get().map((function(t){var e=p({},t.props);return delete e.context,e})),{baseTag:j(["href"],t),bodyAttributes:E("bodyAttributes",t),defer:C(t,"defer"),encode:C(t,"encodeSpecialCharacters"),htmlAttributes:E("htmlAttributes",t),linkTags:x(m.LINK,["rel","href"],t),metaTags:x(m.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:x(m.NOSCRIPT,["innerHTML"],t),onChangeClientState:w(t),scriptTags:x(m.SCRIPT,["src","innerHTML"],t),styleTags:x(m.STYLE,["cssText"],t),title:S(t),titleAttributes:E("titleAttributes",t),prioritizeSeoTags:I(t,"prioritizeSeoTags")});F.canUseDOM?(e=o,W&&cancelAnimationFrame(W),e.defer?W=requestAnimationFrame((function(){$(e,(function(){W=null}))})):($(e),W=null)):_&&(i=_(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(n.Component);J.propTypes={context:z.isRequired},J.displayName="HelmetDispatcher";var Q=["children"],X=["children"],Z=function(t){function e(){return t.apply(this,arguments)||this}d(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!s()(k(this.props,"helmetData"),k(t,"helmetData"))},r.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case m.SCRIPT:case m.NOSCRIPT:return{innerHTML:e};case m.STYLE:return{cssText:e};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren;return p({},n,((e={})[r.type]=[].concat(n[r.type]||[],[p({},t.newChildProps,this.mapNestedChildrenToProps(r,t.nestedChildren))]),e))},r.mapObjectTypeChildren=function(t){var e,r,n=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(n.type){case m.TITLE:return p({},i,((e={})[n.type]=a,e.titleAttributes=p({},o),e));case m.BODY:return p({},i,{bodyAttributes:p({},o)});case m.HTML:return p({},i,{htmlAttributes:p({},o)});default:return p({},i,((r={})[n.type]=p({},o),r))}},r.mapArrayTypeChildrenToProps=function(t,e){var r=p({},e);return Object.keys(t).forEach((function(e){var n;r=p({},r,((n={})[e]=t[e],n))})),r},r.warnOnInvalidChildren=function(t,e){return u()(b.some((function(e){return t.type===e})),"function"==typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+b.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),u()(!e||"string"==typeof e||Array.isArray(e)&&!e.some((function(t){return"string"!=typeof t})),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(t,e){var r=this,i={};return n.Children.forEach(t,(function(t){if(t&&t.props){var n=t.props,o=n.children,a=y(n,Q),s=Object.keys(a).reduce((function(t,e){return t[O[e]||e]=a[e],t}),{}),c=t.type;switch("symbol"==typeof c?c=c.toString():r.warnOnInvalidChildren(t,o),c){case m.FRAGMENT:e=r.mapChildrenToProps(o,e);break;case m.LINK:case m.META:case m.NOSCRIPT:case m.SCRIPT:case m.STYLE:i=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:i,newChildProps:s,nestedChildren:o});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:s,nestedChildren:o})}}})),this.mapArrayTypeChildrenToProps(i,e)},r.render=function(){var t=this.props,e=t.children,r=y(t,X),i=p({},r),o=r.helmetData;return e&&(i=this.mapChildrenToProps(e,i)),!o||o instanceof Y||(o=new Y(o.context,o.instances)),o?n.createElement(J,p({},i,{context:o.value,helmetData:void 0})):n.createElement(q.Consumer,null,(function(t){return n.createElement(J,p({},i,{context:t}))}))},e}(n.Component);Z.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string,prioritizeSeoTags:o().bool,helmetData:o().object},Z.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Z.displayName="Helmet"},9259:function(t){t.exports=function(t,e,r,n){var i=r?r.call(n,t,e):void 0;if(void 0!==i)return!!i;if(t===e)return!0;if("object"!==typeof t||!t||"object"!==typeof e||!e)return!1;var o=Object.keys(t),a=Object.keys(e);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(e),c=0;c<o.length;c++){var u=o[c];if(!s(u))return!1;var l=t[u],f=e[u];if(!1===(i=r?r.call(n,l,f,u):void 0)||void 0===i&&l!==f)return!1}return!0}}}]);
//# sourceMappingURL=5274.6a852860.chunk.js.map