const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RecentStories-cuyi8yJG.js","./index-C9a7kOyS.js","./index-CawCDZ84.css","./Collection-D8VGMlz0.js","./index-1LBg6_PE.js","./file-download-DAQ-WD33.js","./MyApp-eLgOszab.js","./index-BYTpD0UZ.js","./Dropdown-gfxpn-z7.js","./PurePanel-DJB0B014.js","./index-C9gPXY7f.js","./index-DmxoYqZk.js","./index-aY3yYPYF.js","./EyeOutlined-B_Sf26ve.js","./SearchOutlined-DrFTn-jV.js","./index-CuV0lcJx.js","./Pagination-DPFRT-88.js","./useBreakpoint-C1qEcW11.js","./index-DZeVjoNF.js","./row-C9GAN_vR.js","./index-Ch8MZEP_.js","./RecentStoryViewer-Cg8pMllZ.js","./stories-PkYr0R8o.js","./StoryViewers-CTJZPsv4.js","./index-CKIo4QoG.js","./index-F7cWREmo.js","./VideoWithMuted-BNfayS0A.js","./index-B9K95DAg.js","./addEventListener-8k3J7yP4.js","./BadgeWrapper-C_IDMIrb.js","./index-Cy9p4zqv.js","./ArchivedStories-D3bX6AUe.js","./useAction-XcKWoXOW.js","./Collapse-CwRWUIlI.js","./useDevMode-Db_pSG7L.js"])))=>i.map(i=>d[i]);
import{aJ as l,aL as e,r as i,aV as s}from"./index-C9a7kOyS.js";import{e as n,S as d}from"./MyApp-eLgOszab.js";import{T as m}from"./index-BapWOJNx.js";import"./Dropdown-gfxpn-z7.js";const h=i.lazy(()=>s(()=>import("./RecentStories-cuyi8yJG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),import.meta.url)),v=i.lazy(()=>s(()=>import("./ArchivedStories-D3bX6AUe.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,32,33,34,27,28]),import.meta.url)),t={Recent:"recent",Archived:"archived"};function y(){const{ti:a}=l(),[r,c]=n("Stories.activeTab",t.Recent),o=[{key:t.Recent,label:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-clock-rotate-left"})," ",a({en:"Today",vi:"Hôm nay"})]}),closable:!1,children:e.jsx(h,{})},{key:t.Archived,label:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-archive"})," ",a({en:"Archived",vi:"Kho lưu trữ"})]}),closable:!1,children:e.jsx(v,{})}];return e.jsxs(d,{direction:"vertical",style:{width:"100%"},children:[e.jsx("h1",{style:{textAlign:"left"},children:a({en:"Story",vi:"Tin"})}),e.jsx(m,{hideAdd:!0,type:"editable-card",defaultActiveKey:t.Recent,activeKey:r,onChange:c,items:o})]})}export{y as default};