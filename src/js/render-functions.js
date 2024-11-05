import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector(".gallery");

let test = new SimpleLightbox(".gallary a");

export function renderData(apiArray) {
    gallery.innerHTML = apiArray.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li class="list-item">
            <a href="${largeImageURL}">
                <img class="list-item-img" src="${webformatURL}" alt="${tags}">
                <div class="info-container">
                    <div class="list-item-container">
                        <h3 class="title">Likes</h3>
                        <p class="text">${likes}</p>
                    </div>
                    <div class="list-item-container">
                        <h3 class="title">Views</h3>
                        <p class="text">${views}</p>
                    </div>
                    <div class="list-item-container">
                        <h3 class="title">Comments</h3>
                        <p class="text">${comments}</p>
                    </div>
                    <div class="list-item-container">
                        <h3 class="title">Downloads</h3>
                        <p class="text">${downloads}</p>
                    </div>
                </div>
            </a>
        </li>
    `).join("");
    test.refresh();
}