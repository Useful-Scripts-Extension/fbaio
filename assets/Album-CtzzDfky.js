const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ImageLazyPreview-C3PuiiJQ.js","./index-CbmALuuH.js","./index-9SBFHPtm.css","./MyApp-CSAMTqBO.js","./index-BteK3TyS.js","./EyeOutlined-bOiBl9WP.js","./addEventListener-d94S1fEe.js"])))=>i.map(i=>d[i]);
import{r as t,aK as r,aM as f,aT as g}from"./index-CbmALuuH.js";import{C as I}from"./Collection-C09150M_.js";import{y as b,A as x,a3 as y,g as v}from"./MyApp-CSAMTqBO.js";import{c as w,M as d}from"./albums-KkTqTYkq.js";import{g as p}from"./videos-hEZ5iaNN.js";import{V as j}from"./VideoWithMuted-CsCb7y4m.js";import{L as _}from"./index-CaFC64cJ.js";import{I as A}from"./index-BteK3TyS.js";import"./index-DdEC0mzm.js";import"./file-download-DYrKRRrC.js";import"./index-B9TBq_SW.js";import"./Dropdown-BDP-pYzn.js";import"./PurePanel-D3TqmnjM.js";import"./index-olz3ICR1.js";import"./index-B2pl_Dfk.js";import"./index-8uFrtugN.js";import"./EyeOutlined-bOiBl9WP.js";import"./SearchOutlined-DmFVdWlm.js";import"./index-C5AaCaJO.js";import"./Pagination-C64K0uVr.js";import"./useBreakpoint-CU3Qgd7s.js";import"./responsiveObserver-x3pAB4c_.js";import"./index-EcSnQiHC.js";import"./row-DXKMoTEE.js";import"./addEventListener-d94S1fEe.js";const E=t.lazy(()=>g(()=>import("./ImageLazyPreview-C3PuiiJQ.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function Z({target:i,albumId:l,album:a}){const s=l||a.id,c=t.useCallback(async(o=[],e)=>{var n;return s?await w({albumId:s,accessToken:await b(x.EAAB),fromId:e||((n=o[o.length-1])==null?void 0:n.id)||""}):void 0},[s]),u=t.useCallback(o=>r.jsxs(_.Item,{className:"show-on-hover-trigger",children:[o.type==d.IMAGE?r.jsx(A,{src:o.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):r.jsx(E,{src:o.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+o.id,getPreview:()=>p(o.id).then(e=>e.source),renderPreview:(e,m)=>({destroyOnClose:!0,imageRender:()=>r.jsx(y,{spinning:m,children:r.jsx(j,{src:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),r.jsx(f,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:v(o.id)})]}),[]),h=t.useCallback(async o=>o.type==d.IMAGE?{url:o.uri,name:o.id+".jpg"}:{url:(await p(o.id)).source,name:o.id+".mp4"},[]);return r.jsx(I,{collectionName:(i==null?void 0:i.name)+" - Album "+a.name,fetchNext:c,renderItem:u,downloadItem:h,getItemCursor:o=>o.id,rowKey:o=>o.id})}export{Z as default};