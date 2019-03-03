import cardMarkup from './card-markup';

const renderCard = (selector, markup) => {
  selector.innerHTML += markup;
};

const flushCards = (selector) => {
  selector.innerHTML = ``;
};

const renderCards = (selector, cards) => {
  flushCards(selector);

  cards.forEach((item) => renderCard(selector, cardMarkup(item)));
};

export {renderCards};
