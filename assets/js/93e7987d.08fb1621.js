"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13],{60826:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new loop. `Loop.new` accepts as arguments the values that will be passed to all of your systems.\\n\\nSo typically, you want to pass the World in here, as well as maybe a table of global game state.\\n\\n```lua\\nlocal world = World.new()\\nlocal gameState = {}\\n\\nlocal loop = Loop.new(world, gameState)\\n```","params":[{"name":"...","desc":"Values that will be passed to all of your systems","lua_type":"...any"}],"returns":[{"desc":"","lua_type":"Loop"}],"function_type":"static","source":{"line":57,"path":"lib/Loop.lua"}},{"name":"scheduleSystems","desc":"Schedules a set of systems based on the constraints they define.\\n\\nSystems may optionally declare:\\n- The name of the event they run on (e.g., RenderStepped, Stepped, Heartbeat)\\n- A numerical priority value\\n- Other systems that they must run *after*\\n\\nIf systems do not specify an event, they will run on the `default` event.\\n\\nSystems that share an event will run in order of their priority, which means that systems with a lower `priority`\\nvalue run first. The default priority is `0`.\\n\\nSystems that have defined what systems they run `after` can only be scheduled after all systems they depend on have\\nalready been scheduled.\\n\\nAll else being equal, the order in which systems run is stable, meaning if you don\'t change your code, your systems\\nwill always run in the same order across machines.\\n\\n:::info\\nIt is possible for your systems to be in an unresolvable state. In which case, `scheduleSystems` will error.\\nThis can happen when your systems have circular or unresolvable dependency chains.\\n\\nIf a system has both a `priority` and defines systems it runs `after`, the system can only be scheduled if all of\\nthe systems it depends on have a lower or equal priority.\\n\\nSystems can never depend on systems that run on other events, because it is not guaranteed or required that events\\nwill fire every frame or will always fire in the same order.\\n:::\\n\\n:::caution\\n`scheduleSystems` has to perform nontrivial sorting work each time it\'s called, so you should avoid calling it multiple\\ntimes if possible.\\n:::","params":[{"name":"systems","desc":"Array of systems to schedule.","lua_type":"{ System }"}],"returns":[],"function_type":"method","source":{"line":133,"path":"lib/Loop.lua"}},{"name":"scheduleSystem","desc":"Schedules a single system. This is an expensive function to call multiple times. Instead, try batch scheduling\\nsystems with [Loop:scheduleSystems] if possible.","params":[{"name":"system","desc":"","lua_type":"System"}],"returns":[],"function_type":"method","source":{"line":153,"path":"lib/Loop.lua"}},{"name":"evictSystem","desc":"Removes a previously-scheduled system from the Loop. Evicting a system also cleans up any storage from hooks.\\nThis is intended to be used for hot reloading. Dynamically loading and unloading systems for gameplay logic\\nis not recommended.","params":[{"name":"system","desc":"","lua_type":"System"}],"returns":[],"function_type":"method","source":{"line":164,"path":"lib/Loop.lua"}},{"name":"replaceSystem","desc":"Replaces an older version of a system with a newer version of the system. Internal system storage (which is used\\nby hooks) will be moved to be associated with the new system. This is intended to be used for hot reloading.","params":[{"name":"old","desc":"","lua_type":"System"},{"name":"new","desc":"","lua_type":"System"}],"returns":[],"function_type":"method","source":{"line":189,"path":"lib/Loop.lua"}},{"name":"begin","desc":"Connects to frame events and starts invoking your systems.\\n\\nPass a table of events you want to be able to run systems on, a map of name to event. Systems can use these names\\nto define what event they run on. By default, systems run on an event named `\\"default\\"`. Custom events may be used\\nif they have a `Connect` function.\\n\\n```lua\\nloop:begin({\\n\\tdefault = RunService.Heartbeat,\\n\\tHeartbeat = RunService.Heartbeat,\\n\\tRenderStepped = RunService.RenderStepped,\\n\\tStepped = RunService.Stepped,\\n})\\n```\\n\\n&nbsp;\\n\\nReturns a table similar to the one you passed in, but the values are `RBXScriptConnection` values (or whatever is\\nreturned by `:Connect` if you passed in a synthetic event).","params":[{"name":"events","desc":"A map from event name to event objects.","lua_type":"{[string]: RBXScriptSignal}"}],"returns":[{"desc":"A map from your event names to connection objects.","lua_type":"{[string]: RBXScriptConnection}"}],"function_type":"method","source":{"line":348,"path":"lib/Loop.lua"}},{"name":"addMiddleware","desc":"Adds a user-defined middleware function that is called during each frame.\\n\\nThis allows you to run code before and after each frame, to perform initialization and cleanup work.\\n\\n```lua\\nloop:addMiddleware(function(nextFn)\\n\\treturn function()\\n\\t\\tPlasma.start(plasmaNode, nextFn)\\n\\tend\\nend)\\n```\\n\\nYou must pass `addMiddleware` a function that itself returns a function that invokes `nextFn` at some point.\\n\\nThe outer function is invoked only once. The inner function is invoked during each frame event.\\n\\n:::info\\nMiddleware added later \\"wraps\\" middleware that was added earlier. The innermost middleware function is the internal\\nfunction that actually calls your systems.\\n:::","params":[{"name":"middleware","desc":"","lua_type":"(nextFn: () -> (), eventName: string) -> () -> ()"}],"returns":[],"function_type":"method","source":{"line":512,"path":"lib/Loop.lua"}}],"properties":[],"types":[{"name":"System","desc":"Either a plain function or a table defining the system.","lua_type":"SystemTable | (...any) -> ()","source":{"line":79,"path":"lib/Loop.lua"}},{"name":"SystemTable","desc":"A table defining a system with possible options.\\n\\nSystems are scheduled in order of `priority`, meaning lower `priority` runs first.\\nThe default priority is `0`.","fields":[{"name":"system","lua_type":"(...any) -> ()","desc":"The system function"},{"name":"event?","lua_type":"string","desc":"The event the system runs on. A string, a key from the table you pass to `Loop:begin`."},{"name":"priority?","lua_type":"number","desc":"Priority influences the position in the frame the system is scheduled to run at."},{"name":"after?","lua_type":"{System}","desc":"A list of systems that this system must run after."}],"source":{"line":93,"path":"lib/Loop.lua"}}],"name":"Loop","desc":"The Loop class handles scheduling and *looping* (who would have guessed) over all of your game systems.\\n\\n:::caution Yielding\\nYielding is not allowed in systems. Doing so will result in the system thread being closed early, but it will not\\naffect other systems.\\n:::","source":{"line":39,"path":"lib/Loop.lua"}}')}}]);