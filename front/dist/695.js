"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[695],{38678:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(67294);function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}const o=function(n){var e,t,o=(e=(0,r.useState)(n),t=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(n){l=!0,a=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return a(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],l=o[1];return[i,(0,r.useCallback)((function(n){l(n.target.value)}),[]),l]}},29695:(n,e,t)=>{t.r(e),t.d(e,{default:()=>f});var r=t(38678),a=t(73046),o=t(83564),i=t(9669),l=t.n(i),u=t(67294),s=t(5977),c=t(8100);function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(n){l=!0,a=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(n,e)||function(n,e){if(n){if("string"==typeof n)return d(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}const f=function(){var n=(0,c.ZP)("http://localhost:3095/api/users",o.Z,{dedupingInterval:1e6}),e=n.data,t=n.error,i=n.mutate,d=p((0,u.useState)(!1),2),f=d[0],h=d[1],m=p((0,r.Z)(""),2),g=m[0],b=m[1],x=p((0,r.Z)(""),2),v=x[0],y=x[1],w=p((0,u.useState)(""),2),_=w[0],k=w[1],E=(0,u.useCallback)((function(n){n.preventDefault(),h(!1),l().post("http://localhost:3095/api/users/login",{email:g,password:v},{withCredentials:!0}).then((function(n){console.log(n),i()})).catch((function(n){k(n.response.data),h(!0)}))}),[g,v,i]);return!t&&e?u.createElement(s.l_,{to:"/workspace/sleact/channel/일반"}):u.createElement("div",{id:"container"},u.createElement(a.h4,null,"Sleact"),u.createElement(a.l0,{onSubmit:E},u.createElement(a.__,{id:"email-label"},u.createElement("span",null,"이메일 주소"),u.createElement("div",null,u.createElement(a.II,{type:"email",id:"email",name:"email",value:g,onChange:b}))),u.createElement(a.__,{id:"password-label"},u.createElement("span",null,"비밀번호"),u.createElement("div",null,u.createElement(a.II,{type:"password",id:"password",name:"password",value:v,onChange:y})),f&&u.createElement(a.jj,null,_)),u.createElement(a.zx,{type:"submit"},"로그인")),u.createElement(a.rU,null,"아직 회원이 아니신가요? ",u.createElement("a",{href:"/signup"},"회원가입 하러가기")))}},73046:(n,e,t)=>{t.d(e,{h4:()=>f,l0:()=>h,__:()=>m,II:()=>g,zx:()=>b,jj:()=>x,fB:()=>v,rU:()=>y});var r,a,o,i,l,u,s,c,p=t(76741);function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var f=p.Z.header(r||(r=d(["\n  text-align: center;\n  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 46px;\n  letter-spacing: -0.75px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n"]))),h=p.Z.form(a||(a=d(["\n  margin: 0 auto;\n  width: 400px;\n  max-width: 400px;\n"]))),m=p.Z.label(o||(o=d(["\n  margin-bottom: 16px;\n  & > span {\n    display: block;\n    text-align: left;\n    padding-bottom: 8px;\n    font-size: 15px;\n    cursor: pointer;\n    line-height: 1.46666667;\n    font-weight: 700;\n  }\n"]))),g=p.Z.input(i||(i=d(["\n  border-radius: 4px;\n  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);\n  border: 1px solid var(--saf-0);\n  transition: border 80ms ease-out, box-shadow 80ms ease-out;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  width: 100%;\n  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);\n  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);\n  padding: 12px;\n  height: 44px;\n  padding-top: 11px;\n  padding-bottom: 13px;\n  font-size: 18px;\n  line-height: 1.33333333;\n  &:focus {\n    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);\n  }\n"]))),b=p.Z.button(l||(l=d(["\n  margin-bottom: 12px;\n  width: 100%;\n  max-width: 100%;\n  color: #fff;\n  background-color: #4a154b;\n  border: none;\n  font-size: 18px;\n  font-weight: 900;\n  height: 44px;\n  min-width: 96px;\n  padding: 0 16px 3px;\n  transition: all 80ms linear;\n  user-select: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n  z-index: 1000;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n  &:hover {\n    background-color: rgba(74, 21, 75, 0.9);\n    border: none;\n  }\n  &:focus {\n    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);\n  }\n"]))),x=p.Z.div(u||(u=d(["\n  color: #e01e5a;\n  margin: 8px 0 16px;\n  font-weight: bold;\n"]))),v=p.Z.div(s||(s=d(["\n  color: #2eb67d;\n  font-weight: bold;\n"]))),y=p.Z.p(c||(c=d(["\n  font-size: 13px;\n  color: #616061;\n  margin: 0 auto 8px;\n  width: 400px;\n  max-width: 400px;\n  & a {\n    color: #1264a3;\n    text-decoration: none;\n    font-weight: 700;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])))},83564:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(9669),a=t.n(r);const o=function(n){return a().get(n,{withCredentials:!0}).then((function(n){return n.data}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjk1LmpzIiwibWFwcGluZ3MiOiI0UEFXQSxRQVJpQixTQUFVQSxHQUN6QixJLElBQUEsRyxHQUEwQkMsRUFBQUEsRUFBQUEsVUFBU0QsRyxFQUFuQyxFLDh6QkFBT0UsRUFBUCxLQUFjQyxFQUFkLEtBSUEsTUFBTyxDQUFDRCxHQUhRRSxFQUFBQSxFQUFBQSxjQUFZLFNBQUNDLEdBQzNCRixFQUFTRSxFQUFFQyxPQUFPSixTQUNqQixJQUNxQkMsSyxta0NDbUUxQixRQW5FYyxXQUNaLE9BSUlJLEVBQUFBLEVBQUFBLElBQU8sa0NBQW1DQyxFQUFBQSxFQUFTLENBQ3JEQyxpQkFBa0IsTUFKWkMsRUFEUixFQUNFQyxLQUNBQyxFQUZGLEVBRUVBLE1BQ0FDLEVBSEYsRUFHRUEsT0FJRixLQUFvQ1osRUFBQUEsRUFBQUEsV0FBUyxHQUE3QyxHQUFPYSxFQUFQLEtBQW1CQyxFQUFuQixLQUNBLEtBQStCQyxFQUFBQSxFQUFBQSxHQUFTLElBQXhDLEdBQU9DLEVBQVAsS0FBY0MsRUFBZCxLQUNBLEtBQXFDRixFQUFBQSxFQUFBQSxHQUFTLElBQTlDLEdBQU9HLEVBQVAsS0FBaUJDLEVBQWpCLEtBQ0EsS0FBK0JuQixFQUFBQSxFQUFBQSxVQUFTLElBQXhDLEdBQU9vQixFQUFQLEtBQWlCQyxFQUFqQixLQUNNQyxHQUFXbkIsRUFBQUEsRUFBQUEsY0FDZixTQUFDQyxHQUNDQSxFQUFFbUIsaUJBQ0ZULEdBQWMsR0FDZFUsSUFBQUEsS0FFSSx3Q0FDQSxDQUFFUixNQUFBQSxFQUFPRSxTQUFBQSxHQUNULENBQ0VPLGlCQUFpQixJQUdwQkMsTUFBSyxTQUFDQyxHQUNMQyxRQUFRQyxJQUFJRixHQUNaZixPQUVEa0IsT0FBTSxTQUFDbkIsR0FDTlUsRUFBV1YsRUFBTWdCLFNBQVNqQixNQUMxQkksR0FBYyxRQUdwQixDQUFDRSxFQUFPRSxFQUFVTixJQUdwQixPQUFLRCxHQUFTRixFQUNMLGdCQUFDLEtBQUQsQ0FBVXNCLEdBQUcsaUNBSXBCLHVCQUFLQyxHQUFHLGFBQ04sZ0JBQUMsS0FBRCxlQUNBLGdCQUFDLEtBQUQsQ0FBTVYsU0FBVUEsR0FDZCxnQkFBQyxLQUFELENBQU9VLEdBQUcsZUFDUixzQ0FDQSwyQkFDRSxnQkFBQyxLQUFELENBQU9DLEtBQUssUUFBUUQsR0FBRyxRQUFRRSxLQUFLLFFBQVFqQyxNQUFPZSxFQUFPbUIsU0FBVWxCLE1BR3hFLGdCQUFDLEtBQUQsQ0FBT2UsR0FBRyxrQkFDUixvQ0FDQSwyQkFDRSxnQkFBQyxLQUFELENBQU9DLEtBQUssV0FBV0QsR0FBRyxXQUFXRSxLQUFLLFdBQVdqQyxNQUFPaUIsRUFBVWlCLFNBQVVoQixLQUVqRk4sR0FBYyxnQkFBQyxLQUFELEtBQVFPLElBRXpCLGdCQUFDLEtBQUQsQ0FBUWEsS0FBSyxVQUFiLFFBRUYsZ0JBQUMsS0FBRCxzQkFFRSxxQkFBR0csS0FBSyxXQUFSLGlCLGtQQ25FRCxJQUFNQyxFQUFTQyxFQUFBQSxFQUFBQSxPQUFILGlSQVdOQyxFQUFPRCxFQUFBQSxFQUFBQSxLQUFILDJFQU1KRSxFQUFRRixFQUFBQSxFQUFBQSxNQUFILG9PQWFMRyxFQUFRSCxFQUFBQSxFQUFBQSxNQUFILGtyQkFzQkxJLEVBQVNKLEVBQUFBLEVBQUFBLE9BQUgsZ3BCQTZCTkssRUFBUUwsRUFBQUEsRUFBQUEsSUFBSCxrRkFNTE0sRUFBVU4sRUFBQUEsRUFBQUEsSUFBSCwyREFLUE8sRUFBT1AsRUFBQUEsRUFBQUEsRUFBSCxzUSx3REMxRmpCLFFBRmdCLFNBQUNRLEdBQUQsT0FBaUJ0QixJQUFBQSxJQUFVc0IsRUFBSyxDQUFFckIsaUJBQWlCLElBQVFDLE1BQUssU0FBQ0MsR0FBRCxPQUFjQSxFQUFTakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ob29rcy91c2VJbnB1dC50cyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9wYWdlcy9Mb2dJbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vcGFnZXMvU2lnblVwL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vdXRpbHMvZmV0Y2hlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBSZXR1cm5UeXBlczxUID0gYW55PiA9IFtULCAoZTogYW55KSA9PiB2b2lkLCBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxUPj5dO1xuY29uc3QgdXNlSW5wdXQgPSA8VCA9IGFueT4oaW5pdGlhbERhdGE6IFQpOiBSZXR1cm5UeXBlczxUPiA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XG4iLCJpbXBvcnQgdXNlSW5wdXQgZnJvbSAnQGhvb2tzL3VzZUlucHV0JztcbmltcG9ydCB7IEJ1dHRvbiwgRXJyb3IsIEZvcm0sIEhlYWRlciwgSW5wdXQsIExhYmVsLCBMaW5rIH0gZnJvbSAnQHBhZ2VzL1NpZ25VcC9zdHlsZXMnO1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHV0aWxzL2ZldGNoZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5jb25zdCBMb2dJbiA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGRhdGE6IHVzZXJEYXRhLFxuICAgIGVycm9yLFxuICAgIG11dGF0ZSxcbiAgfSA9IHVzZVNXUignaHR0cDovL2xvY2FsaG9zdDozMDk1L2FwaS91c2VycycsIGZldGNoZXIsIHtcbiAgICBkZWR1cGluZ0ludGVydmFsOiAxMDAwMDAwLCAvL2RlZHVwaW5nSW50ZXJ2YWzrgrTsl5DripQgY2FjaGXsl5DshJwg67aI65+s7Jio64ukXG4gIH0pO1xuICBjb25zdCBbbG9nSW5FcnJvciwgc2V0TG9nSW5FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XG4gIGNvbnN0IFtlcnJvck1zZywgb25FcnJvck1zZ10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldExvZ0luRXJyb3IoZmFsc2UpO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXG4gICAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA5NS9hcGkvdXNlcnMvbG9naW4nLFxuICAgICAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgIG11dGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgb25FcnJvck1zZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBzZXRMb2dJbkVycm9yKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFtlbWFpbCwgcGFzc3dvcmQsIG11dGF0ZV0sXG4gICk7XG5cbiAgaWYgKCFlcnJvciAmJiB1c2VyRGF0YSkge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvd29ya3NwYWNlL3NsZWFjdC9jaGFubmVsL+ydvOuwmFwiIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZGVyPlNsZWFjdDwvSGVhZGVyPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPExhYmVsIGlkPVwiZW1haWwtbGFiZWxcIj5cbiAgICAgICAgICA8c3Bhbj7snbTrqZTsnbwg7KO87IaMPC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxMYWJlbCBpZD1cInBhc3N3b3JkLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4+67mE67CA67KI7Zi4PC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xvZ0luRXJyb3IgJiYgPEVycm9yPntlcnJvck1zZ308L0Vycm9yPn1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+66Gc6re47J24PC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgICA8TGluaz5cbiAgICAgICAg7JWE7KeBIO2ajOybkOydtCDslYTri4jsi6DqsIDsmpQ/Jm5ic3A7XG4gICAgICAgIDxhIGhyZWY9XCIvc2lnbnVwXCI+7ZqM7JuQ6rCA7J6FIO2VmOufrOqwgOq4sDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogU2xhY2stTGFyc3NlaXQsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIFNlZ29lIFVJLCBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICYgPiBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMS40NjY2NjY2NztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2hpZ2hfc29saWQsIDEzNCwgMTM0LCAxMzQpLCAxKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2FmLTApO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgODBtcyBlYXNlLW91dCwgYm94LXNoYWRvdyA4MG1zIGVhc2Utb3V0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDAgMCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHJnYmEodmFyKC0tc2tfcHJpbWFyeV9mb3JlZ3JvdW5kLCAyOSwgMjgsIDI5KSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2tfcHJpbWFyeV9iYWNrZ3JvdW5kLCAyNTUsIDI1NSwgMjU1KSwgMSk7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGhlaWdodDogNDRweDtcbiAgcGFkZGluZy10b3A6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzMzO1xuICAmOmZvY3VzIHtcbiAgICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2hpZ2hsaWdodCwgMTgsIDEwMCwgMTYzKSwgMSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXNhZi0wKSwgMCAwIDAgNXB4IHJnYmEoMjksIDE1NSwgMjA5LCAwLjMpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTE1NGI7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1pbi13aWR0aDogOTZweDtcbiAgcGFkZGluZzogMCAxNnB4IDNweDtcbiAgdHJhbnNpdGlvbjogYWxsIDgwbXMgbGluZWFyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDIxLCA3NSwgMC45KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19oaWdobGlnaHQsIDE4LCAxMDAsIDE2MyksIDEpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1zYWYtMCksIDAgMCAwIDVweCByZ2JhKDI5LCAxNTUsIDIwOSwgMC4zKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEVycm9yID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNlMDFlNWE7XG4gIG1hcmdpbjogOHB4IDAgMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5leHBvcnQgY29uc3QgU3VjY2VzcyA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjMmViNjdkO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2MTYwNjE7XG4gIG1hcmdpbjogMCBhdXRvIDhweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICAmIGEge1xuICAgIGNvbG9yOiAjMTI2NGEzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpO1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyO1xuIl0sIm5hbWVzIjpbImluaXRpYWxEYXRhIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidXNlU1dSIiwiZmV0Y2hlciIsImRlZHVwaW5nSW50ZXJ2YWwiLCJ1c2VyRGF0YSIsImRhdGEiLCJlcnJvciIsIm11dGF0ZSIsImxvZ0luRXJyb3IiLCJzZXRMb2dJbkVycm9yIiwidXNlSW5wdXQiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJlcnJvck1zZyIsIm9uRXJyb3JNc2ciLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJ0byIsImlkIiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSIsImhyZWYiLCJIZWFkZXIiLCJzdHlsZWQiLCJGb3JtIiwiTGFiZWwiLCJJbnB1dCIsIkJ1dHRvbiIsIkVycm9yIiwiU3VjY2VzcyIsIkxpbmsiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9