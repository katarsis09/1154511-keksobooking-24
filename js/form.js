const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');

const setFieldsetDisabled = (value) => {
  formElements.forEach((fieldset) => {
    fieldset.disabled = value;
  });
};

const deactivateAllForms = () => {
  form.classList.add('ad-form--disabled');
  setFieldsetDisabled(true);
  mapFilter.classList.add('ad-form--disabled');
};


const activateOfferForm = () => {
  form.classList.remove('ad-form--disabled');
  setFieldsetDisabled(false);
};

const activateFilterForm = () => {
  mapFilter.classList.remove('ad-form--disabled');
};


export { activateOfferForm, deactivateAllForms, activateFilterForm  };
