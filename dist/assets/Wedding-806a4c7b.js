import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{o as _,c as f,r as t,a as e,w as a,b as s,d as r,e as D,f as q,t as M,m as F,F as k,g as I}from"./index-a4f9f56b.js";import{a as S}from"./axios-08622986.js";const A={data(){return{finishDate:"Feb 23, 2023 00:00:00",interval:null}},methods:{setCountdown(){const l=new Date(this.finishDate).getTime();this.interval=setInterval(function(){const n=new Date().getTime(),c=l-n;var i=Math.floor(c/(1e3*60*60*24)),o=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),m=Math.floor(c%(1e3*60*60)/(1e3*60)),u=Math.floor(c%(1e3*60)/1e3);document.getElementById("countdown")&&(document.getElementById("countdown").innerHTML=i+"d "+o+"h "+m+"m "+u+"s ",c<0&&(clearInterval(this.interval),document.getElementById("countdown").innerHTML="Gracias por acompañarnos!"))},1e3)}},watch:{"$route.params":{handler:function(l){this.$route.path=="/"&&this.setCountdown()},deep:!0,immediate:!0}}},B={class:"text-h3 pt-6",id:"countdown"};function N(l,n,c,i,o,m){return _(),f("span",B)}const P=v(A,[["render",N]]),T={components:{Countdown:P}},U=s("span",{class:"font-italic text-h2"},"Daniel & Jhovana",-1),E=s("br",null,null,-1),z=s("br",null,null,-1),J=s("span",{class:"text-h4"},"¡Nos casamos!",-1),j=s("br",null,null,-1),H=s("br",null,null,-1);function L(l,n,c,i,o,m){const u=t("Countdown"),p=t("v-card-text"),d=t("v-card"),b=t("v-img");return _(),f("div",null,[e(b,{src:"/images/main-img.jpg","max-height":"100vh",cover:"",class:"bg-grey-lighten-2"},{default:a(()=>[e(d,{class:"main-title"},{default:a(()=>[e(p,{class:"text-center text-h5 pa-6"},{default:a(()=>[U,E,z,J,j,H,e(u)]),_:1})]),_:1})]),_:1})])}const G=v(T,[["render",L]]),R={data(){return{dialog:!0}}},W={class:"text-center"},Y=s("h1",{class:"text-red-lighten-1"},"¡Bienvenido!",-1),K=s("br",null,null,-1),O=s("span",{class:"text-h6"},[r("Esta página es para confirmar tu asistencia a"),s("br"),r(" la boda.")],-1),Q=s("br",null,null,-1),X=s("span",{class:"text-h6"},[r("Por favor siga las intrucciones al final de la"),s("br"),r(" pagina para registrarse correctamente.")],-1),Z=s("br",null,null,-1);function ee(l,n,c,i,o,m){const u=t("v-card-text"),p=t("v-btn"),d=t("v-card-actions"),b=t("v-card"),x=t("v-dialog");return _(),f("div",W,[e(x,{modelValue:o.dialog,"onUpdate:modelValue":n[1]||(n[1]=h=>o.dialog=h),width:"auto"},{default:a(()=>[e(b,null,{default:a(()=>[e(u,{class:"text-center px-10"},{default:a(()=>[Y,K,O,Q,X,Z]),_:1}),e(d,null,{default:a(()=>[e(p,{color:"success",block:"",variant:"elevated",onClick:n[0]||(n[0]=h=>o.dialog=!1),class:"mt-2 elevation-6"},{default:a(()=>[r("Comencemos")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const te=v(R,[["render",ee]]),ne={},oe={class:"text-center py-10"},se=s("span",{class:"text-h4 font-italic text-grey-darken-2 pa-2"},[r(' "Asi que, no son ya más dos, si no una sola carne; por tanto, lo que Dios'),s("br"),r('ha unido no lo separe el hombre" - Mateo 19:6 ')],-1),ae=s("span",{class:"text-h5 font-italic text-grey-darken-2 pa-6"},[r(" Hola familia y/o amigos les enviamos un gran saludo y esperamos en el Señor"),s("br"),r(" que se encuentren bien. Nosotros estamos muy contentos y emocionados ya que este año cumpliremos"),s("br"),r(" la promesa que nos hicimos un 31 de Diciembre Jhovana y yo. "),s("br"),r("Han sido meses de mucha espera pero el momento ha llegado, Gracias a Dios."),s("br"),r(" Tenemos la dicha de invitarles este 30 de Diciembre a que nos acompañes a la celebración de nuestra boda,"),s("br"),r(" de parte de Jhova & yo esperamos que puedas asistir. ")],-1);function le(l,n){const c=t("v-img"),i=t("v-card");return _(),f("div",oe,[se,e(i,{class:"main-color elevation-0"},{default:a(()=>[e(c,{src:"/images/abrazo.jpg","max-height":"60vh",cover:"",class:"ma-12 rounded"})]),_:1}),ae])}const ce=v(ne,[["render",le]]),re={},ie={class:"text-center pa-10"};function de(l,n){const c=t("v-btn");return _(),f("div",ie,[e(c,{color:"black",size:"x-large"},{default:a(()=>[r(" Detalle de la Boda ")]),_:1})])}const _e=v(re,[["render",de]]),me={},ue=s("span",{class:"font-italic text-h2"},"¡El momento al fin",-1),pe=s("span",{class:"font-italic text-h2"},"Ha llegado!",-1);function fe(l,n){const c=t("v-spacer"),i=t("v-card-text"),o=t("v-img");return _(),f("div",null,[e(o,{src:"/images/momento.jpg","max-height":"100vh",cover:"",class:"bg-grey-lighten-2"},{default:a(()=>[e(i,{class:"text-center text-h5 pa-6 second-title"},{default:a(()=>[ue,e(c,{class:"pa-16 ma-16"}),pe]),_:1})]),_:1})])}const ve=v(me,[["render",fe]]),he={},ge=s("br",null,null,-1);function be(l,n){const c=t("v-card-text"),i=t("v-img"),o=t("v-card");return _(),f("div",null,[e(c,{class:"text-h3 font-italic text-grey-darken-2 pt-16 text-center"},{default:a(()=>[r(" Estas invitado:"),ge,r(" Salón Jardín Florencia ")]),_:1}),e(o,{class:"elevation-0"},{default:a(()=>[e(i,{src:"/images/invitation.jpeg","max-height":"95vh",class:"rounded main-color"})]),_:1})])}const xe=v(he,[["render",be]]),$e={};function ye(l,n){const c=t("v-card-text"),i=t("v-img"),o=t("v-card");return _(),f("div",null,[e(c,{class:"text-h4 font-italic text-grey-darken-2 pt-16 text-center"},{default:a(()=>[r(" Te compartimos el programa para que estes familiarizado con los horarios ")]),_:1}),e(o,{class:"elevation-0 main-color rounded"},{default:a(()=>[e(i,{src:"/images/programa-boda.png","max-height":"95vh",class:"rounded main-color mx-14"})]),_:1})])}const we=v($e,[["render",ye]]);const Ve={},ke={class:"map mt-16"},De=s("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.37073759274!2d-93.1753415726563!3d16.72173330670081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd9f426455b9f%3A0xcbe82a96a508c769!2sSal%C3%B3n%20Jardin%20Florencia!5e1!3m2!1ses-419!2smx!4v1670208957812!5m2!1ses-419!2smx",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1),Me=[De];function Ce(l,n){return _(),f("div",ke,Me)}const qe=v(Ve,[["render",Ce]]),Fe={},Ie=s("span",{class:"text-h2"},"Esperamos que puedas acompañarnos!",-1),Se=s("br",null,null,-1),Ae=s("br",null,null,-1),Be=s("span",{class:"text-h4"},"Porfavor responda antes del 23 de Diciembre.",-1),Ne=s("br",null,null,-1),Pe=s("span",{class:"text-subtitle-1"},"(Si no responde a esta invitación no se le agregará a la lista de invitados).",-1);function Te(l,n){const c=t("v-spacer"),i=t("v-card-text"),o=t("v-card");return _(),f("div",null,[e(o,{class:"text-center main-color elevation-0"},{default:a(()=>[e(i,null,{default:a(()=>[Ie,Se,Ae,e(c,{class:"my-6"}),Be,Ne,e(c,{class:"my-6"}),Pe]),_:1})]),_:1})])}const Ue=v(Fe,[["render",Te]]),Ee={props:{request:{type:Function,required:!0}},data(){return{mock:!1,loading:!1,formComplete:!1,form:{first_name:null,second_name:null,first_last_name:null,second_last_name:null,assistance:null},options:["Asistiremos","No asistiremos"]}},methods:{async submit(){try{this.loading=!0;const l=await S.post("https://apishelter.webunderdevelopment.com/api/guests",this.form);this.request(),this.$emit("snackbarNotify",{type:"success",message:l.data.message}),this.redirect(l.data.data.id)}catch(l){console.log(l),this.$emit("snackbarNotify",{type:"error",message:l.response.data.exception})}this.loading=!1},redirect(l){setTimeout(()=>this.$router.push({path:`/invitados/${l}`}),5e3)},required(l){return!!l||"Campo requerido"}}},ze=s("span",{class:"text-h2"},[r(" Podras asistir?"),s("br")],-1),Je=s("span",{class:"text-subtitle-1 grey-lighten-4"},[r(" Ingresa tus nombres y apellidos y selecciona tu asistencia."),s("br")],-1),je=s("span",{class:"text-subtitle-2 grey-lighten-4"},' Si tus apellidos o nombre son (ejemplo) "de Maria", "De los Santos" etc... escribelo dentro del mismo input. ',-1);function He(l,n,c,i,o,m){const u=t("v-card-text"),p=t("v-text-field"),d=t("v-col"),b=t("v-row"),x=t("v-container"),h=t("v-select"),$=t("v-btn"),y=t("v-form"),w=t("v-sheet"),V=t("v-card");return _(),D(V,{color:"",class:"elevation-0"},{default:a(()=>[e(u,{class:"text-center"},{default:a(()=>[ze,Je,je]),_:1}),e(w,{rounded:"",width:"800",class:"mx-auto elevation-0"},{default:a(()=>[e(y,{modelValue:o.formComplete,"onUpdate:modelValue":n[5]||(n[5]=g=>o.formComplete=g),onSubmit:n[6]||(n[6]=q(()=>{},["prevent"]))},{default:a(()=>[e(x,null,{default:a(()=>[e(b,null,{default:a(()=>[e(d,{cols:"12",sm:"6"},{default:a(()=>[e(p,{modelValue:o.form.first_name,"onUpdate:modelValue":n[0]||(n[0]=g=>o.form.first_name=g),label:"Primer nombre",rules:[m.required],clearable:"","data-cy":"input-first-name"},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(p,{modelValue:o.form.second_name,"onUpdate:modelValue":n[1]||(n[1]=g=>o.form.second_name=g),label:"Segundo nombre",clearable:"","data-cy":"input-second-name"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:a(()=>[e(b,null,{default:a(()=>[e(d,{cols:"12",sm:"6"},{default:a(()=>[e(p,{modelValue:o.form.first_last_name,"onUpdate:modelValue":n[2]||(n[2]=g=>o.form.first_last_name=g),label:"Primer apellido",rules:[m.required],clearable:"","data-cy":"input-first-last-name"},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(p,{modelValue:o.form.second_last_name,"onUpdate:modelValue":n[3]||(n[3]=g=>o.form.second_last_name=g),label:"Segundo apellido",clearable:"","data-cy":"input-second-last-name"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:a(()=>[e(h,{modelValue:o.form.assistance,"onUpdate:modelValue":n[4]||(n[4]=g=>o.form.assistance=g),items:o.options,label:"Asistira?",variant:"solo",rules:[m.required],"data-cy":"selector-answer"},null,8,["modelValue","items","rules"])]),_:1}),e($,{disabled:!o.formComplete,loading:o.loading,type:"submit",block:"",class:"mt-2",variant:"elevated",color:"success",onClick:m.submit,"data-cy":"answer-invitation"},{default:a(()=>[r(" Responder ")]),_:1},8,["disabled","loading","onClick"])]),_:1},8,["modelValue"])]),_:1})]),_:1})}const C=v(Ee,[["render",He]]),Le={components:{Form:C},data(){return{dialog:!1,visible:!1,message:"",color:"",timeout:1e4}},methods:{updateDialog(){this.dialog=!1},notify(l){this.visible=!1,this.color=l.type,this.message=l.message,this.$nextTick(()=>{this.visible=!0})}}},Ge={class:"text-center"};function Re(l,n,c,i,o,m){const u=t("v-btn"),p=t("v-snackbar"),d=t("Form"),b=t("v-card"),x=t("v-dialog");return _(),f(k,null,[e(p,{modelValue:o.visible,"onUpdate:modelValue":n[1]||(n[1]=h=>o.visible=h),color:o.color,timeout:o.timeout},{actions:a(()=>[e(u,{onClick:n[0]||(n[0]=h=>o.visible=!1)},{default:a(()=>[r(" Cerrar ")]),_:1})]),default:a(()=>[r(M(o.message)+" ",1)]),_:1},8,["modelValue","color","timeout"]),s("div",Ge,[e(x,{modelValue:o.dialog,"onUpdate:modelValue":n[2]||(n[2]=h=>o.dialog=h),width:"auto"},{activator:a(({props:h})=>[e(u,F({color:"success",size:"large"},h,{"data-cy":"open-dialog"}),{default:a(()=>[r(" Responder ")]),_:2},1040)]),default:a(()=>[e(b,{class:"pa-10","data-cy":"form-to-answer"},{default:a(()=>[e(d,{request:m.updateDialog,onSnackbarNotify:m.notify},null,8,["request","onSnackbarNotify"])]),_:1})]),_:1},8,["modelValue"])])],64)}const We=v(Le,[["render",Re]]),Ye={data:()=>({icons:["mdi-facebook","mdi-linkedin","mdi-instagram"]}),methods:{redirect(){this.$router.push({path:"/admin"})}}},Ke={class:"main-color d-flex flex-column"},Oe={class:"d-flex w-100 align-center px-4 mb-1"},Qe={class:"px-4 py-2 bg-black text-center w-100"},Xe=s("strong",null,"Daniel & Jhovana",-1);function Ze(l,n,c,i,o,m){const u=t("v-btn"),p=t("v-spacer");return _(),f("div",Ke,[s("div",Oe,[s("div",null,[e(u,{color:"black",variant:"plain",onClick:n[0]||(n[0]=d=>m.redirect())},{default:a(()=>[r(" Siguenos! ")]),_:1})]),e(p),(_(!0),f(k,null,I(l.icons,d=>(_(),D(u,{key:d,class:"mx-4",icon:d,variant:"plain",size:"small"},null,8,["icon"]))),128))]),s("div",Qe,[r(M(new Date().getFullYear())+" — ",1),Xe])])}const et=v(Ye,[["render",Ze]]);const tt={components:{Main:G,InstructionModal:te,Verse:ce,Details:_e,Moments:ve,Invitation:xe,Plan:we,Map:qe,Advice:Ue,Answer:We,Form:C,Footer:et},data(){return{openForm:!0}}};function nt(l,n,c,i,o,m){const u=t("Main"),p=t("InstructionModal"),d=t("Verse"),b=t("Details"),x=t("Moments"),h=t("Invitation"),$=t("Plan"),y=t("Map"),w=t("Advice"),V=t("Answer"),g=t("Footer");return _(),f(k,null,[e(u),e(p),e(d),e(b),e(x),e(h),e($),e(y),e(w,{class:"mt-10"}),e(V),e(g)],64)}const lt=v(tt,[["render",nt],["__scopeId","data-v-041deeb5"]]);export{lt as default};
