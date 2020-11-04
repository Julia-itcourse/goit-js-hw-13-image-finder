import itemTemplate from '../templates/item.hbs';
import refs from './refs';

function updateHitsMarkup(hits) {
  const markup = itemTemplate(hits);

  refs.itemContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateHitsMarkup;
