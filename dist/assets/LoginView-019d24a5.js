import{i as E,u as N,j as _,k as R,l as A,m as O,o as r,n as S,p as u,_ as I,r as P,c as p,d as o,f as b,e as g,v as T,q as U,w as j,s as q,t as f,x as z,h as x,g as F,b as H,S as G,y as J,z as W}from"./index-5f3ab893.js";import{C as Y}from"./ChatMe-7968d3bc.js";import"./index-9152c84b.js";import"./_commonjs-dynamic-modules-302442b1.js";const Z=E({props:{value:{default:""},chars:{default:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"},count:{default:5},hideLines:{type:Boolean,default:!1},customTextColor:{default:""},textColors:{default:()=>[]},isDirty:{type:Boolean,default:!0},width:{default:function(a){return a.count*30}},height:{default:50},canvasClass:{default:""},icon:{default:"refresh"},captchaFont:{default:"bold 28px sans-serif"}},emits:["isValid","getCode","update:modelValue"],setup(a,{emit:t}){const e=a,c=N(),s=_();let n=_(""),i=e.width,h=e.height;R(()=>{w()});const w=()=>{s.value.width=i,s.value.height=h;let l=s.value.getContext("2d");for(let d=0;d<e.count;d++){let v=Math.floor(Math.random()*e.chars.length),k=Math.random()*30*Math.PI/180,y=e.chars[v];n.value+=y;let V=10+d*25,M=30+Math.random()*8;l.font=e.captchaFont,l.translate(V,M),e.customTextColor?l.fillStyle=e.customTextColor:e.textColors.length?l.fillStyle=e.textColors[Math.floor(Math.random()*e.textColors.length)]:l.fillStyle=C(),l.rotate(k),l.fillText(y,0,0),l.rotate(-k),l.translate(-V,-M)}e.hideLines||$(),B()},$=()=>{let l=s.value.getContext("2d");for(let d=0;d<e.count;d++)l.strokeStyle=C(),l.beginPath(),l.moveTo(Math.random()*i,Math.random()*h),l.lineTo(Math.random()*i,Math.random()*h),l.stroke()},B=()=>{t("getCode",n.value)};A(()=>{n.value&&n.value===e.value?t("isValid",!0):t("isValid",!1)}),O(n,l=>{t("update:modelValue",l)});const C=()=>{let l=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),v=Math.floor(Math.random()*256);return"rgb("+l+","+d+","+v+")"},D=()=>{s.value.getContext("2d").clearRect(0,0,i,h),n.value="",w()},L=()=>u("div",{class:"vue_client_recaptcha"},[u("div",{class:"vue_client_recaptcha_icon",onClick:()=>D()},[u(c.icon?c.icon:"svg",{class:"vue_client_recaptcha_icon_svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[u("path",{d:"M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z",fill:"#333333"})])]),u("canvas",{id:"captcha_canvas",class:`captcha_canvas ${e.canvasClass}`,ref:s},n.value)]);return(l,d)=>(r(),S(L))}});const K={components:{VueClientRecaptcha:Z},setup(){const a=_(""),t=U(),e=i=>{n.captchaCode=i},c=i=>{n.isValid=i,i&&s()},s=()=>{t.emit("emitCaptcha",!1)},n=_({captchaCode:null,isValid:!1});return{inputValue:a,data:n,getCaptchaCode:e,checkValidCaptcha:c,captchaM:s}}},Q={class:"sample-captcha"},X={class:"row"},tt={class:"col-sm-6"},et={class:"captcha-box"},ot={class:"col-sm-6"},at={class:"data-box"};function st(a,t,e,c,s,n){const i=P("VueClientRecaptcha");return r(),p("div",Q,[o("div",X,[o("div",tt,[o("section",et,[b(i,{value:c.inputValue,onGetCode:c.getCaptchaCode,onIsValid:c.checkValidCaptcha},null,8,["value","onGetCode","onIsValid"])])]),o("div",ot,[o("section",at,[g(o("input",{"onUpdate:modelValue":t[0]||(t[0]=h=>c.inputValue=h),placeholder:"Masukkan captcha",class:"input",type:"text"},null,512),[[T,c.inputValue]])])])])])}const lt=I(K,[["render",st]]);const m=a=>(J("data-v-c7eb0828"),a=a(),W(),a),ct={class:"container"},nt={class:"row justify-content-center"},it={class:"col-xl-10 col-lg-12 col-md-9"},dt={class:"card o-hidden border-0 shadow-lg my-5"},rt={class:"card-body p-0"},ht={class:"row"},ut=m(()=>o("div",{class:"col-lg-6 d-none d-lg-block bg-login-image"},null,-1)),pt={class:"col-lg-6"},mt={class:"p-5"},ft=m(()=>o("div",{class:"text-center"},[o("h1",{class:"h4 text-gray-900 mb-4"},"Selamat Datang!")],-1)),gt={class:"form-group"},_t={class:"form-group"},vt={class:"row"},bt={class:"col-10"},wt=["type"],Ct={class:"col-2"},kt={class:"form-group"},yt={class:"custom-control custom-checkbox small"},Vt=m(()=>o("label",{class:"custom-control-label",for:"customCheck"},"Ingat Saya",-1)),Mt={key:0,class:"confirmHuman"},xt=m(()=>o("img",{width:"48",height:"48",src:"https://img.icons8.com/fluency/48/checked.png",alt:"checked"},null,-1)),St=["disabled"],It=m(()=>o("hr",null,null,-1)),Pt={class:"text-center"},Tt={data(){return{form:{email:null,password:null},uniqueValue:"",cheked:!1,captchaValidate:!0,showPassword:!1}},methods:{togglePasswordVisibility(){this.showPassword=!this.showPassword},captchaCode(a){this.captchaValidate=a},login(){const a=new FormData;a.append("email",this.form.email),a.append("password",this.form.password),H.post("https://backend.alicornbot.com/api/auth/login",a).then(t=>{if(this.cheked===!0){const c=JSON.stringify(this.form);localStorage.setItem("login",c)}else localStorage.getItem("login")&&localStorage.removeItem("login");const e=t.data.access_token;localStorage.setItem("ssoAccess",e),sessionStorage.setItem("token",e),t.data.level=="1"?this.$router.push("/admin-dashboard"):t.data.level=="0"?this.$router.push("/user-dashboard"):this.$router.push("/unauthorized")}).catch(t=>{console.error(t),this.captchaValidate=!0,G.fire({icon:"error",title:"Oops...",text:"Login gagal. Periksa kembali email dan password Anda."})})}},mounted(){const a=document.querySelector("body");a.style.backgroundImage="url(/img/bg.webp)",a.style.backgroundRepeat="no-repeat",a.style.backgroundSize="cover"},created(){const a=localStorage.getItem("login");a&&(this.form=JSON.parse(a),this.cheked=!0)}},$t=Object.assign(Tt,{__name:"LoginView",setup(a){return(t,e)=>{const c=P("router-link");return r(),p("div",ct,[b(Y),o("div",nt,[o("div",it,[o("div",dt,[o("div",rt,[o("div",ht,[ut,o("div",pt,[o("div",mt,[ft,o("form",{class:"user",onSubmit:e[5]||(e[5]=j((...s)=>t.login&&t.login(...s),["prevent"]))},[o("div",gt,[g(o("input",{type:"email",class:"form-control form-control-user",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Masukkan Email","onUpdate:modelValue":e[0]||(e[0]=s=>t.form.email=s)},null,512),[[T,t.form.email]])]),o("div",_t,[o("div",vt,[o("div",bt,[g(o("input",{type:t.showPassword?"text":"password",class:"form-control form-control-user",id:"exampleInputPassword",placeholder:"Masukkan Password","onUpdate:modelValue":e[1]||(e[1]=s=>t.form.password=s)},null,8,wt),[[q,t.form.password]])]),o("div",Ct,[t.showPassword?f("",!0):(r(),p("i",{key:0,class:"bi customIcon bi-eye-slash-fill",onClick:e[2]||(e[2]=(...s)=>t.togglePasswordVisibility&&t.togglePasswordVisibility(...s))})),t.showPassword?(r(),p("i",{key:1,class:"bi customIcon bi-eye-fill",onClick:e[3]||(e[3]=(...s)=>t.togglePasswordVisibility&&t.togglePasswordVisibility(...s))})):f("",!0)])])]),o("div",kt,[o("div",yt,[g(o("input",{type:"checkbox",class:"custom-control-input",id:"customCheck","onUpdate:modelValue":e[4]||(e[4]=s=>t.cheked=s)},null,512),[[z,t.cheked]]),Vt])]),t.captchaValidate===!1?(r(),p("div",Mt,[xt,x(" You are human ")])):f("",!0),t.captchaValidate===!0?(r(),S(lt,{key:1,onEmitCaptcha:t.captchaCode},null,8,["onEmitCaptcha"])):f("",!0),o("button",{type:"submit",class:"btn btn-primary btn-user btn-block mt-3",disabled:t.captchaValidate}," Masuk ",8,St)],32),It,o("div",Pt,[b(c,{class:"small",to:"/register"},{default:F(()=>[x("Buat Akun!")]),_:1})])])])])])])])])])}}}),Nt=I($t,[["__scopeId","data-v-c7eb0828"]]);export{Nt as default};