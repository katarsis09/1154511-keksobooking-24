import { activateForm } from './form.js';
import { createOfferCard } from './card.js';


const MAIN_PIN_INIT_LOCATION = {
  lat: 35.6895,
  lng: 139.692,
};

const address = document.querySelector('#address');
address.value = `${MAIN_PIN_INIT_LOCATION.lat}, ${MAIN_PIN_INIT_LOCATION.lng}`;


const myMap = L.map('map-canvas');

export const initMap = () => {
  myMap.on('load', () => {
    console.log('Карта инициализирована');
    activateForm();
  })
    .setView(MAIN_PIN_INIT_LOCATION, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(myMap);
};


const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(myMap);

mainPinMarker.on('move', (evt) => {
  const regExp = /\(([^)]+)\)/;
  const value = regExp.exec(evt.target.getLatLng());
  address.value = value[1];

});


export const renderPins = (offers) => {

  offers.forEach((offer) => {
    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });


    const marker = L.marker(
      {
        lat: offer.offer.location.lat,
        lng: offer.offer.location.lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(myMap)
      .bindPopup(createOfferCard(offer));

  });
};


