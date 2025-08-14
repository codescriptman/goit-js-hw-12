import{a as m,S as y,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="51663153-45016a947364047e6aa27bf79";async function g(i,r){return(await m.get("https://pixabay.com/api/",{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data.hits}const l=document.querySelector(".gallery"),h=document.querySelector("btn-load-more"),d=new y(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(){return n.insertAdjacentHTML("afterend",'<div class="loader"></div>'),document.querySelector(".loader")}function b(){document.querySelector(".loader")&&document.querySelector(".loader").remove()}function x(){l.classList.contains("visually-hidden")||l.classList.add("visually-hidden")}function L(i){l.classList.contains("visually-hidden")&&(l.classList.remove("visually-hidden"),h.classList.remove("visually-hidden"));const r=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:o,comments:u,downloads:p})=>`<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${a}">
      <img
        class="gallery-image"
        src="${s}"
        data-source="${a}"
        alt="${e}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes <br/>${t}</p></li>
<li class="card-txt-item"><p class="card-txt">views <br/>${o}</p></li>
<li class="card-txt-item"><p class="card-txt">comments <br/>${u}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads <br/>${p}</p></li>
</ul>
      </div>
      </div>
  </li>`).join("");l.insertAdjacentHTML("afterbegin",r),d.refresh(),d.on("show.simplelightbox",()=>{})}const n=document.querySelector(".form"),S=document.querySelector("input[type=text]");n.addEventListener("submit",i=>{x(),i.preventDefault();let r=String(S.value).trim();r===""?(n.reset(),c.error({position:"topRight",message:"Fill empty fields"})):(v(),g(r).then(s=>{if(s.length===0)throw new Error;return L(s),s}).catch(s=>{c.error({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
`})}).finally(()=>{b(),n.reset()}))});
//# sourceMappingURL=index.js.map
