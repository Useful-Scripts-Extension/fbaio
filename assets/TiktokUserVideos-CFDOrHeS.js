import{aJ as F,r as w,aL as i,b4 as L,b2 as _,b3 as B,cp as u,co as U,aN as j,cq as T,bb as A,b1 as M}from"./index-C9a7kOyS.js";import{e as W}from"./index-CE3kq51V.js";import{M as $}from"./MyTable-Bsc-IDjl.js";import{isScriptEnabled as D}from"./AutoRun-CIrbQu6b.js";import{e as g,S as h,b as z,T as H}from"./MyApp-eLgOszab.js";import{W as O}from"./WordStatisticButton-ND-6nAht.js";import J from"./VideoViewer-DLy5dCku.js";import{I as b}from"./index-B9K95DAg.js";import{T as o}from"./index-aY3yYPYF.js";import{A as P}from"./index-Cy9p4zqv.js";import"./core-CDOs0AQy.js";import"./videos-Dm74OwMX.js";import"./index-CKIo4QoG.js";import"./useBreakpoint-C1qEcW11.js";import"./index-F7cWREmo.js";import"./PurePanel-DJB0B014.js";import"./index-DZeVjoNF.js";import"./SearchOutlined-DrFTn-jV.js";import"./index-DmxoYqZk.js";import"./EyeOutlined-B_Sf26ve.js";import"./index-BapWOJNx.js";import"./Dropdown-gfxpn-z7.js";import"./Collapse-CwRWUIlI.js";import"./index-1LBg6_PE.js";import"./Table-BigyY78I.js";import"./addEventListener-8k3J7yP4.js";import"./index-C9gPXY7f.js";import"./index-BYTpD0UZ.js";import"./Pagination-DPFRT-88.js";import"./row-C9GAN_vR.js";import"./BadgeWrapper-C_IDMIrb.js";import"./index-CuV0lcJx.js";import"./index-Ch8MZEP_.js";import"./VideoWithMuted-BNfayS0A.js";const c="tiktok_batchDownload";function Ne({target:x}){const{ti:d}=F(),[C,k]=g("TiktokUserVideos."+x.uniqueId,[]),[I,v]=g("TiktokUserVideos.loading",!1),[y,S]=g("TiktokUserVideos.enabled",!1),f=w.useRef(null),s=C.filter(t=>t.author.uniqueId===x.uniqueId);console.log(s),w.useEffect(()=>{D(c).then(r=>{S(r)});let t;function e(){T("utils.Storage.get",[c]).then(r=>{k(a=>A(a,n=>{const p=W(r),m=new Set(a.map(l=>l.id));for(let l of p)m.has(l.id)||(n.push(l),m.add(l.id));return n}))}).finally(()=>{t=setTimeout(e,1e3)})}return e(),()=>{clearTimeout(t)}},[]);const N=async()=>{v(!0),await T("utils.Storage.remove",[c]),k([]),f.current&&f.current.close(),f.current=window.open("https://www.tiktok.com/@"+x.uniqueId+"?fbaio_"+c+"=true","_blank","width=800,height=600"),v(!1)},R=[{title:"Video",key:"video",render(t,e,r){return i.jsx(b,{src:e.video.cover,fallback:e.video.cover,style:{width:180,height:200,objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(J,{info:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}})},align:"center",width:180},{title:"Desc",dataIndex:"desc",key:"desc",render(t,e,r){return i.jsx(o.Text,{style:{maxWidth:250},children:e.desc})},width:250},{title:"Music",dataIndex:"music",key:"music",render(t,e,r){const{id:a,author:n,cover:p,original:m,playUrl:l,title:V}=e.music||{};return a?i.jsxs(h,{direction:"vertical",size:3,children:[i.jsx(b,{src:p,style:{width:50,height:50,borderRadius:10}}),i.jsxs(o.Text,{children:[n," ",V," ",m," ",i.jsx(o.Link,{href:l,target:"_blank",children:i.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})})]})]}):"-"},filters:L(s.map(t=>t.music),"title"),onFilter:(t,e)=>{var r;return((r=e.music)==null?void 0:r.title)===t},filterSearch:!0,width:150},{title:d({en:"Created",vi:"Ngày đăng"}),dataIndex:"createTime",key:"createTime",render(t,e,r){return i.jsxs(h,{direction:"vertical",size:3,children:[i.jsx(o.Text,{children:_(e.createTime)}),i.jsx(o.Text,{type:"secondary",children:B(e.createTime)})]})},sorter:(t,e)=>t.createTime-e.createTime,width:120},{title:i.jsx("i",{className:"fa-solid fa-play fa-lg"}),dataIndex:"views",key:"views",render(t,e,r){return u(e.stats.playCount)},sorter:(t,e)=>t.stats.playCount-e.stats.playCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-heart fa-lg"}),dataIndex:"heart",key:"heart",render(t,e,r){return u(e.stats.diggCount)},sorter:(t,e)=>t.stats.diggCount-e.stats.diggCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-comment fa-lg"}),dataIndex:"comments",key:"comments",render(t,e,r){return u(e.stats.commentCount)},sorter:(t,e)=>t.stats.commentCount-e.stats.commentCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-bookmark fa-lg"}),dataIndex:"collect",key:"collect",render(t,e,r){return u(e.stats.collectCount)},sorter:(t,e)=>t.stats.collectCount-e.stats.collectCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-share fa-lg"}),dataIndex:"shares",key:"shares",render(t,e,r){return u(e.stats.shareCount)},sorter:(t,e)=>t.stats.shareCount-e.stats.shareCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-clock fa-lg"}),dataIndex:"length",key:"length",render(t,e,r){return U(e.video.duration)},sorter:(t,e)=>t.video.duration-e.video.duration,width:70},{title:d({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"action",render(t,e,r){return i.jsx(h.Compact,{children:i.jsx(z,{title:d({en:"Open on tiktok",vi:"Mở trong tiktok"}),children:i.jsx(j,{icon:i.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),onClick:()=>{var a;window.open(`https://www.tiktok.com/@${(a=e.author)==null?void 0:a.uniqueId}/video/${e.video.id}`,"_blank")}})})})},width:90}],q=t=>i.jsxs(h,{children:[i.jsx(j,{type:"primary",icon:i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:N,loading:I,children:d({en:"Reload",vi:"Tải lại"})}),i.jsx(O,{text:s.map(e=>e.desc).join(`
`)}),i.jsx(H,{color:"success",children:d({en:`Found ${s.length} videos`,vi:`Tìm thấy ${s.length} video`})})]}),E=(t,e)=>{var r,a;return[e.id,e.desc,(r=e.author)==null?void 0:r.nickname,(a=e.author)==null?void 0:a.uniqueId].find(n=>!!n&&M(t,n))};return i.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[y?null:i.jsx(P,{message:d({vi:i.jsxs(o.Text,{children:["Cần Bật chức năng"," ",i.jsx(o.Link,{href:"#/autorun?"+c,children:"Tự chạy > Tiktok Tải hàng loạt"})," ","truớc"]}),en:i.jsxs(o.Text,{children:["Please Enable"," ",i.jsx(o.Link,{href:"#/autorun?"+c,children:"AutoRun > Tiktok batch download"})," ","first"]})}),type:"warning",showIcon:!0,style:{alignSelf:"center",marginBottom:10}}),y||s!=null&&s.length?i.jsx($,{searchable:!0,selectable:!0,data:s,columns:R,keyExtractor:t=>t.id,onSearchRow:E,renderTitle:q}):null]})}export{Ne as default};