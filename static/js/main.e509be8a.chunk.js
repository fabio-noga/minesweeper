(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{17:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(10),c=a.n(l),u=(a(17),a(2));function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return Math.floor(Math.random()*(t-e+1)+e)}var s=function(){var e=["orange","darkgreen","cyan","violet","yellow"];return e[Math.floor(Math.random()*e.length)]},o=a(1);function v(){return Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)("div",{style:{height:23,width:23,borderRadius:20,background:"rgba(0,0,0,0.4)"}})})}function d(e){var t=e.details,a=e.updateFlag,r=e.revealCell,n={background:t.revealed?"X"===t.value?s():y(t.x,t.y):f(t.x,t.y),color:g(t.value)};return Object(o.jsx)("div",{onClick:function(){return r(t.x,t.y)},onContextMenu:function(e){return a(e,t.x,t.y)},style:n,className:"cellStyle",children:!t.revealed&&t.flagged?"\ud83d\udea9":t.revealed&&0!==t.value?"X"===t.value?Object(o.jsx)(v,{}):t.value:""})}var x,y=function(e,t){return e%2===0&&t%2===0?"#e5c29f":e%2===0&&t%2!==0||e%2!==0&&t%2===0?"#d7b899":"#e5c29f"},f=function(e,t){return e%2===0&&t%2===0?"#aad751":e%2===0&&t%2!==0||e%2!==0&&t%2===0?"#a2d249":"#aad751"},g=function(e){return 1===e?"#1976d2":2===e?"#388d3c":3===e?"#d33030":4===e?"#7c21a2":5===e||6===e?"#1976d2":"white"};function j(e){var t=e.restartGame,a=Object(r.useState)(!1),n=Object(u.a)(a,2),l=n[0],c=n[1];return Object(r.useEffect)((function(){setTimeout((function(){c(!0)}),1e3)}),[]),Object(o.jsxs)("div",{style:{opacity:l?1:0,height:"100%",width:"100%",position:"absolute",background:"rgba(0,0,0,0.3)"},children:[Object(o.jsx)("div",{id:"gameOverImage"}),Object(o.jsx)("div",{className:"tryAgain",onClick:function(){return t()},children:"Play Again"})]})}function b(e){var t=e.gameOver,a=e.gameStarted,n=Object(r.useState)(0),l=Object(u.a)(n,2),c=l[0],i=l[1],s=Object(r.useState)(0),v=Object(u.a)(s,2),d=v[0],y=v[1];return Object(r.useEffect)((function(){c>0&&t&&(y(c),i(0))}),[t,c]),Object(r.useEffect)((function(){x=setTimeout((function(){!function(){var e=0;a&&(e=c+1),i(e)}()}),1e3),t&&clearInterval(x)}),[c,i,t,a]),Object(o.jsxs)("span",{role:"img","aria-label":"clock",style:{paddingRight:10},children:["AAAAAAAAAAAAAAAA\u23f0 ",t?d:c]})}function h(e){var t=e.gameOver,a=e.gameStarted,r=e.flagsUsed;return Object(o.jsx)("div",{style:{color:"white",fontSize:20,background:"#4a752c",padding:"10px 0",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",fontWeight:"bold"},children:Object(o.jsxs)("p",{style:{margin:"0"},children:[Object(o.jsxs)("span",{role:"img","aria-label":"flag",style:{paddingBottom:10,paddingRight:30},children:["\ud83d\udea9 ",r]}),Object(o.jsx)(b,{gameOver:t,gameStarted:a})]})})}var O=function(){var e=Object(r.useState)(10),t=Object(u.a)(e,2),a=t[0],n=(t[1],Object(r.useState)(10)),l=Object(u.a)(n,2),c=l[0],s=(l[1],Object(r.useState)(15)),v=Object(u.a)(s,2),x=v[0],y=(v[1],Object(r.useState)([])),f=Object(u.a)(y,2),g=f[0],b=f[1],O=Object(r.useState)(0),p=Object(u.a)(O,2),m=p[0],S=p[1],A=Object(r.useState)([]),w=Object(u.a)(A,2),X=w[0],C=w[1],k=Object(r.useState)(!1),M=Object(u.a)(k,2),N=M[0],J=M[1],E=Object(r.useState)(!1),I=Object(u.a)(E,2),F=I[0],R=I[1],B=Object(r.useState)(x),D=Object(u.a)(B,2),G=D[0],L=D[1];Object(r.useEffect)((function(){T(a,c,x)}),[]);var T=function(e,t,a){var r=function(e,t,a){for(var r=[],n=[],l=0;l<e;l++){for(var c=[],u=0;u<t;u++)c.push({value:0,revealed:!1,neighbors:[],x:l,y:u,flagged:!1});r.push(c)}for(var s=0;s<a;){var o=i(0,e-1),v=i(0,t-1);0===r[o][v].value&&(r[o][v].value="X",n.push([o,v]),s++)}for(var d=0;d<e;d++)for(var x=0;x<t;x++)"X"!==r[d][x].value&&(d>0&&"X"===r[d-1][x].value&&r[d][x].value++,d>0&&x<t-1&&"X"===r[d-1][x+1].value&&r[d][x].value++,x<t-1&&"X"===r[d][x+1].value&&r[d][x].value++,x<t-1&&d<e-1&&"X"===r[d+1][x+1].value&&r[d][x].value++,d<e-1&&"X"===r[d+1][x].value&&r[d][x].value++,d<e-1&&x>0&&"X"===r[d+1][x-1].value&&r[d][x].value++,x>0&&"X"===r[d][x-1].value&&r[d][x].value++,d>0&&x>0&&"X"===r[d-1][x-1].value&&r[d][x].value++);return{board:r,mineLocation:n}}(e,t,a);S(e*t-a),C(r.mineLocation),b(r.board)},U=function(e,t,a){if(e.preventDefault(),!g[t][a].revealed&&!N){var r=JSON.parse(JSON.stringify(g));r[t][a].flagged?(r[t][a].flagged=!1,L(G+1)):(r[t][a].flagged=!0,L(G-1)),b(r),console.log("Flag")}},z=function(e,t){if(!(g[e][t].revealed||N||g[e][t].flagged)){R(!0),console.log(F);var a=JSON.parse(JSON.stringify(g));if("X"===a[e][t].value){for(var r=0;r<X.length;r++)a[X[r][0]][X[r][1]].revealed=!0;b(a),J(!0)}else{var n=function(e,t,a,r){if(console.log(e[t][a]),!e[t][a].revealed){var n=[];for(n.push(e[t][a]);0!==n.length;){var l=n.pop();if(l.revealed||(r--,l.revealed=!0),0!==l.value)break;l.x>0&&l.y>0&&0===e[l.x-1][l.y-1].value&&!e[l.x-1][l.y-1].revealed&&n.push(e[l.x-1][l.y-1]),l.x<e.length-1&&l.y<e[0].length-1&&0===e[l.x+1][l.y+1].value&&!e[l.x+1][l.y+1].revealed&&n.push(e[l.x+1][l.y+1]),l.x<e.length-1&&l.y>0&&0===e[l.x+1][l.y-1].value&&!e[l.x+1][l.y-1].revealed&&n.push(e[l.x+1][l.y-1]),l.x>0&&l.y<e[0].length-1&&0===e[l.x-1][l.y+1].value&&!e[l.x-1][l.y+1].revealed&&n.push(e[l.x-1][l.y+1]),l.x>0&&0===e[l.x-1][l.y].value&&!e[l.x-1][l.y].revealed&&n.push(e[l.x-1][l.y]),l.x<e.length-1&&0===e[l.x+1][l.y].value&&!e[l.x+1][l.y].revealed&&n.push(e[l.x+1][l.y]),l.y>0&&0===e[l.x][l.y-1].value&&!e[l.x][l.y-1].revealed&&n.push(e[l.x][l.y-1]),l.y<e[0].length-1&&0===e[l.x][l.y+1].value&&!e[l.x][l.y+1].revealed&&n.push(e[l.x][l.y+1]),l.x>0&&l.y>0&&!e[l.x-1][l.y-1].revealed&&(e[l.x-1][l.y-1].revealed=!0,r--),l.y>0&&!e[l.x][l.y-1].revealed&&(e[l.x][l.y-1].revealed=!0,r--),l.x<e.length-1&&l.y>0&&!e[l.x+1][l.y-1].revealed&&(e[l.x+1][l.y-1].revealed=!0,r--),l.x>0&&!e[l.x-1][l.y].revealed&&(e[l.x-1][l.y].revealed=!0,r--),l.x<e.length-1&&!e[l.x+1][l.y].revealed&&(e[l.x+1][l.y].revealed=!0,r--),l.x>0&&l.y<e[0].length-1&&!e[l.x-1][l.y+1].revealed&&(e[l.x-1][l.y+1].revealed=!0,r--),l.y<e[0].length-1&&!e[l.x][l.y+1].revealed&&(e[l.x][l.y+1].revealed=!0,r--),l.x<e.length-1&&l.y<e[0].length-1&&!e[l.x+1][l.y+1].revealed&&(e[l.x+1][l.y+1].revealed=!0,r--)}return{arr:e,newNonMinesCount:r}}}(a,e,t,m);a[e][t].revealed=!0,b(n.arr),S(n.newNonMinesCount),0===n.newNonMinesCount&&(alert("Congratulations, you won!"),J(!0))}}};return Object(o.jsxs)("div",{style:{left:"50%",transform:"translateX(-50%)",position:"relative",width:40*a,boxShadow:"0px 0px 12px #000"},children:[N&&Object(o.jsx)(j,{restartGame:function(){R(!1),T(a,c,x),J(!1),L(x)}}),Object(o.jsx)(h,{flagsUsed:G,gameOver:N,gameStarted:F}),g.map((function(e,t){return Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:e.map((function(e,t){return Object(o.jsx)(d,{revealCell:z,details:e,updateFlag:U},t)}))},t)}))]})},p=a(12);var m=function(){return Object(o.jsx)(p.a,{basename:"/",children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Minesweeper"}),Object(o.jsx)(O,{})]})})};c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e509be8a.chunk.js.map