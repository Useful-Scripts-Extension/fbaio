import{E as z,r as a,I as h,o as E,aO as B,aU as W,aw as R,aV as F,aW as H,aF as N,Z as L}from"./index-D20NcjrL.js";import{k as X}from"./MyApp-BcfP2Bw3.js";import{a as A,g as S,P as D}from"./index-JE9kmLeS.js";const U=e=>{const{componentCls:n,iconCls:l,antCls:t,zIndexPopup:o,colorText:p,colorWarning:f,marginXXS:c,marginXS:i,fontSize:u,fontWeightStrong:C,colorTextHeading:d}=e;return{[n]:{zIndex:o,[`&${t}-popover`]:{fontSize:u},[`${n}-message`]:{marginBottom:i,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${n}-message-icon ${l}`]:{color:f,fontSize:u,lineHeight:1,marginInlineEnd:i},[`${n}-title`]:{fontWeight:C,color:d,"&:only-child":{fontWeight:"normal"}},[`${n}-description`]:{marginTop:c,color:p}},[`${n}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:i}}}}},q=e=>{const{zIndexPopupBase:n}=e;return{zIndexPopup:n+60}},$=z("Popconfirm",e=>U(e),q,{resetStyle:!1});var M=function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};const j=e=>{const{prefixCls:n,okButtonProps:l,cancelButtonProps:t,title:o,description:p,cancelText:f,okText:c,okType:i="primary",icon:u=a.createElement(N,null),showCancel:C=!0,close:d,onConfirm:v,onCancel:y,onPopupClick:O}=e,{getPrefixCls:P}=a.useContext(h),[m]=B("Popconfirm",W.Popconfirm),g=S(o),x=S(p);return a.createElement("div",{className:`${n}-inner-content`,onClick:O},a.createElement("div",{className:`${n}-message`},u&&a.createElement("span",{className:`${n}-message-icon`},u),a.createElement("div",{className:`${n}-message-text`},g&&a.createElement("div",{className:E(`${n}-title`)},g),x&&a.createElement("div",{className:`${n}-description`},x))),a.createElement("div",{className:`${n}-buttons`},C&&a.createElement(R,Object.assign({onClick:y,size:"small"},t),f||(m==null?void 0:m.cancelText)),a.createElement(F,{buttonProps:Object.assign(Object.assign({size:"small"},H(i)),l),actionFn:v,close:d,prefixCls:P("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},c||(m==null?void 0:m.okText))))},Y=e=>{const{prefixCls:n,placement:l,className:t,style:o}=e,p=M(e,["prefixCls","placement","className","style"]),{getPrefixCls:f}=a.useContext(h),c=f("popconfirm",n),[i]=$(c);return i(a.createElement(A,{placement:l,className:E(c,t),style:o,content:a.createElement(j,Object.assign({prefixCls:c},p))}))};var Z=function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};const G=a.forwardRef((e,n)=>{var l,t;const{prefixCls:o,placement:p="top",trigger:f="click",okType:c="primary",icon:i=a.createElement(N,null),children:u,overlayClassName:C,onOpenChange:d,onVisibleChange:v}=e,y=Z(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:O}=a.useContext(h),[P,m]=X(!1,{value:(l=e.open)!==null&&l!==void 0?l:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),g=(r,s)=>{m(r,!0),v==null||v(r),d==null||d(r,s)},x=r=>{g(!1,r)},w=r=>{var s;return(s=e.onConfirm)===null||s===void 0?void 0:s.call(void 0,r)},I=r=>{var s;g(!1,r),(s=e.onCancel)===null||s===void 0||s.call(void 0,r)},k=(r,s)=>{const{disabled:V=!1}=e;V||g(r,s)},b=O("popconfirm",o),T=E(b,C),[_]=$(b);return _(a.createElement(D,Object.assign({},L(y,["title"]),{trigger:f,placement:p,onOpenChange:k,open:P,ref:n,overlayClassName:T,content:a.createElement(j,Object.assign({okType:c,icon:i},e,{prefixCls:b,close:x,onConfirm:w,onCancel:I})),"data-popover-inject":!0}),u))}),J=G;J._InternalPanelDoNotUseOrYouWillBeFired=Y;export{J as P};