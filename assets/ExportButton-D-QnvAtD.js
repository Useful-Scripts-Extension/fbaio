import{aw as u,aK as x,aM as i,aO as E}from"./index-StVibqow.js";import{f as g}from"./file-download-C3AX8Z5E.js";import{t as k}from"./MyApp-CbrjJD8r.js";import{D as h}from"./index-KGofhwC-.js";function y({data:r,children:m,options:s}){const{message:c}=u.useApp(),{ti:t}=x(),l=e=>{var n,p;if(!(r!=null&&r.length))return c.error(t({en:"No data to export",vi:"Không có dữ liệu"}));const o=(p=(n=s.find(a=>a.key==e))==null?void 0:n.prepareData)==null?void 0:p.call(n,r);o!=null&&o.data&&(k("onClickExport:"+e+":"+o.fileName),g(o.data,o.fileName))},f=s.map(({key:e,label:o})=>({key:e,label:o}));return i.jsx(h,{menu:{items:f,onClick:e=>l(e.key)},children:m||i.jsx(E,{type:"primary",icon:i.jsx("i",{className:"fa-solid fa-download"}),children:t({en:"Export",vi:"Xuất"})+" "+((r==null?void 0:r.length)||0)})})}export{y as E};