(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{165:function(e,t,c){},166:function(e,t){},172:function(e,t){},174:function(e,t){},185:function(e,t){},187:function(e,t){},214:function(e,t){},216:function(e,t){},217:function(e,t){},222:function(e,t){},224:function(e,t){},230:function(e,t){},232:function(e,t){},251:function(e,t){},263:function(e,t){},266:function(e,t){},270:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(16),a=c.n(o),r=c(14),l=c(289),s=c(292),i=c(291),j=c(290),u=c(286),d=(c(91),c(287)),b=c(3),h=c(147),O=c(288),f=c(43),p=c(51),x=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=(t[0],t[1],Object(n.useState)(!1)),o=Object(r.a)(c,2),a=o[0],x=o[1],g=Object(n.useState)("ggg"),m=Object(r.a)(g,2),y=m[0],v=m[1],C=Object(n.useRef)(null),_=Object(n.useState)([]),E=Object(r.a)(_,2),S=E[0],R=E[1],N=Object(n.useState)([]),A=Object(r.a)(N,2),w=A[0],P=A[1],L=Object(n.useState)(""),B=Object(r.a)(L,2),T=B[0],k=B[1],D=Object(n.useState)(""),F=Object(r.a)(D,2),I=F[0],U=F[1],K=Object(n.useState)(""),G=Object(r.a)(K,2),H=G[0],J=G[1],z=Object(n.useState)(""),Y=Object(r.a)(z,2),q=Y[0],M=Y[1],V=Object(n.useState)(""),W=Object(r.a)(V,2),Q=W[0],X=W[1],Z=Object(n.useState)(""),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ce=Object(n.useState)(null),ne=Object(r.a)(ce,2),oe=ne[0],ae=ne[1],re=Object(n.useState)(!1),le=Object(r.a)(re,2),se=le[0],ie=le[1],je=Object(n.useState)([]),ue=Object(r.a)(je,2),de=ue[0],be=ue[1];Object(n.useEffect)((function(){return console.log(f),O.a.get(f.REACT_APP_BACKEND_URL).then((function(e){console.log(e.data);var t=e.data;k(t),console.log(t),console.log("page",T)})).catch((function(e){console.error(e)})),function(){}}),[]),Object(n.useEffect)((function(){console.log("pageid",T)}),[T]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(l.a,{show:se,cancel:function(){ie(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(b.jsx)(l.a.Header,{closeButton:!0,children:Object(b.jsx)(l.a.Title,{id:"contained-modal-title-vcenter",children:"Logout"})}),Object(b.jsxs)(l.a.Body,{children:[Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50px",marginBottom:"20px"},children:[Object(b.jsx)("h5",{style:{marginRight:"10px"},children:"Click this button to submit your request"}),Object(b.jsx)(d.a,{style:{backgroundColor:"#e6f2ff",color:"#000000",padding:"10px 20px",border:"none",borderRadius:"4px",fontSize:"16px",cursor:"pointer",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",transition:"background-color 0.3s ease"},onClick:function(){!function(){var e=oe,t=new FormData,c=[T,I,H,q,Q,ee,S,w];console.log(c),t.append("uploadLocation",JSON.stringify(c)),t.append("file",e),O.a.post(f.REACT_APP_BACKEND_URL+"/oop",t).then((function(e){console.log(e.data)})).catch((function(e){console.error(e)}))}();var e=setInterval((function(){w.length===de.length+1?clearInterval(e):function(){var e={pageid:T};O.a.post(f.REACT_APP_BACKEND_URL+"/getLogs",e).then((function(e){console.log(e.data),be(e.data)})).catch((function(e){console.error(e)}))}()}),2e3)},children:"Send Email"})]}),Object(b.jsxs)(s.a,{style:{width:"100%",background:"#EAF2F8"},children:[Object(b.jsxs)(s.a.Title,{children:["Your Logs will appear as soon as you submit your request",Object(b.jsx)("br",{})]}),Object(b.jsx)(s.a.Body,{children:de.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[e,Object(b.jsx)("br",{})]})}))})]})]}),Object(b.jsx)(l.a.Footer,{children:Object(b.jsx)(d.a,{onClick:function(){ie(!1)},children:"Cancel"})})]}),a&&Object(b.jsxs)(i.a,{ref:C,variant:"Primary",children:[Object(b.jsx)(d.a,{onClick:function(){x(!1)},variant:"link",className:"close","aria-label":"Close",children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),y]}),Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(b.jsx)(s.a,{style:{width:"28rem",background:"#EAF2F8"},children:Object(b.jsxs)(s.a.Body,{children:[Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(j.a.Label,{children:"Email address"}),Object(b.jsx)(j.a.Control,{type:"email",placeholder:"Enter email",value:I,onChange:function(e){U(e.target.value),console.log(I)}}),Object(b.jsx)(j.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicPassword",value:H,children:[Object(b.jsx)(j.a.Label,{children:"Password"}),Object(b.jsx)(j.a.Control,{type:"password",placeholder:"Password",value:H,onChange:function(e){return J(e.target.value)}})]}),Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formCc",children:[Object(b.jsx)(j.a.Label,{children:"CC"}),Object(b.jsx)(j.a.Control,{type:"text",value:q,onChange:function(e){return M(e.target.value)}})]}),Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formSubject",children:[Object(b.jsx)(j.a.Label,{children:"Subject"}),Object(b.jsx)(j.a.Control,{type:"text",value:Q,onChange:function(e){return X(e.target.value)}})]}),Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBody",children:[Object(b.jsx)(j.a.Label,{children:"Body"}),Object(b.jsx)(j.a.Control,{as:"textarea",rows:5,value:ee,onChange:function(e){return te(e.target.value)}})]}),Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(j.a.Label,{children:"Upload you excell with recepietient emails in column1"}),Object(b.jsx)(j.a.Control,{type:"file",placeholder:"Upload your file",onChange:function(e){!function(e){new Promise((function(t,c){var n=new FileReader;n.readAsArrayBuffer(e),n.onload=function(e){var c=e.target.result,n=p.a(c,{type:"array"}),o=n.SheetNames[0],a=Object.keys(n);console.log("cells",a);var r=n.Sheets[o],l=p.b.sheet_to_json(r,{skipHeader:!1,header:"A"});P(l);var s=p.b.json_to_sheet(l);console.log("x",s),p.b.sheet_to_json(r),console.log(l);var i=[];Object.keys(l[0]).forEach((function(e){var t=l[0][e],c="{".concat(String(t),"}");i.push(c)})),R([].concat(i)),t(l)},n.onerror=function(e){c(e)}})).then((function(e){}))}(e.target.files[0])},accept:".xlsx, .xls"})]}),Object(b.jsxs)(s.a,{style:{width:"25rem",background:"white",minHeight:"10rem"},children:[Object(b.jsxs)(s.a.Title,{style:{fontSize:"12px"},children:["Your Keys will display here once u upload excel",Object(b.jsx)(h.a,{onClick:function(){console.log("heh"),O.a.post(f.REACT_APP_BACKEND_URL+"/oop",{variable1:"value1",variable2:"value2"}).then((function(e){console.log(e.data)})).catch((function(e){console.error(e)})),v("The Keys are basically variables that you should replace in your email body and attachment file in order for us to use them and fetch information from the excel you uploaded , you can change your columnnames , if u wish to have different names"),console.log("gdgdggd"),x(!0)}})]}),Object(b.jsx)(s.a.Body,{children:Object(b.jsxs)(u.a,{children:["Replace Values in your email with these variables",Object(b.jsx)("tbody",{children:S.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"{".concat(e.toLowerCase().replace(/\s/g,""),"}")}),Object(b.jsx)("br",{})]})}))})]})})]}),Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(j.a.Label,{children:"Upload you sample doc file replacing the variables"}),Object(b.jsx)(j.a.Control,{type:"file",placeholder:"Upload your file",accept:".docx,.doc",onChange:function(e){console.log("some changed"),ae(e.target.files[0])}})]}),Object(b.jsx)(d.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(b.jsx)("button",{onClick:function(){console.log(q),console.log(Q),console.log(H),ie(!0)},children:"Open Modal"})]})})})]})};c(165);function g(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(x,{})})}var m=c(146);c.n(m).a.config();var y=document.getElementById("root");a.a.render(Object(b.jsx)(n.StrictMode,{children:Object(b.jsx)(g,{})}),y)},43:function(e){e.exports=JSON.parse('{"SERVER_FOLDER_PATH":"D:/react-projects/0.0.7_0/myapp/heyhey/server","FRONTEND_FOLDER_PATH":"D:/react-projects/0.0.7_0/myapp/heyhey/frontend","PYTHON_SCRIPTS_FOLDER_PATH":"D:/react-projects/0.0.7_0/myapp/heyhey/pythonscripts","FRONTEND_URL":"http://localhost:3000","REACT_APP_BACKEND_URL":"http://localhost:9000","FRONTEND_PORT":3000,"BACKEND_PORT":9000}')}},[[270,1,2]]]);
//# sourceMappingURL=main.a45ab2d4.chunk.js.map