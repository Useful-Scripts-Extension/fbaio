import{r as y,aJ as We,ci as je,aL as t,aN as $,cj as qe,ck as ze,cl as Je,cm as Ge,cn as Xe}from"./index-C9a7kOyS.js";import{a as Oe,b as Qe}from"./index-1LBg6_PE.js";import{f as Ye}from"./file-download-DAQ-WD33.js";import{u as Ze,e as S,t as be,l as Ue,S as H,b as ke,a2 as Ke,j as Y,k as Ne}from"./MyApp-eLgOszab.js";import{D as et}from"./index-BYTpD0UZ.js";import{C as tt}from"./index-C9gPXY7f.js";import{I as nt}from"./index-DmxoYqZk.js";import{L as it}from"./index-CuV0lcJx.js";import{D as ot}from"./index-Ch8MZEP_.js";function st(o,Z,L){const[w,j]=y.useState(!1);function I({key:b}){b===o&&j(!0)}function R({key:b}){b===o&&(j(!1),L==null||L())}return y.useEffect(()=>(window.addEventListener("keydown",I),window.addEventListener("keyup",R),()=>{window.removeEventListener("keydown",I),window.removeEventListener("keyup",R)}),[]),w}var De=(o=>(o.File="file",o.Link="link",o.JSON="json",o))(De||{}),lt=(o=>(o.Grid="grid",o.Vertical="vertical",o))(lt||{});function xt({collectionName:o,renderItem:Z,fetchNext:L,rowKey:w,downloadItem:j,getItemCursor:I,initialData:R=[],downloadThreads:b=5,downloadOptions:V=[],displayType:Ce="grid",headerButtons:U=()=>null,header:K=()=>null,once:$e=!1,all:Se=!1,stop:Le=!1,showPagination:le=!1,pageSize:Ie=20,searchPlaceholder:Ee=()=>({en:"Search",vi:"Tìm kiếm"}),onSearch:W}){const{ti:e}=We(),{message:m,notification:q}=Ze(),{isIntersecting:Pe,ref:Be}=Oe(),[z,ae]=y.useState(!1),[Me,re]=S(`Collection.${o}.hasMore`,!0),[r,B]=S(`Collection.${o}.data`,R),[de,_e]=S(`Collection.${o}.pageIndex`,1),[M,Ae]=S(`Collection.${o}.search`,""),[l,_]=S(`Collection.${o}.selected`,[]),[f,ce]=S(`Collection.${o}.selectMode`,!1),[Te,Fe]=S(`Collection.${o}.downloaded`,{});st("Shift",void 0,()=>{j&&ce(n=>!n)});const He=y.useMemo(()=>!M||!W?r:r.filter(n=>W(M,n)),[r,M,W]);y.useEffect(()=>{let n=r.length,i=Math.ceil(n/20);de>i&&_e(i)},[r,de]),y.useEffect(()=>{r.length||fe(!1)},[o]);const J=(!r.length||Pe||Se)&&Me&&!M&&!Le;Qe(()=>{J&&ee()},1e3),y.useEffect(()=>{J&&ee()},[J]);const fe=(n=!1)=>{n&&be("Collection:reload");const i=n?[]:Ue("Collection.data."+o)||[];B(i),_([]),ee(i)},N=y.useRef(!1),ee=async(n=r)=>{if(N.current)return;N.current=!0,ae(!0);const i=await L(n);console.log(o,i);let s=!1;if(i!=null&&i.length){const h=je(n,i,w);if(re(!$e&&h.length>0),h.length){const g=[...n,...h];B(g),s=!0}}else(i==null?void 0:i.length)===0&&re(!1);!s&&!n.length&&m.info(e({en:"No data found",vi:"Không có dữ liệu"})+": "+o),N.current=!1,ae(!1)},Re=(n,i)=>{const s=l.indexOf(n),h=s>=0,g=Te[w(n)],A={position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",background:h||g?"#000a":"#0002"};return t.jsxs("div",{style:{position:"relative",flexGrow:1,height:"100%"},children:[i<r.length-1?Z(n,i,B):t.jsx(H,{ref:Be,children:Z(n,i,B)}),f?t.jsx($,{type:"primary",style:A,className:"scale-on-hover",onClick:()=>{_(h?k=>k.filter(G=>G!==n):k=>[...k,n])},children:h?t.jsx("i",{className:"fa-solid fa-5x",children:s+1}):g?t.jsx("i",{className:"fa-solid fa-check fa-5x"}):t.jsx("i",{className:"fa-solid fa-square  fa-5x",style:{color:"#fff7"}})}):g?t.jsx("div",{style:{...A,display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",background:"#0006"},children:t.jsx("i",{className:"fa-solid fa-check fa-5x",style:{color:"white"}})}):null]},"select_container_"+w(n))},ue=async({fromCursor:n,downloadType:i,startIndex:s=0}={})=>{var xe;if(!j)return;const h=await qe();if(!("showDirectoryPicker"in window)&&i==="file")return Y.fire({icon:"error",title:e({en:"Browser not supported",vi:"Trình duyệt không hỗ trợ"}),text:e({en:"File saver API not supported in this browser. Please use newest version of Edge or Chrome. (window.showDirectoryPicker)",vi:"Trình duyệt này không hỗ trợ API lưu file (window.showDirectoryPicker). Vui lòng sử dụng Edge hoặc Chrome bản mới nhất"})});let g;if(!n&&!f&&(g=await Y.fire({icon:"question",title:e({en:"Download",vi:"Tải xuống"})+"?",text:o,showDenyButton:!0,showCancelButton:!1,confirmButtonColor:"#d33",denyButtonColor:"#1668dc",confirmButtonText:e({en:"Download from cursor",vi:"Tiếp tục tải"}),denyButtonText:e({en:"Download all",vi:"Tải từ đầu"})}),g.isDismissed))return;if(g!=null&&g.isConfirmed){const a=await Y.fire({icon:"info",title:e({en:"Download from cursor",vi:"Tiếp tục tải"}),html:`
                <label for="from-cursor">
                ${e({en:"Last cursor",vi:"Con trỏ cuối"})}: (${e({en:"leave empty to re-download all",vi:"bỏ trống để tải từ đầu"})})
                </label><br/>
                <input
                    id="from-cursor"
                    class="swal2-input"
                    style="margin: 5px"
                    value="${n||localStorage.getItem(o+"_fromCursor")||""}">
                <br/>
                <label for="start-index">
                ${e({en:"Last index",vi:"Vị trí cuối"})}: (${e({en:"for auto generate file name",vi:"để tự động tạo tên file"})})
                </label><br/>
                <input
                    id="start-index"
                    class="swal2-input"
                    style="margin: 5px"
                    value="${s||localStorage.getItem(o+"_startIndex")||0}">
            `,preConfirm:()=>{var u,F;return[(u=document.getElementById("from-cursor"))==null?void 0:u.value,(F=document.getElementById("start-index"))==null?void 0:F.value]},showCancelButton:!0,confirmButtonText:e({en:"Start download",vi:"Bắt đầu tải"})});if(a.isDismissed||a.isDenied)return;n=a.value[0],s=parseInt(((xe=a.value)==null?void 0:xe[1])||0)}if(!i){const a=await Y.fire({icon:"question",title:e({en:"Data type",vi:"Loại dữ liệu"}),html:`
                    <label for="download-type">
                        ${e({en:"Which data type you want to download?",vi:"Bạn muốn tải xuống loại dữ liệu nào?"})}
                    </label><br/>
                    <select
                        id="download-type"
                        class="swal2-select"
                        style="margin: 5px">
                        ${Object.values(De).map(u=>`<option value="${u}">${u}</option>`).join("")}
                    </select>
                `,preConfirm:()=>{var u;return(u=document.getElementById("download-type"))==null?void 0:u.value},showCancelButton:!0,reverseButtons:!0});if(a.isDismissed)return;i=a.value}if(!await Ne())return;be("downloadCollection:"+i+":"+(f?`selected:${l.length}:`:"all:")+o);let A;if(i==="file"){const a=await window.showDirectoryPicker({mode:"readwrite"});await a.requestPermission({writable:!0}),A=await a.getDirectoryHandle(ze(o),{create:!0})}const k="downloading_collection_"+o,G="stopping_downloading_collection_"+o;m.loading({key:k,content:e({en:"Downloading",vi:"Đang tải"})+"...",duration:0});const D=n?[]:f?[...l]:[...r];let te=0,ne=0,X=0,T=0,v=0,ie=!0,x=!1,ge=!1,we=!0,ve=[],pe=[];for(;!x&&we;){if(!f&&v>=D.length-b){const P=await L(D,ie?n:void 0),d=je(D,P,w);!(d!=null&&d.length)&&ie&&n&&q.open({type:"error",message:e({en:"No data at from your cursor",vi:"Không có dữ liệu tại vị trí bạn nhập"})+n+" ("+o+")",description:e({en:"Will download from start",vi:"Sẽ tải từ đầu"}),duration:0}),ie=!1,console.log(d),d!=null&&d.length?D.push(...d):we=!1}const a=D.slice(v,v+b);if(!a.length)break;const u=Math.min(b,a.length),F=Array.from({length:u},()=>"");await Promise.all(a.map(async(P,d)=>{try{let c=await j(P,te);c||(c=[]),Array.isArray(c)||(c=[c]);let me=!1;for(let p=0;p<c.length&&!x;p++){const{url:C,name:Ve}=c[p];if(!C)continue;const oe=s+v+d+"_"+p+"_"+Ve;if(c[p].name=oe,F[d]="thread "+(d+1)+": item "+(te+d+1)+(c.length>1?` (${p+1}/${c.length})`:""),!x&&!ge&&m.loading({key:k,content:t.jsxs("span",{children:[`${e({en:"Downloading",vi:"Đang tải"})}... ${ne}`,X?t.jsxs(t.Fragment,{children:[e({en:"Failed",vi:"Lỗi"}),": $",X," ",t.jsx("br",{})]}):"",t.jsx("br",{}),o,t.jsx("br",{}),t.jsx("i",{children:e({en:"Click to stop",vi:"Bấm để dừng"})}),t.jsx("br",{}),t.jsx(ot,{}),F.map((Q,se)=>t.jsxs("span",{style:{width:"100%",textAlign:"left",display:"block"},children:[Q,t.jsx("br",{})]},se)),t.jsx("br",{})]}),duration:0,onClick:()=>{x=!0,m.loading({key:G,content:e({en:"Stopping...",vi:"Đang dừng..."}),duration:0})}}),pe.push(C),i==="file")try{const se=await(await Je({url:C,checkAbortFn:()=>x})).blob(),ye=await(await A.getFileHandle(oe,{create:!0})).createWritable();await ye.write(se),await ye.close()}catch(Q){console.log(Q),x||(h?(await Ge({url:C,conflictAction:"overwrite",filename:o+"/"+oe}),me=!0):(X++,q.open({type:"error",message:e({en:"Download failed",vi:"Lỗi tải"}),description:C})))}ne++}me&&T++,te++,ve.push({data:c,raw:P}),Fe(p=>({...p,[w(P)]:!0})),_(p=>p.filter(C=>w(C)!==w(P)))}catch(c){X++,m.error({content:e({en:"Download failed",vi:"Lỗi tải"})+": "+c.message})}})),x||(v+=a.length)}if(ge=!0,i==="json"||i==="link"){const a=o+(i==="json"?".json":".txt"),u=i==="json"?JSON.stringify(ve,null,4):pe.join(`
`);Ye(u,a)}let O="";try{O=(I==null?void 0:I(D[v]||D[v-1]))||""}catch(a){console.error(a)}m.destroy(k),m.destroy(G),T>0&&q.open({type:"info",message:e({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+T,description:e({en:"Files that cannot be normal downloaded, will be force download into default Download folder of your browser",vi:"Những file không thể tải bình thường, sẽ được tải vào trong folder Download/ mặc định của trình duyệt"}),duration:0,btn:t.jsx($,{onClick:Xe,children:e({en:"Show Download/ folder",vi:"Mở folder Download/"})})}),q.open({type:"success",message:e(x?{en:"Download stopped",vi:"Đã dừng tải"}:{en:"Download finished",vi:"Tải xong"}),description:t.jsxs("ul",{children:[t.jsx("li",{children:e({en:"Folder name",vi:"Tên folder"})+": "+o}),t.jsx("li",{children:e({en:"Downloaded",vi:"Đã tải"})+": "+ne}),T>0&&t.jsx("li",{children:e({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+T}),t.jsx("li",{children:e({en:"Last index",vi:"Vị trí cuối"})+": "+(v+s)}),t.jsx("li",{children:e({en:"Last cursor",vi:"Con trỏ cuối"})+": "+O})]}),duration:0,btn:t.jsx(H,{direction:"horizontal",children:x&&!f?t.jsx($,{onClick:()=>ue({downloadType:i,fromCursor:O,startIndex:v+s}),children:e({en:"Continue download",vi:"Tiếp tục tải"})}):null})}),localStorage.setItem(o+"_fromCursor",O+""),localStorage.setItem(o+"_startIndex",v+s+"")},he=f&&(l==null?void 0:l.length)>0?l:r,E=f&&l.length?l.length:e({en:"all",vi:"tất cả"});return t.jsxs(H,{direction:"vertical",align:"center",style:{width:"100%"},children:[K==null?void 0:K(r),t.jsxs($.Group,{style:{width:"100%",justifyContent:"center"},children:[t.jsx($,{onClick:()=>fe(!0),icon:t.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:z,loading:z,children:e(z?{en:"Loading..",vi:"Đang tải.."}:{en:"Refresh",vi:"Làm mới"})}),j&&t.jsx(et,{disabled:!r.length,menu:{items:[{key:"selectMode",label:t.jsxs(H,{align:"center",children:[t.jsxs(ke,{title:e({en:"Shortcut: press Shift",vi:"Phím tắt: ấn Shift"}),children:[t.jsx(tt,{checked:f})," ",e({en:"Select mode",vi:"Chọn để tải"})]}),(l==null?void 0:l.length)>0&&t.jsx(ke,{title:e({en:"Clear selected",vi:"Xoá lựa chọn"}),children:t.jsx($,{onClick:n=>{n.preventDefault(),n.stopPropagation(),_([])},icon:t.jsx("i",{className:"fa-solid fa-trash"}),children:l==null?void 0:l.length})})]})},{type:"divider"},{key:"file",label:"📁 "+e({en:`Download ${E} files`,vi:`Tải ${E} files`})},{key:"link",label:"🔗 "+e({en:`Export ${E} links`,vi:`Xuất ${E} links`})},{key:"json",label:"📄 "+e({en:`Export ${E} to .json`,vi:`Xuất ${E} ra .json`})},{type:"divider"},...V.map(({key:n,label:i,labelFn:s})=>({key:n,label:(s==null?void 0:s(he))||i}))],onClick:n=>{var i;if(V.length&&V.some(s=>s.key===n.key)){const s=(i=V.find(h=>h.key===n.key))==null?void 0:i.onClick;s&&s(he,B)}else n.key==="selectMode"?ce(!f):!f||(l==null?void 0:l.length)>0?ue({downloadType:n.key}):m.info(e({en:"Please select media to download",vi:"Vui lòng chọn ảnh/video muốn tải"}))}},children:t.jsx($,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-download"}),children:f?l.length?e({en:"Download",vi:"Tải xuống"})+` (${l.length})`:e({en:"Select to download...",vi:"Chọn để tải..."}):e({en:"Download all",vi:"Tải xuống tất cả"})})}),U==null?void 0:U(r,z)]}),W&&t.jsx(nt.Search,{value:M,onChange:n=>Ae(n.target.value+""),placeholder:e(Ee(r)),allowClear:!0,style:{minWidth:300}}),t.jsx(it,{grid:{gutter:10,column:Ce==="vertical"?1:void 0},pagination:le?{showTotal:(n,i)=>e({en:`Showing ${i[0]}-${i[1]} / Total ${n}`,vi:`Hiển thị ${i[0]}-${i[1]} / Tổng ${n}`}),defaultPageSize:Ie,showSizeChanger:!0,position:"bottom",align:"center"}:!1,dataSource:He,renderItem:Re,rowKey:w,loadMore:J&&!le?t.jsx(H,{style:{display:"flex",justifyContent:"center"},children:t.jsx(Ke,{tip:e({en:"Loading",vi:"Đang tải"}),children:t.jsx("div",{style:{padding:50,background:"rgba(0, 0, 0, 0.05)",borderRadius:4}})})}):null})]})}export{xt as C,lt as D};