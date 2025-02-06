"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[841],{8841:(e,t,a)=>{a.d(t,{F:()=>D});var r=a(5155),l=a(9606),s=a(3312),n=a(2115),i=a(2317),o=a(1567),d=a(4352);let c=(0,a(1027).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,r.jsx)(d.b,{ref:t,className:(0,o.cn)(c(),a),...l})});u.displayName=d.b.displayName;let m=l.Op,f=n.createContext({}),p=e=>{let{...t}=e;return(0,r.jsx)(f.Provider,{value:{name:t.name},children:(0,r.jsx)(l.xI,{...t})})},x=()=>{let e=n.useContext(f),t=n.useContext(h),{getFieldState:a,formState:r}=(0,l.xW)(),s=a(e.name,r);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...s}},h=n.createContext({}),v=n.forwardRef((e,t)=>{let{className:a,...l}=e,s=n.useId();return(0,r.jsx)(h.Provider,{value:{id:s},children:(0,r.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2",a),...l})})});v.displayName="FormItem";let g=n.forwardRef((e,t)=>{let{className:a,...l}=e,{error:s,formItemId:n}=x();return(0,r.jsx)(u,{ref:t,className:(0,o.cn)(s&&"text-destructive",a),htmlFor:n,...l})});g.displayName="FormLabel";let b=n.forwardRef((e,t)=>{let{...a}=e,{error:l,formItemId:s,formDescriptionId:n,formMessageId:o}=x();return(0,r.jsx)(i.DX,{ref:t,id:s,"aria-describedby":l?"".concat(n," ").concat(o):"".concat(n),"aria-invalid":!!l,...a})});b.displayName="FormControl";let y=n.forwardRef((e,t)=>{let{className:a,...l}=e,{formDescriptionId:s}=x();return(0,r.jsx)("p",{ref:t,id:s,className:(0,o.cn)("text-[0.8rem] text-muted-foreground",a),...l})});y.displayName="FormDescription",n.forwardRef((e,t)=>{let{className:a,children:l,...s}=e,{error:n,formMessageId:i}=x(),d=n?String(null==n?void 0:n.message):l;return d?(0,r.jsx)("p",{ref:t,id:i,className:(0,o.cn)("text-[0.8rem] font-medium text-destructive",a),...s,children:d}):null}).displayName="FormMessage";let w=n.forwardRef((e,t)=>{let{className:a,type:l,...s}=e;return(0,r.jsx)("input",{type:l,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...s})});w.displayName="Input";var j=a(342),N=a(2645),k=a(2488),R=a(7193);let C=j.bL;j.YJ;let z=j.WT,F=n.forwardRef((e,t)=>{let{className:a,children:l,...s}=e;return(0,r.jsxs)(j.l9,{ref:t,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...s,children:[l,(0,r.jsx)(j.In,{asChild:!0,children:(0,r.jsx)(N.A,{className:"h-4 w-4 opacity-50"})})]})});F.displayName=j.l9.displayName;let P=n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,r.jsx)(j.PP,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",a),...l,children:(0,r.jsx)(k.A,{className:"h-4 w-4"})})});P.displayName=j.PP.displayName;let V=n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,r.jsx)(j.wn,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",a),...l,children:(0,r.jsx)(N.A,{className:"h-4 w-4"})})});V.displayName=j.wn.displayName;let q=n.forwardRef((e,t)=>{let{className:a,children:l,position:s="popper",...n}=e;return(0,r.jsx)(j.ZL,{children:(0,r.jsxs)(j.UC,{ref:t,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:s,...n,children:[(0,r.jsx)(P,{}),(0,r.jsx)(j.LM,{className:(0,o.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:l}),(0,r.jsx)(V,{})]})})});q.displayName=j.UC.displayName,n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,r.jsx)(j.JU,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",a),...l})}).displayName=j.JU.displayName;let A=n.forwardRef((e,t)=>{let{className:a,children:l,...s}=e;return(0,r.jsxs)(j.q7,{ref:t,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...s,children:[(0,r.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(j.VF,{children:(0,r.jsx)(R.A,{className:"h-4 w-4"})})}),(0,r.jsx)(j.p4,{children:l})]})});A.displayName=j.q7.displayName,n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,r.jsx)(j.wv,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",a),...l})}).displayName=j.wv.displayName;var I=a(6970);let _=n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,r.jsx)(I.bL,{className:(0,o.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a),...l,ref:t,children:(0,r.jsx)(I.zi,{className:(0,o.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});function E(e){var t;let{field:a,control:l,className:s,description:n}=e,i=null!==(t=a.label)&&void 0!==t?t:a.name+("array"===a.type?" (comma separated list)":"");return(0,r.jsx)(p,{control:l,name:a.name,render:e=>{var t,l,o,d,c,u;let{field:m}=e;return(0,r.jsxs)(v,{className:s,children:[(0,r.jsx)(g,{className:"px-2",children:i}),"boolean"===a.type?(0,r.jsx)(b,{children:(0,r.jsx)(_,{checked:null!==(l=m.value)&&void 0!==l&&l,onCheckedChange:m.onChange})}):"select"===a.type?(0,r.jsxs)(C,{onValueChange:m.onChange,defaultValue:null!==(o=m.value)&&void 0!==o?o:"",children:[(0,r.jsx)(b,{children:(0,r.jsx)(F,{children:(0,r.jsx)(z,{})})}),(0,r.jsx)(q,{children:null===(t=a.choices)||void 0===t?void 0:t.map(e=>(0,r.jsx)(A,{value:e,children:e},e))})]}):"array"===a.type?(0,r.jsx)(w,{...m,value:Array.isArray(m.value)?m.value.join(","):m.value}):"string"===a.type||a.isPositional?(0,r.jsx)(w,{...m,value:null!==(d=m.value)&&void 0!==d?d:"",placeholder:null!==(c=a.label)&&void 0!==c?c:a.name}):(0,r.jsx)(w,{...m,value:null!==(u=m.value)&&void 0!==u?u:""}),(0,r.jsxs)(y,{className:"px-2",children:[a.required&&"Required, ",a.choices&&"Options: ".concat(a.choices.join(", "),"."),n&&n]})]})}})}function L(e){let t=/\[default: '([^']+)'\]/.exec(e);if(t){var a,r;let e=null!==(r=null===(a=t[1])||void 0===a?void 0:a.trim())&&void 0!==r?r:"";return e.startsWith("(")&&e.endsWith(")")?e.slice(1,-1).split(",").map(e=>e.trim()).filter(e=>e.length>0):e}}_.displayName=I.bL.displayName;var W=a(3415),U=a(2679);let $=e=>{let t={};return e.forEach(e=>{let a;switch(e.type){case"boolean":a=e.required?W.z.boolean():W.z.boolean().optional();break;case"array":a=W.z.string(),e.required||(a=a.optional());break;default:a=e.required?W.z.string().min(1,{message:"This field is required"}):W.z.string().optional()}t[e.name]=a}),W.z.object(t)};function D(e){let{helpText:t,onSubmit:a,baseCmd:n,columns:i=1,maxHeight:d,fieldClassName:c}=e,u=function(e){let t=[];for(let m of e.split("\n")){var a,r,l,s,n,i,o,d,c,u;if(!m.trim()||m.includes("Usage:"))continue;let e={type:"string"};if(m.includes("no-aliases"))continue;let f=m.split(":").slice(1).join(":").trim();if(f&&(e.description=f.replace(/\[default: '[^']+'\]/,"").replace(/\(use --[^)]+\)/,"").trim()),/^\s*[a-zA-Z0-9_-]+\s*:\s*.+$/.exec(m)&&!m.startsWith("--")){let[t]=m.split(":");e.name=null!==(a=null==t?void 0:t.trim())&&void 0!==a?a:"",e.type="string",e.isPositional=!0,e.required=!0,e.defaultValue=L(m)}else if(/--[\w-]+(\|--[\w-]+)?\s<[\w-]+>/.exec(m)){let[t]=m.split(":"),a=null===(r=/(-\w, )?--[\w-]+/.exec(null!=t?t:""))||void 0===r?void 0:r[0].split(/,\s+/),s=null==a?void 0:null===(l=a.find(e=>e.startsWith("--")))||void 0===l?void 0:l.replace("--","");e.name=null!=s?s:"",e.type=m.includes("repeatable")?"array":"string",e.defaultValue=L(m)}else if(/--[\w-]+(\|--no-[\w-]+)?/.exec(m)){let t=null===(s=/--[\w-]+(\|--no-[\w-]+)?/.exec(m))||void 0===s?void 0:s[0],a=null!==(i=null==t?void 0:null===(n=t.split("|")[0])||void 0===n?void 0:n.replace("--",""))&&void 0!==i?i:"";e.name=a,e.type="boolean",m.includes("on by default")||!m.includes("off by default")?e.defaultValue=!0:e.defaultValue=!1}else if(/--[\w-]+/.exec(m)){let t=null===(o=/--[\w-]+/.exec(m))||void 0===o?void 0:o[0];e.name=null!==(d=null==t?void 0:t.replace("--",""))&&void 0!==d?d:"",e.type="string",e.defaultValue=L(m)}else if(m.includes("<target>")){let t=/: '([^']+)'\]/.exec(m);e.name="target",e.type="select",e.required=!0,t&&(e.choices=null!==(u=null===(c=t[1])||void 0===c?void 0:c.split("' '"))&&void 0!==u?u:[])}else/^\s*name\s*:\s*.+/.exec(m)&&(e.name="name",e.type="string",e.isPositional=!0,e.required=!0);e.name&&t.push(e)}return t}(t),f=$(u),p=(0,l.mN)({resolver:(0,U.u)(f),defaultValues:u.reduce((e,t)=>{var a;return{...e,[t.name]:null!==(a=t.defaultValue)&&void 0!==a?a:""}},{})}),x=u.sort((e,t)=>e.isPositional?-1:t.isPositional?1:0);return(0,r.jsx)(m,{...p,children:(0,r.jsxs)("form",{onSubmit:p.handleSubmit(e=>{let t=[null!=n?n:""];u.filter(e=>e.isPositional).forEach(a=>{let r=e[a.name];r&&t.push(r)}),u.filter(e=>!e.isPositional).forEach(a=>{let r=e[a.name];null!=r&&("boolean"===a.type?r!==a.defaultValue&&(r?t.push("--".concat(a.name)):t.push("--no-".concat(a.name))):"array"===a.type?("string"==typeof r&&(r=r.split(",").filter(e=>""!==e).map(e=>e.trim())),Array.isArray(r)&&r.length>0&&r.forEach(e=>{t.push("--".concat(a.name," ").concat(e))})):("select"===a.type||"string"===a.type)&&r!==a.defaultValue&&r&&t.push("--".concat(a.name," ").concat(r)))});let r=t.join(" ");null==a||a(e,r)}),className:(0,o.cn)("space-y-6",i>1&&"grid grid-cols-1 md:grid-cols-".concat(i," gap-6")),style:{maxHeight:d?"number"==typeof d?"".concat(d,"px"):d:void 0,overflowY:d?"auto":void 0},children:[(0,r.jsx)("div",{className:"col-span-full",children:(0,r.jsx)(s.$,{type:"submit",children:"as command"})}),x.map((e,t)=>(0,r.jsx)(E,{field:e,control:p.control,className:c,description:e.description},"".concat(e.name,"-").concat(t))),(0,r.jsx)("div",{className:"col-span-full",children:(0,r.jsx)(s.$,{type:"submit",children:"as command"})})]})})}},3312:(e,t,a)=>{a.d(t,{$:()=>d});var r=a(5155),l=a(2115),s=a(2317),n=a(1027),i=a(1567);let o=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=l.forwardRef((e,t)=>{let{className:a,variant:l,size:n,asChild:d=!1,...c}=e,u=d?s.DX:"button";return(0,r.jsx)(u,{className:(0,i.cn)(o({variant:l,size:n,className:a})),ref:t,...c})});d.displayName="Button"},1567:(e,t,a)=>{a.d(t,{cn:()=>s});var r=a(3463),l=a(9795);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,l.QP)((0,r.$)(t))}}}]);