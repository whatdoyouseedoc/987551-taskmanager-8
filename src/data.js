import {getRandInt, getRandomDateStamp, getRandPic, getRandBool, getRandTags} from './utils';

function getRandCard() {
  return {
    title: [
      `Изучить теорию`,
      `Сделать домашку`,
      `Пройти интенсив на соточку`
    ][getRandInt(0, 2)],
    dueDate: getRandomDateStamp(),
    tags: new Set(getRandTags([`homework`, `theory`, `practice`, `intensive`, `keks`, `synth`, `music`])),
    picture: getRandPic(),
    color: [`black`, `yellow`, `blue`, `green`, `pink`][getRandInt(0, 4)],
    repeatingDays: {
      Mo: getRandBool(),
      Tu: getRandBool(),
      We: getRandBool(),
      Th: getRandBool(),
      Fr: getRandBool(),
      Sa: getRandBool(),
      Su: getRandBool(),
    },
    isFavorite: getRandBool(),
    isDone: getRandBool()
  };
}

function generateCards(count) {
  return Array(count).fill(0).map(() => getRandCard());
}

export {generateCards};
