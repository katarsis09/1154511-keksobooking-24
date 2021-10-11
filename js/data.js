import {getRandomInt, getRandomElementFromArray, addZero} from './util.js';
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

const locationLat = getRandomInt(LOCATION.lat.min, LOCATION.lat.max, LOCATION.round);
const locationLng = getRandomInt(LOCATION.lng.min, LOCATION.lng.max, LOCATION.round);


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


export const getOffers = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    const item = getOffer();
    result.push(item);
  }
  return result;
};
