import{r as o,av as i,aw as x}from"./index-BzHjJZ6J.js";import{u as f}from"./useForceStop-BnwbPy8r.js";import{u as h,e as j}from"./MyApp-P_ZAPtxc.js";import y from"./MyTable-CuFpgGbx.js";import{b as T}from"./groups-Bb0kyA_Z.js";import{R as b}from"./row-CrtjfzA9.js";import{A as v}from"./index-B3hIcIR4.js";import{I as A}from"./index-isaRSNRL.js";import{A as C}from"./index-DDkJ4-4M.js";import"./index-CjOrqomX.js";import"./Table-DBu5xyCN.js";import"./index-CxjRYcOo.js";import"./addEventListener-CYR6kZcj.js";import"./index-C3yQlH26.js";import"./PurePanel-nLO0RZ46.js";import"./index-CzUkjAGb.js";import"./index-Cd_NWbNz.js";import"./index-CJ9N7clN.js";import"./Dropdown-Dgn2-KTF.js";import"./index-BNHfpCXa.js";import"./useBreakpoint-1TxoALFb.js";import"./Pagination-PNe0cuUg.js";import"./index-DM0pvvLI.js";import"./index-Cfi9UxPj.js";function V({target:a}){const{ti:s}=h();f();const[n,I]=o.useState(!1),[r,d]=o.useState(null),[m,k]=o.useState([]),l=o.useMemo(()=>m.map((e,t)=>({...e,recent:t})),[m]);o.useEffect(()=>{!(a!=null&&a.id)||!(a!=null&&a.type)||T(a==null?void 0:a.id).then(e=>{d(e)})},[a]);const p=e=>i.jsxs(i.Fragment,{children:[i.jsx(x,{type:"primary",icon:n?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:!0,children:s("Fetch all")}),i.jsx(C,{showIcon:!0,type:"info",message:`${r==null?void 0:r.adminCount} admins. ${j(r==null?void 0:r.memberCount)} members`})]}),c=[{title:"#",dataIndex:"recent",key:"recent",render:(e,t,u)=>(t.recent||0)+1},{title:s({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,t)=>e.name.localeCompare(t.name),render:(e,t,u)=>i.jsxs(b,{align:"middle",children:[i.jsx(v,{shape:"square",src:i.jsx(A,{src:t.avatar}),size:50}),i.jsx("a",{href:t.url,target:"_blank",style:{marginLeft:"10px"},children:i.jsx("b",{children:t.name})})]}),width:"auto"},{title:"Uid",dataIndex:"id",key:"id",sorter:(e,t)=>e.id.localeCompare(t.id),width:150},{title:s({en:"Joined time",vi:"Tham gia lúc"}),dataIndex:"joinedTime",key:"joinedTime",sorter:(e,t)=>e.joinedTime.localeCompare(t.joinedTime)},{title:s({en:"Last Active",vi:"Hoạt động gần nhất"}),dataIndex:"lastActiveTime",key:"lastActiveTime",sorter:(e,t)=>e.lastActiveTime.localeCompare(t.lastActiveTime)}];return i.jsx(y,{columns:c,data:l,keyExtractor:e=>e.id,searchable:!0,renderTitle:p})}export{V as default};