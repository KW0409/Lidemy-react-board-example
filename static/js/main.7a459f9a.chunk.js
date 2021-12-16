(this["webpackJsonpboard-app"]=this["webpackJsonpboard-app"]||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var o,r,a,c,i,s,d,l,p,b,x,j,u,g,f=t(0),h=t.n(f),O=t(9),m=t.n(O),v=t(7),w=t(2),k=t(3),y=t(1),E=k.a.div(o||(o=Object(w.a)(['\n  max-width: 800px;\n  margin: 0 auto;\n  font-family: "monospace", "\u5fae\u8edf\u6b63\u9ed1\u9ad4";\n  box-shadow: 0px 0px 16px rgb(199, 197, 197);\n  border-radius: 8px;\n  padding: 12px 28px;\n  padding-bottom: 24px;\n  color: #6c6c6c;\n  box-sizing: border-box;\n']))),S=k.a.h1(r||(r=Object(w.a)(["\n  text-align: center;\n"]))),D=k.a.form(a||(a=Object(w.a)(["\n  margin-top: 16px;\n  font-size: 18px;\n"]))),z=k.a.div(c||(c=Object(w.a)([""]))),M=k.a.textarea(i||(i=Object(w.a)(["\n  display: block;\n  margin-top: 8px;\n  min-width: 95%;\n  max-width: 100%;\n  border-color: rgba(0, 0, 0, 0.125);\n"]))),R=k.a.button(s||(s=Object(w.a)(["\n  margin-top: 8px;\n  color: #ddd;\n  background-color: #343a40;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 16px;\n  padding: 6px 12px;\n"]))),T=k.a.div(d||(d=Object(w.a)(["\n  margin-top: 16px;\n"]))),J=k.a.div(l||(l=Object(w.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  padding: 10px 16px;\n  border-radius: 4px;\n  & + & {\n    margin-top: 16px;\n  }\n"]))),L=k.a.div(p||(p=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n"]))),_=k.a.div(b||(b=Object(w.a)(["\n  margin-right: 12px;\n  color: #232323;\n  font-size: 20px;\n"]))),A=k.a.div(x||(x=Object(w.a)([""]))),q=k.a.div(j||(j=Object(w.a)(["\n  margin-top: 8px;\n  word-break: break-all;\n  white-space: pre-line;\n"]))),B=k.a.button(u||(u=Object(w.a)(["\n  margin-top: 8px;\n  color: #fff;\n  background-color: #da1f1f;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 14px;\n  padding: 3px 6px;\n  position: relative;\n  right: -95%;\n"]))),C=k.a.div(g||(g=Object(w.a)(["\n  margin-top: 16px;\n  font-size: 20px;\n  color: red;\n"])));function I(n){var e=n.message,t=n.handleDeleteMessage;if(!e)return null;return Object(y.jsxs)(J,{"data-id":e.id,children:[Object(y.jsxs)(L,{children:[Object(y.jsx)(_,{children:e.nickname}),Object(y.jsx)(A,{children:new Date(e.createdAt).toLocaleString()})]}),Object(y.jsx)(q,{children:e.body}),Object(y.jsx)(B,{onClick:function(){t(e.id)},children:"\u522a\u9664"})]})}var N="https://student-json-api.lidemy.me/comments";var P=function(){console.log("render");var n=Object(f.useState)(null),e=Object(v.a)(n,2),t=e[0],o=e[1],r=Object(f.useState)(null),a=Object(v.a)(r,2),c=a[0],i=a[1],s=Object(f.useRef)(),d=function(){return console.log("fetch"),fetch("".concat(N,"?_limit=10&_sort=createdAt&_order=desc")).then((function(n){return n.json()})).then((function(n){console.log("setData:",n),o(n)})).catch((function(n){console.log("setError"),i(n.toString())}))};Object(f.useLayoutEffect)((function(){d()}),[]);var l=function(n){fetch("".concat(N,"/").concat(n),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(n){if(!n.ok)throw new Error(n);return n.json()})).then((function(n){if(console.log("Message Delete!"),console.log("Resp Data:",n),0===n.ok)return alert("\u932f\u8aa4\uff1a\u7559\u8a00\u522a\u9664\u5931\u6557\uff01\nErr: ".concat(n.message));d()})).catch((function(n){return alert("\u932f\u8aa4\uff1a\u4f3a\u670d\u5668\u932f\u8aa4\uff01\nErr: ".concat(n.toString()))}))};return Object(y.jsxs)(E,{children:[Object(y.jsx)(S,{children:"React \u7559\u8a00\u677f"}),Object(y.jsxs)(D,{onSubmit:function(n){if(n.preventDefault(),!s.current.value)return alert("\u932f\u8aa4\uff1a\u7559\u8a00\u4e0d\u53ef\u70ba\u7a7a\u767d");fetch("".concat(N),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:"Tequila",body:s.current.value})}).then((function(n){if(!n.ok)throw new Error(n);return n.json()})).then((function(n){if(console.log("sendMessage success!"),console.log("Resp Data:",n),0===n.ok)return alert("\u932f\u8aa4\uff1a\u7559\u8a00\u9001\u51fa\u5931\u6557\uff01\nErr: ".concat(n.message));s.current.value="",d()})).catch((function(n){return console.log(n),alert("\u932f\u8aa4\uff1a\u4f3a\u670d\u5668\u932f\u8aa4\uff01\nErr: ".concat(n.toString()))}))},children:[Object(y.jsx)(z,{children:"\u7559\u8a00\u5167\u5bb9"}),Object(y.jsx)(M,{ref:s,rows:8}),Object(y.jsx)(R,{children:"\u9001\u51fa"})]}),c&&Object(y.jsx)(C,{children:c}),t&&0===t.length&&Object(y.jsx)("div",{style:{marginTop:"16px"},children:"\u76ee\u524d\u9084\u6c92\u6709\u4eba\u7559\u8a00\u5594\uff5e"}),Object(y.jsx)(T,{children:t&&t.map((function(n){return Object(y.jsx)(I,{message:n,handleDeleteMessage:l},n.id)}))})]})};m.a.render(Object(y.jsx)(h.a.StrictMode,{children:Object(y.jsx)(P,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7a459f9a.chunk.js.map