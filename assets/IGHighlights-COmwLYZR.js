import{r as e,aq as t}from"./index-ChUN-Hb1.js";import{a4 as n}from"./MyApp-hofN0p2Y.js";import{C as c}from"./Collection-BST8eVDd.js";import{g as u,a as f}from"./highlights-B1Fm1Q2n.js";import{L as h}from"./index-CRhHB1XV.js";import{I as x}from"./index-Bk2k6fBa.js";import"./index-Db4Xqms9.js";import"./file-download-BCu_Scjq.js";import"./index-DTw_6s7A.js";import"./Dropdown-CWnpSE5H.js";import"./PurePanel-BhLpfNvI.js";import"./index-CADVK1I1.js";import"./index-BvgSpcno.js";import"./index-DpG35k3c.js";import"./TextArea-DCPCj0fB.js";import"./addEventListener-BoVJ4_CS.js";import"./index-D_grBprp.js";import"./index-DFwzCGDI.js";import"./index-BthFPnTt.js";import"./index-CyjhQgJR.js";import"./responsiveObserver-DZ4C7rpC.js";import"./useBreakpoint-CI1HCjRW.js";import"./index-D8jpdDyJ.js";import"./index-7dU0ARl5.js";import"./index-DNIRqdOc.js";import"./index-BmIhdVK7.js";import"./index-CY9z6QAx.js";import"./Pagination-D7zePFgL.js";import"./row-CxHPliGI.js";function T({target:r,onOpenHighlight:s}){const a=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),p=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:a,renderItem:p,downloadItem:l,rowKey:i=>i.id})}export{T as default};