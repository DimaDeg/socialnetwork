"use strict";(self.webpackChunksocialnetwork=self.webpackChunksocialnetwork||[]).push([[349],{7284:function(t,s,e){e.d(s,{D:function(){return c}});var n=e(8683),r=e(4925),o=(e(2791),e(6871)),i=e(7375),u=e(184),l=["isAuth"],a=function(t){return{isAuth:t.Auth.isAuth}},c=function(t){return(0,i.$j)(a)((function(s){var e=s.isAuth,i=(0,r.Z)(s,l);return e?(0,u.jsx)(t,(0,n.Z)({},i)):(0,u.jsx)(o.Fg,{to:"/login"})}))}},9349:function(t,s,e){e.r(s),e.d(s,{default:function(){return F}});var n=e(8683),r=e(5671),o=e(3144),i=e(136),u=e(3668),l=e(2791),a=e(4925),c=e(4353),d=e(885),p=e(184),f=function(t){var s=t.status,e=t.updateStatus,n=(0,l.useState)(!1),r=(0,d.Z)(n,2),o=r[0],i=r[1],u=(0,l.useState)(s),a=(0,d.Z)(u,2),c=a[0],f=a[1];(0,l.useEffect)((function(){f(s)}),[s]);return(0,p.jsx)("div",{children:o?(0,p.jsx)("div",{children:(0,p.jsx)("input",{onBlur:function(){i(!1),s!==c&&e(c.trim())},onChange:function(t){f(t.currentTarget.value)},value:c,autoFocus:!0})}):(0,p.jsx)("div",{children:(0,p.jsxs)("span",{onDoubleClick:function(){i(!0),f(s)},style:{color:"white"},children:["status: ",c]})})})},h="ProfileInfo_ava__WOxRT",j=["profile"],m=function(t){var s=t.profile,e=(0,a.Z)(t,j);return(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{className:h,src:s&&s.photos.small?s.photos.small:c,alt:""}),(0,p.jsx)("span",{style:{color:"white",fontSize:20},children:s&&s.fullName}),(0,p.jsx)(f,(0,n.Z)({},e))]})},v=e(9183),x={border:"MyPosts_border__RQfIZ",i:"MyPosts_i__lBHZC",h2:"MyPosts_h2__pS8VD",h3:"MyPosts_h3__xBs5m",in:"MyPosts_in__O0V-K",post:"MyPosts_post__83pBo"},_="Post_item__13ty8",P="Post_like__C7F78",b="Post_post__JlTKb",y=function(t){return(0,p.jsxs)("div",{className:_,children:[(0,p.jsx)("img",{src:"https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp",alt:t.post}),(0,p.jsx)("div",{className:b,children:t.post},t.id),(0,p.jsx)("div",{children:(0,p.jsxs)("span",{className:P,children:["Like ",t.likeCount]})})]})},g=e(5705),k=function(t){var s=t.addPost,e=(0,g.TA)({initialValues:{post:""},onSubmit:function(t,e){var n=e.resetForm;s(t.post),n({values:{post:""}})}});return(0,p.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,p.jsx)("label",{htmlFor:"post",children:(0,p.jsx)("input",{name:"post",id:"post",placeholder:"your post",onChange:e.handleChange,value:e.values.post})}),(0,p.jsx)("button",{disabled:""===e.values.post,type:"submit",children:"click"})]})},Z=l.memo((function(t){var s=t.posts.map((function(t){return(0,p.jsx)("div",{className:x.post,children:(0,p.jsx)(y,{id:t.id,post:t.post,likeCount:t.likeCount})},t.id)}));return(0,p.jsxs)("div",{className:x.border,children:[(0,p.jsx)("h2",{className:x.h2,children:"My posts"}),(0,p.jsxs)("div",{className:x.item,children:[(0,p.jsx)("h3",{className:x.h3,children:"New Post"}),(0,p.jsx)(k,{addPost:t.addPost})]}),s]})})),N=e(7375),C=(0,N.$j)((function(t){return{posts:t.ProfilePage.posts}}),(function(t){return{addPost:function(s){return t((0,v.Pi)(s))}}}))(Z),S="Profile_back__t460J",w=function(t){return(0,p.jsxs)("div",{className:S,children:[(0,p.jsx)(m,(0,n.Z)({},t)),(0,p.jsx)(C,{})]})},O=e(7781),A=e(7284),M=e(6177),D=function(t){(0,i.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,o.Z)(e,[{key:"componentDidMount",value:function(){var t=Number(this.props.params.userId);t=t||23132,this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,p.jsx)("div",{children:(0,p.jsx)(w,(0,n.Z)({},this.props))})}}]),e}(l.Component),F=(0,O.qC)(A.D,(0,N.$j)((function(t){return{profile:t.ProfilePage.profile,status:t.ProfilePage.status,authorizedUserId:t.Auth.id}}),{getProfile:v.Ai,getStatus:v.lR,updateStatus:v.Nf}),M.W)(D)},4925:function(t,s,e){function n(t,s){if(null==t)return{};var e,n,r=function(t,s){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],s.indexOf(e)>=0||(r[e]=t[e]);return r}(t,s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],s.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}e.d(s,{Z:function(){return n}})}}]);
//# sourceMappingURL=349.21541953.chunk.js.map