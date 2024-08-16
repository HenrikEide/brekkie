(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[829],{9197:function(e,t,r){Promise.resolve().then(r.bind(r,3085))},3085:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var s=r(7437),a=r(2265),l=r(9772),n=r(1014),o=r(9343),i=r(495),d=r(1538),c=r(7440),f=r(8364);let u=(0,r(2218).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(f.f,{ref:t,className:(0,c.cn)(u(),r),...a})});m.displayName=f.f.displayName;let x=o.RV,h=a.createContext({}),b=e=>{let{...t}=e;return(0,s.jsx)(h.Provider,{value:{name:t.name},children:(0,s.jsx)(o.Qr,{...t})})},g=()=>{let e=a.useContext(h),t=a.useContext(v),{getFieldState:r,formState:s}=(0,o.Gc)(),l=r(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=t;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...l}},v=a.createContext({}),p=a.forwardRef((e,t)=>{let{className:r,...l}=e,n=a.useId();return(0,s.jsx)(v.Provider,{value:{id:n},children:(0,s.jsx)("div",{ref:t,className:(0,c.cn)("space-y-2",r),...l})})});p.displayName="FormItem";let j=a.forwardRef((e,t)=>{let{className:r,...a}=e,{error:l,formItemId:n}=g();return(0,s.jsx)(m,{ref:t,className:(0,c.cn)(l&&"text-red-500 dark:text-red-900",r),htmlFor:n,...a})});j.displayName="FormLabel";let k=a.forwardRef((e,t)=>{let{...r}=e,{error:a,formItemId:l,formDescriptionId:n,formMessageId:o}=g();return(0,s.jsx)(d.g7,{ref:t,id:l,"aria-describedby":a?"".concat(n," ").concat(o):"".concat(n),"aria-invalid":!!a,...r})});k.displayName="FormControl",a.forwardRef((e,t)=>{let{className:r,...a}=e,{formDescriptionId:l}=g();return(0,s.jsx)("p",{ref:t,id:l,className:(0,c.cn)("text-sm text-slate-500 dark:text-slate-400",r),...a})}).displayName="FormDescription";let w=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e,{error:n,formMessageId:o}=g(),i=n?String(null==n?void 0:n.message):a;return i?(0,s.jsx)("p",{ref:t,id:o,className:(0,c.cn)("text-sm font-medium text-red-500 dark:text-red-900",r),...l,children:i}):null});w.displayName="FormMessage";let y=a.forwardRef((e,t)=>{let{className:r,type:a,...l}=e;return(0,s.jsx)("input",{type:a,className:(0,c.cn)("flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",r),ref:t,...l})});y.displayName="Input";let N=l.z.object({name:l.z.string(),description:l.z.string(),savory:l.z.string(),sweet:l.z.string()});function S(){let e=(0,o.cI)({resolver:(0,n.F)(N)});return(0,s.jsx)(x,{...e,children:(0,s.jsxs)("form",{onSubmit:e.handleSubmit(e=>{fetch("http://localhost:5286/breakfasts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,savory:e.savory.split(","),sweet:e.sweet.split(","),startDateTime:new Date().toISOString(),endDateTime:new Date().toISOString()})}).then(e=>{e.ok&&window.location.reload()}).catch(e=>{console.error("Failed to create breakfast:",e),alert("Failed to create breakfast. Backend not running, using local data")})}),className:"space-y-8",children:[(0,s.jsx)(b,{control:e.control,name:"name",render:t=>{var r;let{field:a}=t;return(0,s.jsxs)(p,{children:[(0,s.jsx)(j,{children:"Breakfast Name"}),(0,s.jsx)(k,{children:(0,s.jsx)(y,{placeholder:"Ultra English",...a,className:"text-black"})}),(0,s.jsx)(w,{children:null===(r=e.formState.errors.name)||void 0===r?void 0:r.message})]})}}),(0,s.jsx)(b,{control:e.control,name:"description",render:t=>{var r;let{field:a}=t;return(0,s.jsxs)(p,{children:[(0,s.jsx)(j,{children:"Description"}),(0,s.jsx)(k,{children:(0,s.jsx)(y,{placeholder:"Beyond full english",...a,className:"text-black"})}),(0,s.jsx)(w,{children:null===(r=e.formState.errors.description)||void 0===r?void 0:r.message})]})}}),(0,s.jsx)(b,{control:e.control,name:"savory",render:t=>{var r;let{field:a}=t;return(0,s.jsxs)(p,{children:[(0,s.jsx)(j,{children:"Savory"}),(0,s.jsx)(k,{children:(0,s.jsx)(y,{placeholder:"Bacon, eggs, sausage",...a,className:"text-black"})}),(0,s.jsx)(w,{children:null===(r=e.formState.errors.savory)||void 0===r?void 0:r.message})]})}}),(0,s.jsx)(b,{control:e.control,name:"sweet",render:t=>{var r;let{field:a}=t;return(0,s.jsxs)(p,{children:[(0,s.jsx)(j,{children:"Sweet"}),(0,s.jsx)(k,{children:(0,s.jsx)(y,{placeholder:"Pancakes, waffles, syrup",...a,className:"text-black"})}),(0,s.jsx)(w,{children:null===(r=e.formState.errors.sweet)||void 0===r?void 0:r.message})]})}}),(0,s.jsx)("div",{className:"flex w-full",children:(0,s.jsx)(i.z,{type:"submit",className:"ml-auto bg-slate-700",children:"Submit"})})]})})}},495:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var s=r(7437),a=r(2265),l=r(1538),n=r(2218),o=r(7440);let i=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:n,asChild:d=!1,...c}=e,f=d?l.g7:"button";return(0,s.jsx)(f,{className:(0,o.cn)(i({variant:a,size:n,className:r})),ref:t,...c})});d.displayName="Button"},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var s=r(4839),a=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,s.W)(t))}}},function(e){e.O(0,[373,336,971,23,744],function(){return e(e.s=9197)}),_N_E=e.O()}]);