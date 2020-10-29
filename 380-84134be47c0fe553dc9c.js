(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{1012:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),i=a(835),o=a.n(i),d=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-status-view",name:"terra-status-view",version:"4.36.0",url:t})}},1465:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));a(0);var n=a(343),r=a(1012);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={};function l(e){var t=e.components,a=o(e,["components"]);return Object(n.mdx)("wrapper",i({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)(r.a,{mdxType:"Badge"}),Object(n.mdx)("h1",{id:"terra-status-view-upgrade-guide"},"Terra Status View Upgrade Guide"),Object(n.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(n.mdx)("h3",{id:"props"},"Props"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"Removed")," children prop. This is ",Object(n.mdx)("strong",{parentName:"li"},"replaced")," by ",Object(n.mdx)("inlineCode",{parentName:"li"},"buttonAttrs"),". This prop accepts an array of objects containing terra-button properties. Remember that React requires a unique key to be attached to each element in an array. Example:")),Object(n.mdx)("pre",null,Object(n.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"const buttons = [\n  {\n    key: 1,\n    text: 'Action 1',\n    onClick: handleOnAction1,\n  }, {\n    key: 2,\n    text: 'Action 2',\n    onClick: handeOnAction2,\n  },\n];\n\n<StatusView buttonAttrs={buttons} />\n")),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"Removed")," default behaviour of rendering an error view. Please provide props."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"Removed")," the ",Object(n.mdx)("inlineCode",{parentName:"li"},"custom")," variant. Use first class props ",Object(n.mdx)("inlineCode",{parentName:"li"},"title"),", ",Object(n.mdx)("inlineCode",{parentName:"li"},"message"),", or ",Object(n.mdx)("inlineCode",{parentName:"li"},"customGlyph")," to render respective sections or override a variant's sections.")),Object(n.mdx)("h3",{id:"resizing"},"Resizing"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Use ",Object(n.mdx)("inlineCode",{parentName:"li"},"isGlyphHidden")," to show or hide the glyph. The ",Object(n.mdx)("inlineCode",{parentName:"li"},"onComponentMount")," logic to do this has been removed."),Object(n.mdx)("li",{parentName:"ul"},'Status view defaults to a "centered" alignment, based on available size and remaining space. The top will contain ',Object(n.mdx)("inlineCode",{parentName:"li"},"40%")," of space, while the remaining ",Object(n.mdx)("inlineCode",{parentName:"li"},"60%")," is delegated to the bottom. Use ",Object(n.mdx)("inlineCode",{parentName:"li"},"setAlignTop")," to remove this distribution and render the status view at the top of the container.")),Object(n.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(n.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(n.mdx)("h4",{id:"renamed"},"Renamed"),Object(n.mdx)("table",null,Object(n.mdx)("thead",{parentName:"table"},Object(n.mdx)("tr",{parentName:"thead"},Object(n.mdx)("th",i({parentName:"tr"},{align:null}),"Previous"),Object(n.mdx)("th",i({parentName:"tr"},{align:null}),"New"))),Object(n.mdx)("tbody",{parentName:"table"},Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-status-view-glyph-no-data"),Object(n.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-status-view-glyph-no-data-background")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-status-view-glyph-no-matching-results"),Object(n.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-status-view-glyph-no-matching-results-background")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-status-view-glyph-not-authorized"),Object(n.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-status-view-glyph-not-authorized-background")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-status-view-glyph-error"),Object(n.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-status-view-glyph-error-background")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-status-view-actions-flex-direction-small-width"),Object(n.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-status-view-actions-small-width-flex-direction")))))}l.isMDXComponent=!0},835:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(0)),r=d(a(1)),i=d(a(4)),o=d(a(836));function d(e){return e&&e.__esModule?e:{default:e}}var l=i.default.bind(o.default),s={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,a=e.name,r=e.url,i=e.version,o=n.default.createElement("a",{className:l("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(i)},n.default.createElement("span",{className:l("badge-name")},r?"package":"npm"),n.default.createElement("span",{className:l("badge-version")},"v".concat(i))),d=t?n.default.createElement("a",{className:l("badge"),href:t},n.default.createElement("span",{className:l("badge-name")},"github"),n.default.createElement("span",{className:l("badge-version")},"source")):void 0;return n.default.createElement("div",{className:l("badge-container")},o,d)};c.propTypes=s;var m=c;t.default=m},836:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}}}]);