"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[16],{1677:function(e,n,t){t.d(n,{y:function(){return j}});var i=t(1413),r=t(5485),a=t(4564),l=t(6106),s=t(570),c=t(914),u=t(3099),o=t(1358),d=t(7679),f="Table_table__y43+-",p=t(184),m=function(e){return(0,p.jsx)(d.Z,(0,i.Z)({className:f},e))},h="ListEntities_title__KL5RP",x="ListEntities_card__iz-Y6",v="ListEntities_filterBtn__tlSJs",y="ListEntities_resetBtn__qHB8e",j=function(e){var n=r.Z.Title,t=e.title,d=e.form,f=e.tableProps,j=d.onChange,Z=d.fields,g=d.filters,_=d.onReset,C=d.onApply;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n,{className:h,children:t}),(0,p.jsx)(a.Z,{title:(0,p.jsx)(l.Z,{children:(0,p.jsxs)(s.Z,{name:"filters",layout:"inline",style:{width:"100%"},initialValues:{period:null,car:null,city:null,orderStatus:null},fields:Z,onFieldsChange:function(e,n){j(n)},requiredMark:"optional",onFinish:C,children:[(0,p.jsx)(c.Z,{xs:16,sm:17,children:(0,p.jsx)(u.Z,{size:[15,15],wrap:!0,style:{width:"100%"},children:g})}),(0,p.jsx)(c.Z,{xs:8,sm:7,style:{display:"flex",justifyContent:"flex-end"},children:(0,p.jsxs)(u.Z,{size:[15,15],wrap:!0,children:[(0,p.jsx)(s.Z.Item,{style:{margin:0},children:(0,p.jsx)(o.Z,{className:y,onClick:_,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})}),(0,p.jsx)(s.Z.Item,{style:{margin:0},children:(0,p.jsx)(o.Z,{type:"primary",htmlType:"submit",className:v,children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})})]})})]})}),bordered:!1,className:x,bodyStyle:{padding:"1px 0px 0px"},children:(0,p.jsx)(m,(0,i.Z)({},f))})]})}},9016:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var i=t(1413),r=t(9439),a=t(2791),l=t(3734),s=t(1358),c=t(570),u=t(6030),o=t(1677),d=t(2784),f=t(1822),p=t(6623),m="ListRates_select__9mJl5",h=t(184),x=function(){var e=l.Z.Option,n=(0,u.I0)(),t=(0,u.v9)((function(e){return e.table})),x=t.rate,v=t.rateType.rateTypes,y=x.rates,j=x.loading,Z=(x.count,x.fields),g=(0,a.useState)(1),_=(0,r.Z)(g,2),C=_[0],w=_[1],k=(0,a.useState)(5),I=(0,r.Z)(k,2),b=I[0],S=(I[1],[{name:"rateType",value:null}]),T=(0,a.useState)(S),L=(0,r.Z)(T,2),F=L[0],N=L[1],z=v;(0,a.useEffect)((function(){n((0,f.nl)()),n((0,f.Wm)())}),[]);var E=y.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{key:e.id})})),R=Z.map((function(e){switch(e){case"price":return{title:"\u0426\u0435\u043d\u0430",dataIndex:e,key:e,render:function(e){return e?(0,h.jsx)(h.Fragment,{children:e}):null}};case"rateTypeId":return{title:"\u0422\u0438\u043f \u0442\u0430\u0440\u0438\u0444\u0430",dataIndex:e,key:e,render:function(e){return e?(0,h.jsx)(h.Fragment,{children:"".concat(null===e||void 0===e?void 0:e.name," (").concat(null===e||void 0===e?void 0:e.unit,")")}):null}};default:return{title:e,dataIndex:e,key:e,render:function(e){return e?(0,h.jsx)(h.Fragment,{children:e}):null}}}})),P=(0,h.jsx)(c.Z.Item,{name:"rateType",style:{margin:0},children:(0,h.jsx)(l.Z,{showSearch:!0,placeholder:"\u0422\u0438\u043f \u0442\u0430\u0440\u0438\u0444\u0430",optionFilterProp:"children",filterSort:function(e,n){return e.children.toLowerCase().localeCompare(n.children.toLowerCase())},suffixIcon:(0,h.jsx)(d.K,{}),className:m,children:(null===z||void 0===z?void 0:z.length)>0&&z.map((function(n){return(0,h.jsx)(e,{value:null===n||void 0===n?void 0:n.id,children:null===n||void 0===n?void 0:n.name},null===n||void 0===n?void 0:n.id)}))})});return(0,h.jsx)(o.y,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0430\u0440\u0438\u0444\u043e\u0432",form:{fields:F,onChange:function(e){N(e)},filters:P,onReset:function(){N(S),n((0,f.nl)())},onApply:function(){n((0,f.nl)((0,p.j)(F)))}},tableProps:{pagination:{position:["bottomCenter"],current:C,pageSize:b,onChange:function(e){w(e)},itemRender:function(e,n,t){return"prev"===n?(0,h.jsx)(s.Z,{icon:(0,h.jsx)(d.gY,{})}):"next"===n?(0,h.jsx)(s.Z,{icon:(0,h.jsx)(d.Ne,{})}):t},showSizeChanger:!1},showHeader:!0,columns:R,dataSource:E,loading:j,scroll:{x:550}}})}},6623:function(e,n,t){t.d(n,{j:function(){return i}});var i=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){switch(n.name[0]){case"tank":return n.value?e+"tank".concat(n.value,"&"):e+"";case"city":return n.value?e+"cityId[id]=".concat(n.value,"&"):e+"";case"category":return n.value?e+"categoryId[id]=".concat(n.value,"&"):e+"";case"nameCar":return n.value?e+"name=".concat(n.value,"&"):e+"";case"priceMin":return n.value?e+"priceMin".concat(n.value,"&"):e+"";case"rateType":return n.value?e+"rateTypeId[id]=".concat(n.value):e+"";default:return n.value?e+"".concat(n.name,"=").concat(n.value,"&"):e+""}}),"?")}}}]);
//# sourceMappingURL=16.d1cd4b6e.chunk.js.map