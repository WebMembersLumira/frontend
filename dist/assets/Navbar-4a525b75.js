import{_ as i,S as a,b as d,o as l,c,d as o,w as u,E as g,h as m,A as h}from"./index-add1aecc.js";const p={props:{sidebarToggled:Boolean},data(){return{name:"",gambar:"",user_id:"",darkMode:!1}},methods:{changeTheme(){this.darkMode=!this.darkMode;const t=JSON.stringify(this.darkMode);localStorage.setItem("darkMode",t)},sidebarToggled(){this.$emit("toggle-sidebar",!this.sidebarToggled)},konfirmasi(){a.fire({title:"Apakah Anda yakin ingin logout?",text:"Anda akan keluar dari akun ini.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#061387",confirmButtonText:"Logout",cancelButtonText:"Batal"}).then(t=>{t.isConfirmed&&this.logout()})},logout(){const t=sessionStorage.getItem("token");if(!t){a.fire({title:"Logout gagal",text:"Token tidak ditemukan.",icon:"error",confirmButtonColor:"#d33"});return}d.post("https://backend-webmember.lumirainternational.com/api/auth/logout",null,{headers:{Authorization:"Bearer "+t}}).then(e=>{a.fire({title:"Logout berhasil!",icon:"success",timer:1500,timerProgressBar:!0,showConfirmButton:!1}),sessionStorage.removeItem("token"),this.$router.push("/")}).catch(e=>{console.error(e),a.fire({title:"Logout gagal",text:"Terjadi kesalahan saat melakukan logout.",icon:"error",confirmButtonColor:"#d33"})})}},created(){const t=sessionStorage.getItem("token");if(t)try{const e=JSON.parse(atob(t.split(".")[1]));this.name=e.name,this.user_id=e.id,this.gambar=e.gambar}catch(e){console.error("Error decoding token:",e),this.$router.push("/")}else this.$router.push("/")}},_=o("i",{class:"fa fa-bars"},null,-1),b=[_],f={class:"navbar-nav ml-auto"},k=o("div",{class:"topbar-divider d-none d-sm-block"},null,-1),v={class:"nav-item dropdown no-arrow"},w={class:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},x={class:"mr-2 d-none d-lg-inline text-white small"},B={class:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},T=o("i",{class:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"},null,-1);function y(t,e,C,S,n,s){return l(),c("nav",{class:h(["customNav navbar navbar-expand navbar-light topbar static-top shadow",n.darkMode?"bg-black":"bgCustom"])},[o("form",{class:"form-inline",onSubmit:e[1]||(e[1]=u(()=>{},["prevent"]))},[o("button",{id:"sidebarToggleTop",class:"btn btn-link d-md-none rounded-circle mr-3 text-light",onClick:e[0]||(e[0]=(...r)=>s.sidebarToggled&&s.sidebarToggled(...r))},b)],32),o("ul",f,[k,o("li",v,[o("a",w,[o("span",x,g(this.name),1)]),o("div",B,[o("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal",onClick:e[2]||(e[2]=r=>s.konfirmasi())},[T,m(" Logout ")])])])])],2)}const N=i(p,[["render",y]]);export{N};
