import{r as o,ap as i,aq as x}from"./index-0Hfk5MSk.js";import{u as f}from"./useForceStop-Dvf0M63c.js";import{u as h,e as j}from"./MyApp-DTETyBe6.js";import y from"./MyTable-DJrh2_dY.js";import{b as T}from"./groups-mvpR9OK1.js";import{R as b}from"./row-3XdnsCGd.js";import{A as v}from"./index-DW0fsHWP.js";import{I as A}from"./index-2O_IWflz.js";import{A as C}from"./index--8D5sjlR.js";import"./Table-DR6HpmuC.js";import"./TextArea-CXV8JlWF.js";import"./addEventListener-Kn4HSJDj.js";import"./index-B-KW5qe7.js";import"./PurePanel-CGRBYuiW.js";import"./index-JimT2myi.js";import"./index-Dj5V5m4q.js";import"./index-CWpWVvCJ.js";import"./Dropdown-Cnla9tw7.js";import"./index-BB6UVlLk.js";import"./useBreakpoint-ZZ7hYbru.js";import"./responsiveObserver-S6dSCmEt.js";import"./Pagination-DwpAiUYs.js";import"./index-FIK-C6O0.js";import"./index-CpWu6WTX.js";function V({target:a}){const{ti:s}=h();f();const[n,I]=o.useState(!1),[r,d]=o.useState(null),[m,k]=o.useState([]),l=o.useMemo(()=>m.map((e,t)=>({...e,recent:t})),[m]);o.useEffect(()=>{!(a!=null&&a.id)||!(a!=null&&a.type)||T(a==null?void 0:a.id).then(e=>{d(e)})},[a]);const p=e=>i.jsxs(i.Fragment,{children:[i.jsx(x,{type:"primary",icon:n?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:!0,children:s("Fetch all")}),i.jsx(C,{showIcon:!0,type:"info",message:`${r==null?void 0:r.adminCount} admins. ${j(r==null?void 0:r.memberCount)} members`})]}),c=[{title:"#",dataIndex:"recent",key:"recent",render:(e,t,u)=>(t.recent||0)+1},{title:s({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,t)=>e.name.localeCompare(t.name),render:(e,t,u)=>i.jsxs(b,{align:"middle",children:[i.jsx(v,{shape:"square",src:i.jsx(A,{src:t.avatar}),size:50}),i.jsx("a",{href:t.url,target:"_blank",style:{marginLeft:"10px"},children:i.jsx("b",{children:t.name})})]}),width:"auto"},{title:"Uid",dataIndex:"id",key:"id",sorter:(e,t)=>e.id.localeCompare(t.id),width:150},{title:s({en:"Joined time",vi:"Tham gia lúc"}),dataIndex:"joinedTime",key:"joinedTime",sorter:(e,t)=>e.joinedTime.localeCompare(t.joinedTime)},{title:s({en:"Last Active",vi:"Hoạt động gần nhất"}),dataIndex:"lastActiveTime",key:"lastActiveTime",sorter:(e,t)=>e.lastActiveTime.localeCompare(t.lastActiveTime)}];return i.jsx(y,{columns:c,data:l,keyExtractor:e=>e.id,searchable:!0,renderTitle:p})}export{V as default};