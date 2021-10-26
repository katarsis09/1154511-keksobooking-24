
import { getOffers } from './data.js';
import { deactivateForm } from './form.js';
import { initForm } from './validate-form.js';
import { initMap, renderPins } from './map.js';


const offers = getOffers(10);


deactivateForm();
initMap();


initForm();
renderPins(offers);
