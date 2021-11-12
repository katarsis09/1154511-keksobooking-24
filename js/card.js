const TYPE_TO_NAME = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const WIDTH = 45;
const HEIGHT = 40;

export const renderTextToCard = (className, value, item) => {
  const element = item.querySelector(className);

  if (value) {
    element.textContent = value;
  } else {
    element.style.display = 'none';
  }
};

export const renderImgToCard = (className, value, item) => {
  const element = item.querySelector(className);

  if (value) {
    element.src = value;
  } else {
    element.style.display = 'none';
  }
};

export const fillCard = (cardData, item) => {
  renderTextToCard('.popup__title', cardData.offer.title, item);
  renderTextToCard('.popup__text--address', cardData.offer.address, item);
  renderTextToCard('.popup__text--price', cardData.offer.price + ' ₽/ночь', item);
  renderTextToCard('.popup__type', TYPE_TO_NAME[cardData.offer.type], item);
  renderTextToCard('.popup__text--capacity', cardData.offer.rooms + ' комнаты для ' + cardData.offer.guests + ' гостей', item);
  renderTextToCard('.popup__text--time', 'Заезд после ' + cardData.offer.checkin + ', выезд до ' + cardData.offer.checkout, item);
  renderTextToCard('.popup__description', cardData.offer.description, item);
  renderImgToCard('.popup__avatar', cardData.author.avatar, item);

  const features = item.querySelector('.popup__features');
  features.innerHTML = '';

  if (cardData.offer.features) {
    cardData.offer.features.forEach((feature) => {
      const featureListItem = document.createElement('li');
      featureListItem.classList.add('popup__feature');
      featureListItem.classList.add('popup__feature--' + feature);
      features.appendChild(featureListItem);
    });
  }

  const photos = item.querySelector('.popup__photos');
  photos.innerHTML = '';

  if (cardData.offer.photos) {
    cardData.offer.photos.forEach((photo) =>{
      const photoListItem = document.createElement('img');
      photoListItem.src = photo;
      photoListItem.width = WIDTH;
      photoListItem.height = HEIGHT;
      photoListItem.classList.add('popup__photo');
      photos.appendChild(photoListItem);
    });
  }

  return item;

};

export const createOfferCard = (offer) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('article.popup');
  const popupElement = balloonTemplate.cloneNode(true);
  return fillCard(offer, popupElement);
};
