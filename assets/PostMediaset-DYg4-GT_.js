const __vite__fileDeps=["./ImageLazyPreview-DoEgfLuG.js","./index-CiqHonqG.js","./index-DfqnkV-X.css","./MyApp-BK3WXPWS.js","./index-Dr8g8EMa.js","./EyeOutlined-Cz7AFRl_.js","./addEventListener-Cumd2fTL.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as u,av as o,aw as j,aA as y}from"./index-CiqHonqG.js";import{C as b}from"./Collection-BH2LjV31.js";import{g as c}from"./videos-DrGYRsHa.js";import{u as g,c as P,e as l,at as V,G as _,h as k,b as L,au as I,ad as C}from"./MyApp-BK3WXPWS.js";import{i as E}from"./icons-DktcdV4T.js";import{V as M}from"./VideoWithMuted-CpJiPPFX.js";import{A as N}from"./index-CqU0B0cD.js";import{L as F}from"./index-B33EjJkC.js";import"./index-DRam9FhS.js";import"./file-download-wwe2wnqN.js";import"./index-B64Bnvgx.js";import"./Dropdown-X8gX3BUB.js";import"./PurePanel-C7vt4FTg.js";import"./index-DEc60f7A.js";import"./index-Mh2hjKM_.js";import"./index-TKSdDrE6.js";import"./EyeOutlined-Cz7AFRl_.js";import"./SearchOutlined-BQr2Q1Wv.js";import"./index-30itbAAC.js";import"./Pagination-D4ptuC4f.js";import"./useBreakpoint-Bdeh8Df6.js";import"./responsiveObserver-BzL1esFn.js";import"./index-L5dzJf2_.js";import"./row-DCFVYepe.js";const R=u.lazy(()=>y(()=>import("./ImageLazyPreview-DoEgfLuG.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function te({target:i,postId:n}){const{ti:r}=g(),{message:p}=P(),[t,h]=l("PostMediaset."+n+".mediaset_token",null),[f,d]=l("PostMediaset."+n+".loading",!1);u.useEffect(()=>{i!=null&&i.id&&n&&(d(!0),V(i==null?void 0:i.id,n).then(e=>{console.log(e);const s=_(e,"mediaset_token");if(!s)throw new Error("No mediaset token found");h(s)}).catch(e=>{p.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+e.message})}).finally(()=>{d(!1)}))},[n]);const v=async(e=[],s)=>{var m;if(!(i!=null&&i.id)||!t)return;const a=s||((m=e[e.length-1])==null?void 0:m.cursor);return await I(t,a)},x=e=>o.jsxs(F.Item,{style:{position:"relative"},children:[o.jsx(R,{src:e.image,width:200/e.height*e.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+e.id,getPreview:async()=>e.isVideo?(await c(e.id)).source:e.image,renderPreview:e.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>o.jsx(C,{spinning:a,children:o.jsx(M,{src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),e.isVideo&&o.jsx("div",{style:{position:"absolute",top:10,right:10},children:E.IGVideo})]}),w=async e=>{if(e.isVideo){const s=await c(e.id);return{name:e.id+".mp4",url:s.source}}return{name:e.id+".jpg",url:e.image}};return o.jsx(b,{collectionName:(i==null?void 0:i.name)+" - Post media - "+n,fetchNext:v,renderItem:x,downloadItem:w,getItemCursor:e=>e.cursor,rowKey:e=>e.id,stop:!(i!=null&&i.id)||!t,headerButtons:()=>o.jsx(j,{href:k(n),target:"_blank",icon:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})}),header:()=>f?o.jsxs(L,{children:[o.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," ",r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})]}):t?null:o.jsx(N,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"})})})}export{te as default};