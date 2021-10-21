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
const map = document.querySelector('#map-canvas');
map.appendChild(fragment);

// 6) находим в элементе с классом map элемент с селектором article.popup и работаем с ним
const article = map.querySelector('article.popup');

const renderTextToCard = (className, value) => {
  const element = article.querySelector(className);

  if (value) {
    element.textContent = value;
  } else {
    element.style.display = 'none';
  }
};

const renderImgToCard = (className, value) => {
  const element = article.querySelector(className);

  if (value) {
    element.src = value;
  } else {
    element.style.display = 'none';
  }
};


export const renderCard = (cardData) => {
  renderTextToCard('.popup__title', cardData.offer.title);
  renderTextToCard('.popup__text--address', cardData.offer.address);
  renderTextToCard('.popup__text--price', cardData.offer.price + ' ₽/ночь');
  renderTextToCard('.popup__type', TYPE_TO_NAME[cardData.offer.type]);
  renderTextToCard('.popup__text--capacity', cardData.offer.rooms + ' комнаты для ' + cardData.offer.guests + ' гостей');
  renderTextToCard('.popup__text--time', 'Заезд после ' + cardData.offer.checkin + ', выезд до ' + cardData.offer.checkout);
  renderTextToCard('.popup__description', cardData.offer.description);
  renderImgToCard('.popup__avatar', cardData.author.avatar);

  const features = article.querySelector('.popup__features');
  features.innerHTML = '';

  cardData.offer.features.forEach((feature) => {
    const featureListItem = document.createElement('li');
    featureListItem.classList.add('popup__feature');
    featureListItem.classList.add('popup__feature--' + feature);
    features.appendChild(featureListItem);
  });


  const photos = article.querySelector('.popup__photos');
  photos.innerHTML = '';

  cardData.offer.photos.forEach((photo) =>{
    const photoListItem = document.createElement('img');
    photoListItem.src = photo;
    photoListItem.width = 45;
    photoListItem.height = 40;
    photoListItem.classList.add('popup__photo');
    photos.appendChild(photoListItem);
  });

};


