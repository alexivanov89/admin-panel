"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[49],{6049:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var i=r(1413),t=r(9439),l=r(2791),o=r(3734),a=r(1358),s=r(6030),c=r(1677),d=r(7154),u=r(9538),h=r(2784),f=r(1822),x="ListCars_carImage__SBzfP",p="ListCars_select__KC-pf",v=r(184),j=function(){var e=o.Z.Option,n=(0,s.I0)(),r=(0,s.v9)((function(e){return e.table})).car,j=r.cars,m=r.loading,C=(r.count,r.fields),w=(0,l.useState)(1),L=(0,t.Z)(w,2),y=L[0],Z=L[1],_=(0,l.useState)(5),S=(0,t.Z)(_,2),g=S[0];S[1];(0,l.useEffect)((function(){n((0,f.LS)())}),[]);var I=j.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{key:e.id})})),k={pagination:{position:["bottomCenter"],current:y,pageSize:g,onChange:function(e){Z(e)},itemRender:function(e,n,r){return"prev"===n?(0,v.jsx)(a.Z,{icon:(0,v.jsx)(h.gY,{})}):"next"===n?(0,v.jsx)(a.Z,{icon:(0,v.jsx)(h.Ne,{})}):r},showSizeChanger:!1},showHeader:!0,columns:C.map((function(e){switch(e){case"cityId":case"rateTypeId":return{title:e,dataIndex:e,key:null===e||void 0===e?void 0:e.name,render:function(e){return(0,v.jsx)(v.Fragment,{children:null===e||void 0===e?void 0:e.name})}};case"categoryId":return{title:e,dataIndex:e,key:null===e||void 0===e?void 0:e.name,render:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:null===e||void 0===e?void 0:e.name}),(0,v.jsx)("p",{children:null===e||void 0===e?void 0:e.description})]})}};case"colors":return{title:e,dataIndex:e,key:null===e||void 0===e?void 0:e.name,render:function(e){return null===e||void 0===e?void 0:e.map((function(e){return(0,v.jsx)("p",{children:e},e)}))}};case"thumbnail":return{title:e,dataIndex:e,key:null===e||void 0===e?void 0:e.name,render:function(e){return(0,v.jsx)("div",{className:x,children:(0,v.jsx)(d.E,{src:null===e||void 0===e?void 0:e.path,alt:null===e||void 0===e?void 0:e.originalname,fallback:u,loading:"lazy"})})}};default:return{title:e,dataIndex:e,key:e}}})),dataSource:I,loading:m,scroll:{x:980}},b=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(o.Z,{showSearch:!0,placeholder:"Field",optionFilterProp:"children",filterOption:function(e,n){return n.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,n){return e.children.toLowerCase().localeCompare(n.children.toLowerCase())},suffixIcon:(0,v.jsx)(h.K,{}),className:p,children:[(0,v.jsx)(e,{value:"1",children:"value1"}),(0,v.jsx)(e,{value:"2",children:"value2"})]}),(0,v.jsxs)(o.Z,{showSearch:!0,placeholder:"Field",optionFilterProp:"children",filterOption:function(e,n){return n.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,n){return e.children.toLowerCase().localeCompare(n.children.toLowerCase())},suffixIcon:(0,v.jsx)(h.K,{}),className:p,children:[(0,v.jsx)(e,{value:"1",children:"value1"}),(0,v.jsx)(e,{value:"2",children:"value2"})]}),(0,v.jsxs)(o.Z,{showSearch:!0,placeholder:"Field",optionFilterProp:"children",filterOption:function(e,n){return n.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,n){return e.children.toLowerCase().localeCompare(n.children.toLowerCase())},suffixIcon:(0,v.jsx)(h.K,{}),className:p,children:[(0,v.jsx)(e,{value:"1",children:"value1"}),(0,v.jsx)(e,{value:"2",children:"value2"})]}),(0,v.jsxs)(o.Z,{showSearch:!0,placeholder:"Field",optionFilterProp:"children",filterOption:function(e,n){return n.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,n){return e.children.toLowerCase().localeCompare(n.children.toLowerCase())},suffixIcon:(0,v.jsx)(h.K,{}),className:p,children:[(0,v.jsx)(e,{value:"1",children:"value1"}),(0,v.jsx)(e,{value:"2",children:"value2"})]})]});return(0,v.jsx)(c.y,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0430\u0432\u0442\u043e",filters:b,tableProps:k,onReset:function(){},onApply:function(){}})}},1677:function(e,n,r){r.d(n,{y:function(){return m}});var i=r(1413),t=r(5485),l=r(4564),o=r(6106),a=r(914),s=r(3099),c=r(1358),d=r(7679),u="Table_table__y43+-",h=r(184),f=function(e){return(0,h.jsx)(d.Z,(0,i.Z)({className:u},e))},x="ListEntities_title__KL5RP",p="ListEntities_card__iz-Y6",v="ListEntities_filterBtn__tlSJs",j="ListEntities_resetBtn__qHB8e",m=function(e){var n=t.Z.Title,r=e.title,d=e.filters,u=e.tableProps,m=e.onReset,C=e.onApply;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{className:x,children:r}),(0,h.jsx)(l.Z,{title:(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(a.Z,{xs:16,sm:17,children:(0,h.jsx)(s.Z,{size:[15,15],wrap:!0,children:d})}),(0,h.jsx)(a.Z,{xs:8,sm:7,style:{display:"flex",justifyContent:"flex-end"},children:(0,h.jsxs)(s.Z,{size:[15,15],wrap:!0,children:[(0,h.jsx)(c.Z,{className:j,onClick:m,children:"Reset"}),(0,h.jsx)(c.Z,{type:"primary",className:v,onClick:C,children:"Apply"})]})})]}),bordered:!1,className:p,bodyStyle:{padding:"1px 0px 0px"},children:(0,h.jsx)(f,(0,i.Z)({},u))})]})}}}]);
//# sourceMappingURL=49.7fa22fc5.chunk.js.map