import{S as l,i as u}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d=document.querySelector(".gallery");function f(i){d.innerHTML=i.map(({webformatURL:s,largeImageURL:t,tags:o,likes:e,views:r,comments:n,downloads:a})=>`<li class="list-item">
            <a href="${t}">
                <img class="list-item-img" src="${s}" alt="${o}">
            </a>
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
                    <p class="text">${n}</p>
                </div>
                <div class="list-item-container">
                    <h3 class="title">Downloads</h3>
                    <p class="text">${a}</p>
                </div>
            </div>         
        </li>
    `).join(""),new l(".list-item a"),test.refresh()}const m="https://pixabay.com/api/",h="46908572-03cf8a6fd9728954a0f037e03";function p(i){const s=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).catch(t=>{console.log("catch",t)})}const y=document.querySelector(".form"),c=document.querySelector(".loader"),g=document.querySelector(".gallery");y.addEventListener("submit",v);function v(i){i.preventDefault();const s=i.target.elements.request.value;s!==""&&(g.innerHTML="",c.style.display="block",p(s).then(t=>{t.hits.length===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),c.style.display="none",f(t.hits)}).catch(t=>{console.log(t)}))}
//# sourceMappingURL=index.js.map
