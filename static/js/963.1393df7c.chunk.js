"use strict";(self.webpackChunkelifschool_test_frontend=self.webpackChunkelifschool_test_frontend||[]).push([[963],{963:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var r,i,a,o,s,l,c,d,u,p,f,h,x,m,Z,g,v,b,y,j,P,w=t(861),k=t(942),C=t(413),I=t(439),S=t(757),q=t.n(S),z=t(791),_=t(174),D=t(15),A=t(168),E=t(444),F=E.ZP.div(r||(r=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Q=(E.ZP.div(i||(i=(0,A.Z)(["\n  width: 50%;\n"]))),E.ZP.div(a||(a=(0,A.Z)(["\n  width: 50%;\n"]))),E.ZP.form(o||(o=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),E.ZP.div(s||(s=(0,A.Z)(["\n  margin-bottom: 1rem;\n"]))),E.ZP.div(l||(l=(0,A.Z)(["\n  margin-top: 1rem;\n"]))),E.ZP.div(c||(c=(0,A.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  flex-basis: 50%;\n"])))),T=E.ZP.form(d||(d=(0,A.Z)(["\n  width: 400px;\n  padding: 20px;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n"]))),U=E.ZP.div(u||(u=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n\n  label {\n    margin-bottom: 5px;\n    font-weight: bold;\n  }\n\n  input {\n    padding: 8px;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    font-size: 14px;\n  }\n"]))),$=E.ZP.div(p||(p=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n"]))),L=t(184),N=E.ZP.button(f||(f=(0,A.Z)(["\n  padding: 10px 20px;\n  background-color: #4285f4;\n  color: #fff;\n  border-radius: 4px;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #0d47a1;\n  }\n"]))),R=function(n){var e=n.handleInputChange,t=n.handleSubmit,r=n.formData;return(0,L.jsx)(Q,{children:(0,L.jsxs)(T,{onSubmit:t,children:[(0,L.jsxs)(U,{children:[(0,L.jsx)("label",{children:"Name:"}),(0,L.jsx)("input",{type:"text",name:"name",value:r.name,onChange:e,required:!0})]}),(0,L.jsxs)(U,{children:[(0,L.jsx)("label",{children:"Email:"}),(0,L.jsx)("input",{type:"email",name:"email",value:r.email,onChange:e,required:!0})]}),(0,L.jsxs)(U,{children:[(0,L.jsx)("label",{children:"Phone:"}),(0,L.jsx)("input",{type:"tel",name:"phone",value:r.phone,onChange:e,required:!0})]}),(0,L.jsxs)(U,{children:[(0,L.jsx)("label",{children:"Address:"}),(0,L.jsx)("input",{type:"text",name:"address",value:r.address,onChange:e,required:!0})]}),(0,L.jsx)($,{children:(0,L.jsx)(N,{type:"submit",children:"Submit"})})]})})},O=t(126),W=t(322),Y=E.ZP.div(h||(h=(0,A.Z)(["\n  flex-basis: 50%;\n  max-height: 80vh;\n  overflow-y: scroll;\n\n  ul {\n    width: 100%;\n    list-style-type: none;\n    padding: 0;\n  }\n\n  li {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 1px solid #e6e6e6;\n  }\n\n  li:last-child {\n    border-bottom: none;\n  }\n"]))),B=E.ZP.div(x||(x=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n"]))),G=E.ZP.img(m||(m=(0,A.Z)(["\n  flex-shrink: 0;\n  width: 150px;\n  height: auto;\n  object-fit: cover;\n"]))),H=E.ZP.div(Z||(Z=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n"]))),J=E.ZP.div(g||(g=(0,A.Z)(["\n  font-size: 18px;\n  font-weight: bold;\n"]))),K=E.ZP.div(v||(v=(0,A.Z)(["\n  margin-top: 5px;\n  font-size: 14px;\n  color: #373434;\n"]))),M=E.ZP.div(b||(b=(0,A.Z)(["\n  margin-top: 5px;\n  font-size: 14px;\n\n  input[type='number'] {\n    width: 50px;\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n  }\n"]))),V=E.ZP.div(y||(y=(0,A.Z)(["\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #063c56;\n"]))),X=E.ZP.button(j||(j=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-left: 10px;\n  color: #ff0000;\n  transition: color 0.2s;\n\n  &:hover {\n    color: #ff5555;\n  }\n"]))),nn=E.ZP.div(P||(P=(0,A.Z)(["\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 10px;\n  color: #00aaff;\n"]))),en=function(n){var e=n.cartItems,t=n.handleQuantityChange,r=n.handleDeleteItem,i=n.totalPrice;return(0,L.jsxs)(Y,{children:[(0,L.jsx)("ul",{children:e.map((function(n){var e=n._id,i=n.imgUrl,a=n.title,o=n.price,s=n.quantity;return(0,L.jsx)("li",{children:(0,L.jsxs)(B,{children:[i?(0,L.jsx)(G,{src:i,alt:a}):(0,L.jsx)(G,{src:W,alt:a}),(0,L.jsxs)(H,{children:[(0,L.jsx)(J,{children:a}),(0,L.jsxs)(K,{children:["Price: $",o]}),(0,L.jsxs)(M,{children:["Quantity:",(0,L.jsx)("input",{type:"number",value:s,onChange:function(n){return t(e,parseInt(n.target.value))},min:"1"})]}),(0,L.jsxs)(V,{children:["Total: $",(s*o).toFixed(2)]})]}),(0,L.jsx)(X,{onClick:function(){return r(e)},children:(0,L.jsx)(O.yvY,{})})]})},e)}))}),(0,L.jsxs)(nn,{children:["Total Price: $",i.toFixed(2)]})]})},tn=function(n){var e=n.items,t=(0,z.useState)({name:"",email:"",phone:"",address:""}),r=(0,I.Z)(t,2),i=r[0],a=r[1],o=(0,z.useState)(""),s=(0,I.Z)(o,2),l=s[0],c=s[1];(0,z.useEffect)((function(){e.length>0&&c(e[0].shopId)}),[e]);var d=(0,z.useState)(e),u=(0,I.Z)(d,2),p=u[0],f=u[1],h=(0,z.useState)(0),x=(0,I.Z)(h,2),m=x[0],Z=x[1];(0,z.useEffect)((function(){var n=0;p.forEach((function(e){n+=e.price*e.quantity})),Z(n)}),[p]);var g=function(){var n=(0,w.Z)(q().mark((function n(e){var t;return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t={user:{name:i.name,email:i.email,phone:i.phone,address:i.address},shopId:l,items:p.map((function(n){return{name:n.title,quantity:n.quantity,price:n.price}})),totalPrice:m,date:(new Date).toISOString()},n.prev=2,n.next=5,(0,D.f)(t);case 5:n.sent&&_.Am.success("Thank you for your order. Wait for the delivery"),a({name:"",email:"",phone:"",address:""}),f([]),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(2),console.error(n.t0.message),_.Am.error("Something wrong. Please try again later");case 15:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}();return(0,L.jsx)(F,{children:p.length>0?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(R,{handleInputChange:function(n){var e=n.target,t=e.name,r=e.value;a((function(n){return(0,C.Z)((0,C.Z)({},n),{},(0,k.Z)({},t,r))}))},handleSubmit:g,formData:i}),(0,L.jsx)(en,{cartItems:p,handleQuantityChange:function(n,e){var t=p.map((function(t){if(t._id===n){var r=t.price*e;return(0,C.Z)((0,C.Z)({},t),{},{quantity:e,total:r})}return t}));f(t)},handleDeleteItem:function(n){var e=p.filter((function(e){return e._id!==n}));f(e)},totalPrice:m})]}):(0,L.jsx)("div",{children:(0,L.jsx)("p",{children:"Add more items to the cart"})})})}},15:function(n,e,t){t.d(e,{f:function(){return d},t:function(){return l}});var r=t(861),i=t(757),a=t.n(i),o=t(243),s=window.location.origin.includes("local")?"http://localhost:3030/api/shops/":"https://delivery-shop-rfy2.onrender.com/api/shops/";function l(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post("/orders",e);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL=s,o.Z.defaults.baseURL=s},322:function(n,e,t){n.exports=t.p+"static/media/NoImagePlaceholder.ebbc7b17947644e301a0.png"}}]);
//# sourceMappingURL=963.1393df7c.chunk.js.map