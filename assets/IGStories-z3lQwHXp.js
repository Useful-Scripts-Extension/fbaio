import{r as c,av as s}from"./index-BzHjJZ6J.js";import{i as h}from"./icons-CNx5S1nY.js";import{C as v}from"./Collection-ByG1P6_c.js";import{u as y,a2 as x}from"./MyApp-P_ZAPtxc.js";import{f as j,c as _}from"./index-BTUpxhrV.js";import{L as b}from"./index-CDYyC9gD.js";import{I as g}from"./index-isaRSNRL.js";import{A as k}from"./index-DDkJ4-4M.js";import"./index-CjOrqomX.js";import"./file-download-wydYP9pK.js";import"./index-CJ9N7clN.js";import"./Dropdown-Dgn2-KTF.js";import"./PurePanel-nLO0RZ46.js";import"./index-CzUkjAGb.js";import"./index-Cd_NWbNz.js";import"./index-DM0pvvLI.js";import"./index-CxjRYcOo.js";import"./addEventListener-CYR6kZcj.js";import"./index-C3yQlH26.js";import"./index-CKkwT6fB.js";import"./index-B3hIcIR4.js";import"./useBreakpoint-1TxoALFb.js";import"./index-Cfi9UxPj.js";import"./index-BNHfpCXa.js";import"./index-BSxkTIuz.js";import"./Pagination-PNe0cuUg.js";import"./row-CrtjfzA9.js";async function w(i){var d,e,m,l;const a=await j({fb_api_req_friendly_name:"PolarisStoriesV3ReelPageStandaloneDirectQuery",variables:{reel_ids_arr:[i]},doc_id:"8118053404899604"}),n=JSON.parse(a),r=((m=(e=(d=n==null?void 0:n.data)==null?void 0:d.xdt_api__v1__feed__reels_media)==null?void 0:e.reels_media)==null?void 0:m[0])||{};return console.log(n,r),((l=r==null?void 0:r.items)==null?void 0:l.map(o=>{var p,u,f;const t=(u=(p=o.story_music_stickers)==null?void 0:p[0])==null?void 0:u.music_asset_info;return{id:o.id,pk:o.pk,image:_((f=o.image_versions2)==null?void 0:f.candidates),video:_(o.video_versions),video_duration:o.video_duration||0,taken_at:(o.taken_at||0)*1e3,expiring_at:(o.expiring_at||0)*1e3,music:t?(t==null?void 0:t.title)+" - "+(t==null?void 0:t.display_artist):"",latest_reel_media:(r.latest_reel_media||0)*1e3,seen_at:(r.seen||0)*1e3,raw:o}}))||[]}function Z({target:i}){const{ti:a}=y(),n=c.useCallback(async e=>i!=null&&i.id?await w(i.id):void 0,[i]),r=c.useCallback(e=>s.jsxs(b.Item,{children:[s.jsx(g,{src:e.image,width:200,height:330,style:{objectFit:"cover"},preview:e.video?{destroyOnClose:!0,imageRender:()=>s.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),e.video&&s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:h.IGVideo}),s.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:s.jsxs("div",{style:{position:"absolute",bottom:15,left:15},children:[e.music&&s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"fa-solid fa-music"})," ",e.music,s.jsx("br",{})]}),e.seen_at?s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"fa-solid fa-eye"})," ",x(e.seen_at,a)]}):s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"fa-solid fa-eye-slash"})," ",a({en:"Not seen",vi:"Chưa xem"})]}),s.jsx("br",{}),s.jsx("i",{className:"fa-solid fa-clock"})," ",x(e.taken_at,a)]})})]}),[]),d=c.useCallback((e,m)=>{const l=!!e.video;return{url:l?e.video:e.image,name:e.id+(l?".mp4":".jpg")}},[]);return s.jsx(v,{collectionName:(i==null?void 0:i.igName)+" - IG Stories",fetchNext:n,renderItem:r,downloadItem:d,rowKey:e=>e.id,once:!0,header:()=>s.jsx(k,{showIcon:!0,type:"info",message:(i==null?void 0:i.name)+a({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"})})})}export{Z as default};