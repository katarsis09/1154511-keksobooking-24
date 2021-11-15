import { deactivateForm } from './form.js';
import { initForm } from './validate-form.js';
import { initMap, renderPins } from './map.js';
import { getData } from './api.js';
import { showModal } from './modal.js';
import { initFilters } from './filter.js';
import { ELEMENTS_QUANTITY } from './constant.js';


let offers = [];
// успешная загрузка объявлений
export const onSuccessOffersLoaded = (data) => {
  renderPins(data.slice(0, ELEMENTS_QUANTITY));
  offers = data;
};


// ошибка при загрузке объявлений
const onErrorOffersLoaded = () => {
  showModal('', false);
  deactivateForm();
};

getData(onSuccessOffersLoaded, onErrorOffersLoaded);


deactivateForm();
initMap();
initForm();

initFilters();

export { offers };

