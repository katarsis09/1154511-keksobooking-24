
const TITLE = 'Сдам квартиру с видом на лес';
const TYPES = [ 'palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12.00', '13.00', '14.00'];
const CHECKOUT = ['12.00', '13.00', '14.00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = 'Уютная квартирка с прекрасным видом';
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg' ];
const LOCATION = {
  lat: {
    min: 35.65000,
    max: 35.70000,
  },
  lng: {
    min: 139.70000,
    max: 139.80000,
  },
  round: 5,
};

const getRandomInt = (min, max, round) => {
  const validMin = Math.min(min, max);
  const validMax = Math.max(min, max);

  if (validMin >= 0 && validMax >= 0) {
    const val = Math.random() * (validMax - validMin) + validMin;
    return Number(val.toFixed(round));
  }
};

// как получить массив с уникальными значениями
// https://learn.javascript.ru/map-set


const getRandomElementFromArray = (array) => {
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
  return new Set(arr);
};

const addZero = (num) => {
  if (num < 10 && num > 0) {
    return '0' + num;
  } else {
    return num;
  }
};

const locationLat = getRandomInt(LOCATION.lat.min, LOCATION.lat.max, LOCATION.round);
const locationLng = getRandomInt(LOCATION.lng.min, LOCATION.lng.max, LOCATION.round);

// 1) определяю значение min и max https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// 2) получаю случ значение от min до max..  https://myrusakov.ru/js-random-numbers.html

// 3) округлняю это значение до round https://javascript.ru/Number/toFixed

// 4) возвращаю это значение

const getOffer = () => {
  return {
    author: {
      avatar: 'img/avatars/user' + addZero(getRandomInt(1, 10)) + '.png',
    },
    offer: {
      title: TITLE,
      address: locationLat + ',' + locationLng,
      price: getRandomInt(1, 100000),
      type: TYPES[getRandomInt(0, TYPES.length - 1)],
      rooms: getRandomInt(1, 7),
      guests: getRandomInt(1, 10),
      checkin: CHECKIN[getRandomInt(0, CHECKIN.length - 1)],
      checkout: CHECKOUT[getRandomInt(0, CHECKOUT.length - 1)],
      features: getRandomElementFromArray(FEATURES),
      description: DESCRIPTION,
      photos: getRandomElementFromArray(PHOTOS),
      location: {
        lat: locationLat,
        lng: locationLng,
      },
    },

  };
};


const getOffers = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    const item = getOffer();
    result.push(item);
  }
  return result;
};

const offers = getOffers(10);

console.log(offers);
