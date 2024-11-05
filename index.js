import{S as l}from"./assets/vendor-CWwQENHe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const a=document.querySelector(".gallery");let u=new l(".gallary a");function d(o){a.innerHTML=o.map(({webformatURL:s,largeImageURL:t,tags:c,likes:e,views:r,comments:i,downloads:n})=>`<li class="list-item">
            <a href="${t}">
                <img class="list-item-img" src="${s}" alt="${c}">
                <div class="info-container">
                    <div class="list-item-container">
                        <h3 class="title">Likes</h3>
                        <p class="text">${e}</p>
                    </div>
                    <div class="list-item-container">
                        <h3 class="title">Views</h3>
                        <p class="text">${r}</p>
                    </div>
                    <div class="list-item-container">
                        <h3 class="title">Comments</h3>
                        <p class="text">${i}</p>
                    </div>
                    <div class="list-item-container">
                        <h3 class="title">Downloads</h3>
                        <p class="text">${n}</p>
                    </div>
                </div>
            </a>
        </li>
    `).join(""),u.refresh()}const f="https://pixabay.com/api/",m="46908572-03cf8a6fd9728954a0f037e03";function h(o){const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).catch(t=>{console.log("catch",t)})}const p=document.querySelector(".form");document.querySelector(".loader");document.querySelector(".gallery");p.addEventListener("submit",y);function y(o){o.preventDefault();const s=o.currentTarget.elements.request.value;h(s).then(t=>{console.log(t),d(t.hits)}).catch(t=>{console.log(t)})}
//# sourceMappingURL=index.js.map
