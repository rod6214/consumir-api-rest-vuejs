(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},"1c9f":function(t,e,a){"use strict";var r=a("ad1a"),s=a.n(r);s.a},"1f92":function(t){t.exports=JSON.parse('{"environments":{"prod":{"api":{"uri":"https://jsonplaceholder.typicode.com"}},"dev":{"api":{"uri":"http://localhost:5001/api"}}}}')},2933:function(t,e,a){"use strict";var r=a("8617"),s=a.n(r);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=a("5f5b"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("Navbar")],1),a("main",{attrs:{role:"main"}},[a("HomePage")],1)])},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("section",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"col-md-9"},[a("Listado",{attrs:{users:t.users,huboerror:t.huboerror,cargando:t.cargando}})],1)])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"text-left"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row contacts"},[a("div",{staticClass:"col-md-12"},[a("h1",[t._v("💼 Contacts")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header text-left"},[a("h5",[t._v("Actions")])]),a("div",{staticClass:"card-body text-left"},[a("p",{staticClass:"card-text"},[a("a",{staticClass:"btn btn-light text-info",attrs:{href:"#"}},[t._v("➕ New Contact")])])])])])}],l=(a("d3b7"),a("bc3a")),u=a.n(l),d=a("1f92"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.huboerror?a("section",[t._m(0)]):a("section",[t.cargando?a("div",{staticClass:"spinner"},[t._v(" Loading... ")]):t._e(),a("table",{staticClass:"table striped text-left mi-table"},[t._m(1),a("tbody",t._l(t.users,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.name))]),a("td",[t._v("@"+t._s(e.username))]),a("td",[a("a",{attrs:{href:"mailto:"+e.email}},[t._v(t._s(e.email))])]),a("td",[t._v(t._s(e.address.city))]),t._m(2,!0)])})),0)]),a("h5",{staticClass:"text-left total"},[t._v("Total contacts found: "+t._s(t.users.length)+" ")])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("p",[t._v("Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Username")]),a("th",{attrs:{scope:"col"}},[t._v("Email")]),a("th",{attrs:{scope:"col"}},[t._v("City")]),a("th",{attrs:{scope:"col"}},[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("a",{staticClass:"btn btn-light text-info",attrs:{href:"#",title:"View profile"}},[t._v("🔍")])])}],p={name:"listado",props:["users","huboerror","cargando"]},h=p,m=(a("1c9f"),a("2877")),b=Object(m["a"])(h,f,v,!1,null,"4a4c8576",null),_=b.exports,g={name:"homepage",components:{Listado:_},data:function(){return{users:[],urlApi:"".concat(d.environments.prod.api.uri,"/users"),huboerror:!1,cargando:!0}},mounted:function(){this.getAll()},methods:{getAll:function(){var t=this;u.a.get(this.urlApi).then((function(e){t.users=e.data})).catch((function(e){console.log(e),t.huboerror=!0})).finally((function(){return t.cargando=!1}))}}},C=g,x=(a("2933"),Object(m["a"])(C,i,c,!1,null,"4ce6450a",null)),y=x.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"collapse bg-dark",attrs:{id:"navbarHeader"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-8 col-md-7 py-4"},[a("h4",{staticClass:"text-white"},[t._v("About")]),a("p",{staticClass:"text-muted"},[t._v("Add some information about of site. Then, link them off to some social networking sites or contact information.")])]),a("div",{staticClass:"col-sm-4 offset-md-1 py-4"},[a("h4",{staticClass:"text-white"},[t._v("Contact")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{staticClass:"text-white",attrs:{href:"#"}},[t._v("Follow on Twitter")])]),a("li",[a("a",{staticClass:"text-white",attrs:{href:"#"}},[t._v("Like on Facebook")])]),a("li",[a("a",{staticClass:"text-white",attrs:{href:"#"}},[t._v("Email me")])])])])])])]),a("div",{staticClass:"navbar navbar-dark bg-dark shadow-sm"},[a("div",{staticClass:"container d-flex justify-content-between"},[a("a",{staticClass:"navbar-brand d-flex align-items-center",attrs:{href:"#"}},[a("strong",[t._v("🛠️ Vue.js + Axios")])]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarHeader","aria-controls":"navbarHeader","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])])])])}],O={},E=Object(m["a"])(O,w,j,!1,null,null,null),k=E.exports,$={name:"App",components:{HomePage:y,Navbar:k}},A=$,P=(a("034f"),Object(m["a"])(A,n,o,!1,null,null,null)),T=P.exports;a("1157"),a("ab8b"),a("2dd8");r["default"].use(s["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(T)}}).$mount("#app")},"85ec":function(t,e,a){},8617:function(t,e,a){},ad1a:function(t,e,a){}});
//# sourceMappingURL=app.723c3351.js.map