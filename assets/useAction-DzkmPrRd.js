import{aK as E,aM as l,bs as H,aD as B}from"./index-CYlZutVr.js";import{u as F,j as v,t as y}from"./MyApp-BJ45vRcB.js";import{M as $}from"./index-CBQ2cMVY.js";function N(){const{ti:g}=E(),{message:e,notification:m}=F(),[x,C]=$.useModal();async function b({data:n,key:i,actionFn:s,loadingText:p,successText:h,successDesc:a,successDescItem:u,waitTime:o=[2e3,5e3],requireVIP:d=!0,confirmProps:c}){if(c&&!await x.confirm(c)||d&&!await v()||!(n!=null&&n.length))return;const r=i+":waiting";y(i);let w=!1,f=[];for(let t=0;t<n.length&&(e.destroy(r),e.loading({key:i,content:l.jsxs(l.Fragment,{children:[p(n[t],t,n)+" ("+(t+1)+"/"+n.length+")",l.jsx("br",{}),l.jsx("i",{children:g({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{e.loading({key:i,content:g({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),w=!0}}),await s(n[t])&&f.push(n[t]),!w);t++)if(o&&t<n.length-1){const A=H(o[0]||o,o[1]||o);await B(A,M=>{e.loading({key:r,content:g({en:"Sleeping "+Math.round(M/1e3)+"s",vi:"Đang đợi "+Math.round(M/1e3)+"s"}),duration:0})})}e.destroy(i),e.destroy(r),m.open({type:"success",duration:0,message:h(f,n)+` (${f.length} / ${n.length})`,description:u?l.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:f.map((t,j)=>l.jsx("li",{children:u(t)},j))}):a==null?void 0:a(f,n)})}async function k({key:n,id:i,record:s,loadingText:p,successText:h,failedText:a,actionFn:u,onSuccess:o,requireVIP:d=!1,confirmProps:c}){if(c&&!await x.confirm(c)||d&&!await v())return!1;y(n),n+=":"+i;try{if(e.loading({key:n,content:p(s),duration:0}),await u(s))return o==null||o(),e.success({key:n,content:h(s)}),!0;throw new Error("Facebook response error")}catch(r){return e.destroy(n),m.open({type:"error",message:a(s),description:r.message}),!1}finally{}}return{onClickBulkActions:b,onClickAction:k,confirmContextHolder:C}}export{N as u};