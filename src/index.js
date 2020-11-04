import './styles.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import 'basicLightbox/dist/basicLightbox.min.css';

import refs from './js/refs';
import galleryUtils from './js/gallery-utils';
import updateHitsMarkup from './js/update-hits-markup';
import onEmptyErrorHandling from './js/empty-input-error-handling'
import onWrongErrorHandling from './js/wrong-input-error-handling'
import loadMoreBtnAction from './js/load-more-btn-action'
import lightBoxHandler from './js/lightBoxHandler'
import scrollDown from './js/scroll-down'

const fetchAndRenderHits = () => {

  loadMoreBtnAction.disable();

  if (galleryUtils.query.length) {
    galleryUtils.fetchHits().then(hits => {

      if (hits.length) {

        const screenY = document.documentElement.scrollHeight;

        updateHitsMarkup(hits);
        scrollDown(screenY);
        loadMoreBtnAction.show();
        loadMoreBtnAction.enable();

        refs.gallery.addEventListener('click', lightBoxHandler)
      } else {
        onWrongErrorHandling()
      }
    })
  } else {
    onEmptyErrorHandling()
  }
}

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  galleryUtils.query = form.elements.query.value;

  refs.itemContainer.innerHTML = '';

  galleryUtils.resetPage();

  fetchAndRenderHits();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', fetchAndRenderHits);
