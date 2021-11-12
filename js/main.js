import { deactivateForm } from './form.js';
import { initForm } from './validate-form.js';
import { initMap, renderPins } from './map.js';
import { getData } from './api.js';
import { showModal } from './modal.js';
import { initFilters } from './filter.js';

const ELEMENTS_QUANTITY = 10;

let offers = [];
// успешная загрузка объявлений
export const onSuccessOffersLoaded = (data) => {
  renderPins(data.slice(0, ELEMENTS_QUANTITY));
  offers = data;
};


// ошибка при загрузке объявлений
const onErrorOffersLoaded = () => {
  showModal('', false);
};

getData(onSuccessOffersLoaded, onErrorOffersLoaded);


deactivateForm();
initMap();
initForm();

initFilters();

export { offers };

