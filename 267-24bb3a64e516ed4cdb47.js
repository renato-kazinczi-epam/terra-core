(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1049:function(e,t,n){"use strict";var o=n(0),i=n.n(o),r=n(1),s=n.n(r),a=n(4),u=n.n(a),c=n(6),l=n.n(c),h=n(1050),f=n.n(h);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function v(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=O(e);if(t){var i=O(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=u.a.bind(f.a),L={EXTRA_FINE:1,FINE:2,MEDIUM:4,HEAVY:6},R=0,j={lineWidth:s.a.oneOf([L.EXTRA_FINE,L.FINE,L.MEDIUM,L.HEAVY]),lineSegments:s.a.array,onChange:s.a.func},k={lineWidth:L.FINE,lineSegments:[],onChange:void 0},x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(s,e);var t,n,o,r=S(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=r.call(this,e)).state={lineSegments:e.lineSegments},t.mouseInBounds=t.mouseInBounds.bind(E(t)),t.mouseDown=t.mouseDown.bind(E(t)),t.mouseUp=t.mouseUp.bind(E(t)),t.mouseXY=t.mouseXY.bind(E(t)),t.mouseLeave=t.mouseLeave.bind(E(t)),t.addLine=t.addLine.bind(E(t)),t.draw=t.draw.bind(E(t)),t.drawSignature=t.drawSignature.bind(E(t)),t.clearSignature=t.clearSignature.bind(E(t)),t.updateDimensions=t.updateDimensions.bind(E(t)),t}return t=s,(n=[{key:"componentDidMount",value:function(){"ontouchstart"in document.documentElement?(this.canvas.addEventListener("touchstart",this.mouseDown,!1),this.canvas.addEventListener("touchmove",this.mouseXY,!0),this.canvas.addEventListener("touchend",this.mouseUp,!1),document.body.addEventListener("touchleave",this.mouseLeave,!1),document.body.addEventListener("touchcancel",this.mouseUp,!1)):(this.canvas.addEventListener("mousedown",this.mouseDown),this.canvas.addEventListener("mousemove",this.mouseXY),document.body.addEventListener("mouseleave",this.mouseLeave,!1),document.body.addEventListener("mouseup",this.mouseUp)),this.canvas.getContext("2d").lineWidth=this.props.lineWidth,this.updateDimensions(),this.canvas.addEventListener("resize",this.updateDimensions)}},{key:"componentDidUpdate",value:function(e){this.props.lineSegments===e.lineSegments&&this.props.lineWidth===e.lineWidth||(this.setState({lineSegments:this.props.lineSegments}),this.drawSignature(this.props.lineSegments,this.props.lineWidth))}},{key:"componentWillUnmount",value:function(){"ontouchstart"in document.documentElement?(this.canvas.removeEventListener("touchstart",this.mouseDown),this.canvas.removeEventListener("touchmove",this.mouseXY),this.canvas.removeEventListener("touchend",this.mouseUp),document.body.removeEventListener("touchleave",this.mouseLeave),document.body.removeEventListener("touchcancel",this.mouseUp)):(this.canvas.removeEventListener("mousedown",this.mouseDown),this.canvas.removeEventListener("mousemove",this.mouseXY),document.body.removeEventListener("mouseleave",this.mouseLeave),document.body.removeEventListener("mouseup",this.mouseUp)),this.canvas.removeEventListener("resize",this.updateDimensions)}},{key:"mouseInBounds",value:function(e){var t=this.canvasRect;return t.top<e.pageY&&t.left<e.pageX&&t.bottom>e.pageY&&t.right>e.pageX}},{key:"mouseDown",value:function(e){"button"in e&&e.button!==R||(this.setState({lastLineSegments:[],painting:!0}),this.canvasRect=this.canvas.getBoundingClientRect(),this.addLine(e.pageX-this.canvasRect.left,e.pageY-this.canvasRect.top,!1),this.draw())}},{key:"mouseUp",value:function(e){this.setState({painting:!1}),this.props.onChange&&this.props.onChange(e,this.state.lineSegments,this.state.lastLineSegments)}},{key:"mouseXY",value:function(e){this.state.painting&&this.mouseInBounds(e)&&(this.addLine(e.pageX-this.canvasRect.left,e.pageY-this.canvasRect.top,!0),this.draw())}},{key:"mouseLeave",value:function(e){this.state.painting&&(this.setState({painting:!1}),this.props.onChange&&this.props.onChange(e,this.state.lineSegments,this.state.lastLineSegments))}},{key:"addLine",value:function(e,t,n){var o;if(n){var i=this.state.lineSegments[this.state.lineSegments.length-1];o={x1:i.x2,y1:i.y2,x2:e,y2:t}}else o={x1:e,y1:t,x2:e,y2:t};this.setState((function(e){return{lineSegments:[].concat(v(e.lineSegments),[o]),lastLineSegments:[].concat(v(e.lastLineSegments),[o])}}))}},{key:"draw",value:function(){var e=this.canvas.getContext("2d");if(this.state.lineSegments.length>0){var t=this.state.lineSegments[this.state.lineSegments.length-1],n=window.getComputedStyle(this.canvas).getPropertyValue("color");e.lineJoin="round",e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.strokeStyle=n,e.stroke()}}},{key:"drawSignature",value:function(e,t){var n=this.canvas.getContext("2d"),o=window.getComputedStyle(this.canvas).getPropertyValue("color");n.lineJoin="round",n.lineWidth=t,n.clearRect(0,0,this.canvasRect.width,this.canvasRect.height);for(var i=e.length,r=0;r<i;r+=1)n.beginPath(),n.moveTo(e[r].x1,e[r].y1),n.lineTo(e[r].x2,e[r].y2),n.strokeStyle=o,n.stroke()}},{key:"clearSignature",value:function(){this.setState({lineSegments:[]}),this.canvas.getContext("2d").clearRect(0,0,this.canvasRect.width,this.canvasRect.height)}},{key:"updateDimensions",value:function(){var e=this;setTimeout((function(){e.canvasRect=e.canvas.getBoundingClientRect(),e.canvas.width=e.canvasRect.width,e.canvas.height=e.canvasRect.height,e.drawSignature(e.state.lineSegments)}),250)}},{key:"render",value:function(){var e=this,t=this.context,n=this.props,o=(n.lineSegments,n.lineWidth,n.onChange,d(n,["lineSegments","lineWidth","onChange"]));return i.a.createElement("canvas",m({},o,{className:_("signature",t.className),ref:function(t){e.canvas=t}}))}}])&&g(t.prototype,n),o&&g(t,o),s}(i.a.Component);x.propTypes=j,x.defaultProps=k,x.contextType=l.a,x.Opts={},x.Opts.Width=L,t.a=x},1050:function(e,t,n){e.exports={"clinical-lowlight-theme":"Signature-module__clinical-lowlight-theme___19w3Z","orion-fusion-theme":"Signature-module__orion-fusion-theme___1CKr6",signature:"Signature-module__signature___1eE2W"}},1418:function(e,t,n){e.exports={"signature-wrapper":"SignatureDefaultTest-module__signature-wrapper___1uiU6"}},1871:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(4),s=n.n(r),a=n(1049),u=n(1418),c=n.n(u);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=s.a.bind(c.a),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(s,e);var t,n,o,r=p(s);function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=r.call(this)).state={lineSegments:[],lineWidth:a.a.Opts.Width.FINE},e}return t=s,(n=[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{id:"othersection"}),i.a.createElement("div",{className:v("signature-wrapper")},i.a.createElement(a.a,{id:"drawline",lineWidth:this.state.lineWidth,lineSegments:this.state.lineSegments,ref:function(t){e.signature=t}})))}}])&&h(t.prototype,n),o&&h(t,o),s}(i.a.Component);t.default=y}}]);