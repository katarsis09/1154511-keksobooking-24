

const TYPE_TO_NAME = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

export const renderTextToCard = (className, value, el) => {
  const element = el.querySelector(className);

  if (value) {
    element.textContent = value;
  } else {
    element.style.display = 'none';
  }
};

export const renderImgToCard = (className, value, el) => {
  const element = el.querySelector(className);

  if (value) {
    element.src = value;
  } else {
    element.style.display = 'none';
  }
};

export const fillCard = (cardData, el) => {
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

  if (cardData.offer.features) {
    cardData.offer.features.forEach((feature) => {
      const featureListItem = document.createElement('li');
      featureListItem.classList.add('popup__feature');
      featureListItem.classList.add('popup__feature--' + feature);
      features.appendChild(featureListItem);
    });
  }


  const photos = el.querySelector('.popup__photos');
  photos.innerHTML = '';

  if (cardData.offer.photos) {
    cardData.offer.photos.forEach((photo) =>{
      const photoListItem = document.createElement('img');
      photoListItem.src = photo;
      photoListItem.width = 45;
      photoListItem.height = 40;
      photoListItem.classList.add('popup__photo');
      photos.appendChild(photoListItem);
    });
  }


  return el;


};

export const createOfferCard = (offer) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('article.popup');
  const popupElement = balloonTemplate.cloneNode(true);
  const filledCard = fillCard(offer, popupElement);
  return filledCard;
};
