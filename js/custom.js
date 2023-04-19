const modalElement = document.querySelector('.modal');
const offerItemElements = document.querySelectorAll('.offer__item');

console.log(offerItemElements);

offerItemElements.forEach((element) => {
  const title = element.querySelector('.offer__title').innerHTML;
  const content = element.querySelector('.offer__truncate').innerHTML;

  element.addEventListener('click', (event) => {
    event.preventDefault();
    modalElement.querySelector('.modal__title').innerHTML = title;
    modalElement.querySelector('.modal__content').innerHTML = content;
    modalElement.classList.add('modal_active');
  });
});

modalElement.addEventListener('click', (event) => {
  if (modalElement === event.target) {
    modalElement.classList.remove('modal_active');
  }
});

modalElement.querySelector('.modal__close').addEventListener('click', () => {
  modalElement.classList.remove('modal_active');
});

shave('.js-shave', 66);
