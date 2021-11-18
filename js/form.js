import { offers } from './main.js';

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');

const setFieldsetDisabled = (value) => {
  formElements.forEach((fieldset) => {
    fieldset.disabled = value;
  });
};

const deactivateOfferForm = () => {
  form.classList.add('ad-form--disabled');
  setFieldsetDisabled(true);
};

const deactivateFilterForm = () => {
  mapFilter.classList.add('ad-form--disabled');
};


const activateOfferForm = () => {
  form.classList.remove('ad-form--disabled');
  setFieldsetDisabled(false);
};

const activateFilterForm = () => {
  if (offers.length) {
    mapFilter.classList.remove('ad-form--disabled');
  }
};

const activateAllForms = () => {
  activateOfferForm();
  activateFilterForm();
};

const deactivateAllForms = () => {
  deactivateFilterForm();
  deactivateOfferForm();
};


export { activateOfferForm, activateFilterForm, activateAllForms, deactivateAllForms };
