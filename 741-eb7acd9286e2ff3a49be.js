(window.webpackJsonp=window.webpackJsonp||[]).push([[741],{1733:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var o=n(0),r=n.n(o),i=n(4),a=n.n(i),u=n(851),c=n(871),f=n.n(c);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=h(t);if(e){var r=h(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=a.a.bind(f.a),m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(a,t);var e,n,o,i=y(a);function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this),navigator.maxTouchPoints&&0!==navigator.maxTouchPoints||(t.resetMaxTouchPoints=!0,t.previousMaxTouchPoints=navigator.maxTouchPoints,Object.defineProperty(navigator,"maxTouchPoints",{value:1,configurable:!0})),t}return e=a,(n=[{key:"componentDidUpdate",value:function(){navigator.maxTouchPoints&&0!==navigator.maxTouchPoints||(this.resetMaxTouchPoints=!0,this.previousMaxTouchPoints=navigator.maxTouchPoints,Object.defineProperty(navigator,"maxTouchPoints",{value:1,configurable:!0}))}},{key:"componentWillUnmount",value:function(){this.resetMaxTouchPoints&&Object.defineProperty(navigator,"maxTouchPoints",{value:this.previousMaxTouchPoints,configurable:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:v("content-wrapper")},r.a.createElement(u.a,{id:"auto-resizable",cols:"2",isAutoResizable:!0,defaultValue:"Default Value",ariaLabel:"label"}))}}])&&l(e.prototype,n),o&&l(e,o),a}(r.a.Component)}}]);