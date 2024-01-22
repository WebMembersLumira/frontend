import{_ as y,j as m,o as l,c as d,d as e,f as v,A as w,B,t as u,n as A,g as I,C as S,w as C,e as T,v as D,F as b,b as g,S as x,N,D as j,E as p,G as R,y as z,z as F}from"./index-add1aecc.js";import{P as k,D as M}from"./jquery.dataTables-1fccfb46.js";const r=s=>(z("data-v-f6fa4e8f"),s=s(),F(),s),P={id:"wrapper"},U={id:"content-wrapper",class:"d-flex flex-column"},L={id:"content"},V=r(()=>e("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Pembayaran",-1)),E={class:"row"},J=r(()=>e("div",{class:"col-1"},null,-1)),O={class:"col-10"},K={class:"row mt-5"},W=r(()=>e("div",{class:"col-sm-9"},null,-1)),q={class:"col-sm-3"},G={class:"dropdown"},H=r(()=>e("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Filter ",-1)),Q={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},X={class:"table-responsive"},Y={key:0,class:"preloader"},Z=r(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"No"),e("th",{scope:"col"},"Nama"),e("th",{scope:"col"},"No. HP"),e("th",{scope:"col"},"No. Rekening"),e("th",{scope:"col"},"Jumlah Transfer"),e("th",{scope:"col"},"Bukti Transfer"),e("th",{scope:"col"},"Status"),e("th",{scope:"col"},"Aksi")])],-1)),ee={scope:"row"},te=["src","onClick"],ae={key:0,class:"bg-warning text-white rounded text-center"},se={key:1,class:"bg-success text-white rounded text-center"},oe={key:2,class:"bg-danger rounded text-center"},ne=["onClick"],ie=["onClick"],re=r(()=>e("div",{class:"col-1"},null,-1)),le={class:"modal fade",id:"aturTanggal",tabindex:"-1",role:"dialog","aria-labelledby":"aturTanggalLabel","aria-hidden":"true",ref:"aturTanggalRef"},de={class:"modal-dialog",role:"document"},ce={class:"modal-content"},ue=r(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addInvoiceModalLabel"},"Atur Tanggal"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),he={class:"modal-body"},pe={class:"form-group"},ge=r(()=>e("label",{for:"tanggal"},"Tanggal Berakhir",-1)),_e=r(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),e("button",{type:"submit",class:"btn btn-primary"},"Simpan")],-1)),ve={class:"modal fade",id:"detailBukti",tabindex:"-1",role:"dialog","aria-labelledby":"detailBuktiLabel","aria-hidden":"true",ref:"detailBuktiRef"},me={class:"modal-dialog",role:"document"},be={class:"modal-content"},ke=r(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addInvoiceModalLabel"}," Detail Bukti Transfer "),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),fe={class:"modal-body"},ye=["src"],we=r(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ")],-1));k.use(M);const Be={data(){return{invoices:[],ready:null,user_id:null,path:null,dataAction:{user_id:"",invoice_id:"",status_invoice:"",tanggal_berakhir:""}}},methods:{setDataAction(s,o,i){this.dataAction.user_id=s,this.dataAction.invoice_id=o,this.dataAction.status_invoice=i},async getAllDataInvoice(){try{const s=await g.get("https://backend-webmember.lumirainternational.com/api/auth/list-invoice",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.invoices=s.data.data,this.ready=!0,console.log("ini invoice",this.invoices)}catch(s){console.error(s)}},async getInvoiceByStatus(s){try{this.ready=!1;const o=await g.get(`https://backend-webmember.lumirainternational.com/api/auth/invoice-status/${s}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.invoices=o.data.data,this.ready=!0,console.log("ini invoice",this.invoices)}catch(o){console.error(o)}},detailBukti(s){this.path=s,$("#detailBukti").modal("show")},async aturTanggal(){try{const s=new FormData;s.append("user_id",this.user_id),s.append("invoice_id",this.selectedInvoice),s.append("tanggal_berakhir",this.date);const o=await g.post("https://backend-webmember.lumirainternational.com/api/auth/atur-tanggal",s,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.ready=!1,this.showAlert(),this.getAllDataInvoice(),console.log("ini invoice",this.invoices)}catch(s){console.error(s)}},async actionInvoice(s,o,i,c=null){try{let t=new FormData;t.append("user_id",s),t.append("invoice_id",o),t.append("status_invoice",i),c!=null&&t.append("tanggal_berakhir",c);const n=await g.post("https://backend-webmember.lumirainternational.com/api/auth/action-invoice",t,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});console.log("Invoice berhasil ditolak:",n.data),this.showAlert(),this.ready=!1,this.getAllDataInvoice()}catch(t){console.error("Terjadi kesalahan:",t)}},showAlert(){this.$swal({title:"Request Success",text:"Data Berhasil Dikirim!",icon:"success"}).then(()=>{$("#aturTanggal").modal("hide")})},konfirmasi(s,o,i,c){x.fire({title:`Apakah Anda yakin ingin mereject invoice ${c}?`,text:"Anda akan keluar dari akun ini.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#061387",confirmButtonText:"Reject",cancelButtonText:"Batal"}).then(t=>{t.isConfirmed&&this.actionInvoice(s,o,i)})}},created(){const s=new Date().toUTCString();console.log("Waktu Sekarang (UTC):",s);const o=sessionStorage.getItem("token");if(o)try{const[i,c]=o.split("."),t=JSON.parse(atob(i)),n=atob(c),a=JSON.parse(atob(o.split(".")[1])),_=a.exp,h=new Date(_*1e3);console.log("Waktu Kedaluwarsa (UTC):",h.toUTCString()),new Date>h?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const f=a.level;this.user_id=a.id,f!=="1"?this.$router.push("/unauthorized"):(!t||!n)&&(this.$router.push("/"),sessionStorage.removeItem("token")),this.getAllDataInvoice()}catch(i){console.error("Error decoding token:",i),this.$router.push("/")}else this.$router.push("/")}},Ae=Object.assign(Be,{__name:"Invoices",setup(s){const o=m(!1),i=m(""),c=()=>{o.value=!o.value,i.value=o.value?"toggle-sidebar":""};return(t,n)=>(l(),d(b,null,[e("div",P,[v(B,{class:w(i.value)},null,8,["class"]),e("div",U,[e("div",L,[v(N,{onToggleSidebar:c}),V,e("div",E,[J,e("div",O,[e("div",K,[W,e("div",q,[e("div",G,[H,e("div",Q,[e("a",{class:"dropdown-item",href:"#",onClick:n[0]||(n[0]=a=>t.getInvoiceByStatus("0"))},"Pending"),e("a",{class:"dropdown-item",href:"#",onClick:n[1]||(n[1]=a=>t.getInvoiceByStatus("1"))},"Active"),e("a",{class:"dropdown-item",href:"#",onClick:n[2]||(n[2]=a=>t.getInvoiceByStatus("2"))},"Reject")])])])]),e("div",X,[t.ready?u("",!0):(l(),d("div",Y)),t.ready?(l(),A(S(k),{key:1,class:"display table table-striped"},{default:I(()=>[Z,e("tbody",null,[(l(!0),d(b,null,j(t.invoices,(a,_)=>(l(),d("tr",{key:a.id},[e("th",ee,p(_+1),1),e("td",null,p(a.user.name),1),e("td",null,p(a.user.no_hp),1),e("td",null,p(a.nomor_rekening),1),e("td",null,p(a.jumlah_transfer),1),e("td",null,[e("img",{src:"https://backend-webmember.lumirainternational.com/storage/"+a.bukti_transfer,alt:"Bukti Transfer",style:{"max-width":"100px",cursor:"pointer"},onClick:h=>t.detailBukti(a.bukti_transfer)},null,8,te)]),e("td",null,[a.status=="0"?(l(),d("div",ae," Pending ")):u("",!0),a.status=="1"?(l(),d("div",se," Active ")):u("",!0),a.status=="2"?(l(),d("div",oe," Reject ")):u("",!0)]),e("td",null,[a.status=="1"||a.status=="0"?(l(),d("button",{key:0,class:"btn btn-danger me-1",onClick:h=>t.konfirmasi(a.user_id,a.id,"2",a.user.name)}," Reject ",8,ne)):u("",!0),a.status=="0"||a.status=="00"?(l(),d("button",{key:1,class:"btn btn-success",onClick:h=>t.setDataAction(a.user_id,a.id,"1"),"data-toggle":"modal","data-target":"#aturTanggal"}," Accept ",8,ie)):u("",!0)])]))),128))])]),_:1})):u("",!0)])]),re])]),v(R)])]),e("div",le,[e("div",de,[e("div",ce,[ue,e("div",he,[e("form",{onSubmit:n[4]||(n[4]=C(a=>t.actionInvoice(t.dataAction.user_id,t.dataAction.invoice_id,t.dataAction.status_invoice,t.dataAction.tanggal_berakhir),["prevent"]))},[e("div",pe,[ge,T(e("input",{type:"date",class:"form-control",id:"tanggal","onUpdate:modelValue":n[3]||(n[3]=a=>t.dataAction.tanggal_berakhir=a)},null,512),[[D,t.dataAction.tanggal_berakhir]])]),_e],32)])])])],512),e("div",ve,[e("div",me,[e("div",be,[ke,e("div",fe,[e("img",{src:"https://backend-webmember.lumirainternational.com/storage/"+t.path,alt:"Bukti Transfer",style:{width:"100%"}},null,8,ye),we])])])],512)],64))}}),Ce=y(Ae,[["__scopeId","data-v-f6fa4e8f"]]);export{Ce as default};