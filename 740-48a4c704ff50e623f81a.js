(window.webpackJsonp=window.webpackJsonp||[]).push([[740],{1732:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var o=n(0),r=n.n(o),u=n(4),c=n.n(u),i=n(851),a=n(871),f=n.n(a);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=m(t);if(e){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=c.a.bind(f.a),h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(c,t);var e,n,o,u=y(c);function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),t=u.call(this),window.DocumentTouch||(t.resetDocumentTouch=!0,window.DocumentTouch=function(){},window.DocumentTouch.prototype=Document.prototype),t}return e=c,(n=[{key:"componentDidUpdate",value:function(){window.DocumentTouch||(this.resetDocumentTouch=!0,window.DocumentTouch=function(){},window.DocumentTouch.prototype=Document.prototype)}},{key:"componentWillUnmount",value:function(){this.resetDocumentTouch&&delete window.DocumentTouch}},{key:"render",value:function(){return r.a.createElement("div",{className:w("content-wrapper")},r.a.createElement(i.a,{id:"auto-resizable",cols:"2",isAutoResizable:!0,defaultValue:"Default Value",ariaLabel:"label"}))}}])&&p(e.prototype,n),o&&p(e,o),c}(r.a.Component)}}]);