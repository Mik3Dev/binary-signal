(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)n=o[u],i[n]&&m.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},"04d4":function(t,e,a){"use strict";var s=a("5dae"),i=a.n(s);i.a},"0c50":function(t,e,a){"use strict";var s=a("613f"),i=a.n(s);i.a},1:function(t,e){},1560:function(t,e,a){t.exports=a.p+"img/adult-blank-business-326576.aa3f5fd9.jpg"},"20ce":function(t,e,a){},"2b56":function(t,e,a){"use strict";var s=a("31f8"),i=a.n(s);i.a},"31f8":function(t,e,a){},"49ef":function(t,e,a){"use strict";var s=a("a2a7"),i=a.n(s);i.a},5122:function(t,e,a){"use strict";var s=a("20ce"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar-component",{attrs:{"is-logged":t.isLogged,"is-master":t.isMaster}}),a("router-view"),a("footer-component")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Home")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"mainNavbar"}},[a("div",{staticClass:"navbar-nav d-flex"},[t.isLogged?a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):t._e(),t.isMaster?a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/users"}},[t._v("Usuarios")]):t._e(),a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/contact"}},[t._v("Contactos")]),t.isLogged?t._e():a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/login"}},[t._v("Ingresar")]),t.isLogged?a("a",{staticClass:"nav-item nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Salir")]):t._e()],1)])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#mainNavbar","aria-controls":"mainNavbar","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"navbarComponent",created:function(){},props:{isLogged:{type:Boolean,default:!1},isMaster:{type:Boolean,default:!1}},methods:{logout:function(){this.$parent.$parent.$emit("logout")}}},c=l,d=(a("c56b"),a("2877")),u=Object(d["a"])(c,n,o,!1,null,null,null);u.options.__file="NavbarComponent.vue";var m=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-light bg-dark pt-3 pb-2"},[a("p",{staticClass:"text-center risk-declaration"},[t._v("\n    Advertencia, operar en cualquier mercado financiero conlleva un riesgo. Las opciones binarias son productos derivados, altamente especulativos sobre los mercados de divisas, acciones, materias primas o índices. Por ello, las opciones binarias representan un riesgo real para los inversores. Las posibilidades de ganancias son muy elevadas, sin embargo éstas son proporcionales a los riesgos tomados. Cada persona que decida especular en opciones binarias debe ser consciente de los riesgos de pérdida que esto conlleva.\n  ")]),a("p",{staticClass:"text-center copywrite"},[a("a",{staticClass:" text-light",attrs:{href:"mailto:miguel.acosta1978@gmail.com"}},[t._v("miguel.acosta1978@gmail.com")]),t._v(" - Nos reservamos todos los derechos ©"+t._s((new Date).getFullYear()))])])},v=[],f={name:"footerComponent"},h=f,b=(a("7494"),Object(d["a"])(h,p,v,!1,null,null,null));b.options.__file="FooterComponent.vue";var g=b.exports,_={name:"App",data:function(){return{}},computed:{isMaster:function(){return this.$parent.isMaster},isLogged:function(){return this.$parent.isLogged}},components:{"navbar-component":m,"footer-component":g},created:function(){}},C=_,y=(a("034f"),Object(d["a"])(C,i,r,!1,null,null,null));y.options.__file="App.vue";var w=y.exports,E=a("bc3a"),k=a.n(E),x=a("8055"),N=a.n(x),A=a("0a12"),T=a.n(A),S=a("8c4f"),D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"spash"},[a("div",{staticClass:"container text-light"},[a("div",{staticClass:"text-box"},[a("h1",{staticClass:"display-4"},[t._v("FX Scanner Tool")]),a("p",{staticClass:"lead"},[t._v("Escaner para el mercado Forex.")])])])])])}],O={name:"home"},$=O,j=(a("04d4"),Object(d["a"])($,D,L,!1,null,"4faaaf52",null));j.options.__file="Home.vue";var F=j.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"card my-4 border-0"},[s("div",{staticClass:"card-header text-center bg-dark text-white"},[s("strong",[t._v("CONTACTOS")])]),s("div",{staticClass:"row my-2"},[s("div",{staticClass:"col-sm"},[s("div",{staticClass:"my-4 mx-4 align-middle"},[s("p",[t._v("Para solicitar informacion general de la aplicacion, te presento los siguientes datos de contacto.")]),s("p",[s("i",{staticClass:"fa fa-phone"}),t._v(" Telefono: "),s("a",{staticClass:"contact",attrs:{href:"tel:+56940680158",target:"_blank"}},[t._v("+56 9 40680158")])]),s("p",[s("i",{staticClass:"fa fa-whatsapp"}),t._v(" Whatsapp: "),s("a",{staticClass:"contact",attrs:{href:"https://wa.me/56940680158",target:"_blank"}},[t._v("+56 9 40680158")])]),s("p",[s("i",{staticClass:"fa fa-envelope"}),t._v(" Email: "),s("a",{staticClass:"contact",attrs:{href:"mailto:miguel.acosta1978@gmail.com",target:"_blank"}},[t._v("miguel.acosta1978@gmail.com")])])])]),s("div",{staticClass:"col-sm"},[s("img",{staticClass:"img-fluid",attrs:{src:a("1560"),alt:"Contactame"}})])])])])}],M={name:"contact"},P=M,I=(a("9297"),Object(d["a"])(P,U,B,!1,null,"62d0dd5e",null));I.options.__file="Contact.vue";var H=I.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("button",{staticClass:"btn btn-success btn-block mt-5",on:{click:t.openNewUserForm}},[t._v("Agregar Nuevo Usuario")]),a("table",{staticClass:"table text-center mt-4 table-sm"},[t._m(0),a("tbody",t._l(t.users,function(e){return a("user-component",{key:e._id,attrs:{user:e},on:{updateAcitveField:t.updateAcitveField,deleteField:t.deleteField}})}))]),a("div",{staticClass:"modal fade",attrs:{id:"dialogModal",tabindex:"-1",role:"dialog","aria-labelledby":"dialogModalTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("p",[t._v(t._s(t.msg))])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.cancelAction}},[t._v("Cancelar")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.doAction}},[t._v("Continuar")])])])])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"d-none d-sm-block"},[t._v("Usuario")]),a("th",[t._v("Correo")]),a("th",[t._v("Activo")]),a("th",{staticClass:"d-none d-sm-block"},[t._v("Acción")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"dialogModalTitle"}},[t._v("Atención")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],R=a("2ef0"),X=a.n(R),W=a("1157"),q=a.n(W),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.user.username))]),a("td",[t._v(t._s(t.user.email))]),a("td",[a("button",{staticClass:"btn btn-sm",class:{"btn-success":t.user.isActive,"btn-danger":!t.user.isActive},on:{click:t.updateActiveField}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.user.isActive,expression:"user.isActive"}],staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}}),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.user.isActive,expression:"!user.isActive"}],staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("td",{staticClass:"d-none d-sm-block"},[a("button",{staticClass:"btn btn-danger btn-sm",on:{click:t.deleteField}},[a("i",{staticClass:"fa fa-trash"})]),a("span",{staticClass:"mx-1"}),a("button",{staticClass:"btn btn-warning btn-sm",on:{click:t.editUser}},[a("i",{staticClass:"fa fa-pencil"})])])])},G=[],K={name:"userComponent",props:{user:Object},data:function(){return{}},methods:{updateActiveField:function(){this.$emit("updateAcitveField",this.user,"Desea cambiar el estado de el usuario ".concat(this.user.username))},deleteField:function(){this.$emit("deleteField",this.user,"Desea cambiar eliminar el usuario ".concat(this.user.username," permanentemente"))},editUser:function(){this.$router.push({name:"edit_user",params:{id:this.user._id}})}},computed:{}},Q=K,V=Object(d["a"])(Q,z,G,!1,null,null,null);V.options.__file="UserComponent.vue";var Z=V.exports,tt={name:"users",components:{"user-component":Z},data:function(){return{users:[],userObjective:{},action:"",msg:""}},created:function(){this.getAllUsers()},computed:{},methods:{getAllUsers:function(){var t=this;this.users=[],this.token=JSON.parse(window.localStorage.getItem("binarySignalToken")),k.a.post("/users/all",{},{headers:{"Content-Type":"application/json","X-Auth":this.token.token}}).then(function(e){200===e.status&&(t.users=X.a.filter(e.data,function(t){return!t.isMaster}))}).catch(function(){})},openNewUserForm:function(){this.$router.push("/new_user")},updateAcitveField:function(t,e){this.userObjective=t,this.action="updateActiveField",this.msg=e,q()("#dialogModal").modal("show")},deleteField:function(t,e){this.userObjective=t,this.action="deleteField",this.msg=e,q()("#dialogModal").modal("show")},cancelAction:function(){this.action="",this.msg="",this.userObjective={}},doAction:function(){var t=this,e=JSON.parse(window.localStorage.getItem("binarySignalToken"));"updateActiveField"==this.action?k.a.post("/users/".concat(this.userObjective._id,"/update"),{user:{isActive:!this.userObjective.isActive}},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){e&&(t.getAllUsers(),t.action="",t.msg="",t.userObjective={},q()("#dialogModal").modal("hide"))}).catch(function(){alert("No es posible modificar el registro ".concat(t.userObjective.username))}):"deleteField"==this.action&&k.a.post("/users/".concat(this.userObjective._id,"/delete"),{user:{isActive:!this.userObjective.isActive}},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){e&&(t.getAllUsers(),t.action="",t.msg="",t.userObjective={},q()("#dialogModal").modal("hide"))}).catch(function(){alert("No es posible eliminar el registro ".concat(t.userObjective.username))})}}},et=tt,at=(a("49ef"),Object(d["a"])(et,J,Y,!1,null,null,null));at.options.__file="Users.vue";var st=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container pt-2"},[a("div",{staticClass:"card mt-5"},[a("div",{staticClass:"card-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}],staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[a("span",[t._v(t._s(t.messageError))]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(e){t.isError=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Correo Electrónico")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.email},attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Correo electrónico"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su email")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Clave")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.password},attrs:{type:"password",id:"password",placeholder:"Ingrese su clave de acceso"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar la clave de acceso")])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n          Ingresar\n        ")])])])])])},rt=[],nt={name:"login",data:function(){return{email:"",password:"",isError:!1,messageError:""}},methods:{login:function(){var t=this;k.a.post("/users/login",{email:this.email,password:this.password}).then(function(e){if(200===e.status)if(e.data.isActive){var a={token:e.headers["x-auth"]};window.localStorage.setItem("binarySignalToken",JSON.stringify(a)),t.$parent.$parent.$emit("login")}else t.isError=!0,t.messageError="Esta cuenta no esta activa, contactanos."}).catch(function(){t.password="",t.isError=!0,t.messageError="El email y password no coinciden."})}}},ot=nt,lt=(a("0c50"),Object(d["a"])(ot,it,rt,!1,null,"74fcf5c7",null));lt.options.__file="Login.vue";var ct=lt.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-4"},[a("div",{staticClass:"card my-4 border-0"},[a("div",{staticClass:"card-header text-center bg-dark text-white"},[a("strong",[t._v("PANEL")]),a("div",{staticClass:"float-right"},[a("button",{staticClass:"btn btn-sm",class:{"btn-primary":t.isAudioAlarm,"btn-secondary":!t.isAudioAlarm},on:{click:t.audioToggle}},[t._v("Audio "+t._s(t.isAudioAlarm?"On":"Off"))])])]),a("div",{staticClass:"my-2 mx-4"},[a("table",{staticClass:"table table-sm text-center"},[a("thead",[a("th",{attrs:{colspan:"2"}},[t._v("Lista de Alertas")]),a("th",{attrs:{colspan:"2"}},[t._v("Lista de Acciones "),t.checkActionList?a("i",{staticClass:"fa fa-bell",attrs:{"aria-hidden":"true"}}):t._e()])]),a("tbody",[a("tr",[a("td",t._l(t.buyAlertList,function(e){return a("div",{key:e},[a("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(e))])])})),a("td",t._l(t.sellAlertList,function(e){return a("div",{key:e},[a("span",{staticClass:"badge badge-danger"},[t._v(" "+t._s(e))])])})),a("td",t._l(t.buyActionList,function(e){return a("div",{key:e},[a("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(e))])])})),a("td",t._l(t.sellActionList,function(e){return a("div",{key:e},[a("span",{staticClass:"badge badge-danger"},[t._v(" "+t._s(e))])])}))])])])])]),a("div",{staticClass:"accordion",attrs:{id:"accordionInstrument"}},t._l(t.instruments,function(t){return a("instrument-component",{key:t.instrument,attrs:{instrument:t}})}))])},ut=[],mt=(a("7514"),a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card text-center border-0"},[a("div",{staticClass:"card-header bg-transparent border-0",attrs:{id:t.headingName}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-block collapsed",class:t.setAlert,attrs:{type:"button","data-toggle":"collapse","data-target":t.cardCollapsableAnchor,"aria-expanded":"false","aria-controls":t.cardCollapsableName}},[t._v("\n                    "+t._s(t.instrument.instrument)+": "),a("span",[t._v(t._s(t.close))])])])]),a("div",{staticClass:"collapse container mx-3 w-auto",attrs:{id:t.cardCollapsableName,"aria-labelledby":t.headingName,"data-parent":"#accordionInstrument"}},[a("div",{staticClass:"card mb-2 border-0 my-2"},[a("div",{staticClass:"card-header border",class:t.highTimeframeClass},[t._v(t._s(t.highTimeframeData.timeframe)+" - "+t._s(t.highTimeframeData.time))]),a("div",{staticClass:"card-body py-0 px-0"},[a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(0),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.highTimeframeData.indicatorStochLong.stoch.toFixed(2)))]),a("td",[t._v(t._s(t.highTimeframeData.indicatorStochShort.stoch.toFixed(2)))])])])]),a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(1),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.highTimeframeData.indicatorStochRsi.stoch.toFixed(2)))]),a("td",[t._v(t._s(t.highTimeframeData.indicatorRsi.toFixed(2)))])])])]),a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(2),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.highTimeframeData.indicatorBolBand.lowerBand.toFixed(5)))]),a("td",[t._v(t._s(t.highTimeframeData.indicatorBolBand.bolBand.toFixed(5)))]),a("td",[t._v(t._s(t.highTimeframeData.indicatorBolBand.upperBand.toFixed(5)))])])])])])]),a("div",{staticClass:"card mb-2 border-0 my-2"},[a("div",{staticClass:"card-header border",class:t.midTimeframeClass},[t._v(t._s(t.midTimeframeData.timeframe)+" - "+t._s(t.midTimeframeData.time))]),a("div",{staticClass:"card-body pb-0 px-0"},[a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(3),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.midTimeframeData.indicatorStochLong.stoch.toFixed(2)))]),a("td",[t._v(t._s(t.midTimeframeData.indicatorStochLong.smooth.toFixed(2)))]),a("td",[t._v(t._s(t.midTimeframeData.indicatorStochShort.stoch.toFixed(2)))]),a("td",[t._v(t._s(t.midTimeframeData.indicatorStochShort.smooth.toFixed(2)))])])])]),a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(4),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.midTimeframeData.indicatorStochRsi.stoch.toFixed(2)))]),a("td",[t._v(t._s(t.midTimeframeData.indicatorStochRsi.smooth.toFixed(2)))])])])]),a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(5),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.midTimeframeData.indicatorBolBand.lowerBand.toFixed(5)))]),a("td",[t._v(t._s(t.midTimeframeData.indicatorBolBand.bolBand.toFixed(5)))]),a("td",[t._v(t._s(t.midTimeframeData.indicatorBolBand.upperBand.toFixed(5)))])])])])])]),a("div",{staticClass:"card border-0 my-2"},[a("div",{staticClass:"card-header border",class:t.lowTimeframeClass},[t._v(t._s(t.lowTimeframeData.timeframe)+" - "+t._s(t.lowTimeframeData.time))]),a("div",{staticClass:"card-body px-0 py-0"},[a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(6),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.lowTimeframeData.indicatorSma.toFixed(5)))]),a("td",[t._v(t._s(t.lowTimeframeData.indicatorWma.toFixed(5)))])])])]),a("table",{staticClass:"table table-bordered table-sm my-2"},[t._m(7),a("tbody",[a("tr",{staticClass:"light"},[a("td",[t._v(t._s(t.lowTimeframeData.indicatorAwesomeOsc.toFixed(5)))])])])])])])])])])}),pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",[t._v("Stoch(14)")]),a("th",[t._v("Stoch(6)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",[t._v("StochRsi(14)")]),a("th",[t._v("Rsi(14)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",{attrs:{colspan:"3"}},[t._v("Bollinger(34)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",{attrs:{colspan:"2"}},[t._v("Stoch(14)")]),a("th",{attrs:{colspan:"2"}},[t._v("Stoch(6)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",{attrs:{colspan:"2"}},[t._v("StochRsi(14)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",{attrs:{colspan:"3"}},[t._v("Bollinger(34)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",[t._v("Sma(25)")]),a("th",[t._v("Wma(7)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-secondary"},[a("th",[t._v("AwOsc(4,35)")])])])}],vt={name:"InstrumentComponent",props:{instrument:Object},data:function(){return{cardCollapsableName:"cardCollasable"+this.instrument.instrument,cardCollapsableAnchor:"#cardCollasable"+this.instrument.instrument,headingName:"heading-"+this.instrument.instrument}},computed:{highTimeframeData:function(){return this.instrument.data.filter(function(t){if("High"==t.flag)return t})[0]},midTimeframeData:function(){return this.instrument.data.filter(function(t){if("Mid"==t.flag)return t})[0]},lowTimeframeData:function(){return this.instrument.data.filter(function(t){if("Low"==t.flag)return t})[0]},close:function(){return this.lowTimeframeData.close},open:function(){return this.lowTimeframeData.open},highTimeframeClass:function(){return{"bg-danger text-white":"SELL"==this.highTimeframeData.signal,"bg-success text-white":"BUY"==this.highTimeframeData.signal,"bg-dark text-white":"NEUTRAL"==this.highTimeframeData.signal}},midTimeframeClass:function(){return{"bg-danger text-white":"SELL"==this.midTimeframeData.signal,"bg-success text-white":"BUY"==this.midTimeframeData.signal,"bg-dark text-white":"NEUTRAL"==this.midTimeframeData.signal}},lowTimeframeClass:function(){return{"bg-danger text-white":"SELL"==this.lowTimeframeData.signal,"bg-success text-white":"BUY"==this.lowTimeframeData.signal,"bg-dark text-white":"NEUTRAL"==this.lowTimeframeData.signal}},setAlert:function(){return{"btn-danger":"SELL"==this.highTimeframeData.signal4&&"SELL"==this.midTimeframeData.signal&&"SELL"==this.lowTimeframeData.signal,"btn-success":"BUY"==this.highTimeframeData.signal&&"BUY"==this.midTimeframeData.signal&&"BUY"==this.LowTimeframeData.signal}}}},ft=vt,ht=(a("6adb"),Object(d["a"])(ft,mt,pt,!1,null,null,null));ht.options.__file="InstrumentComponent.vue";var bt=ht.exports,gt={name:"dashboard",components:{"instrument-component":bt},data:function(){return{instruments:[],isAudioAlarm:!0}},methods:{playSound:function(){var t=new Audio("http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3");t.play()},audioToggle:function(){this.isAudioAlarm=!this.isAudioAlarm}},computed:{sellAlertList:function(){var t=[];return this.instruments.forEach(function(e){e.data.forEach(function(e){"High"==e.flag&&"SELL"==e.signal&&t.push(e.instrument)})}),t},buyAlertList:function(){var t=[];return this.instruments.forEach(function(e){e.data.forEach(function(e){"High"==e.flag&&"BUY"==e.signal&&t.push(e.instrument)})}),t},sellActionList:function(){var t=[];return this.instruments.forEach(function(e){"SELL"!=e.data[0].signal&&"NONE"!=e.data[0].signal||"SELL"!=e.data[1].signal&&"NONE"!=e.data[1].signal||"SELL"!=e.data[2].signal&&"NONE"!=e.data[2].signal||t.push(e.instrument)}),t},buyActionList:function(){var t=[];return this.instruments.forEach(function(e){"BUY"!=e.data[0].signal&&"NONE"!=e.data[0].signal||"BUY"!=e.data[1].signal&&"NONE"!=e.data[1].signal||"BUY"!=e.data[2].signal&&"NONE"!=e.data[2].signal||t.push(e.instrument)}),t},checkActionList:function(){return!!this.isAudioAlarm&&(!!(Array.isArray(this.sellActionList)&&this.sellActionList.length>0||Array.isArray(this.buyActionList)&&this.buyActionList.length>0)&&(this.playSound(),!0))}},sockets:{connect:function(){this.connected=!0},disconnect:function(){this.connected=!1},fxData:function(t){var e=[];t.forEach(function(a){e.find(function(t){return t.instrument==a.instrument})||e.push({instrument:a.instrument,data:t.filter(function(t){return t.instrument==a.instrument})})}),this.instruments=e}}},_t=gt,Ct=(a("2b56"),Object(d["a"])(_t,dt,ut,!1,null,null,null));Ct.options.__file="Dashboard.vue";var yt=Ct.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.isError?a("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[t._l(t.messageError,function(e){return a("ul",{key:e},[a("li",[t._v(t._s(e))])])}),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:function(e){t.isError=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2):t._e(),a("form",{on:{submit:function(e){return e.preventDefault(),t.registerNewUser(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"firstName"}},[t._v("Nombres")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName","aria-describedby":"firstNameHelp"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lastName"}},[t._v("Apellidos")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName","aria-describedby":"lastNameHelp"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Nombre de Usuario *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.username},attrs:{type:"text",id:"username","aria-describedby":"usernameHelp"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su nombre de usuario")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Correo Electrónico *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.email},attrs:{type:"email",id:"email","aria-describedby":"emailHelp"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su email")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[t._v("Teléfono de contácto")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone","aria-describedby":"phoneHelp"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Clave *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.password},attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar la clave de acceso")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"repassword"}},[t._v("Confirmar contraseña *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.repassword,expression:"repassword"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.repassword},attrs:{type:"password",id:"repassword"},domProps:{value:t.repassword},on:{input:function(e){e.target.composing||(t.repassword=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar la clave de acceso")])]),a("button",{staticClass:"btn btn-success btn-block",attrs:{type:"submit"}},[t._v("Crear")]),a("button",{staticClass:"btn btn-danger btn-block",attrs:{type:"button"},on:{click:t.closeWindow}},[t._v("Cancelar")])])])])])},Et=[],kt={name:"new_user",data:function(){return{firstName:"",lastName:"",username:"",email:"",phone:"",password:"",repassword:"",isError:!1,messageError:[]}},methods:{checkFields:function(){this.isError=!1,this.messageError=[],""==this.username&&(this.isError=!0,this.messageError.push("El campo nombre de usuario no debe esta en blanco")),""==this.email&&(this.isError=!0,this.messageError.push("El campo email no debe estar en blanco")),""==this.password&&(this.isError=!0,this.messageError.push("El campo contraseña no debe estar en blanco")),this.password!=this.repassword&&(this.isError=!0,this.messageError.push("Las contraseñas no coinciden"))},registerNewUser:function(){var t=this;if(this.checkFields(),!this.isError){var e=JSON.parse(window.localStorage.getItem("binarySignalToken"));k.a.post("/users/register",{firstName:this.firstName,lastName:this.lastName,username:this.username,email:this.email,phone:this.phone,password:this.password},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){200==e.status&&(alert("Usuario creado exitosamente"),t.$router.push("/users"))}).catch(function(e){t.isError=!0,t.messageError.push("No es posible crear un nuevo usuario, revise sus datos"),console.log(e)})}},closeWindow:function(){this.$router.push("/users")}}},xt=kt,Nt=(a("cb28"),Object(d["a"])(xt,wt,Et,!1,null,null,null));Nt.options.__file="AddUser.vue";var At=Nt.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.isError?a("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[t._l(t.messageError,function(e){return a("ul",{key:e},[a("li",[t._v(t._s(e))])])}),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:function(e){t.isError=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2):t._e(),a("form",{on:{submit:function(e){return e.preventDefault(),t.updateUser(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"firstName"}},[t._v("Nombres")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.firstName,expression:"user.firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName","aria-describedby":"firstNameHelp"},domProps:{value:t.user.firstName},on:{input:function(e){e.target.composing||t.$set(t.user,"firstName",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lastName"}},[t._v("Apellidos")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.lastName,expression:"user.lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName","aria-describedby":"lastNameHelp"},domProps:{value:t.user.lastName},on:{input:function(e){e.target.composing||t.$set(t.user,"lastName",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Nombre de Usuario *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.username},attrs:{type:"text",id:"username","aria-describedby":"usernameHelp"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su nombre de usuario")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Correo Electrónico *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",class:{"is-invalid":t.isError&&""==t.email},attrs:{type:"email",id:"email","aria-describedby":"emailHelp"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Debe ingresar su email")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[t._v("Teléfono de contácto")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone","aria-describedby":"phoneHelp"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}})]),a("button",{staticClass:"btn btn-success btn-block",attrs:{type:"submit"}},[t._v("Actualizar")]),a("button",{staticClass:"btn btn-danger btn-block",attrs:{type:"button"},on:{click:t.closeEdit}},[t._v("Cancelar")])])])])])},St=[],Dt={name:"edit_user",data:function(){return{id:"",user:{},isError:!1,messageError:[]}},created:function(){this.id=this.$route.params.id,this.loadUserData()},methods:{checkFields:function(){this.isError=!1,this.messageError=[],""==this.user.username&&(this.isError=!0,this.messageError.push("El campo nombre de usuario no debe esta en blanco")),""==this.user.email&&(this.isError=!0,this.messageError.push("El campo email no debe estar en blanco"))},loadUserData:function(){var t=this,e=JSON.parse(window.localStorage.getItem("binarySignalToken"));k.a.post("/users/".concat(this.id),{},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){200==e.status&&(t.user=e.data)}).catch(function(e){t.isError=!0,t.messageError.push("No es posible crear un nuevo usuario, revise sus datos"),console.log(e)})},updateUser:function(){var t=this;if(this.checkFields(),!this.isError){var e=JSON.parse(window.localStorage.getItem("binarySignalToken"));k.a.post("/users/".concat(this.id,"/update"),{user:this.user},{headers:{"Content-Type":"application/json","X-Auth":e.token}}).then(function(e){alert("Se actualizo el registro ".concat(e.data._id," exitosamente")),t.$router.push("/users")}).catch(function(){alert("No es posible eliminar el registro ".concat(t.userObjective.username))})}},closeEdit:function(){this.$router.go(-1)}}},Lt=Dt,Ot=(a("5122"),Object(d["a"])(Lt,Tt,St,!1,null,null,null));Ot.options.__file="EditUser.vue";var $t=Ot.exports;s["a"].use(S["a"]);var jt=new S["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F},{path:"/contact",name:"contact",component:H},{path:"/users",name:"users",component:st,beforeEnter:Ft},{path:"/login",name:"login",component:ct},{path:"/dashboard",name:"dashboard",component:yt,beforeEnter:Ft},{path:"/new_user",name:"new_user",component:At,beforeEnter:Ft},{path:"/:id/edit",name:"edit_user",component:$t,beforeEnter:Ft}]}),Ft=function(t,e,a){var s=JSON.parse(window.localStorage.getItem("binarySignalToken"));s?k.a.post("/users/me",{},{headers:{"Content-Type":"application/json","X-Auth":s.token}}).then(function(){a()}).catch(function(t){console.log(t),a("login")}):a("/login")};a("4989"),a("ab8b");s["a"].use(T.a,N()("https://shrouded-woodland-53778.herokuapp.com/")),s["a"].config.productionTip=!1,new s["a"]({router:jt,data:function(){return{isMaster:!1,isLogged:!1,token:null}},render:function(t){return t(w)},created:function(){var t=this;this.token=JSON.parse(window.localStorage.getItem("binarySignalToken")),this.token&&this.checkToken(this.token),this.$on("login",function(){t.token=JSON.parse(window.localStorage.getItem("binarySignalToken")),t.checkToken(t.token),t.$router.push("/dashboard")}),this.$on("isMaster",function(){t.isMaster=!0}),this.$on("logout",function(){window.localStorage.removeItem("binarySignalToken"),t.token=null,t.checkToken(t.token),t.$router.push("/")})},methods:{checkToken:function(t){var e=this;t?k.a.post("/users/me",{},{headers:{"Content-Type":"application/json","X-Auth":t.token}}).then(function(t){e.isMaster=t.data.user.isMaster,e.isLogged=!0}).catch(function(){e.isMaster=!1,e.isLogged=!1,window.localStorage.removeItem("binarySignalToken")}):(this.isLogged=!1,this.isMaster=!1)}}}).$mount("#app")},"5dae":function(t,e,a){},"613f":function(t,e,a){},"64a9":function(t,e,a){},"66d0":function(t,e,a){},"6adb":function(t,e,a){"use strict";var s=a("b9fd"),i=a.n(s);i.a},7494:function(t,e,a){"use strict";var s=a("ec50"),i=a.n(s);i.a},"844c":function(t,e,a){},9297:function(t,e,a){"use strict";var s=a("66d0"),i=a.n(s);i.a},"96c1":function(t,e,a){},a2a7:function(t,e,a){},b9fd:function(t,e,a){},c56b:function(t,e,a){"use strict";var s=a("844c"),i=a.n(s);i.a},cb28:function(t,e,a){"use strict";var s=a("96c1"),i=a.n(s);i.a},ec50:function(t,e,a){}});
//# sourceMappingURL=app.2fba4fa7.js.map