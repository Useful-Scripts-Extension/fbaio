const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-DLy5dCku.js","./index-C9a7kOyS.js","./index-CawCDZ84.css","./videos-Dm74OwMX.js","./MyApp-eLgOszab.js","./VideoWithMuted-BNfayS0A.js"])))=>i.map(i=>d[i]);
import{r as m,aL as i,co as n,aN as c,aV as u}from"./index-C9a7kOyS.js";import{C as f}from"./Collection-D8VGMlz0.js";import{w as h,B as a,a as x}from"./MyApp-eLgOszab.js";import{a as t,b as y,g as b}from"./videos-Dm74OwMX.js";import{L as w}from"./index-CuV0lcJx.js";import{I as v}from"./index-B9K95DAg.js";import"./index-1LBg6_PE.js";import"./file-download-DAQ-WD33.js";import"./index-BYTpD0UZ.js";import"./Dropdown-gfxpn-z7.js";import"./PurePanel-DJB0B014.js";import"./index-C9gPXY7f.js";import"./index-DmxoYqZk.js";import"./index-aY3yYPYF.js";import"./EyeOutlined-B_Sf26ve.js";import"./SearchOutlined-DrFTn-jV.js";import"./index-Ch8MZEP_.js";import"./Pagination-DPFRT-88.js";import"./useBreakpoint-C1qEcW11.js";import"./index-DZeVjoNF.js";import"./row-C9GAN_vR.js";import"./addEventListener-8k3J7yP4.js";const I=m.lazy(()=>u(()=>import("./VideoViewer-DLy5dCku.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function J({target:s}){const l=m.useCallback(async(o=[],e)=>{var r;return!(s!=null&&s.id)||!(s!=null&&s.type)?void 0:(e=e||((r=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:r.cursor)||"",((s==null?void 0:s.type)===h.Group?await t({id:s==null?void 0:s.id,cursor:e}):await y({id:s==null?void 0:s.id,cursor:e})).videos)},[s]),p=m.useCallback(async o=>{if(!o.source){const e=await b(o.id);o.source=e.source}return{url:o.source,name:o.id+".mp4"}},[]),d=m.useCallback(o=>i.jsx(w.Item,{className:"show-on-hover-trigger",children:i.jsxs(a.Ribbon,{text:o.length?n(o.length):null,style:{opacity:o.length?1:0},children:[i.jsx(v,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(I,{info:o,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),i.jsx(c,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:x(o.id)})]})}),[]);return i.jsx(f,{collectionName:(s==null?void 0:s.name)+" - Videos",fetchNext:l,renderItem:d,downloadItem:p,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{J as default};