import{r as f,av as e,aw as o}from"./index-Cu5DMrqP.js";import{c as p,u as x,r as u,t as j,b as a,B as y,f as v}from"./MyApp-CBJyifzj.js";import{P as N}from"./index-CdtiqYN9.js";import{L as w}from"./index-Bsb2O4uF.js";import{T as l}from"./index-B6wF2DLX.js";import"./Pagination-ttRdgmts.js";import"./useBreakpoint-otqirn5h.js";import"./responsiveObserver-eHs-qAkp.js";import"./index-DhpzbMQc.js";import"./PurePanel-Cc9k44PN.js";import"./SearchOutlined-BE8biauy.js";import"./row-G-tErKJJ.js";function T(t){switch(t){case"success":return e.jsx("i",{className:"fa-solid fa-circle-check fa-lg",style:{color:"lightgreen"}});case"info":return e.jsx("i",{className:"fa-solid fa-circle-info fa-lg",style:{color:"lightblue"}});case"warning":return e.jsx("i",{className:"fa-solid fa-circle-exclamation fa-lg",style:{color:"orange"}});case"error":return e.jsx("i",{className:"fa-solid fa-circle-xmark fa-lg",style:{color:"red"}});default:return null}}function z(){const{notifications:t,clearNotifications:n}=p(),{ti:r}=x(),c=f.useMemo(()=>u(t),[t]),m=(s,d)=>{var i;return e.jsxs(a,{align:"start",style:{paddingTop:10,paddingRight:10},children:[T(s.type),v(s.time),e.jsxs(a,{direction:"vertical",size:0,style:{maxWidth:400},children:[e.jsx(l.Text,{style:{fontWeight:"bold"},children:s.message}),(i=s.description)==null?void 0:i.split(`
`).map((g,h)=>e.jsx(l.Text,{type:"secondary",children:g},d+"_"+h))]})]})};return e.jsx(N,{trigger:"click",placement:"bottomRight",title:t!=null&&t.length?null:r({en:"Notification History",vi:"Lich sử Thông báo"}),onOpenChange:s=>s&&j("Notifications:open"),content:e.jsxs(e.Fragment,{children:[t!=null&&t.length?e.jsxs(a,{align:"end",style:{width:"100%",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[e.jsx("h3",{style:{margin:0},children:(t==null?void 0:t.length)+r({en:" Notifications",vi:" Thông báo"})}),e.jsx(o,{icon:e.jsx("i",{className:"fa-solid fa-eraser"}),onClick:n,children:r({en:"Clear",vi:"Xóa"})})]}):null,e.jsx("div",{style:{maxHeight:"70vh",overflowY:"auto"},children:e.jsx(w,{dataSource:c,renderItem:m,rowKey:s=>s.id,style:{maxWidth:500,minWidth:250}})})]}),children:e.jsx(y,{count:(t==null?void 0:t.length)||0,overflowCount:9,style:{color:"white"},children:e.jsx(o,{icon:e.jsx("i",{className:"fa-solid fa-bell"})})})})}export{z as default};