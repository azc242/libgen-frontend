(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t){t.contractions=["aren't","ain't","can't","couldn't","didn't","doesn't","don't","hadn't","hasn't","haven't","he'd","he'll","he's","I'd","I'll","I'm","I've","isn't","let's","mightn't","mustn't","shan't","she'd","she'll","she's","shouldn't","that's","there's","they'd","they'll","that'll","they're","they've","we'd","we're","we've","weren't","what'll","what're","what's","what've","where's","who'd","who'll","who're","who's","who've","won't","wouldn't","you'd","you'll","you're","you've"]},48:function(e,t,a){e.exports=a(87)},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=a(10),s=a(37),i=a.n(s),u=a(106),m=a(114),d=a(109),h=a(107),v=a(111),E=a(108),f=Object(u.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var p=function(e){var t=f(),a=(t.bullet,"0"===e.year?"":e.year),n=void 0===e.pages||0===e.pages?" ":" | "+e.pages+" pages",l=void 0===e.extension?"N/A":e.extension;return r.a.createElement(m.a,{className:t.root,variant:"outlined"},r.a.createElement(h.a,null,r.a.createElement(E.a,{className:t.title,color:"textSecondary",gutterBottom:!0},a,n),r.a.createElement(E.a,{variant:"h5",component:"h2"},e.title),r.a.createElement(E.a,{className:t.pos,color:"textSecondary"},e.author),r.a.createElement(E.a,{variant:"body2",component:"p"},"Extension: ",l,r.a.createElement("br",null))),r.a.createElement(d.a,{className:"align-center"},r.a.createElement("a",{href:e.download,target:"_blank"},r.a.createElement(v.a,{size:"small"},"Download"))))};var w=function(e){return r.a.createElement("div",null,r.a.createElement(p,{title:e.title,author:e.author,year:e.year,pages:e.pages,download:e.download,extension:e.extension}))},g=a(38),b=a.n(g),y=a(39),j=a.n(y),S=a(40),O=a.n(S),x=a(77),N=j.a.contractions;var I=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(!1),i=Object(c.a)(s,2),u=(i[0],i[1]),m=new x(N,2);return r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("form",{className:"create-note"},r.a.createElement("input",{placeHolder:"Search for a book or file...",onChange:function(e){o(e.target.value)},value:l}),r.a.createElement("button",{onClick:function(t){console.log("before: "+l);var a=function(e){for(var t=e.split(" "),a=0;a<t.length;a++)void 0!==m.correct(t[a])&&(t[a]=m.correct(t[a]));var n=t.join(" ");return o(n),n}(l);a=b.a.correct(a),l!==a&&u(!0),e.onSearch(a,l),o(a),t.preventDefault()}},r.a.createElement(O.a,null))))},k=a(113),C=a(110);function B(e){return r.a.createElement(C.a,{display:"flex",alignItems:"center"},r.a.createElement(C.a,{width:"100%",mr:1},r.a.createElement(k.a,Object.assign({variant:"determinate"},e))),r.a.createElement(C.a,{minWidth:35},r.a.createElement(E.a,{variant:"body2",color:"textSecondary"},"".concat(Math.round(e.value),"%"))))}var D=Object(u.a)({root:{width:"100%"}});function z(){var e=D(),t=r.a.useState(10),a=Object(c.a)(t,2),n=a[0],l=a[1];return r.a.useEffect((function(){var e=setInterval((function(){l((function(e){return e>=100?100:e+10}))}),250);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(B,{value:n}))}var A=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),s=Object(c.a)(o,2),u=s[0],m=s[1],d=r.a.useState(!0),h=Object(c.a)(d,2),v=h[0],E=(h[1],r.a.useState("")),f=Object(c.a)(E,2),p=f[0],g=f[1],b=r.a.useState(""),y=Object(c.a)(b,2),j=y[0],S=y[1];function O(e,t){g(e),S(t),m(!0);var a="https://nameless-falls-09464.herokuapp.com/"+e;i.a.get(a,{crossdomain:!0}).then((function(e){l(e.data),m(!1)}))}return r.a.createElement("div",null,r.a.createElement(I,{onSearch:O}),r.a.createElement("div",null,r.a.createElement("div",{hidden:!u},u&&r.a.createElement(z,{value:100})),r.a.createElement("div",{hidden:!v||0===a.length||j===p},r.a.createElement("p",null,"Showing results for ",p,". "," ",r.a.createElement("a",{onClick:function(e){O(j,p),e.preventDefault()},href:""},"Show search results for ",j," instead."))),a.map((function(e,t){return r.a.createElement(w,{className:"control-size",key:t,title:e.title,author:e.author,year:e.year,pages:e.pages,download:e.download,extension:e.extension})}))))};var J=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Catalog"))};var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,null),r.a.createElement("div",null,r.a.createElement(A,null)))};var W=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e,". This web app is for educational purposes only and I do not condone or advocate the use of this app."),r.a.createElement("p",null,"This was made purely for practicing React.js and Node.js"))};o.a.render(r.a.createElement(T,null),document.getElementById("root")),o.a.render(r.a.createElement(W,null),document.getElementById("footer"))}},[[48,1,2]]]);
//# sourceMappingURL=main.cd3470ea.chunk.js.map