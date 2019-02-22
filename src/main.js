import {renderFilters} from './filter-utils';
import {renderCards} from './card-utils';

const $filters = document.querySelector(`.main__filter`);
const $cards = document.querySelector(`.board__tasks`);

/* Main */
renderFilters($filters);
renderCards($cards, 7);

$filters.addEventListener(`change`, ($event) => {
  const count = $event.target.attributes[`data-count`].value;
  renderCards($cards, count);
});
