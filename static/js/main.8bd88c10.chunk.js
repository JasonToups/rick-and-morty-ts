(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/logo-RickAndMorty.96a9d4f0.png"},function(e,a,t){e.exports=t.p+"static/media/Characteropedia.a44cbea7.png"},function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),o=(t(11),t(12),t(1)),s=(t(13),t(14),t(15),t(4)),i=t.n(s),m=t(5),u=t.n(m),d=(t(16),t(17),function(e){var a=e.imgSrc,t=e.imgAlt,n=e.name,r=e.status,l=e.species,o=e.location,s=e.episodeFirst;e.episodes;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image--wrapper"},c.a.createElement("img",{className:"card-image",src:a,alt:t})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h2",null,n),c.a.createElement("h3",null,r," - ",l),c.a.createElement("p",null,"Last known location:"),c.a.createElement("p",null,o),c.a.createElement("p",null,"First seen in:"),c.a.createElement("p",null,"episode ",s)))}),p=function(e){var a,t=e.results,n=t.info.count,r=t.info;t.results;return console.log("rendering cards"),a=r,console.log(a.count),c.a.createElement("section",{className:"rendered-cards"},c.a.createElement("div",{className:"rendered-cards--header"},c.a.createElement("h1",null,"Number of Results: ",n)),c.a.createElement("div",{className:"rendered-cards--results"},c.a.createElement(d,{imgSrc:"https://rickandmortyapi.com/api/character/avatar/1.jpeg",imgAlt:"Rick Sanchez",name:"Rick Sanchez",status:"Alive",species:"Human",gender:"Male",location:"Earth (Replacement Dimension)",episode:"1"}),c.a.createElement(d,null),c.a.createElement(d,null),c.a.createElement(d,null)))},h=function(){var e=c.a.useState,a=c.a.useEffect,t=e(null),n=Object(o.a)(t,2),r=n[0],l=n[1],s=e(null),m=Object(o.a)(s,2);m[0],m[1];a((function(){d()}),[]);var d=function(){fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){console.log("Success:",e),l(e)})).catch((function(e){console.error("Error:",e)}))};return c.a.createElement("section",null,c.a.createElement("section",{className:"home-header"},c.a.createElement("div",{className:"logos"},c.a.createElement("img",{className:"home-header--image",src:i.a,alt:"rick and morty logo"}),c.a.createElement("img",{className:"home-header--image",src:u.a,alt:"characteropedia"})),c.a.createElement("div",{className:"search-form"},c.a.createElement("form",null,c.a.createElement("input",{className:"search-field",type:"text",placeholder:"Search for a character"}),c.a.createElement("input",{className:"submit-button",type:"submit",value:"submit"})))),r?c.a.createElement(p,{results:r}):c.a.createElement("h1",null,"Loading Results"))};var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.8bd88c10.chunk.js.map