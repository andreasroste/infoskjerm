(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"108a":function(e,t,n){"use strict";n("1a25")},"1a25":function(e,t,n){},"2c20":function(e,t,n){"use strict";n("e876")},"41a7":function(e,t,n){"use strict";n("71e2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"},c={class:"flex"},o={class:"flex-v"},i=Object(r["d"])("iframe",{src:"https://meny.cissky.net/maned.php",style:{height:"50vh","border-radius":"20px"},frameborder:"0"},null,-1),s=Object(r["d"])("div",{class:"flex-v"},[Object(r["d"])("iframe",{src:"https://www.youtube.com/embed/36YnV9STBqc",frameborder:"0"})],-1),u={class:"flex-v"};function d(e,t,n,d,l,f){var b=Object(r["j"])("Klokke"),p=Object(r["j"])("Ver"),j=Object(r["j"])("Nyheter");return Object(r["f"])(),Object(r["c"])("div",a,[Object(r["d"])("div",c,[Object(r["d"])("div",o,[Object(r["e"])(b),Object(r["e"])(p),i]),s,Object(r["d"])("div",u,[Object(r["e"])(j)])])])}var l={class:"klokke"},f={class:"date"};function b(e,t,n,a,c,o){return Object(r["f"])(),Object(r["c"])("div",l,[Object(r["d"])("h1",null,Object(r["k"])(c.klokka),1),Object(r["d"])("div",f,Object(r["k"])(c.dato),1)])}var p={data:function(){return{klokka:"",dato:"",maneder:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],dager:["mandag","tirsdag","onsdag","torsdag","fredag","lørdag","søndag"]}},mounted:function(){var e=this;e.klokka=(new Date).toTimeString().substr(0,5),e.dato=e.dager[(new Date).getDay()-1]+" "+(new Date).getDate()+". "+e.maneder[(new Date).getUTCMonth()]+" "+(new Date).getFullYear(),setInterval((function(){e.klokka=(new Date).toTimeString().substr(0,5)}),5e3)}},j=(n("108a"),n("6b0d")),O=n.n(j);const h=O()(p,[["render",b],["__scopeId","data-v-513a3bae"]]);var v=h,m=(n("a4d3"),n("e01a"),n("9911"),function(e){return Object(r["h"])("data-v-0e32e4b0"),e=e(),Object(r["g"])(),e}),k={class:"njus"},g=m((function(){return Object(r["d"])("h1",null,"Njus",-1)})),y=["href"];function w(e,t,n,a,c,o){return Object(r["f"])(),Object(r["c"])("div",k,[g,(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(c.nyheter,(function(e,t){return Object(r["f"])(),Object(r["c"])("div",{class:"nyhet",key:t},[Object(r["d"])("h4",null,Object(r["k"])(e.title),1),Object(r["d"])("p",null,Object(r["k"])(e.description),1),Object(r["d"])("a",{href:e.link,target:"_blank"},"Les mer ...",8,y)])})),128))])}n("fb6a"),n("d3b7"),n("ddb0");var _=n("3af3"),x={data:function(){return{nyheter:[]}},mounted:function(){var e=this;Object(_["a"])("https://www.nrk.no/toppsaker.rss").then((function(t){e.nyheter=t.entries.slice(0,7)})),setInterval((function(){Object(_["a"])("https://www.nrk.no/toppsaker.rss").then((function(t){e.nyheter=t.entries.slice(0,7)}))}),6e4)}};n("41a7");const D=O()(x,[["render",w],["__scopeId","data-v-0e32e4b0"]]);var S=D,P=function(e){return Object(r["h"])("data-v-977e80d0"),e=e(),Object(r["g"])(),e},T={class:"ver"},I=P((function(){return Object(r["d"])("h3",null,"Vær for Jørstadmoen",-1)})),M=["src"];function V(e,t,n,a,c,o){return Object(r["f"])(),Object(r["c"])("div",T,[I,(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(c.timefortime,(function(e,t){return Object(r["f"])(),Object(r["c"])("div",{class:"time",key:t},[Object(r["d"])("span",null,Object(r["k"])(e.klokkeslett),1),Object(r["d"])("img",{src:"weathericons/"+e.ikon+".png",alt:""},null,8,M),Object(r["d"])("span",null,Object(r["k"])(e.temperatur)+"°C",1),Object(r["d"])("span",null,Object(r["k"])(e.vindstyrke)+" m/s",1)])})),128))])}n("159b");var J=n("bc3a"),N=n.n(J),C={data:function(){return{timefortime:[]}},methods:{updateWeather:function(){var e=this;N.a.get("https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=61.1495212&lon=10.380725").then((function(t){var n=t.data.properties.timeseries.slice(1,5);n.forEach((function(t){e.timefortime.push({klokkeslett:new Date(t.time).toTimeString().substr(0,5),ikon:t.data.next_1_hours.summary.symbol_code,vindstyrke:t.data.instant.details.wind_speed,temperatur:t.data.instant.details.air_temperature})}))}))}},mounted:function(){this.updateWeather()}};n("fd93");const K=O()(C,[["render",V],["__scopeId","data-v-977e80d0"]]);var W=K,Y={components:{Klokke:v,Nyheter:S,Ver:W}};n("2c20");const q=O()(Y,[["render",d]]);var B=q;Object(r["b"])(B).mount("#app")},"71e2":function(e,t,n){},e876:function(e,t,n){},fd93:function(e,t,n){"use strict";n("fdc0")},fdc0:function(e,t,n){}});
//# sourceMappingURL=app.48b05609.js.map