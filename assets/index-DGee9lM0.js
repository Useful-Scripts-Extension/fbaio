import{E as B,r as l,I as h,o as E,aL as V,bi as W,aw as L,bA as R,bB as A,bv as N,Z as H}from"./index-CiqHonqG.js";import{l as X}from"./MyApp-BK3WXPWS.js";import{a as D,g as S,P as F}from"./index-DJqpF4WD.js";const q=e=>{const{componentCls:n,iconCls:a,antCls:t,zIndexPopup:o,colorText:p,colorWarning:f,marginXXS:c,marginXS:i,fontSize:u,fontWeightStrong:C,colorTextHeading:d}=e;return{[n]:{zIndex:o,[`&${t}-popover`]:{fontSize:u},[`${n}-message`]:{marginBottom:i,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${n}-message-icon ${a}`]:{color:f,fontSize:u,lineHeight:1,marginInlineEnd:i},[`${n}-title`]:{fontWeight:C,color:d,"&:only-child":{fontWeight:"normal"}},[`${n}-description`]:{marginTop:c,color:p}},[`${n}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:i}}}}},M=e=>{const{zIndexPopupBase:n}=e;return{zIndexPopup:n+60}},$=B("Popconfirm",e=>q(e),M,{resetStyle:!1});var U=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const j=e=>{const{prefixCls:n,okButtonProps:a,cancelButtonProps:t,title:o,description:p,cancelText:f,okText:c,okType:i="primary",icon:u=l.createElement(N,null),showCancel:C=!0,close:d,onConfirm:v,onCancel:y,onPopupClick:b}=e,{getPrefixCls:P}=l.useContext(h),[m]=V("Popconfirm",W.Popconfirm),g=S(o),x=S(p);return l.createElement("div",{className:`${n}-inner-content`,onClick:b},l.createElement("div",{className:`${n}-message`},u&&l.createElement("span",{className:`${n}-message-icon`},u),l.createElement("div",{className:`${n}-message-text`},g&&l.createElement("div",{className:E(`${n}-title`)},g),x&&l.createElement("div",{className:`${n}-description`},x))),l.createElement("div",{className:`${n}-buttons`},C&&l.createElement(L,Object.assign({onClick:y,size:"small"},t),f||(m==null?void 0:m.cancelText)),l.createElement(R,{buttonProps:Object.assign(Object.assign({size:"small"},A(i)),a),actionFn:v,close:d,prefixCls:P("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},c||(m==null?void 0:m.okText))))},Y=e=>{const{prefixCls:n,placement:a,className:t,style:o}=e,p=U(e,["prefixCls","placement","className","style"]),{getPrefixCls:f}=l.useContext(h),c=f("popconfirm",n),[i]=$(c);return i(l.createElement(D,{placement:a,className:E(c,t),style:o,content:l.createElement(j,Object.assign({prefixCls:c},p))}))};var Z=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const G=l.forwardRef((e,n)=>{var a,t;const{prefixCls:o,placement:p="top",trigger:f="click",okType:c="primary",icon:i=l.createElement(N,null),children:u,overlayClassName:C,onOpenChange:d,onVisibleChange:v}=e,y=Z(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:b}=l.useContext(h),[P,m]=X(!1,{value:(a=e.open)!==null&&a!==void 0?a:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),g=(r,s)=>{m(r,!0),v==null||v(r),d==null||d(r,s)},x=r=>{g(!1,r)},w=r=>{var s;return(s=e.onConfirm)===null||s===void 0?void 0:s.call(void 0,r)},I=r=>{var s;g(!1,r),(s=e.onCancel)===null||s===void 0||s.call(void 0,r)},k=(r,s)=>{const{disabled:z=!1}=e;z||g(r,s)},O=b("popconfirm",o),T=E(O,C),[_]=$(O);return _(l.createElement(F,Object.assign({},H(y,["title"]),{trigger:f,placement:p,onOpenChange:k,open:P,ref:n,overlayClassName:T,content:l.createElement(j,Object.assign({okType:c,icon:i},e,{prefixCls:O,close:x,onConfirm:w,onCancel:I})),"data-popover-inject":!0}),u))}),J=G;J._InternalPanelDoNotUseOrYouWillBeFired=Y;export{J as P};