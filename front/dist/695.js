"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[695],{2599:function(e,t,n){n.d(t,{T:function(){return r}});var r="http://15.164.103.236/"},29695:function(e,t,n){n.r(t);var r=n(38678),a=n(73046),l=n(83564),o=n(9669),u=n.n(o),c=n(67294),i=n(5977),s=n(8100),m=n(2599);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=(0,s.ZP)("".concat(m.T,"/api/users"),l.Z,{dedupingInterval:1e6}),t=e.data,n=e.error,o=e.mutate,p=f((0,c.useState)(!1),2),d=p[0],h=p[1],y=f((0,r.Z)(""),2),v=y[0],E=y[1],b=f((0,r.Z)(""),2),w=b[0],g=b[1],S=f((0,c.useState)(""),2),_=S[0],I=S[1],C=(0,c.useCallback)((function(e){e.preventDefault(),h(!1),u().post("".concat(m.T,"/api/users/login"),{email:v,password:w},{withCredentials:!0}).then((function(e){console.log(e),o()})).catch((function(e){I(e.response.data),h(!0)}))}),[v,w,o]);return!n&&t?c.createElement(i.l_,{to:"/workspace/sleact/channel/일반"}):c.createElement("div",{id:"container"},c.createElement(a.h4,null,"Sleact"),c.createElement(a.l0,{onSubmit:C},c.createElement(a.__,{id:"email-label"},c.createElement("span",null,"이메일 주소"),c.createElement("div",null,c.createElement(a.II,{type:"email",id:"email",name:"email",value:v,onChange:E}))),c.createElement(a.__,{id:"password-label"},c.createElement("span",null,"비밀번호"),c.createElement("div",null,c.createElement(a.II,{type:"password",id:"password",name:"password",value:w,onChange:g})),d&&c.createElement(a.jj,null,_)),c.createElement(a.zx,{type:"submit"},"로그인")),c.createElement(a.rU,null,"아직 회원이 아니신가요? ",c.createElement("a",{href:"/signup"},"회원가입 하러가기")))}}}]);