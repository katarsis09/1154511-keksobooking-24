const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const form = document.querySelector('.ad-form');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const type = document.querySelector('#type');

const MIN_PRICE = {
  'Квартира': '1000',
  'Бунгало': '0',
  'Дом': '5000',
  'Дворец': '10000',
  'Отель': '3000',
};


for (const key in MIN_PRICE) {
  console.log( MIN_PRICE[key] );
}

export const validate = (e) => {
  e.preventDefault();

};

form.addEventListener('submit', validate);
type.addEventListener('change', (evt) => {

  console.log(evt.target.value);

});
