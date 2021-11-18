const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.user-avatar');
const fileChooser = document.querySelector('.ad-form__upload input[type=file]');
const filePreview = document.querySelector('.ad-form__photo');

const avatarPreviewClone = avatarPreview.cloneNode(true);


avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((element) => fileName.endsWith(element));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((element) => fileName.endsWith(element));

  if (matches) {

    avatarPreviewClone.src = URL.createObjectURL(file);
    filePreview.append(avatarPreviewClone);
  }
});

const clearPreview = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  avatarPreviewClone.remove();
};

export { clearPreview };
