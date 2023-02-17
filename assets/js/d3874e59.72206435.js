"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[374],{52897:(e,t,a)=>{a.r(t),a.d(t,{HomepageFeatures:()=>d,default:()=>E});var n=a(87462),r=a(39960),l=a(52263),s=a(4194),i=a(86010),o=a(67294);const c={heroBanner:"heroBanner_e1Bh",buttons:"buttons_VwD3",features:"features_WS6B",tagline:"tagline_wVQ8",feature:"feature_moa3",event:"event_tCj5",frameTitle:"frameTitle_Es6h"},m=[{image:"https://i.eryn.io/2228/carbon%20%281%29.png",title:"Data-Driven Architecture",description:o.createElement(o.Fragment,null,"With ECS, your data and your code are separate. Data exists as Components, any number of which can be present on an Entity. Systems contain your game code and run in a fixed order, every frame. Systems query for Entities that have specific Components, and declare what the state of the world should be.",o.createElement("br",null),o.createElement("br",null),"The separation of state and behavior enables quality of life features like Hot Reloading, allowing you to see the changes you've made to your code in real time - as soon as you save the file. No need to stop and start the game.")},{image:"https://i.eryn.io/2228/89tcYlOq.png",title:"Debug View and Editor",description:o.createElement(o.Fragment,null,"Matter comes with a world-class debug view and editor. In addition to viewing all your game state in one place, the debugger integrates with an immediate-mode widget system to make creating debug conditions dead simple. Performance information, queries, logs, and recent errors are displayed for each system, enabling deep insight into what your code is really doing.")},{Art:()=>o.createElement("div",null,o.createElement("div",{className:c.event},o.createElement("p",{className:c.frameTitle},"All systems run in a fixed order, every frame"),o.createElement("div",null,o.createElement("h4",null,"RenderStepped"),o.createElement("span",null,"moveCutSceneCamera"),o.createElement("span",null,"animateModels"),o.createElement("span",null,"camera3dEffects")),o.createElement("div",null,o.createElement("h4",null,"Heartbeat"),o.createElement("span",null,"spawnEnemies"),o.createElement("span",null,"poisonEnemies"),o.createElement("span",null,"enemiesMove"),o.createElement("span",null,"fireWeapons"),o.createElement("span",null,"doors")))),title:"Robust and Durable",description:o.createElement(o.Fragment,null,"Event-driven code can be sensitive to ordering issues and new behaviors can be created accidentally. With ECS, your code runs contiguously in a fixed order every frame, which makes it much more predictable and resilient to new behaviors caused by refactors.",o.createElement("br",null),o.createElement("br",null),"All systems have access to all the data in the game, which means adding a new feature is as simple as creating a new system that simply declares something about the world.")}];function u(e){let{image:t,title:a,description:n,Art:r}=e;return o.createElement("div",{className:c.feature},t&&o.createElement("img",{className:c.featureSvg,alt:a,src:t}),r&&o.createElement(r,{className:c.featureSvg}),o.createElement("div",{className:c.featureDescription},o.createElement("h3",null,a),o.createElement("p",null,n)))}function d(){return m?o.createElement("section",null,o.createElement("div",{className:"container"},o.createElement("div",{className:c.features},m.map(((e,t)=>o.createElement(u,(0,n.Z)({key:t},e))))))):null}function h(){const{siteConfig:e}=(0,l.Z)();return o.createElement("header",{className:(0,i.Z)("hero",c.heroBanner)},o.createElement("div",{className:"container"},o.createElement("h1",{className:"hero__title"},o.createElement("img",{src:e.baseUrl+"logo.svg",className:"bigLogo",alt:"Moonwave"})),o.createElement("p",{className:"hero__subtitle"},e.tagline),o.createElement("div",{className:c.buttons},o.createElement(r.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get Started \u2192"))))}function E(){const{siteConfig:e,tagline:t}=(0,l.Z)();return o.createElement(s.Z,{title:e.title,description:t},o.createElement(h,null),o.createElement("main",null,o.createElement("p",{className:c.tagline},"Matter is an Entity-Component-System library that empowers developers to build games that are extensible, performant, and easy to debug."),o.createElement(d,null)))}}}]);