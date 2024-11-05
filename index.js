import"./assets/vendor-BUiUdO2e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector(".gallery");function l(i){return i.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:o,downloads:c})=>`<li class="list-item">
            <a href="${r}">
                <img class="list-item-img" src="${s}" alt="${n}">
                <div class="info-container">
                    <div class="list-item-container">
                        <h3 class="title">Likes</h3>
                        <p class="text">${e}</p>
                    </div>
                    <div class="list-item-container">
                        <h3 class="title">Views</h3>
                        <p class="text">${t}</p>
                    </div>
                    <div class="list-item-container">
                        <h3 class="title">Comments</h3>
                        <p class="text">${o}</p>
                    </div>
                    <div class="list-item-container">
                        <h3 class="title">Downloads</h3>
                        <p class="text">${c}</p>
                    </div>
                </div>
            </a>
        </li>
    `).join("")}const a="https://pixabay.com/api/",u="46908572-03cf8a6fd9728954a0f037e03";function d(i){const s=new URLSearchParams({key:u,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${a}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}const f=document.querySelector(".form");document.querySelector(".loader");const m=document.querySelector(".gallery");f.addEventListener("submit",p);function p(i){i.preventDefault();const s=i.currentTarget.elements.request.value;d(s).then(r=>{console.log(r),m.innerHTML=l(r.hits)}).catch(r=>{console.log(r)})}
//# sourceMappingURL=index.js.map
