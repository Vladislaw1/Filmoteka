import teamInfoMarkup from '../templates/team-modal.hbs';
import closeModal from './modal/closeModal.js';
import '../images/vlad.jpg';
import '../images/max.jpg';
import '../images/vika.jpg';
import '../images/bogdan.jpg';
import '../images/yarik.jpg';
import '../images/roma.jpg';
import '../images/jenya.jpg';
import '../images/lesha.jpg';

window.addEventListener('DOMContentLoaded', () => {
  const footerLink = document.querySelector('.footer-link');
  footerLink.addEventListener('click', onOpenFooterModal);
  function onOpenFooterModal(e) {
    e.preventDefault();
    openTeamModal(teamInfoMarkup());
  }
});
function openTeamModal(teamInfo) {
  const backdrop = document.querySelector('.backdrop');
  const modalContentRef = document.querySelector('.modal-content');
  const modalBody = modalContentRef.querySelector('.modal-body');
  modalBody.innerHTML = teamInfo;

  backdrop.classList.add('is-open');
  modalContentRef.classList.add('is-open');
}
