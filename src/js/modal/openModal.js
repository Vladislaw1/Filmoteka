import addToWatched from '../addToWatched';
import addToQueue from '../addToQueue';
import closeModal from './closeModal';

function openModal(modalContent, id) {
  const backdrop = document.querySelector('.backdrop');
  const modalContentRef = document.querySelector('.modal-content');
  const modalBody = modalContentRef.querySelector('.modal-body');
  modalBody.innerHTML = modalContent;

  addToWatched(id);
  addToQueue(id);

  backdrop.classList.add('is-open');
  modalContentRef.classList.add('is-open');
  backdrop.addEventListener('click', closeModal);
}

export default openModal;
