(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(37)},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(13),c=n.n(r),i=(n(22),n(5)),s=n(6),l=n(8),u=n(7),f=n(9),h=(n(24),n(26),n(39)),m=n(40),d=n(41),p=n(11),b=(n(28),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"header"},"Hello")}}]),t}(o.Component)),O=(n(30),n(38),n(32),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){this.props.links;return null}}]),t}(o.Component));O.defaultProps={links:[{text:"About",url:"/about"},{text:"Contact",url:"/contact"}]};var v=O,j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"home"},a.a.createElement(v,null),a.a.createElement("div",{className:"home-line"}),a.a.createElement("h1",{className:"home-title"},"HOW F",a.a.createElement("span",{className:"home-rotate"},"A"),"R SOUTH"),a.a.createElement("h4",{className:"home-under-title"},"COMING SOON"))}}]),t}(o.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(h.a,{history:Object(p.a)()},a.a.createElement(m.a,null,a.a.createElement(d.a,{path:"/contact",component:b}),a.a.createElement(d.a,{path:"/",component:j})))}}]),t}(o.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(w,null))}}]),t}(o.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/how-far-south",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/how-far-south","/service-worker.js");k?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):E(e)})}}()}},[[16,2,1]]]);
//# sourceMappingURL=main.ee1d91a6.chunk.js.map