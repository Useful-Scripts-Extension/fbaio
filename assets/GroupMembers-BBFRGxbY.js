import{r as o,av as i,aw as x}from"./index-Dtcmp6JY.js";import{u as f}from"./useForceStop-CVAJJE1m.js";import{u as h,e as j}from"./MyApp-kb2kLbdm.js";import y from"./MyTable-BrAu-JA5.js";import{b as T}from"./groups-CKR8iJkq.js";import{R as b}from"./row-DazFjwcO.js";import{A as v}from"./index-B-BpTNJ8.js";import{I as A}from"./index-DpAHl3Pf.js";import{A as C}from"./index-DqdNzZ8h.js";import"./index-C9OcZAjD.js";import"./Table-CjghKRll.js";import"./index-2mBF6Cjd.js";import"./addEventListener-DKefG3W_.js";import"./index-Dk3A3vwr.js";import"./PurePanel-DOe6UZy0.js";import"./index-BBtJNEHe.js";import"./index-BXlTncM9.js";import"./index-DNTQT7gA.js";import"./Dropdown-CC556hNY.js";import"./index-C28OU1dQ.js";import"./useBreakpoint-tPbU-N1e.js";import"./Pagination-Bvmy2umP.js";import"./index-DZsyOE7S.js";import"./index-C2IP6V-E.js";function V({target:a}){const{ti:s}=h();f();const[n,I]=o.useState(!1),[r,d]=o.useState(null),[m,k]=o.useState([]),l=o.useMemo(()=>m.map((e,t)=>({...e,recent:t})),[m]);o.useEffect(()=>{!(a!=null&&a.id)||!(a!=null&&a.type)||T(a==null?void 0:a.id).then(e=>{d(e)})},[a]);const p=e=>i.jsxs(i.Fragment,{children:[i.jsx(x,{type:"primary",icon:n?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:!0,children:s("Fetch all")}),i.jsx(C,{showIcon:!0,type:"info",message:`${r==null?void 0:r.adminCount} admins. ${j(r==null?void 0:r.memberCount)} members`})]}),c=[{title:"#",dataIndex:"recent",key:"recent",render:(e,t,u)=>(t.recent||0)+1},{title:s({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,t)=>e.name.localeCompare(t.name),render:(e,t,u)=>i.jsxs(b,{align:"middle",children:[i.jsx(v,{shape:"square",src:i.jsx(A,{src:t.avatar}),size:50}),i.jsx("a",{href:t.url,target:"_blank",style:{marginLeft:"10px"},children:i.jsx("b",{children:t.name})})]}),width:"auto"},{title:"Uid",dataIndex:"id",key:"id",sorter:(e,t)=>e.id.localeCompare(t.id),width:150},{title:s({en:"Joined time",vi:"Tham gia lúc"}),dataIndex:"joinedTime",key:"joinedTime",sorter:(e,t)=>e.joinedTime.localeCompare(t.joinedTime)},{title:s({en:"Last Active",vi:"Hoạt động gần nhất"}),dataIndex:"lastActiveTime",key:"lastActiveTime",sorter:(e,t)=>e.lastActiveTime.localeCompare(t.lastActiveTime)}];return i.jsx(y,{columns:c,data:l,keyExtractor:e=>e.id,searchable:!0,renderTitle:p})}export{V as default};