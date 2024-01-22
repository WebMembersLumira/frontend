import{_ as w,j as v,o as r,c as u,d as e,f as p,A as j,t as c,n as T,g as B,C as D,w as f,e as l,v as d,F as k,b as g,D as S,E as b,G as U,y as C,z as M}from"./index-add1aecc.js";import{S as P}from"./Sidebar-User-237f5ef2.js";import{N as V}from"./Navbar-4a525b75.js";import{C as R}from"./ChatMe-abc90dde.js";import{P as y,D as F}from"./jquery.dataTables-1fccfb46.js";const a=n=>(C("data-v-31deded6"),n=n(),M(),n),A={id:"wrapper"},L={id:"content-wrapper",class:"d-flex flex-column"},J={id:"content"},N=a(()=>e("h1",{class:"h3 mb-0 text-gray-800 text-center mt-4"},"List Invoice",-1)),z={class:"row"},E=a(()=>e("div",{class:"col-1"},null,-1)),x={class:"col-10"},O={class:"row mt-5"},K={class:"col-sm-3"},q={key:0,class:"btn blueButton","data-toggle":"modal","data-target":"#addInvoiceModal"},G={key:1,class:"btn btn-secondary","data-toggle":"modal","data-target":"#addInvoiceModal"},H=a(()=>e("div",{class:"col-sm-9"},null,-1)),W={class:"table-responsive mt-5"},Q={key:0,class:"preloader"},X=a(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"No"),e("th",{scope:"col"},"Nomor Rekening"),e("th",{scope:"col"},"Jumlah Transfer"),e("th",{scope:"col"},"Bukti Transfer"),e("th",{scope:"col"},"Berlaku Hingga"),e("th",{scope:"col"},"Status")])],-1)),Y={scope:"row"},Z=["src"],ee={key:0,class:"bg-warning rounded text-center"},te={key:1,class:"bg-success rounded text-center"},oe={key:2,class:"bg-secondary rounded text-center"},se={key:3,class:"bg-danger rounded text-center text-white"},ae={key:4,class:"bg-primary rounded text-center text-white"},ne=a(()=>e("div",{class:"col-1"},null,-1)),ie={class:"modal fade",id:"addInvoiceModal",tabindex:"-1",role:"dialog","aria-labelledby":"addInvoiceModalLabel","aria-hidden":"true",ref:"addInvoiceModalRef"},re={class:"modal-dialog",role:"document"},le={class:"modal-content"},de=a(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addInvoiceModalLabel"},"Tambah Invoice"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),ue={class:"modal-body"},ce=a(()=>e("div",{class:"form-group"},[e("label",{for:"durasi"},"Durasi"),e("input",{type:"text",class:"form-control",id:"durasi",value:"1 Bulan",disabled:""})],-1)),me={class:"form-group"},he=a(()=>e("label",{for:"rekeningTujuan"},"Rekening Tujuan",-1)),pe={class:"form-group"},ge=a(()=>e("label",{for:"bayar"},"Jumlah Bayar",-1)),be={class:"form-group"},_e=a(()=>e("label",{for:"rekeningPengirim"},"Rekening Pengirim",-1)),fe={class:"form-group"},ve=a(()=>e("label",{for:"jumlahTransfer"},"Jumlah Transfer",-1)),ke={class:"form-group"},ye=a(()=>e("label",{for:"buktiTransfer"},"Bukti Transfer",-1)),Ie=a(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),e("button",{type:"submit",class:"btn btn-primary"},"Tambah")],-1)),we={class:"modal fade",id:"editInvoice",tabindex:"-1",role:"dialog","aria-labelledby":"editInvoiceLabel","aria-hidden":"true",ref:"editInvoiceRef"},je={class:"modal-dialog",role:"document"},Te={class:"modal-content"},Be=a(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"editInvoiceLabel"},"Edit Invoice"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),De={class:"modal-body"},Se=a(()=>e("div",{class:"form-group"},[e("label",{for:"durasi"},"Durasi"),e("input",{type:"text",class:"form-control",id:"durasi",value:"1 Bulan",disabled:""})],-1)),Ue={class:"form-group"},Ce=a(()=>e("label",{for:"rekeningTujuan"},"Rekening Tujuan",-1)),Me={class:"form-group"},Pe=a(()=>e("label",{for:"bayar"},"Jumlah Bayar",-1)),Ve={class:"form-group"},Re=a(()=>e("label",{for:"rekeningPengirim"},"Rekening Pengirim",-1)),$e={class:"form-group"},Fe=a(()=>e("label",{for:"jumlahTransfer"},"Jumlah Transfer",-1)),Ae={class:"form-group"},Le=a(()=>e("label",{for:"buktiTransfer"},"Bukti Transfer",-1)),Je=a(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),e("button",{type:"submit",class:"btn btn-primary"},"Edit")],-1)),Ne={class:"modal fade",id:"perpanjangModal",tabindex:"-1",role:"dialog","aria-labelledby":"perpanjangModalLabel","aria-hidden":"true",ref:"perpanjangModalRef"},ze={class:"modal-dialog",role:"document"},Ee={class:"modal-content"},xe=a(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"perpanjangModalLabel"},"Perpanjang Invoice"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),Oe={class:"modal-body"},Ke=a(()=>e("div",{class:"form-group"},[e("label",{for:"durasi"},"Durasi"),e("input",{type:"text",class:"form-control",id:"durasi",value:"1 Bulan",disabled:""})],-1)),qe={class:"form-group"},Ge=a(()=>e("label",{for:"rekeningTujuan"},"Rekening Tujuan",-1)),He={class:"form-group"},We=a(()=>e("label",{for:"bayar"},"Jumlah Bayar",-1)),Qe={class:"form-group"},Xe=a(()=>e("label",{for:"rekeningPengirim"},"Rekening Pengirim",-1)),Ye={class:"form-group"},Ze=a(()=>e("label",{for:"jumlahTransfer"},"Jumlah Transfer",-1)),et={class:"form-group"},tt=a(()=>e("label",{for:"buktiTransfer"},"Bukti Transfer",-1)),ot=a(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),e("button",{type:"submit",class:"btn btn-primary"},"Perpanjang")],-1));y.use(F);const st={data(){return{invoices:[],newInvoice:{nomor_rekening:"",jumlah_transfer:"",bukti_transfer:null},rekenings:[],user_id:null,role:null,ready:null,today:null,disable:!1}},methods:{async fetchDataInvoice(){try{const n=await g.get(`https://backend-webmember.lumirainternational.com/api/auth/list-myinvoice/${this.user_id}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.invoices=n.data.data,this.ready=!0}catch(n){console.error(n)}},async fetchDataRekening(){try{const n=await g.get("https://backend-webmember.lumirainternational.com/api/auth/get-rekening",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.rekenings=n.data.data}catch(n){console.error(n)}},addInvoice(n=null){this.ready=!1;const i=new FormData;i.append("nomor_rekening",this.newInvoice.nomor_rekening),i.append("jumlah_transfer",this.newInvoice.jumlah_transfer),i.append("bukti_transfer",this.newInvoice.bukti_transfer),i.append("user_id",this.user_id),g.post("https://backend-webmember.lumirainternational.com/api/auth/create-invoice",i,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(m=>{console.log(m.data),this.newInvoice={nomor_rekening:"",jumlah_transfer:"",bukti_transfer:null},this.fetchDataInvoice(),this.showAlert()}).catch(m=>{console.error(m)})},async checkMembership(){try{const n=await g.get(`https://backend-webmember.lumirainternational.com/api/auth/check-membership/${this.user_id}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.ready=!0,console.log("data:",n.data.status),new Date(n.data.data[0].tanggal_berakhir)>new Date&&(this.disable=!0)}catch(n){console.error(n)}},showAlert(){this.$swal({title:"Request Success",text:"Data Berhasil Dikirim!",icon:"success"}).then(()=>{$("#addInvoiceModal").modal("hide"),$("#editInvoice").modal("hide"),$("#perpanjangModal").modal("hide")})},handleFileUpload(n){this.newInvoice.bukti_transfer=n.target.files[0]}},created(){const n=sessionStorage.getItem("token");if(n)try{const[i,m]=n.split("."),_=JSON.parse(atob(i)),o=atob(m),s=JSON.parse(atob(n.split(".")[1])),t=s.exp,h=new Date(t*1e3);console.log("Waktu Kedaluwarsa (UTC):",h.toUTCString()),new Date>h?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const I=s.level;this.user_id=s.id,console.log("ini idddd:",this.user_id),I!=="0"?this.$router.push("/unauthorized"):(!_||!o)&&this.$router.push("/"),this.fetchDataInvoice(),this.fetchDataRekening(),this.checkMembership(),this.today=new Date}catch(i){console.error("Error decoding token:",i),this.$router.push("/")}else this.$router.push("/")}},at=Object.assign(st,{__name:"MyInvoice",setup(n){const i=v(!1),m=v(""),_=()=>{i.value=!i.value,m.value=i.value?"toggle-sidebar":""};return(o,s)=>(r(),u(k,null,[e("div",A,[p(P,{class:j(m.value)},null,8,["class"]),e("div",L,[e("div",J,[p(V,{onToggleSidebar:_}),p(R),N,e("div",z,[E,e("div",x,[e("div",O,[e("div",K,[o.disable?c("",!0):(r(),u("button",q," Tambah Layanan ")),o.disable?(r(),u("button",G," Layanan Aktive ")):c("",!0)]),H]),e("div",W,[o.ready?c("",!0):(r(),u("div",Q)),o.ready?(r(),T(D(y),{key:1,class:"tableCustom display table table-striped"},{default:B(()=>[X,e("tbody",null,[(r(!0),u(k,null,S(o.invoices,(t,h)=>(r(),u("tr",{key:t.id},[e("th",Y,b(h+1),1),e("td",null,b(t.nomor_rekening),1),e("td",null,b(t.jumlah_transfer),1),e("td",null,[e("img",{src:"https://backend-webmember.lumirainternational.com/storage/"+t.bukti_transfer,alt:"Bukti Transfer",style:{"max-width":"100px"}},null,8,Z)]),e("td",null,b(t.tanggal_berakhir!=null?t.tanggal_berakhir:"Belum Diatur"),1),e("td",null,[t.status=="0"?(r(),u("div",ee," Pending ")):c("",!0),t.status=="1"?(r(),u("div",te," Active ")):c("",!0),t.status=="3"?(r(),u("div",oe," Expired ")):c("",!0),t.status=="2"?(r(),u("div",se," Reject ")):c("",!0),t.status=="00"?(r(),u("div",ae," Perpanjang ")):c("",!0)])]))),128))])]),_:1})):c("",!0)])]),ne])]),p(U)])]),e("div",ie,[e("div",re,[e("div",le,[de,e("div",ue,[e("form",{onSubmit:s[5]||(s[5]=f((...t)=>o.addInvoice&&o.addInvoice(...t),["prevent"]))},[ce,e("div",me,[he,l(e("input",{type:"text",class:"form-control",id:"rekeningTujuan","onUpdate:modelValue":s[0]||(s[0]=t=>o.rekenings.rekening_tujuan=t),disabled:""},null,512),[[d,o.rekenings.rekening_tujuan]])]),e("div",pe,[ge,l(e("input",{type:"text",class:"form-control",id:"bayar","onUpdate:modelValue":s[1]||(s[1]=t=>o.rekenings.harga=t),disabled:""},null,512),[[d,o.rekenings.harga]])]),e("div",be,[_e,l(e("input",{type:"text",class:"form-control",id:"rekeningPengirim","onUpdate:modelValue":s[2]||(s[2]=t=>o.newInvoice.nomor_rekening=t)},null,512),[[d,o.newInvoice.nomor_rekening]])]),e("div",fe,[ve,l(e("input",{type:"text",class:"form-control",id:"jumlahTransfer","onUpdate:modelValue":s[3]||(s[3]=t=>o.newInvoice.jumlah_transfer=t)},null,512),[[d,o.newInvoice.jumlah_transfer]])]),e("div",ke,[ye,e("input",{type:"file",class:"form-control",id:"buktiTransfer",onChange:s[4]||(s[4]=(...t)=>o.handleFileUpload&&o.handleFileUpload(...t))},null,32)]),Ie],32)])])])],512),e("div",we,[e("div",je,[e("div",Te,[Be,e("div",De,[e("form",{onSubmit:s[11]||(s[11]=f(t=>o.addInvoice("0"),["prevent"]))},[Se,e("div",Ue,[Ce,l(e("input",{type:"text",class:"form-control",id:"rekeningTujuan","onUpdate:modelValue":s[6]||(s[6]=t=>o.rekenings.rekening_tujuan=t),disabled:""},null,512),[[d,o.rekenings.rekening_tujuan]])]),e("div",Me,[Pe,l(e("input",{type:"text",class:"form-control",id:"bayar","onUpdate:modelValue":s[7]||(s[7]=t=>o.rekenings.harga=t),disabled:""},null,512),[[d,o.rekenings.harga]])]),e("div",Ve,[Re,l(e("input",{type:"text",class:"form-control",id:"rekeningPengirim","onUpdate:modelValue":s[8]||(s[8]=t=>o.newInvoice.nomor_rekening=t)},null,512),[[d,o.newInvoice.nomor_rekening]])]),e("div",$e,[Fe,l(e("input",{type:"text",class:"form-control",id:"jumlahTransfer","onUpdate:modelValue":s[9]||(s[9]=t=>o.newInvoice.jumlah_transfer=t)},null,512),[[d,o.newInvoice.jumlah_transfer]])]),e("div",Ae,[Le,e("input",{type:"file",class:"form-control",id:"buktiTransfer",onChange:s[10]||(s[10]=(...t)=>o.handleFileUpload&&o.handleFileUpload(...t))},null,32)]),Je],32)])])])],512),e("div",Ne,[e("div",ze,[e("div",Ee,[xe,e("div",Oe,[e("form",{onSubmit:s[17]||(s[17]=f(t=>o.addInvoice("00"),["prevent"]))},[Ke,e("div",qe,[Ge,l(e("input",{type:"text",class:"form-control",id:"rekeningTujuan","onUpdate:modelValue":s[12]||(s[12]=t=>o.rekenings.rekening_tujuan=t),disabled:""},null,512),[[d,o.rekenings.rekening_tujuan]])]),e("div",He,[We,l(e("input",{type:"text",class:"form-control",id:"bayar","onUpdate:modelValue":s[13]||(s[13]=t=>o.rekenings.harga=t),disabled:""},null,512),[[d,o.rekenings.harga]])]),e("div",Qe,[Xe,l(e("input",{type:"text",class:"form-control",id:"rekeningPengirim","onUpdate:modelValue":s[14]||(s[14]=t=>o.newInvoice.nomor_rekening=t)},null,512),[[d,o.newInvoice.nomor_rekening]])]),e("div",Ye,[Ze,l(e("input",{type:"text",class:"form-control",id:"jumlahTransfer","onUpdate:modelValue":s[15]||(s[15]=t=>o.newInvoice.jumlah_transfer=t)},null,512),[[d,o.newInvoice.jumlah_transfer]])]),e("div",et,[tt,e("input",{type:"file",class:"form-control",id:"buktiTransfer",onChange:s[16]||(s[16]=(...t)=>o.handleFileUpload&&o.handleFileUpload(...t))},null,32)]),ot],32)])])])],512)],64))}}),ut=w(at,[["__scopeId","data-v-31deded6"]]);export{ut as default};
