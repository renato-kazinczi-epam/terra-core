(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{1578:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(883);a.default=function(){return n.a.createElement(l.a,{id:"deceased-demographics",applicationContent:n.a.createElement("span",{className:"risk-score"},"5%"),age:"25 Years",dateOfBirth:"May 9, 1992",deceasedDate:"March 12, 2017",gender:"Male",identifiers:{MRN:12343,REA:"3JSDA"},personName:"Johnathon Doe",preferredFirstName:"John"})}},850:function(e,a,t){e.exports={"clinical-lowlight-theme":"DemographicsBanner-module__clinical-lowlight-theme___2dYS-","orion-fusion-theme":"DemographicsBanner-module__orion-fusion-theme___wW7nq","demographics-banner":"DemographicsBanner-module__demographics-banner___B8ydw","profile-photo":"DemographicsBanner-module__profile-photo___3xj1m",value:"DemographicsBanner-module__value___36hMc","value-text":"DemographicsBanner-module__value-text___2EEKs","value-label":"DemographicsBanner-module__value-label___2GX10","person-name":"DemographicsBanner-module__person-name___BiU7V",identifiers:"DemographicsBanner-module__identifiers___1ZYCn","person-details":"DemographicsBanner-module__person-details___11LgE","preferred-first-name":"DemographicsBanner-module__preferred-first-name___8L2vr",deceased:"DemographicsBanner-module__deceased___1bHkM",abbreviation:"DemographicsBanner-module__abbreviation___19I_C",row:"DemographicsBanner-module__row___2O2Wm",content:"DemographicsBanner-module__content___1_Fle","application-content":"DemographicsBanner-module__application-content___2N6SW","large-demographics-banner":"DemographicsBanner-module__large-demographics-banner___IBDnX"}},883:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(1),s=t.n(l),i=t(7),o=t(206),c=t(850),d=t.n(c),p=t(11),g=t.n(p),u=t(4),m=t.n(u),f=t(6),h=t.n(f),b=t(160),_=m.a.bind(d.a),O=function(e){var a,t=e.label,r=e.value,l=e.abbrTitle;return t&&l?a=n.a.createElement("span",{className:_("value-label")},n.a.createElement("abbr",{className:_("abbreviation"),title:l,"aria-hidden":"true"},"".concat(t,":"))):t&&(a=n.a.createElement("span",{className:_("value-label")},"".concat(t,":"))),n.a.createElement("span",{className:_("value")},l&&n.a.createElement(b.default,{text:l}),a,n.a.createElement("span",{className:_("value-text")},r))},v={personDetails:function(e){var a=[n.a.createElement(O,{key:"age",value:e.age}),n.a.createElement(O,{key:"gender",value:e.gender}),n.a.createElement(O,{key:"dob",abbrTitle:e.dateOfBirthFullText,label:e.dateOfBirthLabel,value:e.dateOfBirth})];return e.gestationalAge&&a.push(n.a.createElement(O,{key:"ga",abbrTitle:e.gestationalAgeFullText,label:e.gestationalAgeLabel,value:e.gestationalAge})),e.postMenstrualAge&&a.push(n.a.createElement(O,{key:"pma",abbrTitle:e.postMenstrualAgeFullText,label:e.postMenstrualAgeLabel,value:e.postMenstrualAge})),e.deceasedDate&&a.push(n.a.createElement(O,{key:"deceased",label:e.deceasedDateLabel,value:e.deceasedDate})),a},applicationIdentifiers:function(e){var a=e.identifiers;return a?Object.keys(a).map((function(e){return n.a.createElement(O,{key:"identifier-".concat(e),label:e,value:a[e]})})):null}};function A(){return(A=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function B(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var N=m.a.bind(d.a),D=function(e){e.age;var a=e.applicationContent,t=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),r=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.personName),l=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),s=B(e,["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","personName","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"]),i=n.a.useContext(h.a),o=g()(N("demographics-banner",{deceased:t},i.className),s.className);return delete s.className,n.a.createElement("section",A({className:o},s),n.a.createElement("h1",{className:N("person-name")},n.a.createElement("span",null,r,l&&n.a.createElement("span",{className:N("preferred-first-name")},l))),n.a.createElement("div",{className:N("person-details")},v.personDetails(e),v.applicationIdentifiers(e)),n.a.createElement("div",{className:N("application-content")},a))};function M(){return(M=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function y(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var E=m.a.bind(d.a),x=function(e){e.age;var a=e.applicationContent,t=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),r=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.personName),l=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),s=y(e,["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","personName","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"]),i=n.a.useContext(h.a),o=g()(E("demographics-banner","large-demographics-banner",{deceased:t},i.className),s.className);return delete s.className,n.a.createElement("section",M({className:o},s),e.photo&&n.a.createElement("div",{className:E("profile-photo")},e.photo),n.a.createElement("div",{className:E("content")},n.a.createElement("div",{className:E("row")},n.a.createElement("h1",{className:E("person-name")},r,l&&n.a.createElement("span",{className:E("preferred-first-name")},l)),n.a.createElement("div",{className:E("application-content")},a)),n.a.createElement("div",{className:E("row")},n.a.createElement("div",{className:E("person-details")},v.personDetails(e)),n.a.createElement("div",{className:E("identifiers")},v.applicationIdentifiers(e)))))},T={applicationContent:s.a.node,age:s.a.string,dateOfBirth:s.a.string,dateOfBirthLabel:s.a.string,dateOfBirthFullText:s.a.string,deceasedDate:s.a.string,deceasedDateLabel:s.a.string,gender:s.a.string,gestationalAge:s.a.string,gestationalAgeLabel:s.a.string,gestationalAgeFullText:s.a.string,identifiers:s.a.object,personName:s.a.string,photo:s.a.node,postMenstrualAge:s.a.string,postMenstrualAgeLabel:s.a.string,postMenstrualAgeFullText:s.a.string,preferredFirstName:s.a.string},F=function(e){return n.a.createElement(o.a,{tiny:n.a.createElement(D,e),small:n.a.createElement(x,e)})};F.propTypes=T,F.defaultProps={applicationContent:null,age:"--",dateOfBirth:"--",dateOfBirthLabel:"DOB",dateOfBirthFullText:"Date of Birth",deceasedDate:null,deceasedDateLabel:"Deceased",gender:"--",gestationalAge:null,gestationalAgeLabel:"GA",gestationalAgeFullText:"Gestational Age",identifiers:{},personName:"--",photo:null,postMenstrualAge:null,postMenstrualAgeLabel:"PMA",postMenstrualAgeFullText:"Post Menstrual Age",preferredFirstName:null};var L=F;function j(){return(j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function w(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var k={applicationContent:s.a.node,age:s.a.string,dateOfBirth:s.a.string,deceasedDate:s.a.string,gender:s.a.string,gestationalAge:s.a.string,identifiers:s.a.object,intl:i.intlShape.isRequired,personName:s.a.string,photo:s.a.node,postMenstrualAge:s.a.string,preferredFirstName:s.a.string},P={applicationContent:null,age:void 0,dateOfBirth:void 0,deceasedDate:null,gender:void 0,gestationalAge:null,identifiers:{},personName:void 0,photo:null,postMenstrualAge:null,preferredFirstName:null},C=function(e){var a=e.age,t=e.dateOfBirth,r=e.gender,l=e.intl,s=e.personName,i=w(e,["age","dateOfBirth","gender","intl","personName"]),o=l.formatMessage({id:"Terra.demographicsBanner.noDataProvided"});return n.a.createElement(L,j({},i,{age:a||o,dateOfBirth:t||o,gender:r||o,personName:s||o,dateOfBirthLabel:l.formatMessage({id:"Terra.demographicsBanner.dateOfBirth"}),dateOfBirthFullText:l.formatMessage({id:"Terra.demographicsBanner.dateOfBirthFullText"}),deceasedDateLabel:l.formatMessage({id:"Terra.demographicsBanner.deceased"}),gestationalAgeLabel:l.formatMessage({id:"Terra.demographicsBanner.gestationalAge"}),gestationalAgeFullText:l.formatMessage({id:"Terra.demographicsBanner.gestationalAgeFullText"}),postMenstrualAgeLabel:l.formatMessage({id:"Terra.demographicsBanner.postMenstrualAge"}),postMenstrualAgeFullText:l.formatMessage({id:"Terra.demographicsBanner.postMenstrualAgeFullText"})}))};C.propTypes=k,C.defaultProps=P;a.a=Object(i.injectIntl)(C)}}]);