import{r as s,aA as r,aB as d}from"./index-CPSjGcce.js";import{b as a}from"./index-D8KpQIyc.js";import{C as l}from"./Collection-lrthDWkf.js";import{g as c}from"./MyApp-DNu7Y3Mh.js";import{L as u}from"./index-DQtohSzx.js";import{I as f}from"./index-0Rgq7M-P.js";import{A as h}from"./index-BTho6bhg.js";import"./videos-C2SqPch9.js";import"./index-McOYx1Xa.js";import"./responsiveObserver-LuibVeVQ.js";import"./useBreakpoint-DADK3BoI.js";import"./index-DetEqurY.js";import"./index-BwaE8uIm.js";import"./PurePanel-AyE_C0pF.js";import"./index-CTR9l44t.js";import"./SearchOutlined-CLBNNSEp.js";import"./index-CpyW8C6c.js";import"./EyeOutlined-xFRO8GDR.js";import"./index-PG6UsLC6.js";import"./Dropdown-C6lNidxb.js";import"./Collapse-BW45wZ-G.js";import"./index-DGP5jGL8.js";import"./file-download-BsiZbzVt.js";import"./index-D76swR3K.js";import"./index-BcvsFg5T.js";import"./index-OJYAO_JL.js";import"./Pagination-Cia5aths.js";import"./row-DB63oLFt.js";import"./addEventListener-NIkFtA3h.js";function Q({target:i}){const t=s.useCallback(async(o=[],m)=>{var e;return i!=null&&i.id?await a(i.username||"",m||((e=o[o.length-1])==null?void 0:e.cursor)):void 0},[i]),p=s.useCallback(o=>r.jsx(u.Item,{children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(f,{src:o.video.dynamicCover,width:250,height:330,style:{objectFit:"cover",borderRadius:10},preview:!1}),r.jsx(d,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:"https://www.tiktok.com/@"+(i==null?void 0:i.id)+"/video/"+o.id})]})}),[]),n=s.useCallback((o,m)=>({name:o.id+".mp4",url:o.video.downloadAddr}),[]);return r.jsx(l,{collectionName:(i==null?void 0:i.name)+" - Tiktok User Videos",fetchNext:t,renderItem:p,downloadItem:n,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id,header:()=>{var o;return r.jsx(h,{showIcon:!0,type:"info",message:"Total "+c((o=i==null?void 0:i.raw)==null?void 0:o.videoCount)+" videos"})}})}export{Q as default};