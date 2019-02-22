import {getRandInt} from './utils';
import cardMarkup from './card-markup';

const colors = [`pink`, `yellow`, `blue`, `black`];
const modifiers = [`card--deadline`, `card--repeat`, ``];
const texts = [`Train dog`, `Need to learn JS`, `Sleep well`, `Buy more synths`, `Lorem ipsum`, ``];
const hashTagsMock = [`#one`, `#one #two`, ``];

const renderCard = (selector, markup) => {
  selector.innerHTML += markup;
};

const flushCards = (selector) => {
  selector.innerHTML = ``;
};

const renderCards = (selector, amount) => {
  flushCards(selector);

  for (let i = 0; i < amount; i++) {
    renderCard(selector, cardMarkup(
        colors[getRandInt(0, 4)],
        modifiers[getRandInt(0, 2)],
        texts[getRandInt(0, 5)],
        hashTagsMock[getRandInt(0, 2)]
    ));
  }
};

export {renderCards};
