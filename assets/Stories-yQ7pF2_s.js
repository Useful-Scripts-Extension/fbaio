const __vite__fileDeps=["./RecentStoryViewer-CAExpKhe.js","./index-0Hfk5MSk.js","./index-DjlRUb8J.css","./stories-Cwy2KheO.js","./MyApp-DTETyBe6.js","./StoryViewers-BKy_qA_b.js","./Collection-C7vh2HF7.js","./index-Cts8JKb9.js","./file-download-Wy78YboV.js","./index-CWpWVvCJ.js","./Dropdown-Cnla9tw7.js","./PurePanel-CGRBYuiW.js","./index-JimT2myi.js","./index-Dj5V5m4q.js","./index-FIK-C6O0.js","./TextArea-CXV8JlWF.js","./addEventListener-Kn4HSJDj.js","./index-B-KW5qe7.js","./index-DjV4MP3T.js","./Pagination-DwpAiUYs.js","./useBreakpoint-ZZ7hYbru.js","./responsiveObserver-S6dSCmEt.js","./row-3XdnsCGd.js","./index-CvI0A7R2.js","./index-DNp0j0IV.js","./index-DW0fsHWP.js","./index-CpWu6WTX.js","./index-2O_IWflz.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ap as i,r as d,at as u}from"./index-0Hfk5MSk.js";import{u as y,b as h,v as x,T as f,_ as b}from"./MyApp-DTETyBe6.js";import{C as j}from"./Collection-C7vh2HF7.js";import{i as v}from"./icons-mvVXwz20.js";import{g as w,a as I}from"./stories-Cwy2KheO.js";import{A as _}from"./index--8D5sjlR.js";import{L as k}from"./index-DjV4MP3T.js";import{I as T}from"./index-2O_IWflz.js";import{T as c}from"./index-DNp0j0IV.js";import"./index-Cts8JKb9.js";import"./file-download-Wy78YboV.js";import"./index-CWpWVvCJ.js";import"./Dropdown-Cnla9tw7.js";import"./PurePanel-CGRBYuiW.js";import"./index-JimT2myi.js";import"./index-Dj5V5m4q.js";import"./index-FIK-C6O0.js";import"./TextArea-CXV8JlWF.js";import"./addEventListener-Kn4HSJDj.js";import"./index-B-KW5qe7.js";import"./index-CvI0A7R2.js";import"./Pagination-DwpAiUYs.js";import"./useBreakpoint-ZZ7hYbru.js";import"./responsiveObserver-S6dSCmEt.js";import"./row-3XdnsCGd.js";const S=d.lazy(()=>u(()=>import("./RecentStoryViewer-CAExpKhe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url));function g({target:e}){const{ti:s}=y(),t=(e==null?void 0:e.name)+" - Stories",a=async(o=[],n)=>{if(!(e!=null&&e.id))return;const{bucketId:r,firstStoryId:l}=await w(e==null?void 0:e.id);return!r||!l?[]:await I(r)},m=(o,n)=>{const r=o.seen?i.jsx("span",{children:"👀"}):i.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return i.jsx(k.Item,{children:i.jsxs(h,{direction:"vertical",style:{position:"relative"},children:[i.jsx(T,{src:o.thumbnail,fallback:o.image,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(S,{story:{bucket_id:o.bucket_id,owner:e},bucketsData:x("Collection.data."+t)||[],index:n}),toolbarRender:()=>null}}),i.jsx(f,{placement:"bottom",title:i.jsxs(i.Fragment,{children:[r," ",e==null?void 0:e.name,o.seen?s({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):s({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:i.jsxs(c.Text,{children:[r," ",b(o.creation_time*1e3,s)," ",s({vi:"trước",en:"ago"}),i.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&i.jsx(c.Text,{children:o.caption}),o.video&&i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:v.IGVideo})]})})},p=async(o,n)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return i.jsx(j,{collectionName:t,fetchNext:a,renderItem:m,downloadItem:p,rowKey:o=>o.id,once:!0,header:o=>i.jsx(_,{showIcon:!0,type:"info",message:(e==null?void 0:e.name)+(o!=null&&o.length?s({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):s({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{g as default};