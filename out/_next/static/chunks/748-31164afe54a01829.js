(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{5062:function(e,n,t){"use strict";t.d(n,{i:function(){return r}});var r=t(1043).v9},3748:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(5893),o=t(7294),a=t(9008),i=t(6674),c=function(e){return{type:i.I.CHANGE_LANGUAGE,payload:{language:e}}},l=t(1043),u=function(e,n){(0,o.useEffect)((function(){var t=function(t){var r;e.current&&!(null===(r=e.current)||void 0===r?void 0:r.contains(t.target))&&n()};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e])},s=t(5062),f=[{lang:"eng",id:1},{lang:"cz",id:2},{lang:"ukr",id:3},{lang:"rus",id:4},{lang:"hr",id:5}],d=o.memo((function(){var e=(0,s.i)((function(e){return e.language})).language,n=(0,s.i)((function(e){return e.darkmode})).isDarkMode,t=(0,o.useState)(!1),a=t[0],i=t[1],d=(0,o.useState)(e),p=d[0],m=d[1],y=(0,l.I0)(),h=(0,o.useRef)(null);return u(h,(function(){return i(!1)})),(0,o.useEffect)((function(){y(c(p))}),[p]),(0,r.jsxs)("div",{ref:h,className:"z-50 flex flex-col md:hover:scale-105 transform transition ease-out duration-200",children:[(0,r.jsxs)("button",{"data-dropdown-toggle":"dropdown",onClick:function(){return i(!a)},className:"".concat(n?"bg-zinc-500":"bg-gray-500"," \n                 ").concat(n?"text-gray-300":"text-white"," \n                 hover:bg-gray-500 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"),type:"button",children:[p,(0,r.jsx)("svg",{className:"ml-2 w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M19 9l-7 7-7-7"})})]}),(0,r.jsx)("div",{className:"".concat(a?"inline-flex":"hidden"," absolute justify-center outline-none text-base list-none bg-white rounded divide-y divide-gray-100"),children:(0,r.jsx)("ul",{"aria-labelledby":"dropdownButton",children:null===f||void 0===f?void 0:f.map((function(e){return(0,r.jsx)("li",{onClick:function(){return n=e.lang,m(n),void i(!a);var n},className:"".concat(e.lang===p?"bg-gray-600":"".concat(n?"bg-zinc-400":"bg-white"),"\n                                ").concat(e.lang===p?"".concat(n?"text-gray-300":"text-white"):"text-black"," shadow cursor-pointer py-2 px-6 text-sm hover:bg-gray-500 ").concat(n?"hover:text-gray-300":"hover:text-white","\n                                    "),children:e.lang},e.id)}))})})]})})),p=t(1664),m=t(5483),y=function(e){return{type:m.t.SET_DARK_MODE,payload:{isDarkMode:e}}},h=o.memo((function(){var e=(0,s.i)((function(e){return e.darkmode})).isDarkMode,n=(0,o.useState)(e),t=n[0],a=n[1],i=(0,l.I0)();return(0,o.useEffect)((function(){i(y(t))}),[t]),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("div",{className:"form-check form-switch p-0",children:(0,r.jsx)("input",{className:" form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-gray-500 bg-no-repeat bg-contain bg-black focus:outline-none checked:bg-black cursor-pointer shadow-sm md:hover:scale-105 transform transition ease-out duration-200 ",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked",onChange:function(){a((function(e){return!e}))},checked:t})})})})),v=o.memo((function(e){var n=e.isOpen,t=e.setIsOpen,o=e.isDarkMode,a="h-1 w-8 my-1 rounded-full ".concat(o?"bg-gray-300":"bg-black"," transition ease transform duration-300");return(0,r.jsxs)("button",{className:"md:hidden flex flex-col h-9 w-9 justify-center items-center group",onClick:function(){return t(!n)},children:[(0,r.jsx)("div",{className:"".concat(a," ").concat(n?"rotate-45 translate-y-3 opacity-50 group-hover:opacity-100":"opacity-50 group-hover:opacity-100")}),(0,r.jsx)("div",{className:"".concat(a," ").concat(n?"opacity-0":"opacity-50 group-hover:opacity-100")}),(0,r.jsx)("div",{className:"".concat(a," ").concat(n?"-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100":"opacity-50 group-hover:opacity-100")})]})})),g=t(2381),b=function(e){return{type:g.D.SET_SELECTED_PAGE,payload:{page:e}}},x=t(1163),w=o.memo((function(){var e,n=(0,x.useRouter)(),t=(0,s.i)((function(e){return e.header})).navbarText,a=null===(e=null===t||void 0===t?void 0:t.find((function(e){return(null===e||void 0===e?void 0:e.path)===(null===n||void 0===n?void 0:n.asPath)})))||void 0===e?void 0:e.id,i=(0,o.useState)(a),c=i[0],f=i[1],m=(0,o.useState)(!1),y=m[0],g=m[1],w=(0,l.I0)(),j=(0,s.i)((function(e){return e.darkmode})).isDarkMode,k=(0,s.i)((function(e){return e.language})).language,O=(0,o.useRef)(null);return u(O,(function(){return g(!1)})),(0,o.useEffect)((function(){var e,n;w(b(null===t||void 0===t||null===(e=t[c-1])||void 0===e||null===(n=e.title)||void 0===n?void 0:n[k]))}),[c,k]),(0,r.jsxs)("header",{ref:O,style:{backgroundColor:"".concat(j?"#27272a":"#f4f4f5")},className:"fixed-top flex flex-col justify-between mx-auto p-7 md:flex-row md:items-center max-w-7xl shadow-md z-30",children:[(0,r.jsxs)("div",{className:"flex flex-col w-full justify-between items-center space-y-7 xs:space-y-0 xs:flex-row",children:[(0,r.jsx)(p.default,{href:"/",children:(0,r.jsxs)("div",{className:"flex flex-col ".concat(j?"text-gray-300":"text-black"," cursor-pointer"),children:[(0,r.jsx)("h1",{className:"whitespace-nowrap font-bold text-xl",children:"Maksym Stepanets"}),(0,r.jsx)("h2",{className:"whitespace-nowrap",children:"Junior React Developer"})]})}),(0,r.jsxs)("div",{className:"flex items-center space-x-7 md:ml-auto",children:[(0,r.jsx)(d,{}),(0,r.jsx)(h,{}),(0,r.jsx)(v,{isDarkMode:j,isOpen:y,setIsOpen:g})]})]}),(0,r.jsx)("div",{className:"".concat(y?"inline-flex":"hidden","\n                ").concat(j?"text-gray-300":"text-black","\n                flex-col\n                items-center \n                justify-center \n                space-y-4 \n                mt-7 \n                md:inline-flex \n                md:space-y-0 \n                md:mt-0 \n                md:flex-row  \n                md:space-x-7 \n                md:ml-8"),children:null===t||void 0===t?void 0:t.map((function(e){return(0,r.jsx)(p.default,{href:e.path,children:(0,r.jsx)("h3",{className:"\n                    ".concat(e.id===c?"active-link":"header-link"," \n                    ").concat(e.id===c?"pointer-events-none":"pointer-events-auto"," \n                    whitespace-nowrap"),onClick:function(){return f(e.id)},children:e.title[k]})},e.id)}))})]})}));function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){j(e,n,t[n])}))}return e}function O(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var E=o.memo((function(e){var n=e.isDarkMode,t=e.children,a=O(e,["isDarkMode","children"]),i=(0,o.useState)(!1),c=i[0],l=i[1];return(0,o.useEffect)((function(){setTimeout((function(){l(!0)}))}),[]),(0,r.jsx)("main",{style:{backgroundColor:"".concat(n?"rgb(82 82 91)":"#fafafa")},className:"\n            min-h-screen\n            h-min \n            max-w-7xl\n            mx-auto\n            shadow-md\n            ",children:(0,r.jsx)("div",k({className:"\n            h-full\n            w-full\n            flex \n            flex-col \n            justify-start \n            items-center\n            ".concat(c?"opacity-100":"opacity-0","\n            transition-opacity\n            ease-out\n            duration-1000\n            ")},a,{children:t}))})}));function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){S(e,n,t[n])}))}return e}function M(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var C=function(e){var n=e.title,t=e.keywords,o=e.children,i=M(e,["title","keywords","children"]),c=(0,s.i)((function(e){return e.header})).selectPage,l=(0,s.i)((function(e){return e.darkmode})).isDarkMode;return(0,r.jsxs)("div",{style:{backgroundColor:"".concat(l?"#3f3f46":"#fdfdfd")},children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:n||c}),(0,r.jsx)("meta",{name:"keywords",content:"Maksym Stepanets, Junior, React Developer, NextJS, Work, Freelance, ".concat(t)})]}),(0,r.jsx)(w,{}),(0,r.jsx)(E,N({isDarkMode:l},i,{children:o}))]})}},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},c=t(6273),l=t(387),u=t(7190);var s={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),a=i.default.useMemo((function(){var n=o(c.resolveHref(r,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):a||t}}),[r,e.href,e.as]),d=a.href,p=a.as,m=e.children,y=e.replace,h=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(n=i.default.Children.only(m))&&"object"===typeof n&&n.ref,x=o(u.useIntersection({rootMargin:"200px"}),2),w=x[0],j=x[1],k=i.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);i.default.useEffect((function(){var e=j&&t&&c.isLocalURL(d),n="undefined"!==typeof g?g:r&&r.locale,o=s[d+"%"+p+(n?"%"+n:"")];e&&!o&&f(r,d,p,{locale:n})}),[p,d,j,g,t,r]);var O={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:i}))}(e,r,d,p,y,h,v,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof g?g:r&&r.locale,S=r&&r.isLocaleDomain&&c.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);O.href=S||c.addBasePath(c.addLocale(p,E,r&&r.defaultLocale))}return i.default.cloneElement(n,O)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!c,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],m=o(a.useState(n?n.current:null),2),y=m[0],h=m[1],v=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=l.get(r):(n=l.get(t),u.push(t));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(t,n={id:t,observer:a,elements:o}),n}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var n=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&u.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:t}))}),[r,y,t,d]);return a.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){n&&h(n.current)}),[n]),[v,d]};var a=t(7294),i=t(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[]},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}}]);