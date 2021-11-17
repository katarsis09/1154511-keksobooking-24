import { activateOfferForm } from './form.js';
import { createOfferCard } from './card.js';
import { MAIN_PIN_INIT_LOCATION } from './constant.js';


const address = document.querySelector('#address');
address.value = `${MAIN_PIN_INIT_LOCATION.lat}, ${MAIN_PIN_INIT_LOCATION.lng}`;


const myMap = L.map('map-canvas');

export const initMap = () => {
  myMap.on('load', () => {
    activateOfferForm();
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
    lat: MAIN_PIN_INIT_LOCATION.lat,
    lng: MAIN_PIN_INIT_LOCATION.lng,
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


const markerGroup = L.layerGroup().addTo(myMap);

export const removePins = () => {
  markerGroup.clearLayers();
};

export const renderPins = (offers) => {

  removePins();

  offers.forEach((offer) => {
    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });


    const marker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(createOfferCard(offer));
  });

};

export const resetMapAndMarker = () => {
  mainPinMarker.setLatLng({
    lat: MAIN_PIN_INIT_LOCATION.lat,
    lng: MAIN_PIN_INIT_LOCATION.lng,
  });

  myMap.setView({
    lat: MAIN_PIN_INIT_LOCATION.lat,
    lng: MAIN_PIN_INIT_LOCATION.lng,
  }, 10);
  myMap.closePopup();
};
