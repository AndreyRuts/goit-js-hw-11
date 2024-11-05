import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchData } from "./js/pixabay-api";
import { renderData } from "./js/render-functions";

const form = document.querySelector(".form");
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const requestValue = event.currentTarget.elements.request.value;

  fetchData(requestValue)
    .then((data) => {
        console.log(data); // temp assistant
      renderData(data.hits);
    })
    .catch((data) => {
      console.log(data);
      
    })
}
