import{r as l,ap as r}from"./index-B_jZEb__.js";import{u as b,M as u,Z as x,_ as a,b as w,B as y,e as C,E}from"./MyApp-BycUN0_u.js";import{C as T}from"./Collection-BOJbI2w-.js";import{g as j,a as k,b as S}from"./albums-CqeK9MpG.js";import{L as A}from"./index-D1_LFGNr.js";import{I as t}from"./index-CJ-JscGF.js";import{T as v}from"./index-B7_SlTTn.js";import"./index-bWONBu7J.js";import"./file-download-tq_CNB5u.js";import"./index-BCozaaC_.js";import"./Dropdown-BHHgQi8q.js";import"./PurePanel-CWYPkMI9.js";import"./index-CyKnLzgY.js";import"./index-BiwhyZjk.js";import"./index-aFeeKJIk.js";import"./TextArea-eUhruA7f.js";import"./addEventListener-C69WSFn-.js";import"./index-CaKAOveq.js";import"./index-nJTQAUbn.js";import"./Pagination-CcHVFCLE.js";import"./useBreakpoint-BT6go2aR.js";import"./responsiveObserver-cjyuYb8T.js";import"./row-DrbQIr8S.js";function O({target:i,onOpenAlbum:m}){const{ti:d}=b(),h=l.useCallback(async(o=[])=>{var c;if(!(i!=null&&i.id)||!(i!=null&&i.type))return;const s=o==null?void 0:o[(o==null?void 0:o.length)-1];if(i.type!==u.Group)return(await j({id:i==null?void 0:i.id,accessToken:await x(a.EAAB),fromId:(s==null?void 0:s.id)||""})).albums;const e=i.type===u.Group?await k({groupId:i.id,cursor:s==null?void 0:s.cursor}):await S({uid:i.id,cursor:s==null?void 0:s.cursor});if((c=e.albums)!=null&&c.length){let n=new Set(o.map(p=>p.id));return e.albums.filter(p=>!n.has(p.id))}return[]},[i]),f=l.useCallback(o=>r.jsx(A.Item,{children:r.jsxs(w,{direction:"vertical",children:[r.jsx(y.Ribbon,{text:C(o.count),children:r.jsx(t,{src:o.picture,alt:o.name,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>{m==null||m(o)}})}),r.jsx(v.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.link),children:o.name})]})}),[]);return r.jsx(T,{collectionName:(i==null?void 0:i.name)+" - Albums",fetchNext:h,renderItem:f,rowKey:o=>o.id,searchPlaceholder:o=>d({en:`Search in ${o==null?void 0:o.length} albums...`,vi:`Tìm trong ${o.length} albums...`}),onSearch:(o,s)=>E(o,s.name)})}export{O as default};