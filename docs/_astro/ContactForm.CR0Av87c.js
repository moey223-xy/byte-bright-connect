import{r as S,a as u}from"./index._OACqPSs.js";var b={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function C(){if(y)return x;y=1;var n=S(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(c,t,h){var s,m={},p=null,g=null;h!==void 0&&(p=""+h),t.key!==void 0&&(p=""+t.key),t.ref!==void 0&&(g=t.ref);for(s in t)l.call(t,s)&&!i.hasOwnProperty(s)&&(m[s]=t[s]);if(c&&c.defaultProps)for(s in t=c.defaultProps,t)m[s]===void 0&&(m[s]=t[s]);return{$$typeof:r,type:c,key:p,ref:g,props:m,_owner:d.current}}return x.Fragment=o,x.jsx=a,x.jsxs=a,x}var j;function I(){return j||(j=1,b.exports=C()),b.exports}var e=I();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N=(...n)=>n.filter((r,o,l)=>!!r&&r.trim()!==""&&l.indexOf(r)===o).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=u.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:d="",children:i,iconNode:a,...c},t)=>u.createElement("svg",{ref:t,..._,width:r,height:r,stroke:n,strokeWidth:l?Number(o)*24/Number(r):o,className:N("lucide",d),...c},[...a.map(([h,s])=>u.createElement(h,s)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(n,r)=>{const o=u.forwardRef(({className:l,...d},i)=>u.createElement(R,{ref:i,iconNode:r,className:N(`lucide-${k(n)}`,l),...d}));return o.displayName=`${n}`,o};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=w("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=w("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),O="https://hnohdigalvhjchuocpjz.supabase.co",F="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhub2hkaWdhbHZoamNodW9jcGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NDI2NDEsImV4cCI6MjA4NTUxODY0MX0.h6oxN6V9K2y2vHQKjUYHzz59k8Aieqgk91MRgqi-ZI4",v={name:"",email:"",business:"",message:""},f="mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-base focus:border-[#2978F2] focus:outline-none focus:ring-1 focus:ring-[#2978F2]",q=()=>{const[n,r]=u.useState(!1),[o,l]=u.useState(!1),[d,i]=u.useState(null),[a,c]=u.useState(v),t=s=>{c({...a,[s.target.name]:s.target.value})},h=async s=>{if(s.preventDefault(),i(null),!a.name||!a.email||!a.message){i("Please fill in all required fields.");return}r(!0);try{const m=await fetch(`${O}/functions/v1/send-contact-email`,{method:"POST",headers:{"Content-Type":"application/json",apikey:F,Authorization:`Bearer ${F}`},body:JSON.stringify(a)});if(!m.ok)throw new Error(`Request failed with status ${m.status}`);l(!0),c(v)}catch(m){console.error("Error sending message:",m),i("Failed to send your message. Please try again or contact us directly at info@bigbytetech.com.au.")}finally{r(!1)}};return o?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(E,{className:"h-8 w-8 text-green-600"})}),e.jsx("h3",{className:"text-2xl font-bold text-[#1F1F1F] mb-4",children:"Message Sent!"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for reaching out. We'll get back to you as soon as possible."}),e.jsx("button",{onClick:()=>l(!1),className:"inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors",children:"Send Another Message"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-2xl font-bold text-[#1F1F1F] mb-6",children:"Send us a message"}),e.jsxs("form",{onSubmit:h,className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"text-[#1F1F1F] font-semibold text-sm",children:"Name *"}),e.jsx("input",{id:"name",name:"name",value:a.name,onChange:t,className:f,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"text-[#1F1F1F] font-semibold text-sm",children:"Email *"}),e.jsx("input",{id:"email",name:"email",type:"email",value:a.email,onChange:t,className:f,required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"business",className:"text-[#1F1F1F] font-semibold text-sm",children:"Business Name"}),e.jsx("input",{id:"business",name:"business",value:a.business,onChange:t,className:f})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"text-[#1F1F1F] font-semibold text-sm",children:"Brief IT Need *"}),e.jsx("textarea",{id:"message",name:"message",value:a.message,onChange:t,rows:4,className:f,placeholder:"Tell us about your IT challenges or goals...",required:!0})]}),d&&e.jsx("p",{className:"text-sm text-red-600",role:"alert",children:d}),e.jsx("button",{type:"submit",disabled:n,className:"w-full inline-flex items-center justify-center bg-[#2978F2] hover:bg-[#1F5FD4] text-white py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",children:n?e.jsxs(e.Fragment,{children:[e.jsx(A,{className:"mr-2 h-5 w-5 animate-spin"}),"Sending..."]}):"Send Message"})]})]})};export{q as default};
