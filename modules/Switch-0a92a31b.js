import{r,j as t}from"../vendor/react-6a63c5cb.js";import{n as u,I as p}from"../indexa711bd7e.js";const f={behavior:"smooth",block:"nearest"};function I({label:e,contentList:a,selected:l,onClick:n=u,onDoubleClick:o=n}){const c=r.useRef(null);r.useEffect(()=>{var s;(s=c==null?void 0:c.current)==null||s.scrollIntoView(f)},[c,l]);const i=r.useCallback((s,x)=>{s.tagName==="LI"&&x(s.dataset.content)},[a]),h=r.useCallback(({target:s})=>{i(s,n)},[i,n]),m=r.useCallback(({target:s})=>{i(s,o)},[i,o]);return t.jsxs("div",{className:"listContainer",children:[e&&t.jsx("span",{children:e}),t.jsx("ul",{className:"list",onClick:h,onDoubleClick:m,tabIndex:0,children:a.map(s=>t.jsx(b,{content:s,selected:s===l,selectionRef:c},s))})]})}function b({content:e,selected:a=!1,selectionRef:l}){const n=a?"selected":"",o=a?{ref:l}:{};return t.jsx("li",{className:n,"data-content":e,...o,children:e})}function k({id:e,label:a,on:l=!1,onChange:n=u}){return t.jsxs(p,{label:a,id:e,children:[t.jsx("input",{type:"checkbox",className:"switch__input",id:e,name:e,checked:l,onChange:o}),t.jsx("label",{htmlFor:e,className:"switch__label",tabIndex:0})]});function o({currentTarget:c}){n(c.checked,e)}}export{I as L,k as S};
