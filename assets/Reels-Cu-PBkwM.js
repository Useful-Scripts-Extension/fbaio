const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-BjViZtrd.js","./index-DKyUkP6l.js","./index-9SBFHPtm.css","./videos-C3DjduMj.js","./MyApp-BDLwB7h-.js","./VideoWithMuted-Ckquv6r3.js"])))=>i.map(i=>d[i]);
import{aH as p,r as l,aJ as o,aL as d,bl as h,ci as u,ba as f,b8 as x,b0 as b,aS as g}from"./index-DKyUkP6l.js";import{C as j}from"./Collection-BC6vIOGa.js";import{S as r,g as v}from"./MyApp-BDLwB7h-.js";import{g as w}from"./reels-CeyjW_1x.js";import{L as y}from"./index-hBKCfRCI.js";import{I as N}from"./index-C7D-X_nD.js";import{T as R}from"./index-DPRQSzuc.js";import"./index-QWfpmwO1.js";import"./file-download-DIagG7Yu.js";import"./index-8_b5udcl.js";import"./Dropdown-CVGqYSad.js";import"./PurePanel-CqHWrtmI.js";import"./index-GK0vunuk.js";import"./index-v1iB0WGq.js";import"./EyeOutlined-DTZsWLMy.js";import"./SearchOutlined-DIYILmvi.js";import"./index-BxhEqtJw.js";import"./videos-C3DjduMj.js";import"./Pagination-fOL6YILi.js";import"./useBreakpoint-DZFtf331.js";import"./responsiveObserver-BxjPScz9.js";import"./index-84eFfaCJ.js";import"./row-D1L4EmjN.js";import"./addEventListener-CXr0G5bM.js";const _=l.lazy(()=>g(()=>import("./VideoViewer-BjViZtrd.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Y({target:i}){const{ti:n}=p(),a=l.useCallback(async(s=[],e)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(e=e||((m=s==null?void 0:s[(s==null?void 0:s.length)-1])==null?void 0:m.cursor)||"",await w({id:i.id,cursor:e}))},[i]),t=l.useCallback(async s=>({url:s.source,name:s.id+".mp4"}),[]),c=l.useCallback(s=>o.jsx(y.Item,{children:o.jsxs(r,{direction:"vertical",children:[o.jsxs("div",{className:"show-on-hover-trigger",children:[o.jsx(N,{src:s.thumbnail,width:200,height:300,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>o.jsx(_,{info:s,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),o.jsx(d,{type:"default",icon:o.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:v(s.id)})]}),o.jsx(R.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(s.url),children:h(s.description,100)}),o.jsxs(r,{direction:"vertical",size:1,style:{position:"absolute",top:0,left:0,padding:10,paddingBottom:50,width:"100%",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",pointerEvents:"none"},children:[o.jsxs(r,{children:[o.jsx("i",{className:"fa-regular fa-eye"}),s.viewCount]}),o.jsxs(r,{children:[o.jsx("i",{className:"fa-solid fa-film"}),s.length?u(s.length):null]}),o.jsxs(r,{children:[o.jsx("i",{className:"fa-regular fa-clock"}),f(s.created_time)]}),s.music?o.jsxs(r,{align:"start",size:4,children:[o.jsx("i",{className:"fa-solid fa-music"})," ",s.music]}):null]})]})}),[]);return o.jsx(j,{collectionName:(i==null?void 0:i.name)+" - Reels",fetchNext:a,renderItem:c,downloadItem:t,getItemCursor:s=>s.cursor,rowKey:s=>s.id,searchPlaceholder:s=>n({en:`Seach in ${s==null?void 0:s.length} Reels`,vi:`Tìm kiếm trong ${s==null?void 0:s.length} Reels`}),onSearch:(s,e)=>x(s,e.description+e.music+b(e.created_time,n({en:"en-US",vi:"vi-VN"})))})}export{Y as default};