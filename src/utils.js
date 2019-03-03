/* Utils */
function getRandInt(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomDateStamp() {
  const MS_IN_DAY = 86400000;
  const currentDate = Date.now();
  const start = currentDate - 7 * MS_IN_DAY;
  const end = currentDate + 7 * MS_IN_DAY;
  const rand = start + Math.random() * (end - start);

  return Math.floor(rand);
}

function getRandBool() {
  return !!getRandInt(0, 1);
}

function getRandPic() {
  return `http://picsum.photos/100/100?r=${Math.random()}`;
}

function getRandTags(availableTags) {
  return Array(getRandInt(0, 3)).fill(0).map(() => availableTags[getRandInt(0, availableTags.length - 1)]);
}

export {getRandInt, getRandomDateStamp, getRandBool, getRandPic, getRandTags};
