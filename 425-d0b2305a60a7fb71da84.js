(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{1531:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(897);t.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{text:"Default",id:"default-badge"})," ",i.a.createElement(r.a,{intent:"primary",text:"Primary",id:"primary-badge"})," ",i.a.createElement(r.a,{intent:"secondary",text:"Secondary",id:"secondary-badge"})," ",i.a.createElement(r.a,{intent:"positive",text:"Positive",id:"positive-badge"})," ",i.a.createElement(r.a,{intent:"negative",text:"Negative",id:"negative-badge"})," ",i.a.createElement(r.a,{intent:"warning",text:"Warning",id:"warning-badge"})," ",i.a.createElement(r.a,{intent:"info",text:"Info",id:"info-badge"}))}},897:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),l=n.n(r),o=n(11),d=n.n(o),_=n(4),u=n.n(_),s=n(6),c=n.n(s),g=n(160),m=n(911),f=n.n(m);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var O=u.a.bind(f.a),h={children:l.a.node,icon:l.a.element,intent:l.a.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:l.a.bool,size:l.a.oneOf(["tiny","small","medium","large","huge"]),text:l.a.string,visuallyHiddenText:l.a.string},x={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},w=function(e){var t=e.size,n=e.intent,a=e.isReversed,r=e.text,l=e.icon,o=e.visuallyHiddenText,_=v(e,["size","intent","isReversed","text","icon","visuallyHiddenText"]),u=i.a.useContext(c.a),s=d()(O("badge",{"has-icon":l},{"is-reversed":a},t,n,u.className),_.className),m=r?i.a.createElement("span",{className:f.a.text,"aria-hidden":"true"},r):null,p=o?i.a.createElement(g.default,{text:o}):null,y=a?[p,m,l,_.children]:[l,p,m,_.children];return i.a.createElement.apply(i.a,["span",b(b({},_),{},{className:s})].concat(y))};w.propTypes=h,w.defaultProps=x,t.a=w},911:function(e,t,n){e.exports={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___3leRB","orion-fusion-theme":"Badge-module__orion-fusion-theme___dpbkE",badge:"Badge-module__badge___sisNb","is-reversed":"Badge-module__is-reversed___1PITk","has-icon":"Badge-module__has-icon___1LFJj",text:"Badge-module__text___27-ZB",tiny:"Badge-module__tiny___3cqjm",small:"Badge-module__small___1daZC",medium:"Badge-module__medium___hxuWv",large:"Badge-module__large___1XrSY",huge:"Badge-module__huge___9ekNA",default:"Badge-module__default___3P8YA",primary:"Badge-module__primary___3C9G7",secondary:"Badge-module__secondary___90bJ6",positive:"Badge-module__positive___1dbf0",negative:"Badge-module__negative___LO9HK",warning:"Badge-module__warning___5a84O",info:"Badge-module__info___1MNBH"}}}]);