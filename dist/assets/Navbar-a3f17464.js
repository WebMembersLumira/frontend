import{_ as i,S as a,b as d,o as l,c,d as e,w as u,E as g,h as m,A as h}from"./index-5f3ab893.js";const p={props:{sidebarToggled:Boolean},data(){return{name:"",gambar:"",user_id:"",darkMode:!1}},methods:{changeTheme(){this.darkMode=!this.darkMode;const t=JSON.stringify(this.darkMode);localStorage.setItem("darkMode",t)},sidebarToggled(){this.$emit("toggle-sidebar",!this.sidebarToggled)},konfirmasi(){a.fire({title:"Apakah Anda yakin ingin logout?",text:"Anda akan keluar dari akun ini.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#061387",confirmButtonText:"Logout",cancelButtonText:"Batal"}).then(t=>{t.isConfirmed&&this.logout()})},logout(){const t=sessionStorage.getItem("token");if(!t){a.fire({title:"Logout gagal",text:"Token tidak ditemukan.",icon:"error",confirmButtonColor:"#d33"});return}d.post("https://backend.alicornbot.com/api/auth/logout",null,{headers:{Authorization:"Bearer "+t}}).then(o=>{a.fire({title:"Logout berhasil!",icon:"success",timer:1500,timerProgressBar:!0,showConfirmButton:!1}),sessionStorage.removeItem("token"),this.$router.push("/")}).catch(o=>{console.error(o),a.fire({title:"Logout gagal",text:"Terjadi kesalahan saat melakukan logout.",icon:"error",confirmButtonColor:"#d33"})})}},created(){const t=sessionStorage.getItem("token");if(t)try{const o=JSON.parse(atob(t.split(".")[1]));this.name=o.name,this.user_id=o.id,this.gambar=o.gambar}catch(o){console.error("Error decoding token:",o),this.$router.push("/")}else this.$router.push("/")}},_=e("i",{class:"fa fa-bars"},null,-1),b=[_],f={class:"navbar-nav ml-auto"},k=e("div",{class:"topbar-divider d-none d-sm-block"},null,-1),v={class:"nav-item dropdown no-arrow"},w={class:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},x={class:"mr-2 d-none d-lg-inline text-white small"},B={class:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},T=e("i",{class:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"},null,-1);function y(t,o,C,S,n,s){return l(),c("nav",{class:h(["customNav navbar navbar-expand navbar-light topbar static-top shadow",n.darkMode?"bg-black":"bgCustom"])},[e("form",{class:"form-inline",onSubmit:o[1]||(o[1]=u(()=>{},["prevent"]))},[e("button",{id:"sidebarToggleTop",class:"btn btn-link d-md-none rounded-circle mr-3 text-light",onClick:o[0]||(o[0]=(...r)=>s.sidebarToggled&&s.sidebarToggled(...r))},b)],32),e("ul",f,[k,e("li",v,[e("a",w,[e("span",x,g(this.name),1)]),e("div",B,[e("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal",onClick:o[2]||(o[2]=r=>s.konfirmasi())},[T,m(" Logout ")])])])])],2)}const N=i(p,[["render",y]]);export{N};