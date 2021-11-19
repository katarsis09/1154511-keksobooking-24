const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.user-avatar');
const fileChooser = document.querySelector('.ad-form__upload input[type=file]');
const filePreview = document.querySelector('.ad-form__photo');

const avatarPreviewClone = avatarPreview.cloneNode(true);

const getBlobUrl = (input) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((element) => fileName.endsWith(element));

  if (matches) {
    return URL.createObjectURL(file);
  }

};

const downloadPicture = () => {
  avatarChooser.addEventListener('change', () => {
    avatarPreview.src = getBlobUrl(avatarChooser);
  });

  fileChooser.addEventListener('change', () => {
    avatarPreviewClone.src = getBlobUrl(fileChooser);
    filePreview.append(avatarPreviewClone);
  });

};

const clearPreview = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  avatarPreviewClone.remove();
};

export { clearPreview, downloadPicture };
