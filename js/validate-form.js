const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const form = document.querySelector('.ad-form');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const type = document.querySelector('#type');
const guestsNumber = document.querySelector('#capacity');
const roomsNumber = document.querySelector('#room_number');
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


const validate = (e) => {
  e.preventDefault();
  // получить title и проверить что введенное в него значение есть и имеет длину > 30 и < 100 символов
  const valueLength =  titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH && valueLength > MAX_TITLE_LENGTH) {
    return false;
  }

  // получить PRICE_RANGE_BY_TYPE[type.value] (min, max)
  const range = PRICE_RANGE_BY_TYPE[type.value];

  // получить "цена за ночь" введенное значение и проверить что цена введена, это число, и что оно > min и < max
  if (typeof priceInput.value !== 'number' || priceInput.value < range.min || priceInput.value > range.max) {
    return false;
  }

  // если все ок, то вызываем form.submit()
  form.submit();
};


export const init = () => {
  setOptionsForGuestsCount(roomsNumber.value);

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
