import{aD as x,r as f,av as e,aw as i,aO as g}from"./index-pIYkJH0y.js";import{u,t as l,L as b,I as y,T as n,B as w,b as j,aq as k}from"./MyApp-B1cJNkHL.js";import{C as v}from"./Collection-BpTZAvqs.js";import S from"./RecentStoryViewer-C5hMqXb3.js";import{b as F,a as R}from"./stories-CNuvsZr5.js";import{A as N}from"./index-CwX0Hdjh.js";import{L as T}from"./index-BoBP2xiU.js";import{I as B}from"./index-Cgnl15ZF.js";import{P as C}from"./index-C9sdPJJg.js";import{A as I}from"./index-CipfH2DW.js";import{T as E}from"./index-CHcpZIV-.js";import"./index-CRVY8JmG.js";import"./file-download-CTAkT808.js";import"./index-BQ2IX7F4.js";import"./Dropdown-a0ij7Zil.js";import"./PurePanel-pXY6Fxuq.js";import"./index-DTu7_Xfb.js";import"./index-DVpbZc3g.js";import"./index-CnpTBv20.js";import"./EyeOutlined-DfcPFUXt.js";import"./SearchOutlined-C3yLFxaZ.js";import"./index-BiBrutaZ.js";import"./StoryViewers-BYrw7_yw.js";import"./VideoWithMuted-BcPxdNd5.js";import"./Pagination-Cvn_of7Q.js";import"./useBreakpoint-BW8SwTJR.js";import"./responsiveObserver-Dm79JWst.js";import"./index-CMEARgE6.js";import"./row-1gecwwBX.js";import"./addEventListener-SsrfmUG-.js";function ce(){const{ti:t}=u(),c=x();f.useEffect(()=>{l("RecentStories:onLoad")},[]);const m=o=>{c("/bulk-downloader",{state:{targetId:o,platform:g.Facebook}})},d=async(o,s)=>{var a;return await F(s||((a=o==null?void 0:o[o.length-1])==null?void 0:a.cursor)||"")},p=(o,s)=>e.jsx(T.Item,{children:e.jsxs(w.Ribbon,{text:o.stories.length,style:{opacity:o.stories.length>1?1:0},children:[e.jsx(B,{src:o.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(S,{story:o})}}),e.jsx("div",{style:{position:"absolute",top:10,left:10},children:e.jsxs(C,{title:o.seen?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",o.owner.name," ",t({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):o.owner.name,content:e.jsxs(j.Compact,{children:[e.jsx(n,{title:t({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:e.jsx(i,{icon:e.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>m(o.owner.id)})}),e.jsx(n,{title:t({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:e.jsx(i,{icon:e.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+o.owner.id)}})})]}),children:[e.jsx(I,{src:o.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),o.seen?e.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),e.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:e.jsx(E.Text,{style:{color:"#eee"},children:o.owner.name})})]})}),h=async o=>(await R(o.bucket_id)).map((r,a)=>({name:k(o.owner.name)+(r.video?".mp4":".jpg"),url:r.video||r.image||r.thumbnail}));return e.jsx(v,{collectionName:"Recent Stories "+b(),fetchNext:d,renderItem:p,downloadItem:h,getItemCursor:o=>o==null?void 0:o.cursor,rowKey:o=>o.bucket_id,all:!0,onSearch:(o,s)=>y(o,s.owner.name),header:()=>e.jsx(N,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",t({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})}),headerButtons:()=>e.jsx(e.Fragment,{children:e.jsx(n,{title:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-history"})," ",t({en:"Story feedback history",vi:"Lịch sử hoạt động trên Tin"})]}),children:e.jsx(i,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),onClick:()=>{l("RecentStories:clickHistory"),window.open("https://www.facebook.com/me/allactivity/?category_key=STORIESFEEDBACK","_blank")},children:t({en:"History",vi:"Lịch sử"})})})})})}export{ce as default};