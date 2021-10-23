import { getOffers } from './data.js';

const TYPE_TO_NAME = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

// 1) находим template, берем его контент .content
const card = document.querySelector('#card').content;

// 2) делаем копию элемента из пункта 1
const copy = card.cloneNode(true);

// 3) создаем фрагмент
const fragment = document.createDocumentFragment();

// 4) вставляем копию во фрагмент
fragment.appendChild(copy);

// 5) вставляем фрагмент в элемент с класcом map
// const map = document.querySelector('#map-canvas');
// map.appendChild(fragment);

// 6) находим в элементе с классом map элемент с селектором article.popup и работаем с ним
// const article = fragment.querySelector('article.popup');


const renderTextToCard = (className, value, el) => {
  const element = el.querySelector(className);

  if (value) {
    element.textContent = value;
  } else {
    element.style.display = 'none';
  }
};

const renderImgToCard = (className, value, el) => {
  const element = el.querySelector(className);

  if (value) {
    element.src = value;
  } else {
    element.style.display = 'none';
  }
};


const getFilledCard = (cardData, el) => {
  renderTextToCard('.popup__title', cardData.offer.title, el);
  renderTextToCard('.popup__text--address', cardData.offer.address, el);
  renderTextToCard('.popup__text--price', cardData.offer.price + ' ₽/ночь', el);
  renderTextToCard('.popup__type', TYPE_TO_NAME[cardData.offer.type], el);
  renderTextToCard('.popup__text--capacity', cardData.offer.rooms + ' комнаты для ' + cardData.offer.guests + ' гостей', el);
  renderTextToCard('.popup__text--time', 'Заезд после ' + cardData.offer.checkin + ', выезд до ' + cardData.offer.checkout, el);
  renderTextToCard('.popup__description', cardData.offer.description, el);
  renderImgToCard('.popup__avatar', cardData.author.avatar, el);

  const features = el.querySelector('.popup__features');
  features.innerHTML = '';

  cardData.offer.features.forEach((feature) => {
    const featureListItem = document.createElement('li');
    featureListItem.classList.add('popup__feature');
    featureListItem.classList.add('popup__feature--' + feature);
    features.appendChild(featureListItem);
  });


  const photos = el.querySelector('.popup__photos');
  photos.innerHTML = '';

  cardData.offer.photos.forEach((photo) =>{
    const photoListItem = document.createElement('img');
    photoListItem.src = photo;
    photoListItem.width = 45;
    photoListItem.height = 40;
    photoListItem.classList.add('popup__photo');
    photos.appendChild(photoListItem);
  });

  return el;


};

const createOfferCard = (offer) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('article.popup');
  const popupElement = balloonTemplate.cloneNode(true);
  const filledCard = getFilledCard(offer, popupElement);
  return filledCard;
};


const myMap = L.map('map-canvas');

export const initMap = () => {
  myMap.on('load', () => {
    console.log('Карта инициализирована');
  })
    .setView({
      lat: 35.6895,
      lng: 139.692,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(myMap);
};


const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(myMap);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

const offers = getOffers(10);


offers.forEach((offer) => {
  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });


  const marker = L.marker(
    {
      lat: offer.offer.location.lat,
      lng: offer.offer.location.lng,
    },
    {
      icon,
    },
  );
  marker
    .addTo(myMap)
    .bindPopup(createOfferCard(offer));

});
