"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[889],{2889:function(t,s,e){e.r(s),e.d(s,{default:function(){return Z}});var n=e(8683),r=e(2791),u="Profile_content__g-Lde",a="Posts_posts__reNJ9",i="Post_item__Yu4oG",o=e(184);var c=function(t){return(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("img",{src:"https://static.independent.co.uk/2022/08/22/15/newFile-2.jpg?width=1200"}),t.message,(0,o.jsxs)("div",{children:["likes ",t.likesCount]})]})},l=e(6139),d=e(704),f=e(5304),p=e(2781),j=(0,f.B)(10);var x=(0,d.Z)({form:"addPost"})((function(t){return(0,o.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,o.jsx)("div",{children:(0,o.jsx)(l.Z,{placeholder:"Post message",validate:[f.C,j],name:"newPost",component:p.gx})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{children:"Add post"})})]})}));var h=function(t){return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("h2",{children:"My Post"}),(0,o.jsx)(x,{onSubmit:function(s){t.addPost(s.newPost)}}),(0,o.jsx)("div",{className:a,children:t.posts.map((function(t){return(0,o.jsx)(c,{message:t.message,likesCount:t.likesCount},t.id)}))})]})},v=e(6508),m=e(8687),g=(0,m.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){t((0,v.nk)(s))}}}))(h),P="ProfileInfo_avatar__1VFcV",_="ProfileInfo_descriptionBlock__XBXuJ",S=e(9776),k=e(885);var C=function(t){var s=(0,r.useState)(!1),e=(0,k.Z)(s,2),n=e[0],u=e[1],a=(0,r.useState)(t.status),i=(0,k.Z)(a,2),c=i[0],l=i[1];return(0,r.useEffect)((function(){l(t.status)}),[t.status]),(0,o.jsxs)("div",{children:[!n&&(0,o.jsx)("div",{children:(0,o.jsx)("span",{onDoubleClick:function(){u(!0)},children:t.status||"set status"})}),n&&(0,o.jsx)("div",{children:(0,o.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){u(!1),t.updateStatus(c)},value:c})})]})};var U=function(t){return t.profile?(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:_,children:[(0,o.jsx)("h2",{children:t.profile.fullName}),(0,o.jsx)("img",{className:P,src:t.profile.photos.large}),(0,o.jsx)(C,{updateStatus:t.updateStatus,status:t.status})]})}):(0,o.jsx)(S.Z,{})};var N=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return(0,o.jsxs)("div",{className:u,children:[(0,o.jsx)(U,{profile:s,status:e,updateStatus:n}),(0,o.jsx)(g,{})]})},b=e(7689);var Z=(0,e(7781).qC)((0,m.$j)((function(t){return{profile:t.profilePage.profile,currentUserId:t.auth.userId,status:t.profilePage.status}}),{getUserProfile:v.et,getUserStatus:v.Tq,updateUserStatus:v.OL}))((function(t){var s=(0,b.UO)().id;return s||(s=t.currentUserId)?((0,r.useEffect)((function(){t.getUserProfile(s),t.getUserStatus(s)}),[]),(0,o.jsx)(N,(0,n.Z)((0,n.Z)({},t),{},{profile:t.profile,status:t.status,updateStatus:t.updateUserStatus}))):(0,o.jsx)(b.Fg,{to:"/login"})}))}}]);
//# sourceMappingURL=889.644765c3.chunk.js.map