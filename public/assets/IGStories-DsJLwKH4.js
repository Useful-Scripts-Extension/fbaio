import{r as p,aA as e,aB as _}from"./index-CvSYKBTS.js";import{i as v}from"./icons-BOOe-fZu.js";import{C as b}from"./Collection-10aUGROH.js";import{E as j,u as y,a9 as h}from"./MyApp-B7599wVn.js";import{f as g,g as x,a as k}from"./index-B2-p9D75.js";import{V as w}from"./VideoWithMuted-C7XvZ-bG.js";import{L as I}from"./index-DvCxxZ0I.js";import{I as N}from"./index-C_Z81Pec.js";import{A as C}from"./index-Rd8NPCsa.js";import"./index-Dsgt9Kvy.js";import"./file-download-CDcwZSFa.js";import"./index-Dyhrwa_F.js";import"./Dropdown-Bdn4kCe8.js";import"./PurePanel-Bj8GlKp5.js";import"./index-BLpmTFnH.js";import"./index-DWkOHrl6.js";import"./index-_maCyi6b.js";import"./EyeOutlined-CdTomyHc.js";import"./SearchOutlined--BwmyEo4.js";import"./index-CqMTtQhm.js";import"./videos-C3_mzF6l.js";import"./index-CCckw-BJ.js";import"./responsiveObserver-D0yqgQJK.js";import"./useBreakpoint-CFiZuY5Z.js";import"./index-DpAni9Hv.js";import"./index-CmgKzT4V.js";import"./index-CAM9JuK2.js";import"./Pagination-DPBlKUh6.js";import"./row-DDG6H_rG.js";import"./addEventListener-Dc5J2yso.js";async function S(i){var m,s,d,n;const l=await g({fb_api_req_friendly_name:"PolarisStoriesV3ReelPageStandaloneDirectQuery",variables:{reel_ids_arr:[i]},doc_id:"8118053404899604"}),a=j(l),r=((d=(s=(m=a==null?void 0:a.data)==null?void 0:m.xdt_api__v1__feed__reels_media)==null?void 0:s.reels_media)==null?void 0:d[0])||{};return console.log(a,r),((n=r==null?void 0:r.items)==null?void 0:n.map(o=>{var c,u,f;const t=(u=(c=o.story_music_stickers)==null?void 0:c[0])==null?void 0:u.music_asset_info;return{id:o.id,pk:o.pk,image:x((f=o.image_versions2)==null?void 0:f.candidates),video:x(o.video_versions),video_duration:o.video_duration||0,taken_at:(o.taken_at||0)*1e3,expiring_at:(o.expiring_at||0)*1e3,music:t?(t==null?void 0:t.title)+" - "+(t==null?void 0:t.display_artist):"",latest_reel_media:(r.latest_reel_media||0)*1e3,seen_at:(r.seen||0)*1e3,raw:o}}))||[]}function te({target:i}){const{ti:l}=y(),a=p.useCallback(async s=>i!=null&&i.id?await S(i.id):void 0,[i]),r=p.useCallback(s=>e.jsxs(I.Item,{className:"show-on-hover-trigger",children:[e.jsx(N,{src:s.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:s.video?{destroyOnClose:!0,imageRender:()=>e.jsx(w,{src:s.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),s.video&&e.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:v.IGVideo}),e.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:e.jsxs("div",{style:{position:"absolute",bottom:15,left:15},children:[s.music&&e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-music"})," ",s.music,e.jsx("br",{})]}),s.seen_at?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",h(s.seen_at)]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye-slash"})," ",l({en:"Not seen",vi:"Chưa xem"})]}),e.jsx("br",{}),e.jsx("i",{className:"fa-solid fa-clock"})," ",h(s.taken_at)]})}),e.jsx(_,{type:"default",icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:k("stories/"+(i==null?void 0:i.username)+"/"+s.pk)})]}),[]),m=p.useCallback((s,d)=>{const n=!!s.video;return{url:n?s.video:s.image,name:s.id+(n?".mp4":".jpg")}},[]);return e.jsx(b,{collectionName:(i==null?void 0:i.username)+" - IG Stories",fetchNext:a,renderItem:r,downloadItem:m,rowKey:s=>s.id,once:!0,header:()=>e.jsx(C,{showIcon:!0,type:"info",message:(i==null?void 0:i.name)+l({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"})})})}export{te as default};