import{a as g,S as v,i as y}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const L="51663153-45016a947364047e6aa27bf79",b=async(s,r)=>(await g.get("https://pixabay.com/api/",{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data,l=document.querySelector(".gallery"),m=new v(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function x(){return d.insertAdjacentHTML("afterend",'<div class="loader"></div>'),document.querySelector(".loader")}function S(){document.querySelector(".loader")&&document.querySelector(".loader").remove()}function q(){l.classList.contains("visually-hidden")||(l.innerHTML="",l.classList.add("visually-hidden"),c.classList.add("visually-hidden"))}function w(s){l.classList.contains("visually-hidden")&&(l.classList.remove("visually-hidden"),c.classList.remove("visually-hidden"));const r=s.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:o,comments:f,downloads:h})=>`<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${a}">
      <img
        class="gallery-image"
        src="${i}"
        data-source="${a}"
        alt="${e}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes <br/>${t}</p></li>
<li class="card-txt-item"><p class="card-txt">views <br/>${o}</p></li>
<li class="card-txt-item"><p class="card-txt">comments <br/>${f}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads <br/>${h}</p></li>
</ul>
      </div>
      </div>
  </li>`).join("");l.insertAdjacentHTML("beforeend",r),m.refresh(),m.on("show.simplelightbox",()=>{})}const d=document.querySelector(".form"),O=document.querySelector("input[type=text]"),c=document.querySelector(".btn-load-more");let u=1,n=null;const p=async(s,r)=>{try{const i=await b(s,r);if(i.totalHits===0)throw new Error;w(i.hits);const a=Math.ceil(i.totalHits/15);r===a&&(c.classList.add("visually-hidden"),y.show({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
    `}));let o={top:document.querySelector(".gallery-item").getBoundingClientRect().height*3,behavior:"smooth"};window.scrollBy(o)}catch{y.error({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
    `})}finally{S(),d.reset()}};d.addEventListener("submit",s=>{n=null,u=1,q(),s.preventDefault(),n=String(O.value).trim(),n===""?(d.reset(),y.error({position:"topRight",message:"Fill empty fields"})):(x(),p(n,u))});c&&c.addEventListener("click",s=>{u++,p(n,u)});
//# sourceMappingURL=index.js.map
