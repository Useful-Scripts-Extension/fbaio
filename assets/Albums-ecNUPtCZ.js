import{aJ as x,r as p,aL as r,b9 as w,aN as y,b1 as j}from"./index-C9a7kOyS.js";import{C as k}from"./Collection-D8VGMlz0.js";import{w as u,f as C,A as v,S as d,B as T,a as A}from"./MyApp-eLgOszab.js";import{g as E,a as N,b as S}from"./albums-Cwhj6LuN.js";import{A as g}from"./index-Cy9p4zqv.js";import{L as B}from"./index-CuV0lcJx.js";import{I}from"./index-B9K95DAg.js";import{T as L}from"./index-aY3yYPYF.js";import"./index-1LBg6_PE.js";import"./file-download-DAQ-WD33.js";import"./index-BYTpD0UZ.js";import"./Dropdown-gfxpn-z7.js";import"./PurePanel-DJB0B014.js";import"./index-C9gPXY7f.js";import"./index-DmxoYqZk.js";import"./EyeOutlined-B_Sf26ve.js";import"./SearchOutlined-DrFTn-jV.js";import"./index-Ch8MZEP_.js";import"./Pagination-DPFRT-88.js";import"./useBreakpoint-C1qEcW11.js";import"./index-DZeVjoNF.js";import"./row-C9GAN_vR.js";import"./addEventListener-8k3J7yP4.js";function io({target:s,onOpenAlbum:m}){const{ti:l}=x(),t=p.useCallback(async(o=[])=>{var a,h;if(!(s!=null&&s.id)||!(s!=null&&s.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];if(s.type!==u.Group){const e=await E({id:s==null?void 0:s.id,accessToken:await C(v.EAAB),fromId:(i==null?void 0:i.id)||""});if((a=e.albums)!=null&&a.length)return e.albums}const c=s.type===u.Group?await N({groupId:s.id,cursor:i==null?void 0:i.cursor}):await S({uid:s.id,cursor:i==null?void 0:i.cursor});if((h=c.albums)!=null&&h.length){let e=new Set(o.map(n=>n.id));return c.albums.filter(n=>!e.has(n.id))}return[]},[s]),f=p.useCallback(()=>r.jsx(d,{children:r.jsx(g,{showIcon:!0,type:"info",message:l({en:"Click any album to view photos",vi:"Click album bất kỳ để xem ảnh"})})}),[l]),b=p.useCallback(o=>r.jsx(B.Item,{children:r.jsxs(d,{direction:"vertical",children:[r.jsx(T.Ribbon,{text:w(o.count),children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(I,{src:o.picture,alt:o.name,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>{m==null||m(o)}}),r.jsx(y,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:A(o.id)})]})}),r.jsx(L.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.link),children:o.name})]})}),[]);return r.jsx(k,{collectionName:(s==null?void 0:s.name)+" - Albums",fetchNext:t,renderItem:b,rowKey:o=>o.id,header:f,searchPlaceholder:o=>l({en:`Search in ${o==null?void 0:o.length} albums...`,vi:`Tìm trong ${o.length} albums...`}),onSearch:(o,i)=>j(o,i.name)})}export{io as default};