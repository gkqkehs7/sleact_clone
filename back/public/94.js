"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[94],{83094:function(t,e,n){n.r(e),n.d(e,{default:function(){return E}});var a=n(67294),r=n(5977),o=n(66482),l=(0,o.Z)("div",{target:"egh2dki2"})({name:"1a0r0eh",styles:"display:flex;flex-wrap:wrap;height:calc(100vh - 38px);flex-flow:column;position:relative"}),c=(0,o.Z)("header",{target:"egh2dki1"})({name:"1c17pcy",styles:"height:64px;display:flex;width:100%;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);padding:20px 16px 20px 20px;font-weight:bold;align-items:center;& img{margin-right:5px;}"}),i=(0,o.Z)("div",{target:"egh2dki0"})({name:"czjct4",styles:"position:absolute;top:64px;left:0;width:100%;height:calc(100% - 64px);background:white;opacity:0.7;display:flex;align-items:center;justify-content:center;font-size:40px"}),s=n(66182),u=n.n(s),f=n(8100),m=n(44593),p=n(83564),d=n(92309),h=n(32545),g=n(38678),v=n(9669),y=n.n(v),b=n(6501),w=n(32951),k=n(39249);function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,r,o=[],l=!0,c=!1;try{for(n=n.call(t);!(l=(a=n.next()).done)&&(o.push(a.value),!e||o.length!==e);l=!0);}catch(t){c=!0,r=t}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return o}}(t,e)||S(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){if(t){if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n(55202);var E=function(){var t,e,n,o=(0,r.UO)(),s=o.workspace,v=o.id,E=(0,f.ZP)("http://localhost:3095/api/workspaces/".concat(s,"/members/").concat(v),p.Z).data,Z=(0,f.ZP)("http://localhost:3095/api/users",p.Z).data,A=(0,m.ZP)((function(t){return"http://localhost:3095/api/workspaces/".concat(s,"/dms/").concat(v,"/chats?perPage=20&page=").concat(t+1)}),p.Z),C=A.data,D=A.mutate,I=A.setSize,j=x((0,a.useState)(!1),2),_=j[0],O=j[1],z=x((0,g.Z)(""),3),P=z[0],B=z[1],F=z[2],R=(0,a.useRef)(null),U=0===(null==C||null===(t=C[0])||void 0===t?void 0:t.length),M=U||C&&(null===(e=C[C.length-1])||void 0===e?void 0:e.length)<20,$=(0,a.useCallback)((function(t){t.preventDefault(),null!=P&&P.trim()&&y().post("http://localhost:3095/api/workspaces/".concat(s,"/dms/").concat(v,"/chats"),{content:P}).then((function(){D(),F(""),localStorage.setItem("".concat(s,"-").concat(v),(new Date).getTime().toString()),setTimeout((function(){var t;null===(t=R.current)||void 0===t||t.scrollToBottom()}),100)})).catch(console.error)}),[P]);console.log(C),(0,a.useEffect)((function(){localStorage.setItem("".concat(s,"-").concat(v),(new Date).getTime().toString())}),[s,v]);var q=x((0,w.Z)(s),1)[0],G=(0,a.useCallback)((function(t){D((function(e){return null==e||e[0].push(t),localStorage.setItem("".concat(s,"-").concat(v),(new Date).getTime().toString()),e}),!1).then((function(){k.Am.success("새 메시지가 도착했습니다.",{onClick:function(){var t;null===(t=R.current)||void 0===t||t.scrollToBottom()},closeOnClick:!0})}))}),[v,Z,D]);(0,a.useEffect)((function(){return null==q||q.on("dm",G),function(){null==q||q.off("dm",G)}}),[q,G]),(0,a.useEffect)((function(){var t;1===(null==C?void 0:C.length)&&(null===(t=R.current)||void 0===t||t.scrollToBottom())}),[C]);var H,J=(0,b.Z)(C?(n=[]).concat.apply(n,(H=C,function(t){if(Array.isArray(t))return T(t)}(H)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(H)||S(H)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).reverse():[]),K=(0,a.useCallback)((function(t){t.preventDefault();var e=new FormData;if(t.dataTransfer.items){for(var n=0;n<t.dataTransfer.items.length;n++)if("file"===t.dataTransfer.items[n].kind){var a=t.dataTransfer.items[n].getAsFile();e.append("image",a)}}else for(var r=0;r<t.dataTransfer.files.length;r++)e.append("image",t.dataTransfer.files[r]);y().post("http://localhost:3095/api/workspaces/".concat(s,"/dms/").concat(v,"/images"),e).then((function(){O(!1),localStorage.setItem("".concat(s,"-").concat(v),(new Date).getTime().toString())}))}),[s,v]),L=(0,a.useCallback)((function(t){console.log("드래그중"),t.preventDefault(),O(!0)}),[]);return E&&Z?a.createElement(l,{onDragOver:L,onDrop:K},a.createElement(c,null,a.createElement("img",{src:u().url(E.email,{s:"24px",d:"retro"}),alt:E.nickname}),a.createElement("span",null,E.nickname)),a.createElement(h.Z,{chatData:J,scrollbarRef:R,isReachingEnd:M,isEmpty:U,setSize:I}),a.createElement(k.Ix,{position:"bottom-center",limit:1}),a.createElement(d.Z,{chat:P,onChangeChat:B,onSubmitForm:$}),_&&a.createElement(i,null,"업로드!")):null}}}]);