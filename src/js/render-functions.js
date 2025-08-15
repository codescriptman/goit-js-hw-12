import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { form } from '../main';
import { btnMore } from '../main';

export const gallery = document.querySelector('.gallery');

const galleryUse = new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function showLoader() {
  form.insertAdjacentHTML('afterend', '<div class="loader"></div>');
  return document.querySelector('.loader');
}
export function hideLoader() {
  if (document.querySelector('.loader')) {
    document.querySelector('.loader').remove();
  }
  return;
}
export function clearGallery() {
  if (!gallery.classList.contains('visually-hidden')) {
    gallery.innerHTML = '';
    gallery.classList.add('visually-hidden');
    btnMore.classList.add('visually-hidden');
  }
  return;
}
export function createGallery(images) {
  if (gallery.classList.contains('visually-hidden')) {
    gallery.classList.remove('visually-hidden');
    btnMore.classList.remove('visually-hidden');
  }
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        data-source="${largeImageURL}"
        alt="${tags}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes <br/>${likes}</p></li>
<li class="card-txt-item"><p class="card-txt">views <br/>${views}</p></li>
<li class="card-txt-item"><p class="card-txt">comments <br/>${comments}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads <br/>${downloads}</p></li>
</ul>
      </div>
      </div>
  </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  galleryUse.refresh();
  galleryUse.on('show.simplelightbox', () => {});
}
