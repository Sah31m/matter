"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={},i="Common Mistakes",s={unversionedId:"Guides/CommonMistakes",id:"Guides/CommonMistakes",title:"Common Mistakes",description:"Here's a list of common mistakes and how to avoid them while using Matter.",source:"@site/docs/Guides/CommonMistakes.md",sourceDirName:"Guides",slug:"/Guides/CommonMistakes",permalink:"/matter/docs/Guides/CommonMistakes",draft:!1,editUrl:"https://github.com/evaera/matter/edit/main/docs/Guides/CommonMistakes.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Using CollectionService tags",permalink:"/matter/docs/Guides/CollectionService"},next:{title:"Hot reloading",permalink:"/matter/docs/Guides/HotReloading"}},l={},u=[{value:"Off by one frame insertions and queries",id:"off-by-one-frame-insertions-and-queries",level:2},{value:"Using return instead of continue in a query for loop",id:"using-return-instead-of-continue-in-a-query-for-loop",level:2},{value:"Early return inside systems resetting topologically-aware state",id:"early-return-inside-systems-resetting-topologically-aware-state",level:2},{value:"Replacing a component, then using the old one later",id:"replacing-a-component-then-using-the-old-one-later",level:2}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-mistakes"},"Common Mistakes"),(0,o.kt)("p",null,"Here's a list of common mistakes and how to avoid them while using Matter."),(0,o.kt)("h2",{id:"off-by-one-frame-insertions-and-queries"},"Off by one frame insertions and queries"),(0,o.kt)("p",null,"In Matter as well as any ECS, your systems run in a fixed order every frame. It's important to consider the order that\nyour systems will run when writing code that deals with removing, inserting, and changing components on entities."),(0,o.kt)("p",null,"For example, let's say that you have a system that moves NPCs to the correct position every frame. You might do this by\nquerying over every entity with the ",(0,o.kt)("inlineCode",{parentName:"p"},"NPC")," component and then moving its world model position. We can call this system\n",(0,o.kt)("inlineCode",{parentName:"p"},"npcUpdater"),". You might have another system responsible for spawning new NPCs (",(0,o.kt)("inlineCode",{parentName:"p"},"npcSpawner"),"). If ",(0,o.kt)("inlineCode",{parentName:"p"},"npcSpawner")," runs\n",(0,o.kt)("em",{parentName:"p"},"after")," ",(0,o.kt)("inlineCode",{parentName:"p"},"npcUpdater"),", newly spawned NPCs will be in their default position for one frame before jumping to their correct\nposition the next. In addition to players potentially noticing an NPC quickly flash in and out of existence, it could\ncause cascading issues in other systems as well."),(0,o.kt)("p",null,"When it comes to modifying entities, it's best to stick to this general order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Remove any entities or components ",(0,o.kt)("em",{parentName:"li"},"early")," in the frame, so that no unnecessary work is performed by querying them later"),(0,o.kt)("li",{parentName:"ol"},"Spawn entities or insert components next. Insert things before any systems that rely on them have a chance to query and potentially miss entities that are spawned late."),(0,o.kt)("li",{parentName:"ol"},"Change existing entities next, so that you can update newly inserted components correctly"),(0,o.kt)("li",{parentName:"ol"},"Queries that run over all of a certain component every frame last")),(0,o.kt)("h2",{id:"using-return-instead-of-continue-in-a-query-for-loop"},"Using return instead of continue in a query for loop"),(0,o.kt)("p",null,"This is a simple one. When querying, it's easy to just use the wrong control flow. Many of us are so used to writing\ncode that early returns that it's easy to accidentally use ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," inside a for loop, when you really wanted ",(0,o.kt)("inlineCode",{parentName:"p"},"continue"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function mySystem(world)\n    for id, health, poison in world:query(Health, Poison) do\n        if not poison.active then\n            return -- Oops! After reaching the first inactive poison,\n            -- we're going to stop running the entire system!\n            -- Should have used `continue` here.\n        end\n\n        world:insert(id, health:patch({\n            current = health.current - 1\n        }))\n    end\nend\n")),(0,o.kt)("h2",{id:"early-return-inside-systems-resetting-topologically-aware-state"},"Early return inside systems resetting topologically-aware state"),(0,o.kt)("p",null,"Many functions in matter are ",(0,o.kt)("em",{parentName:"p"},"topologically-aware"),": this means that they store some state which is referenced by the\nfile and line number ",(0,o.kt)("em",{parentName:"p"},"where the function is called from"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"useEvent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useThrottle"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"World:queryChanged")," are\nall examples."),(0,o.kt)("p",null,"Under the hood, the storage for these functions is kept around only as long as you keep calling them from the same call\nsite (file and line number). If you cease calling a topologically-aware function in the same place every frame, then\nthe storage that was created for them is automatically cleaned up."),(0,o.kt)("p",null,"Generally, this is what you want. If you stop calling ",(0,o.kt)("inlineCode",{parentName:"p"},"useEvent")," on a particular instance every frame - it's likely\nthat you don't care about that instance anymore, so it makes sense for us to disconnect the event and delete any\nqueued events that happened in the meantime."),(0,o.kt)("p",null,"However, unintentionally triggering this clean up can lead to behavior you might not expect. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"queryChanged"),"\nuses topologically-aware storage to remember what entities have changed since your system last ran, in addition to what\nvalue your system last observed the component as having. Remember, when you call ",(0,o.kt)("inlineCode",{parentName:"p"},"queryChanged")," for the first time\n(which is usually on the first frame of your game), it will iterate over all entities that match your query up front.\nThis is done so that you don't miss any changes that occurred before your system was able to register its interest in\nthe component you're querying over."),(0,o.kt)("p",null,"But, if you stop calling ",(0,o.kt)("inlineCode",{parentName:"p"},"queryChanged")," from the same place every frame, like if you have an early return at the top of\nyour system, this storage is cleaned up. That means the next time your ",(0,o.kt)("inlineCode",{parentName:"p"},"queryChanged")," ",(0,o.kt)("em",{parentName:"p"},"does")," run, it will iterate over\nall matches that are currently in the world as if they are new components (because, as far as it can tell, they are)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function mySystem()\n    if useThrottle(1) then\n        for id, health in world:queryChanged(Health) do\n            -- Uh oh! Every time this runs, *every* health component will be looped over.\n            -- The for loop runs only once per second, which means that on next frame where this code\n            -- isn't reached, the storage for queryChanged is cleaned up.\n        end\n    end\nend\n")),(0,o.kt)("p",null,"The solution to this problem is to ensure that your ",(0,o.kt)("inlineCode",{parentName:"p"},"queryChanged")," for loops run unconditionally every time your system runs.\n(Unless you really do want this behavior!)"),(0,o.kt)("h2",{id:"replacing-a-component-then-using-the-old-one-later"},"Replacing a component, then using the old one later"),(0,o.kt)("p",null,"In Matter, components are immutable. They are frozen with ",(0,o.kt)("inlineCode",{parentName:"p"},"table.freeze")," and you can't modify them. This is for two main\nreasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It makes change detection easy and performant. Using ",(0,o.kt)("inlineCode",{parentName:"li"},"queryChanged")," to get a list of changed components is able to\nexist and be fast because components are immutable. Since it is not possible to change the component tables,\nthe only way for a component to change is if a new table is made and the user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"world:insert")," with it."),(0,o.kt)("li",{parentName:"ol"},"A large class of bugs are rooted in values changing out from underneath you. When you pass tables around, oftentimes\ncode is not written to expect their values to be able to change arbitrarily. This becomes problematic when more than one\nplace in your code has an active reference to the same table.")),(0,o.kt)("p",null,"By using immutable tables for our components, we can address these concerns. However, the trade off is that it's now\npossible to make the other mistake:"),(0,o.kt)("p",null,"You could get a component from an entity, and call ",(0,o.kt)("inlineCode",{parentName:"p"},"patch")," on it and insert it, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local health = world:get(id, Health)\n\nworld:insert(id, health:patch({\n    current = health.current - 10\n}))\n")),(0,o.kt)("p",null,"...and then attempt to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"health")," variable later:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"if health.current < 0 then\n  -- ...\nend\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is not correct!")," We just changed the ",(0,o.kt)("inlineCode",{parentName:"p"},"Health")," component on this entity earlier in the function. ",(0,o.kt)("inlineCode",{parentName:"p"},"health:patch"),"\n",(0,o.kt)("strong",{parentName:"p"},"does not modify")," the table that is stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"health")," variable. Thus, the ",(0,o.kt)("inlineCode",{parentName:"p"},"health")," table that we are using in the\ncomparison in the latter code sample is the ",(0,o.kt)("em",{parentName:"p"},"old")," value, not the new one we just changed!"),(0,o.kt)("p",null,"One way you can solve this problem is by reassigning ",(0,o.kt)("inlineCode",{parentName:"p"},"health")," to the updated value before inserting it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local health = world:get(id, Health)\n\nhealth = health:patch({\n    current = health.current - 10\n})\n\nworld:insert(id, health)\n\nif health.current < 0 then\n  -- ...\nend\n")))}h.isMDXComponent=!0}}]);