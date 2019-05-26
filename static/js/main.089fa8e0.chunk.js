(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(93)},48:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=(n(39),n(2)),u=n.n(i),l=n(5),s=n(3),d=n(6),p=n(33),f=n(4),m=(n(41),n(26)),h=n(27),v=n.n(h)()({GET:null,PUT:null,POST:null,DELETE:null}),E=function(){var e=Object(s.a)(u.a.mark(function e(t,n,r,a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.body&&"string"!==typeof body&&(r.body=JSON.stringify(r.body)),e.next=3,fetch("".concat(t,"/").concat(n),Object(l.a)({},r,{headers:{Accept:"application/json","Content-Type":"application/json"}})).then(function(e){return e.json()}).catch(function(e){console.error(e),a()});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),b=n(16);n(47),n(48);b.a.configure();var g=function(e){var t=e.closeToast,n=e.handleRetry,r=e.buttonText,o=void 0===r?"Retry":r,c=e.className,i=void 0===c?"":c,u=e.children;return a.a.createElement("div",{className:"todo-notification"},a.a.createElement("p",null,u),a.a.createElement("button",{className:"todo-notification-button ".concat(i),onClick:function(e){e.stopPropagation(),n&&n(),t()}},o))},w=function(e,t){return b.a.error(a.a.createElement(g,{handleRetry:t},e),{autoClose:!1,position:"top-right",closeOnClick:!1})},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"OK";return b.a.info(a.a.createElement(g,{className:"info",buttonText:t},e),{autoClose:!0,position:"top-right",closeOnClick:!1})},O=new function e(t){var n=this;Object(m.a)(this,e),this.getMethod=function(){var e=Object(s.a)(u.a.mark(function e(t,r){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n.baseUrl,t,{method:v.GET},r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),this.putMethod=function(){var e=Object(s.a)(u.a.mark(function e(t,r,a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n.baseUrl,t,{method:v.PUT,body:r},a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),this.postMethod=function(){var e=Object(s.a)(u.a.mark(function e(t,r,a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n.baseUrl,t,{method:v.POST,body:r},a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),this.deleteMethod=function(){var e=Object(s.a)(u.a.mark(function e(t,r){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n.baseUrl,t,{method:v.DELETE},r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),t.endsWith("/")&&(t=t.slice(0,-1)),this.baseUrl=t}(Object({NODE_ENV:"production",PUBLIC_URL:"/todo",REACT_APP_NOT_SECRET_CODE:"https://9oelm.github.io/todo"}).SERVER||"http://35.208.190.165:8081/"),x=function(){var e=Object(s.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t=function(){return w("An error occurred fetching from the server",x)},O.getMethod("todo",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}var t},e)}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(u.a.mark(function e(t,n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=t,a=function(){return w("An error occurred saving todo.",function(){return y(t,n)})},O.postMethod("todo",r,a);case 2:n();case 3:case"end":return e.stop()}var r,a},e)}));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(u.a.mark(function e(t,n,r){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=t,o=n,c=function(){return w("An error occurred updating",function(){return C(t,n,r)})},O.putMethod("todo/".concat(a),o,c);case 2:r();case 3:case"end":return e.stop()}var a,o,c},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(u.a.mark(function e(t,n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=t,a=function(){return w("An error occurred deleting.",function(){return j(t,n)})},O.deleteMethod("todo/".concat(r),a);case 2:n();case 3:case"end":return e.stop()}var r,a},e)}));return function(t,n){return e.apply(this,arguments)}}(),N=n(14),T=n.n(N),P=(n(61),function(e){var t=e.handleClick,n=e.children,r=e.id,o=void 0===r?"":r,c=e.className,i=void 0===c?"":c;return a.a.createElement("div",{onClick:t,className:"button ".concat(i),id:o},n)}),S=n(10),M=(n(62),function(e){var t=e.handleClick;return e.isChecked?a.a.createElement("input",{type:"checkbox",onClick:function(e){return e.stopPropagation()},onChange:t,checked:!0,className:"checkbox"}):a.a.createElement("input",{type:"checkbox",onChange:t,onClick:function(e){return e.stopPropagation()},className:"checkbox"})}),U=n(15),H=(n(24),n(30)),D=(n(79),n(11)),L=n.n(D),z=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}))},A=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))},V=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))},R=function(e){var t=e.level,n=function(e){var t=e.color;return a.a.createElement("svg",{fill:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("circle",{cx:"12",cy:"19",r:"2"}),a.a.createElement("path",{d:"M10 3h4v12h-4z"}),a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}))},r=["#ff7070","#353535","#8a8a8a"].find(function(e,n){return n+1===t});return r?a.a.createElement(n,{color:r}):a.a.createElement(n,{color:"#353535"})},F=(n(80),function(e){var t=e.time,n=(e.handleTimeChange,e.handleClickOk),o=e.className,c=void 0===o?"":o,i=e.tooltipPosition,u=void 0===i?"left":i,l=Object(r.useState)(!1),s=Object(d.a)(l,2),p=s[0],f=s[1],m=Object(r.useState)(t),h=Object(d.a)(m,2),v=h[0],E=h[1];return""===v&&E(function(){return L()().valueOf()}),a.a.createElement("div",{onClick:function(e){e.stopPropagation(),f(function(){return!0})},className:"icon-button todo-calendar ".concat(c)},a.a.createElement(U.Tooltip,{html:a.a.createElement("div",{className:"todo-set-due"},a.a.createElement("p",null,"Set a date for this todo"),a.a.createElement(H.DatetimePicker,{moment:L()(v,"x"),onChange:function(e){E(function(){return e.valueOf()})}}),a.a.createElement(P,{className:"calendar-ok-button",handleClick:function(e){e.stopPropagation(),n&&n(v),f(function(){return!1})}},a.a.createElement("p",null,"Set due"))),isOpen:p,interactive:!0,position:u,trigger:"click"},a.a.createElement(z,null)))}),_=(n(81),function(e){var t=e.handleClick,n=e.className,r=void 0===n?"":n;return a.a.createElement("div",{"data-confirm":"Are you sure to delete?",onClick:function(e){e.stopPropagation(),t&&t()},className:"icon-button ".concat(r)},a.a.createElement(V,null))}),B=(n(82),function(e){var t=e.handleClick,n=e.priority,r=e.tooltipPosition,o=void 0===r?"left":r;return a.a.createElement("div",{onClick:function(e){e.stopPropagation()},className:"icon-button"},a.a.createElement(U.Tooltip,{html:a.a.createElement("div",{className:"todo-set-priority"},a.a.createElement("p",null,"Set a priority of this todo"),a.a.createElement("div",{className:"todo-priorities-container"},[1,2,3].map(function(e){return a.a.createElement("div",{key:T.a.generate(),onClick:function(){return t(e)}},a.a.createElement(R,{level:e}))}))),interactive:!0,position:o,trigger:"click"},a.a.createElement(R,{level:n})))}),G=(n(83),Object(f.e)(function(e){var t=e._id,n=e.title,o=e.due,c=e.priority,i=e.isDone,p=e.content,f=e.triggerUpdateFromChild,m=e.history,h=Object(r.useState)({title:n,due:o,priority:c,isDone:i,content:p}),v=Object(d.a)(h,2),E=v[0],b=v[1],g=function(e,t){b(function(n){return Object(l.a)({},n,Object(S.a)({},e,t))})};return a.a.createElement(P,{handleClick:function(){return m.push("/editor/".concat(t))}},a.a.createElement(M,{isChecked:i,handleClick:Object(s.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C(t,{isDone:!i},f);case 1:case"end":return e.stop()}},e)}))}),i?a.a.createElement("div",{className:"todo-preview-title"},a.a.createElement("strike",null,n)):a.a.createElement("div",{className:"todo-preview-title"},n),a.a.createElement(F,{time:E.due,handleTimeChange:function(e){return g("due",e.valueOf())},handleClickOk:function(){var e=Object(s.a)(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,{due:n},f);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),className:"leftmost-button"}),a.a.createElement(B,{priority:E.priority,handleClick:function(){var e=Object(s.a)(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g("priority",n),e.next=3,C(t,{priority:n},f);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}),a.a.createElement(_,{className:"margin-right",handleClick:Object(s.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t,f);case 2:case"end":return e.stop()}},e)}))}))})),I=(n(88),Object(f.e)(function(e){var t=e.history,n=e.rootState,r=e.triggerUpdateFromChild,o=n.todos,c=n.isLoading;return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{id:"add-todo-button",handleClick:function(){return t.push("/editor")}},a.a.createElement("p",null,"Add a new todo")),!c&&o?o.map(function(e){return a.a.createElement(G,Object.assign({key:T.a.generate(),triggerUpdateFromChild:r},e))}):a.a.createElement("p",{id:"add-todo-loading"},"Loading..."))})),J=(n(89),function(e){var t=e.handleClick;return a.a.createElement("div",{onClick:function(e){e.stopPropagation(),t()},className:"icon-button"},a.a.createElement(A,null))}),W=(n(90),Object(f.e)(function(e){var t,n=e.rootState,o=e.triggerUpdateFromChild,c=e.history,i=e.match;i.params.id&&((t=n.todos.find(function(e){return e._id===i.params.id}))||(k("This URL contains an invalid Todo ID. You are redirected to be allowed to create a new valid todo."),setTimeout(c.push("/editor"),5e3)));var p=i.params.id&&t?Object(l.a)({},t):{title:"",content:"",due:"",priority:3,isDone:!1},f=Object(r.useState)(!1),m=Object(d.a)(f,2),h=m[0],v=m[1],E=Object(r.useState)(p),b=Object(d.a)(E,2),g=b[0],w=b[1],O=g.title,x=g.content,N=g.due,T=g.priority,U=g.isDone,H=function(e,t){w(function(n){return Object(l.a)({},n,Object(S.a)({},e,t))})},D=function(e){var t=function(e){return window.confirm("Are you sure you want to ".concat(e,"?"))};!e&&i.params.id&&t("delete this todo")?(j(i.params.id,o),c.push("/")):t("abort")&&(w(function(){return p}),c.push("/"))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{id:"todo-editor-options"},a.a.createElement(J,{handleClick:function(){return D(!0)}}),a.a.createElement(M,{isChecked:U,handleClick:function(){return H("isDone",!U)}}),a.a.createElement(F,{time:N,handleClickOk:function(e){H("due",e.valueOf()),v(function(){return!0})},tooltipPosition:"bottom"}),a.a.createElement(B,{priority:T,handleClick:function(e){return H("priority",e)},tooltipPosition:"bottom"}),a.a.createElement(_,{className:"margin-right",handleClick:function(){return D(!1)}})),a.a.createElement("textarea",{className:"textarea",id:"textarea-title",placeholder:"Title",value:O,onChange:function(e){return H("title",e.target.value)}}),a.a.createElement("textarea",{className:"textarea",id:"textarea-content",placeholder:"Enter your content here",value:x,onChange:function(e){return H("content",e.target.value)}}),a.a.createElement("div",{id:"todo-editor-save-container"},a.a.createElement(P,{handleClick:Object(s.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==O.length&&0!==x.length){e.next=4;break}k("You have not entered the title or the content. Please try again."),e.next=12;break;case 4:if(i.params.id){e.next=9;break}return e.next=7,y(Object(l.a)({},g,{due:h?N:""}),o);case 7:e.next=11;break;case 9:return e.next=11,C(i.params.id,g,o);case 11:c.push("/");case 12:case"end":return e.stop()}},e)}))},a.a.createElement("span",null,"Save"))))})),Y=(n(91),function(){var e=Object(r.useState)({todos:[],isLoading:!1}),t=Object(d.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(0),i=Object(d.a)(c,2),m=i[0],h=i[1],v=function(){return h(function(e){return e%2?e+1:e-1})};Object(r.useEffect)(function(){!function(){var e=Object(s.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(function(e){return Object(l.a)({},e,{isLoading:!0})}),e.next=3,x();case 3:t=e.sent,o(function(e){return Object(l.a)({},e,{todos:t,isLoading:!1})});case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[m]);var E=Object(f.e)(function(e){var t=e.history;return a.a.createElement("section",{id:"no-page-found"},a.a.createElement("div",null,a.a.createElement("p",null,"Oops!"),a.a.createElement("p",null,"Something is wrong."),a.a.createElement("p",null,"Please try again.")),a.a.createElement(P,{handleClick:function(){return t.push("/")}},"Go to the index page"))});return a.a.createElement(p.a,{basename:"/todo"},a.a.createElement("div",{className:"App"},a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",exact:!0,component:function(){return a.a.createElement("section",{id:"todo-list"},a.a.createElement(I,{triggerUpdateFromChild:v,rootState:n}))}}),a.a.createElement(f.a,{path:"/editor/:id?",component:function(){return a.a.createElement("section",{id:"todo-editor"},a.a.createElement(W,{triggerUpdateFromChild:v,rootState:n}))}}),a.a.createElement(f.a,{component:E}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(92);c.a.render(a.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.089fa8e0.chunk.js.map