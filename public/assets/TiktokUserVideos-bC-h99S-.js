import{r as s,aw as r,ay as d}from"./index-BDuAyY7p.js";import{g as a}from"./index-BT7S2L8U.js";import{C as l}from"./Collection-FpmS43lb.js";import{g as c}from"./MyApp-IVuV4tYN.js";import{L as u}from"./index-DeTtG-4i.js";import{I as f}from"./index-DASk05sz.js";import{A as h}from"./index-CmmUrPFu.js";import"./core-CDntDfkq.js";import"./videos-BObWMpjN.js";import"./index-Dr160sfE.js";import"./responsiveObserver-CmfHgHEV.js";import"./useBreakpoint-D9Zu1g-j.js";import"./index-BYhLrDh7.js";import"./index-B6ep-NY_.js";import"./PurePanel-BhwhYMVY.js";import"./index-BCAC29t7.js";import"./SearchOutlined-DLhMBbds.js";import"./index-CVsG0Anm.js";import"./EyeOutlined-Vc6hqBQj.js";import"./index-DAyPEJnE.js";import"./Dropdown-CPWr9Aco.js";import"./Collapse-Cv-4oPgB.js";import"./index-D4hXkhfU.js";import"./file-download-EkbByG41.js";import"./index-CSmxcSph.js";import"./index-BgI4Bc9V.js";import"./index-Gx5v94PI.js";import"./Pagination-D5d86IYn.js";import"./row-NbiyGNWy.js";import"./addEventListener-DgnPC-gQ.js";function S({target:i}){const t=s.useCallback(async(o=[],m)=>{var e;return i!=null&&i.id?await a(i.username||"",m||((e=o[o.length-1])==null?void 0:e.cursor)):void 0},[i]),p=s.useCallback(o=>r.jsx(u.Item,{children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(f,{src:o.video.dynamicCover,width:250,height:330,style:{objectFit:"cover",borderRadius:10},preview:!1}),r.jsx(d,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:"https://www.tiktok.com/@"+(i==null?void 0:i.id)+"/video/"+o.id})]})}),[]),n=s.useCallback((o,m)=>({name:o.id+".mp4",url:o.video.downloadAddr}),[]);return r.jsx(l,{collectionName:(i==null?void 0:i.name)+" - Tiktok User Videos",fetchNext:t,renderItem:p,downloadItem:n,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id,header:()=>{var o;return r.jsx(h,{showIcon:!0,type:"info",message:"Total "+c((o=i==null?void 0:i.raw)==null?void 0:o.videoCount)+" videos"})}})}export{S as default};