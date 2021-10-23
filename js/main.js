
// import { getOffer } from './data.js';
// import { renderCard } from './map.js';
import { deactivateForm, activateForm } from './form.js';
import { init } from './validate-form.js';
import { initMap } from './map.js';


//const offer = getOffer();
//renderCard(offer);


deactivateForm();
initMap();
activateForm();


init();
