const __vite__fileDeps=["./MyTable-BrAu-JA5.js","./index-Dtcmp6JY.js","./index-CKPZ9v0x.css","./MyApp-kb2kLbdm.js","./index-C9OcZAjD.js","./Table-CjghKRll.js","./index-2mBF6Cjd.js","./addEventListener-DKefG3W_.js","./index-Dk3A3vwr.js","./PurePanel-DOe6UZy0.js","./index-BBtJNEHe.js","./index-BXlTncM9.js","./index-DNTQT7gA.js","./Dropdown-CC556hNY.js","./index-C28OU1dQ.js","./useBreakpoint-tPbU-N1e.js","./Pagination-Bvmy2umP.js","./index-DZsyOE7S.js","./row-DazFjwcO.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aG as X,aq as _,ar as S,r as k,av as t,aA as V,aw as p}from"./index-Dtcmp6JY.js";import{c as W,u as $,d as J,t as y,e as A,T as g,g as Q,b as j,h as Z,o as I,B as ee,i as F}from"./MyApp-kb2kLbdm.js";import{E as ne}from"./ExportButton-B825X9bx.js";import{g as te,a as ie,s as ae}from"./messages-DYwM8voP.js";import{f as se}from"./file-download-D0pOs_wu.js";import{d as oe}from"./dayjs.min-C189sLW6.js";import{R as L}from"./row-DazFjwcO.js";import{T as E}from"./index-p-mqvHcw.js";import{T as le}from"./index-2mBF6Cjd.js";import{D as re}from"./index-DNTQT7gA.js";import{A as f}from"./index-B-BpTNJ8.js";import{I as G}from"./index-DpAHl3Pf.js";import"./Dropdown-CC556hNY.js";import"./PurePanel-DOe6UZy0.js";import"./useBreakpoint-tPbU-N1e.js";import"./index-C2IP6V-E.js";import"./addEventListener-DKefG3W_.js";const ce=k.lazy(()=>V(()=>import("./MyTable-BrAu-JA5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url)),{Title:R}=le,U=l=>{const u=new Set;return l.map(i=>i.isGroup?i.participants.map(d=>({uid:d.id,name:d.name})):{uid:i.id,name:i.name}).flat().forEach(({uid:i,name:d})=>{u.has(i)||u.add({uid:i,name:d})}),Array.from(u.values())};function Ne(){const{message:l,notification:u}=W(),{ti:i}=$(),d=X(),m=_(S.profile)??{},[h,q]=J("AllMessages.data",[]),[w,C]=k.useState(!1);k.useEffect(()=>{h!=null&&h.length||b()},[]);const b=()=>{if(w)return;const e="AllMessages:onClickReload";y(e),l.loading({key:e,duration:0,content:i({en:"Fetching messages...",vi:"Đang tải tin nhắn"})}),C(!0),te().then(n=>{if(console.log(n),!(n!=null&&n.length))return l.error(i({en:"No data to show",vi:"Không có dữ liệu"}));q(n),l.success({key:e,content:i({en:"Fetch messages completed",vi:"Tải xong tin nhắn"})})}).catch(n=>{l.error({key:e,content:i({en:"Failed to fetch messages",vi:"Lỗi tải tin nhắn"})+": "+n.message}),console.log(n)}).finally(()=>{C(!1)})},B=e=>{console.log(e)},H=e=>()=>{var n,a,s,o;y("AllMessages:onClickFirstMessages"),d("/messages/first",{state:{threadId:e.id||((a=(n=e==null?void 0:e.participants)==null?void 0:n[0])==null?void 0:a.id),threadName:e.name||((o=(s=e==null?void 0:e.participants)==null?void 0:s[0])==null?void 0:o.name)}})},P=async e=>{if(!await F())return;y("AllMessages:onClickDownloadMultipleThreads");for(let a of e)if(await T(a))break},T=async e=>{if(!await F())return;const n="AllMessages:onClickDownloadThread";y(n);const a=e.name,s=n+e.id;l.loading({key:s,duration:0,content:i({en:"Downloading messages...",vi:"Đang tải tin nhắn..."})+a});let o=!1;const c=await ie({threadId:e.id,checkStopFn:()=>o,progressCallback:x=>{l.loading({key:s,duration:0,content:t.jsxs(t.Fragment,{children:[i({en:"Downloading messages... ",vi:"Đang tải tin nhắn... "})+a,t.jsx("br",{}),x.length,i({en:" messages",vi:" tin nhắn"}),t.jsx("br",{}),oe(x[0].time).format("YYYY-MM-DD HH:mm:ss"),t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{l.loading({key:s,duration:0,content:i({en:"Stopping...",vi:"Đang dừng..."})}),o=!0}})}});l.destroy(s),u.open({type:"success",duration:0,message:i(o?{en:"Download stopped: ",vi:"Đã dừng tải: "}:{en:"Download completed: ",vi:"Tải xong: "})+a,description:c.length+i({en:" messages",vi:" tin nhắn"})});const v=ae({threadId:e.id||"",threadName:a,myUid:(m==null?void 0:m.uid)||"",msgs:c});return se(v,a+".html"),o},z=(e,n,a)=>{var s,o,c,v,x,D,N,M;return t.jsxs(L,{align:"middle",children:[n.isGroup?t.jsx(re,{arrow:!0,overlayStyle:{maxHeight:"350px",overflow:"auto",border:"1px dashed gray",borderRadius:"5px"},menu:{items:[{key:"-1",type:"group",label:t.jsx(R,{level:5,style:{textAlign:"center"},children:i({en:`${(s=n.participants)==null?void 0:s.length} members`,vi:`${(o=n.participants)==null?void 0:o.length} thành viên`})})},{type:"divider"},...((v=(c=n.participants)==null?void 0:c.map)==null?void 0:v.call(c,r=>({key:r.id,label:t.jsx("b",{children:r.name}),icon:t.jsx(f,{shape:"square",src:r.avatar}),onClick:()=>window.open(Q(r.id))})))||[]]},children:t.jsx(j,{children:n.image?t.jsx(f,{shape:"square",size:40,src:t.jsx(G,{src:n.image})}):t.jsx(f.Group,{max:{count:5},children:n.participants.filter(r=>r.id!=(m==null?void 0:m.id)).map(r=>t.jsx(f,{src:r.avatar},r.id))})})}):t.jsx(f,{shape:"square",size:40,src:t.jsx(G,{src:n.image||Z((D=(x=n.participants)==null?void 0:x[0])==null?void 0:D.id),fallback:(M=(N=n.participants)==null?void 0:N[0])==null?void 0:M.avatar})}),t.jsx("a",{href:n.url,target:"_blank",style:{marginLeft:"10px"},children:t.jsx("b",{children:n.name})})]})},Y=(e,n,a)=>t.jsxs(j.Compact,{children:[t.jsx(g,{title:i({en:"First messages",vi:"Tin nhắn đầu tiên"}),children:t.jsx(p,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-clock-rotate-left"}),onClick:H(n)})}),t.jsx(g,{title:i({en:"Download messages",vi:"Tải cuộc trò chuyện"}),children:t.jsx(p,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>T(n)})}),t.jsx(g,{title:i({en:"Delete (Coming soon)",vi:"Xoá (Sắp có)"}),children:t.jsx(p,{danger:!0,disabled:!0,icon:t.jsx("i",{className:"fa-solid fa-trash"})})})]}),K=[{title:"#",key:"recent",dataIndex:"recent",sorter:(e,n)=>e.recent-n.recent,render:(e,n,a)=>n.recent+1,width:70,align:"center",headerAlign:"center"},{title:i({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(e,n)=>e.name.localeCompare(n.name),render:z,filters:[{text:i({en:"Inactive",vi:"Không hoạt động"}),value:"inactive"}],onFilter:(e,n)=>e=="inactive"?n.name=="-no data-"||n.name=="Người dùng Facebook":!0,onSearch:(e,n,a)=>{let s=e.toLowerCase();return a.name.toLocaleLowerCase().includes(s)||a.participants.some(o=>o.name.toLocaleLowerCase().includes(s))},width:"auto"},{title:"Id",dataIndex:"id",key:"id",sorter:(e,n)=>e.id>n.id,onSearch:(e,n,a)=>{let s=e.toLowerCase();return a.id.includes(s)||a.participants.some(o=>o.id.includes(s))},width:150},{title:i({en:"Messages",vi:"Tin nhắn"}),dataIndex:"count",key:"count",sorter:(e,n)=>e.count-n.count,render:(e,n,a)=>A(n.count),width:100,align:"right"},{title:i({en:"Members",vi:"Nguời"}),dataIndex:"participants",key:"participants",sorter:(e,n)=>e.participants.length-n.participants.length,render:(e,n,a)=>A(n.participants.length),width:100,align:"right"},{title:i({en:"Type",vi:"Loại"}),dataIndex:"type",key:"type",render:(e,n,a)=>n.isGroup?i({en:"Group",vi:"Nhóm"}):i({en:"Personal",vi:"Cá nhân"}),filters:[{text:i({en:"Group",vi:"Nhóm"}),value:!0},{text:i({en:"Personal",vi:"Cá nhân"}),value:!1}],onFilter:(e,n)=>n.isGroup==e,width:100,align:"right"},{title:i({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:Y,width:150,align:"right"}],O=e=>t.jsxs(t.Fragment,{children:[t.jsx(p,{type:"primary",icon:w?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:b,children:i({en:"Reload",vi:"Tải lại"})}),t.jsx(ne,{data:e.length?e:h,options:[{key:"uid",label:".txt (uid)",prepareData:n=>({fileName:"messages_uid.txt",data:U(n).map(a=>a.uid).join(`
`)})},{key:"uid_name",label:".csv (uid+name)",prepareData:n=>({fileName:"messages_uid_name.csv",data:I(U(n))})},{key:"json",label:".json",prepareData:n=>({fileName:"messages.json",data:JSON.stringify(n,null,2)})},{key:"csv",label:".csv",prepareData:n=>({fileName:"messages.csv",data:I(n.map(a=>({...a,participants:a.participants.map(s=>s.name).join(", "),participantIds:a.participants.map(s=>s.id).join(", ")})))})}]}),t.jsxs(j.Compact,{children:[t.jsx(g,{title:i({en:"Delete selected (Coming soon)",vi:"Xoá lựa chọn (Sắp có)"}),children:t.jsx(p,{danger:!0,disabled:!0,icon:t.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>B(e),children:i({en:"Delete",vi:"Xoá"})+(e.length?" "+e.length:"")})}),t.jsx(ee,{color:"purple",style:{color:"white"},count:i({en:"New",vi:"Mới"}),children:t.jsx(g,{title:e.length?i({en:"Download "+e.length+" messages",vi:"Tải "+e.length+" cuộc trò chuyện"}):i({en:"Select messages to download",vi:"Chọn cuộc trò chuyện để tải"}),children:t.jsxs(p,{disabled:!(e!=null&&e.length),icon:t.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>P(e),children:[i({en:"Download ",vi:"Tải "})," ",e.length||""]})})})]})]});return t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[t.jsxs(L,{align:"middle",style:{margin:"16px"},children:[t.jsx(R,{level:3,style:{margin:0},children:i({en:"Messages manager",vi:"Quản lý tin nhắn"})}),t.jsx(E,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:h.length}),t.jsx(g,{title:i({en:'Can only view messages that not have "End to end encryption" (e2ee)',vi:'Chỉ có thể xem tin nhắn không bị "Mã hoá đầu cuối" (e2ee)'}),children:t.jsx(E,{color:"orange",icon:t.jsx("i",{className:"fa-solid fa-lock-open"}),children:" "+i({en:"Only none e2ee",vi:"Không bị mã hoá đầu cuối"})})})]}),t.jsx(ce,{data:h,columns:K,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e==null?void 0:e.id,style:{flex:1,maxHeight:"100%"},renderTitle:O})]})}export{Ne as default};