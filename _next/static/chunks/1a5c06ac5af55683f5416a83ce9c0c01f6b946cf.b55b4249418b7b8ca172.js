(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"20a2":function(e,t,s){e.exports=s("nOHt")},"3niX":function(e,t,s){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,n=s("q1tI");var i=new(((r=s("SevZ"))&&r.__esModule?r:{default:r}).default),a=function(e){var t,s;function r(t){var s;return(s=e.call(this,t)||this).prevProps={},s}s=e,(t=r).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,r.dynamic=function(e){return e.map((function(e){var t=e[0],s=e[1];return i.computeId(t,s)})).join(" ")};var n=r.prototype;return n.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},n.componentWillUnmount=function(){i.remove(this.props)},n.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(n.Component);t.default=a},"8oxB":function(e,t){var s,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(s===setTimeout)return setTimeout(e,0);if((s===i||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"===typeof setTimeout?setTimeout:i}catch(e){s=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var o,l=[],u=!1,d=-1;function h(){u&&o&&(u=!1,o.length?l=o.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=c(h);u=!0;for(var t=l.length;t;){for(o=l,l=[];++d<t;)o&&o[d].run();d=-1,t=l.length}o=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];l.push(new m(e,t)),1!==l.length||u||c(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},"9fQE":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("nKUr"),n=(s("20a2"),s("YFqc")),i=s.n(n);function a(){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-custom",children:Object(r.jsxs)("div",{className:"container-lg",children:[Object(r.jsx)(i.a,{href:{pathname:"/"},as:"/",children:Object(r.jsx)("a",{className:"navbar-brand",children:"Nextjs demo contentful"})}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(r.jsx)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"}),Object(r.jsxs)("ul",{class:"nav navbar-nav navbar-right",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.a,{href:{pathname:"/"},as:"/",children:Object(r.jsxs)("a",{className:"nav-link",children:["Home ",Object(r.jsx)("span",{className:"sr-only",children:"(current)"})]})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.a,{href:{pathname:"/contents"},as:"/contents",children:Object(r.jsxs)("a",{className:"nav-link",children:["Contents ",Object(r.jsx)("span",{className:"sr-only",children:"(current)"})]})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.a,{href:{pathname:"/contact"},as:"/contact",children:Object(r.jsxs)("a",{className:"nav-link",children:["Contact Us ",Object(r.jsx)("span",{className:"sr-only",children:"(current)"})]})})})]})]})]})})}},"9kyW":function(e,t,s){"use strict";e.exports=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0}},Fl18:function(e,t,s){"use strict";var r=s("nKUr"),n=s("MX0m"),i=s.n(n),a=s("20a2"),c=s("rePB"),o=s("zLVn");function l(e,t){if(null==e)return{};var s,r,n=Object(o.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var u=s("q1tI"),d=s.n(u);function h(e){var t,s,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=h(e[t]))&&(r&&(r+=" "),r+=s);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var f=s("YFqc"),m=s.n(f);function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function j(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(Object(s),!0).forEach((function(t){Object(c.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var b=d.a.forwardRef((function(e,t){var s=e.as,n=e.href,i=l(e,["as","href"]);return Object(r.jsx)(m.a,{href:n,as:s,children:Object(r.jsx)("a",j({ref:t},i))})}));function x(e){var t=e.href,s=e.activeClassName,n=void 0===s?"active":s,i=e.className,o=e.innerRef,u=e.naked,d=l(e,["href","activeClassName","className","innerRef","naked"]),f=Object(a.useRouter)(),m="string"===typeof t?t:t.pathname,p=function(){for(var e,t,s=0,r="";s<arguments.length;)(e=arguments[s++])&&(t=h(e))&&(r&&(r+=" "),r+=t);return r}(i,Object(c.a)({},n,f.pathname===m&&n));return u?Object(r.jsx)(b,j({className:p,ref:o,href:t},d)):Object(r.jsx)("a",j(j({component:b,className:p,ref:o,href:t},d),{},{style:{textDecoration:"none"}}))}var v=d.a.forwardRef((function(e,t){return Object(r.jsx)(x,j(j({},e),{},{innerRef:t}))})),g=[{name:"Home",link:"/"},{name:"About",link:"/about"}];t.a=function(){var e=g,t=Object(a.useRouter)();return Object(r.jsxs)("footer",{className:"jsx-751761162 main-footer mt-4",children:[Object(r.jsx)("div",{className:"jsx-751761162 py-6 bg-gray-300 text-muted",children:Object(r.jsx)("div",{className:"jsx-751761162 container",children:Object(r.jsxs)("div",{className:"jsx-751761162 row",children:[Object(r.jsxs)("div",{className:"jsx-751761162 col-lg-4 mb-5 mb-lg-0",children:[Object(r.jsxs)("div",{className:"jsx-751761162 font-weight-bold text-uppercase text-lg text-dark mb-3",children:["Sell",Object(r.jsx)("span",{className:"jsx-751761162 text-primary",children:"."})]}),Object(r.jsx)("p",{className:"jsx-751761162",children:"Lorem ipsum dolor sit amet, consectetur adipisicing."}),Object(r.jsxs)("ul",{className:"jsx-751761162 list-inline",children:[Object(r.jsx)("li",{className:"jsx-751761162 list-inline-item",children:Object(r.jsx)("a",{href:"#",target:"_blank",title:"twitter",className:"jsx-751761162 text-muted text-hover-primary",children:Object(r.jsx)("i",{className:"jsx-751761162 fab fa-twitter"})})}),Object(r.jsx)("li",{className:"jsx-751761162 list-inline-item",children:Object(r.jsx)("a",{href:"#",target:"_blank",title:"facebook",className:"jsx-751761162 text-muted text-hover-primary",children:Object(r.jsx)("i",{className:"jsx-751761162 fab fa-facebook"})})}),Object(r.jsx)("li",{className:"jsx-751761162 list-inline-item",children:Object(r.jsx)("a",{href:"#",target:"_blank",title:"instagram",className:"jsx-751761162 text-muted text-hover-primary",children:Object(r.jsx)("i",{className:"jsx-751761162 fab fa-instagram"})})}),Object(r.jsx)("li",{className:"jsx-751761162 list-inline-item",children:Object(r.jsx)("a",{href:"#",target:"_blank",title:"pinterest",className:"jsx-751761162 text-muted text-hover-primary",children:Object(r.jsx)("i",{className:"jsx-751761162 fab fa-pinterest"})})}),Object(r.jsx)("li",{className:"jsx-751761162 list-inline-item",children:Object(r.jsx)("a",{href:"#",target:"_blank",title:"vimeo",className:"jsx-751761162 text-muted text-hover-primary",children:Object(r.jsx)("i",{className:"jsx-751761162 fab fa-vimeo"})})})]})]}),Object(r.jsxs)("div",{className:"jsx-751761162 col-lg-2 col-md-6 mb-5 mb-lg-0",children:[Object(r.jsx)("h6",{className:"jsx-751761162 text-uppercase text-dark mb-3",children:"Shop"}),Object(r.jsx)("ul",{className:"jsx-751761162 list-unstyled",children:e.map((function(e){var s=e.name,n=e.link;return Object(r.jsx)("li",{className:"jsx-751761162",children:Object(r.jsx)(v,{href:n,children:Object(r.jsx)("span",{style:{fontWeight:t.pathname===n&&"bold",borderBottom:t.pathname===n&&"1px solid #757ce8"},className:"jsx-751761162 text-muted",children:s})})},n)}))})]}),Object(r.jsxs)("div",{className:"jsx-751761162 col-lg-2 col-md-6 mb-5 mb-lg-0",children:[Object(r.jsx)("h6",{className:"jsx-751761162 text-uppercase text-dark mb-3",children:"Company"}),Object(r.jsxs)("ul",{className:"jsx-751761162 list-unstyled",children:[Object(r.jsx)("li",{className:"jsx-751761162",children:Object(r.jsx)("a",{href:"#",className:"jsx-751761162 text-muted",children:"Login"})}),Object(r.jsx)("li",{className:"jsx-751761162",children:Object(r.jsx)("a",{href:"#",className:"jsx-751761162 text-muted",children:"Register"})}),Object(r.jsx)("li",{className:"jsx-751761162",children:Object(r.jsx)("a",{href:"#",className:"jsx-751761162 text-muted",children:"Wishlist"})}),Object(r.jsx)("li",{className:"jsx-751761162",children:Object(r.jsx)("a",{href:"#",className:"jsx-751761162 text-muted",children:"Our Products"})}),Object(r.jsx)("li",{className:"jsx-751761162",children:Object(r.jsx)("a",{href:"#",className:"jsx-751761162 text-muted",children:"Checkouts"})})]})]}),Object(r.jsxs)("div",{className:"jsx-751761162 col-lg-4",children:[Object(r.jsx)("h6",{className:"jsx-751761162 text-uppercase text-dark mb-3",children:"Daily Offers & Discounts"}),Object(r.jsx)("p",{className:"jsx-751761162 mb-3",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus."}),Object(r.jsx)("form",{action:"#",id:"newsletter-form",className:"jsx-751761162",children:Object(r.jsxs)("div",{className:"jsx-751761162 input-group mb-3",children:[Object(r.jsx)("input",{type:"email",placeholder:"Your Email Address","aria-label":"Your Email Address",className:"jsx-751761162 form-control bg-transparent border-secondary border-right-0"}),Object(r.jsx)("div",{className:"jsx-751761162 input-group-append",children:Object(r.jsx)("button",{type:"submit",className:"jsx-751761162 btn btn-outline-secondary border-left-0",children:Object(r.jsx)("i",{className:"jsx-751761162 fa fa-paper-plane text-lg text-dark"})})})]})})]})]})})}),Object(r.jsx)("div",{className:"jsx-751761162 py-4 font-weight-light bg-gray-800 text-gray-300",children:Object(r.jsx)("div",{className:"jsx-751761162 container",children:Object(r.jsxs)("div",{className:"jsx-751761162 row align-items-center",children:[Object(r.jsx)("div",{className:"jsx-751761162 col-md-6 text-center text-md-left",children:Object(r.jsx)("p",{className:"jsx-751761162 mb-md-0 text-white",children:"\xa9 2021 Your company. All rights reserved."})}),Object(r.jsx)("div",{className:"jsx-751761162 col-md-6",children:Object(r.jsxs)("ul",{className:"jsx-751761162 list-inline mb-0 mt-2 mt-md-0 text-center text-md-right",children:[Object(r.jsx)("li",{className:"jsx-751761162 list-inline-item"}),Object(r.jsx)("li",{className:"jsx-751761162 list-inline-item"}),Object(r.jsx)("li",{className:"jsx-751761162 list-inline-item"}),Object(r.jsx)("li",{className:"jsx-751761162 list-inline-item"})]})})]})})}),Object(r.jsx)(i.a,{id:"751761162",children:[".bg-gray-100.jsx-751761162{background:#f8f9fa!important;}",".bg-gray-300.jsx-751761162{background:#dee2e6!important;}",".bg-gray-800.jsx-751761162{background:#343a40!important;}",".pb-6.jsx-751761162,.py-6.jsx-751761162{padding-bottom:6rem!important;}",".pt-6.jsx-751761162,.py-6.jsx-751761162{padding-top:6rem!important;}"]})]})}},MX0m:function(e,t,s){e.exports=s("3niX")},SevZ:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var r=i(s("9kyW")),n=i(s("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,r=void 0===s?null:s,i=t.optimizeForSpeed,a=void 0!==i&&i,c=t.isBrowser,o=void 0===c?"undefined"!==typeof window:c;this._sheet=r||new n.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=o,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var s=this.getIdAndRules(e),r=s.styleId,n=s.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=n.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var r=this._fromServer&&this._fromServer[s];r?(r.parentNode.removeChild(r),delete this._fromServer[s]):(this._indices[s].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return s[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var n=String(s),i=t+n;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+n)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var n=s+r;return t[n]||(t[n]=r.replace(e,s)),t[n]}},t.getIdAndRules=function(e){var t=this,s=e.children,r=e.dynamic,n=e.id;if(r){var i=this.computeId(n,r);return{styleId:i,rules:Array.isArray(s)?s.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,s)]}}return{styleId:this.computeId(n),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},YFqc:function(e,t,s){e.exports=s("cTJO")},YFra:function(e,t,s){"use strict";(function(e){var r=s("nKUr"),n=s("MX0m"),i=s.n(n),a=s("Fl18"),c=s("9fQE"),o=s("g4pe"),l=s.n(o);t.a=function(t){var s=t.children,n=t.title,o=t.description,u=t.ogImage,d=t.url;e.env.GOOGLE_SITE_VERTIFICATION;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(l.a,{children:[Object(r.jsx)("title",{className:"jsx-3591538689",children:n||"Blog"}),Object(r.jsx)("meta",{name:"description",content:o||"This is a statically generated blog example using Next.js and Contentful. | Blog with React/Next.js and Contentful",className:"jsx-3591538689"},"description"),Object(r.jsx)("meta",{property:"og:title",content:n||"Blog",className:"jsx-3591538689"},"og:title"),Object(r.jsx)("meta",{property:"og:url",content:d||"https://blog-with-nextjs-and-contentful.vercel.app/",className:"jsx-3591538689"},"og:url"),Object(r.jsx)("meta",{property:"og:image",content:u||"/blog-demo-min.png",className:"jsx-3591538689"},"og:image"),Object(r.jsx)("meta",{property:"og:description",content:o||"This is a statically generated blog example using Next.js and Contentful.",className:"jsx-3591538689"},"og:description"),Object(r.jsx)(c.a,{})]}),Object(r.jsx)("main",{className:"jsx-3591538689 mt-5",children:s}),Object(r.jsx)(a.a,{}),Object(r.jsx)(i.a,{id:"3591538689",children:["html,body{background:#f9f9f9;overflow-x:hidden;padding:0 !important;}","#__next{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}","main{-webkit-flex:1;-ms-flex:1;flex:1;}"]})]})}}).call(this,s("8oxB"))},bVZc:function(e,t,s){"use strict";(function(e){function s(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,n=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,s=t.name,i=void 0===s?"stylesheet":s,c=t.optimizeForSpeed,o=void 0===c?r:c,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;a(n(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"===typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,i,c,o=e.prototype;return o.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},o.isOptimizeForSpeed=function(){return this._optimizeForSpeed},o.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},o.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},o.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},o.insertRule=function(e,t){if(a(n(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(c){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},o.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];a(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},o.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},o.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},o.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},o.makeStyleTag=function(e,t,s){t&&a(n(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return s?i.insertBefore(r,s):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&s(t.prototype,i),c&&s(t,c),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,s("8oxB"))},cTJO:function(e,t,s){"use strict";var r=s("J4zp"),n=s("284h");t.__esModule=!0,t.default=void 0;var i=n(s("q1tI")),a=s("elyg"),c=s("nOHt"),o=s("vNVm"),l={};function u(e,t,s,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,s,r).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+s+(n?"%"+n:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,s=(0,c.useRouter)(),n=s&&s.pathname||"/",d=i.default.useMemo((function(){var t=(0,a.resolveHref)(n,e.href,!0),s=r(t,2),i=s[0],c=s[1];return{href:i,as:e.as?(0,a.resolveHref)(n,e.as):c||i}}),[n,e.href,e.as]),h=d.href,f=d.as,m=e.children,p=e.replace,j=e.shallow,b=e.scroll,x=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var v=i.Children.only(m),g=v&&"object"===typeof v&&v.ref,y=(0,o.useIntersection)({rootMargin:"200px"}),O=r(y,2),_=O[0],N=O[1],S=i.default.useCallback((function(e){_(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,_]);(0,i.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(h),r="undefined"!==typeof x?x:s&&s.locale,n=l[h+"%"+f+(r?"%"+r:"")];e&&!n&&u(s,h,f,{locale:r})}),[f,h,N,x,t,s]);var w={ref:S,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,s,r,n,i,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(s))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[n?"replace":"push"](s,r,{shallow:i,locale:o,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,s,h,f,p,j,b,x)},onMouseEnter:function(e){(0,a.isLocalURL)(h)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(s,h,f,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var k="undefined"!==typeof x?x:s&&s.locale,R=s&&s.isLocaleDomain&&(0,a.getDomainLocale)(f,k,s&&s.locales,s&&s.domainLocales);w.href=R||(0,a.addBasePath)((0,a.addLocale)(f,k,s&&s.defaultLocale))}return i.default.cloneElement(v,w)};t.default=d},g4pe:function(e,t,s){e.exports=s("8Kt/")},rePB:function(e,t,s){"use strict";function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return r}))},vNVm:function(e,t,s){"use strict";var r=s("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,s=e.disabled||!a,o=(0,n.useRef)(),l=(0,n.useState)(!1),u=r(l,2),d=u[0],h=u[1],f=(0,n.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),s||d||e&&e.tagName&&(o.current=function(e,t,s){var r=function(e){var t=e.rootMargin||"",s=c.get(t);if(s)return s;var r=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;t&&s&&t(s)}))}),e);return c.set(t,s={id:t,observer:n,elements:r}),s}(s),n=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(n))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[s,t,d]);return(0,n.useEffect)((function(){if(!a&&!d){var e=(0,i.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[d]),[f,d]};var n=s("q1tI"),i=s("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map},zLVn:function(e,t,s){"use strict";function r(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}s.d(t,"a",(function(){return r}))}}]);