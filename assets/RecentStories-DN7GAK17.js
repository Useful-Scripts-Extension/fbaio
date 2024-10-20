import{aD as x,r as f,av as e,aw as n,aO as g}from"./index-CiqHonqG.js";import{u,t as l,M as b,J as w,T as i,B as y,b as j,aw as k}from"./MyApp-BK3WXPWS.js";import{C as v}from"./Collection-BH2LjV31.js";import S from"./RecentStoryViewer-DxvtMa3e.js";import{b as F,a as R}from"./stories-wU5nKNTH.js";import{A as N}from"./index-CqU0B0cD.js";import{L as T}from"./index-B33EjJkC.js";import{I as B}from"./index-Dr8g8EMa.js";import{P as C}from"./index-DJqpF4WD.js";import{A as E}from"./index-DzP0FUvd.js";import{T as I}from"./index-TKSdDrE6.js";import"./index-DRam9FhS.js";import"./file-download-wwe2wnqN.js";import"./index-B64Bnvgx.js";import"./Dropdown-X8gX3BUB.js";import"./PurePanel-C7vt4FTg.js";import"./index-DEc60f7A.js";import"./index-Mh2hjKM_.js";import"./EyeOutlined-Cz7AFRl_.js";import"./SearchOutlined-BQr2Q1Wv.js";import"./index-30itbAAC.js";import"./StoryViewers-TptnpjpE.js";import"./VideoWithMuted-CpJiPPFX.js";import"./Pagination-D4ptuC4f.js";import"./useBreakpoint-Bdeh8Df6.js";import"./responsiveObserver-BzL1esFn.js";import"./index-L5dzJf2_.js";import"./row-DCFVYepe.js";import"./addEventListener-Cumd2fTL.js";function le(){const{ti:t}=u(),c=x();f.useEffect(()=>{l("RecentStories:onLoad")},[]);const m=o=>{c("/bulk-downloader",{state:{targetId:o,platform:g.Facebook}})},d=async(o,s)=>{var a;return await F(s||((a=o==null?void 0:o[o.length-1])==null?void 0:a.cursor)||"")},p=(o,s)=>e.jsx(T.Item,{children:e.jsxs(y.Ribbon,{text:o.stories.length,style:{opacity:o.stories.length>1?1:0},children:[e.jsx(B,{src:o.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(S,{story:o})}}),e.jsx("div",{style:{position:"absolute",top:10,left:10},children:e.jsxs(C,{title:o.seen?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",o.owner.name," ",t({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):o.owner.name,content:e.jsxs(j.Compact,{children:[e.jsx(i,{title:t({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>m(o.owner.id)})}),e.jsx(i,{title:t({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+o.owner.id)}})})]}),children:[e.jsx(E,{src:o.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),o.seen?e.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),e.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:e.jsx(I.Text,{style:{color:"#eee"},children:o.owner.name})})]})}),h=async o=>(await R(o.bucket_id)).map((r,a)=>({name:k(o.owner.name)+(r.video?".mp4":".jpg"),url:r.video||r.image||r.thumbnail}));return e.jsx(v,{collectionName:"Recent Stories "+b(),fetchNext:d,renderItem:p,downloadItem:h,getItemCursor:o=>o==null?void 0:o.cursor,rowKey:o=>o.bucket_id,all:!0,onSearch:(o,s)=>w(o,s.owner.name),header:()=>e.jsx(N,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",t({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})}),headerButtons:()=>e.jsx(e.Fragment,{children:e.jsx(i,{title:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-history"})," ",t({en:"Story feedback history",vi:"Lịch sử hoạt động trên Tin"})]}),children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),onClick:()=>{l("RecentStories:clickHistory"),window.open("https://www.facebook.com/me/allactivity/?category_key=STORIESFEEDBACK","_blank")},children:t({en:"History",vi:"Lịch sử"})})})})})}export{le as default};