import{r as f,aq as e,ar as o}from"./index-ChUN-Hb1.js";import{c as p,u as x,r as u,t as j,b as a,B as y,f as N}from"./MyApp-hofN0p2Y.js";import{P as v}from"./index-D8jpdDyJ.js";import{L as T}from"./index-CRhHB1XV.js";import{T as l}from"./index-BmIhdVK7.js";import"./Pagination-D7zePFgL.js";import"./useBreakpoint-CI1HCjRW.js";import"./responsiveObserver-DZ4C7rpC.js";import"./index-D_grBprp.js";import"./PurePanel-BhLpfNvI.js";import"./TextArea-DCPCj0fB.js";import"./row-CxHPliGI.js";function b(t){switch(t){case"success":return e.jsx("i",{className:"fa-solid fa-circle-check fa-lg",style:{color:"lightgreen"}});case"info":return e.jsx("i",{className:"fa-solid fa-circle-info fa-lg",style:{color:"lightblue"}});case"warning":return e.jsx("i",{className:"fa-solid fa-circle-exclamation fa-lg",style:{color:"orange"}});case"error":return e.jsx("i",{className:"fa-solid fa-circle-xmark fa-lg",style:{color:"red"}});default:return null}}function q(){const{notifications:t,clearNotifications:n}=p(),{ti:s}=x(),c=f.useMemo(()=>u(t),[t]),m=(r,d)=>{var i;return e.jsxs(a,{align:"start",style:{paddingTop:10,paddingRight:10},children:[b(r.type),N(r.time),e.jsxs(a,{direction:"vertical",size:0,style:{maxWidth:400},children:[e.jsx(l.Text,{style:{fontWeight:"bold"},children:r.message}),(i=r.description)==null?void 0:i.split(`
`).map((g,h)=>e.jsx(l.Text,{type:"secondary",children:g},d+"_"+h))]})]})};return e.jsx(v,{trigger:"click",placement:"bottomRight",title:t!=null&&t.length?null:s({en:"Notification History",vi:"Lich sử Thông báo"}),onOpenChange:r=>r&&j("Notifications:open"),content:e.jsxs(e.Fragment,{children:[t!=null&&t.length?e.jsxs(a,{align:"end",style:{width:"100%",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[e.jsx("h3",{style:{margin:0},children:(t==null?void 0:t.length)+s({en:" Notifications",vi:" Thông báo"})}),e.jsx(o,{icon:e.jsx("i",{className:"fa-solid fa-eraser"}),onClick:n,children:s({en:"Clear",vi:"Xóa"})})]}):null,e.jsx("div",{style:{maxHeight:"70vh",overflowY:"auto"},children:e.jsx(T,{dataSource:c,renderItem:m,rowKey:r=>r.id,style:{maxWidth:500,minWidth:250}})})]}),children:e.jsx(y,{count:(t==null?void 0:t.length)||0,overflowCount:9,style:{color:"white"},children:e.jsx(o,{icon:e.jsx("i",{className:"fa-solid fa-bell"})})})})}export{q as default};