import{aw as p,aK as m,r as d,aM as n,aO as g,b5 as s}from"./index-CYlZutVr.js";import{S as f,t as o}from"./MyApp-BJ45vRcB.js";import{D as h}from"./index-CyYrA5Nz.js";import"./Dropdown-C-Rv_SFW.js";import"./PurePanel-Mq6tkvkA.js";const c={[s.vi]:"🇻🇳 Tiếng Việt",[s.en]:"🇬🇧 English"};function b(){const{notification:i}=p.useApp(),{language:t,setLanguage:r}=m();d.useEffect(()=>{if(!t){const e="fb_aio_select_language";i.warning({key:e,message:"Select language - Chọn ngôn ngữ",description:n.jsx(f.Compact,{children:Object.entries(c).map(([a,l])=>n.jsx(g,{onClick:()=>{i.destroy(e),r(a),o("LanguagePicker:handleInitLanguage:"+a)},children:l},a))}),placement:"topRight",duration:0})}},[t]);const u=e=>{e.key!==t&&(o("LanguagePicker:handleChangeLanguage:"+e.key),r(e.key))};return n.jsx(h,{menu:{selectable:!0,items:Object.entries(c).map(([e,a])=>({key:e,label:a})),defaultSelectedKeys:[t||s.vi],onClick:u},arrow:!0,children:n.jsx(g,{icon:n.jsx("i",{className:"fa-solid fa-earth-americas"})})})}export{b as default};