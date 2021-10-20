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


export const validate = (e) => {
  e.preventDefault();
  // получить title и проверить что введенное в него значение есть и имеет длину > 30 и < 100 символов
  const valueLenght =  titleInput.value.lenght;
  if (valueLenght > MIN_TITLE_LENGTH && valueLenght < MAX_TITLE_LENGTH) {
    console.log('форма готова для отправки');
  } else {
    console.log('форма не готова для отправки');
  }

  // получить PRICE_RANGE_BY_TYPE[type.value] (min, max)
  // получить "цена за ночь" введенное значение и проверить что цена введена, это число, и что оно > min и < max


  // если все ок, то вызываем form.submit()
  // если валидация не проходит return false
};


form.addEventListener('submit', validate);
type.addEventListener('change', (evt) => {
  const value = evt.target.value;
  const range = PRICE_RANGE_BY_TYPE[value];
  priceInput.min = range.min;
  priceInput.max = range.max;
  priceInput.placeholder = range.min;
});
roomsNumber.addEventListener('change', (evt) => {
  const value = evt.target.value;
  const options = MAP_ROOMS_TO_GUESTS[value];
  guestsNumber.innerHTML = '';

  options.forEach((option) => {
    // создать тег option
    const optionElement = document.createElement('option');
    // установить для этого option атрибут value и атрибут textContent
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    // добавить в guestsNumber
    guestsNumber.appendChild(optionElement);
  });


});


/////////////////////////////////////////////

// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// console.log(user);


// const user = {
//   name: 'John',
// };

// user.name = 'Pete';
// console.log(user);


// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

// const menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     obj[key] *=2;
//   }
// }

// multiplyNumeric(menu);
// console.log(menu);
