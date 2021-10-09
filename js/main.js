/* eslint-disable */

const TITLE = 'Название';
const TYPES = [ 'palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12.00', '13.00', '14.00'];
const CHECKOUT = ['12.00', '13.00', '14.00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = 'Уютная квартирка с прекрасным видом';
const LOCATION = { lat: 50, lng: 50 };


const getRandomInt = (min, max, round) => {
  const validMin = Math.min(min, max);
  const validMax = Math.max(min, max);


  if (validMin >= 0 && validMax >= 0) {
    const val = Math.random() * (validMax - validMin) + validMin;
    return val.toFixed(round);
  }
};


const getRandomElementFromArray = (array) => {
  const arr = [];
  // 1) получаю случайное число от 0 до длины массива array
  const randomCountElement = getRandomInt(0, array.length - 1);
  // 2) бегу циклом кол-во раз === случайному число из пункта 1 и на каждой итерации:
  for (let i = 0; i <= randomCountElement; i++) {
    const index = getRandomInt(0, array.length - 1);
    const randomEl = array[index]
    arr.push(randomEl)
  }
  // 3) получаю случ элемент из массива array и пушу его в arr
  // 4) возвращаю arr
  return arr
}


// 1) определяю значение min и max https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// 2) получаю случ значение от min до max..  https://myrusakov.ru/js-random-numbers.html

// 3) округлняю это значение до round https://javascript.ru/Number/toFixed

// 4) возвращаю это значение


// const getOffers = (count) => {
//   const result = []
//   for (let i = 0; i <= count; i++) {
//     const offer = getOffer()
//     result.push(offer)
//   }
//   return result
// }


const getOffer = () => {
  return {
    author: {
      avatar: 'img/avatars/user' + getRandomInt(1, 10) + '.png'
    },
    offer: {
      title: TITLE,
      address: LOCATION.lat + ',' + LOCATION.lng,
      price: getRandomInt(1, 1000000),
      type: TYPES[getRandomInt(0, TYPES.length - 1)],
      rooms: getRandomInt(1, 20),
      guests: getRandomInt(1, 20),
      checkin: CHECKIN[getRandomInt(0, CHECKIN.length - 1)],
      checkin: CHECKOUT[getRandomInt(0, CHECKOUT.length - 1)],
      features: getRandomElementFromArray(FEATURES),
      description: DESCRIPTION,
    },

  }
}


const offer = getOffer()

console.log(offer);


//const offers = getOffers(10)

//console.log(offers)



