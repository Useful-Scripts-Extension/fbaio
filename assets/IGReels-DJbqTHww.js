import{r as t,aL as s,cp as i,aN as d}from"./index-C9a7kOyS.js";import{C as c}from"./Collection-D8VGMlz0.js";import{g as u}from"./reels-Bwiw1h-B.js";import{c as f}from"./core-CDOs0AQy.js";import{V as h}from"./VideoWithMuted-BNfayS0A.js";import{L as x}from"./index-CuV0lcJx.js";import{I as b}from"./index-B9K95DAg.js";import"./index-1LBg6_PE.js";import"./file-download-DAQ-WD33.js";import"./MyApp-eLgOszab.js";import"./index-BYTpD0UZ.js";import"./Dropdown-gfxpn-z7.js";import"./PurePanel-DJB0B014.js";import"./index-C9gPXY7f.js";import"./index-DmxoYqZk.js";import"./index-aY3yYPYF.js";import"./EyeOutlined-B_Sf26ve.js";import"./SearchOutlined-DrFTn-jV.js";import"./index-Ch8MZEP_.js";import"./videos-Dm74OwMX.js";import"./Pagination-DPFRT-88.js";import"./useBreakpoint-C1qEcW11.js";import"./index-DZeVjoNF.js";import"./row-C9GAN_vR.js";import"./addEventListener-8k3J7yP4.js";function U({target:e}){const l=t.useCallback(async(o=[],a)=>{var m;return e!=null&&e.id?await u(e.id,a||((m=o[o.length-1])==null?void 0:m.cursor)):void 0},[e]),n=t.useCallback(o=>s.jsxs(x.Item,{className:"show-on-hover-trigger",children:[s.jsx(b,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(h,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),s.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:s.jsxs("div",{style:{position:"absolute",bottom:15,left:15,fontWeight:"bold",fontSize:"1.1em"},children:[s.jsx("i",{className:"fa-solid fa-play"})," ",i(o.play_count),s.jsx("br",{}),s.jsx("i",{className:"fa-solid fa-heart"})," ",i(o.like_count),s.jsx("br",{}),s.jsx("i",{className:"fa-solid fa-message"})," ",i(o.comment_count)]})}),s.jsx(d,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:f("p/"+o.post_id)})]}),[]),p=t.useCallback((o,a)=>{const r=!!o.video;return{url:r?o.video:o.image,name:o.id+(r?".mp4":".jpg")}},[]);return s.jsx(c,{collectionName:(e==null?void 0:e.username)+" - IG Reels",fetchNext:l,renderItem:n,downloadItem:p,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{U as default};