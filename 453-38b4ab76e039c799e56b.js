(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{1657:function(e,i,n){"use strict";n.r(i);var r=n(0),a=n.n(r),d=n(872),t=n(899);i.default=function(){return a.a.createElement(t.a,{legend:"Desired Department",showOptional:!0},a.a.createElement(d.a,{id:"ux-dept",name:"dept[]",labelText:"UX/Interaction Design",value:"ux"}),a.a.createElement(d.a,{id:"magazine-dept",name:"dept[]",labelText:"Magazine Advertisements",value:"magazine"}),a.a.createElement(d.a,{id:"website-dept",name:"dept[]",labelText:"Website Advertisements",value:"website"}),a.a.createElement(d.a,{id:"events-dept",name:"dept[]",labelText:"Event Promotions",value:"events"}))}},899:function(e,i,n){"use strict";var r=n(0),a=n.n(r),d=n(1),t=n.n(d),l=n(7),o=n(11),s=n.n(o),c=n(4),u=n.n(c),m=n(6),_=n.n(m),p=n(28),g=n.n(p),h=n(160),f=n(913),v=n.n(f);function b(){return(b=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,i){if(null==e)return{};var n,r,a=function(e,i){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var R=u.a.bind(v.a),w={children:t.a.node,error:t.a.node,help:t.a.node,hideRequired:t.a.bool,isInline:t.a.bool,isInvalid:t.a.bool,isLegendHidden:t.a.bool,legend:t.a.string.isRequired,legendAttrs:t.a.object,required:t.a.bool,showOptional:t.a.bool},q=function(e){var i=e.children,n=e.error,r=e.help,d=e.hideRequired,t=e.isInvalid,o=e.isInline,c=e.isLegendHidden,u=e.legend,m=e.legendAttrs,p=e.required,f=e.showOptional,v=E(e,["children","error","help","hideRequired","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"]),w=a.a.useContext(_.a),q=s()(R("radio-field",{"is-inline":o},w.className),v.className),x=R(["legend",m.className]),F="terra-radio-field-description-".concat(g()()),O=r?"terra-radio-field-description-help-".concat(g()()):"",y=n?"terra-radio-field-description-error-".concat(g()()):"",N="".concat(F," ").concat(y," ").concat(O),I=a.a.createElement("legend",{id:F,className:R(["legend-group",{"legend-group-hidden":c}])},a.a.createElement("div",b({},m,{className:x}),t&&a.a.createElement("span",{className:R("error-icon")}),p&&(t||!d)&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{"aria-hidden":"true",className:R("required")},"*"),a.a.createElement(l.FormattedMessage,{id:"Terra.form.field.required"},(function(e){return a.a.createElement(h.default,{text:e})}))),u,p&&!t&&d&&a.a.createElement("span",{className:R("required-hidden")},"*"),f&&!p&&a.a.createElement(l.FormattedMessage,{id:"Terra.form.field.optional"},(function(e){return a.a.createElement("span",{className:R("optional")},e)})),!t&&a.a.createElement("span",{className:R("error-icon-hidden")}))),T=a.a.Children.map(i,(function(e){return e&&e.type.isRadio?a.a.cloneElement(e,{inputAttrs:{"aria-describedby":N}}):e}));return a.a.createElement("fieldset",b({},v,{"aria-required":p,required:p,className:q}),I,T,t&&n&&a.a.createElement("div",{id:y,className:R("error-text")},n),r&&a.a.createElement("div",{id:O,className:R("help-text")},r))};q.propTypes=w,q.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1},i.a=q},913:function(e,i,n){e.exports={"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___49wwx","orion-fusion-theme":"RadioField-module__orion-fusion-theme___1VNsT","radio-field":"RadioField-module__radio-field___1FBSS","is-inline":"RadioField-module__is-inline___2oOJU","legend-group":"RadioField-module__legend-group___1Nzvu","legend-group-hidden":"RadioField-module__legend-group-hidden___3K8lM",legend:"RadioField-module__legend___3MCeu","error-icon":"RadioField-module__error-icon___r04pW","error-icon-hidden":"RadioField-module__error-icon-hidden___27Q32",required:"RadioField-module__required___3ryyq","required-hidden":"RadioField-module__required-hidden___3Kvlf",optional:"RadioField-module__optional___3Rae2","help-text":"RadioField-module__help-text___10eCf","error-text":"RadioField-module__error-text___3W6cM"}}}]);