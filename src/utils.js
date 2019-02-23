/* Utils */
function getRandInt(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export {getRandInt};
