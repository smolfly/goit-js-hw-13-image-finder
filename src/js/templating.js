import galleryItems from '../templates/gallery.hbs';
import refs from './refs';

function updateImageMarkup(imageArray) {
  const markup = galleryItems(imageArray);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateImageMarkup;