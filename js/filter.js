
import { offers } from './main.js';
import { renderPins } from './map.js';


const typeSelect = document.querySelector('#housing-type');

// const mapFilters = document.querySelectorAll('.map__filter');
// const mapCheckboxFilters = document.querySelectorAll('.map__checkbox');
const roomsSelect = document.querySelector('#housing-rooms');
const guestsSelect = document.querySelector('#housing-guests');
const priceSelect = document.querySelector('#housing-price');
// const dishwasher = document.querySelector('#filter-dishwasher');
// const parking = document.querySelector('#filter-parking');
// const washer = document.querySelector('#filter-washer');
// const elevator = document.querySelector('#filter-elevator');
// const conditioner = document.querySelector('#filter-conditioner');
// const wifi = document.querySelector('#filter-wifi');

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


// //  const ELEMENTS_QUANTITY = 10;
// const ANY_RANGE = 'any';

// const filterSimilarOffers = (offers) => {

//   const filteredOffers = onSuccessOffersLoaded()
//     .filter((data) => {
//       if (selectedHousingType && selectedHousingType !== ANY_RANGE) {
//         return data.offer.type === selectedHousingType;
//       }
//       return true;
//     });
// };


const filterByType = (list, type) => {
  //берем первый элемент

  const filtered = list.filter((item) => {
    return item.offer.type === type;
  });

  return filtered;
};

typeSelect.addEventListener('change', (evt) => {
  const filteredByType = filterByType(offers, evt.target.value);
  renderPins(filteredByType);
});


// 1) при выборе типа жилья
// 2) вызываешь renderPin и передаешь туда отфильтрованные по типу жилья офферы


const filterByPrice = (list, priceRanges) => {
  //берем первый элемент

  const filtered = list.filter((item) => {
    if (!PRICE_RANGES[priceRanges]) {
      return true;
    }
    const value = evt.target.value;
    const range = PRICE_RANGES[value];
    const min = range.min;
    const max = range.max;
    // получи min max, запиши их в переменные
    // верни элементы у которых item.offer.price > min && item.offer.price < max
    return item.offer.price > min && item.offer.price < max;
  });

  return filtered;
};

priceSelect.addEventListener('change', (evt) => {
  const filteredByPrice = filterByPrice(offers, evt.target.value);
  renderPins(filteredByPrice);
});


const filterByRooms = (list, rooms) => {

  const filtered = list.filter((item) => {
    return item.offer.rooms === rooms;
  });

  return filtered;
};

roomsSelect.addEventListener('change', (evt) => {
  const filteredByRooms = filterByRooms(offers, evt.target.value);
  renderPins(filteredByRooms);
});


const filterByGuests = (list, guests) => {

  const filtered = list.filter((item) => {
    return item.offer.guests === guests;
  });

  return filtered;
};

guestsSelect.addEventListener('change', (evt) => {
  const filteredByGuests = filterByGuests(offers, evt.target.value);
  renderPins(filteredByGuests);
});
