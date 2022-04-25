"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[687],{5213:function(e,n,t){t.d(n,{y:function(){return F}});var r=t(1413),i=t(5485),a=t(4564),l=t(6106),s=t(570),c=t(914),o=t(3099),d=t(3433),u=t(5861),x=t(9439),f=t(5987),p=t(7757),h=t.n(p),m=t(8243),Z=t(9389),j=t(6038),g=t(6440),y=t(2791),b="EditableTable_table__66N+3",k="EditableTable_editableRow__XinJa",w=t(184),v=["editing","dataIndex","title","inputType","record","index","children"],C=["dataSource","columns"],_=function(e){var n=e.editing,t=e.dataIndex,i=e.title,a=e.inputType,l=(e.record,e.index,e.children),c=(0,f.Z)(e,v),o="number"===a?(0,w.jsx)(m.Z,{}):(0,w.jsx)(Z.Z,{});return(0,w.jsx)("td",(0,r.Z)((0,r.Z)({},c),{},{children:n?(0,w.jsx)(s.Z.Item,{name:t,style:{margin:0},rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ".concat(i,"!")}],children:o}):l}))},I=function(e){var n=e.dataSource,t=e.columns,a=(0,f.Z)(e,C),l=s.Z.useForm(),c=(0,x.Z)(l,1)[0],o=(0,y.useState)(n),p=(0,x.Z)(o,2),m=(p[0],p[1],(0,y.useState)("")),Z=(0,x.Z)(m,2),v=Z[0],I=Z[1],S=function(e){return e.key===v},T=function(){I("")},F=function(){var e=(0,u.Z)(h().mark((function e(n){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.validateFields();case 3:t=e.sent,console.log("row:",t),console.log("key:",n),I(""),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),N=function(){var e=(0,u.Z)(h().mark((function e(n){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=[].concat((0,d.Z)(t),[{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",dataIndex:"operation1",width:"150px",render:function(e,n){return S(n)?(0,w.jsxs)("span",{children:[(0,w.jsx)(i.Z.Link,{onClick:function(){return F(n.key)},style:{marginRight:8,color:"#818ea3"},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),(0,w.jsx)(j.Z,{title:"\u0423\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c?",onConfirm:T,cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",children:(0,w.jsx)("a",{children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})})]}):(0,w.jsx)(i.Z.Link,{disabled:""!==v,onClick:function(){return function(e){c.setFieldsValue((0,r.Z)({name:""},e)),I(e.key)}(n)},style:{color:"#818ea3"},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",dataIndex:"operation2",render:function(e,n){return(0,w.jsx)(j.Z,{title:"\u0423\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0423\u0434\u0430\u043b\u0438\u0442\u044c?",onConfirm:function(){return N(n.key)},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",children:(0,w.jsx)("a",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})}}]).map((function(e){return e.editable?(0,r.Z)((0,r.Z)({},e),{},{onCell:function(n){return{record:n,inputType:"age"===e.dataIndex?"number":"text",dataIndex:e.dataIndex,title:e.title,editing:S(n)}}}):e}));return console.log("mergedColumns:",L),(0,w.jsx)(s.Z,{form:c,component:!1,children:(0,w.jsx)(g.Z,(0,r.Z)({className:b,components:{body:{cell:_}},dataSource:n,columns:L,rowClassName:k},a))})},S="ListEntities_title__KL5RP",T="ListEntities_card__iz-Y6",F=function(e){var n=i.Z.Title,t=e.title,d=e.form,u=e.tableProps,x=d.onChange,f=d.fields,p=d.filters,h=d.buttons;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n,{className:S,children:t}),(0,w.jsx)(a.Z,{title:(0,w.jsx)(l.Z,{children:(0,w.jsxs)(s.Z,{name:"filters",layout:"inline",style:{width:"100%"},fields:f,onFieldsChange:function(e,n){x(n)},requiredMark:"optional",children:[(0,w.jsx)(c.Z,{xs:12,sm:14,children:(0,w.jsx)(o.Z,{size:[15,15],wrap:!0,style:{width:"100%"},children:p})}),(0,w.jsx)(c.Z,{xs:12,sm:10,style:{display:"flex",justifyContent:"flex-end"},children:(0,w.jsx)(o.Z,{size:[15,15],wrap:!0,children:h})})]})}),bordered:!1,className:T,bodyStyle:{padding:"1px 0px 0px"},children:(0,w.jsx)(I,(0,r.Z)({},u))})]})}},2687:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(1413),i=t(9439),a=t(2791),l=t(7309),s=t(570),c=t(6030),o=t(5213),d=t(2784),u=t(1822),x="ListCategories_addBtn__pwxqb",f=t(184),p=function(){var e=(0,c.I0)(),n=(0,c.v9)((function(e){return e.table})).category,t=n.categories,p=n.loading,h=(n.count,n.fields),m=(0,a.useState)(1),Z=(0,i.Z)(m,2),j=Z[0],g=Z[1],y=(0,a.useState)(5),b=(0,i.Z)(y,2),k=b[0];b[1];(0,a.useEffect)((function(){e((0,u.uT)())}),[]);var w=t.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{key:e.id})})),v=h.map((function(e){switch(e){case"name":return{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:e,key:e,editable:!0,width:"150px",render:function(e){return e?(0,f.jsx)(f.Fragment,{children:e}):null}};case"description":return{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",dataIndex:e,key:e,editable:!0,width:"250px",render:function(e){return e?(0,f.jsx)(f.Fragment,{children:e}):null}};default:return{title:e,dataIndex:e,key:e,render:function(e){return e?(0,f.jsx)(f.Fragment,{children:e}):null}}}})),C=(0,f.jsx)(s.Z.Item,{style:{margin:0},children:(0,f.jsx)(l.Z,{className:x,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})});return(0,f.jsx)(o.y,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439",form:{fields:null,onChange:null,filters:null,buttons:C},tableProps:{pagination:{position:["bottomCenter"],current:j,pageSize:k,onChange:function(e){g(e)},itemRender:function(e,n,t){return"prev"===n?(0,f.jsx)(l.Z,{icon:(0,f.jsx)(d.gY,{})}):"next"===n?(0,f.jsx)(l.Z,{icon:(0,f.jsx)(d.Ne,{})}):t},showSizeChanger:!1},showHeader:!0,columns:v,dataSource:w,loading:p,scroll:{x:350}}})}}}]);
//# sourceMappingURL=687.3273b63b.chunk.js.map