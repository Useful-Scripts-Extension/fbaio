const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-DKB2vgCa.js","./index-BDuAyY7p.js","./index-9SBFHPtm.css","./VideoWithMuted-CAb7uOab.js","./MyApp-IVuV4tYN.js"])))=>i.map(i=>d[i]);
import{ax as w,r as s,aw as t,ay as j,aU as S,aB as I}from"./index-BDuAyY7p.js";import{u as L,c as V,e as x,t as y,X as T,S as E,B as C}from"./MyApp-IVuV4tYN.js";import{g as D}from"./videos-BObWMpjN.js";import{T as N}from"./index-B6ep-NY_.js";import{I as R}from"./index-CVsG0Anm.js";import{C as U}from"./Collapse-Cv-4oPgB.js";import"./EyeOutlined-Vc6hqBQj.js";import"./SearchOutlined-DLhMBbds.js";const _=s.lazy(()=>I(()=>import("./VideoViewer-DKB2vgCa.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url));function M(){var g,p;const{ti:o}=L(),{message:a}=V(),i=w(),l=s.useMemo(()=>new URLSearchParams(i.search),[i.search]),[f,c]=x("videoDownloader.url",l.get("url")||((g=i.state)==null?void 0:g.url)||""),[h,d]=x("videoDownloader.info",((p=i.state)==null?void 0:p.info)||null),[m,r]=s.useState(!1);s.useEffect(()=>{y("VideoDownloader:onLoad")},[]),s.useEffect(()=>{var e,n;(e=i.state)!=null&&e.url&&((n=i.state)!=null&&n.info)&&(c(i.state.url),d(i.state.info))},[i.state]),s.useEffect(()=>{if(l.get("url")){const e=setTimeout(v,200);return()=>clearTimeout(e)}},[l]);const v=async()=>{const e="VideoDownloader:onSearch";y(e),r(!0),a.loading({key:e,content:o({en:"Finding video...",vi:"Đang tìm video..."}),duration:0});const n=await T(f);if(!n){r(!1),a.error({key:e,content:o({en:"Video not found",vi:"Không tìm thấy video"})});return}a.success({content:o({en:"Found video id: ",vi:"Tìm thấy ID video: "})+n}),a.loading({key:e,content:o({en:"Fetching video info...",vi:"Đang tải thông tin video..."}),duration:0});const u=await D(n);if(console.log(u),!u){r(!1),a.error({key:e,content:o({en:"Cannot fetch video info",vi:"Không tải được video"})});return}a.success({key:e,content:o({en:"Fetched video info",vi:"Tải thông tin video thành công"})}),d(u),r(!1)};return t.jsxs(E,{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",padding:10},direction:"vertical",children:[t.jsx(N.Title,{level:3,children:o({en:"Video/Reel downloader",vi:"Tải video/reel"})}),t.jsx(R.Search,{placeholder:o({en:"Enter video/reel URL",vi:"Nhập LINK video/reel"}),size:"large",style:{width:350},value:f,onChange:e=>{var n;return c((n=e.target.value)==null?void 0:n.trim())},onSearch:()=>v(),enterButton:m?null:t.jsx("i",{className:"fa-solid fa-magnifying-glass"}),loading:m}),h?t.jsxs("div",{style:{position:"relative"},children:[t.jsx(_,{buttonTop:!0,info:h}),t.jsx(j,{type:"text",icon:t.jsx("i",{className:"fa-solid fa-xmark"}),onClick:()=>{c(""),d(null)},style:{position:"absolute",right:5,top:5}})]}):t.jsx(C,{color:"purple",count:o({en:"New",vi:"Mới"}),style:{color:"white"},children:t.jsx(U,{defaultActiveKey:[0],items:[{label:o({en:"Supported URL format ?",vi:"Các định dạng LINK được hỗ trợ ?"}),children:t.jsx("ul",{children:S.map(e=>t.jsx("li",{children:e},e))})}]})})]})}export{M as default};