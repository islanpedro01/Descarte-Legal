(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n=[{img:"./imgs/informe-se.png",title:"Informe-se para uma cidade mais verde!",content:"Aqui nós lhe damos dicas de boas práticas para tornar sua cidade mais verde! Tornando-a em um lugar melhor para todos!"},{img:"./imgs/gps.png",title:"Descubra os locais ideais para o descarte!",content:"Tenha acesso a localização exata dos locais mais indicados para o despejo dos seus resíduos!"},{img:"./imgs/denuncie.png",title:"Ajude a fiscalização e denuncie!",content:"Trabalhe com o poder público auxiliando na identificação dos responsáveis pelo descarte irregular!"}];const c=document.querySelector("html"),d=document.querySelector(".cards"),l=document.querySelector(".light"),u=document.querySelector(".dark"),m=document.querySelectorAll(".darkmode");function p(t){return`<div class=" shadow-xl m-5 overflow-hidden rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white m-10">
            <img
              src="${t.img}"
              alt="image"
              class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3>
                <a
                  href="javascript:void(0)"
                  class="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                  ${t.title}
                </a>
              </h3>
              <p class="mb-7 text-base leading-relaxed text-body-color">
                ${t.content}
              </p>

              <a
                href="javascript:void(0)"
                class="inline-block rounded-full border border-black py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-musgo hover:text-white hover:border-0 dark:border-white"
              >
                View Details
              </a>
            </div>
            </div>
          `}function f(){c.classList.toggle("dark"),l.classList.toggle("hidden"),u.classList.toggle("hidden")}m.forEach(t=>t.addEventListener("click",function(o){f()}));d.innerHTML=n.map(t=>p(t)).join("");function g(t){const o=t.innerHTML.split("");t.innerHTML="",o.forEach((s,i)=>{setTimeout(()=>t.innerHTML+=s,200*i)})}const h=document.querySelector("#text");g(h);
