import{r as s,aJ as r,aL as d,b4 as a}from"./index-DRt5rAj7.js";import{g as l}from"./index-Ckmppglk.js";import{C as c}from"./Collection-BRvVwtLe.js";import{L as u}from"./index-D8XVQcvD.js";import{I as f}from"./index-1pId1u-f.js";import{A as h}from"./index-CufXhkXT.js";import"./MyApp-XSygTG_h.js";import"./core-C884O1MQ.js";import"./videos-DwqRkCAb.js";import"./index-DhkXiLqb.js";import"./responsiveObserver-DUFstwB3.js";import"./useBreakpoint-DS6mmmZM.js";import"./index-Dd860CxK.js";import"./index-gQvFHShS.js";import"./PurePanel-Da4LrOKo.js";import"./index-BRHHLsUq.js";import"./SearchOutlined-B-ayKa5I.js";import"./index-DuHX6d3B.js";import"./EyeOutlined-BjTaxtzY.js";import"./index-DXnDKfXg.js";import"./index-BRbV9nX6.js";import"./Dropdown-ClTZfmGR.js";import"./Collapse-CKx0V2Sf.js";import"./index-qqMoPFKW.js";import"./file-download-bga_pJUv.js";import"./index-DdmnqIWl.js";import"./index-CAfgExhN.js";import"./index-BBll4xqz.js";import"./Pagination-C2pNX2gi.js";import"./row-DAq3d9U1.js";import"./addEventListener-BMU1b19v.js";function X({target:i}){const t=s.useCallback(async(o=[],m)=>{var e;return i!=null&&i.id?await l(i.username||"",m||((e=o[o.length-1])==null?void 0:e.cursor)):void 0},[i]),p=s.useCallback(o=>r.jsx(u.Item,{children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(f,{src:o.video.dynamicCover,width:250,height:330,style:{objectFit:"cover",borderRadius:10},preview:!1}),r.jsx(d,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:"https://www.tiktok.com/@"+(i==null?void 0:i.id)+"/video/"+o.id})]})}),[]),n=s.useCallback((o,m)=>({name:o.id+".mp4",url:o.video.downloadAddr}),[]);return r.jsx(c,{collectionName:(i==null?void 0:i.name)+" - Tiktok User Videos",fetchNext:t,renderItem:p,downloadItem:n,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id,header:()=>{var o;return r.jsx(h,{showIcon:!0,type:"info",message:"Total "+a((o=i==null?void 0:i.raw)==null?void 0:o.videoCount)+" videos"})}})}export{X as default};