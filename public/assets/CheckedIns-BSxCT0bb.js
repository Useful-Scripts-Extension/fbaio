import{au as E,aE as A,r as S,aw as l,ay as b,aQ as F}from"./index-BDuAyY7p.js";import{C as B,D as L,E as R,u as M,e as Q,x as g,t as q,S as P,T as D,o as T}from"./MyApp-IVuV4tYN.js";import{u as O}from"./useForceStop-BbpF6gg6.js";import X from"./MyTable-DO2jTsJR.js";import{E as $}from"./ExportButton-BQFS2bq2.js";import{I as z}from"./index-DASk05sz.js";import{T as G}from"./index-B6ep-NY_.js";import{A as H}from"./index-CmmUrPFu.js";import"./index-D4hXkhfU.js";import"./Table-BvkzWNjS.js";import"./addEventListener-DgnPC-gQ.js";import"./index-BCAC29t7.js";import"./PurePanel-BhwhYMVY.js";import"./SearchOutlined-DLhMBbds.js";import"./index-BgI4Bc9V.js";import"./index-CSmxcSph.js";import"./Dropdown-CPWr9Aco.js";import"./useBreakpoint-D9Zu1g-j.js";import"./responsiveObserver-CmfHgHEV.js";import"./Pagination-D5d86IYn.js";import"./index-CVsG0Anm.js";import"./EyeOutlined-Vc6hqBQj.js";import"./row-NbiyGNWy.js";import"./file-download-EkbByG41.js";async function J({uid:n="",cursor:s=""}){const I=await B({fb_api_req_friendly_name:"ProfileCometAppCollectionListRendererPaginationQuery",variables:{cursor:s,count:8,scale:2,search:null,id:btoa("app_collection:"+n+":302324425790:103")},doc_id:"25969811035995761"}),C=L(I),{edges:_=[],page_info:p={}}=R(C);return _.map(i=>{var c,m,d,u,k,y,j,a,e,o,r,h,N,x,f,t,v,w;return{id:(c=i==null?void 0:i.node)==null?void 0:c.id,pageId:(d=(m=i==null?void 0:i.node)==null?void 0:m.node)==null?void 0:d.id,pageName:(k=(u=i==null?void 0:i.node)==null?void 0:u.title)==null?void 0:k.text,place:(e=(a=(j=(y=i==null?void 0:i.node)==null?void 0:y.subtitle_text)==null?void 0:j.text)==null?void 0:a.split(`
`))==null?void 0:e[0],image:(r=(o=i==null?void 0:i.node)==null?void 0:o.image)==null?void 0:r.uri,url:((h=i==null?void 0:i.node)==null?void 0:h.url)||((x=(N=i==null?void 0:i.node)==null?void 0:N.node)==null?void 0:x.url),timeString:(w=(v=(t=(f=i==null?void 0:i.node)==null?void 0:f.subtitle_text)==null?void 0:t.text)==null?void 0:v.split(`
`))==null?void 0:w[1],cursor:(i==null?void 0:i.cursor)||(p==null?void 0:p.end_cursor)}})}function ye({target:n}){const{ti:s}=M(),{message:I}=E.useApp(),C=A(),_=O(),[p,i]=S.useState(!1),[c,m]=Q("CheckedIns.data."+(n==null?void 0:n.id),[]),d=S.useMemo(()=>{const a=new Map,e=new Map;return c.forEach(o=>{a.has(o.place)||a.set(o.place,o),e.has(o.pageId)||e.set(o.pageId,o)}),{allPlaces:Array.from(a.values()),allPages:Array.from(e.values())}},[c]);S.useEffect(()=>{var a;n!=null&&n.id&&u(!((a=g("CheckedIns.data."+(n==null?void 0:n.id)))!=null&&a.length))},[n==null?void 0:n.id]);const u=async(a=!1)=>{var x,f;if(!(n!=null&&n.id))return;const e=_.start();let r=[...a?[]:g("CheckedIns.data."+(n==null?void 0:n.id))||[]],h=((x=r[r.length-1])==null?void 0:x.cursor)||"";q("CheckedIns:onReload"),i(!0);try{for(;!e.value();){const t=await J({uid:n.id,cursor:h});if(!(t!=null&&t.length))break;h=(f=t[t.length-1])==null?void 0:f.cursor,r=[...r,...t].map((v,w)=>({...v,recent:w})),m(r)}}catch(t){I.error({content:s({en:"Error: ",vi:"Lỗi: "})+t.message})}finally{m(r),i(!1)}},k=a=>{C("/bulk-downloader",{state:{targetId:a,platform:F.Facebook}})},y=a=>l.jsxs(P,{children:[l.jsx(b,{disabled:p,type:"primary",icon:p?l.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):l.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>u(!0),children:s({en:"Reload",vi:"Tải lại"})}),l.jsx($,{data:a.length?a:c,options:[{key:"id",label:".txt (page id)",prepareData:e=>({fileName:(n==null?void 0:n.name)+"_check_in_id.txt",data:e.map(o=>o.pageId).join(`
`)})},{key:"id_name",label:".csv (page id+name)",prepareData:e=>({fileName:(n==null?void 0:n.name)+"_check_in_id_name.csv",data:T(e.map(o=>({page:o.pageId,name:o.pageName,place:o.place})))})},{key:"json",label:".json",prepareData:e=>({fileName:(n==null?void 0:n.name)+"_check_in.json",data:JSON.stringify(e,null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:(n==null?void 0:n.name)+"_check_in.csv",data:T(e)})}]}),l.jsx(b,{onClick:()=>{var e;(e=n==null?void 0:n.url)!=null&&e.includes("?id=")?window.open((n==null?void 0:n.url)+"&sk=map","_blank"):window.open((n==null?void 0:n.url)+"/map","_blank")},icon:l.jsx("i",{className:"fa fa-external-link-alt"}),children:s({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb")]}),j=[{title:"#",dataIndex:"recent",key:"recent",render:(a,e,o)=>(e.recent||0)+1,sorter:(a,e)=>a.recent-e.recent,width:60},{title:s({en:"Cover",vi:"Ảnh"}),key:"cover",dataIndex:"image",render:(a,e,o)=>l.jsx(z,{src:e.image,style:{width:120,height:120,objectFit:"contain"}}),width:120},{title:d.allPages.length+" "+s({en:"Page",vi:"Trang"}),key:"name",dataIndex:"name",sorter:(a,e)=>a.pageName.localeCompare(e.pageName),render:(a,e,o)=>l.jsxs(P,{direction:"vertical",style:{maxWidth:250},children:[l.jsx(G.Link,{href:e.url,target:"_blank",children:l.jsx("b",{children:e.pageName})}),l.jsx("span",{style:{opacity:.6},children:e.pageId})]}),filters:d.allPages.map(a=>{let e=c.filter(o=>o.pageId===a.pageId).length;return{count:e,value:a.pageId,text:a.pageName+" ("+e+")"}}).sort((a,e)=>e.count-a.count),onFilter:(a,e)=>e.pageId==a,filterSearch:!0},{title:d.allPlaces.length+" "+s({en:"Place",vi:"Địa điểm"}),key:"place",dataIndex:"place",sorter:(a,e)=>a.place.localeCompare(e.place),filters:d.allPlaces.map(a=>{let e=c.filter(o=>o.place===a.place).length;return{count:e,value:a.place,text:a.place+" ("+e+")"}}).sort((a,e)=>e.count-a.count),onFilter:(a,e)=>e.place==a,filterSearch:!0,width:200},{title:s({en:"Time",vi:"Thời gian"}),key:"timeString",dataIndex:"timeString",sorter:(a,e)=>a.timeString.localeCompare(e.timeString),width:250},{title:s({en:"Actions",vi:"Hành động"}),key:"actions",render:(a,e,o)=>l.jsxs(P.Compact,{children:[l.jsx(D,{title:s({en:"Show map",vi:"Xem bản đồ"}),children:l.jsx(b,{type:"default",onClick:()=>{window.open("https://www.google.com/maps/search/"+e.pageName,"_blank")},icon:l.jsx("i",{className:"fa-solid fa-location-dot"})})}),l.jsx(D,{title:s({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:l.jsx(b,{type:"default",onClick:()=>k(e.pageId),icon:l.jsx("i",{className:"fa-solid fa-download"})})})]}),width:100,align:"end"}];return l.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[l.jsx(H,{type:"success",showIcon:!0,message:s({en:`Checked in ${c.length} times`,vi:`Đã check in ${c.length} lần`}),style:{alignSelf:"center",marginBottom:10}}),l.jsx(X,{columns:j,data:c,keyExtractor:a=>a==null?void 0:a.id,searchable:!0,pageSize:3,renderTitle:y})]})}export{ye as default};