(this.webpackJsonpmonster_rolodex=this.webpackJsonpmonster_rolodex||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),c=(n(13),n(3)),l=n(4),i=n(6),h=n(5),u=n(7),m=(n(14),n(15),n(16),n(17),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/${props.monster.id}?set=set2&size=180x180"}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("h4",null,"https://robohash.org/",e.monster.id,"?set=set2&size=180x180"),r.a.createElement("h2",null,e.monster.id),r.a.createElement("p",null,e.monster.email))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(m,{key:e.id,monster:e})})))},p=(n(18),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json().then((function(t){return e.setState({monsters:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Rolodex"),r.a.createElement(p,{placeholder:"Search the text",handleChange:this.handleChange}),r.a.createElement(d,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.3309bce3.chunk.js.map