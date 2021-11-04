
// import { getOffers } from './data.js';
import { deactivateForm } from './form.js';
import { initForm } from './validate-form.js';
import { initMap, renderPins } from './map.js';
import { getData } from './api.js';
import { showModal } from './modal.js';


// const offers = getOffers(10);

// успешная загрузка объявлений
const onSuccessOffersLoaded = (data) => {
  renderPins(data);
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

