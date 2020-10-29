(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{1580:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(883);a.default=function(){return r.a.createElement(l.a,{id:"gestational-age-no-label",gestationalAge:"April 5, 2016"})}},850:function(e,a,t){e.exports={"clinical-lowlight-theme":"DemographicsBanner-module__clinical-lowlight-theme___2dYS-","orion-fusion-theme":"DemographicsBanner-module__orion-fusion-theme___wW7nq","demographics-banner":"DemographicsBanner-module__demographics-banner___B8ydw","profile-photo":"DemographicsBanner-module__profile-photo___3xj1m",value:"DemographicsBanner-module__value___36hMc","value-text":"DemographicsBanner-module__value-text___2EEKs","value-label":"DemographicsBanner-module__value-label___2GX10","person-name":"DemographicsBanner-module__person-name___BiU7V",identifiers:"DemographicsBanner-module__identifiers___1ZYCn","person-details":"DemographicsBanner-module__person-details___11LgE","preferred-first-name":"DemographicsBanner-module__preferred-first-name___8L2vr",deceased:"DemographicsBanner-module__deceased___1bHkM",abbreviation:"DemographicsBanner-module__abbreviation___19I_C",row:"DemographicsBanner-module__row___2O2Wm",content:"DemographicsBanner-module__content___1_Fle","application-content":"DemographicsBanner-module__application-content___2N6SW","large-demographics-banner":"DemographicsBanner-module__large-demographics-banner___IBDnX"}},883:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(1),s=t.n(l),i=t(7),o=t(206),c=t(850),d=t.n(c),g=t(11),p=t.n(g),u=t(4),m=t.n(u),f=t(6),h=t.n(f),b=t(160),_=m.a.bind(d.a),O=function(e){var a,t=e.label,n=e.value,l=e.abbrTitle;return t&&l?a=r.a.createElement("span",{className:_("value-label")},r.a.createElement("abbr",{className:_("abbreviation"),title:l,"aria-hidden":"true"},"".concat(t,":"))):t&&(a=r.a.createElement("span",{className:_("value-label")},"".concat(t,":"))),r.a.createElement("span",{className:_("value")},l&&r.a.createElement(b.default,{text:l}),a,r.a.createElement("span",{className:_("value-text")},n))},v={personDetails:function(e){var a=[r.a.createElement(O,{key:"age",value:e.age}),r.a.createElement(O,{key:"gender",value:e.gender}),r.a.createElement(O,{key:"dob",abbrTitle:e.dateOfBirthFullText,label:e.dateOfBirthLabel,value:e.dateOfBirth})];return e.gestationalAge&&a.push(r.a.createElement(O,{key:"ga",abbrTitle:e.gestationalAgeFullText,label:e.gestationalAgeLabel,value:e.gestationalAge})),e.postMenstrualAge&&a.push(r.a.createElement(O,{key:"pma",abbrTitle:e.postMenstrualAgeFullText,label:e.postMenstrualAgeLabel,value:e.postMenstrualAge})),e.deceasedDate&&a.push(r.a.createElement(O,{key:"deceased",label:e.deceasedDateLabel,value:e.deceasedDate})),a},applicationIdentifiers:function(e){var a=e.identifiers;return a?Object.keys(a).map((function(e){return r.a.createElement(O,{key:"identifier-".concat(e),label:e,value:a[e]})})):null}};function A(){return(A=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function B(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var N=m.a.bind(d.a),D=function(e){e.age;var a=e.applicationContent,t=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),n=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.personName),l=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),s=B(e,["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","personName","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"]),i=r.a.useContext(h.a),o=p()(N("demographics-banner",{deceased:t},i.className),s.className);return delete s.className,r.a.createElement("section",A({className:o},s),r.a.createElement("h1",{className:N("person-name")},r.a.createElement("span",null,n,l&&r.a.createElement("span",{className:N("preferred-first-name")},l))),r.a.createElement("div",{className:N("person-details")},v.personDetails(e),v.applicationIdentifiers(e)),r.a.createElement("div",{className:N("application-content")},a))};function y(){return(y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function x(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var T=m.a.bind(d.a),E=function(e){e.age;var a=e.applicationContent,t=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),n=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.personName),l=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),s=x(e,["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","personName","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"]),i=r.a.useContext(h.a),o=p()(T("demographics-banner","large-demographics-banner",{deceased:t},i.className),s.className);return delete s.className,r.a.createElement("section",y({className:o},s),e.photo&&r.a.createElement("div",{className:T("profile-photo")},e.photo),r.a.createElement("div",{className:T("content")},r.a.createElement("div",{className:T("row")},r.a.createElement("h1",{className:T("person-name")},n,l&&r.a.createElement("span",{className:T("preferred-first-name")},l)),r.a.createElement("div",{className:T("application-content")},a)),r.a.createElement("div",{className:T("row")},r.a.createElement("div",{className:T("person-details")},v.personDetails(e)),r.a.createElement("div",{className:T("identifiers")},v.applicationIdentifiers(e)))))},M={applicationContent:s.a.node,age:s.a.string,dateOfBirth:s.a.string,dateOfBirthLabel:s.a.string,dateOfBirthFullText:s.a.string,deceasedDate:s.a.string,deceasedDateLabel:s.a.string,gender:s.a.string,gestationalAge:s.a.string,gestationalAgeLabel:s.a.string,gestationalAgeFullText:s.a.string,identifiers:s.a.object,personName:s.a.string,photo:s.a.node,postMenstrualAge:s.a.string,postMenstrualAgeLabel:s.a.string,postMenstrualAgeFullText:s.a.string,preferredFirstName:s.a.string},F=function(e){return r.a.createElement(o.a,{tiny:r.a.createElement(D,e),small:r.a.createElement(E,e)})};F.propTypes=M,F.defaultProps={applicationContent:null,age:"--",dateOfBirth:"--",dateOfBirthLabel:"DOB",dateOfBirthFullText:"Date of Birth",deceasedDate:null,deceasedDateLabel:"Deceased",gender:"--",gestationalAge:null,gestationalAgeLabel:"GA",gestationalAgeFullText:"Gestational Age",identifiers:{},personName:"--",photo:null,postMenstrualAge:null,postMenstrualAgeLabel:"PMA",postMenstrualAgeFullText:"Post Menstrual Age",preferredFirstName:null};var L=F;function j(){return(j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function w(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var k={applicationContent:s.a.node,age:s.a.string,dateOfBirth:s.a.string,deceasedDate:s.a.string,gender:s.a.string,gestationalAge:s.a.string,identifiers:s.a.object,intl:i.intlShape.isRequired,personName:s.a.string,photo:s.a.node,postMenstrualAge:s.a.string,preferredFirstName:s.a.string},P={applicationContent:null,age:void 0,dateOfBirth:void 0,deceasedDate:null,gender:void 0,gestationalAge:null,identifiers:{},personName:void 0,photo:null,postMenstrualAge:null,preferredFirstName:null},C=function(e){var a=e.age,t=e.dateOfBirth,n=e.gender,l=e.intl,s=e.personName,i=w(e,["age","dateOfBirth","gender","intl","personName"]),o=l.formatMessage({id:"Terra.demographicsBanner.noDataProvided"});return r.a.createElement(L,j({},i,{age:a||o,dateOfBirth:t||o,gender:n||o,personName:s||o,dateOfBirthLabel:l.formatMessage({id:"Terra.demographicsBanner.dateOfBirth"}),dateOfBirthFullText:l.formatMessage({id:"Terra.demographicsBanner.dateOfBirthFullText"}),deceasedDateLabel:l.formatMessage({id:"Terra.demographicsBanner.deceased"}),gestationalAgeLabel:l.formatMessage({id:"Terra.demographicsBanner.gestationalAge"}),gestationalAgeFullText:l.formatMessage({id:"Terra.demographicsBanner.gestationalAgeFullText"}),postMenstrualAgeLabel:l.formatMessage({id:"Terra.demographicsBanner.postMenstrualAge"}),postMenstrualAgeFullText:l.formatMessage({id:"Terra.demographicsBanner.postMenstrualAgeFullText"})}))};C.propTypes=k,C.defaultProps=P;a.a=Object(i.injectIntl)(C)}}]);