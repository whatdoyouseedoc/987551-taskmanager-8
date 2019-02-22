import {renderFilters} from './filter-utils';
import {colors, modifiers, texts, hashTagsMock} from './card-props';
import cardMarkup from './card-markup';

import {getRandInt} from './utils';

const $filters = document.querySelector(`.main__filter`);
const $cards = document.querySelector(`.board__tasks`);

let cards = [];

const renderCard = (markup) => {
  $cards.innerHTML += markup;
};

function renderCards(amount) {
  flushCards();

  while (cards.length < amount) {
    cards.push(cardMarkup(
      colors[getRandInt(0, 4)],
      modifiers[getRandInt(0, 2)],
      texts[getRandInt(0, 5)],
      hashTagsMock[getRandInt(0, 2)]
    ));
  }

  cards.forEach((item) => {
    renderCard(item);
  });
}

const flushCards = () => {
  cards = [];
  $cards.innerHTML = ``;
};

/* Main */
renderFilters($filters);
renderCards(7);

$filters.addEventListener('change', ($event) => {
  const count = $event.target.attributes['data-count'].value;
  renderCards(count);
});
