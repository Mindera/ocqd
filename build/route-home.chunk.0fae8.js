webpackJsonp([2],{"5o8Z":function(e,t,n){e.exports=n.p+"03ced58a01512a0b7ef872588dbd767c.svg"},KpEG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("KM04"),o=(n.n(r),n("vO8M")),a=n.n(o),i=n("sw5u"),s=(n.n(i),n("5o8Z")),c=n.n(s);t.default=function(){return n.i(r.h)("div",{class:a.a.home},n.i(r.h)("img",{src:c.a,alt:"Logo",class:a.a.logo}),n.i(r.h)("ul",{class:a.a.menu},n.i(r.h)("li",null,n.i(r.h)(i.Link,{activeClassName:a.a.active,href:"/game"},"Novo Jogo")),n.i(r.h)("li",null,n.i(r.h)(i.Link,{activeClassName:a.a.active,href:"/results"},"Resultados")),n.i(r.h)("li",null,n.i(r.h)(i.Link,{activeClassName:a.a.active,href:"/options"},"Opções"))))}},sw5u:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n("KM04"),c=n("/QC5"),l=t.Match=function(e){function t(){for(var t,n,r,a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return t=n=o(this,e.call.apply(e,[this].concat(i))),n.update=function(e){n.nextUrl=e,n.setState({})},r=t,o(n,r)}return a(t,e),t.prototype.componentDidMount=function(){c.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,c.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children[0]&&e.children[0]({url:t,path:n,matches:n===e.path})},t}(s.Component),u=function(e){var t=e.activeClassName,n=e.path,o=r(e,["activeClassName","path"]);return(0,s.h)(l,{path:n||o.href},function(e){var n=e.matches;return(0,s.h)(c.Link,i({},o,{class:[o.class||o.className,n&&t].filter(Boolean).join(" ")}))})};t.Link=u,t.default=l,l.Link=u},vO8M:function(e){e.exports={home:"home__MVGbg",logo:"logo__2Rjp2"}}});
//# sourceMappingURL=route-home.chunk.0fae8.js.map