import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { createGallery } from './js/render-functions';

export const form = document.querySelector('.form');
const input = document.querySelector('input[type=text]');
const btn = document.querySelector('button[type="submit"]');

form.addEventListener('submit', event => {
  clearGallery();
  event.preventDefault();
  let query = String(input.value).trim();
  if (query === '') {
    form.reset();
    iziToast.error({
      position: 'topRight',
      message: `Fill empty fields`,
    });
  } else {
    showLoader();
    getImagesByQuery(query)
      .then(res => {
        if (res.data.hits.length === 0) {
          throw new Error();
        }
        createGallery(res.data.hits);
        return res.data.hits;
      })
      .catch(error => {
        iziToast.error({
          position: 'topRight',
          message: `Sorry, there are no images matching your search query. Please try again!
`,
        });
      })
      .finally(() => {
        hideLoader();
        form.reset();
      });
  }
});
