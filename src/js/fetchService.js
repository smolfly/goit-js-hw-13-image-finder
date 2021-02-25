
import apiService from './apiService';
import updateImageMarkup from './templating';
import refs from './refs';

import debounce from 'lodash.debounce';

const debouncedInput = debounce(event => {
  const searchField = event.target;
  apiService.value = searchField.value;

  if (apiService.value === '') {
    clearImagesContainer();
    refs.loadMoreBtn.classList.add('is-hidden');
    return;
  }

  clearImagesContainer();
  apiService.resetPage();
  getMorePictures();
}, 300);

refs.searchForm.addEventListener('input', debouncedInput);
refs.loadMoreBtn.addEventListener('click', getMorePictures);

function clearImagesContainer() {
  refs.gallery.innerHTML = '';
}
function getMorePictures() {
  apiService.fetchImages().then(hits => {
    updateImageMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden');

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}