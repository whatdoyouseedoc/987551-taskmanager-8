import {renderFilters} from './filter-utils';
import {renderCards} from './card-utils';
import {generateCards} from './data';

const $filters = document.querySelector(`.main__filter`);
const $cards = document.querySelector(`.board__tasks`);

/* Main */
let cards = generateCards(7);

renderFilters($filters);
renderCards($cards, generateCards(7));

$filters.addEventListener(`change`, ($event) => {
  const count = Number($event.target.attributes[`data-count`].value);

  cards = generateCards(count);
  renderCards($cards, cards);
});
