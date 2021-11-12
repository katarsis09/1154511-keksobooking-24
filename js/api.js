// функция получения данных

const getData = (onSuccess, onError) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch((error) => {
      console.log(error);
      onError(error);
    });
};

// функция отправки данных

const sendData = (onSuccess, onError, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch((error) => {
      console.log(error);
      onError(error);
    });
};

export { getData, sendData };
