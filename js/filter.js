import { offers } from './main.js';
import { renderPins } from './map.js';
import { debounce } from './utils/debounce.js';


const ELEMENTS_QUANTITY = 10;
const DEFAULT_VALUE = 'any';
const typeSelect = document.querySelector('#housing-type');
const roomsSelect = document.querySelector('#housing-rooms');
const guestsSelect = document.querySelector('#housing-guests');
const priceSelect = document.querySelector('#housing-price');

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


const filterByType = (list) => {
  const type = typeSelect.value;
  if (type === DEFAULT_VALUE) {
    return list;
  }
  const filtered = list.filter((item) => {
    return item.offer.type === type;
  });
  return filtered;
};


const filterByPrice = (list) => {

  const price = priceSelect.value;

  if (price === DEFAULT_VALUE) {
    return list;
  }

  const filtered = list.filter((item) => {
    const range = PRICE_RANGES[price];
    const min = range.min;
    const max = range.max;

    return item.offer.price > min && item.offer.price < max;
  });

  return filtered;
};


const filterByRooms = (list) => {
  const rooms = roomsSelect.value;
  if (rooms === DEFAULT_VALUE) {
    return list;
  }
  const filtered = list.filter((item) => {
    return item.offer.rooms === Number(rooms);
  });

  return filtered;
};


const filterByGuests = (list) => {
  const guests = guestsSelect.value;
  if (guests === DEFAULT_VALUE) {
    return list;
  }
  const filtered = list.filter((item) => {

    return item.offer.guests === Number(guests);
  });

  return filtered;
};


const filterOffersByFeatures = (list) => {
  const pceudoFeatures = document.querySelectorAll('input[name="features"]:checked');
  const arrayOfFeatures = Array.from(pceudoFeatures);
  const mapped = arrayOfFeatures.map((el) => {
    return el.value;
  });

  const filtered = list.filter((offer) => {
    return mapped.every((el) => offer.offer.features && offer.offer.features.includes(el));
  });
  return filtered;
};


const filteredFunction = [filterByType, filterByPrice, filterOffersByFeatures, filterByGuests, filterByRooms];

const filterOffers = (list) => {
  const filtered = filteredFunction.reduce((acc, curr) => {

    const filter = curr(acc);
    return filter;
  }, list);
  renderPins(filtered.slice(0, ELEMENTS_QUANTITY));
};


const debounceFilterOffers = debounce(filterOffers);


export const initFilters = () => {
  const features = document.querySelectorAll('input[name="features"]');
  features.forEach((item) => {
    item.addEventListener('change', () => {
      debounceFilterOffers(offers);
    });
  });

  guestsSelect.addEventListener('change', () => {
    debounceFilterOffers(offers);
  });

  roomsSelect.addEventListener('change', () => {
    debounceFilterOffers(offers);
  });


  priceSelect.addEventListener('change', () => {
    debounceFilterOffers(offers);
  });

  typeSelect.addEventListener('change', () => {
    debounceFilterOffers(offers);
  });

};

