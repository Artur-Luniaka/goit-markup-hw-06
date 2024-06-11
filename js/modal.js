const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = document.querySelector('.form-close-btn');

function openModal() {
  modalOverlay.classList.add('is-open');
}

function closeModal() {
  modalOverlay.classList.remove('is-open');
}

closeModalButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

const openModalButton = document.querySelector('.button');
if (openModalButton) {
  openModalButton.addEventListener('click', openModal);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalOverlay.classList.contains('is-open')) {
    closeModal();
  }
});
