import{r as l,av as r}from"./index-Dtcmp6JY.js";import{u as b,U as u,a3 as x,a4 as a,b as w,B as y,e as C,I as T}from"./MyApp-kb2kLbdm.js";import{C as j}from"./Collection-6KaBV5vS.js";import{g as k,a as E,b as S}from"./albums-BlpRNwm_.js";import{L as v}from"./index-uq76Aye9.js";import{I as A}from"./index-DpAHl3Pf.js";import{T as N}from"./index-2mBF6Cjd.js";import"./index-C9OcZAjD.js";import"./file-download-D0pOs_wu.js";import"./index-DNTQT7gA.js";import"./Dropdown-CC556hNY.js";import"./PurePanel-DOe6UZy0.js";import"./index-BBtJNEHe.js";import"./index-BXlTncM9.js";import"./index-DZsyOE7S.js";import"./addEventListener-DKefG3W_.js";import"./index-Dk3A3vwr.js";import"./index-5bSgvpJQ.js";import"./Pagination-Bvmy2umP.js";import"./useBreakpoint-tPbU-N1e.js";import"./row-DazFjwcO.js";function X({target:i,onOpenAlbum:m}){const{ti:d}=b(),h=l.useCallback(async(o=[])=>{var c;if(!(i!=null&&i.id)||!(i!=null&&i.type))return;const s=o==null?void 0:o[(o==null?void 0:o.length)-1];if(i.type!==u.Group)return(await k({id:i==null?void 0:i.id,accessToken:await x(a.EAAB),fromId:(s==null?void 0:s.id)||""})).albums;const e=i.type===u.Group?await E({groupId:i.id,cursor:s==null?void 0:s.cursor}):await S({uid:i.id,cursor:s==null?void 0:s.cursor});if((c=e.albums)!=null&&c.length){let n=new Set(o.map(p=>p.id));return e.albums.filter(p=>!n.has(p.id))}return[]},[i]),f=l.useCallback(o=>r.jsx(v.Item,{children:r.jsxs(w,{direction:"vertical",children:[r.jsx(y.Ribbon,{text:C(o.count),children:r.jsx(A,{src:o.picture,alt:o.name,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>{m==null||m(o)}})}),r.jsx(N.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.link),children:o.name})]})}),[]);return r.jsx(j,{collectionName:(i==null?void 0:i.name)+" - Albums",fetchNext:h,renderItem:f,rowKey:o=>o.id,searchPlaceholder:o=>d({en:`Search in ${o==null?void 0:o.length} albums...`,vi:`Tìm trong ${o.length} albums...`}),onSearch:(o,s)=>T(o,s.name)})}export{X as default};