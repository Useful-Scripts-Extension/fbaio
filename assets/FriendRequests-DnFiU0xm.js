import{r as P,ao as s,ap as k,aJ as O}from"./index-DB0Mkjis.js";import{x as F,y as L,a as J,b as H,c as b,t as w,S as I,e as V,f as $,C as W,T as N,q as z,z as K,g as X,D as Y}from"./MyApp-CjW7GEY5.js";import Z from"./MyTable-B8cTl8h3.js";import{u as ee}from"./useForceStop-CYpGe-JO.js";import{A as ne}from"./index-BewpFtsU.js";import{I as te}from"./index-UmZ1EKUw.js";import{T as ie}from"./index-BgADp518.js";import{R as se}from"./row-Cac2YIRH.js";import{T as re}from"./index-DMrau_ev.js";import{R as Q}from"./index-CbdPwEUh.js";import{P as D}from"./index-Sb7elTMG.js";import"./styleChecker-CuPMoUbD.js";import"./addEventListener-BrHl9dJj.js";import"./index-DVx-SK_v.js";import"./PurePanel-CcUiFl_l.js";import"./TextArea-v-1KDXbx.js";import"./index-DuGRWZXr.js";import"./index-BTfaKWHI.js";import"./index-9WeihvJ9.js";import"./Dropdown-BO63tnl_.js";import"./useBreakpoint-Dvx_U3SW.js";import"./responsiveObserver-C0EOcVrK.js";import"./Pagination-BuomFPJe.js";import"./index-D7A8h7bO.js";import"./index-CrnIiOd3.js";var d=(e=>(e.INCOMING_REQUEST="INCOMING_REQUEST",e.OUTGOING_REQUEST="OUTGOING_REQUEST",e.DECLINED="DECLINED",e.ACCEPTED="ACCEPTED",e.CANCELED="CANCELED",e))(d||{});async function ce(e=""){const a=await F({fb_api_req_friendly_name:"FriendingCometFriendRequestsSectionPanelPaginationQuery",variables:{count:20,cursor:e,scale:2},doc_id:"4843321999100134"}),l=JSON.parse(a),{edges:h=[],page_info:o={}}=L(l)||{};return h.map((t,q)=>{var f,C,T,R,_,v,p,x;return{recent:q,id:(f=t==null?void 0:t.node)==null?void 0:f.id,name:(C=t==null?void 0:t.node)==null?void 0:C.name,avatar:(R=(T=t==null?void 0:t.node)==null?void 0:T.profile_picture)==null?void 0:R.uri,url:(_=t==null?void 0:t.node)==null?void 0:_.url,desc:(p=(v=t==null?void 0:t.node)==null?void 0:v.social_context)==null?void 0:p.text,seen:t==null?void 0:t.is_seen,time:((t==null?void 0:t.time)||0)*1e3,type:(x=t==null?void 0:t.node)==null?void 0:x.friendship_status,cursor:t==null?void 0:t.cursor}})}async function ae(e=""){const a=await F({fb_api_req_friendly_name:"FriendingCometOutgoingRequestsDialogPaginationQuery",variables:{count:10,cursor:e,scale:2},doc_id:"4420916318007844"}),l=JSON.parse(a),{edges:h=[],page_info:o={}}=L(l)||{};return h.map((t,q)=>{var f,C,T,R,_,v,p,x;return{recent:q,id:(f=t==null?void 0:t.node)==null?void 0:f.id,name:(C=t==null?void 0:t.node)==null?void 0:C.name,avatar:(R=(T=t==null?void 0:t.node)==null?void 0:T.profile_picture)==null?void 0:R.uri,url:(_=t==null?void 0:t.node)==null?void 0:_.url,desc:(p=(v=t==null?void 0:t.node)==null?void 0:v.social_context)==null?void 0:p.text,seen:t==null?void 0:t.is_seen,time:((t==null?void 0:t.time)||0)*1e3,type:(x=t==null?void 0:t.node)==null?void 0:x.friendship_status,cursor:t==null?void 0:t.cursor}})}async function oe(e=""){var h,o,t;const a=await F({variables:{input:{friend_requester_id:e,source:"friends_tab",actor_id:"me"},scale:2,refresh_num:0},doc_id:"4189738374386264"}),l=JSON.parse(a);return((t=(o=(h=l==null?void 0:l.data)==null?void 0:h.friend_request_delete)==null?void 0:o.friend_requester)==null?void 0:t.id)==e}async function le(e=""){var h,o,t;const a=await F({variables:{input:{friend_requester_id:e,source:"friends_tab",actor_id:"me"},scale:2,refresh_num:0},doc_id:"3750307704981867"}),l=JSON.parse(a);return((t=(o=(h=l==null?void 0:l.data)==null?void 0:h.friend_request_accept)==null?void 0:o.friend_requester)==null?void 0:t.id)==e}async function de(e=""){var h,o,t;const a=await F({fb_api_req_friendly_name:"FriendingCometFriendRequestCancelMutation",variables:{input:{attribution_id_v2:"FriendingCometFriendRequestsRoot.react,comet.friending.friendrequests,unexpected,1724509964587,135627,2356318349,,;FriendingCometRoot.react,comet.friending,tap_bookmark,1724509961317,200700,2356318349,,",cancelled_friend_requestee_id:e,friending_channel:"MANAGE_OUTGOING_REQUESTS",actor_id:"me"},scale:2},doc_id:"5247084515315799"}),l=JSON.parse(a);return((t=(o=(h=l==null?void 0:l.data)==null?void 0:h.friend_request_cancel)==null?void 0:o.cancelled_friend_requestee)==null?void 0:t.id)==e}const j={[d.INCOMING_REQUEST]:{vi:"Đã nhận",en:"Incoming",color:"default",icon:"fa-solid fa-arrow-turn-down"},[d.OUTGOING_REQUEST]:{vi:"Đã gửi",en:"Outgoing",color:"default",icon:"fa-solid fa-arrow-turn-up"},[d.DECLINED]:{vi:"Đã từ chối",en:"Declined",color:"error",icon:"fa-solid fa-xmark"},[d.ACCEPTED]:{vi:"Đã chấp nhận",en:"Accepted",color:"success",icon:"fa-solid fa-check"},[d.CANCELED]:{vi:"Đã huỷ",en:"Canceled",color:"error",icon:"fa-solid fa-xmark"}};function Ue(){const{ti:e}=J(),{message:a,notification:l}=H(),h=ee(),[o,t]=b("FriendRequestType",d.INCOMING_REQUEST),[q,f]=b("FriendRequests."+o+".data",[]),[C,T]=b("FriendRequests."+o+".finished",!1),[R,_]=b("FriendRequests."+o+".loading",!1);P.useEffect(()=>{C||v(!1)},[o,C]);const v=async(i=!1)=>{var u;const n=i?[]:q,r=h.start(),c=`FriendRequests:${o}:onReload`;w(c),_(!0),T(!1);try{const m=n[n.length-1];let y=i?"":m==null?void 0:m.cursor;const E=o===d.INCOMING_REQUEST?ce:ae;for(;!r.value();){a.loading({key:c,content:e({en:`Loading ${j[o].en} friend requests...`,vi:`Đang tải yêu cầu kết bạn ${j[o].vi}...`})+n.length,duration:0});const g=await E(y);if(!(g!=null&&g.length))break;n.push(...g),y=(u=n==null?void 0:n[(n==null?void 0:n.length)-1])==null?void 0:u.cursor,f([...n])}console.log(n),T(!r.value()),a.success({key:c,content:e({en:"Loaded friend requests ",vi:"Tải xong yêu cầu kết bạn "})+n.length})}catch(m){a.error({content:e({en:"Failed to load friend requests: ",vi:"Lỗi tải yêu cầu kết bạn: "})+m.message})}finally{_(!1)}},p=async({data:i,key:n,actionFn:r,loadingText:c,successText:u})=>{if(!(i!=null&&i.length))return;const m=n+":waiting";w(n);let y=!1,E=[];for(let g=0;g<i.length&&(a.destroy(m),a.loading({key:n,content:s.jsxs(s.Fragment,{children:[c+(g+1)+"/"+i.length,s.jsx("br",{}),s.jsx("i",{children:e({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{a.loading({key:n,content:e({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),y=!0}}),await r(i[g])&&E.push(i[g]),!y);g++)if(g<i.length-1){const S=Y(2e3,5e3);a.loading({key:m,content:e({en:"Sleeping "+Math.round(S/1e3)+"s",vi:"Đang đợi "+Math.round(S/1e3)+"s"}),duration:0}),await K(S)}a.destroy(n),a.destroy(m),l.open({type:"success",duration:0,message:u+`${E.length}/${i.length}`,description:s.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:E.map(g=>s.jsx("li",{children:s.jsx("a",{target:"_blank",href:X(g.id),children:g.name})},g.id))})})},x=async({key:i,record:n,loadingText:r,successText:c,failedText:u,action:m,onSuccess:y})=>{w(i);try{if(a.loading({key:i,content:r+n.name,duration:0}),await m())return y==null||y(),a.success({key:i,content:c+n.name}),!0;throw new Error("Facebook response error")}catch(E){return a.destroy(i),l.open({type:"error",message:u+n.name,description:E.message}),!1}finally{}},A=i=>x({key:"FriendRequests:onClickDeclineFriendRequest",record:i,loadingText:e({en:"Declining friend request...",vi:"Đang từ chối yêu cầu kết bạn..."}),successText:e({en:"Declined friend request ",vi:"Từ chối yêu cầu thành công "}),failedText:e({en:"Failed to decline friend request: ",vi:"Lỗi từ chối yêu cầu kết bạn: "}),action:()=>oe(i.id),onSuccess:()=>{f(n=>O(n,r=>{const c=r.findIndex(u=>u.id===i.id);return c>=0&&(r[c].type=d.DECLINED),r}))}}),U=i=>x({key:"FriendRequests:onClickAcceptFriendRequest",record:i,loadingText:e({en:"Accepting friend request...",vi:"Đang đồng ý yêu cầu kết bạn..."}),successText:e({en:"Accepted friend request ",vi:"Đã đồng ý yêu cầu kết bạn "}),failedText:e({en:"Failed to accept friend request: ",vi:"Lỗi đồng ý yêu cầu kết bạn: "}),action:()=>le(i.id),onSuccess:()=>{f(n=>O(n,r=>{const c=r.findIndex(u=>u.id===i.id);return c>=0&&(r[c].type=d.ACCEPTED),r}))}}),G=i=>x({key:"FriendRequests:onClickCancelOutgoingRequest",record:i,loadingText:e({en:"Canceling friend request...",vi:"Đang thu hồi yêu cầu kết bạn..."}),successText:e({en:"canceled friend request ",vi:"Đã thu hồi yêu cầu kết bạn "}),failedText:e({en:"Failed to cancel friend request: ",vi:"Lỗi thu hồi yêu cầu kết bạn: "}),action:()=>de(i.id),onSuccess:()=>{f(n=>O(n,r=>{const c=r.findIndex(u=>u.id===i.id);return c>=0&&(r[c].type=d.CANCELED),r}))}}),M=i=>{const n=i!=null&&i.length?[...i]:[...q],r=n.filter(u=>u.type===d.INCOMING_REQUEST),c=n.filter(u=>u.type===d.OUTGOING_REQUEST);return s.jsxs(s.Fragment,{children:[s.jsx(k,{type:"primary",icon:R?s.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):s.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>v(!0),children:e({en:"Reload",vi:"Tải lại"})}),o===d.INCOMING_REQUEST?s.jsxs(I.Compact,{children:[s.jsx(N,{title:e({en:`Accept ${r.length} selected incoming requests`,vi:`Đồng ý ${r.length} lời mời đang chọn`}),children:s.jsx(D,{title:e({en:`Accept ${r.length} selected incoming requests`,vi:`Đồng ý ${r.length} lời mời đang chọn`}),description:e({en:`Are your sure want to accept ${r.length} incoming requests?`,vi:`Bản có chãc muốn đồng ý ${r.length} lời mời?`}),onConfirm:()=>p({data:r,key:"FriendRequests:onClickAcceptSelectedIncomingFriendRequests",actionFn:U,loadingText:e({en:"Accepting incoming requests...",vi:"Đang đồng ý lời mời..."}),successText:e({en:"Accepted incoming requests done: ",vi:"Đồng ý lời mời xong: "})}),okText:e({en:"Accept",vi:"Đồng ý"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(k,{disabled:r.length<=0,icon:s.jsx("i",{className:"fa-solid fa-check"}),children:r.length})})}),s.jsx(N,{title:e({en:`Decline ${r.length} selected incoming requests`,vi:`Từ chối ${r.length} lời mời đang chọn`}),children:s.jsx(D,{title:e({en:`Decline ${r.length} selected incoming requests`,vi:`Từ chối ${r.length} lời mời đang chọn`}),description:e({en:`Are your sure want to decline ${r.length} incoming requests?`,vi:`Bản có chãc muốn từ chối ${r.length} lời mời?`}),onConfirm:()=>p({data:r,key:"FriendRequests:onClickDeclineSelectedIncomingFriendRequests",actionFn:A,loadingText:e({en:"Declining incoming requests...",vi:"Đang từ chối lời mời..."}),successText:e({en:"Declined incoming requests done: ",vi:"Từ chối lời mời xong: "})}),okText:e({en:"Decline",vi:"Từ chối"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(k,{danger:!0,disabled:r.length<=0,icon:s.jsx("i",{className:"fa-regular fa-trash-can"}),children:r.length})})})]}):s.jsx(s.Fragment,{children:s.jsx(N,{title:e({en:`Cancel ${c.length} selected outgoing requests`,vi:`Thu hồi ${c.length} yêu cầu đang chọn`}),children:s.jsx(D,{title:e({en:`Cancel ${c.length} selected outgoing requests`,vi:`Thu hồi ${c.length} yêu cầu đang chọn`}),description:e({en:`Are your sure want to cancel ${c.length} outgoing requests?`,vi:`Bản có chãc muốn thu hồi ${c.length} yêu cầu?`}),onConfirm:()=>p({data:c,key:"FriendRequests:onClickCancelSelectedOutgoingFriendRequests",actionFn:G,loadingText:e({en:"Canceling outgoing requests...",vi:"Đang thu hồi yêu cầu..."}),successText:e({en:"Declined requests done: ",vi:"Thu hồi yêu cầu xong: "})}),okText:e({en:"Cancel",vi:"Thu hồi"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(k,{danger:!0,disabled:c.length<=0,icon:s.jsx("i",{className:"fa-regular fa-trash-can"}),children:c.length})})})}),s.jsx(N,{title:e({en:"View on Facebook",vi:"Xem trên Facebook"}),children:s.jsx(k,{icon:s.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/friends/requests","_blank")})})]})},B=[{title:"#",key:"recent",dataIndex:"recent",render:(i,n,r)=>n.recent+1,sorter:(i,n)=>i.recent-n.recent,width:50},{title:e({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(i,n)=>(i.name||"").localeCompare(n.name||""),render:(i,n,r)=>s.jsxs(I,{align:"center",style:{maxWidth:300},children:[s.jsx(ne,{shape:"square",src:s.jsx(te,{src:V(n.id),fallback:n.avatar}),size:50}),s.jsx("a",{href:n.url,target:"_blank",style:{marginLeft:"10px"},children:s.jsx("b",{children:n.name})})]})},{title:e({en:"Description",vi:"Mô tả"}),key:"desc",dataIndex:"desc",sorter:(i,n)=>(i.desc||"").localeCompare(n.desc||""),render:(i,n,r)=>s.jsx("p",{style:{maxWidth:150,minWidth:100},children:n.desc}),width:"auto"},{title:e({en:"Time",vi:"Thời gian"}),key:"time",dataIndex:"time",sorter:(i,n)=>i.time-n.time,render:(i,n,r)=>$(n.time,e({en:"en-US",vi:"vi-VN"}))||"-",onSearch:(i,n)=>W(i,$(n,e({en:"en-US",vi:"vi-VN"}))),align:"right",width:180},{title:e({en:"Status",vi:"Trạng thái"}),key:"type",dataIndex:"type",filters:Object.entries(j).map(([i,n])=>{const r=q.filter(c=>c.type===i).length;return{text:e(n)+` (${r})`,value:i}}),onFilter:(i,n)=>n.type===i,render:(i,n,r)=>{const c=j[n.type];return s.jsx(ie,{color:c.color,children:e(c)})},align:"right"},{title:e({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(i,n,r)=>n.type===d.INCOMING_REQUEST?s.jsxs(I.Compact,{children:[s.jsx(N,{title:e({en:"Accept",vi:"Đồng ý"}),children:s.jsx(k,{onClick:()=>U(n),icon:s.jsx("i",{className:"fa-solid fa-check"})})}),s.jsx(N,{title:e({en:"Decline",vi:"Từ chối"}),children:s.jsx(k,{danger:!0,onClick:()=>A(n),icon:s.jsx("i",{className:"fa-solid fa-trash-can"})})})]}):n.type===d.OUTGOING_REQUEST?s.jsx(I.Compact,{children:s.jsx(N,{title:e({en:"Cancel",vi:"Thu hồi"}),children:s.jsx(k,{danger:!0,onClick:()=>G(n),icon:s.jsx("i",{className:"fa-solid fa-trash-can"})})})}):null,align:"right",width:100}];return s.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[s.jsx(se,{align:"middle",style:{margin:"16px"},children:s.jsx(re.Title,{level:3,style:{margin:0},children:e({en:"Friend Requests",vi:"Lời mời kết bạn"})})}),s.jsx(Q.Group,{defaultValue:o,buttonStyle:"solid",style:{marginBottom:10},children:[d.INCOMING_REQUEST,d.OUTGOING_REQUEST].map(i=>{var n,r;return s.jsxs(Q.Button,{value:i,onClick:()=>{t(i)},children:[s.jsx("i",{className:j[i].icon})," ",`${e(j[i])} ${(r=(n=z("FriendRequests."+i+".data",[]))==null?void 0:n.filter(c=>c.type===i))==null?void 0:r.length}`]},i)})}),s.jsx(Z,{data:q,columns:B,renderTitle:M,size:"small",searchable:!0,selectable:!0,keyExtractor:i=>i.id})]})}export{Ue as default};