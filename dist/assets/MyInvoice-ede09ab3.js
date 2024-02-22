import{_ as j,j as k,o as i,c as l,d as e,f as h,A as T,t as c,n as C,g as L,C as D,w as v,e as d,H as B,F as _,D as y,v as u,b,E as g,G as S,y as U,z as P}from"./index-942ef892.js";import{S as M}from"./Sidebar-User-ce8f2ddb.js";import{N as V}from"./Navbar-cacea511.js";import{C as R}from"./ChatMe-be05814e.js";import{P as I,D as N}from"./jquery.dataTables-c8b27ab4.js";const o=s=>(U("data-v-c0851a73"),s=s(),P(),s),F={id:"wrapper"},J={id:"content-wrapper",class:"d-flex flex-column"},A={id:"content"},z=o(()=>e("h1",{class:"h3 mb-0 text-gray-800 text-center mt-4"},"List Invoice",-1)),E={class:"row"},H=o(()=>e("div",{class:"col-1"},null,-1)),O={class:"col-10"},K={class:"row mt-5"},q={key:0,class:"col-sm-3"},G={key:1,class:"col-sm-3"},W=o(()=>e("div",{class:"col-sm-9"},null,-1)),Q={class:"table-responsive mt-5"},X={key:0,class:"preloader"},Y=o(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"No"),e("th",{scope:"col"},"Nama Pengirim"),e("th",{scope:"col"},"Nomor Rekening"),e("th",{scope:"col"},"Jumlah Transfer"),e("th",{scope:"col"},"Bukti Transfer"),e("th",{scope:"col"},"Berlaku Hingga"),e("th",{scope:"col"},"Status")])],-1)),Z={scope:"row"},x=["src"],ee={key:0,class:"bg-warning rounded text-center"},ne={key:1,class:"bg-success rounded text-center"},ae={key:2,class:"bg-secondary rounded text-center"},te={key:3,class:"bg-danger rounded text-center text-white"},oe={key:4,class:"bg-primary rounded text-center text-white"},se=o(()=>e("div",{class:"col-1"},null,-1)),ie={class:"modal fade",id:"addInvoiceModal",tabindex:"-1",role:"dialog","aria-labelledby":"addInvoiceModalLabel","aria-hidden":"true",ref:"addInvoiceModalRef"},re={class:"modal-dialog",role:"document"},le={class:"modal-content"},de=o(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addInvoiceModalLabel"},"Tambah Invoice"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),ue={class:"modal-body"},ce={class:"form-group"},me=o(()=>e("label",{for:"rekeningTujuan"},"Jenis Langganan",-1)),ge=o(()=>e("option",{value:"",disabled:"",selected:""}," Pilih Jenis Langganan ",-1)),pe=["value"],he={class:"form-group"},be=o(()=>e("label",{for:"rekeningTujuan"},"Rekening Tujuan",-1)),fe={class:"form-group"},ve=o(()=>e("label",{for:"rekeningPengirim"},"Nomor Rekening / Nomor Hp",-1)),_e={class:"form-group"},ke=o(()=>e("label",{for:"namaPengirim"},"Nama Pengirim",-1)),ye={class:"form-group"},Ie=o(()=>e("label",{for:"jumlahTransfer"},"Jumlah Transfer",-1)),we={class:"form-group"},je=o(()=>e("label",{for:"buktiTransfer"},"Bukti Transfer",-1)),Te=o(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),e("button",{type:"submit",class:"btn btn-primary"},"Tambah")],-1)),Ce={class:"modal fade",id:"editInvoice",tabindex:"-1",role:"dialog","aria-labelledby":"editInvoiceLabel","aria-hidden":"true",ref:"editInvoiceRef"},Le={class:"modal-dialog",role:"document"},De={class:"modal-content"},Be=o(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"editInvoiceLabel"},"Edit Invoice"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),Se={class:"modal-body"},Ue=o(()=>e("div",{class:"form-group"},[e("label",{for:"durasi"},"Durasi"),e("input",{type:"text",class:"form-control",id:"durasi",value:"1 Bulan",disabled:""})],-1)),Pe={class:"form-group"},Me=o(()=>e("label",{for:"rekeningTujuan"},"Rekening Tujuan",-1)),Ve={class:"form-group"},Re=o(()=>e("label",{for:"bayar"},"Jumlah Bayar",-1)),$e={class:"form-group"},Ne=o(()=>e("label",{for:"rekeningPengirim"},"Rekening Pengirim",-1)),Fe={class:"form-group"},Je=o(()=>e("label",{for:"jumlahTransfer"},"Jumlah Transfer",-1)),Ae={class:"form-group"},ze=o(()=>e("label",{for:"buktiTransfer"},"Bukti Transfer",-1)),Ee=o(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),e("button",{type:"submit",class:"btn btn-primary"},"Edit")],-1)),He={class:"modal fade",id:"perpanjangModal",tabindex:"-1",role:"dialog","aria-labelledby":"perpanjangModalLabel","aria-hidden":"true",ref:"perpanjangModalRef"},Oe={class:"modal-dialog",role:"document"},Ke={class:"modal-content"},qe=o(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"perpanjangModalLabel"}," Perpanjang Invoice "),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1)),Ge={class:"modal-body"},We=o(()=>e("div",{class:"form-group"},[e("label",{for:"durasi"},"Durasi"),e("input",{type:"text",class:"form-control",id:"durasi",value:"1 Bulan",disabled:""})],-1)),Qe={class:"form-group"},Xe=o(()=>e("label",{for:"rekeningTujuan"},"Rekening Tujuan",-1)),Ye={class:"form-group"},Ze=o(()=>e("label",{for:"bayar"},"Jumlah Bayar",-1)),xe={class:"form-group"},en=o(()=>e("label",{for:"rekeningPengirim"},"Rekening Pengirim",-1)),nn={class:"form-group"},an=o(()=>e("label",{for:"jumlahTransfer"},"Jumlah Transfer",-1)),tn={class:"form-group"},on=o(()=>e("label",{for:"buktiTransfer"},"Bukti Transfer",-1)),sn=o(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),e("button",{type:"submit",class:"btn btn-primary"},"Perpanjang")],-1));I.use(N);const rn={data(){return{invoices:[],newInvoice:{nama_pengirim:"",nomor_rekening:"",jumlah_transfer:"",bukti_transfer:null},rekenings:[],user_id:null,role:null,ready:!1,today:null,disable:!1,listLangganan:[],selectedLangganan:""}},methods:{async fetchDataInvoice(){try{const s=await b.get(`https://backend-webmember.lumirainternational.com/api/auth/list-myinvoice/${this.user_id}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.invoices=s.data.data,this.ready=!0}catch(s){console.error(s)}},async fetchDataRekening(){try{const s=await b.get("https://backend-webmember.lumirainternational.com/api/auth/get-rekening",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.rekenings=s.data.data}catch(s){console.error(s)}},addInvoice(s=null){this.ready=!1;const r=new FormData;r.append("nama_pengirim",this.newInvoice.nama_pengirim),r.append("nomor_rekening",this.newInvoice.nomor_rekening),r.append("jumlah_transfer",this.newInvoice.jumlah_transfer),r.append("bukti_transfer",this.newInvoice.bukti_transfer),r.append("user_id",this.user_id),r.append("langganan_id",this.selectedLangganan),b.post("https://backend-webmember.lumirainternational.com/api/auth/create-invoice",r,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(m=>{console.log(m.data),this.newInvoice={nomor_rekening:"",jumlah_transfer:"",bukti_transfer:null},this.fetchDataInvoice(),this.showAlert()}).catch(m=>{console.error(m)})},async fetchDataLangganan(){try{const s=await b.get("https://backend-webmember.lumirainternational.com/api/auth/list-langganan",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.listLangganan=s.data.data}catch(s){console.error(s)}},showAlert(){this.$swal({title:"Request Success",text:"Data Berhasil Dikirim!",icon:"success"}).then(()=>{$("#addInvoiceModal").modal("hide"),$("#editInvoice").modal("hide"),$("#perpanjangModal").modal("hide")})},handleFileUpload(s){this.newInvoice.bukti_transfer=s.target.files[0]}},created(){const s=sessionStorage.getItem("token");if(s)try{const[r,m]=s.split("."),f=JSON.parse(atob(r)),a=atob(m),t=JSON.parse(atob(s.split(".")[1])),n=t.exp,p=new Date(n*1e3);console.log("Waktu Kedaluwarsa (UTC):",p.toUTCString()),new Date>p?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const w=t.level;this.user_id=t.id,console.log("ini idddd:",this.user_id),w!=="0"?this.$router.push("/unauthorized"):(!f||!a)&&this.$router.push("/"),this.ready=!1,this.fetchDataInvoice(),this.fetchDataRekening(),this.today=new Date}catch(r){console.error("Error decoding token:",r),this.$router.push("/")}else this.$router.push("/")}},ln=Object.assign(rn,{__name:"MyInvoice",setup(s){const r=k(!1),m=k(""),f=()=>{r.value=!r.value,m.value=r.value?"toggle-sidebar":""};return(a,t)=>(i(),l(_,null,[e("div",F,[h(M,{class:T(m.value)},null,8,["class"]),e("div",J,[e("div",A,[h(V,{onToggleSidebar:f}),h(R),z,e("div",E,[H,e("div",O,[e("div",K,[a.invoices.length===0?(i(),l("div",q,[e("button",{class:"btn blueButton","data-toggle":"modal","data-target":"#addInvoiceModal",onClick:t[0]||(t[0]=n=>a.fetchDataLangganan())}," Tambah Layanan ")])):c("",!0),a.invoices.length>0?(i(),l("div",G,[a.invoices[0].status!="0"&&a.invoices[0].status!="1"?(i(),l("button",{key:0,class:"btn blueButton","data-toggle":"modal","data-target":"#addInvoiceModal",onClick:t[1]||(t[1]=n=>a.fetchDataLangganan())}," Tambah Layanan ")):c("",!0),a.invoices[0].status=="1"?(i(),l("button",{key:1,class:"btn btn-success","data-toggle":"modal","data-target":"#addInvoiceModal",onClick:t[2]||(t[2]=n=>a.fetchDataLangganan())}," Perpanjang Layanan ")):c("",!0)])):c("",!0),W]),e("div",Q,[a.ready?c("",!0):(i(),l("div",X)),a.ready?(i(),C(D(I),{key:1,class:"tableCustom display table table-striped"},{default:L(()=>[Y,e("tbody",null,[(i(!0),l(_,null,y(a.invoices,(n,p)=>(i(),l("tr",{key:n.id},[e("th",Z,g(p+1),1),e("td",null,g(n.nama_pengirim),1),e("td",null,g(n.nomor_rekening),1),e("td",null,g(n.jumlah_transfer),1),e("td",null,[e("img",{src:"https://backend-webmember.lumirainternational.com/storage/"+n.bukti_transfer,alt:"Bukti Transfer",style:{"max-width":"100px"}},null,8,x)]),e("td",null,g(n.tanggal_berakhir!=null?n.tanggal_berakhir:"Belum Diatur"),1),e("td",null,[n.status=="0"?(i(),l("div",ee," Pending ")):c("",!0),n.status=="1"?(i(),l("div",ne," Active ")):c("",!0),n.status=="3"?(i(),l("div",ae," Expired ")):c("",!0),n.status=="2"?(i(),l("div",te," Reject ")):c("",!0),n.status=="00"?(i(),l("div",oe," Perpanjang ")):c("",!0)])]))),128))])]),_:1})):c("",!0)])]),se])]),h(S)])]),e("div",ie,[e("div",re,[e("div",le,[de,e("div",ue,[e("form",{onSubmit:t[10]||(t[10]=v((...n)=>a.addInvoice&&a.addInvoice(...n),["prevent"]))},[e("div",ce,[me,d(e("select",{class:"form-select","onUpdate:modelValue":t[3]||(t[3]=n=>a.selectedLangganan=n),onChange:t[4]||(t[4]=(...n)=>a.onChangeLangganan&&a.onChangeLangganan(...n))},[ge,(i(!0),l(_,null,y(a.listLangganan,n=>(i(),l("option",{key:n.id,value:n.id},g(n.jenis_langganan)+" - RP."+g(n.harga),9,pe))),128))],544),[[B,a.selectedLangganan]])]),e("div",he,[be,d(e("input",{type:"text",class:"form-control",id:"rekeningTujuan","onUpdate:modelValue":t[5]||(t[5]=n=>a.rekenings.rekening_tujuan=n),disabled:""},null,512),[[u,a.rekenings.rekening_tujuan]])]),e("div",fe,[ve,d(e("input",{type:"text",class:"form-control",id:"rekeningPengirim",placeholder:"nomor rekening atau hp pengirim uang","onUpdate:modelValue":t[6]||(t[6]=n=>a.newInvoice.nomor_rekening=n)},null,512),[[u,a.newInvoice.nomor_rekening]])]),e("div",_e,[ke,d(e("input",{type:"text",class:"form-control",id:"namaPengirim",placeholder:"harus sesuai dengan rekening atau dompet digital","onUpdate:modelValue":t[7]||(t[7]=n=>a.newInvoice.nama_pengirim=n)},null,512),[[u,a.newInvoice.nama_pengirim]])]),e("div",ye,[Ie,d(e("input",{type:"text",class:"form-control",id:"jumlahTransfer",placeholder:"contoh: 250000","onUpdate:modelValue":t[8]||(t[8]=n=>a.newInvoice.jumlah_transfer=n)},null,512),[[u,a.newInvoice.jumlah_transfer]])]),e("div",we,[je,e("input",{type:"file",class:"form-control",id:"buktiTransfer",onChange:t[9]||(t[9]=(...n)=>a.handleFileUpload&&a.handleFileUpload(...n))},null,32)]),Te],32)])])])],512),e("div",Ce,[e("div",Le,[e("div",De,[Be,e("div",Se,[e("form",{onSubmit:t[16]||(t[16]=v(n=>a.addInvoice("0"),["prevent"]))},[Ue,e("div",Pe,[Me,d(e("input",{type:"text",class:"form-control",id:"rekeningTujuan","onUpdate:modelValue":t[11]||(t[11]=n=>a.rekenings.rekening_tujuan=n),disabled:""},null,512),[[u,a.rekenings.rekening_tujuan]])]),e("div",Ve,[Re,d(e("input",{type:"text",class:"form-control",id:"bayar","onUpdate:modelValue":t[12]||(t[12]=n=>a.rekenings.harga=n),disabled:""},null,512),[[u,a.rekenings.harga]])]),e("div",$e,[Ne,d(e("input",{type:"text",class:"form-control",id:"rekeningPengirim","onUpdate:modelValue":t[13]||(t[13]=n=>a.newInvoice.nomor_rekening=n)},null,512),[[u,a.newInvoice.nomor_rekening]])]),e("div",Fe,[Je,d(e("input",{type:"text",class:"form-control",id:"jumlahTransfer","onUpdate:modelValue":t[14]||(t[14]=n=>a.newInvoice.jumlah_transfer=n)},null,512),[[u,a.newInvoice.jumlah_transfer]])]),e("div",Ae,[ze,e("input",{type:"file",class:"form-control",id:"buktiTransfer",onChange:t[15]||(t[15]=(...n)=>a.handleFileUpload&&a.handleFileUpload(...n))},null,32)]),Ee],32)])])])],512),e("div",He,[e("div",Oe,[e("div",Ke,[qe,e("div",Ge,[e("form",{onSubmit:t[22]||(t[22]=v(n=>a.addInvoice("00"),["prevent"]))},[We,e("div",Qe,[Xe,d(e("input",{type:"text",class:"form-control",id:"rekeningTujuan","onUpdate:modelValue":t[17]||(t[17]=n=>a.rekenings.rekening_tujuan=n),disabled:""},null,512),[[u,a.rekenings.rekening_tujuan]])]),e("div",Ye,[Ze,d(e("input",{type:"text",class:"form-control",id:"bayar","onUpdate:modelValue":t[18]||(t[18]=n=>a.rekenings.harga=n),disabled:""},null,512),[[u,a.rekenings.harga]])]),e("div",xe,[en,d(e("input",{type:"text",class:"form-control",id:"rekeningPengirim","onUpdate:modelValue":t[19]||(t[19]=n=>a.newInvoice.nomor_rekening=n)},null,512),[[u,a.newInvoice.nomor_rekening]])]),e("div",nn,[an,d(e("input",{type:"text",class:"form-control",id:"jumlahTransfer","onUpdate:modelValue":t[20]||(t[20]=n=>a.newInvoice.jumlah_transfer=n)},null,512),[[u,a.newInvoice.jumlah_transfer]])]),e("div",tn,[on,e("input",{type:"file",class:"form-control",id:"buktiTransfer",onChange:t[21]||(t[21]=(...n)=>a.handleFileUpload&&a.handleFileUpload(...n))},null,32)]),sn],32)])])])],512)],64))}}),pn=j(ln,[["__scopeId","data-v-c0851a73"]]);export{pn as default};
