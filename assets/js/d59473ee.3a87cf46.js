"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,h=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:4},i="Why ECS",s={unversionedId:"WhyECS",id:"WhyECS",title:"Why ECS",description:"- Behavior is declarative. Systems run every frame, and declare what the state of the world should be right now. This makes code self-healing and more resilient to game-breaking bugs than in an event-driven model where reacting to something happening only happens once.",source:"@site/docs/WhyECS.md",sourceDirName:".",slug:"/WhyECS",permalink:"/matter/docs/WhyECS",draft:!1,editUrl:"https://github.com/evaera/matter/edit/main/docs/WhyECS.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/matter/docs/GettingStarted"},next:{title:"Reconciliation",permalink:"/matter/docs/BestPractices/Reconciliation"}},c={},l=[],d={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-ecs"},"Why ECS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Behavior is declarative. Systems run every frame, and declare what the state of the world should be right now. This makes code self-healing and more resilient to game-breaking bugs than in an event-driven model where reacting to something happening only happens once."),(0,a.kt)("li",{parentName:"ul"},"Game state and behavior are entirely decoupled and all game state is accessible to any system."),(0,a.kt)("li",{parentName:"ul"},"Game state is structured and easy to reason about. We ",(0,a.kt)("a",{parentName:"li",href:"BestPractices/Reconciliation"},"reconcile state into the data model")," so we have one source of truth."),(0,a.kt)("li",{parentName:"ul"},"Systems are self-contained and adding new behaviors to your game is as simple as adding a new system that declares something about how the world should be."),(0,a.kt)("li",{parentName:"ul"},"Reusing code is easy because an entity can have many different types of components. Existing systems can affect new types of entities, and new systems automatically affect all related entities."),(0,a.kt)("li",{parentName:"ul"},"All system code runs contiguously and in a fixed order, every frame. Event-driven code can be sensitive to ordering, because doing anything can trigger an event that jumps into another code path, which in turn could do something else that triggers an event. With systems, your code always runs in the same, fixed order, which makes it much more predictable and resilient to new behaviors caused from refactors.")))}m.isMDXComponent=!0}}]);