const __vite__fileDeps=["./ArchivedStoryViewer-C8kl8O1L.js","./index-CvSYKBTS.js","./index-DfqnkV-X.css","./MyApp-B7599wVn.js","./StoryViewers-DjNWoEnD.js","./Collection-10aUGROH.js","./index-Dsgt9Kvy.js","./file-download-CDcwZSFa.js","./index-Dyhrwa_F.js","./Dropdown-Bdn4kCe8.js","./PurePanel-Bj8GlKp5.js","./index-BLpmTFnH.js","./index-DWkOHrl6.js","./index-_maCyi6b.js","./EyeOutlined-CdTomyHc.js","./SearchOutlined--BwmyEo4.js","./index-DvCxxZ0I.js","./Pagination-DPBlKUh6.js","./useBreakpoint-CFiZuY5Z.js","./responsiveObserver-D0yqgQJK.js","./index-CmgKzT4V.js","./row-DDG6H_rG.js","./index-CqMTtQhm.js","./stories-Q1rUdn39.js","./index-CCckw-BJ.js","./index-DpAni9Hv.js","./VideoWithMuted-C7XvZ-bG.js","./index-C_Z81Pec.js","./addEventListener-Dc5J2yso.js","./index-CAM9JuK2.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as u,aA as o,aF as S,aB as m,aS as C}from"./index-CvSYKBTS.js";import{u as _,d as T,t as p,b as f,ax as A,f as D,i as N,y as E,C as F,O as I}from"./MyApp-B7599wVn.js";import{C as $}from"./Collection-10aUGROH.js";import{d as B,e as L,f as O}from"./stories-Q1rUdn39.js";import{L as R}from"./index-DvCxxZ0I.js";import{I as V}from"./index-C_Z81Pec.js";import{T as h}from"./index-_maCyi6b.js";import{P as X}from"./index-B-Ve-2ni.js";import"./index-Dsgt9Kvy.js";import"./file-download-CDcwZSFa.js";import"./index-Dyhrwa_F.js";import"./Dropdown-Bdn4kCe8.js";import"./PurePanel-Bj8GlKp5.js";import"./index-BLpmTFnH.js";import"./index-DWkOHrl6.js";import"./EyeOutlined-CdTomyHc.js";import"./SearchOutlined--BwmyEo4.js";import"./index-CqMTtQhm.js";import"./Pagination-DPBlKUh6.js";import"./useBreakpoint-CFiZuY5Z.js";import"./responsiveObserver-D0yqgQJK.js";import"./index-CmgKzT4V.js";import"./row-DDG6H_rG.js";import"./addEventListener-Dc5J2yso.js";import"./index-DpAni9Hv.js";const K=u.lazy(()=>S(()=>import("./ArchivedStoryViewer-C8kl8O1L.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]),import.meta.url));function ge(){const{ti:r}=_(),{message:c,notification:y}=T();u.useEffect(()=>{p("ArchivedStories:onLoad")},[]);const x=async(e,n)=>{var t;return await B(n||((t=e==null?void 0:e[e.length-1])==null?void 0:t.cursor)||"")},g=async(e,n)=>{const i="ArchivedStories.deleteStory";p(i);const t=i+e.id;c.loading({key:t,content:r({en:"Deleting story...",vi:"Đang xóa story..."}),duration:0});const a=await O(e.id);return n(s=>C(s,l=>{const d=l.find(k=>k.id===e.id);return d&&(d.deleted=!0),l})),a?(c.success({key:t,content:r({en:"Story deleted!",vi:"Đã xóa story!"})}),!0):(c.error({key:t,content:r({en:"Failed to delete story!",vi:"Chưa xóa được story!"})}),!1)},v=async(e,n)=>{const i="ArchivedStories.deleteSelectedStories";p(i);let t=0,a=!1;for(let s=0;s<e.length&&!a;s++){const l=e[s];c.loading({key:i,content:o.jsxs(o.Fragment,{children:[r({en:"Deleting stories...",vi:"Đang xóa story..."})+` ${s+1}/${e.length}`,o.jsx("br",{}),o.jsx("i",{children:r({en:"Click to stop",vi:"Click để dừng"})})]}),duration:0,onClick:()=>{a=!0}}),await g(l,n)&&t++}c.destroy(i),y.open({type:"success",message:r({en:"Stories deleted!",vi:"Xóa story xong!"}),description:r({en:`Deleted ${t}/${e.length} stories!`,vi:`Đã xóa ${t}/${e.length} story!`})})},j=(e,n,i)=>{const t=e.deleted;return o.jsxs(R.Item,{className:"show-on-hover-trigger",children:[o.jsx(V,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:t?!1:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>o.jsx(K,{story:e})}}),o.jsxs(f,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:[t&&o.jsx(h.Text,{style:{color:"red",fontWeight:"bold",backgroundColor:"#3339",padding:5,fontSize:"1.2em",width:"100%"},children:r({en:"DELETED",vi:"ĐÃ XOÁ"})}),o.jsxs(h.Text,{style:{color:"#ccc"},children:[o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),o.jsx("br",{}),o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-clock"})," ",A(new Date().getTime()-new Date(e.creation_time).getTime())]}),o.jsx("br",{}),D(new Date(e.creation_time),r({en:"en-US",vi:"vi-VN"}))]})]}),!t&&o.jsxs(f,{className:"show-on-hover-item",style:{position:"absolute",top:10,right:10},size:3,children:[o.jsx(X,{title:r({en:"Delete this story?",vi:"Xoá story này?"}),onConfirm:()=>g(e,i),children:o.jsx(m,{danger:!0,type:"default",icon:o.jsx("i",{className:"fa-solid fa-trash-can"})})}),o.jsx(m,{type:"default",icon:o.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:N("stories/?card_id="+e.id)})]})]})},b=async e=>{const n="ArchivedStoryViewer.stories."+e.creation_time,i=E(n)||await L({creationTime:e.creation_time});F(n,i);const t=i.find(s=>s.id===e.id),a=I(new Date(e.creation_time));return[{url:(t==null?void 0:t.video)||(t==null?void 0:t.image)||"",name:a+(t!=null&&t.video?".mp4":".jpg")},{url:(t==null?void 0:t.image_background)||"",name:a+"_bg.jpg"}].filter(s=>s==null?void 0:s.url)},w=e=>o.jsx(m,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:o.jsx("i",{className:"fa fa-external-link-alt"}),children:r({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return o.jsx($,{collectionName:"Archived Stories",fetchNext:x,renderItem:j,downloadItem:b,headerButtons:w,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id,downloadOptions:[{key:"delete-story",labelFn:e=>r({en:`🗑️ Delete ${e.length} story`,vi:`🗑️ Xoá ${e.length} story`}),onClick:v}]})}export{ge as default};