(this["webpackJsonpword-world"]=this["webpackJsonpword-world"]||[]).push([[0],[,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(4),c=a.n(s),l=a(2),r=JSON.stringify([{id:1,name:"admin1",email:"admin@abc.pl",password:"A123456a"},{id:2,name:"test1",email:"test@abc.pl",password:"A123456a"}]),o=JSON.stringify([{id:1,title:"Title1",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere nisi vel arcu lacinia rhoncus. Vestibulum finibus mi at justo ultricies facilisis in sed lacus. Integer vestibulum vitae nisi mollis ultrices. Donec urna lectus, rutrum non nisl ut, luctus varius libero. Etiam accumsan aliquet tincidunt. Donec id lectus hendrerit neque tincidunt vestibulum nec eu est. Duis in blandit mauris. Maecenas gravida magna at malesuada bibendum. Donec mattis erat nec mi sollicitudin, vel varius magna scelerisque. Donec tincidunt quam sem, et volutpat metus egestas vel. ",author:"Cov",date:"2021-07-18 14:06:26"},{id:2,title:"Title2",text:"Pellentesque at tortor purus. Proin eu nibh condimentum, condimentum nunc non, semper tortor. Etiam in odio non odio ultrices iaculis. Praesent tempor, nisl quis vestibulum pellentesque, leo urna iaculis felis, sit amet fringilla orci enim id urna. Morbi ligula arcu, ornare sed magna vel, elementum egestas arcu. In iaculis orci purus, vel posuere quam semper non. Aliquam facilisis tellus sit amet lacus consequat convallis. Morbi ut urna odio. Proin sit amet tempus libero. Suspendisse aliquam ligula eu neque accumsan, sit amet cursus urna semper. Maecenas fringilla auctor orci, in rhoncus justo condimentum egestas. Vestibulum auctor ac sem nec sagittis. Nulla facilisi. Quisque ornare ante sed ex efficitur rutrum. Nulla facilisi. ",author:"Cov",date:"2021-07-18 14:06:26"},{id:3,title:"Title3",text:"Pellentesque at tortor purus. Proin eu nibh condimentum, condimentum nunc non, semper tortor. Etiam in odio non odio ultrices iaculis. Praesent tempor, nisl quis vestibulum pellentesque, leo urna iaculis felis, sit amet fringilla orci enim id urna. Morbi ligula arcu, ornare sed magna vel, elementum egestas arcu. In iaculis orci purus, vel posuere quam semper non. Aliquam facilisis tellus sit amet lacus consequat convallis. Morbi ut urna odio. Proin sit amet tempus libero. Suspendisse aliquam ligula eu neque accumsan, sit amet cursus urna semper. Maecenas fringilla auctor orci, in rhoncus justo condimentum egestas. Vestibulum auctor ac sem nec sagittis. Nulla facilisi. Quisque ornare ante sed ex efficitur rutrum. Nulla facilisi. ",author:"Cov",date:"2021-07-18 14:06:26"}]),u=JSON.stringify([{id:1,newChar:!0,name:"admin",race:"",class:""},{id:2,newChar:!0,name:"test1",race:"",class:""}]),m=(a(9),a(0));var d=function(){var e=Object(i.useState)(o),t=Object(l.a)(e,2),a=t[0],n=t[1];Object(i.useEffect)((function(){null!==localStorage.getItem("news")&&n(localStorage.getItem("news"))}),[]);var s=JSON.parse(a).map((function(e){return Object(m.jsxs)("div",{className:"frontNews__singleNews",children:[Object(m.jsx)("h2",{className:"frontNews__singleNews_title",children:e.title}),Object(m.jsx)("p",{className:"frontNews__singleNews_text",children:e.text}),Object(m.jsx)("span",{className:"frontNews__singleNews_description",children:e.date+" przez "+e.author})]})}));return Object(m.jsxs)("div",{className:"frontNews",children:[Object(m.jsx)("h1",{class:"frontNews__title",children:"Najnowsze wie\u015bci:"}),Object(m.jsx)("div",{className:"frontNews__list",children:s})]})};a(11);var j=function(){return Object(m.jsx)("div",{className:"frontInfo",children:Object(m.jsx)("p",{className:"frontInfo__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis placerat volutpat. In elit nibh, luctus ut ligula nec, tristique porta libero. Donec eu lacinia ante. Nunc ullamcorper aliquet mauris consequat mollis. In id euismod leo. Fusce massa odio, convallis eget sem ut, molestie cursus mauris. Maecenas pharetra ut nunc sed tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla nec urna arcu. Donec eu erat leo. Vivamus consectetur dapibus nunc ut porta. Ut tempor, mi eget convallis molestie, ipsum erat ornare nisi, vitae euismod orci nunc a diam. "})})},g=(a(12),a.p+"static/media/logoBg.9f5905a4.png"),b=a.p+"static/media/logoTextSqu.8bfc69db.png";var p=function(){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("img",{className:"header__pic",src:g,alt:""}),Object(m.jsx)("img",{className:"header__title",src:b,alt:""})]})};a(13),a(14);var v=function(e){var t,a=e.text,i=e.mod,n=e.onClick,s="login__btn";return t=""===i?s:"login__btn login__btn"+i,Object(m.jsx)("button",{className:t,onClick:n,children:a})};a(15);var O=function(e){var t=e.type,a=e.valid,i=e.onChange,n=e.lableText;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{className:"login__label",children:n}),Object(m.jsx)("input",{className:a?"login__input":"login__input login__input-invalid",type:t,onChange:i})]})},f=a.p+"static/media/login.0190a09b.png";var h=function(e){var t=e.handleToUpdate,a=Object(i.useState)(!0),n=Object(l.a)(a,2),s=n[0],c=n[1],r=Object(i.useState)(!0),o=Object(l.a)(r,2),u=o[0],d=o[1],j=Object(i.useState)(),g=Object(l.a)(j,2),b=g[0],p=g[1],h=Object(i.useState)(),x=Object(l.a)(h,2),_=x[0],N=x[1];return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("img",{className:"login__picBg",src:f,alt:""}),Object(m.jsxs)("div",{className:"login__formBox",children:[Object(m.jsxs)("form",{className:"login__form",children:[Object(m.jsx)(O,{type:"text",lableText:"E-mail:",valid:u,onChange:function(e){var t=e.target.value;function a(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}a(t)||d(!1),a(t)&&(p(t),d(!0))}}),Object(m.jsx)(O,{type:"password",lableText:"Has\u0142o:",valid:s,onChange:function(e){var t=e.target.value,a=0;t.match(/[a-z]/g)?a++:a=0;t.match(/[A-Z]/g)?a++:a=0;t.match(/[0-9]/g)?a++:a=0,t.length>=8?a++:a=0,4===a?(c(!0),N(t)):c(!1)}})]}),void 0!==_&&void 0!==b&!0===u&&!0===s?Object(m.jsx)(v,{type:"submit",text:"Zaloguj",onClick:function(){return function(){var e=!1,a=JSON.parse(localStorage.getItem("login"));if(!e)for(var i=0;i<a.length;i++){var n=a[i];n.email===b&&n.password===_&&(localStorage.setItem("logged",!0),localStorage.setItem("loggedID",n.id),e=!0,t())}e||window.alert("Z\u0142y mail, albo has\u0142o!")}()}}):Object(m.jsx)(v,{text:"Zaloguj",mod:"-notValid"}),Object(m.jsx)(v,{mod:"",text:"Przypomnij Has\u0142o"})]})]})};a(16);var x=function(e){var t,a,i=e.text,n=e.mod,s=e.onClick,c=e.src,l="reg__btn";return t=void 0===n?l:"reg__btn reg__btn"+n,a=void 0===c?Object(m.jsx)("button",{className:t,onClick:s,children:i}):Object(m.jsxs)("button",{className:t+"-pic",onClick:s,children:[Object(m.jsx)("img",{src:c,alt:""}),Object(m.jsx)("span",{children:i})]}),Object(m.jsx)("div",{children:a})};a(17);var _=function(e){var t=e.type,a=e.valid,i=e.onChange,n=e.lableText,s="reg__input";return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{className:"reg__label",children:n}),Object(m.jsx)("input",{className:a?s:"reg__input reg__input-invalid",type:t,onChange:i})]})},N=(a(18),a.p+"static/media/regButton.6e6ef142.png"),S=a.p+"static/media/reg.4ea18118.png";var w=function(){var e=Object(i.useState)(!0),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)(!0),c=Object(l.a)(s,2),r=c[0],o=c[1],u=Object(i.useState)(!0),d=Object(l.a)(u,2),j=d[0],g=d[1],b=Object(i.useState)(),p=Object(l.a)(b,2),v=p[0],O=p[1],f=Object(i.useState)(),h=Object(l.a)(f,2),w=h[0],I=h[1],y=Object(i.useState)(),C=Object(l.a)(y,2),q=C[0],D=C[1],z=Object(i.useState)(!1),T=Object(l.a)(z,2),k=T[0],J=T[1];return Object(m.jsxs)("div",{className:"reg",children:[Object(m.jsx)(x,{text:"Rejestracja",onClick:function(){return J(!k)},src:N,alt:""}),Object(m.jsx)("div",{className:"reg__wrapper",style:k?{diplay:"block"}:{display:"none"},children:Object(m.jsxs)("div",{className:"reg__formBox",children:[Object(m.jsx)("img",{className:"reg__picBg",src:S,alt:""}),Object(m.jsx)(x,{mod:"-exit",text:"X",onClick:function(){return J(!k)}}),Object(m.jsxs)("div",{className:"reg__form",children:[Object(m.jsxs)("form",{children:[Object(m.jsx)(_,{type:"text",lableText:"Imi\u0119 Postaci:",valid:j,onChange:function(e){var t=e.target.value,a=0,i=t.split(""),n=/[a-z]/g;if(i.length>1)for(var s=1;s<i.length;s++)a=i[s].match(n)?1:0;t.length>=3?a++:a=0;i.length>0&&(i[0].match(/[A-Z]/g)?a++:a=0);t.match(/^[A-Za-z]+$/)?a++:a=0,4===a?(g(!0),I(t)):g(!1)}}),Object(m.jsx)(_,{type:"text",lableText:"E-mail:",valid:r,onChange:function(e){var t=e.target.value;function a(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}a(t)||o(!1),a(t)&&(O(t),o(!0))}}),Object(m.jsx)(_,{type:"password",lableText:"Has\u0142o:",valid:a,onChange:function(e){var t=e.target.value,a=0;t.match(/[a-z]/g)?a++:a=0;t.match(/[A-Z]/g)?a++:a=0;t.match(/[0-9]/g)?a++:a=0,t.length>=8?a++:a=0,4===a?(n(!0),D(t)):n(!1)}})]}),void 0!==q&&void 0!==v&&void 0!==w&!0===r&&!0===a&&!0===j?Object(m.jsx)(x,{text:"Zarejestruj",onClick:function(){console.log();for(var e=!1,t=JSON.parse(localStorage.getItem("login")),a=0;a<t.length;a++){var i=t[a];e||i.email===v&&(e=!0)}if(e)window.alert("Istnieje konto zarejestrowane na tym mailu!");else{var n=t,s=JSON.parse(localStorage.getItem("playerData")),c=t[t.length-1].id;n.push({id:c+1,name:w,email:v,password:q}),localStorage.setItem("login",JSON.stringify(n)),s.push({id:c+1,newChar:!0,name:w,race:"",class:""}),localStorage.setItem("playerData",JSON.stringify(s)),J(!1)}}}):Object(m.jsx)(x,{text:"Zarejestruj",mod:"-notValid"})]})]})})]})};a(19);var I=function(e){var t,a,n=e.handleToUpdate,s=Object(i.useState)(u),c=Object(l.a)(s,2),r=c[0],o=c[1];Object(i.useEffect)((function(){null!==localStorage.getItem("playerData")&&o(localStorage.getItem("playerData"))}),[]);var d=JSON.parse(localStorage.getItem("loggedID"));return JSON.parse(r).map((function(e){e.id===d&&(t=e.name),a=e.newChar})),Object(m.jsxs)("div",{className:"gamePage",children:[Object(m.jsxs)("h1",{children:["Witaj: ",t]}),a?"Tutaj b\u0119dzie miejsce na stworzenie postaci":"Tutaj b\u0119dzie miejsce na stworzon\u0105 posta\u0107",Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){return localStorage.removeItem("loggedID"),localStorage.removeItem("logged"),void n()},children:"LogOut"})})]})};a(20),a(21);var y=function(){return Object(m.jsx)("div",{className:"footer",children:"a"})};var C=function(){var e=Object(i.useState)(localStorage.getItem("logged")),t=Object(l.a)(e,2),a=t[0],n=t[1];Object(i.useEffect)((function(){null===localStorage.getItem("login")&&localStorage.setItem("login",r),null===localStorage.getItem("news")&&localStorage.setItem("news",o),null===localStorage.getItem("playerData")&&localStorage.setItem("playerData",u)}),[]);var s=function(){n(localStorage.getItem("logged"))},c=Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{style:{display:"block",margin:"auto",maxWidth:"62.5rem",position:"relative"},children:[Object(m.jsx)(h,{handleToUpdate:s}),Object(m.jsx)(w,{})]}),Object(m.jsxs)("div",{className:"frontData",children:[Object(m.jsx)(j,{}),Object(m.jsx)(d,{})]}),Object(m.jsx)(y,{})]});return Object(m.jsx)("div",{children:a?Object(m.jsx)(I,{handleToUpdate:s}):c})};c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.4de892ee.chunk.js.map