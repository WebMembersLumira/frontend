import{_ as w,k as v,o as n,c as l,g as p,B as f,C as y,d as e,x as c,p as S,h as x,D as C,b,S as B,N as D,F as T,E as I,G as g,H as U,z as N,A}from"./index-734b0cc5.js";import{P as k,D as $}from"./jquery.dataTables-5e1378cc.js";const i=t=>(N("data-v-692d0da7"),t=t(),A(),t),V={id:"wrapper"},z={id:"content-wrapper",class:"d-flex flex-column"},E={id:"content"},F=i(()=>e("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Halaman User",-1)),K={class:"row"},O=i(()=>e("div",{class:"col-1"},null,-1)),H={class:"col-10"},J=i(()=>e("div",{class:"row mt-5"},[e("div",{class:"col-sm-3"}),e("div",{class:"col-sm-9"})],-1)),P={class:"table-responsive"},W={key:0,class:"preloader"},j=i(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"No"),e("th",{scope:"col"},"Nama"),e("th",{scope:"col"},"Email"),e("th",{scope:"col"},"Status"),e("th",{scope:"col"},"Aksi")])],-1)),G={scope:"row"},L={key:0,class:"bi bi-hourglass-split text-warning"},Y={key:1,class:"bi bi-check-lg text-success"},q={key:2,class:"bi bi-x-lg text-danger"},M={class:"pe-5"},Q={class:"row"},R={class:"col-4"},X=["href"],Z=i(()=>e("i",{class:"fab fa-whatsapp"},null,-1)),ee=[Z],se={class:"col-4"},te=["onClick"],oe=i(()=>e("i",{class:"bi bi-x-circle"},null,-1)),ae=[oe],ne=i(()=>e("div",{class:"col-1"},null,-1));k.use($);const le={data(){return{user:[],ready:null}},methods:{async fetchData(){const t=await b.get("http://localhost:8000/api/auth/list-user",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.user=t.data.data,this.ready=!0},confirmDelete(t){B.fire({title:"Konfirmasi",text:"Apakah Anda yakin ingin menghapus item ini?",icon:"warning",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak"}).then(s=>{s.isConfirmed&&this.deleteItem(t)})},deleteItem(t){b.delete(`http://localhost:8000/api/auth/user/${t}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(s=>{console.log(s.data),this.ready=!1,this.fetchData()}).catch(s=>{console.error(s)})}},created(){const t=new Date().toUTCString();console.log("Waktu Sekarang (UTC):",t);const s=sessionStorage.getItem("token");if(s)try{const[r,u]=s.split("."),a=JSON.parse(atob(r)),h=atob(u),o=JSON.parse(atob(s.split(".")[1])),_=o.exp,d=new Date(_*1e3);console.log("Waktu Kedaluwarsa (UTC):",d.toUTCString()),new Date>d?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const m=o.level;console.log("level:",m),m!=="1"?this.$router.push("/unauthorized"):(!a||!h)&&(this.$router.push("/"),sessionStorage.removeItem("token")),this.fetchData()}catch(r){console.error("Error decoding token:",r),this.$router.push("/")}else this.$router.push("/")}},ie=Object.assign(le,{__name:"UserView",setup(t){const s=v(!1),r=v(""),u=()=>{s.value=!s.value,r.value=s.value?"toggle-sidebar":""};return(a,h)=>(n(),l("div",V,[p(y,{class:f(r.value)},null,8,["class"]),e("div",z,[e("div",E,[p(D,{onToggleSidebar:u}),F,e("div",K,[O,e("div",H,[J,e("div",P,[a.ready?c("",!0):(n(),l("div",W)),a.ready?(n(),S(C(k),{key:1,class:"display table table-striped"},{default:x(()=>[j,e("tbody",null,[(n(!0),l(T,null,I(a.user,(o,_)=>(n(),l("tr",{key:o.id},[e("th",G,g(_+1),1),e("td",null,g(o.name),1),e("td",null,g(o.email),1),e("td",null,[o.status=="0"?(n(),l("i",L)):c("",!0),o.status=="1"?(n(),l("i",Y)):c("",!0),o.status=="2"?(n(),l("i",q)):c("",!0)]),e("td",M,[e("div",Q,[e("div",R,[e("a",{target:"_blank",href:"https://api.whatsapp.com/send?phone="+o.telp},[e("div",{class:f(["whatsapp-icon",{active:a.showChatBox}]),onClick:h[0]||(h[0]=(...d)=>a.toggleChatBox&&a.toggleChatBox(...d))},ee,2)],8,X)]),e("div",se,[o.role!="admin"?(n(),l("button",{key:0,onClick:d=>a.confirmDelete(o.id),class:"btn btn-danger customDetail"},ae,8,te)):c("",!0)])])])]))),128))])]),_:1})):c("",!0)])]),ne])]),p(U)])]))}}),de=w(ie,[["__scopeId","data-v-692d0da7"]]);export{de as default};
