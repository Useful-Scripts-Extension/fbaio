import{aA as o}from"./index-CPSjGcce.js";import{u as d,K as h,o as p,S as u}from"./MyApp-DNu7Y3Mh.js";import{E as x}from"./ExportButton-BvtwtDwc.js";import{C as f}from"./Collection-lrthDWkf.js";import{c as j}from"./pages-CL95mjzQ.js";import{A as k}from"./index-BTho6bhg.js";import{L as y}from"./index-DQtohSzx.js";import{I as _}from"./index-0Rgq7M-P.js";import"./file-download-BsiZbzVt.js";import"./index-D76swR3K.js";import"./Dropdown-C6lNidxb.js";import"./PurePanel-AyE_C0pF.js";import"./index-DGP5jGL8.js";import"./index-BcvsFg5T.js";import"./index-CpyW8C6c.js";import"./index-BwaE8uIm.js";import"./EyeOutlined-xFRO8GDR.js";import"./SearchOutlined-CLBNNSEp.js";import"./index-OJYAO_JL.js";import"./Pagination-Cia5aths.js";import"./useBreakpoint-DADK3BoI.js";import"./responsiveObserver-LuibVeVQ.js";import"./index-CTR9l44t.js";import"./row-DB63oLFt.js";import"./addEventListener-NIkFtA3h.js";function G({target:i}){const{ti:a}=d(),t=async(e=[],s)=>{var r;return i!=null&&i.id?await j({uid:i.id,cursor:s||((r=e[e.length-1])==null?void 0:r.cursor)}):void 0},c=e=>o.jsx(y.Item,{children:o.jsxs(u,{direction:"vertical",style:{maxWidth:150},children:[o.jsx(_,{src:e.image,style:{width:150,height:150,objectFit:"contain",borderRadius:10}}),o.jsxs("span",{style:{margin:0},children:[o.jsx("span",{style:{opacity:.7},children:e.id}),o.jsx("br",{}),o.jsx("a",{href:e.url,target:"_blank",children:o.jsx("b",{children:e.name})})]})]})});return o.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Liked Pages",fetchNext:t,renderItem:c,getItemCursor:e=>e.cursor,rowKey:e=>e.id,showPagination:!0,all:!0,searchPlaceholder:e=>a({en:`Search in ${e.length} liked pages`,vi:`Tìm trong ${e.length} trang được thích`}),onSearch:(e,s)=>h(e,s.name+s.id),header:e=>{var n,r,m,l;const s=((n=e[0])==null?void 0:n.total)&&((r=e[0])==null?void 0:r.total)!==e.length;return o.jsx(k,{type:"success",showIcon:!0,message:a({en:`Liked ${e.length} public pages`+(s?` (in total ${(m=e[0])==null?void 0:m.total} likes)`:""),vi:`Đã thích ${e.length} trang công khai`+(s?` (trong tổng ${(l=e[0])==null?void 0:l.total} lượt thích)`:"")})})},headerButtons:e=>o.jsx(x,{data:e,options:[{key:"uid",label:".txt (pages id)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id.txt",data:s.map(n=>n.id).join(`
`)})},{key:"id_name",label:".csv (page id+name)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id_name.csv",data:p(s.map(n=>({id:n.id,name:n.name})))})},{key:"json",label:".json",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.json",data:JSON.stringify(s,null,4)})},{key:"csv",label:".csv",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.csv",data:p(s)})}]})})}export{G as default};