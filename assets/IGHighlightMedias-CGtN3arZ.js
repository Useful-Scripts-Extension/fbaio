import{r as i,ao as t}from"./index-DB0Mkjis.js";import{i as d}from"./icons-GbP9xTSi.js";import{C as c}from"./Collection-CPdHLqYG.js";import{a as l}from"./highlights-DHmLL_jt.js";import{L as u}from"./index-BZuw-wF1.js";import{I as x}from"./index-UmZ1EKUw.js";import"./index-Cp-YLrOI.js";import"./file-download-B23g6D-q.js";import"./MyApp-CjW7GEY5.js";import"./index-9WeihvJ9.js";import"./Dropdown-BO63tnl_.js";import"./PurePanel-CcUiFl_l.js";import"./index-DuGRWZXr.js";import"./index-BTfaKWHI.js";import"./index-D7A8h7bO.js";import"./TextArea-v-1KDXbx.js";import"./addEventListener-BrHl9dJj.js";import"./index-DVx-SK_v.js";import"./index-B8Hv8l7o.js";import"./index-vuHwb1ab.js";import"./index-BewpFtsU.js";import"./responsiveObserver-C0EOcVrK.js";import"./useBreakpoint-Dvx_U3SW.js";import"./index-CrnIiOd3.js";import"./index-CbdPwEUh.js";import"./index-D_RhD2ny.js";import"./index-CGuOgooH.js";import"./Pagination-BuomFPJe.js";import"./row-Cac2YIRH.js";function S({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{S as default};