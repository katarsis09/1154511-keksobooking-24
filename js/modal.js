import { activateForm, deactivateForm } from './form.js';

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


const hideSuccessByClick = () => {
  hideElement(successModal);
  document.removeEventListener('click', hideSuccessByClick);
  activateForm();
};

const hideErrorByClick = () => {
  hideElement(errorModal);
  document.removeEventListener('click', hideErrorByClick);
  activateForm();
};

const hideSuccessByEsc = (evt) => {
  if (evt.key === 'Escape') {
    hideElement(successModal);
    document.removeEventListener('keydown', hideSuccessByEsc);
    activateForm();
  }

};

const hideErrorByEsc = (evt) => {
  if (evt.key === 'Escape') {
    hideElement(errorModal);
    document.removeEventListener('keydown', hideErrorByEsc);
    activateForm();
  }

};


const showModal = (text, success) => {
  if (success) {
    const successMessage = successModal.querySelector('.success__message');
    if (text) {
      successMessage.textContent = text;
    }
    successModal.style.display = 'block';
    document.addEventListener('click', hideSuccessByClick);
    document.addEventListener('keydown', hideSuccessByEsc);


  } else {
    const errorMessage = errorModal.querySelector('.error__message');
    if (text) {
      errorMessage.textContent = text;
    }
    errorModal.style.display = 'block';
    document.addEventListener('click', hideErrorByClick);
    document.addEventListener('keydown', hideErrorByEsc);
  }
  deactivateForm();
};


export { showModal };
