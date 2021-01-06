(this["webpackJsonpcountry-app"]=this["webpackJsonpcountry-app"]||[]).push([[0],{39:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n(15),i=n.n(r),o=n(13),s=(n(39),n(3)),u=n(8),j=n(20),l=n.n(j),d=function(t){return function(e){e({type:"ADD_ACTIVE_CATEGORY",payload:t}),l.a.get("https://restcountries.eu/rest/v2/region/".concat(t)).then((function(t){var n=t.data;e(function(t){return{type:"ADD_COUNTRY",payload:t}}(n))}))}},O=function(t){var e=Object(u.b)(),n=Object(c.createRef)();return Object(a.jsx)("div",{className:"search",children:Object(a.jsx)("input",{className:"search__input",type:"search",placeholder:"Enter the country name",ref:n,onChange:function(){var t=n.current.value;e(function(t){return{type:"ADD_TEXT_SEARCH",payload:t}}(t))},value:t.textSearch})})},p=function(t){var e=Object(u.b)();return Object(a.jsx)("div",{className:"regionList",children:t.regionList.map((function(n){return Object(a.jsx)("div",{className:n.region===t.activeCategory?"regionList__item__active":"regionList__item",onClick:function(){return t=n.region,void e(d(t));var t},children:n.region},n.id)}))})},b=function(t){return Object(a.jsx)("div",{className:"country",children:t.country.map((function(t){return Object(a.jsx)(o.b,{to:"/info/".concat(t.alpha3Code),children:Object(a.jsxs)("div",{className:"country__item",children:[Object(a.jsx)("img",{src:t.flag,alt:t.name}),Object(a.jsxs)("h4",{children:["Name: ",t.name]}),Object(a.jsxs)("h4",{children:["Capital: ",t.capital]}),Object(a.jsxs)("h4",{children:["Population: ",t.population," Ppl"]})]},t.name)})}))})},f=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return{textSearch:t.data.textSearch,regionList:t.data.regionList,country:t.data.country.filter((function(e){return e.name.toLowerCase().includes(t.data.textSearch.toLowerCase())})),activeCategory:t.data.activeCategory}}));return Object(c.useEffect)((function(){t(d("Africa"))}),[t]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{textSearch:e.textSearch}),Object(a.jsx)(p,{regionList:e.regionList,activeCategory:e.activeCategory}),Object(a.jsx)(b,{country:e.country})]})},h=function(){var t=Object(s.e)().codeCountry,e=Object(u.b)(),n=Object(u.c)((function(t){return{name:t.data.infoCountry.name,flag:t.data.infoCountry.flag,capital:t.data.infoCountry.capital,region:t.data.infoCountry.region,population:t.data.infoCountry.population,area:t.data.infoCountry.area}}));return Object(c.useEffect)((function(){e(function(t){return function(e){l.a.get("https://restcountries.eu/rest/v2/alpha/".concat(t)).then((function(t){var n=t.data;e(function(t){return{type:"ADD_INFO_COUNTRY",payload:t}}(n))}))}}(t))}),[e,t]),Object(a.jsxs)("div",{className:"infoCountry",children:[Object(a.jsx)("img",{src:n.flag,alt:n.name}),Object(a.jsxs)("div",{className:"infoCountry__text",children:[Object(a.jsxs)("p",{children:["Name: ",n.name]}),Object(a.jsxs)("p",{children:["Capital: ",n.capital," "]}),Object(a.jsxs)("p",{children:["Region: ",n.region," "]}),Object(a.jsxs)("p",{children:["Population: ",n.population," Ppl"]}),Object(a.jsxs)("p",{children:["Area: ",n.area," k/m ",Object(a.jsx)("sup",{children:"2"})]})]})]})};var g=function(){return Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)(s.a,{path:"/",exact:!0,component:f}),Object(a.jsx)(s.a,{path:"/info/:codeCountry",component:h})]})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},x=n(11),C=n(10),v={country:[],infoCountry:[],regionList:[{id:1,region:"Africa"},{id:2,region:"Americas"},{id:3,region:"Asia"},{id:4,region:"Europe"},{id:5,region:"Oceania"}],textSearch:"",activeCategory:"Africa"},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TEXT_SEARCH":return Object(C.a)(Object(C.a)({},t),{},{textSearch:e.payload});case"ADD_COUNTRY":return Object(C.a)(Object(C.a)({},t),{},{textSearch:"",country:e.payload,infoCountry:[]});case"ADD_ACTIVE_CATEGORY":return Object(C.a)(Object(C.a)({},t),{},{activeCategory:e.payload});case"ADD_INFO_COUNTRY":return Object(C.a)(Object(C.a)({},t),{},{infoCountry:e.payload});default:return t}},_=n(33),A=Object(x.c)({data:m}),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,D=Object(x.e)(A,N(Object(x.a)(_.a)));i.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(u.a,{store:D,children:Object(a.jsx)(g,{})})}),document.getElementById("root")),y()}},[[63,1,2]]]);
//# sourceMappingURL=main.1e572d7f.chunk.js.map