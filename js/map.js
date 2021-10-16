import { getOffer } from './data.js';

const data = getOffer();

console.log(data);


const MAP_TYPE_TO_LODGING_NAME = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};


// const object = {};


// object.c = function(a) {
//   console.log(a);
// };

// const object = {
//   c: function (a) {
//     console.log(a);
//   },
// };


// object.c('привет');
// object.c('пока');
// object.c('good byu');


// const body = document.querySelector('.notice__title');

// console.log(body.textContent);

// body.textContent = 'Привет';

// находим шаблон
const card = document.querySelector('#card').content;

// делаем копию
const copy = card.cloneNode(true);


// в этой копии берем то, что нам нужно добавить на страницу (контент)
const article = copy.querySelector('article.popup');

// создаем коробочку
const fragment = document.createDocumentFragment();

// добавляем контент в коробочку
fragment.appendChild(article);

// добавляем коробочку на в тег body
document.body.appendChild(fragment);


const title = article.querySelector('.popup__title');
title.textContent = data.offer.title;

const address = article.querySelector('.popup__text--address');
address.textContent = data.offer.address;

const price = article.querySelector('.popup__text--price');
price.textContent = data.offer.price + ' ₽/ночь';

const type = article.querySelector('.popup__type');
type.textContent = MAP_TYPE_TO_LODGING_NAME[data.offer.type];

const capacity = article.querySelector('.popup__text--capacity');
capacity.textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';

const time = article.querySelector('.popup__text--time');
time.textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;

// const features = article.querySelector('.popup__features');
// features.textContent = FEATURES[data.offer.features];

const description = article.querySelector('.popup__description');
description.textContent = data.offer.description;

const features = article.querySelector('.popup__features');

console.log(features);
features.innerHTML = '';


data.offer.features.forEach((feature) => {
  const featureListItem = document.createElement('li');
  featureListItem.classList.add('popup__feature');
  featureListItem.classList.add('popup__feature--' + feature);
  features.appendChild(featureListItem);
});


const photos = article.querySelector('.popup__photos');

console.log(photos);
photos.innerHTML = '';


data.offer.photos.forEach((photo) => {
  const photoListItem = document.createElement('img');
  photoListItem.src = photo;
  photoListItem.classList.add('popup__photo');
  photos.appendChild(photoListItem);
});

// бежим циклом по массиву features и на на каждой итерации:
// а) создать li
// б) добавить этому li класс .popup__feature
// в) добавить класс .popup__feature--{текущий элемент массива}


// for (let i = 0; i <=  data.offer.features; i++) {
//     const className = '.popup__feature--' + data.offer.features[i]
// }

