(this["webpackJsonpfluid-keynotes"]=this["webpackJsonpfluid-keynotes"]||[]).push([[1],{103:function(e,t,n){},387:function(e,t){},409:function(e,t,n){"use strict";n.r(t),n.d(t,"start",(function(){return k}));var r=n(1),c=n(0),a=n.n(c),o=(n(103),n(9)),i=n.n(o),s=n(205),u=n.n(s),d=n(442),f=n(445),l=n(439),h=n(95),j=n(207),b={initialObjects:{myMap:f.b}},x=(Object(h.a)(),Object(l.a)(),{connection:{tenantId:"b801a86a-3a95-4a4c-883d-edb778658a74",tokenProvider:new j.InsecureTokenProvider("d3a190af6ef61f8f847a7ae40b12d3f4",{id:"userId"}),orderer:"https://alfred.westus2.fluidrelay.azure.com",storage:"https://historian.westus2.fluidrelay.azure.com"}}),O=n(6),p=n(7),v=n(441),w=n(26);function y(e){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.id}),Object(w.jsx)("td",{children:Object(w.jsx)(v.a,{class:"text-field",onChange:function(t){return e.setText(t.currentTarget.value)},value:e.text,placeholder:"Enter Text Here"})})]})}function g(e){var t=e.container,n=i.a.useState(function(e){var t=e.initialObjects.myMap,n=function(e,n){t.set(e,n)};return 0===Array.from(t.keys()).length&&(n(0,"note zero"),n(1,"note one"),n(2,"note two"),n(3,"note three")),{CreateNote:function(e){return{id:e,text:t.get(e)}},SetNoteText:n,get NoteIds(){return Array.from(t.keys())},setChangeListener:function(e){t.on("valueChanged",e)}}}(t)),r=Object(p.a)(n,1)[0],c=i.a.useState([]),a=Object(p.a)(c,2),o=a[0],s=a[1];i.a.useEffect((function(){var e=function(){var e,t=[],n=r.NoteIds,c=Object(O.a)(n);try{for(c.s();!(e=c.n()).done;){var a=e.value,o=r.CreateNote(a);t.push(o)}}catch(i){c.e(i)}finally{c.f()}s(t)};e(),r.setChangeListener(e)}),[r]);return Object(w.jsxs)("table",{children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Key"}),Object(w.jsx)("td",{children:"Note"})]})}),Object(w.jsx)("tbody",{children:o.map((function(e,t){return Object(w.jsx)(y,{id:e.id,text:e.text,setText:function(t){!function(e,t){r.SetNoteText(e,t)}(e.id,t)}},e.id)}))})]})}function k(){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(a.a.mark((function e(){var t,n,r,c,o,i,s,f,l,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=function(){var e=!1;return 0===window.location.hash.length&&(e=!0),{containerId:window.location.hash.substring(1),isNew:e}},n=t(),r=n.containerId,c=n.isNew,o=new d.a(x),!c){e.next=15;break}return e.next=6,o.createContainer(b);case 6:return f=e.sent,i=f.container,s=f.services,e.next=11,i.attach();case 11:l=e.sent,window.location.hash=l,e.next=20;break;case 15:return e.next=17,o.getContainer(r,b);case 17:h=e.sent,i=h.container,s=h.services;case 20:if(s||console.log("missing services"),i.connected){e.next=24;break}return e.next=24,new Promise((function(e){i.once("connected",(function(){e()}))}));case 24:u.a.render(Object(w.jsx)("div",{children:Object(w.jsx)(g,{container:i})}),document.getElementById("root"));case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}k().catch((function(e){return console.error(e)}))}},[[409,2,3]]]);
//# sourceMappingURL=main.b8d9c962.chunk.js.map