(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{1720:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),l=n.n(a),i=n(348),u=n(841),c=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=l.a.bind(c.a),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,n,r,a=d(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=a.call(this)).state={isInvalid:!1},e.toggleInvalid=e.toggleInvalid.bind(m(e)),e}return t=l,(n=[{key:"toggleInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"render",value:function(){return o.a.createElement("div",{className:v("content-wrapper")},o.a.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle Validity"),o.a.createElement(i.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"select-field",defaultValue:"small",error:"Error message.",help:"Help message.",isInvalid:this.state.isInvalid},o.a.createElement(i.default.Option,{value:"xSmall",display:"Extra Small"}),o.a.createElement(i.default.Option,{value:"small",display:"Small"}),o.a.createElement(i.default.Option,{value:"medium",display:"Medium"}),o.a.createElement(i.default.Option,{value:"large",display:"Large"}),o.a.createElement(i.default.Option,{value:"xLarge",display:"Extra Large"})))}}])&&s(t.prototype,n),r&&s(t,r),l}(o.a.Component);t.default=g},841:function(e,t,n){e.exports={"content-wrapper":"Select-test-module__content-wrapper___2iw6l","bottom-left":"Select-test-module__bottom-left___bgyVg"}}}]);