import{a as f,S as g,i as u}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const h="51663153-45016a947364047e6aa27bf79",v=async(s,t)=>(await f.get("https://pixabay.com/api/",{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data.hits,i=document.querySelector(".gallery"),m=document.querySelector(".btn-load-more"),n=new g(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(){return l.insertAdjacentHTML("afterend",'<div class="loader"></div>'),document.querySelector(".loader")}function d(){document.querySelector(".loader")&&document.querySelector(".loader").remove()}function b(){i.classList.contains("visually-hidden")||(i.innerHTML="",i.classList.add("visually-hidden"),m.classList.add("visually-hidden"))}function x(s){i.classList.contains("visually-hidden")&&(i.classList.remove("visually-hidden"),m.classList.remove("visually-hidden"));const t=s.map(({webformatURL:c,largeImageURL:a,tags:e,likes:r,views:o,comments:p,downloads:y})=>`<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${a}">
      <img
        class="gallery-image"
        src="${c}"
        data-source="${a}"
        alt="${e}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes <br/>${r}</p></li>
<li class="card-txt-item"><p class="card-txt">views <br/>${o}</p></li>
<li class="card-txt-item"><p class="card-txt">comments <br/>${p}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads <br/>${y}</p></li>
</ul>
      </div>
      </div>
  </li>`).join("");i.insertAdjacentHTML("afterbegin",t),n.refresh(),n.on("show.simplelightbox",()=>{})}const l=document.querySelector(".form"),S=document.querySelector("input[type=text]"),q=async s=>{try{const t=await v(s);if(t.length===0)throw new Error;x(t),d(),l.reset()}catch{u.error({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
    `})}finally{d(),l.reset()}};l.addEventListener("submit",s=>{b(),s.preventDefault();let t=String(S.value).trim();t===""?(l.reset(),u.error({position:"topRight",message:"Fill empty fields"})):(L(),q(t))});
//# sourceMappingURL=index.js.map
