(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,n,t){e.exports=t(27)},24:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(2),c=t.n(a),i=t(5),s=t(8),l=(t(22),t(12)),u=(t(24),t(3)),d=t(4),h=t(7),f=t(6),b=function(e){var n=e.name,t=e.email,o=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},p=function(e){var n=e.robots;return console.log("CardList"),r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(b,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},g=function(e){e.searchfield;var n=e.searchChange;return console.log("SearchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},E=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},m=function(e){Object(h.a)(t,e);var n=Object(f.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"))}}]),t}(o.Component),v=(t(25),function(e){Object(h.a)(t,e);var n=Object(f.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(m,null),r.a.createElement(g,{searchChange:t}),r.a.createElement(E,null,r.a.createElement(p,{robots:c})))}}]),t}(o.Component)),O=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(n){return n.json().then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}))}))}}}))(v),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=t(1),y={searchField:""},S={isPending:!1,robots:[],error:""},C=(t(26),Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object(j.a)(Object(j.a)({},e),{},{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object(j.a)(Object(j.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(j.a)(Object(j.a)({},e),{},{error:n.payload,isPending:!1});default:return e}}})),_=Object(s.c)(C,Object(s.a)(l.a));c.a.render(r.a.createElement(i.a,{store:_},r.a.createElement(O,{store:_})),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends-pwa",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends-pwa","/service-worker.js");w?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):R(e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.a21a2661.chunk.js.map