import{_ as v,j as k,o as l,c as r,d as a,f as h,A as w,B as S,t as b,w as _,e as g,v as c,F as y,D as R,b as d,N as j,G as C,E as f,y as A,z as D}from"./index-5f3ab893.js";import{C as B}from"./ChatMe-7968d3bc.js";const i=e=>(A("data-v-191adff0"),e=e(),D(),e),I={id:"wrapper"},T={id:"content-wrapper",class:"d-flex flex-column"},z={id:"content"},U=i(()=>a("h1",{class:"h3 mb-0 text-gray-800 text-center mt-4"},"Layanan",-1)),x={class:"container"},N={class:"row"},V={class:"col-sm-6"},F=i(()=>a("button",{class:"btn btn-warning mb-3 mt-5","data-toggle":"modal","data-target":"#updateLayanan"}," Atur Layanan ",-1)),J=i(()=>a("button",{class:"btn btn-primary mb-3 mt-5 ms-3","data-toggle":"modal","data-target":"#updateRekening"}," Atur Rekening ",-1)),M=i(()=>a("div",{class:"col-sm-6"},null,-1)),E={class:"d-flex justify-content-center"},K=["data"],P=i(()=>a("p",null,"Browser tidak mendukung.",-1)),O=[P],H={key:0},q={class:"modal fade",id:"updateLayanan",tabindex:"-1",role:"dialog","aria-labelledby":"updateLayananLabel","aria-hidden":"true",ref:"updateLayananRef"},G={class:"modal-dialog",role:"document"},W={class:"modal-content"},Q=i(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"addInvoiceModalLabel"},"Update Layanan"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),X={class:"modal-body"},Y={class:"form-group"},Z=i(()=>a("label",{for:"link"},"Judul",-1)),aa={class:"form-group"},ea=i(()=>a("label",{for:"link"},"Link",-1)),ta=i(()=>a("div",{class:"modal-footer"},[a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),a("button",{type:"submit",class:"btn btn-primary"},"Simpan")],-1)),na={class:"modal fade",id:"updateRekening",tabindex:"-1",role:"dialog","aria-labelledby":"updateRekeningLabel","aria-hidden":"true",ref:"updateRekeningRef"},oa={class:"modal-dialog",role:"document"},sa={class:"modal-content"},ia=i(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"addInvoiceModalLabel"},"Update Rekening"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),la={class:"modal-body"},ra={class:"form-group"},da=i(()=>a("label",{for:"rekPenerima"},"Rekening Penerima",-1)),ga=i(()=>a("div",{class:"modal-footer"},[a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),a("button",{type:"submit",class:"btn btn-primary"},"Simpan")],-1)),ca={class:"modal fade",id:"aturLangganan",tabindex:"-1",role:"dialog","aria-labelledby":"aturLanggananLabel","aria-hidden":"true",ref:"aturLanggananRef"},ua={class:"modal-dialog",role:"document"},ma={class:"modal-content"},ha=i(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"aturLangganan"},"Atur Langganan"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),pa={class:"modal-body"},ba={key:0,class:"table table-striped m-auto"},_a=i(()=>a("thead",null,[a("tr",null,[a("th",{scope:"col"},"No"),a("th",{scope:"col"},"Jenis Langganan"),a("th",{scope:"col"},"Harga")])],-1)),fa={scope:"row"},ka={key:1},ya=i(()=>a("h5",{class:"mt-5 mb-2 text-center fw-bold"},"Tambah Jenis Langganan",-1)),La={class:"form-group"},va=i(()=>a("label",{for:"jenisLangganan"},"Jenis Langganan",-1)),wa={class:"form-group"},Sa=i(()=>a("label",{for:"harga"},"Harga",-1)),Ra=i(()=>a("div",{class:"modal-footer"},[a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),a("button",{type:"submit",class:"btn btn-primary"},"Simpan")],-1));document.addEventListener("contextmenu",function(e){e.preventDefault()});document.onkeydown=function(e){if(e.keyCode==123)return!1;if(e.ctrlKey&&e.shiftKey&&e.keyCode==73)return!1};const ja={data(){return{user_id:null,role:null,ready:!1,link:null,formLink:{judul:"",link:""},formRekening:{rekening_penerima:""},formLangganan:{jenis_langganan:"",harga:""},listLangganan:[],langgananReady:!1}},methods:{setLink(){const e=new FormData;e.append("judul",this.formLink.judul),e.append("link",this.formLink.link),d.post("https://backend.alicornbot.com/api/auth/set-link",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(n=>{console.log(n.data),this.formLink.judul="",this.formLink.link="",this.showAlert(),this.ready=!1,this.getLink()}).catch(n=>{console.error(n)})},setRekening(){const e=new FormData;e.append("rekening_tujuan",this.formRekening.rekening_penerima),d.post("https://backend.alicornbot.com/api/auth/set-rekening",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(n=>{console.log(n.data),this.formRekening.rekening_penerima="",this.showAlert()}).catch(n=>{console.error(n)})},async getLink(){try{const e=await d.get("https://backend.alicornbot.com/api/auth/get-link",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});console.log("link: ",e.data.data[0].link),this.link=e.data.data[0].link,this.ready=!0}catch(e){console.error(e)}},setLangganan(){const e=new FormData;e.append("jenis_langganan",this.formLangganan.jenis_langganan),e.append("harga",this.formLangganan.harga),d.post("https://backend.alicornbot.com/api/auth/set-langganan",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(n=>{this.formLangganan.jenis_langganan="",this.formLangganan.harga="",this.showAlert()}).catch(n=>{console.error(n)})},deleteLangganan(e){d.delete(`https://backend.alicornbot.com/api/auth/delete-langganan/${e}`,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(n=>{this.langgananReady=!1,this.getLangganan()}).catch(n=>{console.error(n)})},async getLangganan(){try{const e=await d.get("https://backend.alicornbot.com/api/auth/list-langganan",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.listLangganan=e.data.data,this.langgananReady=!0}catch(e){console.error(e)}},showAlert(){this.$swal({title:"Request Success",text:"Data Berhasil Dikirim!",icon:"success"}).then(()=>{$("#updateLayanan").modal("hide"),$("#updateRekening").modal("hide"),$("#aturLangganan").modal("hide")})}},created(){const e=sessionStorage.getItem("token");if(e)try{const[n,u]=e.split("."),p=JSON.parse(atob(n)),o=atob(u),t=JSON.parse(atob(e.split(".")[1])),s=t.exp,m=new Date(s*1e3);console.log("Waktu Kedaluwarsa (UTC):",m.toUTCString()),new Date>m?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const L=t.level;this.user_id=t.id,console.log("ini idddd:",this.user_id),L!=="1"?this.$router.push("/unauthorized"):(!p||!o)&&this.$router.push("/"),this.getLink()}catch(n){console.error("Error decoding token:",n),this.$router.push("/")}else this.$router.push("/")}},Ca=Object.assign(ja,{__name:"Layanan",setup(e){const n=k(!1),u=k(""),p=()=>{n.value=!n.value,u.value=n.value?"toggle-sidebar":""};return(o,t)=>(l(),r(y,null,[a("div",I,[h(S,{class:w(u.value)},null,8,["class"]),a("div",T,[a("div",z,[h(j,{onToggleSidebar:p}),h(B),U,a("div",x,[a("div",N,[a("div",V,[F,J,a("button",{class:"btn btn-primary mb-3 mt-5 ms-3","data-toggle":"modal","data-target":"#aturLangganan",onClick:t[0]||(t[0]=s=>o.getLangganan())}," Atur Langganan ")]),M]),a("div",E,[a("object",{data:o.link,type:"text/html",width:"100%",height:"500px"},O,8,K),o.ready?b("",!0):(l(),r("p",H,"Loading..."))])])]),h(C)])]),a("div",q,[a("div",G,[a("div",W,[Q,a("div",X,[a("form",{onSubmit:t[3]||(t[3]=_(s=>o.setLink(),["prevent"]))},[a("div",Y,[Z,g(a("input",{type:"text",class:"form-control",id:"judul","onUpdate:modelValue":t[1]||(t[1]=s=>o.formLink.judul=s)},null,512),[[c,o.formLink.judul]])]),a("div",aa,[ea,g(a("input",{type:"text",class:"form-control",id:"link","onUpdate:modelValue":t[2]||(t[2]=s=>o.formLink.link=s)},null,512),[[c,o.formLink.link]])]),ta],32)])])])],512),a("div",na,[a("div",oa,[a("div",sa,[ia,a("div",la,[a("form",{onSubmit:t[5]||(t[5]=_(s=>o.setRekening(),["prevent"]))},[a("div",ra,[da,g(a("input",{type:"text",class:"form-control",id:"rekPenerima","onUpdate:modelValue":t[4]||(t[4]=s=>o.formRekening.rekening_penerima=s)},null,512),[[c,o.formRekening.rekening_penerima]])]),ga],32)])])])],512),a("div",ca,[a("div",ua,[a("div",ma,[ha,a("div",pa,[o.langgananReady?(l(),r("table",ba,[_a,a("tbody",null,[(l(!0),r(y,null,R(o.listLangganan,(s,m)=>(l(),r("tr",{key:s.id},[a("th",fa,f(m+1),1),a("td",null,f(s.jenis_langganan),1),a("td",null,f(s.harga),1)]))),128))])])):b("",!0),o.langgananReady?b("",!0):(l(),r("p",ka,"Loading...")),ya,a("form",{onSubmit:t[8]||(t[8]=_(s=>o.setLangganan(),["prevent"]))},[a("div",La,[va,g(a("input",{type:"text",class:"form-control",id:"jenisLangganan","onUpdate:modelValue":t[6]||(t[6]=s=>o.formLangganan.jenis_langganan=s)},null,512),[[c,o.formLangganan.jenis_langganan]])]),a("div",wa,[Sa,g(a("input",{type:"text",class:"form-control",id:"harga","onUpdate:modelValue":t[7]||(t[7]=s=>o.formLangganan.harga=s)},null,512),[[c,o.formLangganan.harga]])]),Ra],32)])])])],512)],64))}}),Ba=v(Ca,[["__scopeId","data-v-191adff0"]]);export{Ba as default};