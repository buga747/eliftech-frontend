"use strict";(self.webpackChunkelifschool_test_frontend=self.webpackChunkelifschool_test_frontend||[]).push([[674],{674:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var r,o,i,s,a,c,d,p,l,u,x,f,h,g,Z,b,m,v,j,P,w,y,k=t(433),S=t(861),C=t(439),_=t(757),I=t.n(_),z=t(791),T=t(168),U=t(444),A=U.ZP.div(r||(r=(0,T.Z)(["\n  max-height: 100vh;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n"]))),E=(U.ZP.div(o||(o=(0,T.Z)(["\n  flex-basis: 30%;\n"]))),U.ZP.div(i||(i=(0,T.Z)(["\n  flex-basis: 70%;\n"]))),U.ZP.div(s||(s=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n"])))),L=U.ZP.div(a||(a=(0,T.Z)(["\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  animation: spin 1s linear infinite;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),R=t(15),q=U.ZP.div(c||(c=(0,T.Z)(["\n  flex-basis: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px;\n  border-right: 1px solid black;\n"]))),F=U.ZP.ul(d||(d=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),J=U.ZP.h2(p||(p=(0,T.Z)(["\n  margin-bottom: 12px;\n"]))),N=U.ZP.li(l||(l=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 10px;\n"]))),$=U.ZP.button(u||(u=(0,T.Z)(["\n  background-color: ",";\n  border: none;\n  width: 100%;\n  color: #090101;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n  border-radius: 5px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  z-index: 5;\n  &:hover {\n    background-color: #4c4ec7;\n  }\n"])),(function(n){return n.isActive?"#4c4ec7":"#5691f1"})),B=U.ZP.span(x||(x=(0,T.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n"]))),D=t(184),G=function(n){var e=n.shop,t=n.onShopClick,r=n.currentShopId;return(0,D.jsx)(N,{children:(0,D.jsx)($,{isActive:r===e._id,type:"button",onClick:function(){return t(e)},children:(0,D.jsx)(B,{children:e.name})})})},H=function(n){var e=n.shops,t=n.onShopClick,r=n.currentShopId;return(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{children:"Shops"}),(0,D.jsx)(F,{children:e.map((function(n){return(0,D.jsx)(G,{currentShopId:r,shop:n,onShopClick:t},n._id)}))})]})},K=U.ZP.div(f||(f=(0,T.Z)(["\n  flex-basis: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px;\n  height: 100vh;\n  overflow-y: scroll;\n"]))),M=U.ZP.ul(h||(h=(0,T.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  max-height: 100vh;\n"]))),O=U.ZP.h2(g||(g=(0,T.Z)(["\n  margin-bottom: 12px;\n"]))),Q=t(53),V=t(322),W=U.ZP.li(Z||(Z=(0,T.Z)(["\n  position: relative;\n  display: flex;\n  width: 330px;\n  height: 350px;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 20px;\n  background-color: #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  padding-bottom: 8px;\n\n  :hover {\n    transform: scale(1.03);\n  }\n"]))),X=U.ZP.img(b||(b=(0,T.Z)(["\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  margin-bottom: 10px;\n"]))),Y=U.ZP.div(m||(m=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 10px;\n"]))),nn=U.ZP.h3(v||(v=(0,T.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 5px;\n"]))),en=U.ZP.p(j||(j=(0,T.Z)(["\n  font-size: 14px;\n  margin-bottom: 5px;\n"]))),tn=U.ZP.p(P||(P=(0,T.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #9a2222;\n  padding: 4px;\n  border-radius: 4px;\n  background-color: beige;\n"]))),rn=U.ZP.p(w||(w=(0,T.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 14px;\n  color: #150505;\n  background-color: #ebcfcf;\n  padding: 4px;\n  border-radius: 4px;\n"]))),on=U.ZP.button(y||(y=(0,T.Z)(["\n  background-color: #1da1f2;\n  color: #fff;\n  font-size: 14px;\n  padding: 8px;\n  border-radius: 5px;\n  border: none;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  &:hover {\n    background-color: #0c8de4;\n  }\n"]))),sn=function(n){var e=n.product,t=e._id,r=e.title,o=e.imgUrl,i=e.description,s=e.category,a=e.price,c=n.shopId,d=n.addToCart,p={_id:t,title:r,price:a,shopId:c,imgUrl:o,quantity:1};return(0,D.jsxs)(W,{children:[o?(0,D.jsx)(X,{src:o,alt:r,width:"330"}):(0,D.jsx)(X,{src:V,alt:r,width:"330"}),(0,D.jsxs)(Y,{children:[" ",(0,D.jsx)(nn,{children:r}),(0,D.jsx)(en,{children:i}),(0,D.jsxs)(tn,{children:["$",a]}),(0,D.jsx)(rn,{children:s})]}),(0,D.jsxs)(on,{onClick:function(){d(p)},children:["Add to cart ",(0,D.jsx)(Q.ZfJ,{})," "]})]})},an=function(n){var e=n.shopProducts,t=n.addToCart,r=n.currentShopId;return(0,D.jsxs)(K,{children:[(0,D.jsx)(O,{children:"Products"}),(0,D.jsx)(M,{children:e.map((function(n){return(0,D.jsx)(sn,{product:n,addToCart:t,shopId:r},n._id)}))})]})},cn=function(n){var e=n.addToCart,t=(0,z.useState)([]),r=(0,C.Z)(t,2),o=r[0],i=r[1],s=(0,z.useState)([]),a=(0,C.Z)(s,2),c=a[0],d=a[1],p=(0,z.useState)(""),l=(0,C.Z)(p,2),u=l[0],x=l[1],f=(0,z.useState)(!1),h=(0,C.Z)(f,2),g=h[0],Z=h[1],b=(0,z.useState)(!1),m=(0,C.Z)(b,2),v=m[0],j=m[1];(0,z.useEffect)((function(){var n=function(){var n=(0,S.Z)(I().mark((function n(){var e;return I().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,(0,R.t)();case 4:e=n.sent,i((0,k.Z)(e)),x(e[0]._id),d((0,k.Z)(e[0].products)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),j(!0);case 13:return n.prev=13,Z(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,z.useEffect)((function(){var n=o.find((function(n){return n._id===u}));n&&d((0,k.Z)(n.products))}),[u,o]);return(0,D.jsxs)(A,{children:[v&&"Error, please reload the page",g?(0,D.jsx)(E,{children:(0,D.jsx)(L,{children:"Loading..."})}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(H,{onShopClick:function(n){x(n._id)},shops:o,currentShopId:u}),(0,D.jsx)(an,{shopProducts:c,currentShopId:u,addToCart:e})]})]})}},15:function(n,e,t){t.d(e,{f:function(){return p},t:function(){return c}});var r=t(861),o=t(757),i=t.n(o),s=t(243),a=window.location.origin.includes("local")?"http://localhost:3030/api/shops/":"https://delivery-shop-rfy2.onrender.com/api/shops/";function c(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.post("/orders",e);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL=a,s.Z.defaults.baseURL=a},322:function(n,e,t){n.exports=t.p+"static/media/NoImagePlaceholder.ebbc7b17947644e301a0.png"}}]);
//# sourceMappingURL=674.6cd102fc.chunk.js.map