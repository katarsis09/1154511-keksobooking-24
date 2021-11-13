import { offers } from './main.js';
import { renderPins } from './map.js';
import { debounce } from './utils/debounce.js';

const PRICE_RANGES = {
  low: {
    min: 0,
    max: 10000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  high: {
    min: 50000,
    max: 1000000,
  },
};

const ELEMENTS_QUANTITY = 10;
const DEFAULT_VALUE = 'any';
const typeSelect = document.querySelector('#housing-type');
const roomsSelect = document.querySelector('#housing-rooms');
const guestsSelect = document.querySelector('#housing-guests');
const priceSelect = document.querySelector('#housing-price');
const filterSelect = document.querySelector('.map__filters');


const filterByType = (offer) => {
  if (typeSelect.value === DEFAULT_VALUE) {
    return true;
  }
  return offer.offer.type === typeSelect.value;
};


const filterByPrice = (offer) => {

  if (priceSelect.value === DEFAULT_VALUE) {
    return true;
  }

  const range = PRICE_RANGES[priceSelect.value];
  return offer.offer.price >= range.min && offer.offer.price <= range.max;
};


const filterByRooms = (offer) => {
  if (roomsSelect.value === DEFAULT_VALUE) {
    return true;
  }
  return offer.offer.rooms === Number(roomsSelect.value);
};


const filterByGuests = (offer) => {
  if (guestsSelect.value === DEFAULT_VALUE) {
    return true;
  }
  return offer.offer.guests === Number(guestsSelect.value);
};


const filterOffersByFeatures = (offer) => {
  const pceudoFeatures = document.querySelectorAll('input[name="features"]:checked');
  const arrayOfFeatures = Array.from(pceudoFeatures);
  const mapped = arrayOfFeatures.map((element) => element.value);
  return mapped.every((element) => offer.offer.features && offer.offer.features.includes(element));
};


const filterFunctions = [filterByType, filterByPrice, filterOffersByFeatures, filterByGuests, filterByRooms];


const filterOffers = (list) => {
  const filtered = list.filter((offer) => filterFunctions.every((func) => func(offer)));
  renderPins(filtered.slice(0, ELEMENTS_QUANTITY));
};


const debounceFilterOffers = debounce(filterOffers);


export const initFilters = () => {

  filterSelect.addEventListener('change', () => {
    debounceFilterOffers(offers);
  });
};
