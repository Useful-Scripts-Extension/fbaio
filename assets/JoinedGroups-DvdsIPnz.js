import{at as I,aG as E,r as y,av as o,aw as j,aR as J}from"./index-Dtcmp6JY.js";import{u as S,d as B,w as v,b as l,e as G,T as A,o as b}from"./MyApp-kb2kLbdm.js";import{u as L}from"./useForceStop-CVAJJE1m.js";import R from"./MyTable-BrAu-JA5.js";import{E as F}from"./ExportButton-B825X9bx.js";import{c as M}from"./groups-CKR8iJkq.js";import{I as O}from"./index-DpAHl3Pf.js";import{A as W}from"./index-DqdNzZ8h.js";import"./index-C9OcZAjD.js";import"./Table-CjghKRll.js";import"./index-2mBF6Cjd.js";import"./addEventListener-DKefG3W_.js";import"./index-Dk3A3vwr.js";import"./PurePanel-DOe6UZy0.js";import"./index-BBtJNEHe.js";import"./index-BXlTncM9.js";import"./index-DNTQT7gA.js";import"./Dropdown-CC556hNY.js";import"./index-C28OU1dQ.js";import"./useBreakpoint-tPbU-N1e.js";import"./Pagination-Bvmy2umP.js";import"./index-DZsyOE7S.js";import"./row-DazFjwcO.js";import"./file-download-D0pOs_wu.js";function me({target:e}){const{ti:a}=S(),{message:c}=I.useApp(),k=E(),w=L(),[m,p]=y.useState(!1),[d,u]=B("JoinedGroups.data."+(e==null?void 0:e.id),[]);y.useEffect(()=>{var i;e!=null&&e.id&&h(!((i=v("JoinedGroups.data."+(e==null?void 0:e.id)))!=null&&i.length))},[e==null?void 0:e.id]);const h=async(i=!1)=>{var f;if(!(e!=null&&e.id))return;const n=w.start();let t=[...i?[]:v("JoinedGroups.data."+(e==null?void 0:e.id))||[]],x=((f=t[t.length-1])==null?void 0:f.cursor)||"";p(!0);try{for(;!n.value();){const r=await M({uid:e.id,cursor:x});if(!(r!=null&&r.length))break;x=r[r.length-1].cursor,t=[...t,...r].map((D,T)=>({...D,recent:T})),u(t)}c.success({content:a({en:"Load groups success ",vi:"Tải nhóm xong "})+t.length})}catch(r){c.error({content:a({en:"Error: ",vi:"Lỗi: "})+r.message})}finally{u(t),p(!1)}},C=i=>{k("/bulk-downloader",{state:{targetId:i,platform:J.Facebook}})},_=i=>o.jsxs(l,{children:[o.jsx(j,{disabled:m,type:"primary",icon:m?o.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):o.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>h(!0),children:a({en:"Reload",vi:"Tải lại"})}),o.jsx(F,{data:i.length?i:d,options:[{key:"uid",label:".txt (groups id)",prepareData:n=>({fileName:(e==null?void 0:e.name)+"_joined_groups_id.txt",data:n.map(s=>s.id).join(`
`)})},{key:"id_name",label:".csv (group id+name)",prepareData:n=>({fileName:(e==null?void 0:e.name)+"_joined_groups_id_name.csv",data:b(n.map(s=>({uid:s.id,name:s.name})))})},{key:"json",label:".json",prepareData:n=>({fileName:(e==null?void 0:e.name)+"_joined_groups.json",data:JSON.stringify(n,null,4)})},{key:"csv",label:".csv",prepareData:n=>({fileName:(e==null?void 0:e.name)+"_joined_groups.csv",data:b(n)})}]})]}),N=[{title:"#",dataIndex:"recent",key:"recent",render:(i,n,s)=>(n.recent||0)+1,sorter:(i,n)=>i.recent-n.recent,width:60},{title:a({en:"Cover",vi:"Ảnh"}),key:"cover",dataIndex:"image",render:(i,n,s)=>o.jsx(O,{src:n.image,style:{width:150,height:100,objectFit:"contain"}}),width:150},{title:a({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(i,n)=>i.name.localeCompare(n.name),render:(i,n,s)=>o.jsxs(l,{direction:"vertical",style:{maxWidth:250},children:[o.jsx("a",{href:n.url,target:"_blank",children:o.jsx("b",{children:n.name})}),o.jsx("span",{style:{opacity:.7},children:n.id})]})},{title:a({en:"Description",vi:"Mô tả"}),key:"description",dataIndex:"description",render:(i,n,s)=>o.jsx("p",{style:{width:250},children:i}),sorter:(i,n)=>(i.description||"").localeCompare(n.description||"")},{title:a({en:"Members",vi:"Thành viên"}),key:"membersCount",dataIndex:"membersCount",sorter:(i,n)=>i.membersCount-n.membersCount,render:(i,n,s)=>G(i),align:"end",width:120},{title:a({en:"Actions",vi:"Hành động"}),key:"actions",render:(i,n,s)=>o.jsx(l.Compact,{children:o.jsx(A,{title:a({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:o.jsx(j,{type:"default",onClick:()=>C(n.id),icon:o.jsx("i",{className:"fa-solid fa-download"})})})}),width:100,align:"end"}];return o.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[o.jsx(W,{type:"success",showIcon:!0,message:a({en:`Joined ${d.length} public groups`,vi:`Đã tham gia ${d.length} nhóm công khai`}),style:{alignSelf:"center",marginBottom:10}}),o.jsx(R,{columns:N,data:d,keyExtractor:i=>i==null?void 0:i.id,searchable:!0,selectable:!0,pageSize:5,renderTitle:_})]})}export{me as default};