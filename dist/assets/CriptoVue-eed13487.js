import{C as i}from"./index-ea88107a.js";import{_ as c,b as l,o as p,c as d,d as o,G as g}from"./index-734b0cc5.js";import"./_commonjs-dynamic-modules-302442b1.js";const V={data(){return{uniqueValue:""}},methods:{async generateUniqueValue(){try{const e=(await l.get("https://api.ipify.org?format=json")).data.ip,n=navigator.userAgent,a=`${e}${n}`,r=i.SHA256(a).toString();this.uniqueValue=r}catch(t){console.error("Error getting IP address:",t)}}}};function f(t,e,n,a,r,s){return p(),d("div",null,[o("button",{onClick:e[0]||(e[0]=(...u)=>s.generateUniqueValue&&s.generateUniqueValue(...u))},"Generate Unique Value"),o("p",null,"Unique Value: "+g(r.uniqueValue),1)])}const h=c(V,[["render",f]]);export{h as default};
