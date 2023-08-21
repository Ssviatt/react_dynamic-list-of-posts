(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var c=s(9),n=s.n(c),a=s(2),i=s(1),r=(s(15),s(16),s(17),s(3)),o=s.n(r),l=s(0),d=function(e){var t=e.userPosts,s=e.setOpenedPost,c=e.openedPost,n=e.setIsFormOpen;return Object(l.jsxs)("div",{"data-cy":"PostsList",children:[Object(l.jsx)("p",{className:"title",children:"Posts:"}),Object(l.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"has-background-link-light",children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:" "})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{"data-cy":"Post",children:[Object(l.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(l.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(l.jsx)("td",{className:"has-text-right is-vcentered",onClick:function(){return n(!1)},children:c&&c.id===e.id?Object(l.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:function(){return s(null)},children:"Close"}):Object(l.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){return s(e)},children:"Open"})})]},e.id)}))})]})]})},j=(s(19),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),m="https://mate.academy/students-api";function u(e){return new Promise((function(t){setTimeout(t,e)}))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),u(300).then((function(){return fetch(m+e,c)})).then((function(e){return e.json()}))}var h=function(e){return b(e)},O=function(e,t){return b(e,"POST",t)},x=function(e){return b(e,"DELETE")},f=s(10),p=s(7),N=s(4),y=function(e){var t=e.openPost,s=e.setPostComments,c=e.setHasError,n=e.setOpenForm,r=Object(i.useState)({name:"",email:"",body:""}),d=Object(a.a)(r,2),j=d[0],m=d[1],u=Object(i.useState)(!1),b=Object(a.a)(u,2),h=b[0],x=b[1],y=Object(i.useState)(!1),v=Object(a.a)(y,2),g=v[0],C=v[1],P=!j.name.trim()&&g,S=!j.email.trim()&&g,k=!j.body.trim()&&g,E=function(e){var t=e.target,s=t.name,c=t.value;C(!1),m((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(p.a)({},s,c))}))};return Object(l.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){if(e.preventDefault(),t){var a=Object(N.a)(Object(N.a)({},j),{},{postId:t.id});x(!0),(i=a,O("/comments",i)).then((function(e){s((function(t){return[].concat(Object(f.a)(t),[e])})),m((function(e){return Object(N.a)(Object(N.a)({},e),{},{body:""})})),C(!1)})).catch((function(){c(!0),n(!1)})).finally((function(){return x(!1)}))}var i},children:[Object(l.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:o()("input",{"is-danger":P}),value:j.name,onChange:E,required:!0}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-user"})}),P&&Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),P&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(l.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:o()("input",{"is-danger":S}),value:j.email,onChange:E,required:!0}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-envelope"})}),S&&Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(l.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:o()("textarea",{"is-danger":k}),value:j.body,onChange:E,required:!0})}),k&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",onClick:function(){return C(!0)},className:o()("button","is-link",{"is-loading":h}),children:"Add"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){C(!1),m({name:"",email:"",body:""})},children:"Clear"})})]})]})},v=function(e){var t=e.openedPost,s=e.setIsFormOpen,c=e.isFormOpen,n=Object(i.useState)([]),r=Object(a.a)(n,2),o=r[0],d=r[1],m=Object(i.useState)(!1),u=Object(a.a)(m,2),b=u[0],O=u[1],f=Object(i.useState)(!1),p=Object(a.a)(f,2),N=p[0],v=p[1],g=function(e){var t;(t=e,x("/comments/".concat(t))).then((function(){d((function(t){return t.filter((function(t){return t.id!==e}))}))})).catch((function(){return O(!0)}))};return Object(i.useEffect)((function(){var e;t&&(v(!0),O(!1),(e=t.id,h("/comments?postId=".concat(e))).then((function(e){return d(e)})).catch((function(){return O(!0)})).finally((function(){return v(!1)})))}),[t]),Object(l.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(l.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(l.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),!b&&Object(l.jsx)("div",{className:"block",children:N?Object(l.jsx)(j,{}):Object(l.jsxs)(l.Fragment,{children:[0===o.length?Object(l.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"title is-4",children:"Comments:"}),o.map((function(e){return Object(l.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(l.jsxs)("div",{className:"message-header",children:[Object(l.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(l.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return g(e.id)},children:"delete button"})]}),Object(l.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),!c&&Object(l.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return s(!0)},children:"Write a comment"})]})}),b&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),c&&Object(l.jsx)(y,{openPost:t,setPostComments:d,setHasError:O,setOpenForm:s})]})})},g=function(e){var t=e.setSelectedUser,s=e.selectedUser,c=e.setOpenedPost,n=Object(i.useState)(null),r=Object(a.a)(n,2),d=r[0],j=r[1],m=Object(i.useState)(!0),u=Object(a.a)(m,2),b=u[0],O=u[1];return Object(i.useEffect)((function(){h("/users").then((function(e){return j(e)}))}),[]),Object(l.jsxs)("div",{"data-cy":"UserSelector",className:o()("dropdown",{"is-active":d}),children:[Object(l.jsx)("div",{className:"dropdown-trigger",children:Object(l.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){O((function(e){return!e}))},children:[Object(l.jsx)("span",{children:s?s.name:"Choose a user"}),Object(l.jsx)("span",{className:"icon is-small",children:Object(l.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(l.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(l.jsx)("div",{className:"dropdown-content",hidden:b,children:null===d||void 0===d?void 0:d.map((function(e){return Object(l.jsx)("a",{href:"#user-".concat(e.id),className:o()("dropdown-item",{"is-active":e.id===(null===s||void 0===s?void 0:s.id)}),onClick:function(){return function(e){t(e),O(!0),c(null)}(e)},children:e.name},e.id)}))})})]})},C=function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)([]),r=Object(a.a)(n,2),m=r[0],u=r[1],b=Object(i.useState)(!1),O=Object(a.a)(b,2),x=O[0],f=O[1],p=Object(i.useState)(!1),N=Object(a.a)(p,2),y=N[0],C=N[1],P=Object(i.useState)(null),S=Object(a.a)(P,2),k=S[0],E=S[1],w=Object(i.useState)(!1),F=Object(a.a)(w,2),I=F[0],T=F[1];return Object(i.useEffect)((function(){var e;s&&(f(!0),C(!1),(e=s.id,h("/posts?userId=".concat(e))).then(u).catch((function(){return C(!0)})).finally((function(){return f(!1)})))}),[s]),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"tile is-ancestor",children:[Object(l.jsx)("div",{className:"tile is-parent",children:Object(l.jsxs)("div",{className:"tile is-child box is-success",children:[Object(l.jsx)("div",{className:"block",children:Object(l.jsx)(g,{setSelectedUser:c,selectedUser:s,setOpenedPost:E})}),x?Object(l.jsx)(j,{}):Object(l.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!s&&Object(l.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),y&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),0===m.length&&s&&Object(l.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),0!==m.length&&Object(l.jsx)(d,{userPosts:m,setOpenedPost:E,openedPost:k,setIsFormOpen:T})]})]})}),Object(l.jsx)("div",{"data-cy":"Sidebar",className:o()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":k}),children:Object(l.jsx)("div",{className:"tile is-child box is-success ",children:Object(l.jsx)(v,{openedPost:k,setIsFormOpen:T,isFormOpen:I})})})]})})})};n.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.cd1f3a03.chunk.js.map