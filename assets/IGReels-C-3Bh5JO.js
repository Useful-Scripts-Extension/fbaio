import{r as m,av as i,aw as h}from"./index-CiqHonqG.js";import{D as _,av as c}from"./MyApp-BK3WXPWS.js";import{C as b}from"./Collection-BH2LjV31.js";import{f as v,g as f,a as x}from"./index-BxJQR56X.js";import{V as j}from"./VideoWithMuted-CpJiPPFX.js";import{L as y}from"./index-B33EjJkC.js";import{I as w}from"./index-Dr8g8EMa.js";import"./index-DRam9FhS.js";import"./file-download-wwe2wnqN.js";import"./index-B64Bnvgx.js";import"./Dropdown-X8gX3BUB.js";import"./PurePanel-C7vt4FTg.js";import"./index-DEc60f7A.js";import"./index-Mh2hjKM_.js";import"./index-TKSdDrE6.js";import"./EyeOutlined-Cz7AFRl_.js";import"./SearchOutlined-BQr2Q1Wv.js";import"./index-30itbAAC.js";import"./videos-DrGYRsHa.js";import"./index-DzP0FUvd.js";import"./responsiveObserver-BzL1esFn.js";import"./useBreakpoint-Bdeh8Df6.js";import"./index-DJqpF4WD.js";import"./index-L5dzJf2_.js";import"./index-ATBC1WCB.js";import"./index-CqU0B0cD.js";import"./Pagination-D4ptuC4f.js";import"./row-DCFVYepe.js";import"./addEventListener-Cumd2fTL.js";async function g(r="",n=""){const l=await v({fb_api_req_friendly_name:"PolarisProfileReelsTabContentQuery_connection",variables:{after:n,before:null,data:{include_feed_video:!0,page_size:12,target_user_id:r},first:4,last:null},doc_id:"7845543455542541"}),a=JSON.parse(l);console.log("res ne",a);const{edges:o=[],page_info:e={}}=_(a);return o.map(s=>{var p,u,d;const t=((p=s==null?void 0:s.node)==null?void 0:p.media)||{};return{id:t.id,post_id:t==null?void 0:t.code,type:(u=s==null?void 0:s.node)==null?void 0:u.__typename,width:t.original_width,height:t.original_height,image:f((d=t.image_versions2)==null?void 0:d.candidates),video:f(t.video_versions),comment_count:t.comment_count,like_count:t.like_count,play_count:t.play_count,view_count:t.view_count,cursor:(s==null?void 0:s.cursor)||(e==null?void 0:e.end_cursor)}})}function $({target:r}){const n=m.useCallback(async(o=[],e)=>{var t;return r!=null&&r.id?await g(r.id,e||((t=o[o.length-1])==null?void 0:t.cursor)):void 0},[r]),l=m.useCallback(o=>i.jsxs(y.Item,{className:"show-on-hover-trigger",children:[i.jsx(w,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(j,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),i.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:i.jsxs("div",{style:{position:"absolute",bottom:15,left:15,fontWeight:"bold",fontSize:"1.1em"},children:[i.jsx("i",{className:"fa-solid fa-play"})," ",c(o.play_count),i.jsx("br",{}),i.jsx("i",{className:"fa-solid fa-heart"})," ",c(o.like_count),i.jsx("br",{}),i.jsx("i",{className:"fa-solid fa-message"})," ",c(o.comment_count)]})}),i.jsx(h,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:x("p/"+o.post_id)})]}),[]),a=m.useCallback((o,e)=>{const s=!!o.video;return{url:s?o.video:o.image,name:o.id+(s?".mp4":".jpg")}},[]);return i.jsx(b,{collectionName:(r==null?void 0:r.username)+" - IG Reels",fetchNext:n,renderItem:l,downloadItem:a,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{$ as default};