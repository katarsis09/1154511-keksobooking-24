
// import { getOffers } from './data.js';
import { deactivateForm } from './form.js';
import { initForm } from './validate-form.js';
import { initMap, renderPins } from './map.js';
import { getData } from './api.js';
import { showModal } from './modal.js';

const ELEMENTS_QUANTITY = 10;
// const offers = getOffers(10);


let offers = [];
// успешная загрузка объявлений
export const onSuccessOffersLoaded = (data) => {
  renderPins(data.slice(0, ELEMENTS_QUANTITY));
  offers = data;
};


// ошибка при загрузке объявлений
const onErrorOffersLoaded = (e) => {
  console.error(e);
  showModal('', false);
};

getData(onSuccessOffersLoaded, onErrorOffersLoaded);


deactivateForm();
initMap();
initForm();

export { offers };

