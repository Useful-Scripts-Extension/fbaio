const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RecentStoryViewer-QlCD89PY.js","./index-DRt5rAj7.js","./index-9SBFHPtm.css","./stories-DjeZe5Py.js","./MyApp-XSygTG_h.js","./StoryViewers-PCDon-DX.js","./Collection-BRvVwtLe.js","./index-qqMoPFKW.js","./file-download-bga_pJUv.js","./index-DdmnqIWl.js","./Dropdown-ClTZfmGR.js","./PurePanel-Da4LrOKo.js","./index-CAfgExhN.js","./index-DuHX6d3B.js","./index-gQvFHShS.js","./EyeOutlined-BjTaxtzY.js","./SearchOutlined-B-ayKa5I.js","./index-D8XVQcvD.js","./Pagination-C2pNX2gi.js","./useBreakpoint-DS6mmmZM.js","./responsiveObserver-DUFstwB3.js","./index-BRHHLsUq.js","./row-DAq3d9U1.js","./index-BBll4xqz.js","./index-DhkXiLqb.js","./index-Dd860CxK.js","./VideoWithMuted-BVAah5J-.js","./index-1pId1u-f.js","./addEventListener-BMU1b19v.js"])))=>i.map(i=>d[i]);
import{aH as d,aJ as s,r as u,aS as h,ba as y,aL as x}from"./index-DRt5rAj7.js";import{C as f}from"./Collection-BRvVwtLe.js";import{i as b}from"./icons-D6v2LMoB.js";import{S as j,h as w,T as v,g as I}from"./MyApp-XSygTG_h.js";import{g as k,a as _}from"./stories-DjeZe5Py.js";import{A as S}from"./index-CufXhkXT.js";import{L as T}from"./index-D8XVQcvD.js";import{I as N}from"./index-1pId1u-f.js";import{T as a}from"./index-gQvFHShS.js";import"./index-qqMoPFKW.js";import"./file-download-bga_pJUv.js";import"./index-DdmnqIWl.js";import"./Dropdown-ClTZfmGR.js";import"./PurePanel-Da4LrOKo.js";import"./index-CAfgExhN.js";import"./index-DuHX6d3B.js";import"./EyeOutlined-BjTaxtzY.js";import"./SearchOutlined-B-ayKa5I.js";import"./index-BBll4xqz.js";import"./Pagination-C2pNX2gi.js";import"./useBreakpoint-DS6mmmZM.js";import"./responsiveObserver-DUFstwB3.js";import"./index-BRHHLsUq.js";import"./row-DAq3d9U1.js";import"./addEventListener-BMU1b19v.js";const C=u.lazy(()=>h(()=>import("./RecentStoryViewer-QlCD89PY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url));function so({target:e}){const{ti:i}=d(),t=(e==null?void 0:e.name)+" - Stories",c=async(o=[],n)=>{if(!(e!=null&&e.id))return;const{bucketId:r,firstStoryId:p}=await k(e==null?void 0:e.id);return!r||!p?[]:await _(r)},m=(o,n)=>{const r=o.seen?s.jsx("span",{children:"👀"}):s.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return s.jsxs(T.Item,{className:"show-on-hover-trigger",children:[s.jsxs(j,{direction:"vertical",style:{position:"relative"},children:[s.jsx(N,{src:o.thumbnail,fallback:o.image,style:{width:200,height:330,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(C,{story:{bucket_id:o.bucket_id,owner:e},bucketsData:w("Collection.data."+t)||[],index:n}),toolbarRender:()=>null}}),s.jsx(v,{placement:"bottom",title:s.jsxs(s.Fragment,{children:[r," ",e==null?void 0:e.name,o.seen?i({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):i({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:s.jsxs(a.Text,{children:[r," ",y(o.creation_time*1e3)," ",i({vi:"trước",en:"ago"}),s.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&s.jsx(a.Text,{children:o.caption}),o.video&&s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:b.IGVideo})]}),s.jsx(x,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:I("/stories/"+o.bucket_id+"/"+o.id)})]})},l=async(o,n)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return s.jsx(f,{collectionName:t,fetchNext:c,renderItem:m,downloadItem:l,rowKey:o=>o.id,once:!0,header:o=>s.jsx(S,{showIcon:!0,type:"info",message:(e==null?void 0:e.name)+(o!=null&&o.length?i({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):i({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{so as default};