import{r as _,ap as a}from"./index-0Hfk5MSk.js";import{C as y,b,a1 as j}from"./MyApp-DTETyBe6.js";import{i as f}from"./icons-mvVXwz20.js";import{C as w}from"./Collection-C7vh2HF7.js";import{f as v,c as m}from"./index-iMpW4-O_.js";import{L as x}from"./index-DjV4MP3T.js";import{I}from"./index-2O_IWflz.js";import"./index-Cts8JKb9.js";import"./file-download-Wy78YboV.js";import"./index-CWpWVvCJ.js";import"./Dropdown-Cnla9tw7.js";import"./PurePanel-CGRBYuiW.js";import"./index-JimT2myi.js";import"./index-Dj5V5m4q.js";import"./index-FIK-C6O0.js";import"./TextArea-CXV8JlWF.js";import"./addEventListener-Kn4HSJDj.js";import"./index-B-KW5qe7.js";import"./index-CvI0A7R2.js";import"./feeds-CQjIvqMs.js";import"./index-DW0fsHWP.js";import"./responsiveObserver-S6dSCmEt.js";import"./useBreakpoint-ZZ7hYbru.js";import"./index-CpWu6WTX.js";import"./index-BB6UVlLk.js";import"./index-Bwq3NRi4.js";import"./index-DNp0j0IV.js";import"./index--8D5sjlR.js";import"./Pagination-DwpAiUYs.js";import"./row-3XdnsCGd.js";async function P(i="",u=""){let l;if(u){const t=await v({fb_api_req_friendly_name:"PolarisProfilePostsTabContentDirectQuery_connection",variables:{after:u,before:null,data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},first:12,last:null,username:i,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7935114066569227"});l=JSON.parse(t),console.log("cursor fetch",l)}else{const t=await v({fb_api_req_friendly_name:"PolarisProfilePostsDirectQuery",variables:{data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},username:i,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7898261790222653"});l=JSON.parse(t),console.log("first fetch",l)}const{edges:p=[],page_info:e={}}=y(l);return p.map(t=>{var s,o,n,c;const r=((s=t==null?void 0:t.node)==null?void 0:s.media)||(t==null?void 0:t.node);return{id:r==null?void 0:r.id,caption:((o=r==null?void 0:r.caption)==null?void 0:o.text)||"",video:m(r==null?void 0:r.video_versions),image:m((n=r==null?void 0:r.image_versions2)==null?void 0:n.candidates),carousel:(c=r==null?void 0:r.carousel_media)==null?void 0:c.map(d=>{var h;return{id:d.id,video:m(d.video_versions),image:m((h=d.image_versions2)==null?void 0:h.candidates)}}),created_at:(r==null?void 0:r.taken_at)*1e3,like_count:r==null?void 0:r.like_count,comment_count:r==null?void 0:r.comment_count,cursor:(t==null?void 0:t.cursor)||(e==null?void 0:e.end_cursor)}}).filter(t=>t.image||t.video)}function er({target:i}){const u=_.useCallback(async(e=[],t)=>{var s;return i!=null&&i.id?await P(i.igName,t||((s=e[e.length-1])==null?void 0:s.cursor)):void 0},[i]),l=_.useCallback(e=>{var t,r,s;return a.jsxs(x.Item,{children:[a.jsx(I,{src:e.image,width:250,height:250,style:{objectFit:"cover"},preview:e.video||(t=e.carousel)!=null&&t.length?{destroyOnClose:!0,imageRender:()=>{var o;return(o=e.carousel)!=null&&o.length?a.jsx(b,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden"},children:a.jsx(x,{grid:{gutter:10},style:{width:"100%"},dataSource:e.carousel,renderItem:l,rowKey:n=>n.id})}):a.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),a.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:e.caption,children:j(e.caption,30)}),a.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((r=e.carousel)==null?void 0:r.length)>0?a.jsxs(a.Fragment,{children:[a.jsx("span",{children:(s=e.carousel)==null?void 0:s.length}),f.IGCarousel]}):e.video?f.IGVideo:null})]})},[]),p=_.useCallback((e,t)=>{var s;function r(o,n=""){const c=!!o.video;return{url:c?o.video:o.image,name:n+o.id+(c?".mp4":".jpg")}}return((s=e.carousel)==null?void 0:s.length)>0?e.carousel.map((o,n)=>r(o,n+"_")):r(e)},[]);return a.jsx(w,{collectionName:(i==null?void 0:i.igName)+" - IG Posts",fetchNext:u,renderItem:l,downloadItem:p,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id})}export{er as default};