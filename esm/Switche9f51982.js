var x=Object.defineProperty;var i=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))I.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))C.call(t,a)&&u(e,a,t[a]);return e};import{r as o,R as n}from"./react6742c151.js";import{n as f,I as E}from"./index729ca5c2.js";const N={behavior:"smooth",block:"nearest"};function g({label:e,contentList:t,selected:a,onClick:c=f,onDoubleClick:r=c}){const l=o.exports.useRef(null);o.exports.useEffect(()=>{var s;(s=l==null?void 0:l.current)==null||s.scrollIntoView(N)},[l,a]);const m=o.exports.useCallback((s,k)=>{s.tagName==="LI"&&k(s.dataset.content)},[t]),h=o.exports.useCallback(({target:s})=>{m(s,c)},[m,c]),b=o.exports.useCallback(({target:s})=>{m(s,r)},[m,r]);return n.createElement("div",{className:"listContainer"},e&&n.createElement("span",null,e),n.createElement("ul",{className:"list",onClick:h,onDoubleClick:b,tabIndex:0},t.map(s=>n.createElement(d,{key:s,content:s,selected:s===a,selectionRef:l}))))}function d({content:e,selected:t=!1,selectionRef:a}){const c=t?"selected":"",r=t?{ref:a}:{};return n.createElement("li",p({className:c,"data-content":e},r),e)}function j({id:e,label:t,on:a=!1,onChange:c=f}){return n.createElement(E,{label:t,id:e},n.createElement("input",{type:"checkbox",className:"switch__input",id:e,name:e,checked:a,onChange:r}),n.createElement("label",{htmlFor:e,className:"switch__label",tabIndex:0}));function r({currentTarget:l}){c(l.checked,e)}}export{g as L,j as S};