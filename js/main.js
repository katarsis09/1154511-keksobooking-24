const getRandomInt = (min, max, round) => {


  const validMin = Math.min(min, max);
  const validMax = Math.max(min, max);


  if (validMin >= 0 && validMax >= 0) {
    const val = Math.random() * (validMax - validMin) + validMin;
    return val.toFixed(round);
  }
};

console.log(getRandomInt (1.1, 1.2, 20));


// 1) определяю значение min и max https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// 2) получаю случ значение от min до max..  https://myrusakov.ru/js-random-numbers.html

// 3) округлняю это значение до round https://javascript.ru/Number/toFixed

// 4) возвращаю это значение

