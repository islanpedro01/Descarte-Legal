(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=[{img:"./imgs/informe-se.png",title:"Informe-se para uma cidade mais verde!",content:"Aqui nós lhe damos dicas de boas práticas para tornar sua cidade mais verde! Tornando-a em um lugar melhor para todos!"},{img:"./imgs/gps.png",title:"Descubra os locais ideais para o descarte!",content:"Tenha acesso a localização exata dos locais mais indicados para o despejo dos seus resíduos!"},{img:"./imgs/denuncie.png",title:"Ajude a fiscalização e denuncie!",content:"Trabalhe com o poder público auxiliando na identificação dos responsáveis pelo descarte irregular!"}];const c=document.querySelector("html"),d=document.querySelector(".cards"),l=document.querySelector(".light"),u=document.querySelector(".dark"),m=document.querySelectorAll(".darkmode");function g(r){return`<div class="max-w-sm max-h-sm m-auto h-auto mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src=${r.img} alt=>
    </a>
    <div class="p-5 h-64 grid grid-cols-3 grid-rows-3">
        <a class="col-span-3" href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${r.title}</h5>
        </a>
        <p class="mb-3 font-normal col-span-3 text-gray-700 dark:text-gray-400">${r.content}</p>
        <a href="#" class="inline-flex h-3/4 self-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Leia mais
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>`}function f(){c.classList.toggle("dark"),l.classList.toggle("hidden"),u.classList.toggle("hidden")}m.forEach(r=>r.addEventListener("click",function(o){f()}));d.innerHTML=n.map(r=>g(r)).join("");
