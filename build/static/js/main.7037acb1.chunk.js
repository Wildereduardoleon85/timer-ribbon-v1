(this["webpackJsonpreact-timer-ribbon-v1"]=this["webpackJsonpreact-timer-ribbon-v1"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(4),c=n.n(i),o=n(2),s=n(5),u=n(6),f=(n(11),n(1));var v=function(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),n=t[0],a=t[1],i=function(){var e=Object(s.a)(Object(o.a)().mark((function e(){var t,n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://worldtimeapi.org/api/timezone/America/Santiago");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=JSON.parse(localStorage.getItem("sessionTimeStamp")),v=function(){i().then((function(e){var t=e.unixtime,n=1e3*t+36e6;c?a(c-1e3*t):(localStorage.setItem("sessionTimeStamp",JSON.stringify(n)),a(n-1e3*t))}))};Object(r.useEffect)((function(){v()}),[]),Object(r.useEffect)((function(){var e=setInterval((function(){a(n-1e3)}),1e3);return n<0&&(localStorage.removeItem("sessionTimeStamp"),a(0),clearInterval(e)),function(){return clearInterval(e)}}),[n]);var l=function(){"visible"===document.visibilityState&&v()};Object(r.useLayoutEffect)((function(){return document.addEventListener("visibilitychange",l),function(){return document.removeEventListener("visibilitychange",l)}}),[]);var m=new Date(n),b=String(m.getMinutes()).padStart(2,"0"),p=String(m.getSeconds()).padStart(2,"0");return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("h1",{children:"Tienes 00:".concat(b,":").concat(p," para revisar tu cat\xe1logo personalizado")})})};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.7037acb1.chunk.js.map