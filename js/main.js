
import { getOffer } from './data.js';
import { renderCard } from './map.js';
import { activateForm } from './form.js';
//import { validate } from './validate-form.js';


const offer = getOffer();
renderCard(offer);

activateForm();
