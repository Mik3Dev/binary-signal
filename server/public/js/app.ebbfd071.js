(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)n=o[u],i[n]&&m.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},"04d4":function(t,e,a){"use strict";var s=a("5dae"),i=a.n(s);i.a},1:function(t,e){},1560:function(t,e,a){t.exports=a.p+"img/adult-blank-business-326576.aa3f5fd9.jpg"},"20ce":function(t,e,a){},"2b56":function(t,e,a){"use strict";var s=a("31f8"),i=a.n(s);i.a},"31f8":function(t,e,a){},"49ef":function(t,e,a){"use strict";var s=a("a2a7"),i=a.n(s);i.a},5122:function(t,e,a){"use strict";var s=a("20ce"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar-component"),a("router-view"),a("footer-component")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Home")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"mainNavbar"}},[a("div",{staticClass:"navbar-nav d-flex"},[t.isLogged?a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):t._e(),t.isMaster?a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/users"}},[t._v("Usuarios")]):t._e(),a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/contact"}},[t._v("Contactos")]),t.isLogged?t._e():a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/login"}},[t._v("Ingresar")]),t.isLogged?a("a",{staticClass:"nav-item nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Salir")]):t._e()],1)])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#mainNavbar","aria-controls":"mainNavbar","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("2f62"),c={name:"navbarComponent",computed:Object(l["b"])({isMaster:function(t){return t.isMaster},isLogged:function(t){return t.isLogged}}),methods:{logout:function(){this.$store.commit("LOGOUT"),this.isLogged||this.$router.push("/")}}},d=c,u=(a("c56b"),a("2877")),m=Object(u["a"])(d,n,o,!1,null,null,null);m.options.__file="NavbarComponent.vue";var p=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-light bg-dark pt-3 pb-2"},[a("p",{staticClass:"text-center risk-declaration"},[t._v("\n    Advertencia, operar en cualquier mercado financiero conlleva un riesgo. Las opciones binarias son productos derivados, altamente especulativos sobre los mercados de divisas, acciones, materias primas o índices. Por ello, las opciones binarias representan un riesgo real para los inversores. Las posibilidades de ganancias son muy elevadas, sin embargo éstas son proporcionales a los riesgos tomados. Cada persona que decida especular en opciones binarias debe ser consciente de los riesgos de pérdida que esto conlleva.\n  ")]),a("p",{staticClass:"text-center copywrite"},[a("a",{staticClass:" text-light",attrs:{href:"mailto:miguel.acosta1978@gmail.com"}},[t._v("miguel.acosta1978@gmail.com")]),t._v(" - Nos reservamos todos los derechos ©"+t._s((new Date).getFullYear()))])])},f=[],h={name:"footerComponent"},b=h,g=(a("7494"),Object(u["a"])(b,v,f,!1,null,null,null));g.options.__file="FooterComponent.vue";var _=g.exports,C={name:"App",data:function(){return{}},computed:Object(l["b"])({isMaster:function(t){return t.isMaster},isLogged:function(t){return t.isLogged},username:function(t){return t.username}}),components:{"navbar-component":p,"footer-component":_},created:function(){}},y=C,w=(a("034f"),Object(u["a"])(y,i,r,!1,null,null,null));w.options.__file="App.vue";var A=w.exports,E=a("8055"),k=a.n(E),x=a("0a12"),N=a.n(x),S=a("8c4f"),L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"spash"},[a("div",{staticClass:"container text-light"},[a("div",{staticClass:"text-box"},[a("h1",{staticClass:"display-4"},[t._v("FX Scanner Tool")]),a("p",{staticClass:"lead"},[t._v("Escaner para el mercado Forex.")])])])])])}],T={name:"home"},j=T,$=(a("04d4"),Object(u["a"])(j,L,O,!1,null,"4faaaf52",null));$.options.__file="Home.vue";var F=$.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"card my-4 border-0"},[s("div",{staticClass:"card-header text-center bg-dark text-white"},[s("strong",[t._v("CONTACTOS")])]),s("div",{staticClass:"row my-2"},[s("div",{staticClass:"col-sm"},[s("div",{staticClass:"my-4 mx-4 align-middle"},[s("p",[t._v("Para solicitar informacion general de la aplicacion, te presento los siguientes datos de contacto.")]),s("p",[s("i",{staticClass:"fa fa-phone"}),t._v(" Telefono: "),s("a",{staticClass:"contact",attrs:{href:"tel:+56940680158",target:"_blank"}},[t._v("+56 9 40680158")])]),s("p",[s("i",{staticClass:"fa fa-whatsapp"}),t._v(" Whatsapp: "),s("a",{staticClass:"contact",attrs:{href:"https://wa.me/56940680158",target:"_blank"}},[t._v("+56 9 40680158")])]),s("p",[s("i",{staticClass:"fa fa-envelope"}),t._v(" Email: "),s("a",{staticClass:"contact",attrs:{href:"mailto:miguel.acosta1978@gmail.com",target:"_blank"}},[t._v("miguel.acosta1978@gmail.com")])])])]),s("div",{staticClass:"col-sm"},[s("img",{staticClass:"img-fluid",attrs:{src:a("1560"),alt:"Contactame"}})])])])])}],M={name:"contact"},I=M,P=(a("9297"),Object(u["a"])(I,U,D,!1,null,"62d0dd5e",null));P.options.__file="Contact.vue";var B=P.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("button",{staticClass:"btn btn-success btn-block mt-5",on:{click:t.openNewUserForm}},[t._v("Agregar Nuevo Usuario")]),a("table",{staticClass:"table text-center mt-4 table-sm"},[t._m(0),a("tbody",t._l(t.users,function(e){return a("user-component",{key:e._id,attrs:{user:e},on:{updateAcitveField:t.updateAcitveField,deleteField:t.deleteField}})}))]),a("div",{staticClass:"modal fade",attrs:{id:"dialogModal",tabindex:"-1",role:"dialog","aria-labelledby":"dialogModalTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("p",[t._v(t._s(t.msg))])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.cancelAction}},[t._v("Cancelar")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.doAction}},[t._v("Continuar")])])])])])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"d-none d-sm-block"},[t._v("Usuario")]),a("th",[t._v("Correo")]),a("th",[t._v("Activo")]),a("th",{staticClass:"d-none d-sm-block"},[t._v("Acción")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"dialogModalTitle"}},[t._v("Atención")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],X=a("bc3a"),Y=a.n(X),R=a("2ef0"),W=a.n(R),G=a("1157"),q=a.n(G),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.user.username))]),a("td",[t._v(t._s(t.user.email))]),a("td",[a("button",{staticClass:"btn btn-sm",class:{"btn-success":t.user.isActive,"btn-danger":!t.user.isActive},on:{click:t.updateActiveField}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.user.isActive,expression:"user.isActive"}],staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}}),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.user.isActive,expression:"!user.isActive"}],staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("td",{staticClass:"d-none d-sm-block"},[a("button",{staticClass:"btn btn-danger btn-sm",on:{click:t.deleteField}},[a("i",{staticClass:"fa fa-trash"})]),a("span",{staticClass:"mx-1"}),a("button",{staticClass:"btn btn-warning btn-sm",on:{click:t.editUser}},[a("i",{staticClass:"fa fa-pencil"})])])])},K=[],Q={name:"userComponent",props:{user:Object},data:function(){return{}},methods:{updateActiveField:function(){this.$emit("updateAcitveField",this.user,"Desea cambiar el estado de el usuario ".concat(this.user.username))},deleteField:function(){this.$emit("deleteField",this.user,"Desea cambiar eliminar el usuario ".concat(this.user.username," permanentemente"))},editUser:function(){this.$router.push({name:"edit_user",params:{id:this.user._id}})}},computed:{}},V=Q,Z=Object(u["a"])(V,z,K,!1,null,null,null);Z.options.__file="UserComponent.vue";var tt=Z.exports,et={name:"users",components:{"user-component":tt},data:function(){return{users:[],userObjective:{},action:"",msg:""}},created:function(){this.getAllUsers()},computed:{},methods:{getAllUsers:function(){var t=this;this.users=[],this.token=JSON.parse(window.localStorage.getItem("binarySignalToken")),Y.a.post("/users/all",{},{headers:{"Content-Type":"application/json","X-Auth":this.token.token}}).then(function(e){200===e.status&&(t.users=W.a.filter(e.data,function(t){return!t.isMaster}))}).catch(function(){})},openNewUserForm:function(){this.$router.push("/new_user")},updateAcitveField:function(t,e){this.userObjective=t,this.action="updateActiveField",this.msg=e,q()("#dialogModal").modal("show")},deleteField:function(t,e){this.userObjective=t,this.action="deleteField",this.msg=e,q()("#dialogModal").modal("show")},cancelAction:function(){this.action="",this.msg="",this.userObjective={}},doAction:function(){var t=this,e=JSON.parse(window.localStorage.getItem("binarySignalToken"));"updateActiveField"==this.action?Y.a.post("/users/".concat(this.userObjective._id,"/update"),{user:{isActive:!this.userObjective.isActive}},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){e&&(t.getAllUsers(),t.action="",t.msg="",t.userObjective={},q()("#dialogModal").modal("hide"))}).catch(function(){alert("No es posible modificar el registro ".concat(t.userObjective.username))}):"deleteField"==this.action&&Y.a.post("/users/".concat(this.userObjective._id,"/delete"),{user:{isActive:!this.userObjective.isActive}},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){e&&(t.getAllUsers(),t.action="",t.msg="",t.userObjective={},q()("#dialogModal").modal("hide"))}).catch(function(){alert("No es posible eliminar el registro ".concat(t.userObjective.username))})}}},at=et,st=(a("49ef"),Object(u["a"])(at,H,J,!1,null,null,null));st.options.__file="Users.vue";var it=st.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container pt-2"},[a("div",{staticClass:"card mt-5"},[a("div",{staticClass:"card-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}],staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[a("span",[t._v(t._s(t.messageError))]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(e){t.isError=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Correo Electrónico")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.email},attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Correo electrónico"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su email")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Clave")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.password},attrs:{type:"password",id:"password",placeholder:"Ingrese su clave de acceso"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar la clave de acceso")])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n          Ingresar\n        ")])])])])])},nt=[],ot={name:"login",data:function(){return{email:"",password:"",isError:!1,messageError:""}},methods:{login:function(){var t=this;Y.a.post("/users/login",{email:this.email,password:this.password}).then(function(e){if(200===e.status)if(e.data.isActive){var a={token:e.headers["x-auth"]};t.$store.commit("LOGIN",a),t.$router.push("/dashboard")}else t.isError=!0,t.messageError="Esta cuenta no esta activa, contactanos."}).catch(function(){t.password="",t.isError=!0,t.messageError="El email y password no coinciden."})}}},lt=ot,ct=(a("6355"),Object(u["a"])(lt,rt,nt,!1,null,"2b382fdd",null));ct.options.__file="Login.vue";var dt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-4"},[a("div",{staticClass:"card my-4 border-0"},[a("div",{staticClass:"card-header text-center bg-dark text-white"},[a("strong",[t._v("PANEL")]),t.isMaster?a("span",{staticClass:"float-right"},[t._v("Total: "+t._s(t.totalAssets))]):t._e()]),a("div",{staticClass:"my-2 mx-4"},[a("table",{staticClass:"table table-sm text-center"},[a("thead",[a("th",{attrs:{colspan:"2"}},[t._v("\n                        Lista de Alertas\n                        "),a("span",{},[a("button",{staticClass:"btn btn-sm",class:{"btn-outline-primary":t.isAlertAudioAlarm,"btn-outline-secondary":!t.isAlertAudioAlarm},on:{click:t.alertAudioToggle}},[t.isAlertAudioAlarm?a("i",{staticClass:"fa fa-bell",attrs:{"aria-hidden":"true"}}):t._e(),t.isAlertAudioAlarm?t._e():a("i",{staticClass:"fa fa-bell-slash",attrs:{"aria-hidden":"true"}})])])]),a("th",{attrs:{colspan:"2"}},[t._v("\n                        Lista de Acciones\n                        "),a("span",{},[a("button",{staticClass:"btn btn-sm",class:{"btn-outline-primary":t.isActionAudioAlarm,"btn-outline-secondary":!t.isActionAudioAlarm},on:{click:t.actionAudioToggle}},[t.isActionAudioAlarm?a("i",{staticClass:"fa fa-bell",attrs:{"aria-hidden":"true"}}):t._e(),t.isActionAudioAlarm?t._e():a("i",{staticClass:"fa fa-bell-slash",attrs:{"aria-hidden":"true"}})])])])]),a("tbody",[a("tr",[a("td",t._l(t.buyAlertList,function(e){return a("div",{key:e},[a("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(e))])])})),a("td",t._l(t.sellAlertList,function(e){return a("div",{key:e},[a("span",{staticClass:"badge badge-danger"},[t._v(" "+t._s(e))])])})),a("td",t._l(t.buyActionList,function(e){return a("div",{key:e},[a("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(e))])])})),a("td",t._l(t.sellActionList,function(e){return a("div",{key:e},[a("span",{staticClass:"badge badge-danger"},[t._v(" "+t._s(e))])])}))])])])])]),a("div",{staticClass:"accordion",attrs:{id:"accordionInstrument"}},t._l(t.instruments,function(t){return a("instrument-component",{key:t.instrument,attrs:{instrument:t}})}))])},mt=[],pt=(a("7514"),a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card text-center border-0"},[a("div",{staticClass:"card-header bg-transparent border-0",attrs:{id:t.headingName}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-block collapsed",class:t.setAlert,attrs:{type:"button","data-toggle":"collapse","data-target":t.cardCollapsableAnchor,"aria-expanded":"false","aria-controls":t.cardCollapsableName}},[t._v("\n                    "+t._s(t.instrument.instrument)+": "),a("span",[t._v(t._s(t.close))])])])]),a("div",{staticClass:"collapse container mx-3 w-auto",attrs:{id:t.cardCollapsableName,"aria-labelledby":t.headingName,"data-parent":"#accordionInstrument"}},[a("candle-component",{attrs:{candle:t.highTimeframeData}}),a("candle-component",{attrs:{candle:t.midTimeframeData}}),a("candle-component",{attrs:{candle:t.lowTimeframeData}})],1)])])}),vt=[],ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mb-2 border-0 my-2"},[a("div",{staticClass:"card-header border",class:t.candleClass},[t._v("\n        "+t._s(t.candle.timeframe)+" - "+t._s(t.candle.time)+"\n    ")]),a("div",{staticClass:"card-body py-0 px-0"},[a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(0),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.candle.open.toFixed(5)))]),a("td",[t._v(t._s(t.candle.high.toFixed(5)))]),a("td",[t._v(t._s(t.candle.low.toFixed(5)))]),a("td",[t._v(t._s(t.candle.close.toFixed(5)))])])])]),a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(1),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.candle.indicatorStochLong.stoch.toFixed(2)))]),a("td",[t._v(t._s(t.candle.indicatorStochLong.smooth.toFixed(2)))]),a("td",[t._v(t._s(t.candle.indicatorStochShort.stoch.toFixed(2)))]),a("td",[t._v(t._s(t.candle.indicatorStochShort.smooth.toFixed(2)))])])])]),a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(2),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.candle.indicatorStochRsi.stoch.toFixed(2)))]),a("td",[t._v(t._s(t.candle.indicatorStochRsi.smooth.toFixed(2)))]),a("td",[t._v(t._s(t.candle.indicatorRsi.toFixed(2)))])])])]),a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(3),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.candle.indicatorBolBand.lowerBand.toFixed(5)))]),a("td",[t._v(t._s(t.candle.indicatorBolBand.bolBand.toFixed(5)))]),a("td",[t._v(t._s(t.candle.indicatorBolBand.upperBand.toFixed(5)))])])])]),a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(4),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.candle.indicatorSma.toFixed(5)))]),a("td",[t._v(t._s(t.candle.indicatorEma.toFixed(5)))]),a("td",[t._v(t._s(t.candle.indicatorWma.toFixed(5)))])])])]),a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(5),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.candle.indicatorAwesomeOsc.toFixed(5)))])])])])])])},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",[t._v("O")]),a("th",[t._v("H")]),a("th",[t._v("L")]),a("th",[t._v("C")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",{attrs:{colspan:"2"}},[t._v("Stoch(14)")]),a("th",{attrs:{colspan:"2"}},[t._v("Stoch(6)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",{attrs:{colspan:"2"}},[t._v("StochRsi(14)")]),a("th",[t._v("Rsi(14)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",{attrs:{colspan:"3"}},[t._v("Bollinger(34)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",[t._v("Sma")]),a("th",[t._v("Ema")]),a("th",[t._v("Wma")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",[t._v("Awesome Osc")])])])}],bt={data:function(){return{}},props:{candle:Object},computed:{candleClass:function(){return{"bg-danger text-white":"SELL"==this.candle.signal,"bg-success text-white":"BUY"==this.candle.signal,"bg-dark text-white":"NEUTRAL"==this.candle.signal}}}},gt=bt,_t=Object(u["a"])(gt,ft,ht,!1,null,null,null);_t.options.__file="CandleComponent.vue";var Ct=_t.exports,yt={name:"InstrumentComponent",props:{instrument:Object},components:{"candle-component":Ct},data:function(){return{cardCollapsableName:"cardCollasable"+this.instrument.instrument,cardCollapsableAnchor:"#cardCollasable"+this.instrument.instrument,headingName:"heading-"+this.instrument.instrument}},computed:{highTimeframeData:function(){return this.instrument.data.filter(function(t){if("High"==t.flag)return t})[0]},midTimeframeData:function(){return this.instrument.data.filter(function(t){if("Mid"==t.flag)return t})[0]},lowTimeframeData:function(){return this.instrument.data.filter(function(t){if("Low"==t.flag)return t})[0]},close:function(){return this.lowTimeframeData.close},setAlert:function(){return{"btn-danger":"SELL"==this.highTimeframeData.signal&&"SELL"==this.midTimeframeData.signal&&"SELL"==this.lowTimeframeData.signal,"btn-success":"BUY"==this.highTimeframeData.signal&&"BUY"==this.midTimeframeData.signal&&"BUY"==this.LowTimeframeData.signal}}}},wt=yt,At=(a("6adb"),Object(u["a"])(wt,pt,vt,!1,null,null,null));At.options.__file="InstrumentComponent.vue";var Et=At.exports,kt={name:"dashboard",components:{"instrument-component":Et},data:function(){return{instruments:[],isActionAudioAlarm:!0,isAlertAudioAlarm:!1}},methods:{playSound:function(){var t=new Audio("http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3");t.play()},actionAudioToggle:function(){this.isActionAudioAlarm=!this.isActionAudioAlarm},alertAudioToggle:function(){this.isAlertAudioAlarm=!this.isAlertAudioAlarm}},computed:{sellAlertList:function(){var t=[];return this.instruments.forEach(function(e){"SELL"===e.data[0].signal&&t.push(e.data[0].instrument)}),t},buyAlertList:function(){var t=[];return this.instruments.forEach(function(e){"BUY"===e.data[0].signal&&t.push(e.data[0].instrument)}),t},sellActionList:function(){var t=[];return this.instruments.forEach(function(e){"SELL"===e.data[0].signal&&"SELL"===e.data[1].signal&&"SELL"===e.data[2].signal&&t.push(e.instrument)}),t},buyActionList:function(){var t=[];return this.instruments.forEach(function(e){"BUY"===e.data[0].signal&&"BUY"===e.data[1].signal&&"BUY"===e.data[2].signal&&t.push(e.instrument)}),t},checkActionList:function(){return!!this.isActionAudioAlarm&&(!!(Array.isArray(this.sellActionList)&&this.sellActionList.length>0||Array.isArray(this.buyActionList)&&this.buyActionList.length>0)&&(this.playSound(),!0))},checkAlertList:function(){return!!this.isAlertAudioAlarm&&(!!(Array.isArray(this.sellAlertList)&&this.sellAlertList.length>0||Array.isArray(this.buyAlertList)&&this.buyAlertList.length>0)&&(this.playSound(),!0))},totalAssets:function(){return this.instruments.length},isMaster:function(){return this.$store.state.isMaster}},sockets:{connect:function(){this.connected=!0},disconnect:function(){this.connected=!1},fxData:function(t){var e=[];t.forEach(function(a){e.find(function(t){return t.instrument==a.instrument})||e.push({instrument:a.instrument,data:t.filter(function(t){return t.instrument==a.instrument})})}),this.instruments=e}}},xt=kt,Nt=(a("2b56"),Object(u["a"])(xt,ut,mt,!1,null,null,null));Nt.options.__file="Dashboard.vue";var St=Nt.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.isError?a("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[t._l(t.messageError,function(e){return a("ul",{key:e},[a("li",[t._v(t._s(e))])])}),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:function(e){t.isError=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2):t._e(),a("form",{on:{submit:function(e){return e.preventDefault(),t.registerNewUser(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"firstName"}},[t._v("Nombres")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName","aria-describedby":"firstNameHelp"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lastName"}},[t._v("Apellidos")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName","aria-describedby":"lastNameHelp"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Nombre de Usuario *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.username},attrs:{type:"text",id:"username","aria-describedby":"usernameHelp"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su nombre de usuario")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Correo Electrónico *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.email},attrs:{type:"email",id:"email","aria-describedby":"emailHelp"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su email")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[t._v("Teléfono de contácto")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone","aria-describedby":"phoneHelp"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Clave *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.password},attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar la clave de acceso")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"repassword"}},[t._v("Confirmar contraseña *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.repassword,expression:"repassword"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.repassword},attrs:{type:"password",id:"repassword"},domProps:{value:t.repassword},on:{input:function(e){e.target.composing||(t.repassword=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar la clave de acceso")])]),a("button",{staticClass:"btn btn-success btn-block",attrs:{type:"submit"}},[t._v("Crear")]),a("button",{staticClass:"btn btn-danger btn-block",attrs:{type:"button"},on:{click:t.closeWindow}},[t._v("Cancelar")])])])])])},Ot=[],Tt={name:"new_user",data:function(){return{firstName:"",lastName:"",username:"",email:"",phone:"",password:"",repassword:"",isError:!1,messageError:[]}},methods:{checkFields:function(){this.isError=!1,this.messageError=[],""==this.username&&(this.isError=!0,this.messageError.push("El campo nombre de usuario no debe esta en blanco")),""==this.email&&(this.isError=!0,this.messageError.push("El campo email no debe estar en blanco")),""==this.password&&(this.isError=!0,this.messageError.push("El campo contraseña no debe estar en blanco")),this.password!=this.repassword&&(this.isError=!0,this.messageError.push("Las contraseñas no coinciden"))},registerNewUser:function(){var t=this;if(this.checkFields(),!this.isError){var e=JSON.parse(window.localStorage.getItem("binarySignalToken"));Y.a.post("/users/register",{firstName:this.firstName,lastName:this.lastName,username:this.username,email:this.email,phone:this.phone,password:this.password},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){200==e.status&&(alert("Usuario creado exitosamente"),t.$router.push("/users"))}).catch(function(e){t.isError=!0,t.messageError.push("No es posible crear un nuevo usuario, revise sus datos"),console.log(e)})}},closeWindow:function(){this.$router.push("/users")}}},jt=Tt,$t=(a("cb28"),Object(u["a"])(jt,Lt,Ot,!1,null,null,null));$t.options.__file="AddUser.vue";var Ft=$t.exports,Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.isError?a("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[t._l(t.messageError,function(e){return a("ul",{key:e},[a("li",[t._v(t._s(e))])])}),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:function(e){t.isError=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2):t._e(),a("form",{on:{submit:function(e){return e.preventDefault(),t.updateUser(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"firstName"}},[t._v("Nombres")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.firstName,expression:"user.firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName","aria-describedby":"firstNameHelp"},domProps:{value:t.user.firstName},on:{input:function(e){e.target.composing||t.$set(t.user,"firstName",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lastName"}},[t._v("Apellidos")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.lastName,expression:"user.lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName","aria-describedby":"lastNameHelp"},domProps:{value:t.user.lastName},on:{input:function(e){e.target.composing||t.$set(t.user,"lastName",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Nombre de Usuario *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.username},attrs:{type:"text",id:"username","aria-describedby":"usernameHelp"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su nombre de usuario")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Correo Electrónico *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.email},attrs:{type:"email",id:"email","aria-describedby":"emailHelp"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su email")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[t._v("Teléfono de contácto")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone","aria-describedby":"phoneHelp"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}})]),a("button",{staticClass:"btn btn-success btn-block",attrs:{type:"submit"}},[t._v("Actualizar")]),a("button",{staticClass:"btn btn-danger btn-block",attrs:{type:"button"},on:{click:t.closeEdit}},[t._v("Cancelar")])])])])])},Dt=[],Mt={name:"edit_user",data:function(){return{id:"",user:{},isError:!1,messageError:[]}},created:function(){this.id=this.$route.params.id,this.loadUserData()},methods:{checkFields:function(){this.isError=!1,this.messageError=[],""==this.user.username&&(this.isError=!0,this.messageError.push("El campo nombre de usuario no debe esta en blanco")),""==this.user.email&&(this.isError=!0,this.messageError.push("El campo email no debe estar en blanco"))},loadUserData:function(){var t=this,e=JSON.parse(window.localStorage.getItem("binarySignalToken"));Y.a.post("/users/".concat(this.id),{},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){200==e.status&&(t.user=e.data)}).catch(function(e){t.isError=!0,t.messageError.push("No es posible crear un nuevo usuario, revise sus datos"),console.log(e)})},updateUser:function(){var t=this;if(this.checkFields(),!this.isError){var e=JSON.parse(window.localStorage.getItem("binarySignalToken"));Y.a.post("/users/".concat(this.id,"/update"),{user:this.user},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){alert("Se actualizo el registro ".concat(e.data._id," exitosamente")),t.$router.push("/users")}).catch(function(){alert("No es posible eliminar el registro ".concat(t.userObjective.username))})}},closeEdit:function(){this.$router.go(-1)}}},It=Mt,Pt=(a("5122"),Object(u["a"])(It,Ut,Dt,!1,null,null,null));Pt.options.__file="EditUser.vue";var Bt=Pt.exports;s["a"].use(S["a"]);var Ht=new S["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F},{path:"/contact",name:"contact",component:B},{path:"/users",name:"users",component:it,beforeEnter:Jt},{path:"/login",name:"login",component:dt,beforeEnter:Xt},{path:"/dashboard",name:"dashboard",component:St,beforeEnter:Jt},{path:"/new_user",name:"new_user",component:Ft,beforeEnter:Jt},{path:"/:id/edit",name:"edit_user",component:Bt,beforeEnter:Jt}]}),Jt=function(t,e,a){var s=JSON.parse(window.localStorage.getItem("binarySignalToken"));s?Y.a.post("/users/me",{},{headers:{"Content-Type":"application/json","X-Auth":s.token}}).then(function(){a()}).catch(function(t){console.log(t),a("login")}):a("/login")},Xt=function(t,e,a){var s=JSON.parse(window.localStorage.getItem("binarySignalToken"));a(s?"dashboard":"login")};s["a"].use(l["a"]);var Yt=new l["a"].Store({state:{isLogged:!1,isMaster:!1,username:null},mutations:{LOGIN:function(t,e){window.localStorage.setItem("binarySignalToken",JSON.stringify(e)),this.dispatch("checkToken")},LOGOUT:function(t){t.username=null,t.isMaster=!1,t.isLogged=!1,window.localStorage.removeItem("binarySignalToken")},CHECK_TOKEN:function(t){var e=JSON.parse(window.localStorage.getItem("binarySignalToken"));e?Y.a.post("/users/me",{},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){e.data.user?(t.username=e.data.user.username,t.isMaster=e.data.user.isMaster,t.isLogged=!0):(t.username=null,t.isLogged=!1,t.isMaster=!1,window.localStorage.removeItem("binarySignalToken"))}).catch(function(){t.username=null,t.isLogged=!1,t.isMaster=!1,window.localStorage.removeItem("binarySignalToken")}):(t.username=null,t.isLogged=!1,t.isMaster=!1)}},actions:{checkToken:function(t){var e=JSON.parse(window.localStorage.getItem("binarySignalToken"));e?Y.a.post("/users/me",{},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){e.data.user?(t.state.username=e.data.user.username,t.state.isMaster=e.data.user.isMaster,t.state.isLogged=!0):(t.state.username=null,t.state.isLogged=!1,t.state.isMaster=!1,window.localStorage.removeItem("binarySignalToken"))}).catch(function(){t.state.username=null,t.state.isLogged=!1,t.state.isMaster=!1,window.localStorage.removeItem("binarySignalToken")}):(t.state.username=null,t.state.isLogged=!1,t.state.isMaster=!1)}}}),Rt=Yt;a("4989"),a("ab8b");s["a"].use(N.a,k()("https://shrouded-woodland-53778.herokuapp.com/")),s["a"].config.productionTip=!1,new s["a"]({router:Ht,store:Rt,data:function(){return{}},render:function(t){return t(A)},created:function(){this.$store.dispatch("checkToken")},methods:{}}).$mount("#app")},"5dae":function(t,e,a){},6355:function(t,e,a){"use strict";var s=a("d82f"),i=a.n(s);i.a},"64a9":function(t,e,a){},"66d0":function(t,e,a){},"6adb":function(t,e,a){"use strict";var s=a("b9fd"),i=a.n(s);i.a},7494:function(t,e,a){"use strict";var s=a("ec50"),i=a.n(s);i.a},"844c":function(t,e,a){},9297:function(t,e,a){"use strict";var s=a("66d0"),i=a.n(s);i.a},"96c1":function(t,e,a){},a2a7:function(t,e,a){},b9fd:function(t,e,a){},c56b:function(t,e,a){"use strict";var s=a("844c"),i=a.n(s);i.a},cb28:function(t,e,a){"use strict";var s=a("96c1"),i=a.n(s);i.a},d82f:function(t,e,a){},ec50:function(t,e,a){}});
//# sourceMappingURL=app.ebbfd071.js.map