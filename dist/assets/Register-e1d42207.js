import{_ as c,S as n,b as m,r as u,o as p,c as h,d as e,w as b,e as r,v as i,f,g as _,h as g}from"./index-c1f85e6e.js";const k={mounted(){const a=document.querySelector("body");a.style.backgroundImage="url(/img/bg.webp)",a.style.backgroundRepeat="no-repeat",a.style.backgroundSize="cover"},data(){return{name:null,email:null,noHp:null,metodePembayaran:""}},methods:{registerUser(){if(this.name==null||this.email==null||this.noHp==null)n.fire({icon:"error",title:"Oops...",text:"Terdapat data yang belum anda isi, mohon lengkapi semua data seblum mendaftar!!",confirmButtonText:"OK"});else{const a=new FormData;a.append("name",this.name),a.append("email",this.email),a.append("no_hp",this.noHp),m.post("https://backend-webmember.lumirainternational.com/api/auth/register",a).then(t=>{console.log(t.data),t.status===201?n.fire({icon:"success",title:"Pendaftaran berhasil!",text:"Silahkan cek email untuk aktivasi akun.",confirmButtonText:"OK"}).then(()=>{this.$router.push("/")}):t.status===400?n.fire({icon:"error",title:"Oops...",text:"Email atau nomor hp yang anda inputkan sama, data dilarang sama!!"}):n.fire({icon:"error",title:"Oops...",text:"Terjadi kesalahan saat mendaftar."})}).catch(t=>{console.error(t),t.response&&t.response.status===400?n.fire({icon:"error",title:"Oops...",text:"Email atau nomor hp yang anda inputkan sama, data dilarang sama!!"}):n.fire({icon:"error",title:"Oops...",text:"Terjadi kesalahan saat mendaftar."})})}}}},y={class:"container"},x={class:"card o-hidden border-0 shadow-lg my-5"},v={class:"card-body p-0"},w={class:"row"},H=e("div",{class:"col-lg-5 d-none d-lg-block bg-register-image"},null,-1),O={class:"col-lg-7"},S={class:"p-5"},T=e("div",{class:"text-center"},[e("h1",{class:"h4 text-gray-900 mb-4"},"Buat Akun!")],-1),B={class:"form-group"},U={class:"input-group mb-2"},V=e("div",{class:"input-group-prepend"},[e("span",{class:"input-group-text"},"+62")],-1),D=e("button",{type:"submit",class:"btn btn-primary btn-user btn-block"}," Daftar ",-1),M=e("hr",null,null,-1),E={class:"text-center"};function N(a,t,j,C,o,l){const d=u("router-link");return p(),h("div",y,[e("div",x,[e("div",v,[e("div",w,[H,e("div",O,[e("div",S,[T,e("form",{class:"user",onSubmit:t[3]||(t[3]=b((...s)=>l.registerUser&&l.registerUser(...s),["prevent"]))},[e("div",B,[r(e("input",{type:"text",class:"form-control form-control-user mb-2",id:"name","aria-describedby":"name",placeholder:"Masukkan nama","onUpdate:modelValue":t[0]||(t[0]=s=>o.name=s)},null,512),[[i,o.name]]),r(e("input",{type:"email",class:"form-control form-control-user mb-2",id:"email","aria-describedby":"email",placeholder:"Masukkan email","onUpdate:modelValue":t[1]||(t[1]=s=>o.email=s)},null,512),[[i,o.email]]),e("div",U,[V,r(e("input",{type:"number",class:"form-control form-control-user",id:"noHp","aria-describedby":"noHp",placeholder:"8972398127391","onUpdate:modelValue":t[2]||(t[2]=s=>o.noHp=s)},null,512),[[i,o.noHp]])])]),D],32),M,e("div",E,[f(d,{class:"small",to:"/login"},{default:_(()=>[g("Sudah punya akun? Login!")]),_:1})])])])])])])])}const P=c(k,[["render",N]]);export{P as default};
