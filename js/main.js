
import { getOffers } from './data.js';
import { deactivateForm, activateForm } from './form.js';
import { init } from './validate-form.js';
import { initMap, renderPins } from './map.js';


const offers = getOffers(10);


deactivateForm();
initMap();
activateForm();


init();
renderPins(offers);
