(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=[{img:"./imgs/informe-se.png",title:"Informe-se para uma cidade mais verde!",content:"Aqui nós lhe damos dicas de boas práticas para tornar sua cidade mais verde! Tornando-a em um lugar melhor para todos!"},{img:"./imgs/gps.png",title:"Descubra os locais ideais para o descarte!",content:"Tenha acesso a localização exata dos locais mais indicados para o despejo dos seus resíduos!"},{img:"./imgs/denuncie.png",title:"Ajude a fiscalização e denuncie!",content:"Trabalhe com o poder público auxiliando na identificação dos responsáveis pelo descarte irregular!"}];const l=document.querySelector("html"),u=document.querySelector(".cards"),m=document.querySelector(".light"),p=document.querySelector(".dark"),f=document.querySelectorAll(".darkmode");function g(r){return`<div class=" shadow-xl m-5 overflow-hidden rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white m-10">
            <img
              src="${r.img}"
              alt="image"
              class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3>
                <a
                  href="javascript:void(0)"
                  class="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                  ${r.title}
                </a>
              </h3>
              <p class="mb-7 text-base leading-relaxed text-body-color">
                ${r.content}
              </p>

              <a
                href="javascript:void(0)"
                class="inline-block rounded-full border border-black py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-musgo hover:text-white hover:border-0 dark:border-white"
              >
                View Details
              </a>
            </div>
            </div>
          `}function h(){l.classList.toggle("dark"),m.classList.toggle("hidden"),p.classList.toggle("hidden")}f.forEach(r=>r.addEventListener("click",function(o){h()}));u.innerHTML=d.map(r=>g(r)).join("");const n=document.querySelector("#text");function c(){const r=" Descarte!".split("");n.innerHTML="",r.forEach((o,i)=>{setTimeout(()=>n.innerHTML+=o,250*i)}),setTimeout(()=>c(),3500)}c();
