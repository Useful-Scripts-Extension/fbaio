const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ArchivedStoryViewer-fH7UsAAB.js","./index-CvOM7j0W.js","./index-9SBFHPtm.css","./MyApp-8NcaG9i1.js","./StoryViewers-CqU_1BND.js","./Collection-Cen4iurP.js","./index-BTGokZ7M.js","./file-download-BhXCOLqF.js","./index-DxcBPWuB.js","./Dropdown-DjRsOusC.js","./PurePanel-D5wFQEms.js","./index-CLqn-SkY.js","./index-CkH1nlna.js","./index-JdDrboDm.js","./EyeOutlined-BNEV4nsF.js","./SearchOutlined-BpjF5JdG.js","./index-z1aAprYd.js","./Pagination-B85Ht5Y_.js","./useBreakpoint-DolaxH75.js","./responsiveObserver-CIcVW9Ed.js","./index-MZvm2-To.js","./row-mD49OyN7.js","./index-HWAUjemg.js","./stories-DLvfs0gn.js","./index-BS3k7ylS.js","./index-h7W5wEC9.js","./VideoWithMuted-NkXl8YGU.js","./index-D_PgD38w.js","./addEventListener-xtCRiYfh.js","./index-sfvkcctD.js"])))=>i.map(i=>d[i]);
import{aI as S,r as u,aK as o,aT as _,aJ as C,b1 as T,aM as m,aH as A,b7 as D}from"./index-CvOM7j0W.js";import{C as N}from"./Collection-Cen4iurP.js";import{b as E,t as p,S as h,g as I,h as F,s as $}from"./MyApp-8NcaG9i1.js";import{d as L,e as B,f as K}from"./stories-DLvfs0gn.js";import{L as R}from"./index-z1aAprYd.js";import{I as V}from"./index-D_PgD38w.js";import{T as f}from"./index-JdDrboDm.js";import{P as X}from"./index-CPjqlgN4.js";import"./index-BTGokZ7M.js";import"./file-download-BhXCOLqF.js";import"./index-DxcBPWuB.js";import"./Dropdown-DjRsOusC.js";import"./PurePanel-D5wFQEms.js";import"./index-CLqn-SkY.js";import"./index-CkH1nlna.js";import"./EyeOutlined-BNEV4nsF.js";import"./SearchOutlined-BpjF5JdG.js";import"./index-HWAUjemg.js";import"./Pagination-B85Ht5Y_.js";import"./useBreakpoint-DolaxH75.js";import"./responsiveObserver-CIcVW9Ed.js";import"./index-MZvm2-To.js";import"./row-mD49OyN7.js";import"./addEventListener-xtCRiYfh.js";import"./index-h7W5wEC9.js";const O=u.lazy(()=>_(()=>import("./ArchivedStoryViewer-fH7UsAAB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]),import.meta.url));function ge(){const{ti:r}=S(),{message:c,notification:y}=E();u.useEffect(()=>{p("ArchivedStories:onLoad")},[]);const x=async(e,n)=>{var t;return await L(n||((t=e==null?void 0:e[e.length-1])==null?void 0:t.cursor)||"")},g=async(e,n)=>{const i="ArchivedStories.deleteStory";p(i);const t=i+e.id;c.loading({key:t,content:r({en:"Deleting story...",vi:"Đang xóa story..."}),duration:0});const a=await K(e.id);return n(s=>D(s,l=>{const d=l.find(k=>k.id===e.id);return d&&(d.deleted=!0),l})),a?(c.success({key:t,content:r({en:"Story deleted!",vi:"Đã xóa story!"})}),!0):(c.error({key:t,content:r({en:"Failed to delete story!",vi:"Chưa xóa được story!"})}),!1)},v=async(e,n)=>{const i="ArchivedStories.deleteSelectedStories";p(i);let t=0,a=!1;for(let s=0;s<e.length&&!a;s++){const l=e[s];c.loading({key:i,content:o.jsxs(o.Fragment,{children:[r({en:"Deleting stories...",vi:"Đang xóa story..."})+` ${s+1}/${e.length}`,o.jsx("br",{}),o.jsx("i",{children:r({en:"Click to stop",vi:"Click để dừng"})})]}),duration:0,onClick:()=>{a=!0}}),await g(l,n)&&t++}c.destroy(i),y.open({type:"success",message:r({en:"Stories deleted!",vi:"Xóa story xong!"}),description:r({en:`Deleted ${t}/${e.length} stories!`,vi:`Đã xóa ${t}/${e.length} story!`})})},b=(e,n,i)=>{const t=e.deleted;return o.jsxs(R.Item,{className:"show-on-hover-trigger",children:[o.jsx(V,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:t?!1:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>o.jsx(O,{story:e})}}),o.jsxs(h,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:[t&&o.jsx(f.Text,{style:{color:"red",fontWeight:"bold",backgroundColor:"#3339",padding:5,fontSize:"1.2em",width:"100%"},children:r({en:"DELETED",vi:"ĐÃ XOÁ"})}),o.jsxs(f.Text,{style:{color:"#ccc"},children:[o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),o.jsx("br",{}),o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-clock"})," ",C(new Date().getTime()-new Date(e.creation_time).getTime())]}),o.jsx("br",{}),T(new Date(e.creation_time),r({en:"en-US",vi:"vi-VN"}))]})]}),!t&&o.jsxs(h,{className:"show-on-hover-item",style:{position:"absolute",top:10,right:10},size:3,children:[o.jsx(X,{title:r({en:"Delete this story?",vi:"Xoá story này?"}),onConfirm:()=>g(e,i),children:o.jsx(m,{danger:!0,type:"default",icon:o.jsx("i",{className:"fa-solid fa-trash-can"})})}),o.jsx(m,{type:"default",icon:o.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:I("stories/?card_id="+e.id)})]})]})},j=async e=>{const n="ArchivedStoryViewer.stories."+e.creation_time,i=F(n)||await B({creationTime:e.creation_time});$(n,i);const t=i.find(s=>s.id===e.id),a=A(new Date(e.creation_time));return[{url:(t==null?void 0:t.video)||(t==null?void 0:t.image)||"",name:a+(t!=null&&t.video?".mp4":".jpg")},{url:(t==null?void 0:t.image_background)||"",name:a+"_bg.jpg"}].filter(s=>s==null?void 0:s.url)},w=e=>o.jsx(m,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:o.jsx("i",{className:"fa fa-external-link-alt"}),children:r({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return o.jsx(N,{collectionName:"Archived Stories",fetchNext:x,renderItem:b,downloadItem:j,headerButtons:w,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id,downloadOptions:[{key:"delete-story",labelFn:e=>r({en:`🗑️ Delete ${e.length} story`,vi:`🗑️ Xoá ${e.length} story`}),onClick:v}]})}export{ge as default};