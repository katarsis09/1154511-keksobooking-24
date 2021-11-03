// Генерирует случайное уникальное число

export const getRandomInt = (min, max, round) => {
  const validMin = Math.min(min, max);
  const validMax = Math.max(min, max);

  if (validMin >= 0 && validMax >= 0) {
    const val = Math.random() * (validMax - validMin) + validMin;
    return Number(val.toFixed(round));
  }
};


// Перемешивает массив

export const getRandomElementFromArray = (array) => {
  const arr = [];
  // 1) получаю случайное число от 0 до длины массива array
  const randomCountElement = getRandomInt(0, array.length - 1);
  // 2) бегу циклом кол-во раз === случайному число из пункта 1 и на каждой итерации:
  for (let i = 0; i <= randomCountElement; i++) {
    const index = getRandomInt(0, array.length - 1);
    const randomEl = array[index];
    arr.push(randomEl);
  }
  // 3) получаю случ элемент из массива array и пушу его в arr
  // 4) возвращаю arr
  return Array.from(new Set(arr));
};


// Добавляет 0 перед числами до 10

export const addZero = (num) => {
  if (num < 10 && num > 0) {
    return '0' + num;
  } else {
    return num;
  }
};


// функция получения попапа успешной отправки данных


const getSuccess = () => {
  const templateSuccess = document.querySelector('#success').content.querySelector('.success');
  const success = templateSuccess.cloneNode(true);
};


export { getSuccess };
