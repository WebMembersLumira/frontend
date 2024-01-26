import{_ as v,j as y,o as l,c as r,d as a,f as h,A as w,B as S,t as p,w as _,e as g,v as m,F as L,D as R,b as d,N as j,G as C,E as f,y as A,z as D}from"./index-4e9f2d5a.js";import{C as I}from"./ChatMe-51c105dd.js";const i=e=>(A("data-v-8a188e57"),e=e(),D(),e),B={id:"wrapper"},T={id:"content-wrapper",class:"d-flex flex-column"},z={id:"content"},U=i(()=>a("h1",{class:"h3 mb-0 text-gray-800 text-center mt-4"},"Layanan",-1)),N={class:"container"},V={class:"row"},F={class:"col-sm-6"},J=i(()=>a("button",{class:"btn btn-warning mb-3 mt-5","data-toggle":"modal","data-target":"#updateLayanan"}," Atur Layanan ",-1)),M=i(()=>a("button",{class:"btn btn-primary mb-3 mt-5 ms-3","data-toggle":"modal","data-target":"#updateRekening"}," Atur Rekening ",-1)),x=i(()=>a("div",{class:"col-sm-6"},null,-1)),P={class:"d-flex justify-content-center"},E=["src"],O={key:1},H={class:"modal fade",id:"updateLayanan",tabindex:"-1",role:"dialog","aria-labelledby":"updateLayananLabel","aria-hidden":"true",ref:"updateLayananRef"},K={class:"modal-dialog",role:"document"},q={class:"modal-content"},G=i(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"addInvoiceModalLabel"},"Update Layanan"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),W={class:"modal-body"},Q={class:"form-group"},X=i(()=>a("label",{for:"link"},"Judul",-1)),Y={class:"form-group"},Z=i(()=>a("label",{for:"link"},"Link",-1)),aa=i(()=>a("div",{class:"modal-footer"},[a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),a("button",{type:"submit",class:"btn btn-primary"},"Simpan")],-1)),ea={class:"modal fade",id:"updateRekening",tabindex:"-1",role:"dialog","aria-labelledby":"updateRekeningLabel","aria-hidden":"true",ref:"updateRekeningRef"},ta={class:"modal-dialog",role:"document"},na={class:"modal-content"},oa=i(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"addInvoiceModalLabel"},"Update Rekening"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),sa={class:"modal-body"},ia={class:"form-group"},la=i(()=>a("label",{for:"rekPenerima"},"Rekening Penerima",-1)),ra=i(()=>a("div",{class:"modal-footer"},[a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),a("button",{type:"submit",class:"btn btn-primary"},"Simpan")],-1)),da={class:"modal fade",id:"aturLangganan",tabindex:"-1",role:"dialog","aria-labelledby":"aturLanggananLabel","aria-hidden":"true",ref:"aturLanggananRef"},ga={class:"modal-dialog",role:"document"},ma={class:"modal-content"},ca=i(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"aturLangganan"},"Atur Langganan"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),ua={class:"modal-body"},ha={key:0,class:"table table-striped m-auto"},pa=i(()=>a("thead",null,[a("tr",null,[a("th",{scope:"col"},"No"),a("th",{scope:"col"},"Jenis Langganan"),a("th",{scope:"col"},"Harga"),a("th",{scope:"col"},"Aksi")])],-1)),ba={scope:"row"},_a=["onClick"],fa=i(()=>a("i",{class:"bi bi-trash-fill"},null,-1)),ka=[fa],ya={key:1},La=i(()=>a("h5",{class:"mt-5 mb-2 text-center fw-bold"},"Tambah Jenis Langganan",-1)),va={class:"form-group"},wa=i(()=>a("label",{for:"jenisLangganan"},"Jenis Langganan",-1)),Sa={class:"form-group"},Ra=i(()=>a("label",{for:"harga"},"Harga",-1)),ja=i(()=>a("div",{class:"modal-footer"},[a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),a("button",{type:"submit",class:"btn btn-primary"},"Simpan")],-1)),Ca={data(){return{user_id:null,role:null,ready:!1,link:null,formLink:{judul:"",link:""},formRekening:{rekening_penerima:""},formLangganan:{jenis_langganan:"",harga:""},listLangganan:[],langgananReady:!1}},methods:{setLink(){const e=new FormData;e.append("judul",this.formLink.judul),e.append("link",this.formLink.link),d.post("https://backend-webmember.lumirainternational.com/api/auth/set-link",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(o=>{console.log(o.data),this.formLink.judul="",this.formLink.link="",this.showAlert(),this.ready=!1,this.getLink()}).catch(o=>{console.error(o)})},setRekening(){const e=new FormData;e.append("rekening_tujuan",this.formRekening.rekening_penerima),d.post("https://backend-webmember.lumirainternational.com/api/auth/set-rekening",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(o=>{console.log(o.data),this.formRekening.rekening_penerima="",this.showAlert()}).catch(o=>{console.error(o)})},async getLink(){try{const e=await d.get("https://backend-webmember.lumirainternational.com/api/auth/get-link",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});console.log("link: ",e.data.data[0].link),this.link=e.data.data[0].link,this.ready=!0}catch(e){console.error(e)}},setLangganan(){const e=new FormData;e.append("jenis_langganan",this.formLangganan.jenis_langganan),e.append("harga",this.formLangganan.harga),d.post("https://backend-webmember.lumirainternational.com/api/auth/set-langganan",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(o=>{this.formLangganan.jenis_langganan="",this.formLangganan.harga="",this.showAlert()}).catch(o=>{console.error(o)})},deleteLangganan(e){d.post(`https://backend-webmember.lumirainternational.com/api/auth/delete-langganan/${e}`,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(o=>{this.langgananReady=!1,this.getLangganan()}).catch(o=>{console.error(o)})},async getLangganan(){try{const e=await d.get("https://backend-webmember.lumirainternational.com/api/auth/list-langganan",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.listLangganan=e.data.data,this.langgananReady=!0}catch(e){console.error(e)}},showAlert(){this.$swal({title:"Request Success",text:"Data Berhasil Dikirim!",icon:"success"}).then(()=>{$("#updateLayanan").modal("hide"),$("#updateRekening").modal("hide"),$("#aturLangganan").modal("hide")})}},created(){const e=sessionStorage.getItem("token");if(e)try{const[o,c]=e.split("."),b=JSON.parse(atob(o)),t=atob(c),n=JSON.parse(atob(e.split(".")[1])),s=n.exp,u=new Date(s*1e3);console.log("Waktu Kedaluwarsa (UTC):",u.toUTCString()),new Date>u?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const k=n.level;this.user_id=n.id,console.log("ini idddd:",this.user_id),k!=="1"?this.$router.push("/unauthorized"):(!b||!t)&&this.$router.push("/"),this.getLink()}catch(o){console.error("Error decoding token:",o),this.$router.push("/")}else this.$router.push("/")}},Aa=Object.assign(Ca,{__name:"Layanan",setup(e){const o=y(!1),c=y(""),b=()=>{o.value=!o.value,c.value=o.value?"toggle-sidebar":""};return(t,n)=>(l(),r(L,null,[a("div",B,[h(S,{class:w(c.value)},null,8,["class"]),a("div",T,[a("div",z,[h(j,{onToggleSidebar:b}),h(I),U,a("div",N,[a("div",V,[a("div",F,[J,M,a("button",{class:"btn btn-primary mb-3 mt-5 ms-3","data-toggle":"modal","data-target":"#aturLangganan",onClick:n[0]||(n[0]=s=>t.getLangganan())}," Atur Langganan ")]),x]),a("div",P,[t.ready?(l(),r("iframe",{key:0,src:t.link,width:"100%",height:"500px",frameborder:"0",allowfullscreen:""},null,8,E)):p("",!0),t.ready?p("",!0):(l(),r("p",O,"Loading..."))])])]),h(C)])]),a("div",H,[a("div",K,[a("div",q,[G,a("div",W,[a("form",{onSubmit:n[3]||(n[3]=_(s=>t.setLink(),["prevent"]))},[a("div",Q,[X,g(a("input",{type:"text",class:"form-control",id:"judul","onUpdate:modelValue":n[1]||(n[1]=s=>t.formLink.judul=s)},null,512),[[m,t.formLink.judul]])]),a("div",Y,[Z,g(a("input",{type:"text",class:"form-control",id:"link","onUpdate:modelValue":n[2]||(n[2]=s=>t.formLink.link=s)},null,512),[[m,t.formLink.link]])]),aa],32)])])])],512),a("div",ea,[a("div",ta,[a("div",na,[oa,a("div",sa,[a("form",{onSubmit:n[5]||(n[5]=_(s=>t.setRekening(),["prevent"]))},[a("div",ia,[la,g(a("input",{type:"text",class:"form-control",id:"rekPenerima","onUpdate:modelValue":n[4]||(n[4]=s=>t.formRekening.rekening_penerima=s)},null,512),[[m,t.formRekening.rekening_penerima]])]),ra],32)])])])],512),a("div",da,[a("div",ga,[a("div",ma,[ca,a("div",ua,[t.langgananReady?(l(),r("table",ha,[pa,a("tbody",null,[(l(!0),r(L,null,R(t.listLangganan,(s,u)=>(l(),r("tr",{key:s.id},[a("th",ba,f(u+1),1),a("td",null,f(s.jenis_langganan),1),a("td",null,f(s.harga),1),a("td",null,[a("button",{class:"btn btn-danger",onClick:k=>t.deleteLangganan(s.id)},ka,8,_a)])]))),128))])])):p("",!0),t.langgananReady?p("",!0):(l(),r("p",ya,"Loading...")),La,a("form",{onSubmit:n[8]||(n[8]=_(s=>t.setLangganan(),["prevent"]))},[a("div",va,[wa,g(a("input",{type:"text",class:"form-control",id:"jenisLangganan","onUpdate:modelValue":n[6]||(n[6]=s=>t.formLangganan.jenis_langganan=s)},null,512),[[m,t.formLangganan.jenis_langganan]])]),a("div",Sa,[Ra,g(a("input",{type:"text",class:"form-control",id:"harga","onUpdate:modelValue":n[7]||(n[7]=s=>t.formLangganan.harga=s)},null,512),[[m,t.formLangganan.harga]])]),ja],32)])])])],512)],64))}}),Ia=v(Aa,[["__scopeId","data-v-8a188e57"]]);export{Ia as default};
