import{a as g,S as v,i as y}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const L="51663153-45016a947364047e6aa27bf79",b=async(s,r)=>(await g.get("https://pixabay.com/api/",{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data.hits,o=document.querySelector(".gallery"),m=new v(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function x(){return d.insertAdjacentHTML("afterend",'<div class="loader"></div>'),document.querySelector(".loader")}function S(){document.querySelector(".loader")&&document.querySelector(".loader").remove()}function q(){o.classList.contains("visually-hidden")||(o.innerHTML="",o.classList.add("visually-hidden"),c.classList.add("visually-hidden"))}function w(s){o.classList.contains("visually-hidden")&&(o.classList.remove("visually-hidden"),c.classList.remove("visually-hidden"));const r=s.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:l,comments:f,downloads:h})=>`<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${i}">
      <img
        class="gallery-image"
        src="${a}"
        data-source="${i}"
        alt="${e}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes <br/>${t}</p></li>
<li class="card-txt-item"><p class="card-txt">views <br/>${l}</p></li>
<li class="card-txt-item"><p class="card-txt">comments <br/>${f}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads <br/>${h}</p></li>
</ul>
      </div>
      </div>
  </li>`).join("");o.insertAdjacentHTML("beforeend",r),m.refresh(),m.on("show.simplelightbox",()=>{})}const d=document.querySelector(".form"),P=document.querySelector("input[type=text]"),c=document.querySelector(".btn-load-more");let u=1,n=null;const p=async(s,r)=>{try{const a=await b(s,r);if(a.length===0)throw new Error;w(a);const i=Math.ceil(a.length/15);r===i&&(c.classList.add("visually-hidden"),y.show({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
    `}))}catch{y.error({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
    `})}finally{S(),d.reset()}};d.addEventListener("submit",s=>{n=null,u=1,q(),s.preventDefault(),n=String(P.value).trim(),n===""?(d.reset(),y.error({position:"topRight",message:"Fill empty fields"})):(x(),p(n,u))});c&&c.addEventListener("click",s=>{u++,p(n,u)});
//# sourceMappingURL=index.js.map
