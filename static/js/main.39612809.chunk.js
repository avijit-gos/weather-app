(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(1),n=c(4),s=c.n(n),i=(c(10),c(2)),r=c(5),d=c(0);var l=function(){var e=Object(t.useState)(""),a=Object(i.a)(e,2),c=a[0],n=a[1],s=Object(t.useState)(""),l=Object(i.a)(s,2),o=l[0],j=l[1],m=Object(t.useState)({}),u=Object(i.a)(m,2),h=u[0],b=u[1],p=Object(t.useRef)(null);return Object(t.useEffect)((function(){p.current.focus()}),[]),Object(d.jsx)("div",{className:"main warm",children:Object(d.jsxs)("div",{className:"conatiner",children:[Object(d.jsx)("p",{className:"header",children:"Weather forecast"}),Object(d.jsx)("div",{className:"input-box",children:Object(d.jsx)("input",{type:"text",placeholder:"search your location...",className:"input-field",value:c,onChange:function(e){n(e.target.value)},ref:p,onKeyPress:function(e){"Enter"===e.key&&fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&units=metric&APPID=f81a225131b81dba99d6c46cc0023d66")).then((function(e){return e.json()})).then((function(e){b(e),n(""),console.log(e)})).catch((function(e){j("Invalid Location")}))}})}),"undefined"!==typeof h.main?Object(d.jsxs)("div",{className:"weather-info",children:[Object(d.jsx)("div",{className:"location-info",children:Object(d.jsxs)("p",{className:"city",children:[Object(d.jsx)(r.a,{className:"location-icon"}),h.name,", ",Object(d.jsx)("span",{className:"country",children:h.sys.country})]})}),Object(d.jsx)("div",{className:"date-info",children:Object(d.jsx)("p",{className:"date",children:function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],c=e.getDate(),t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(a,", ").concat(c," ").concat(t," ").concat(n)}(new Date)})}),Object(d.jsx)("div",{className:"temp-info",children:Object(d.jsxs)("p",{className:"temp-info",children:[Math.round(h.main.temp)," ",Object(d.jsx)("span",{className:"unit",children:"\xb0c"})]})}),Object(d.jsx)("div",{className:"cloud",children:h.weather[0].main}),Object(d.jsx)("div",{className:"Clear"===h.weather[0].main?"weather-icon sun-icon":"weather-icon cloud-icon"}),Object(d.jsxs)("div",{className:"wind-info",children:[Object(d.jsxs)("span",{className:"wind-speed",children:["Wind-Speed: ",h.wind.speed]})," || ",Object(d.jsxs)("span",{className:"wind-deg",children:["Wind-Deg: ",h.wind.deg]})]}),Object(d.jsxs)("div",{className:"max-min-temp",children:[Object(d.jsxs)("span",{className:"max-temp",children:["Max-temp: ",Math.round(h.main.temp_max),"\xb0c"]}),",  ",Object(d.jsxs)("span",{className:"min-temp",children:["Min-temp: ",Math.round(h.main.temp_min),"\xb0c"]})]})]}):null,h.length<=0?Object(d.jsx)("p",{children:o}):null]})})};s.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.39612809.chunk.js.map