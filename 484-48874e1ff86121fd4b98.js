(window.webpackJsonp=window.webpackJsonp||[]).push([[484],{1832:function(e,r,a){"use strict";a.r(r);var l=a(0),t=a.n(l),n=a(908);r.default=function(){return t.a.createElement("div",null,t.a.createElement(n.a,{id:"progressbarTiny",heightSize:"tiny",valueText:"15%",value:15}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(n.a,{id:"progressbarSmall",heightSize:"small",valueText:"30%",value:30}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(n.a,{id:"progressbarMedium",heightSize:"medium",valueText:"45%",value:45}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(n.a,{id:"progressbarLarge",heightSize:"large",valueText:"60%",value:60}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(n.a,{id:"progressbarHuge",heightSize:"huge",valueText:"75%",value:75}))}},908:function(e,r,a){"use strict";var l=a(0),t=a.n(l),n=a(1),o=a.n(n),u=a(11),s=a.n(u),i=a(4),m=a.n(i),c=a(6),g=a.n(c),_=a(933),h=a.n(_);function v(){return(v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function d(e,r){if(null==e)return{};var a,l,t=function(e,r){if(null==e)return{};var a,l,t={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var b=m.a.bind(h.a),p={heightSize:o.a.oneOf(["tiny","small","medium","large","huge"]),value:o.a.number.isRequired,max:o.a.number,valueText:o.a.string,colorClass:o.a.string},f={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},x=function(e){var r=e.heightSize,a=e.value,l=e.max,n=e.valueText,o=e.colorClass,u=d(e,["heightSize","value","max","valueText","colorClass"]),i=t.a.useContext(g.a),m=s()(b("progress-bar",r,o,i.className),u.className),c=a/l*100;return t.a.createElement("progress",v({},u,{className:m,max:100,value:c,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,"aria-valuetext":n,tabIndex:"-1"}))};x.propTypes=p,x.defaultProps=f,r.a=x},933:function(e,r,a){e.exports={"clinical-lowlight-theme":"ProgressBar-module__clinical-lowlight-theme___2_p_k","orion-fusion-theme":"ProgressBar-module__orion-fusion-theme___17Iif","progress-bar":"ProgressBar-module__progress-bar___1N22G","default-color":"ProgressBar-module__default-color___jTtgU",tiny:"ProgressBar-module__tiny___3oKeK",small:"ProgressBar-module__small___2Yo8c",medium:"ProgressBar-module__medium___28obE",large:"ProgressBar-module__large___1YeNr",huge:"ProgressBar-module__huge___JhThc"}}}]);