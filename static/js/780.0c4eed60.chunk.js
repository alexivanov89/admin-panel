"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[780],{1677:function(e,n,r){r.d(n,{y:function(){return g}});var t=r(1413),a=r(5485),i=r(4564),l=r(6106),c=r(570),o=r(914),u=r(3099),s=r(1358),d=r(7679),f="Table_table__y43+-",h=r(184),m=function(e){return(0,h.jsx)(d.Z,(0,t.Z)({className:f},e))},x="ListEntities_title__KL5RP",v="ListEntities_card__iz-Y6",p="ListEntities_filterBtn__tlSJs",j="ListEntities_resetBtn__qHB8e",g=function(e){var n=a.Z.Title,r=e.title,d=e.form,f=e.tableProps,g=d.onChange,y=d.fields,Z=d.filters,C=d.onReset,w=d.onApply;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{className:x,children:r}),(0,h.jsx)(i.Z,{title:(0,h.jsx)(l.Z,{children:(0,h.jsxs)(c.Z,{name:"filters",layout:"inline",style:{width:"100%"},fields:y,onFieldsChange:function(e,n){g(n)},requiredMark:"optional",onFinish:w,children:[(0,h.jsx)(o.Z,{xs:16,sm:17,children:(0,h.jsx)(u.Z,{size:[15,15],wrap:!0,style:{width:"100%"},children:Z})}),(0,h.jsx)(o.Z,{xs:8,sm:7,style:{display:"flex",justifyContent:"flex-end"},children:(0,h.jsxs)(u.Z,{size:[15,15],wrap:!0,children:[(0,h.jsx)(c.Z.Item,{style:{margin:0},children:(0,h.jsx)(s.Z,{className:j,onClick:C,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})}),(0,h.jsx)(c.Z.Item,{style:{margin:0},children:(0,h.jsx)(s.Z,{type:"primary",htmlType:"submit",className:p,children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})})]})})]})}),bordered:!1,className:v,bodyStyle:{padding:"1px 0px 0px"},children:(0,h.jsx)(m,(0,t.Z)({},f))})]})}},7154:function(e,n,r){r.d(n,{E:function(){return u}});var t=r(1413),a=r(9439),i=r(5987),l=r(2791),c=r(184),o=["fallback","src","alt"],u=function(e){var n=e.fallback,r=e.src,u=e.alt,s=(0,i.Z)(e,o),d=(0,l.useState)(r),f=(0,a.Z)(d,2),h=f[0],m=f[1];return(0,c.jsx)("img",(0,t.Z)({src:h||n,alt:u,onError:function(){return m(n)}},s))}},5780:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t=r(1413),a=r(5987),i=r(9439),l=r(2791),c=r(3734),o=r(1358),u=r(570),s=r(6030),d=r(1677),f=r(7154),h=r(9538),m=r(2784),x=r(1822),v=r(8785),p=r(5369),j=r(6623),g="ListCars_carImage__MY8yK",y="ListCars_select__Lu7CY",Z=r(184),C=["name"],w=function(){var e=c.Z.Option,n=(0,s.I0)(),r=(0,s.v9)((function(e){return e.table})),w=r.car,I=r.category.categories,_=w.cars,k=w.loading,L=(w.count,w.fields),S=(0,l.useState)(1),F=(0,i.Z)(S,2),b=F[0],N=F[1],E=(0,l.useState)(5),M=(0,i.Z)(E,2),O=M[0],P=(M[1],[{name:["nameCar"],value:null},{name:["category"],value:null},{name:["tank"],value:null},{name:["priceMin"],value:null}]),z=(0,l.useState)(P),K=(0,i.Z)(z,2),T=K[0],B=K[1],$=I,A=Array.from(new Set(_.map((function(e){var n=e.name;(0,a.Z)(e,C);return n})).filter(Boolean)));(0,l.useEffect)((function(){n((0,x.LS)()),n((0,x.uT)())}),[]);var R=_.map((function(e){return(0,t.Z)((0,t.Z)({},e),{},{key:e.id})})),Y=L.map((function(e){switch(e){case"priceMin":return{title:"\u0426\u0435\u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f",dataIndex:e,key:e,render:function(e){return e?(0,Z.jsx)(Z.Fragment,{children:"".concat((0,p._)(e)," \u20bd")}):null}};case"priceMax":return{title:"\u0426\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f",dataIndex:e,key:e,render:function(e){return e?(0,Z.jsx)(Z.Fragment,{children:"".concat((0,p._)(e)," \u20bd")}):null}};case"name":return{title:"\u041c\u0430\u0440\u043a\u0430",dataIndex:e,key:e,render:function(e){return e?(0,Z.jsx)(Z.Fragment,{children:e}):null}};case"thumbnail":return{title:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",dataIndex:e,key:null===e||void 0===e?void 0:e.name,render:function(e){return(0,Z.jsx)("div",{className:g,children:(0,Z.jsx)(f.E,{src:null===e||void 0===e?void 0:e.path,alt:null===e||void 0===e?void 0:e.originalname,fallback:h,loading:"lazy"})})}};case"description":return{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",dataIndex:e,key:e,render:function(e){return e?(0,Z.jsx)(Z.Fragment,{children:e}):null}};case"categoryId":return{title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",dataIndex:e,key:null===e||void 0===e?void 0:e.name,render:function(e){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("p",{children:null===e||void 0===e?void 0:e.name}),(0,Z.jsx)("p",{children:null===e||void 0===e?void 0:e.description})]})}};case"colors":return{title:"\u0426\u0432\u0435\u0442\u0430 \u0430\u0432\u0442\u043e",dataIndex:e,key:null===e||void 0===e?void 0:e.name,render:function(e){return null===e||void 0===e?void 0:e.map((function(e){return(0,Z.jsx)("p",{children:e},(0,v.x0)())}))}};case"tank":return{title:"\u0422\u043e\u043f\u043b\u0438\u0432\u043e",dataIndex:e,key:e,render:function(e){return e?(0,Z.jsx)(Z.Fragment,{children:"".concat(e,"%")}):null}};case"number":return{title:"\u041d\u043e\u043c\u0435\u0440 \u043c\u0430\u0448\u0438\u043d\u044b",dataIndex:e,key:e,render:function(e){return e?(0,Z.jsx)(Z.Fragment,{children:e}):null}};default:return{title:e,dataIndex:e,key:e,render:function(e){return e?(0,Z.jsx)(Z.Fragment,{children:e}):null}}}})),q=(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(u.Z.Item,{name:"nameCar",style:{margin:0},children:(0,Z.jsx)(c.Z,{showSearch:!0,placeholder:"\u041c\u0430\u0440\u043a\u0430",optionFilterProp:"children",filterOption:function(e,n){return n.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,n){return e.children.toLowerCase().localeCompare(n.children.toLowerCase())},suffixIcon:(0,Z.jsx)(m.K,{}),className:y,children:(null===A||void 0===A?void 0:A.length)>0&&A.map((function(n){return(0,Z.jsx)(e,{value:n,children:n},(0,v.x0)())}))})}),(0,Z.jsx)(u.Z.Item,{name:"category",style:{margin:0},children:(0,Z.jsx)(c.Z,{showSearch:!0,placeholder:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",optionFilterProp:"children",filterSort:function(e,n){return e.children.toLowerCase().localeCompare(n.children.toLowerCase())},suffixIcon:(0,Z.jsx)(m.K,{}),className:y,children:(null===$||void 0===$?void 0:$.length)>0&&$.map((function(n){return(0,Z.jsx)(e,{value:null===n||void 0===n?void 0:n.id,children:null===n||void 0===n?void 0:n.name},null===n||void 0===n?void 0:n.id)}))})}),(0,Z.jsx)(u.Z.Item,{name:"tank",style:{margin:0},children:(0,Z.jsxs)(c.Z,{showSearch:!0,placeholder:"\u0422\u043e\u043f\u043b\u0438\u0432\u043e",optionFilterProp:"children",filterOption:function(e,n){return n.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,n){return e.children.toLowerCase().localeCompare(n.children.toLowerCase())},suffixIcon:(0,Z.jsx)(m.K,{}),className:y,children:[(0,Z.jsx)(e,{value:"[$gt]=50",children:"\u0431\u043e\u043b\u044c\u0448\u0435 50%"}),(0,Z.jsx)(e,{value:"[$lt]=50",children:"\u043c\u0435\u043d\u044c\u0448\u0435 50%"})]})}),(0,Z.jsx)(u.Z.Item,{name:"priceMin",style:{margin:0},children:(0,Z.jsxs)(c.Z,{showSearch:!0,placeholder:"\u0426\u0435\u043d\u0430 \u043c\u0438\u043d",optionFilterProp:"children",filterOption:function(e,n){return n.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,n){return e.children.toLowerCase().localeCompare(n.children.toLowerCase())},suffixIcon:(0,Z.jsx)(m.K,{}),className:y,children:[(0,Z.jsx)(e,{value:"[$gt]=10000",children:"\u0431\u043e\u043b\u044c\u0448\u0435 10 \u0442\u044b\u0441"}),(0,Z.jsx)(e,{value:"[$lt]=10000",children:"\u043c\u0435\u043d\u044c\u0448\u0435 10 \u0442\u044b\u0441"})]})})]});return(0,Z.jsx)(d.y,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0430\u0432\u0442\u043e",form:{fields:T,onChange:function(e){B(e)},filters:q,onReset:function(){B(P),n((0,x.LS)())},onApply:function(){n((0,x.LS)((0,j.j)(T)))}},tableProps:{pagination:{position:["bottomCenter"],current:b,pageSize:O,onChange:function(e){N(e)},itemRender:function(e,n,r){return"prev"===n?(0,Z.jsx)(o.Z,{icon:(0,Z.jsx)(m.gY,{})}):"next"===n?(0,Z.jsx)(o.Z,{icon:(0,Z.jsx)(m.Ne,{})}):r},showSizeChanger:!1},showHeader:!0,columns:Y,dataSource:R,loading:k,scroll:{x:980}}})}},6623:function(e,n,r){r.d(n,{j:function(){return t}});var t=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var r;switch(n.name[0]){case"tank":return n.value?e+"tank".concat(n.value,"&"):e+"";case"city":return n.value?e+"cityId[id]=".concat(n.value,"&"):e+"";case"category":return n.value?e+"categoryId[id]=".concat(n.value,"&"):e+"";case"period":var t;return null!==n&&void 0!==n&&null!==(r=n.value)&&void 0!==r&&r.value?e+"createdAt[$gt]=".concat(null===n||void 0===n||null===(t=n.value)||void 0===t?void 0:t.value,"&"):e+"";case"nameCar":return n.value?e+"name=".concat(n.value,"&"):e+"";case"car":return n.value?e+"carId[id]=".concat(n.value,"&"):e+"";case"orderStatus":return n.value?e+"orderStatusId[id]=".concat(n.value,"&"):e+"";case"priceMin":return n.value?e+"priceMin".concat(n.value,"&"):e+"";case"rateType":return n.value?e+"rateTypeId[id]=".concat(n.value):e+"";default:return n.value?e+"".concat(n.name,"=").concat(n.value,"&"):e+""}}),"?")}},5369:function(e,n,r){r.d(n,{_:function(){return t}});var t=function(e){return e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):null}},9538:function(e,n,r){e.exports=r.p+"static/media/noFoto.204ef07232dc7deae70c.jpg"}}]);
//# sourceMappingURL=780.0c4eed60.chunk.js.map