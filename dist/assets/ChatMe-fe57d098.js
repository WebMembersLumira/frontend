import{_ as l,o as d,c as r,e as p,v as m,d as o,t as _,A as g,y as x,z as w}from"./index-8b49ea4c.js";const C={data(){return{showChatBox:!1,message:"",phoneNumber:"6281232357173",nama:"",lokasi:""}},methods:{toggleChatBox(){this.showChatBox=!this.showChatBox,this.showChatBox||(this.message="")},async sendMessage(){const e=encodeURIComponent(this.message),s=sessionStorage.getItem("token");if(s)try{const t=JSON.parse(atob(s.split(".")[1]));this.nama=t.name,this.lokasi=t.namaLokasi;const h=`https://wa.me/${this.phoneNumber}?text=Nama%3A%20${this.nama}%0ALokasi%3A%20${this.lokasi}%0APath%3A%20${this.$route.path}%0APesan%3A%20${e}`;window.open(h,"_blank"),this.message="",this.toggleChatBox()}catch(t){console.error("Error decoding token:",t)}else{const t=`https://wa.me/${this.phoneNumber}?text=${e}`;window.open(t,"_blank"),this.message="",this.toggleChatBox()}}},created(){}},c=e=>(x("data-v-60dd3da6"),e=e(),w(),e),u={class:"chat-container"},k={key:0,class:"chat-box"},B=c(()=>o("div",{class:"text-primary fw-bold"},"Halo, ada yang bisa dibantu?",-1)),f=c(()=>o("i",{class:"fab fa-whatsapp"},null,-1)),b=[f];function v(e,s,t,h,n,i){return d(),r("div",u,[n.showChatBox?(d(),r("div",k,[B,p(o("textarea",{class:"form-control",id:"chat","onUpdate:modelValue":s[0]||(s[0]=a=>n.message=a),rows:"2"},null,512),[[m,n.message]]),o("button",{onClick:s[1]||(s[1]=(...a)=>i.sendMessage&&i.sendMessage(...a)),class:"float-end"},"Kirim")])):_("",!0),o("div",{class:g(["whatsapp-icon",{active:n.showChatBox}]),onClick:s[2]||(s[2]=(...a)=>i.toggleChatBox&&i.toggleChatBox(...a))},b,2)])}const A=l(C,[["render",v],["__scopeId","data-v-60dd3da6"]]);export{A as C};
