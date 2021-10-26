const deactivateForm = () => {
  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');

  const formElements = form.querySelectorAll('fieldset');
  formElements.forEach((fieldset) => {
    fieldset.disabled = true;
  });

  const mapFilter = document.querySelector('.map__filters');
  mapFilter.classList.add('ad-form--disabled');
};

//deactivateForm();


const activateForm = () => {
  const form = document.querySelector('.ad-form');
  form.classList.remove('ad-form--disabled');

  const formElements = form.querySelectorAll('fieldset');
  formElements.forEach((fieldset) => {
    fieldset.disabled = false;
  });

  const mapFilter = document.querySelector('.map__filters');
  mapFilter.classList.remove('ad-form--disabled');
};

export { activateForm, deactivateForm };
