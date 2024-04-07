import{_ as w,j as k,o as i,c as l,d as e,f as h,A as T,t as c,n as C,g as L,C as D,w as v,e as d,H as B,F as _,D as y,v as u,b,E as m,G as S,y as U,z as P}from"./index-952a9ce0.js";import{S as M}from"./Sidebar-User-058131f3.js";import{N as V}from"./Navbar-f56532f8.js";import{C as R}from"./ChatMe-92664207.js";import{P as I,D as N}from"./jquery.dataTables-c90b7baa.js";const t=s=>(U("data-v-e90d43bc"),s=s(),P(),s),F={id:"wrapper"},J={id:"content-wrapper",class:"d-flex flex-column"},A={id:"content"},z=t(()=>e("h1",{class:"h3 mb-0 text-gray-800 text-center mt-4"},"List Invoice",-1)),E={class:"row"},H=t(()=>e("div",{class:"col-1"},null,-1)),O={class:"col-10"},K={class:"row mt-5"},q={key:0,class:"col-sm-3"},G={key:1,class:"col-sm-3"},W=t(()=>e("div",{class:"col-sm-9"},null,-1)),Q={class:"table-responsive mt-5"},X={key:0,class:"preloader"},Y=t(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"No"),e("th",{scope:"col"},"Nama Pengirim"),e("th",{scope:"col"},"Nomor Rekening"),e("th",{scope:"col"},"Jumlah Transfer"),e("th",{scope:"col"},"Bukti Transfer"),e("th",{scope:"col"},"Berlaku Hingga"),e("th",{scope:"col"},"Status")])],-1)),Z={scope:"row"},x=["src"],ee={key:0,class:"bg-warning rounded text-center"},ne={key:1,class:"bg-success rounded text-center"},ae={key:2,class:"bg-secondary rounded text-center"},oe={key:3,class:"bg-danger rounded text-center text-white"},te={key:4,class:"bg-primary rounded text-center text-white"},se=t(()=>e("div",{class:"col-1"},null,-1)),ie={class:"modal fade",id:"addInvoiceModal",tabindex:"-1",role:"dialog","aria-labelledby":"addInvoiceModalLabel","aria-hidden":"true",ref:"addInvoiceModalRef"},re={class:"modal-dialog",role:"document"},le={class:"modal-content"},de=t(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addInvoiceModalLabel"},"Tambah Invoice"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),ue={class:"modal-body"},ce={class:"form-group"},ge=t(()=>e("label",{for:"rekeningTujuan"},"Jenis Langganan",-1)),me=t(()=>e("option",{value:"",disabled:"",selected:""}," Pilih Jenis Langganan ",-1)),pe=["value"],he={class:"form-group"},be=t(()=>e("label",{for:"rekeningTujuan"},"Rekening Tujuan",-1)),fe={class:"form-group"},ve=t(()=>e("label",{for:"rekeningPengirim"},"Nomor Rekening / Nomor Hp",-1)),_e={class:"form-group"},ke=t(()=>e("label",{for:"namaPengirim"},"Nama Pengirim",-1)),ye={class:"form-group"},Ie=t(()=>e("label",{for:"jumlahTransfer"},"Jumlah Transfer",-1)),je={class:"form-group"},we=t(()=>e("label",{for:"buktiTransfer"},"Bukti Transfer",-1)),Te=t(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),e("button",{type:"submit",class:"btn btn-primary"},"Tambah")],-1)),Ce={class:"modal fade",id:"editInvoice",tabindex:"-1",role:"dialog","aria-labelledby":"editInvoiceLabel","aria-hidden":"true",ref:"editInvoiceRef"},Le={class:"modal-dialog",role:"document"},De={class:"modal-content"},Be=t(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"editInvoiceLabel"},"Edit Invoice"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),Se={class:"modal-body"},Ue=t(()=>e("div",{class:"form-group"},[e("label",{for:"durasi"},"Durasi"),e("input",{type:"text",class:"form-control",id:"durasi",value:"1 Bulan",disabled:""})],-1)),Pe={class:"form-group"},Me=t(()=>e("label",{for:"rekeningTujuan"},"Rekening Tujuan",-1)),Ve={class:"form-group"},Re=t(()=>e("label",{for:"bayar"},"Jumlah Bayar",-1)),$e={class:"form-group"},Ne=t(()=>e("label",{for:"rekeningPengirim"},"Rekening Pengirim",-1)),Fe={class:"form-group"},Je=t(()=>e("label",{for:"jumlahTransfer"},"Jumlah Transfer",-1)),Ae={class:"form-group"},ze=t(()=>e("label",{for:"buktiTransfer"},"Bukti Transfer",-1)),Ee=t(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),e("button",{type:"submit",class:"btn btn-primary"},"Edit")],-1)),He={class:"modal fade",id:"perpanjangModal",tabindex:"-1",role:"dialog","aria-labelledby":"perpanjangModalLabel","aria-hidden":"true",ref:"perpanjangModalRef"},Oe={class:"modal-dialog",role:"document"},Ke={class:"modal-content"},qe=t(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"perpanjangModalLabel"}," Perpanjang Invoice "),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),Ge={class:"modal-body"},We=t(()=>e("div",{class:"form-group"},[e("label",{for:"durasi"},"Durasi"),e("input",{type:"text",class:"form-control",id:"durasi",value:"1 Bulan",disabled:""})],-1)),Qe={class:"form-group"},Xe=t(()=>e("label",{for:"rekeningTujuan"},"Rekening Tujuan",-1)),Ye={class:"form-group"},Ze=t(()=>e("label",{for:"bayar"},"Jumlah Bayar",-1)),xe={class:"form-group"},en=t(()=>e("label",{for:"rekeningPengirim"},"Rekening Pengirim",-1)),nn={class:"form-group"},an=t(()=>e("label",{for:"jumlahTransfer"},"Jumlah Transfer",-1)),on={class:"form-group"},tn=t(()=>e("label",{for:"buktiTransfer"},"Bukti Transfer",-1)),sn=t(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),e("button",{type:"submit",class:"btn btn-primary"},"Perpanjang")],-1));I.use(N);const rn={data(){return{invoices:[],newInvoice:{nama_pengirim:"",nomor_rekening:"",jumlah_transfer:"",bukti_transfer:null},rekenings:[],user_id:null,role:null,ready:!1,today:null,disable:!1,listLangganan:[],selectedLangganan:""}},methods:{async fetchDataInvoice(){try{const s=await b.get(`https://backend.alicornbot.com/api/auth/list-myinvoice/${this.user_id}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.invoices=s.data.data,this.ready=!0}catch(s){console.error(s)}},async fetchDataRekening(){try{const s=await b.get("https://backend.alicornbot.com/api/auth/get-rekening",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.rekenings=s.data.data}catch(s){console.error(s)}},addInvoice(s=null){this.ready=!1;const r=new FormData;r.append("nama_pengirim",this.newInvoice.nama_pengirim),r.append("nomor_rekening",this.newInvoice.nomor_rekening),r.append("jumlah_transfer",this.newInvoice.jumlah_transfer),r.append("bukti_transfer",this.newInvoice.bukti_transfer),r.append("user_id",this.user_id),r.append("langganan_id",this.selectedLangganan),b.post("https://backend.alicornbot.com/api/auth/create-invoice",r,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(g=>{console.log(g.data),this.newInvoice={nomor_rekening:"",jumlah_transfer:"",bukti_transfer:null},this.fetchDataInvoice(),this.showAlert()}).catch(g=>{console.error(g)})},async fetchDataLangganan(){try{const s=await b.get("https://backend.alicornbot.com/api/auth/list-langganan",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.listLangganan=s.data.data}catch(s){console.error(s)}},showAlert(){this.$swal({title:"Request Success",text:"Data Berhasil Dikirim!",icon:"success"}).then(()=>{$("#addInvoiceModal").modal("hide"),$("#editInvoice").modal("hide"),$("#perpanjangModal").modal("hide")})},handleFileUpload(s){this.newInvoice.bukti_transfer=s.target.files[0]}},created(){const s=sessionStorage.getItem("token");if(s)try{const[r,g]=s.split("."),f=JSON.parse(atob(r)),a=atob(g),o=JSON.parse(atob(s.split(".")[1])),n=o.exp,p=new Date(n*1e3);console.log("Waktu Kedaluwarsa (UTC):",p.toUTCString()),new Date>p?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const j=o.level;this.user_id=o.id,console.log("ini idddd:",this.user_id),j!=="0"?this.$router.push("/unauthorized"):(!f||!a)&&this.$router.push("/"),this.ready=!1,this.fetchDataInvoice(),this.fetchDataRekening(),this.today=new Date}catch(r){console.error("Error decoding token:",r),this.$router.push("/")}else this.$router.push("/")}},ln=Object.assign(rn,{__name:"MyInvoice",setup(s){const r=k(!1),g=k(""),f=()=>{r.value=!r.value,g.value=r.value?"toggle-sidebar":""};return(a,o)=>(i(),l(_,null,[e("div",F,[h(M,{class:T(g.value)},null,8,["class"]),e("div",J,[e("div",A,[h(V,{onToggleSidebar:f}),h(R),z,e("div",E,[H,e("div",O,[e("div",K,[a.invoices.length===0?(i(),l("div",q,[e("button",{class:"btn blueButton","data-toggle":"modal","data-target":"#addInvoiceModal",onClick:o[0]||(o[0]=n=>a.fetchDataLangganan())}," Tambah Layanan ")])):c("",!0),a.invoices.length>0?(i(),l("div",G,[a.invoices[0].status!="0"&&a.invoices[0].status!="1"?(i(),l("button",{key:0,class:"btn blueButton","data-toggle":"modal","data-target":"#addInvoiceModal",onClick:o[1]||(o[1]=n=>a.fetchDataLangganan())}," Tambah Layanan ")):c("",!0),a.invoices[0].status=="1"?(i(),l("button",{key:1,class:"btn btn-success","data-toggle":"modal","data-target":"#addInvoiceModal",onClick:o[2]||(o[2]=n=>a.fetchDataLangganan())}," Perpanjang Layanan ")):c("",!0)])):c("",!0),W]),e("div",Q,[a.ready?c("",!0):(i(),l("div",X)),a.ready?(i(),C(D(I),{key:1,class:"tableCustom display table table-striped"},{default:L(()=>[Y,e("tbody",null,[(i(!0),l(_,null,y(a.invoices,(n,p)=>(i(),l("tr",{key:n.id},[e("th",Z,m(p+1),1),e("td",null,m(n.nama_pengirim),1),e("td",null,m(n.nomor_rekening),1),e("td",null,m(n.jumlah_transfer),1),e("td",null,[e("img",{src:"https://backend.alicornbot.com/storage/"+n.bukti_transfer,alt:"Bukti Transfer",style:{"max-width":"100px"}},null,8,x)]),e("td",null,m(n.tanggal_berakhir!=null?n.tanggal_berakhir:"Belum Diatur"),1),e("td",null,[n.status=="0"?(i(),l("div",ee," Pending ")):c("",!0),n.status=="1"?(i(),l("div",ne," Active ")):c("",!0),n.status=="3"?(i(),l("div",ae," Expired ")):c("",!0),n.status=="2"?(i(),l("div",oe," Reject ")):c("",!0),n.status=="00"?(i(),l("div",te," Perpanjang ")):c("",!0)])]))),128))])]),_:1})):c("",!0)])]),se])]),h(S)])]),e("div",ie,[e("div",re,[e("div",le,[de,e("div",ue,[e("form",{onSubmit:o[10]||(o[10]=v((...n)=>a.addInvoice&&a.addInvoice(...n),["prevent"]))},[e("div",ce,[ge,d(e("select",{class:"form-select","onUpdate:modelValue":o[3]||(o[3]=n=>a.selectedLangganan=n),onChange:o[4]||(o[4]=(...n)=>a.onChangeLangganan&&a.onChangeLangganan(...n))},[me,(i(!0),l(_,null,y(a.listLangganan,n=>(i(),l("option",{key:n.id,value:n.id},m(n.jenis_langganan)+" - RP."+m(n.harga),9,pe))),128))],544),[[B,a.selectedLangganan]])]),e("div",he,[be,d(e("input",{type:"text",class:"form-control",id:"rekeningTujuan","onUpdate:modelValue":o[5]||(o[5]=n=>a.rekenings.rekening_tujuan=n),disabled:""},null,512),[[u,a.rekenings.rekening_tujuan]])]),e("div",fe,[ve,d(e("input",{type:"text",class:"form-control",id:"rekeningPengirim",placeholder:"nomor rekening atau hp pengirim uang","onUpdate:modelValue":o[6]||(o[6]=n=>a.newInvoice.nomor_rekening=n)},null,512),[[u,a.newInvoice.nomor_rekening]])]),e("div",_e,[ke,d(e("input",{type:"text",class:"form-control",id:"namaPengirim",placeholder:"harus sesuai dengan rekening atau dompet digital","onUpdate:modelValue":o[7]||(o[7]=n=>a.newInvoice.nama_pengirim=n)},null,512),[[u,a.newInvoice.nama_pengirim]])]),e("div",ye,[Ie,d(e("input",{type:"text",class:"form-control",id:"jumlahTransfer",placeholder:"contoh: 250000","onUpdate:modelValue":o[8]||(o[8]=n=>a.newInvoice.jumlah_transfer=n)},null,512),[[u,a.newInvoice.jumlah_transfer]])]),e("div",je,[we,e("input",{type:"file",class:"form-control",id:"buktiTransfer",onChange:o[9]||(o[9]=(...n)=>a.handleFileUpload&&a.handleFileUpload(...n))},null,32)]),Te],32)])])])],512),e("div",Ce,[e("div",Le,[e("div",De,[Be,e("div",Se,[e("form",{onSubmit:o[16]||(o[16]=v(n=>a.addInvoice("0"),["prevent"]))},[Ue,e("div",Pe,[Me,d(e("input",{type:"text",class:"form-control",id:"rekeningTujuan","onUpdate:modelValue":o[11]||(o[11]=n=>a.rekenings.rekening_tujuan=n),disabled:""},null,512),[[u,a.rekenings.rekening_tujuan]])]),e("div",Ve,[Re,d(e("input",{type:"text",class:"form-control",id:"bayar","onUpdate:modelValue":o[12]||(o[12]=n=>a.rekenings.harga=n),disabled:""},null,512),[[u,a.rekenings.harga]])]),e("div",$e,[Ne,d(e("input",{type:"text",class:"form-control",id:"rekeningPengirim","onUpdate:modelValue":o[13]||(o[13]=n=>a.newInvoice.nomor_rekening=n)},null,512),[[u,a.newInvoice.nomor_rekening]])]),e("div",Fe,[Je,d(e("input",{type:"text",class:"form-control",id:"jumlahTransfer","onUpdate:modelValue":o[14]||(o[14]=n=>a.newInvoice.jumlah_transfer=n)},null,512),[[u,a.newInvoice.jumlah_transfer]])]),e("div",Ae,[ze,e("input",{type:"file",class:"form-control",id:"buktiTransfer",onChange:o[15]||(o[15]=(...n)=>a.handleFileUpload&&a.handleFileUpload(...n))},null,32)]),Ee],32)])])])],512),e("div",He,[e("div",Oe,[e("div",Ke,[qe,e("div",Ge,[e("form",{onSubmit:o[22]||(o[22]=v(n=>a.addInvoice("00"),["prevent"]))},[We,e("div",Qe,[Xe,d(e("input",{type:"text",class:"form-control",id:"rekeningTujuan","onUpdate:modelValue":o[17]||(o[17]=n=>a.rekenings.rekening_tujuan=n),disabled:""},null,512),[[u,a.rekenings.rekening_tujuan]])]),e("div",Ye,[Ze,d(e("input",{type:"text",class:"form-control",id:"bayar","onUpdate:modelValue":o[18]||(o[18]=n=>a.rekenings.harga=n),disabled:""},null,512),[[u,a.rekenings.harga]])]),e("div",xe,[en,d(e("input",{type:"text",class:"form-control",id:"rekeningPengirim","onUpdate:modelValue":o[19]||(o[19]=n=>a.newInvoice.nomor_rekening=n)},null,512),[[u,a.newInvoice.nomor_rekening]])]),e("div",nn,[an,d(e("input",{type:"text",class:"form-control",id:"jumlahTransfer","onUpdate:modelValue":o[20]||(o[20]=n=>a.newInvoice.jumlah_transfer=n)},null,512),[[u,a.newInvoice.jumlah_transfer]])]),e("div",on,[tn,e("input",{type:"file",class:"form-control",id:"buktiTransfer",onChange:o[21]||(o[21]=(...n)=>a.handleFileUpload&&a.handleFileUpload(...n))},null,32)]),sn],32)])])])],512)],64))}}),pn=w(ln,[["__scopeId","data-v-e90d43bc"]]);export{pn as default};
