const main = document.querySelector('main');

const templateSuccess = document.querySelector('#success')
  .content.querySelector('.success');
const successCopy = templateSuccess.cloneNode(true);

successCopy.style.display = 'none';
main.appendChild(successCopy);


const templateError = document.querySelector('#error')
  .content.querySelector('.error');
const error = templateError.cloneNode(true);

error.style.display = 'none';
main.appendChild(error);


document.addEventListener('click', () => {
  successCopy.style.display = 'none';
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape')
  {successCopy.style.display = 'none';}
});


const showModal = (text, success) => {

  if (success) {
    const successMessage = successCopy.querySelector('.success__message');
    if (text) {
      successMessage.textContent = text;
    }
    successCopy.style.display = 'block';

  } else {
    const errorMessage = error.querySelector('.error__message');

    if (text) {
      errorMessage.textContent = text;
    }
    error.style.display = 'block';
    successCopy.style.display = 'none';

    document.addEventListener('click', () => {
      error.style.display = 'none';
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape')
      {error.style.display = 'none';}
    });

  }
};


export { showModal };
