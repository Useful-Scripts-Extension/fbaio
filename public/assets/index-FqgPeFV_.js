const __vite__fileDeps=["./RecentStories-Bs7uYjS2.js","./index-BBriuzNA.js","./index-DfqnkV-X.css","./MyApp-CmkiOnMb.js","./Collection-B9SxfYr4.js","./index-NjHtWr7u.js","./file-download-Dys_FsHc.js","./index-4qwk-lHW.js","./Dropdown-DxSI4NN9.js","./PurePanel-yY9muMEs.js","./index-tTPNrueW.js","./index-BbXfI1Nu.js","./index-Bumumc8Y.js","./EyeOutlined-Du2MtFRM.js","./SearchOutlined-DvnHgzkc.js","./index-B7udrguy.js","./Pagination-slfcHA-i.js","./useBreakpoint-CDLrV-mr.js","./responsiveObserver-Bb1LONna.js","./index-CKsES7YN.js","./row-C0Wk6t4-.js","./index-uPrgDTc-.js","./RecentStoryViewer-DiqVKsiv.js","./stories-B17I0-Ef.js","./StoryViewers-suc5mL0p.js","./index-CbmP82sr.js","./index-Dg6R6lHP.js","./VideoWithMuted-CdYhYcjW.js","./index-Dm20K0UU.js","./addEventListener-w7NT04KM.js","./index-BhyNApA-.js","./ArchivedStories-DHTp8NWF.js","./index-BM7CeakW.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aA as e,r as i,aF as a}from"./index-BBriuzNA.js";import{u as o,b as l}from"./MyApp-CmkiOnMb.js";import{T as c}from"./index-C9vPYMV7.js";import"./Dropdown-DxSI4NN9.js";const n=i.lazy(()=>a(()=>import("./RecentStories-Bs7uYjS2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),import.meta.url)),d=i.lazy(()=>a(()=>import("./ArchivedStories-DHTp8NWF.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,28,29,32,26]),import.meta.url)),r={Recent:"recent",Archived:"archived"};function v(){const{ti:t}=o(),s=[{key:r.Recent,label:t({en:"Today",vi:"Hôm nay"}),closable:!1,children:e.jsx(n,{})},{key:r.Archived,label:t({en:"Archived",vi:"Kho lưu trữ"}),closable:!1,children:e.jsx(d,{})}];return e.jsxs(l,{direction:"vertical",style:{width:"100%"},children:[e.jsx("h1",{style:{textAlign:"left"},children:t({en:"Story",vi:"Tin"})}),e.jsx(c,{hideAdd:!0,type:"editable-card",items:s})]})}export{v as default};