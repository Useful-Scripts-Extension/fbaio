const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RecentStories-D65tZUL7.js","./index-CbmALuuH.js","./index-9SBFHPtm.css","./Collection-C09150M_.js","./index-DdEC0mzm.js","./file-download-DYrKRRrC.js","./MyApp-CSAMTqBO.js","./index-B9TBq_SW.js","./Dropdown-BDP-pYzn.js","./PurePanel-D3TqmnjM.js","./index-olz3ICR1.js","./index-B2pl_Dfk.js","./index-8uFrtugN.js","./EyeOutlined-bOiBl9WP.js","./SearchOutlined-DmFVdWlm.js","./index-CaFC64cJ.js","./Pagination-C64K0uVr.js","./useBreakpoint-CU3Qgd7s.js","./responsiveObserver-x3pAB4c_.js","./index-EcSnQiHC.js","./row-DXKMoTEE.js","./index-C5AaCaJO.js","./RecentStoryViewer-BmgQEv_r.js","./stories-CFHqtydz.js","./StoryViewers-CaKItAou.js","./index-I_7hNlKR.js","./index-CZH_DWoQ.js","./VideoWithMuted-CsCb7y4m.js","./index-BteK3TyS.js","./addEventListener-d94S1fEe.js","./index-DMaMx8tW.js","./ArchivedStories-BmIv7C78.js","./index-2MXkDIp7.js"])))=>i.map(i=>d[i]);
import{aI as l,aK as e,r as i,aT as s}from"./index-CbmALuuH.js";import{d as n,S as d}from"./MyApp-CSAMTqBO.js";import{T as m}from"./index-DlSTr5PR.js";import"./Dropdown-BDP-pYzn.js";const h=i.lazy(()=>s(()=>import("./RecentStories-D65tZUL7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),import.meta.url)),v=i.lazy(()=>s(()=>import("./ArchivedStories-BmIv7C78.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,28,29,32,26]),import.meta.url)),t={Recent:"recent",Archived:"archived"};function y(){const{ti:a}=l(),[r,c]=n("Stories.activeTab",t.Recent),o=[{key:t.Recent,label:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-clock-rotate-left"})," ",a({en:"Today",vi:"Hôm nay"})]}),closable:!1,children:e.jsx(h,{})},{key:t.Archived,label:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-archive"})," ",a({en:"Archived",vi:"Kho lưu trữ"})]}),closable:!1,children:e.jsx(v,{})}];return e.jsxs(d,{direction:"vertical",style:{width:"100%"},children:[e.jsx("h1",{style:{textAlign:"left"},children:a({en:"Story",vi:"Tin"})}),e.jsx(m,{hideAdd:!0,type:"editable-card",defaultActiveKey:t.Recent,activeKey:r,onChange:c,items:o})]})}export{y as default};