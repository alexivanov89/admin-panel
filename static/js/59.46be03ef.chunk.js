"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[59],{7844:function(e,l,i){i.d(l,{e:function(){return t}});var d=i(5485),r=i(4564),a=i(1333),n={container:"EditPage_container__H1Sxw",cardInfo:"EditPage_cardInfo__Z71iu",cardSettings:"EditPage_cardSettings__W+W15",cardInfoHeader:"EditPage_cardInfoHeader__Ivr+U",cardInfoBody:"EditPage_cardInfoBody__rmFw9",cardInfoFooter:"EditPage_cardInfoFooter__534lY",cardSettingsHeader:"EditPage_cardSettingsHeader__dGSpf",cardSettingsBody:"EditPage_cardSettingsBody__LEk2P",divider:"EditPage_divider__ZvXJM"},o=i(184),t=function(e){var l=e.title,i=e.cardInfo,t=e.cardSettings,s=e.buttons,c=d.Z.Title;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{className:n.title,children:l}),(0,o.jsxs)("div",{className:n.container,children:[(0,o.jsxs)(r.Z,{bordered:!1,className:n.cardInfo,children:[(0,o.jsx)(r.Z.Grid,{hoverable:!1,className:n.cardInfoHeader,children:i.header}),(0,o.jsx)(a.Z,{className:n.divider}),(0,o.jsx)(r.Z.Grid,{hoverable:!1,className:n.cardInfoBody,children:i.body}),(0,o.jsx)(a.Z,{className:n.divider}),(0,o.jsx)(r.Z.Grid,{hoverable:!1,className:n.cardInfoFooter,children:i.footer})]}),(0,o.jsxs)(r.Z,{bordered:!1,className:n.cardSettings,bodyStyle:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,o.jsx)(r.Z.Grid,{hoverable:!1,className:n.cardSettingsHeader,children:t.header}),(0,o.jsxs)(r.Z.Grid,{hoverable:!1,className:n.cardSettingsBody,children:[t.body,s]})]})]})]})}},7154:function(e,l,i){i.d(l,{E:function(){return s}});var d=i(1413),r=i(9439),a=i(5987),n=i(2791),o=i(184),t=["fallback","src","alt"],s=function(e){var l=e.fallback,i=e.src,s=e.alt,c=(0,a.Z)(e,t),u=(0,n.useState)(i),v=(0,r.Z)(u,2),h=v[0],m=v[1];(0,n.useEffect)((function(){m(i)}),[i]);return(0,o.jsx)("img",(0,d.Z)({src:h||l,alt:s,onError:function(){return m(l)}},c))}},3059:function(e,l,i){i.r(l),i.d(l,{default:function(){return w}});var d=i(1413),r=i(9439),a=i(2791),n=i(6030),o=i(9271),t=i(5485),s=i(570),c=i(6106),u=i(914),v=i(3099),h=i(7309),m=i(4775),f=i(7063),g=i(8817),x=i(3734),I=i(8243),p=i(3231),Z=i(2014),_=i(1666),j=i(2426),N=i.n(j),F=(i(3333),i(6812)),S=i(7844),b=i(7154),P=i(9538),C=i(2784),E=(i(2311),i(8168)),y={cardInfoResult:"OrderEditPage_cardInfoResult__bkuUL",carImage:"OrderEditPage_carImage__Yvx1h",cardInfoTitle:"OrderEditPage_cardInfoTitle__CGZMm",cardInfoProgress:"OrderEditPage_cardInfoProgress__ZgE-b",progressTitle:"OrderEditPage_progressTitle__Wpkxy",progressValue:"OrderEditPage_progressValue__2s7U-",cardInfoSpace:"OrderEditPage_cardInfoSpace__uWrAD",cardInfoDescription:"OrderEditPage_cardInfoDescription__waS9B",cardSettingsHeader:"OrderEditPage_cardSettingsHeader__mPDhF",checkboxGroup:"OrderEditPage_checkboxGroup__w8LCd",radioGroup:"OrderEditPage_radioGroup__Qsh4U",checkbox:"OrderEditPage_checkbox__uC2Rv",input:"OrderEditPage_input__3+pss",inputNumber:"OrderEditPage_inputNumber__B+FD7",select:"OrderEditPage_select__0Eybh",form:"OrderEditPage_form__W0olU",saveBtn:"OrderEditPage_saveBtn__zuIUx",createBtn:"OrderEditPage_createBtn__ASppd",cancelBtn:"OrderEditPage_cancelBtn__3kNY7",deleteBtn:"OrderEditPage_deleteBtn__0SATf",groupBtnRight:"OrderEditPage_groupBtnRight__aHk3U"},k=i(184),w=function(){var e,l,i,j,w,O,T,V,B,R,q,G,H,W,L,D=t.Z.Text,U=s.Z.useForm(),z=(0,r.Z)(U,1)[0],A=(0,n.I0)(),K=(0,n.v9)((function(e){return e.table})),M=K.city.cities,Y=K.point.points,J=K.rate.rates,Q=K.car.cars,X=K.orderStatus.values,$=null===(e=(0,o.TH)().state)||void 0===e?void 0:e.order,ee=(0,a.useState)(100),le=(0,r.Z)(ee,2),ie=le[0],de=le[1],re=(0,a.useState)(null===$||void 0===$?void 0:$.isFullTank),ae=(0,r.Z)(re,2),ne=ae[0],oe=ae[1],te=(0,a.useState)(null===$||void 0===$?void 0:$.isNeedChildChair),se=(0,r.Z)(te,2),ce=se[0],ue=se[1],ve=(0,a.useState)(null===$||void 0===$?void 0:$.isRightWheel),he=(0,r.Z)(ve,2),me=he[0],fe=he[1],ge={orderStatusId:null===$||void 0===$||null===(l=$.orderStatusId)||void 0===l?void 0:l.id,carId:null===$||void 0===$||null===(i=$.carId)||void 0===i?void 0:i.id,pointId:null===$||void 0===$||null===(j=$.pointId)||void 0===j?void 0:j.id,rateId:null===$||void 0===$||null===(w=$.rateId)||void 0===w?void 0:w.id,cityId:null===$||void 0===$||null===(O=$.cityId)||void 0===O?void 0:O.id,color:null===$||void 0===$?void 0:$.color,price:null===$||void 0===$?void 0:$.price,isFullTank:null===$||void 0===$?void 0:$.isFullTank,isNeedChildChair:null===$||void 0===$?void 0:$.isNeedChildChair,isRightWheel:null===$||void 0===$?void 0:$.isRightWheel,dateFrom:N()(null===$||void 0===$?void 0:$.dateFrom),dateTo:N()(null===$||void 0===$?void 0:$.dateTo)},xe={path:null===$||void 0===$||null===(T=$.carId)||void 0===T||null===(V=T.thumbnail)||void 0===V?void 0:V.path,name:null===$||void 0===$||null===(B=$.carId)||void 0===B||null===(R=B.thumbnail)||void 0===R?void 0:R.originalname},Ie=(0,a.useState)(xe),pe=(0,r.Z)(Ie,2),Ze=pe[0],_e=pe[1],je=null===$||void 0===$||null===(q=$.carId)||void 0===q?void 0:q.name,Ne=(0,a.useState)(je),Fe=(0,r.Z)(Ne,2),Se=Fe[0],be=Fe[1],Pe=null===$||void 0===$||null===(G=$.carId)||void 0===G||null===(H=G.categoryId)||void 0===H?void 0:H.name,Ce=(0,a.useState)(Pe),Ee=(0,r.Z)(Ce,2),ye=Ee[0],ke=Ee[1],we=null===$||void 0===$||null===(W=$.carId)||void 0===W?void 0:W.description,Oe=(0,a.useState)(we),Te=(0,r.Z)(Oe,2),Ve=Te[0],Be=Te[1],Re=null===$||void 0===$||null===(L=$.carId)||void 0===L?void 0:L.colors,qe=(0,a.useState)(Re),Ge=(0,r.Z)(qe,2),He=Ge[0],We=(Ge[1],X),Le=Q,De=M,Ue=(0,a.useState)(Y.filter((function(e){var l,i;return(null===e||void 0===e||null===(l=e.cityId)||void 0===l?void 0:l.id)===(null===$||void 0===$||null===(i=$.cityId)||void 0===i?void 0:i.id)}))),ze=(0,r.Z)(Ue,2),Ae=ze[0],Ke=ze[1],Me=J;(0,a.useEffect)((function(){A((0,E.nl)()),A((0,E.d2)())}),[]);var Ye=(0,k.jsxs)(c.Z,{children:[(0,k.jsx)(u.Z,{span:12,children:(0,k.jsx)(s.Z.Item,{children:(0,k.jsxs)(v.Z,{size:12.5,wrap:!0,children:[(0,k.jsx)(h.Z,{type:"primary",htmlType:"submit",className:y.saveBtn,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),(0,k.jsx)(h.Z,{className:y.cancelBtn,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})})}),(0,k.jsx)(u.Z,{span:12,className:y.groupBtnRight,children:(0,k.jsxs)(v.Z,{size:12.5,wrap:!0,children:[(0,k.jsx)(h.Z,{className:y.createBtn,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),(0,k.jsx)(s.Z.Item,{children:(0,k.jsx)(h.Z,{className:y.deleteBtn,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})})]});return(0,k.jsx)(m.ZP,{locale:F.Z,children:(0,k.jsx)(s.Z,{name:"form",layout:"vertical",initialValues:ge,autoComplete:"off",requiredMark:!1,className:y.form,form:z,onFinish:function(){z.validateFields().then((function(e){var l,i;console.log("fieldsValue:",e);var r=(0,d.Z)((0,d.Z)({},e),{},{orderStatusId:{id:z.getFieldValue("orderStatusId")},carId:{id:z.getFieldValue("carId")},cityId:{id:z.getFieldValue("cityId")},pointId:{id:z.getFieldValue("pointId")},rateId:{id:z.getFieldValue("rateId")},dateFrom:null===(l=z.getFieldValue("dateFrom"))||void 0===l?void 0:l.valueOf(),dateTo:null===(i=z.getFieldValue("dateTo"))||void 0===i?void 0:i.valueOf()});console.log("prepareFieldsValue:",r)})).catch((function(e){}))},onFieldsChange:function(e,l){console.log("allFields:",l);de(function(e){var l=e.filter((function(e){var l=e.name;return!["isFullTank","isNeedChildChair","isRightWheel"].includes(l[0])})),i=l.length,d=l.filter((function(e){var l=e.value;return Array.isArray(l)?l.length>0:Boolean(l)})).length;return Math.round(100*d/i)}(l))},children:(0,k.jsx)(S.e,{title:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430",buttons:Ye,cardInfo:{header:(0,k.jsx)(f.ZP,{icon:(0,k.jsx)("div",{className:y.carImage,children:(0,k.jsx)(b.E,{src:null===Ze||void 0===Ze?void 0:Ze.path,alt:null===Ze||void 0===Ze?void 0:Ze.name,fallback:P,loading:"lazy"})}),title:Se,subTitle:ye,extra:null,className:y.cardInfoResult}),body:(0,k.jsx)(g.Z,{percent:ie,format:function(e){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("p",{className:y.progressTitle,children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"}),(0,k.jsxs)("p",{className:y.progressValue,children:[e,"%"]})]})},className:y.cardInfoProgress}),footer:(0,k.jsxs)(v.Z,{direction:"vertical",size:13.5,className:y.cardInfoSpace,children:[(0,k.jsx)(D,{className:y.cardInfoTitle,children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,k.jsx)(D,{className:y.cardInfoDescription,children:Ve})]})},cardSettings:{header:(0,k.jsx)("h2",{className:y.cardSettingsHeader,children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u0430: id ".concat(null===$||void 0===$?void 0:$.id)}),body:(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(c.Z,{gutter:[21,8],children:[(0,k.jsx)(u.Z,{xs:24,sm:12,children:(0,k.jsx)(s.Z.Item,{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043a\u0430\u0437\u0430",name:"orderStatusId",rules:[{required:!0,message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043a\u0430\u0437\u0430!"}],className:y.formItem,children:(0,k.jsx)(x.Z,{showSearch:!0,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043a\u0430\u0437\u0430",optionFilterProp:"children",filterSort:function(e,l){return e.children.toLowerCase().localeCompare(l.children.toLowerCase())},suffixIcon:(0,k.jsx)(C.K,{}),className:y.select,allowClear:!0,children:(null===We||void 0===We?void 0:We.length)>0&&We.map((function(e){return(0,k.jsx)(x.Z.Option,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))})})}),(0,k.jsx)(u.Z,{xs:24,sm:12,children:(0,k.jsx)(s.Z.Item,{label:"\u041c\u043e\u0434\u0435\u043b\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",name:"carId",rules:[{required:!0,message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043e\u0434\u0435\u043b\u044c!"}],className:y.formItem,children:(0,k.jsx)(x.Z,{showSearch:!0,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043e\u0434\u0435\u043b\u044c",optionFilterProp:"children",filterSort:function(e,l){return e.children.toLowerCase().localeCompare(l.children.toLowerCase())},suffixIcon:(0,k.jsx)(C.K,{}),className:y.select,onSelect:function(e,l){var i,d,r,a,n=function(e){return Q.find((function(l){return(null===l||void 0===l?void 0:l.id)===e}))}(null===l||void 0===l?void 0:l.value);_e({path:null===n||void 0===n||null===(i=n.thumbnail)||void 0===i?void 0:i.path,name:null===n||void 0===n||null===(d=n.thumbnail)||void 0===d?void 0:d.originalname}),be(null===n||void 0===n?void 0:n.name),ke(null===n||void 0===n||null===(r=n.categoryId)||void 0===r?void 0:r.name),Be(null===n||void 0===n||null===(a=n.categoryId)||void 0===a?void 0:a.description)},allowClear:!0,children:(null===Le||void 0===Le?void 0:Le.length)>0&&Le.map((function(e){return(0,k.jsx)(x.Z.Option,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))})})}),(0,k.jsx)(u.Z,{xs:24,sm:12,children:(0,k.jsx)(s.Z.Item,{label:"\u0413\u043e\u0440\u043e\u0434",name:"cityId",rules:[{required:!0,message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434!"}],className:y.formItem,children:(0,k.jsx)(x.Z,{showSearch:!0,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",optionFilterProp:"children",filterSort:function(e,l){return e.children.toLowerCase().localeCompare(l.children.toLowerCase())},suffixIcon:(0,k.jsx)(C.K,{}),className:y.select,onSelect:function(e,l){var i=Y.filter((function(e){var i;return(null===e||void 0===e||null===(i=e.cityId)||void 0===i?void 0:i.id)===l.value}));Ke(i);var r=z.getFieldsValue(!0);z.setFieldsValue((0,d.Z)((0,d.Z)({},r),{},{pointId:null}))},onClear:function(){var e=z.getFieldsValue(!0);z.setFieldsValue((0,d.Z)((0,d.Z)({},e),{},{pointId:null})),Ke([])},allowClear:!0,children:(null===De||void 0===De?void 0:De.length)>0&&De.map((function(e){return(0,k.jsx)(x.Z.Option,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))})})}),(0,k.jsx)(u.Z,{xs:24,sm:12,children:(0,k.jsx)(s.Z.Item,{label:"\u041f\u0443\u043d\u043a\u0442",name:"pointId",rules:[{required:!0,message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0443\u043d\u043a\u0442!"}],className:y.formItem,children:(0,k.jsx)(x.Z,{showSearch:!0,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0443\u043d\u043a\u0442",optionFilterProp:"children",filterSort:function(e,l){return e.children.toLowerCase().localeCompare(l.children.toLowerCase())},suffixIcon:(0,k.jsx)(C.K,{}),className:y.select,allowClear:!0,children:(null===Ae||void 0===Ae?void 0:Ae.length)>0&&Ae.map((function(e){return(0,k.jsx)(x.Z.Option,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))})})}),(0,k.jsx)(u.Z,{xs:24,sm:12,children:(0,k.jsx)(s.Z.Item,{label:"\u0422\u0430\u0440\u0438\u0444",name:"rateId",rules:[{required:!0,message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0430\u0440\u0438\u0444!"}],className:y.formItem,children:(0,k.jsx)(x.Z,{showSearch:!0,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0430\u0440\u0438\u0444",optionFilterProp:"children",suffixIcon:(0,k.jsx)(C.K,{}),className:y.select,allowClear:!0,children:(null===Me||void 0===Me?void 0:Me.length)>0&&Me.map((function(e){var l;return(0,k.jsx)(x.Z.Option,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e||null===(l=e.rateTypeId)||void 0===l?void 0:l.name},null===e||void 0===e?void 0:e.id)}))})})}),(0,k.jsx)(u.Z,{xs:24,sm:12,children:(0,k.jsx)(s.Z.Item,{name:"price",label:"\u0426\u0435\u043d\u0430",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043d\u0443!"}],className:y.formItem,children:(0,k.jsx)(I.Z,{min:1,className:y.inputNumber})})}),(0,k.jsx)(u.Z,{xs:24,sm:12,children:(0,k.jsx)(s.Z.Item,{label:"\u0426\u0432\u0435\u0442 \u043c\u0430\u0448\u0438\u043d\u044b",name:"color",rules:[{required:!0,message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442!"}],className:y.formItem,children:(0,k.jsx)(p.ZP.Group,{options:He,className:y.radioGroup})})}),(0,k.jsx)(u.Z,{xs:0,sm:12}),(0,k.jsxs)(u.Z,{xs:24,sm:12,children:[(0,k.jsx)(s.Z.Item,{name:"isFullTank",rules:[{required:!1}],className:y.formItem,children:(0,k.jsx)(Z.Z,{checked:ne,onChange:function(e){oe(e.target.checked);var l=z.getFieldsValue(!0);z.setFieldsValue((0,d.Z)((0,d.Z)({},l),{},{isFullTank:!z.getFieldValue("isFullTank")}))},className:y.checkbox,children:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a"})}),(0,k.jsx)(s.Z.Item,{name:"isNeedChildChair",rules:[{required:!1}],className:y.formItem,children:(0,k.jsx)(Z.Z,{checked:ce,onChange:function(e){ue(e.target.checked);var l=z.getFieldsValue(!0);z.setFieldsValue((0,d.Z)((0,d.Z)({},l),{},{isNeedChildChair:!z.getFieldValue("isNeedChildChair")}))},className:y.checkbox,children:"\u0414\u0435\u0442\u0441\u043a\u043e\u0435 \u0441\u0438\u0434\u0435\u043d\u0438\u0435"})}),(0,k.jsx)(s.Z.Item,{name:"isRightWheel",rules:[{required:!1}],className:y.formItem,children:(0,k.jsx)(Z.Z,{checked:me,onChange:function(e){fe(e.target.checked);var l=z.getFieldsValue(!0);z.setFieldsValue((0,d.Z)((0,d.Z)({},l),{},{isRightWheel:!z.getFieldValue("isRightWheel")}))},className:y.checkbox,children:"\u041f\u0440\u0430\u0432\u044b\u0439 \u0440\u0443\u043b\u044c"})})]}),(0,k.jsx)(u.Z,{xs:0,sm:12}),(0,k.jsx)(u.Z,{xs:24,sm:12,children:(0,k.jsx)(s.Z.Item,{name:"dateFrom",label:"\u0414\u0430\u0442\u0430 \u0430\u0440\u0435\u043d\u0434\u044b \u0441 ",rules:[{type:"object",required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443!"}],className:y.formItem,children:(0,k.jsx)(_.Z,{showTime:!0})})}),(0,k.jsx)(u.Z,{xs:24,sm:12,children:(0,k.jsx)(s.Z.Item,{name:"dateTo",label:"\u0414\u0430\u0442\u0430 \u0430\u0440\u0435\u043d\u0434\u044b \u043f\u043e ",rules:[{type:"object",required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443!"}],className:y.formItem,children:(0,k.jsx)(_.Z,{showTime:!0})})})]})})}})})})}},9538:function(e,l,i){e.exports=i.p+"static/media/noFoto.204ef07232dc7deae70c.jpg"}}]);
//# sourceMappingURL=59.46be03ef.chunk.js.map