(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{93:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(0),n=c.n(a),o=c(23),s=c.n(o),i=c(27),l=c(58),d=c(62),u=c(9),j={user:{},isAuthenticated:!1,loader:!1,buckets:[],todos:[],success:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADER":return Object(u.a)(Object(u.a)({},e),{},{loader:t.payload});case"SET_USER":return Object(u.a)(Object(u.a)({},e),{},{user:t.payload,isAuthenticated:!0,loader:!1});case"SET_TODOS":return Object(u.a)(Object(u.a)({},e),{},{todos:t.payload,loader:!1});case"SET_BUCKET":return Object(u.a)(Object(u.a)({},e),{},{buckets:[].concat(Object(d.a)(e.buckets),[t.payload]),loader:!1});case"SET_BUCKETS":return Object(u.a)(Object(u.a)({},e),{},{buckets:t.payload,loader:!1});case"SET_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{success:t.payload});case"DELETE_BUCKET":return Object(u.a)(Object(u.a)({},e),{},{buckets:e.buckets.filter((function(e){return e._id!==t.payload._id})),loader:!1});default:return e}},O={userRegisterErrors:{},userLoginErrors:{},addUserErrors:{},updateAddedUserErrors:{},deleteAddedUserErrors:{}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_REGISTER_ERRORS":return Object(u.a)(Object(u.a)({},e),{},{userRegisterErrors:t.payload});case"SET_USER_LOGIN_ERRORS":return Object(u.a)(Object(u.a)({},e),{},{userLoginErrors:t.payload});case"SET_ADD_USER_ERRORS":return Object(u.a)(Object(u.a)({},e),{},{addUserErrors:t.payload});case"SET_UPDATE_ADDED_USER_ERRORS":return Object(u.a)(Object(u.a)({},e),{},{updateAddedUserErrors:t.payload});case"SET_DELETE_ADDED_USER_ERRORS":return Object(u.a)(Object(u.a)({},e),{},{deleteAddedUserErrors:t.payload});default:return e}},p=Object(i.c)({userRoot:b,errorRoot:h}),x=[l.a],m=Object(i.e)(p,{},Object(i.d)(i.a.apply(void 0,x))),f=c(7),v=c(14),E=c(10),g=c(33),S=c(13),y=c.n(S),T=c(25),k=c(19),w=c.n(k),R=function(e){e?w.a.defaults.headers.common.Authorization=e:delete w.a.defaults.headers.common.Authorization},C="http://localhost:5000/api/v1",D=function(e){return{type:"SET_USER",payload:e}},_=function(e){return{type:"SET_LOADER",payload:e}},A=function(e){return{type:"SET_SUCCESS",payload:e}},B=function(){return function(e){localStorage.removeItem("userJwtToken"),R(!1),e({type:"DELETE_USER",payload:{}}),e(_(!1))}},U=c(8),N=c(102),L=c(104),I=c(100),M=function(e){var t=e.logoutModal,c=e.setLogoutModal,a=Object(f.c)((function(e){return e})),n=(a.userRoot,a.errorRoot,Object(f.b)());Object(E.f)();return Object(r.jsxs)(I.a,{show:t,onHide:function(){return c(!1)},children:[Object(r.jsx)(I.a.Header,{closeButton:!0,children:Object(r.jsx)(I.a.Title,{children:"USER LOGOUT"})}),Object(r.jsx)(I.a.Body,{children:Object(r.jsx)("h3",{children:"Are your sure want to logout ?"})}),Object(r.jsxs)(I.a.Footer,{children:[Object(r.jsx)(L.a,{variant:"primary",onClick:function(){n(B()),setTimeout((function(){c(!1)}),100),window.location.reload()},children:"Yes"}),Object(r.jsx)(L.a,{variant:"secondary",onClick:function(){return c(!1)},children:"No"})]})]})},G=function(){var e=Object(f.c)((function(e){return e.userRoot})),t=Object(a.useState)(!1),c=Object(U.a)(t,2),n=c[0],o=c[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(M,{logoutModal:n,setLogoutModal:o}),Object(r.jsxs)(N.a,{bg:"light",expand:"lg",children:[Object(r.jsx)(N.a.Brand,{as:v.b,to:"/",children:"TODO_HANDLER"}),Object(r.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsx)(N.a.Collapse,{id:"basic-navbar-nav",children:Object(r.jsx)("div",{className:"ml-auto",children:e.isAuthenticated?Object(r.jsxs)(r.Fragment,{children:[e.user?e.user.name.toUpperCase():null,Object(r.jsx)(L.a,{onClick:function(){return o(!0)},variant:"outline-danger",className:"mx-4",children:"Logout"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L.a,{as:v.b,to:"/sign-up",variant:"outline-success",children:"Register"}),Object(r.jsx)(L.a,{as:v.b,to:"/login",variant:"outline-success",className:"mx-4",children:"Login"})]})})})]})]})},H=c(95),F=c(96),P=c(61),J=c(97),K=c(103),Y=function(){return Object(r.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:!0,children:[Object(r.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}),"Loading..."]})},z=c(101),W=function(e){var t=e.addBucketModal,c=e.setAddBucketModal,n=Object(f.c)((function(e){return e})),o=n.userRoot,s=(n.errorRoot,Object(a.useState)("")),i=Object(U.a)(s,2),l=i[0],d=i[1];console.log("sdfdsa",o);var u=Object(f.b)();return Object(a.useEffect)((function(){o.success&&c(!1)}),[o.success]),Object(r.jsxs)(I.a,{show:t,onHide:function(){return c(!1)},children:[Object(r.jsx)(I.a.Header,{closeButton:!0,children:Object(r.jsx)(I.a.Title,{children:"ADD BUCKET"})}),Object(r.jsx)(I.a.Body,{children:Object(r.jsxs)(z.a,{onSubmit:function(e){var t;e.preventDefault(),u((t={name:l},function(){var e=Object(T.a)(y.a.mark((function e(c){var r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(_(!0)),e.next=4,w()({method:"Post",url:"".concat(C,"/bucket"),data:t});case 4:r=e.sent,a=r.data,c(_(!1)),a.success?(c({type:"SET_BUCKET",payload:a.response}),c(A(!0)),c(A(!1))):alert("Error in add user"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),c(_(!1)),console.log("Error in addUser Action",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),d("")},children:[Object(r.jsxs)(z.a.Group,{controlId:"formBasicName",children:[Object(r.jsx)(z.a.Label,{children:"Name"}),Object(r.jsx)(z.a.Control,{onChange:function(e){return d(e.target.value)},value:l,type:"text",placeholder:"Enter your name"})]}),o.loader?Object(r.jsx)(Y,{}):Object(r.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})},q=function(e){var t=e.bucketId,c=e.deleteModal,n=e.setDeleteModal,o=Object(f.c)((function(e){return e})),s=o.userRoot,i=(o.errorRoot,Object(f.b)());return Object(a.useEffect)((function(){s.success&&n(!1)}),[s.success]),Object(r.jsxs)(I.a,{show:c,onHide:function(){return n(!1)},children:[Object(r.jsx)(I.a.Header,{closeButton:!0,children:Object(r.jsx)(I.a.Title,{children:"DELETE BUCKET"})}),Object(r.jsx)(I.a.Body,{children:Object(r.jsx)("h3",{children:"Are your sure want to delete ?"})}),Object(r.jsxs)(I.a.Footer,{children:[Object(r.jsx)(L.a,{variant:"primary",onClick:function(){i(function(e){return function(){var t=Object(T.a)(y.a.mark((function t(c){var r,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(_(!0)),t.next=4,w()({method:"Delete",url:"".concat(C,"/bucket/").concat(e)});case 4:r=t.sent,a=r.data,c(_(!1)),a.success?(c({type:"DELETE_BUCKET",payload:a.response}),c(A(!0)),c(A(!1))):alert("Error in delte todo"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),c(_(!1)),console.log("Error in delete todo Action",t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},children:"Yes"}),Object(r.jsx)(L.a,{variant:"secondary",onClick:function(){return n(!1)},children:"No"})]})]})},Q=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),c=Object(E.f)(),n=e.userRoot,o=(e.errorRoot,Object(a.useState)({})),s=Object(U.a)(o,2),i=(s[0],s[1],Object(a.useState)("")),l=Object(U.a)(i,2),d=(l[0],l[1],Object(a.useState)(!1)),u=Object(U.a)(d,2),j=u[0],b=u[1],O=Object(a.useState)(!1),h=Object(U.a)(O,2),p=(h[0],h[1],Object(a.useState)(!1)),x=Object(U.a)(p,2),m=x[0],g=x[1],S=Object(a.useState)(""),k=Object(U.a)(S,2),R=k[0],D=k[1];Object(a.useEffect)((function(){n.isAuthenticated?t(function(){var e=Object(T.a)(y.a.mark((function e(t){var c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(_(!0)),e.next=4,w()({method:"Get",url:"".concat(C,"/bucket")});case 4:c=e.sent,r=c.data,t(_(!1)),r.success?t({type:"SET_BUCKETS",payload:r.response}):alert("Error in getBuckets"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t(_(!1)),console.log("Error in getBuckets Action",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):c.push("/")}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(q,{bucketId:R,deleteModal:m,setDeleteModal:g}),Object(r.jsx)(W,{addBucketModal:j,setAddBucketModal:b}),Object(r.jsxs)(H.a,{children:[Object(r.jsxs)(F.a,{className:"mt-5",children:[Object(r.jsx)(P.a,{xs:12,md:8,children:Object(r.jsx)("h2",{children:"List of Buckets"})}),Object(r.jsx)(P.a,{xs:12,md:4,children:Object(r.jsx)(L.a,{variant:"primary",onClick:function(){return b(!0)},children:"Add Bucket"})})]}),Object(r.jsx)(J.a,{className:"mt-5",children:0!==n.buckets.length?n.buckets.map((function(e){return Object(r.jsx)(K.a,{children:Object(r.jsxs)(K.a.Body,{children:[Object(r.jsx)(K.a.Title,{className:"text-center",children:e.name}),Object(r.jsxs)(K.a.Title,{children:["Todos: ",e.todos.length]}),Object(r.jsxs)(K.a.Footer,{children:[Object(r.jsx)(v.b,{to:"/todos/".concat(e._id),variant:"primary",children:"TODOS"}),Object(r.jsx)(L.a,{onClick:function(){return t=e._id,D(t),void g(!0);var t},variant:"danger",className:"float-right",children:"DELETE"})]})]})},e._id)})):"No users to show kindly add"})]})]})},V=c(98),X=function(){var e=Object(f.c)((function(e){return e})).userRoot,t=Object(E.f)();return Object(a.useEffect)((function(){e.isAuthenticated&&t.replace("/home")}),[e.isAuthenticated]),Object(r.jsx)(H.a,{children:Object(r.jsx)(F.a,{className:"mt-5",children:Object(r.jsx)(P.a,{md:8,sm:12,className:"m-auto",children:Object(r.jsxs)(V.a,{children:[Object(r.jsx)("h1",{children:"WELCOME TO TODO HANDLER"}),Object(r.jsx)("p",{children:"This is a simple and secure web application where authenticated user can manage and plan there work."}),Object(r.jsx)("p",{children:Object(r.jsx)(L.a,{as:v.b,to:"/sign-up",variant:"primary",children:"Register"})})]})})})})},Z=function(){var e=Object(a.useState)(""),t=Object(U.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(""),s=Object(U.a)(o,2),i=s[0],l=s[1],d=Object(E.f)(),u=Object(f.b)(),j=Object(f.c)((function(e){return e.userRoot}));return Object(r.jsx)("div",{children:Object(r.jsxs)(z.a,{onSubmit:function(e){e.preventDefault(),u(function(e,t){return function(){var c=Object(T.a)(y.a.mark((function c(r){var a,n,o,s;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r(_(!0)),c.next=4,w()({method:"Post",url:"".concat(C,"/user/login"),data:e});case 4:a=c.sent,n=a.data,o=n.token,localStorage.setItem("userJwtToken",o),R(o),s=Object(g.a)(o),r(D(s)),t.push("/home"),c.next=18;break;case 14:c.prev=14,c.t0=c.catch(0),r(_(!1)),console.log("Error in userLogin Action",c.t0.message);case 18:case"end":return c.stop()}}),c,null,[[0,14]])})));return function(e){return c.apply(this,arguments)}}()}({email:c,password:i},d))},children:[Object(r.jsxs)(z.a.Group,{controlId:"formBasicEmail",children:[Object(r.jsx)(z.a.Label,{children:"Email address"}),Object(r.jsx)(z.a.Control,{onChange:function(e){return n(e.target.value)},value:c,type:"email",placeholder:"Enter email"})]}),Object(r.jsxs)(z.a.Group,{controlId:"formBasicPassword",children:[Object(r.jsx)(z.a.Label,{children:"Password"}),Object(r.jsx)(z.a.Control,{onChange:function(e){return l(e.target.value)},value:i,type:"password",placeholder:"Password"})]}),j.loader?Object(r.jsx)(Y,{}):Object(r.jsx)(L.a,{variant:"primary",type:"submit",children:"Login"})]})})},$=function(){return Object(r.jsx)(H.a,{children:Object(r.jsx)(F.a,{className:"mt-5",children:Object(r.jsx)(P.a,{md:6,className:"mx-auto",children:Object(r.jsx)(Z,{})})})})},ee=function(){var e=Object(a.useState)(""),t=Object(U.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(""),s=Object(U.a)(o,2),i=s[0],l=s[1],d=Object(a.useState)(""),u=Object(U.a)(d,2),j=u[0],b=u[1],O=Object(E.f)(),h=Object(f.b)(),p=Object(f.c)((function(e){return e.userRoot}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(z.a,{onSubmit:function(e){e.preventDefault(),h(function(e,t){return function(){var c=Object(T.a)(y.a.mark((function c(r){var a,n,o,s;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r(_(!0)),c.next=4,w()({method:"Post",url:"".concat(C,"/user/register"),data:e});case 4:a=c.sent,n=a.data,o=n.token,localStorage.setItem("userJwtToken",o),R(o),s=Object(g.a)(o),r(D(s)),t.push("/home"),c.next=19;break;case 14:c.prev=14,c.t0=c.catch(0),r({type:"SET_USER_REGISTER_ERRORS",payload:c.t0.response.data}),r(_(!1)),console.log("Error in userRegister Action",c.t0.message);case 19:case"end":return c.stop()}}),c,null,[[0,14]])})));return function(e){return c.apply(this,arguments)}}()}({name:c,email:i,password:j},O))},children:[Object(r.jsxs)(z.a.Group,{controlId:"formBasicName",children:[Object(r.jsx)(z.a.Label,{children:"Name"}),Object(r.jsx)(z.a.Control,{onChange:function(e){return n(e.target.value)},value:c,type:"text",placeholder:"Enter your name"})]}),Object(r.jsxs)(z.a.Group,{controlId:"formBasicEmail",children:[Object(r.jsx)(z.a.Label,{children:"Email address"}),Object(r.jsx)(z.a.Control,{onChange:function(e){return l(e.target.value)},value:i,type:"email",placeholder:"Enter email"})]}),Object(r.jsxs)(z.a.Group,{controlId:"formBasicPassword",children:[Object(r.jsx)(z.a.Label,{children:"Password"}),Object(r.jsx)(z.a.Control,{onChange:function(e){return b(e.target.value)},value:j,type:"password",placeholder:"Password"})]}),p.loader?Object(r.jsx)(Y,{}):Object(r.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})})},te=function(){return Object(r.jsx)(H.a,{children:Object(r.jsx)(F.a,{className:"mt-5",children:Object(r.jsx)(P.a,{md:6,className:"mx-auto",children:Object(r.jsx)(ee,{})})})})},ce=c(99),re=function(e){var t=Object(f.c)((function(e){return e})),c=t.userRoot,n=(t.errorRoot,Object(a.useState)("")),o=Object(U.a)(n,2),s=o[0],i=o[1],l=Object(a.useState)(!1),d=Object(U.a)(l,2),u=d[0],j=d[1],b=Object(f.b)();return Object(a.useEffect)((function(){0!==Object.keys(e.todo).length&&(i(e.todo.todo.title),j(e.todo.todo.isCompleted))}),[e]),Object(a.useEffect)((function(){c.success&&e.setUpdateModal(!1)}),[c.success]),Object(r.jsxs)(I.a,{show:e.updateModal,onHide:function(){return e.setUpdateModal(!1)},children:[Object(r.jsx)(I.a.Header,{closeButton:!0,children:Object(r.jsx)(I.a.Title,{children:"UPDATE TODO"})}),Object(r.jsx)(I.a.Body,{children:Object(r.jsxs)(z.a,{onSubmit:function(t){var c,r;t.preventDefault(),b((c=e.todo.bucketId,r={_id:e.todo.todo._id,title:s,isCompleted:u},function(){var e=Object(T.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(_(!0)),e.next=4,w()({method:"Put",url:"".concat(C,"/todo/").concat(c),data:r});case 4:a=e.sent,n=a.data,t(_(!1)),n.success?(t({type:"SET_TODOS",payload:n.response}),t(A(!0)),t(A(!1))):alert("Error in update todo"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t(_(!1)),console.log("Error in updatetodo Action",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(r.jsxs)(z.a.Group,{controlId:"formBasicName",children:[Object(r.jsx)(z.a.Label,{children:"Title"}),console.log("tottytretghtr0",s),Object(r.jsx)(z.a.Control,{onChange:function(e){return i(e.target.value)},value:s,type:"text",placeholder:"Enter your name"})]}),Object(r.jsxs)(z.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(r.jsx)(z.a.Label,{children:"Status"}),Object(r.jsxs)(z.a.Control,{onChange:function(e){return j(e.target.value)},as:"select",children:[Object(r.jsx)("option",{children:"Select"}),Object(r.jsx)("option",{value:!0,children:"Completed"}),Object(r.jsx)("option",{value:!1,children:"Need to work"})]})]}),c.loader?Object(r.jsx)(Y,{}):Object(r.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})},ae=n.a.memo(re),ne=function(e){var t=e.deleteData,c=e.deleteModal,n=e.setDeleteModal,o=Object(f.c)((function(e){return e})),s=o.userRoot,i=(o.errorRoot,Object(f.b)());return Object(a.useEffect)((function(){s.success&&n(!1)}),[s.success]),Object(r.jsxs)(I.a,{show:c,onHide:function(){return n(!1)},children:[Object(r.jsx)(I.a.Header,{closeButton:!0,children:Object(r.jsx)(I.a.Title,{children:"DELETE TODO"})}),Object(r.jsx)(I.a.Body,{children:Object(r.jsx)("h3",{children:"Are your sure want to delete ?"})}),Object(r.jsxs)(I.a.Footer,{children:[Object(r.jsx)(L.a,{variant:"primary",onClick:function(){var e,c;i((e=t.bucketId,c=t.todoId,function(){var t=Object(T.a)(y.a.mark((function t(r){var a,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(_(!0)),t.next=4,w()({method:"Delete",url:"".concat(C,"/todo/").concat(e,"/").concat(c)});case 4:a=t.sent,n=a.data,r(_(!1)),n.success?(r({type:"SET_TODOS",payload:n.response}),r(A(!0)),r(A(!1))):alert("Error in delte todo"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),r(_(!1)),console.log("Error in delete todo Action",t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()))},children:"Yes"}),Object(r.jsx)(L.a,{variant:"secondary",onClick:function(){return n(!1)},children:"No"})]})]})},oe=function(e){var t=e.bucketId,c=Object(f.c)((function(e){return e})),n=c.userRoot,o=(c.errorRoot,Object(a.useState)({})),s=Object(U.a)(o,2),i=s[0],l=s[1],d=Object(a.useState)(!1),u=Object(U.a)(d,2),j=u[0],b=u[1],O=Object(a.useState)(!1),h=Object(U.a)(O,2),p=h[0],x=h[1],m=Object(a.useState)({}),v=Object(U.a)(m,2),E=v[0],g=v[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ne,{deleteData:E,deleteModal:p,setDeleteModal:x}),Object(r.jsx)(ae,{todo:i,updateModal:j,setUpdateModal:b}),Object(r.jsx)(H.a,{children:Object(r.jsx)(F.a,{children:Object(r.jsx)(P.a,{md:9,className:"m-auto",children:Object(r.jsxs)(ce.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"S.No"}),Object(r.jsx)("th",{children:"Todo"}),Object(r.jsx)("th",{children:"Status"}),Object(r.jsx)("th",{children:"Update"}),Object(r.jsx)("th",{children:"Delete"})]})}),Object(r.jsx)("tbody",{children:n.todos.map((function(e,c){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:c+1}),Object(r.jsx)("td",{children:e.title.toUpperCase()}),Object(r.jsx)("td",{children:e.isCompleted?"Completed":"Need To Work"}),Object(r.jsx)("td",{children:Object(r.jsx)(L.a,{variant:"secondary",onClick:function(){return c={bucketId:t,todo:{_id:e._id,title:e.title,isCompleted:e.isCompleted}},l(c),void b(!0);var c},children:"Update"})}),Object(r.jsx)("td",{children:Object(r.jsx)(L.a,{variant:"danger",onClick:function(){return c={bucketId:t,todoId:e._id},g(c),void x(!0);var c},children:"Delete"})})]},e._id)}))})]})})})})]})},se=function(e){var t=e.bucketId,c=e.showAddTodoModal,n=e.setShowAddTodoModal,o=Object(f.c)((function(e){return e})),s=o.userRoot,i=(o.errorRoot,Object(a.useState)("")),l=Object(U.a)(i,2),d=l[0],u=l[1],j=Object(a.useState)(!1),b=Object(U.a)(j,2),O=b[0],h=b[1],p=Object(f.b)();return Object(a.useEffect)((function(){s.success&&n(!1)}),[s.success]),Object(r.jsxs)(I.a,{show:c,onHide:function(){return n(!1)},children:[Object(r.jsx)(I.a.Header,{closeButton:!0,children:Object(r.jsx)(I.a.Title,{children:"ADD TODO"})}),Object(r.jsx)(I.a.Body,{children:Object(r.jsxs)(z.a,{onSubmit:function(e){e.preventDefault(),p(function(e,t){return function(){var c=Object(T.a)(y.a.mark((function c(r){var a,n;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r(_(!0)),c.next=4,w()({method:"Post",url:"".concat(C,"/todo/").concat(e),data:t});case 4:a=c.sent,n=a.data,r(_(!1)),n.success?(r({type:"SET_TODOS",payload:n.response}),r(A(!0)),r(A(!1))):alert("Error in add todo"),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(0),r(_(!1)),console.log("Error in addtodo Action",c.t0.message);case 14:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(e){return c.apply(this,arguments)}}()}(t,{title:d,isCompleted:O}))},children:[Object(r.jsxs)(z.a.Group,{controlId:"formBasicName",children:[Object(r.jsx)(z.a.Label,{children:"Title"}),Object(r.jsx)(z.a.Control,{onChange:function(e){return u(e.target.value)},value:d,type:"text",placeholder:"Enter your name"})]}),Object(r.jsxs)(z.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(r.jsx)(z.a.Label,{children:"Status"}),Object(r.jsxs)(z.a.Control,{onChange:function(e){return h(e.target.value)},as:"select",children:[Object(r.jsx)("option",{children:"Select"}),Object(r.jsx)("option",{value:!0,children:"Completed"}),Object(r.jsx)("option",{value:!1,children:"Need to work"})]})]}),s.loader?Object(r.jsx)(Y,{}):Object(r.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})},ie=n.a.memo(se),le=function(e){console.log(e);var t=Object(a.useState)([]),c=Object(U.a)(t,2),n=(c[0],c[1],Object(f.b)()),o=Object(a.useState)(!1),s=Object(U.a)(o,2),i=s[0],l=s[1];return Object(a.useEffect)((function(){var t;e.match.params.id&&n((t=e.match.params.id,function(){var e=Object(T.a)(y.a.mark((function e(c){var r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(_(!0)),e.next=4,w()({method:"Get",url:"".concat(C,"/bucket/").concat(t)});case 4:r=e.sent,a=r.data,c(_(!1)),a.success?c({type:"SET_TODOS",payload:a.response}):alert("Error in getTodos"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),c(_(!1)),console.log("Error in getTodos Action",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))}),[e.match.params.id]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ie,{bucketId:e.match.params.id,showAddTodoModal:i,setShowAddTodoModal:l}),Object(r.jsx)(L.a,{onClick:function(){return l(!0)},className:"m-5",children:" ADD TODOS"}),Object(r.jsx)(oe,{bucketId:e.match.params.id})]})};if(window.localStorage.userJwtToken){R(localStorage.userJwtToken);var de=Object(g.a)(localStorage.userJwtToken);m.dispatch(D(de.user));var ue=Date.now()/1e3;de.exp<ue&&(m.dispatch(B()),window.location.href="/")}var je=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)(G,{}),Object(r.jsxs)(E.c,{children:[Object(r.jsx)(E.a,{exact:!0,path:"/",component:X}),Object(r.jsx)(E.a,{exact:!0,path:"/login",component:$}),Object(r.jsx)(E.a,{exact:!0,path:"/sign-up",component:te}),Object(r.jsx)(E.a,{exact:!0,path:"/home",component:Q}),Object(r.jsx)(E.a,{exact:!0,path:"/todos/:id",component:le})]})]})})};c(92);s.a.render(Object(r.jsx)(f.a,{store:m,children:Object(r.jsx)(je,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.969ea6a8.chunk.js.map