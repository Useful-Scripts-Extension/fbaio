import{r as e,ao as t}from"./index-BFn-6Edh.js";import{X as n}from"./MyApp-DFBTiUY2.js";import{C as c}from"./Collection-D6m7stAb.js";import{g as u,a as f}from"./highlights-CwabAkwe.js";import{L as h}from"./index-DQGCwcp1.js";import{I as x}from"./index-CG6mvIFQ.js";import"./index-GFn6fjKK.js";import"./file-download-DY69jm4A.js";import"./index-DkklC9C3.js";import"./Dropdown-CSjPzYNY.js";import"./PurePanel-BR_NfrYZ.js";import"./index-BhmIFDvl.js";import"./TextArea-DQJ35YWe.js";import"./addEventListener-kqA3M70Z.js";import"./index-V6Q4KjhD.js";import"./index-Di08Y4UQ.js";import"./index-vuHwb1ab.js";import"./index-BlsonaqD.js";import"./responsiveObserver-v2OBV4_6.js";import"./useBreakpoint-BWsK2CiS.js";import"./index-DooVCJpD.js";import"./index-Bd6FeIMb.js";import"./index-B6cCXG3e.js";import"./index-f7LtBXxN.js";import"./Pagination-B1vE0OIm.js";import"./row-D6yUyrac.js";function H({target:r,onOpenHighlight:s}){const a=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),p=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:a,renderItem:p,downloadItem:l,rowKey:i=>i.id})}export{H as default};