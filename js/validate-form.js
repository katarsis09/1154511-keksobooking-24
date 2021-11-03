import { sendData } from './api.js';
import { showModal } from './modal.js';
import { initMap } from './map.js';


const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const form = document.querySelector('.ad-form');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const type = document.querySelector('#type');
const guestsNumber = document.querySelector('#capacity');
const roomsNumber = document.querySelector('#room_number');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const buttonReset = document.querySelector('.ad-form__reset');
const formFilters = document.querySelector('.map__filters');
const address = document.querySelector('#address');
const MAIN_PIN_INIT_LOCATION = {
  lat: 35.6895,
  lng: 139.692,
};


const PRICE_RANGE_BY_TYPE = {
  flat: {
    min: 1000,
    max: 1000000,
  },
  bungalow: {
    min: 0,
    max: 1000000,
  },
  house: {
    min: 5000,
    max: 1000000,
  },
  palace: {
    min: 10000,
    max: 1000000,
  },
  hotel: {
    min: 3000,
    max: 1000000,
  },
};

const MAP_ROOMS_TO_GUESTS = {
  1: [
    {
      value: 1,
      text: 'для 1 гостя',
    },
  ],

  2: [
    {
      value: 1,
      text: 'для 1 гостя',
    },
    {
      value: 2,
      text: 'для 2 гостей',
    },
  ],

  3: [
    {
      value: 1,
      text: 'для 1 гостя',
    },
    {
      value: 2,
      text: 'для 2 гостей',
    },
    {
      value: 3,
      text: 'для 3 гостей',
    },
  ],

  100: [
    {
      value: 0,
      text: 'не для гостей',
    },
  ],
};

const setOptionsForGuestsCount = (rooms) => {
  const options = MAP_ROOMS_TO_GUESTS[rooms];
  guestsNumber.innerHTML = '';

  options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    guestsNumber.appendChild(optionElement);
  });
};

// функция сброса формы

export const resetApp = () => {
  form.reset();
  formFilters.reset();
  address.value = `${MAIN_PIN_INIT_LOCATION.lat}, ${MAIN_PIN_INIT_LOCATION.lng}`;
};

// обработчик события для кнопки очистить

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.reset();
  formFilters.reset();
  address.value = `${MAIN_PIN_INIT_LOCATION.lat}, ${MAIN_PIN_INIT_LOCATION.lng}`;
});

// успешное добавление объявления
const onSuccessOfferSubmit = () => {
  showModal('Объявление успешно добавлено', true);
  resetApp();
};

// ошибка при добавлении объявления
const onErrorOfferSubmit = (e) => {
  console.error(e);
  showModal('Объявление не добавлено', false);
};


const validate = (e) => {
  e.preventDefault();
  // получить title и проверить что введенное в него значение есть и имеет длину > 30 и < 100 символов
  const valueLength =  titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH && valueLength > MAX_TITLE_LENGTH) {
    console.log('не прошла валидация1');
    return false;
  }

  // получить PRICE_RANGE_BY_TYPE[type.value] (min, max)
  const range = PRICE_RANGE_BY_TYPE[type.value];

  // получить "цена за ночь" введенное значение и проверить что цена введена, это число, и что оно > min и < max
  if (isNaN(parseFloat(priceInput.value)) || priceInput.value < range.min || priceInput.value > range.max) {
    return false;
  }

  // если все ок, то вызываем form.submit()
  sendData(onSuccessOfferSubmit,onErrorOfferSubmit,new FormData(e.target));
};


export const initForm = () => {
  setOptionsForGuestsCount(roomsNumber.value);

  timeIn.addEventListener('change', (evt) => {
    const value = evt.target.value;
    timeOut.value = value;
  }),

  timeOut.addEventListener('change', (evt) => {
    const value = evt.target.value;
    timeIn.value = value;
  }),

  roomsNumber.addEventListener('change', (evt) => {
    setOptionsForGuestsCount(evt.target.value);
  });

  form.addEventListener('submit', validate);

  type.addEventListener('change', (evt) => {
    const value = evt.target.value;
    const range = PRICE_RANGE_BY_TYPE[value];
    priceInput.min = range.min;
    priceInput.max = range.max;
    priceInput.placeholder = range.min;
  });
};


