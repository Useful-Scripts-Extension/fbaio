import{r as c,aA as t}from"./index-CvSYKBTS.js";import{u as r,t as a}from"./MyApp-B7599wVn.js";import{T as s}from"./index-_maCyi6b.js";import{L as o}from"./index-DvCxxZ0I.js";import"./Pagination-DPBlKUh6.js";import"./useBreakpoint-CFiZuY5Z.js";import"./responsiveObserver-D0yqgQJK.js";import"./index-CmgKzT4V.js";import"./PurePanel-Bj8GlKp5.js";import"./SearchOutlined--BwmyEo4.js";import"./row-DDG6H_rG.js";const l=[{id:"exact-search",date:"2024-10-18",name:{vi:"Tìm kiếm chính xác theo từ khoá",en:"Exact match search by keyword"},icon:t.jsx("i",{className:"fa-solid fa-magnifying-glass fa-lg"}),content:{vi:"",en:""},link:"https://www.facebook.com/groups/1154059318582088/posts/1507557769898906"},{id:"find-music",date:"2024-10-18",name:{vi:"Tìm tên bài hát đang phát",en:"Find name of playing song/music"},icon:t.jsx("i",{className:"fa-solid fa-music fa-lg"}),content:{vi:"",en:""},link:"https://www.facebook.com/groups/1154059318582088/posts/1506658759988807"},{id:"invisible-ink",date:"2024-10-04",name:{vi:"Tô điểm cho chữ trên bài viết",en:"Add invisible ink to text in your post"},icon:t.jsx("i",{className:"fa-solid fa-pen-nib fa-lg"}),content:{vi:"",en:""},link:"https://www.facebook.com/groups/1154059318582088/posts/1498286754159341"},{id:"view-locked-profile",date:"2024-10-04",name:{vi:"Xem trang cá nhân đã khoá bảo vệ",en:"View profile that has been locked"},icon:t.jsx("i",{className:"fa-solid fa-lock fb-lg"}),content:{vi:"",en:""},link:"https://www.facebook.com/groups/1154059318582088/posts/1497809580873725"},{id:"check-ai-content",date:"2024-09-24",name:{vi:"Kiểm tra nội dung/hình ảnh do AI tạo",en:"Check content/image created by AI"},icon:t.jsx("i",{className:"fa-solid fa-robot fb-lg"}),content:{vi:"",en:""},link:"https://www.facebook.com/groups/1154059318582088/posts/1491214101533273"},{id:"self-react-story",date:"2024-09-01",name:{vi:"Tự like/thả tym cho story của bản thân",en:"How to react to your own story"},icon:t.jsx("i",{className:"fa-solid fa-heart fa-lg"}),content:{vi:"",en:""},link:"https://www.facebook.com/groups/1154059318582088/posts/1476823159639034"},{id:"emoji-db",date:"2024-08-09",name:{vi:"Thêm hàng nghìn emoji vào bài viết",en:"Add thousand of emoji to your post"},icon:t.jsx("i",{className:"fa-solid fa-face-smile-wink fa-lg"}),content:{vi:"",en:""},link:"https://www.facebook.com/groups/1154059318582088/posts/1463243317663685"}];function u(){const{ti:i}=r();return c.useEffect(()=>{a("Tip:onLoad")},[]),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100%"},children:[t.jsxs("div",{style:{margin:"16px 0"},children:[t.jsx(s.Title,{level:3,style:{margin:0,marginBottom:10,textAlign:"center"},children:i({en:"Tip for Facebook",vi:"Mẹo dùng Facebook"})}),t.jsx("p",{style:{textAlign:"center",opacity:.7},children:i({en:"Update daily",vi:"Cập nhật mỗi ngày"})})]}),t.jsx(o,{style:{padding:10},dataSource:l,renderItem:e=>t.jsx(o.Item,{style:{minWidth:350},children:t.jsx(o.Item.Meta,{avatar:e.icon,title:t.jsx("a",{href:e.link,target:"_blank",onClick:n=>{n.stopPropagation(),n.preventDefault(),a("Tip:OpenLink:"+e.id),window.open(e.link,"_blank")},children:i(e.name)}),description:t.jsx(s.Text,{type:"secondary",children:i(e.date)})})})})]})}export{u as default};