const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-D5iH8ebg.js","./index-CbmALuuH.js","./index-9SBFHPtm.css","./videos-hEZ5iaNN.js","./MyApp-CSAMTqBO.js","./VideoWithMuted-CsCb7y4m.js"])))=>i.map(i=>d[i]);
import{aI as p,r as l,aK as o,aM as d,bm as h,ci as u,bb as f,b9 as x,b1 as b,aT as g}from"./index-CbmALuuH.js";import{C as j}from"./Collection-C09150M_.js";import{S as r,g as v}from"./MyApp-CSAMTqBO.js";import{g as w}from"./reels-CyXUP_jz.js";import{L as y}from"./index-CaFC64cJ.js";import{I as N}from"./index-BteK3TyS.js";import{T as R}from"./index-8uFrtugN.js";import"./index-DdEC0mzm.js";import"./file-download-DYrKRRrC.js";import"./index-B9TBq_SW.js";import"./Dropdown-BDP-pYzn.js";import"./PurePanel-D3TqmnjM.js";import"./index-olz3ICR1.js";import"./index-B2pl_Dfk.js";import"./EyeOutlined-bOiBl9WP.js";import"./SearchOutlined-DmFVdWlm.js";import"./index-C5AaCaJO.js";import"./videos-hEZ5iaNN.js";import"./Pagination-C64K0uVr.js";import"./useBreakpoint-CU3Qgd7s.js";import"./responsiveObserver-x3pAB4c_.js";import"./index-EcSnQiHC.js";import"./row-DXKMoTEE.js";import"./addEventListener-d94S1fEe.js";const _=l.lazy(()=>g(()=>import("./VideoViewer-D5iH8ebg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Y({target:i}){const{ti:n}=p(),a=l.useCallback(async(s=[],e)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(e=e||((m=s==null?void 0:s[(s==null?void 0:s.length)-1])==null?void 0:m.cursor)||"",await w({id:i.id,cursor:e}))},[i]),t=l.useCallback(async s=>({url:s.source,name:s.id+".mp4"}),[]),c=l.useCallback(s=>o.jsx(y.Item,{children:o.jsxs(r,{direction:"vertical",children:[o.jsxs("div",{className:"show-on-hover-trigger",children:[o.jsx(N,{src:s.thumbnail,width:200,height:300,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>o.jsx(_,{info:s,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),o.jsx(d,{type:"default",icon:o.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:v(s.id)})]}),o.jsx(R.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(s.url),children:h(s.description,100)}),o.jsxs(r,{direction:"vertical",size:1,style:{position:"absolute",top:0,left:0,padding:10,paddingBottom:50,width:"100%",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",pointerEvents:"none"},children:[o.jsxs(r,{children:[o.jsx("i",{className:"fa-regular fa-eye"}),s.viewCount]}),o.jsxs(r,{children:[o.jsx("i",{className:"fa-solid fa-film"}),s.length?u(s.length):null]}),o.jsxs(r,{children:[o.jsx("i",{className:"fa-regular fa-clock"}),f(s.created_time)]}),s.music?o.jsxs(r,{align:"start",size:4,children:[o.jsx("i",{className:"fa-solid fa-music"})," ",s.music]}):null]})]})}),[]);return o.jsx(j,{collectionName:(i==null?void 0:i.name)+" - Reels",fetchNext:a,renderItem:c,downloadItem:t,getItemCursor:s=>s.cursor,rowKey:s=>s.id,searchPlaceholder:s=>n({en:`Seach in ${s==null?void 0:s.length} Reels`,vi:`Tìm kiếm trong ${s==null?void 0:s.length} Reels`}),onSearch:(s,e)=>x(s,e.description+e.music+b(e.created_time,n({en:"en-US",vi:"vi-VN"})))})}export{Y as default};