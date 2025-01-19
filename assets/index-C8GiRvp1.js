import{r as n,I as P,o as m,E as me,F as pe,H as ye,D as o,a3 as z,a2 as R,bE as $e,Z as ue,bN as he}from"./index-C9a7kOyS.js";import{T as fe}from"./index-BapWOJNx.js";var Se=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const W=e=>{var{prefixCls:i,className:t,hoverable:a=!0}=e,r=Se(e,["prefixCls","className","hoverable"]);const{getPrefixCls:d}=n.useContext(P),g=d("card",i),y=m(`${g}-grid`,t,{[`${g}-grid-hoverable`]:a});return n.createElement("div",Object.assign({},r,{className:y}))},ve=e=>{const{antCls:i,componentCls:t,headerHeight:a,cardPaddingBase:r,tabsMarginBottom:d}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${o(r)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${o(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${o(e.borderRadiusLG)} ${o(e.borderRadiusLG)} 0 0`},z()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},R),{[`
          > ${t}-typography,
          > ${t}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${i}-tabs-top`]:{clear:"both",marginBottom:d,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${o(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}})},xe=e=>{const{cardPaddingBase:i,colorBorderSecondary:t,cardShadow:a,lineWidth:r}=e;return{width:"33.33%",padding:i,border:0,borderRadius:0,boxShadow:`
      ${o(r)} 0 0 0 ${t},
      0 ${o(r)} 0 0 ${t},
      ${o(r)} ${o(r)} 0 0 ${t},
      ${o(r)} 0 0 0 ${t} inset,
      0 ${o(r)} 0 0 ${t} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},Ce=e=>{const{componentCls:i,iconCls:t,actionsLiMargin:a,cardActionsIconSize:r,colorBorderSecondary:d,actionsBg:g}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:g,borderTop:`${o(e.lineWidth)} ${e.lineType} ${d}`,display:"flex",borderRadius:`0 0 ${o(e.borderRadiusLG)} ${o(e.borderRadiusLG)}`},z()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${i}-btn), > ${t}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:o(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${t}`]:{fontSize:r,lineHeight:o(e.calc(r).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${o(e.lineWidth)} ${e.lineType} ${d}`}}})},Oe=e=>Object.assign(Object.assign({margin:`${o(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex"},z()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},R),"&-description":{color:e.colorTextDescription}}),je=e=>{const{componentCls:i,cardPaddingBase:t,colorFillAlter:a}=e;return{[`${i}-head`]:{padding:`0 ${o(t)}`,background:a,"&-title":{fontSize:e.fontSize}},[`${i}-body`]:{padding:`${o(e.padding)} ${o(t)}`}}},ze=e=>{const{componentCls:i}=e;return{overflow:"hidden",[`${i}-body`]:{userSelect:"none"}}},we=e=>{const{antCls:i,componentCls:t,cardShadow:a,cardHeadPadding:r,colorBorderSecondary:d,boxShadowTertiary:g,cardPaddingBase:y,extraColor:p}=e;return{[t]:Object.assign(Object.assign({},ye(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:g},[`${t}-head`]:ve(e),[`${t}-extra`]:{marginInlineStart:"auto",color:p,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:y,borderRadius:`0 0 ${o(e.borderRadiusLG)} ${o(e.borderRadiusLG)}`},z()),[`${t}-grid`]:xe(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${i}-image-mask`]:{borderRadius:`${o(e.borderRadiusLG)} ${o(e.borderRadiusLG)} 0 0`}},[`${t}-actions`]:Ce(e),[`${t}-meta`]:Oe(e)}),[`${t}-bordered`]:{border:`${o(e.lineWidth)} ${e.lineType} ${d}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:a}},[`${t}-contain-grid`]:{borderRadius:`${o(e.borderRadiusLG)} ${o(e.borderRadiusLG)} 0 0 `,[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${t}-contain-tabs`]:{[`> div${t}-head`]:{minHeight:0,[`${t}-head-title, ${t}-extra`]:{paddingTop:r}}},[`${t}-type-inner`]:je(e),[`${t}-loading`]:ze(e),[`${t}-rtl`]:{direction:"rtl"}}},Ee=e=>{const{componentCls:i,cardPaddingSM:t,headerHeightSM:a,headerFontSizeSM:r}=e;return{[`${i}-small`]:{[`> ${i}-head`]:{minHeight:a,padding:`0 ${o(t)}`,fontSize:r,[`> ${i}-head-wrapper`]:{[`> ${i}-extra`]:{fontSize:e.fontSize}}},[`> ${i}-body`]:{padding:t}},[`${i}-small${i}-contain-tabs`]:{[`> ${i}-head`]:{[`${i}-head-title, ${i}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},Te=e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText}),Be=me("Card",e=>{const i=pe(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[we(i),Ee(i)]},Te);var I=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Pe=e=>{const{actionClasses:i,actions:t=[],actionStyle:a}=e;return n.createElement("ul",{className:i,style:a},t.map((r,d)=>{const g=`action-${d}`;return n.createElement("li",{style:{width:`${100/t.length}%`},key:g},n.createElement("span",null,r))}))},Ne=n.forwardRef((e,i)=>{const{prefixCls:t,className:a,rootClassName:r,style:d,extra:g,headStyle:y={},bodyStyle:p={},title:h,loading:S,bordered:v=!0,size:x,type:C,cover:N,actions:w,tabList:O,children:j,activeTabKey:H,defaultActiveTabKey:A,tabBarExtraContent:_,hoverable:F,tabProps:K={},classNames:E,styles:T}=e,q=I(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps","classNames","styles"]),{getPrefixCls:X,direction:V,card:b}=n.useContext(P),Z=c=>{var s;(s=e.onTabChange)===null||s===void 0||s.call(e,c)},$=c=>{var s;return m((s=b==null?void 0:b.classNames)===null||s===void 0?void 0:s[c],E==null?void 0:E[c])},u=c=>{var s;return Object.assign(Object.assign({},(s=b==null?void 0:b.styles)===null||s===void 0?void 0:s[c]),T==null?void 0:T[c])},J=n.useMemo(()=>{let c=!1;return n.Children.forEach(j,s=>{s&&s.type&&s.type===W&&(c=!0)}),c},[j]),l=X("card",t),[Q,U,Y]=Be(l),k=n.createElement(he,{loading:!0,active:!0,paragraph:{rows:4},title:!1},j),G=H!==void 0,ee=Object.assign(Object.assign({},K),{[G?"activeKey":"defaultActiveKey"]:G?H:A,tabBarExtraContent:_});let L;const f=$e(x),te=!f||f==="default"?"large":f,M=O?n.createElement(fe,Object.assign({size:te},ee,{className:`${l}-head-tabs`,onChange:Z,items:O.map(c=>{var{tab:s}=c,B=I(c,["tab"]);return Object.assign({label:s},B)})})):null;if(h||g||M){const c=m(`${l}-head`,$("header")),s=m(`${l}-head-title`,$("title")),B=m(`${l}-extra`,$("extra")),be=Object.assign(Object.assign({},y),u("header"));L=n.createElement("div",{className:c,style:be},n.createElement("div",{className:`${l}-head-wrapper`},h&&n.createElement("div",{className:s,style:u("title")},h),g&&n.createElement("div",{className:B,style:u("extra")},g)),M)}const ae=m(`${l}-cover`,$("cover")),re=N?n.createElement("div",{className:ae,style:u("cover")},N):null,ie=m(`${l}-body`,$("body")),oe=Object.assign(Object.assign({},p),u("body")),ne=n.createElement("div",{className:ie,style:oe},S?k:j),se=m(`${l}-actions`,$("actions")),le=w&&w.length?n.createElement(Pe,{actionClasses:se,actionStyle:u("actions"),actions:w}):null,de=ue(q,["onTabChange"]),ce=m(l,b==null?void 0:b.className,{[`${l}-loading`]:S,[`${l}-bordered`]:v,[`${l}-hoverable`]:F,[`${l}-contain-grid`]:J,[`${l}-contain-tabs`]:O&&O.length,[`${l}-${f}`]:f,[`${l}-type-${C}`]:!!C,[`${l}-rtl`]:V==="rtl"},a,r,U,Y),ge=Object.assign(Object.assign({},b==null?void 0:b.style),d);return Q(n.createElement("div",Object.assign({ref:i},de,{className:ce,style:ge}),L,re,ne,le))});var He=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Ge=e=>{const{prefixCls:i,className:t,avatar:a,title:r,description:d}=e,g=He(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:y}=n.useContext(P),p=y("card",i),h=m(`${p}-meta`,t),S=a?n.createElement("div",{className:`${p}-meta-avatar`},a):null,v=r?n.createElement("div",{className:`${p}-meta-title`},r):null,x=d?n.createElement("div",{className:`${p}-meta-description`},d):null,C=v||x?n.createElement("div",{className:`${p}-meta-detail`},v,x):null;return n.createElement("div",Object.assign({},g,{className:h}),S,C)},D=Ne;D.Grid=W;D.Meta=Ge;export{D as C};