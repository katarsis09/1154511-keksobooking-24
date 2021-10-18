
import { getOffer } from './data.js';
import { renderCard } from './map.js';
import { deactivateForm } from './form.js';


const offer = getOffer();
renderCard(offer);

deactivateForm();
