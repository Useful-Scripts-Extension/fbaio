const __vite__fileDeps=["./VideoViewer-C_b1nGKC.js","./index-Ce8dCClm.js","./index-DfqnkV-X.css","./VideoWithMuted-Co0AkRDR.js","./MyApp-B3dBhFw3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r,av as e,aw as h,aA as u}from"./index-Ce8dCClm.js";import{Q as a,B as f,ac as x,ad as v,h as w}from"./MyApp-B3dBhFw3.js";import{C as b}from"./Collection-ZTCmWih3.js";import{a as t,b as y,g as p}from"./videos-BRbOI_ut.js";import j from"./ImageLazyPreview-CllCTZkZ.js";import{L as I}from"./index-DLYzrYug.js";import"./index-DNUe9j7U.js";import"./file-download-D1J_PtQ4.js";import"./index-S1rcizUY.js";import"./Dropdown-kjr5K43T.js";import"./PurePanel-BxE60psP.js";import"./index-DlK1wJsv.js";import"./index-DH8HayOr.js";import"./index-DcBAiDx1.js";import"./EyeOutlined-BuJlsZ18.js";import"./SearchOutlined-CuGj3VAc.js";import"./index-ByUYiutJ.js";import"./index-bfHmpTLf.js";import"./addEventListener-CQrUvR60.js";import"./Pagination-tjF8ameC.js";import"./useBreakpoint-DdrZFKUW.js";import"./responsiveObserver-AfdxC7nf.js";import"./index-Cbt5uQ30.js";import"./row-BDNAnGD4.js";const V=r.lazy(()=>u(()=>import("./VideoViewer-C_b1nGKC.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url));function X({target:i}){const l=r.useCallback(async(o=[],s)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((m=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:m.cursor)||"",((i==null?void 0:i.type)===a.Group?await t({id:i==null?void 0:i.id,cursor:s}):await y({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),n=r.useCallback(async o=>{if(!o.source){const s=await p(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=r.useCallback(o=>e.jsx(I.Item,{className:"show-on-hover-trigger",children:e.jsxs(f.Ribbon,{text:o.length?x(o.length):null,children:[e.jsx(j,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"video."+o.id,getPreview:()=>o.source||p(o.id),renderPreview:(s,d)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:d,children:e.jsx(V,{info:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),e.jsx(h,{type:"default",icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:w(o.id)})]})}),[]);return e.jsx(b,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:l,renderItem:c,downloadItem:n,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{X as default};