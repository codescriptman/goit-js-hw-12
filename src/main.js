import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { createGallery } from './js/render-functions';

export const form = document.querySelector('.form');
const input = document.querySelector('input[type=text]');
export const btnMore = document.querySelector('.btn-load-more');

let page = 1;
let query = null;

const catchFunc = async (query, page) => {
  try {
    const images = await getImagesByQuery(query, page);
    if (images.length === 0) {
      throw new Error();
    }
    createGallery(images);
    const totalPages = Math.ceil(images.length / 15);
    if (page === totalPages) {
      btnMore.classList.add('visually-hidden');
      iziToast.show({
        position: 'topRight',
        message: `Sorry, there are no images matching your search query. Please try again!
    `,
      });
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: `Sorry, there are no images matching your search query. Please try again!
    `,
    });
  } finally {
    hideLoader();
    form.reset();
  }
};

form.addEventListener('submit', event => {
  query = null;
  page = 1;
  clearGallery();
  event.preventDefault();
  query = String(input.value).trim();
  if (query === '') {
    form.reset();
    iziToast.error({
      position: 'topRight',
      message: `Fill empty fields`,
    });
  } else {
    showLoader();
    catchFunc(query, page);
  }
});

if (btnMore) {
  btnMore.addEventListener('click', event => {
    page++;
    catchFunc(query, page);
  });
}
