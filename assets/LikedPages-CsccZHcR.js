import{aK as h,aM as s,b2 as u,ba as p}from"./index-CYlZutVr.js";import{E as x}from"./ExportButton-BVrzxb8b.js";import{C as f}from"./Collection-9ziWCEgj.js";import{c as j}from"./pages-Ctj9qfAM.js";import{W as k}from"./WordStatisticButton-GIaW5Usq.js";import{A as y}from"./index-C1pQ7vmG.js";import{L as _}from"./index-Xbsh90k7.js";import{S as b}from"./MyApp-BJ45vRcB.js";import{I as g}from"./index-C_xH7MVQ.js";import{T as l}from"./index-BkwamVt9.js";import"./file-download-C5TDGQlG.js";import"./index-CyYrA5Nz.js";import"./Dropdown-C-Rv_SFW.js";import"./PurePanel-Mq6tkvkA.js";import"./index-GR6jw6iU.js";import"./index-CNM_jJft.js";import"./index-A1GLTxUb.js";import"./EyeOutlined-Duix5ejY.js";import"./SearchOutlined-D8uMPfzU.js";import"./index-D0gqD3Ec.js";import"./MyTable-hZaMks_0.js";import"./index-ClNoq3em.js";import"./Table-BJRngaom.js";import"./addEventListener-B1Rhyrmr.js";import"./useBreakpoint-D8WkCA85.js";import"./Pagination-B9c87l1v.js";import"./row-Jtw_e6pS.js";import"./index-CBQ2cMVY.js";function X({target:i}){const{ti:a}=h(),c=async(e=[],o)=>{var n;return i!=null&&i.id?await j({uid:i.id,cursor:o||((n=e[e.length-1])==null?void 0:n.cursor)}):void 0},d=e=>s.jsx(_.Item,{children:s.jsxs(b,{direction:"vertical",style:{maxWidth:150},children:[s.jsx(g,{src:e.image,style:{width:150,height:150,objectFit:"contain",borderRadius:10}}),s.jsxs("span",{style:{margin:0},children:[s.jsxs(l.Text,{type:"secondary",children:[" ",e.id," "]}),s.jsx("br",{}),s.jsx(l.Link,{strong:!0,href:e.url,target:"_blank",children:e.name})]})]})});return s.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Liked Pages",fetchNext:c,renderItem:d,getItemCursor:e=>e.cursor,rowKey:e=>e.id,showPagination:!0,all:!0,searchPlaceholder:e=>a({en:`Search in ${e.length} liked pages`,vi:`Tìm trong ${e.length} trang được thích`}),onSearch:(e,o)=>u(e,o.name+o.id),header:e=>{var r,n,m,t;const o=((r=e[0])==null?void 0:r.total)&&((n=e[0])==null?void 0:n.total)!==e.length;return s.jsx(y,{type:"success",showIcon:!0,message:a({en:`Liked ${e.length} public pages`+(o?` (in total ${(m=e[0])==null?void 0:m.total} likes)`:""),vi:`Đã thích ${e.length} trang công khai`+(o?` (trong tổng ${(t=e[0])==null?void 0:t.total} lượt thích)`:"")})})},headerButtons:e=>s.jsxs(s.Fragment,{children:[s.jsx(x,{data:e,options:[{key:"uid",label:".txt (pages id)",prepareData:o=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id.txt",data:o.map(r=>r.id).join(`
`)})},{key:"id_name",label:".csv (page id+name)",prepareData:o=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id_name.csv",data:p(o.map(r=>({id:r.id,name:r.name})))})},{key:"json",label:".json",prepareData:o=>({fileName:(i==null?void 0:i.name)+"_liked_pages.json",data:JSON.stringify(o,null,4)})},{key:"csv",label:".csv",prepareData:o=>({fileName:(i==null?void 0:i.name)+"_liked_pages.csv",data:p(o)})}]}),s.jsx(k,{name:"LikedPages",text:e.map(o=>o.name).join(" ")})]})})}export{X as default};