(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)i=o[d],n[i]&&m.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"0c50":function(t,e,a){"use strict";var s=a("613f"),n=a.n(s);n.a},1:function(t,e){},1560:function(t,e,a){t.exports=a.p+"img/adult-blank-business-326576.aa3f5fd9.jpg"},1877:function(t,e,a){},"1f93":function(t,e,a){"use strict";var s=a("db68"),n=a.n(s);n.a},"2b56":function(t,e,a){"use strict";var s=a("31f8"),n=a.n(s);n.a},"31f8":function(t,e,a){},"49ef":function(t,e,a){"use strict";var s=a("a2a7"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar-component",{attrs:{"is-logged":t.isLogged,"is-master":t.isMaster}}),a("router-view"),a("footer-component")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Home")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"mainNavbar"}},[a("div",{staticClass:"navbar-nav d-flex"},[t.isLogged?a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):t._e(),t.isMaster?a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/users"}},[t._v("Usuarios")]):t._e(),a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/contact"}},[t._v("Contactos")]),t.isLogged?t._e():a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/login"}},[t._v("Ingresar")]),t.isLogged?a("a",{staticClass:"nav-item nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Salir")]):t._e()],1)])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#mainNavbar","aria-controls":"mainNavbar","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"navbarComponent",created:function(){},props:{isLogged:{type:Boolean,default:!1},isMaster:{type:Boolean,default:!1}},methods:{logout:function(){this.$parent.$parent.$emit("logout")}}},l=c,u=(a("c56b"),a("2877")),d=Object(u["a"])(l,i,o,!1,null,null,null);d.options.__file="NavbarComponent.vue";var m=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-light bg-dark pt-3 pb-2"},[a("p",{staticClass:"text-center risk-declaration"},[t._v("\n    Advertencia, operar en cualquier mercado financiero conlleva un riesgo. Las opciones binarias son productos derivados, altamente especulativos sobre los mercados de divisas, acciones, materias primas o índices. Por ello, las opciones binarias representan un riesgo real para los inversores. Las posibilidades de ganancias son muy elevadas, sin embargo éstas son proporcionales a los riesgos tomados. Cada persona que decida especular en opciones binarias debe ser consciente de los riesgos de pérdida que esto conlleva.\n  ")]),a("p",{staticClass:"text-center copywrite"},[a("a",{staticClass:" text-light",attrs:{href:"mailto:miguel.acosta1978@gmail.com"}},[t._v("miguel.acosta1978@gmail.com")]),t._v(" - Nos reservamos todos los derechos ©"+t._s((new Date).getFullYear()))])])},v=[],f={name:"footerComponent"},b=f,h=(a("7494"),Object(u["a"])(b,p,v,!1,null,null,null));h.options.__file="FooterComponent.vue";var g=h.exports,_=a("bc3a"),C=a.n(_),w={name:"App",data:function(){return{}},computed:{isMaster:function(){return this.$parent.isMaster},isLogged:function(){return this.$parent.isLogged}},components:{"navbar-component":m,"footer-component":g},created:function(){}},k=w,y=(a("034f"),Object(u["a"])(k,n,r,!1,null,null,null));y.options.__file="App.vue";var E=y.exports,S=a("8c4f"),x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"spash"},[a("div",{staticClass:"container text-light"},[a("div",{staticClass:"text-box"},[a("h1",{staticClass:"display-4"},[t._v("FX Scanner Tool")]),a("p",{staticClass:"lead"},[t._v("Escaner para el mercado Forex.")])])])])])}],L={name:"home"},A=L,$=(a("93ca"),Object(u["a"])(A,x,M,!1,null,"f0931c6c",null));$.options.__file="Home.vue";var N=$.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"card my-4 border-0"},[s("div",{staticClass:"card-header text-center bg-dark text-white"},[s("strong",[t._v("CONTACTOS")])]),s("div",{staticClass:"row my-2"},[s("div",{staticClass:"col-sm"},[s("div",{staticClass:"my-4 mx-4 align-middle"},[s("p",[t._v("Para solicitar informacion general de la aplicacion, te presento los siguientes datos de contacto.")]),s("p",[s("i",{staticClass:"fa fa-phone"}),t._v(" Telefono: "),s("a",{staticClass:"contact",attrs:{href:"tel:+56940680158",target:"_blank"}},[t._v("+56 9 40680158")])]),s("p",[s("i",{staticClass:"fa fa-whatsapp"}),t._v(" Whatsapp: "),s("a",{staticClass:"contact",attrs:{href:"https://wa.me/56940680158",target:"_blank"}},[t._v("+56 9 40680158")])]),s("p",[s("i",{staticClass:"fa fa-envelope"}),t._v(" Email: "),s("a",{staticClass:"contact",attrs:{href:"mailto:miguel.acosta1978@gmail.com",target:"_blank"}},[t._v("miguel.acosta1978@gmail.com")])]),s("p",[s("i",{staticClass:"fa fa-github"}),t._v(" Github: "),s("a",{staticClass:"contact",attrs:{href:"https://github.com/Mik3Dev/",target:"_blank"}},[t._v("Mik3Dev")])])])]),s("div",{staticClass:"col-sm"},[s("img",{staticClass:"img-fluid",attrs:{src:a("1560"),alt:"Contactame"}})])])])])}],B={name:"contact"},j=B,T=(a("1f93"),Object(u["a"])(j,O,P,!1,null,"c888389e",null));T.options.__file="Contact.vue";var U=T.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("button",{staticClass:"btn btn-success btn-block mt-5",on:{click:t.openNewUserForm}},[t._v("Agregar Nuevo Usuario")]),a("table",{staticClass:"table text-center mt-4 table-sm"},[a("tbody",t._l(t.users,function(e){return a("tr",{key:e._id},[a("td",{staticClass:"d-none d-sm-block"},[t._v(t._s(e.username))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(t._f("active")(e.isActive)))]),t._m(0,!0)])}))])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("button",{staticClass:"btn btn-danger btn-sm"},[a("i",{staticClass:"fa fa-trash"})])])}],Y=a("2ef0"),F=a.n(Y),J={name:"users",data:function(){return{users:[]}},created:function(){this.getAllUsers()},methods:{getAllUsers:function(){var t=this;this.users=[],this.token=JSON.parse(window.localStorage.getItem("binarySignalToken")),C.a.post("/users/all",{},{headers:{"Content-Type":"application/json","X-Auth":this.token.token}}).then(function(e){200===e.status&&(t.users=F.a.filter(e.data,function(t){return!t.isMaster}))}).catch(function(){})},openNewUserForm:function(){this.$router.push("/new_user")}},filters:{active:function(t){return t?"Si":"No"}}},z=J,H=(a("49ef"),Object(u["a"])(z,I,D,!1,null,null,null));H.options.__file="Users.vue";var W=H.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container pt-2"},[a("div",{staticClass:"card mt-5"},[a("div",{staticClass:"card-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}],staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[a("span",[t._v(t._s(t.messageError))]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(e){t.isError=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Correo Electrónico")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.email},attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Correo electrónico"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su email")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Clave")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.password},attrs:{type:"password",id:"password",placeholder:"Ingrese su clave de acceso"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar la clave de acceso")])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n          Ingresar\n        ")])])])])])},q=[],G={name:"login",data:function(){return{email:"",password:"",isError:!1,messageError:""}},methods:{login:function(){var t=this;C.a.post("/users/login",{email:this.email,password:this.password}).then(function(e){if(200===e.status)if(e.data.isActive){var a={token:e.headers["x-auth"]};window.localStorage.setItem("binarySignalToken",JSON.stringify(a)),t.$parent.$parent.$emit("login")}else t.isError=!0,t.messageError="Esta cuenta no esta activa, contactanos."}).catch(function(){t.password="",t.isError=!0,t.messageError="El email y password no coinciden."})}}},K=G,Q=(a("0c50"),Object(u["a"])(K,X,q,!1,null,"74fcf5c7",null));Q.options.__file="Login.vue";var R=Q.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-4"},[a("div",{staticClass:"card my-4 border-0"},[t._m(0),a("div",{staticClass:"my-2 mx-4"},[a("table",{staticClass:"table table-sm text-center"},[t._m(1),a("tbody",[a("tr",[a("td",t._l(t.buyAlertList,function(e){return a("div",{key:e.instrument},[a("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(e.instrument))])])})),a("td",t._l(t.sellAlertList,function(e){return a("div",{key:e.instrument},[a("span",{staticClass:"badge badge-danger"},[t._v(" "+t._s(e.instrument))])])})),a("td",t._l(t.buyActionList,function(e){return a("div",{key:e.instrument},[a("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(e.instrument))])])})),a("td",t._l(t.sellActionList,function(e){return a("div",{key:e.instrument},[a("span",{staticClass:"badge badge-danger"},[t._v(" "+t._s(e.instrument))])])}))])])])])]),a("div",{staticClass:"accordion",attrs:{id:"accordionInstrument"}},t._l(t.instruments,function(t){return a("instrument-component",{key:t.instrument,attrs:{instrument:t}})}))])},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header text-center bg-dark text-white"},[a("strong",[t._v("PANEL")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{attrs:{colspan:"2"}},[t._v("Lista de Alertas")]),a("th",{attrs:{colspan:"2"}},[t._v("Lista de Acciones")])])}],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card text-center border-0"},[a("div",{staticClass:"card-header bg-transparent border-0",attrs:{id:t.headingName}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-block collapsed",class:t.setAlert,attrs:{type:"button","data-toggle":"collapse","data-target":t.cardCollapsableAnchor,"aria-expanded":"false","aria-controls":t.cardCollapsableName}},[t._v("\n                    "+t._s(t.instrument.instrument)+": "),a("span",[t._v(t._s(t.close))])])])]),a("div",{staticClass:"collapse container mx-3 w-auto",attrs:{id:t.cardCollapsableName,"aria-labelledby":t.headingName,"data-parent":"#accordionInstrument"}},[a("div",{staticClass:"card mb-2 border-0"},[a("div",{staticClass:"card-header border",class:t.M15},[t._v("M15 - "+t._s(t.instrument.M15[0].time))]),a("div",{staticClass:"card-body pb-0 px-0"},[a("table",{staticClass:"table table-bordered table-sm mb-0"},[t._m(0),a("tbody",[a("tr",[a("td",[t._v(t._s(t.instrument.M15[0].indicatorStochLong.toPrecision(2)))]),a("td",[t._v(t._s(t.instrument.M15[0].indicatorStochShort.toPrecision(2)))])])])]),a("table",{staticClass:"table table-bordered table-sm mt-0"},[t._m(1),a("tbody",[a("tr",[a("td",[t._v(t._s(t.instrument.M15[0].indicatorLowerBand.toPrecision(5)))]),a("td",[t._v(t._s(t.instrument.M15[0].indicatorBolBand.toPrecision(5)))]),a("td",[t._v(t._s(t.instrument.M15[0].indicatorUpperBand.toPrecision(5)))])])])])])]),a("div",{staticClass:"card mb-2 border-0"},[a("div",{staticClass:"card-header border",class:t.M5},[t._v("M5 - "+t._s(t.instrument.M5[0].time))]),a("div",{staticClass:"card-body pb-0 px-0"},[a("table",{staticClass:"table table-bordered table-sm mb-0"},[t._m(2),a("tbody",[a("tr",[a("td",[t._v(t._s(t.instrument.M5[0].indicatorStochLong.toPrecision(2)))]),a("td",[t._v(t._s(t.instrument.M5[0].indicatorStochShort.toPrecision(2)))])])])]),a("table",{staticClass:"table table-bordered table-sm mt-0"},[t._m(3),a("tbody",[a("tr",[a("td",[t._v(t._s(t.instrument.M5[0].indicatorLowerBand.toPrecision(5)))]),a("td",[t._v(t._s(t.instrument.M5[0].indicatorBolBand.toPrecision(5)))]),a("td",[t._v(t._s(t.instrument.M5[0].indicatorUpperBand.toPrecision(5)))])])])])])]),a("div",{staticClass:"card border-0"},[a("div",{staticClass:"card-header border",class:t.S30},[t._v("S30 - "+t._s(t.instrument.S30[0].time))]),a("div",{staticClass:"card-body pb-0 px-0"},[a("table",{staticClass:"table table-bordered table-sm"},[t._m(4),a("tbody",[a("tr",[a("td",[t._v(t._s(t.instrument.S30[0].indicatorWma.toPrecision(4)))]),a("td",[t._v(t._s(t.instrument.S30[0].indicatorEma.toPrecision(4)))]),a("td",[t._v(t._s(Number.parseFloat(t.instrument.S30[0].indicatorAwesomeOsc).toPrecision(4)))])])])])])])])])])},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Stoch(14)")]),a("th",[t._v("Stoch(6)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{colspan:"3"}},[t._v("Bollinger(34)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Stoch(14)")]),a("th",[t._v("Stoch(6)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{colspan:"3"}},[t._v("Bollinger(34)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Wma(7)")]),a("th",[t._v("Ema(18)")]),a("th",[t._v("AO(4, 35)")])])])}],at={name:"InstrumentComponent",props:{instrument:Object},data:function(){return{cardCollapsableName:"cardCollasable"+this.instrument.instrument,cardCollapsableAnchor:"#cardCollasable"+this.instrument.instrument,headingName:"heading-"+this.instrument.instrument}},computed:{close:function(){return this.instrument.S30[0].close},open:function(){return this.instrument.S30[0].open},M15:function(){return{"bg-danger text-white":"SELL"==this.instrument.M15[0].signalA,"bg-success text-white":"BUY"==this.instrument.M15[0].signalA}},M5:function(){return{"bg-danger text-white":"SELL"==this.instrument.M5[0].signalA,"bg-success text-white":"BUY"==this.instrument.M5[0].signalA}},S30:function(){return{"bg-danger text-white":"SELL"==this.instrument.S30[0].signalB,"bg-success text-white":"BUY"==this.instrument.S30[0].signalB}},setAlert:function(){return{"btn-danger":"SELL"==this.instrument.M15[0].signalA&&"SELL"==this.instrument.M5[0].signalA,"btn-success":"BUY"==this.instrument.M15[0].signalA&&"BUY"==this.instrument.M5[0].signalA}}}},st=at,nt=(a("6adb"),Object(u["a"])(st,tt,et,!1,null,null,null));nt.options.__file="InstrumentComponent.vue";var rt=nt.exports,it={name:"dashboard",components:{"instrument-component":rt},data:function(){return{instruments:[]}},created:function(){},computed:{sellAlertList:function(){return F.a.filter(this.instruments,function(t){return"SELL"==t.M5[0].signalA&&"SELL"==t.M15[0].signalA})},buyAlertList:function(){return F.a.filter(this.instruments,function(t){return"BUY"==t.M5[0].signalA&&"BUY"==t.M15[0].signalA})},sellActionList:function(){return F.a.filter(this.instruments,function(t){return"SELL"==t.M5[0].signalA&&"SELL"==t.M15[0].signalA&&"SELL"==t.S30[0].signalB})},buyActionList:function(){return F.a.filter(this.instruments,function(t){return"BUY"==t.M5[0].signalA&&"BUY"==t.M15[0].signalA&&"BUY"==t.S30[0].signalB})}},methods:{},sockets:{connect:function(){this.connected=!0},disconnect:function(){this.connected=!1},fxData:function(t){var e=F.a.groupBy(t,function(t){return t.instrument});this.instruments=F.a.map(e,function(t){return{instrument:t[0].instrument,M15:F.a.filter(t,function(t){if("M15"==t.timeframe)return t}),M5:F.a.filter(t,function(t){if("M5"==t.timeframe)return t}),S30:F.a.filter(t,function(t){if("S30"==t.timeframe)return t})}})}}},ot=it,ct=(a("2b56"),Object(u["a"])(ot,V,Z,!1,null,null,null));ct.options.__file="Dashboard.vue";var lt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.isError?a("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[t._l(t.messageError,function(e){return a("ul",{key:e},[a("li",[t._v(t._s(e))])])}),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:function(e){t.isError=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2):t._e(),a("form",{on:{submit:function(e){return e.preventDefault(),t.registerNewUser(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Nombre de Usuario")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.username},attrs:{type:"text",id:"username","aria-describedby":"usernameHelp",placeholder:"Nombre de usuario"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su nombre de usuario")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Correo Electrónico")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.email},attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Correo electrónico"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su email")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Clave")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.password},attrs:{type:"password",id:"password",placeholder:"Ingrese contraseña"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar la clave de acceso")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"repassword"}},[t._v("Confirmar contraseña")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.repassword,expression:"repassword"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.repassword},attrs:{type:"password",id:"repassword",placeholder:"Ingrese contraseña para confirmacion"},domProps:{value:t.repassword},on:{input:function(e){e.target.composing||(t.repassword=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar la clave de acceso")])]),a("button",{staticClass:"btn btn-success btn-block",attrs:{type:"submit"}},[t._v("Crear")]),a("button",{staticClass:"btn btn-danger btn-block",attrs:{type:"button"},on:{click:t.closeWindow}},[t._v("Cancelar")])])])])])},dt=[],mt={name:"new_user",data:function(){return{username:"",email:"",password:"",repassword:"",isError:!1,messageError:[]}},methods:{checkFields:function(){this.isError=!1,this.messageError=[],""==this.username&&(this.isError=!0,this.messageError.push("El campo nombre de usuario no debe esta en blanco")),""==this.email&&(this.isError=!0,this.messageError.push("El campo email no debe estar en blanco")),""==this.password&&(this.isError=!0,this.messageError.push("El campo contraseña no debe estar en blanco")),this.password!=this.repassword&&(this.isError=!0,this.messageError.push("Las contraseñas no coinciden"))},registerNewUser:function(){var t=this;if(this.checkFields(),!this.isError){var e=JSON.parse(window.localStorage.getItem("binarySignalToken"));C.a.post("/users/register",{username:this.username,email:this.email,password:this.password},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){200==e.status&&(alert("Usuario creado exitosamente"),t.$router.push("/users"))}).catch(function(e){t.isError=!0,t.messageError.push("No es posible crear un nuevo usuario, revise sus datos"),console.log(e)})}},closeWindow:function(){this.$router.push("/users")}}},pt=mt,vt=(a("cb28"),Object(u["a"])(pt,ut,dt,!1,null,null,null));vt.options.__file="AddUser.vue";var ft=vt.exports;s["a"].use(S["a"]);var bt=new S["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:N},{path:"/contact",name:"contact",component:U},{path:"/users",name:"users",component:W,beforeEnter:ht},{path:"/login",name:"login",component:R},{path:"/dashboard",name:"dashboard",component:lt,beforeEnter:ht},{path:"/new_user",name:"new_user",component:ft,beforeEnter:ht}]}),ht=function(t,e,a){var s=JSON.parse(window.localStorage.getItem("binarySignalToken"));s?C.a.post("/users/me",{},{headers:{"Content-Type":"application/json","X-Auth":s.token}}).then(function(){a()}).catch(function(t){console.log(t),a("login")}):a("/login")},gt=a("8055"),_t=a.n(gt),Ct=a("0a12"),wt=a.n(Ct);a("4989"),a("ab8b");a.d(e,"SocketInstance",function(){return kt});var kt=_t()("https://morning-brook-19991.herokuapp.com/");s["a"].use(wt.a,kt),s["a"].config.productionTip=!1,new s["a"]({router:bt,data:function(){return{isMaster:!1,isLogged:!1,token:null}},render:function(t){return t(E)},created:function(){var t=this;C.a.get("https://frozen-dawn-57732.herokuapp.com/").then().catch(),C.a.get("https://frozen-dawn-57733.herokuapp.com/").then().catch(),C.a.get("https://frozen-dawn-57734.herokuapp.com/").then().catch(),setInterval(function(){C.a.get("https://frozen-dawn-57732.herokuapp.com/").then().catch(),C.a.get("https://frozen-dawn-57733.herokuapp.com/").then().catch(),C.a.get("https://frozen-dawn-57734.herokuapp.com/").then().catch()},6e5),this.token=JSON.parse(window.localStorage.getItem("binarySignalToken")),this.token&&this.checkToken(this.token),this.$on("login",function(){t.token=JSON.parse(window.localStorage.getItem("binarySignalToken")),t.checkToken(t.token),t.$router.push("/dashboard")}),this.$on("isMaster",function(){t.isMaster=!0}),this.$on("logout",function(){window.localStorage.removeItem("binarySignalToken"),t.token=null,t.checkToken(t.token),t.$router.push("/")})},methods:{checkToken:function(t){var e=this;t?C.a.post("/users/me",{},{headers:{"Content-Type":"application/json","X-Auth":t.token}}).then(function(t){e.isMaster=t.data.user.isMaster,e.isLogged=!0}).catch(function(){e.isMaster=!1,e.isLogged=!1,window.localStorage.removeItem("binarySignalToken")}):(this.isLogged=!1,this.isMaster=!1)}}}).$mount("#app")},"613f":function(t,e,a){},"64a9":function(t,e,a){},"6adb":function(t,e,a){"use strict";var s=a("b9fd"),n=a.n(s);n.a},7494:function(t,e,a){"use strict";var s=a("ec50"),n=a.n(s);n.a},"844c":function(t,e,a){},"93ca":function(t,e,a){"use strict";var s=a("1877"),n=a.n(s);n.a},"96c1":function(t,e,a){},a2a7:function(t,e,a){},b9fd:function(t,e,a){},c56b:function(t,e,a){"use strict";var s=a("844c"),n=a.n(s);n.a},cb28:function(t,e,a){"use strict";var s=a("96c1"),n=a.n(s);n.a},db68:function(t,e,a){},ec50:function(t,e,a){}});
//# sourceMappingURL=app.fbb1a030.js.map