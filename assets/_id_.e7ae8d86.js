import{_ as v,a as g,b as w}from"./SvgFace.vue_vue_type_script_setup_true_lang.2dfd5d0a.js";import{d as f,l as y,w as b,o as c,c as d,a as e,h as C,f as m,m as _,s as p,x as $}from"./index.4e3bbf37.js";import{_ as k}from"./SvgProfil.vue_vue_type_script_setup_true_lang.a10c130f.js";const E={class:"w-screen overflow-y-hidden"},S={class:"w-full overflow-hidden"},A={class:"flex justify-around bg-grisPages p-5 text-noir"},B={class:"hautG"},F=e("p",{class:"azonix text-xl"},"L'Azox 3700",-1),N=e("button",{class:"mx-auto"},"Annuler",-1),V={class:""},z={class:"flex items-center gap-1 space-x-10"},I=e("li",null,[e("a",{href:"#profil"},[e("img",{src:g,alt:"Ic\xF4nes fl\xE8ches gauches"})])],-1),M={class:"carousel w-64"},P=e("li",null,[e("a",{href:"#face"},[e("img",{src:w,alt:"Ic\xF4nes fl\xE8ches droites"})])],-1),j=f({__name:"FormSuppression",props:["id","data"],async setup(a){var u;let o,n;const l=a,h=$(),t=y((u=l.data)!=null?u:{});if(l.id){let{data:r,error:s}=([o,n]=b(()=>p.from("montre").select("*").eq("id_montre",l.id)),o=await o,n(),o);s||!r?console.log("n'a pas pu charger le table montre :",s):t.value=r[0]}async function x(){const{data:r,error:s}=await p.from("montre").delete().match({id_montre:t.value.id_montre});s?console.error("Erreur \xE0 la suppression de ",t.value,"erreur :",s):h.push("/listes")}return(r,s)=>(c(),d("div",E,[e("main",S,[e("div",A,[e("div",B,[F,e("div",null,[t.value.id_montre?(c(),d("button",{key:0,class:"mx-auto my-10 text-sm md:my-20 md:text-base",onClick:s[0]||(s[0]=i=>r.$refs.dialogSupprimer.showModal())}," Supprimer cette montre ")):C("",!0),e("dialog",{ref:"dialogSupprimer",onClick:s[2]||(s[2]=i=>i.currentTarget.close())},[N,e("button",{onClick:s[1]||(s[1]=i=>x()),class:"md:my20 mx-auto my-10"}," Confirmer la suppression ")],512)])]),e("div",V,[e("ul",z,[I,e("div",M,[m(k,_({class:"carousel-item w-64"},t.value,{id:"profil"}),null,16),m(v,_({class:"carousel-item w-64"},t.value,{id:"face"}),null,16)]),P])])])])]))}}),q=e("h1",null,"wfihvfbvn",-1),T=f({__name:"[id]",props:{id:null},setup(a){return(o,n)=>(c(),d("div",null,[q,m(j,{id:a.id},null,8,["id"])]))}});export{T as default};
