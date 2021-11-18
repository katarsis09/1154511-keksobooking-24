import { deactivateAllForms, activateAllForms  } from './form.js';

const main = document.querySelector('main');
const successModalTemplate = document.querySelector('#success')
  .content.querySelector('.success');

const errorModalTemplate = document.querySelector('#error')
  .content.querySelector('.error');

const hideElement = (element) => {
  element.style.display = 'none';
};

const getModalFromTemplate = (template) => {
  const copy = template.cloneNode(true);
  main.appendChild(copy);
  hideElement(copy);
  return copy;
};

const successModal = getModalFromTemplate(successModalTemplate);
const errorModal = getModalFromTemplate(errorModalTemplate);


const onSuccessModalClick = () => {
  hideElement(successModal);
  document.removeEventListener('click', onSuccessModalClick);
  activateAllForms();
};

const onErrorModalClick = () => {
  hideElement(errorModal);
  document.removeEventListener('click', onErrorModalClick);
  activateAllForms();
};

const onSuccessModalEsc = (evt) => {
  if (evt.key === 'Escape') {
    hideElement(successModal);
    document.removeEventListener('keydown', onSuccessModalEsc);
    activateAllForms();
  }

};

const onErrorModalEsc = (evt) => {
  if (evt.key === 'Escape') {
    hideElement(errorModal);
    document.removeEventListener('keydown', onErrorModalEsc);
    activateAllForms();
  }

};


const showModal = (text, success) => {
  deactivateAllForms();
  if (success) {
    const successMessage = successModal.querySelector('.success__message');
    if (text) {
      successMessage.textContent = text;
    }
    successModal.style.display = 'block';
    document.addEventListener('click', onSuccessModalClick);
    document.addEventListener('keydown', onSuccessModalEsc);


  } else {
    const errorMessage = errorModal.querySelector('.error__message');

    if (text) {
      errorMessage.textContent = text;
    }
    errorModal.style.display = 'block';
    document.addEventListener('click', onErrorModalClick);
    document.addEventListener('keydown', onErrorModalEsc);
  }
};


export { showModal };
