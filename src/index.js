import './sass/main.scss';

import "./js/localFilms";

import {showFilmInfo} from './js/renderFuncs';
import {closeModal} from './js/modal';
import searchFilmForm from './js/searchFilmForm';

import {createDynamicContent} from "./js/renderFuncs";
import './js/filmsSearchOptions';
import addHeaderMenuEventListener from "./js/header";

import { routes } from "./js/routes";


import loader from './js/loader';


import svg from './images/sprite.svg';

import headerTemplate from './templates/header.hbs';
import mainGalleryTemplate from './templates/main-gallery.hbs';
import footerTemplate from './templates/footer.hbs';
import modalTemplate from './templates/modal.hbs';
// import formHeaderRender from "./templates/formHeaderRender.hbs"; 

const headerContainer = document.getElementById('header');
const mainContainer = document.getElementById('main');
const footerContainer = document.getElementById('footer');
const modalREf = document.getElementById('modal');

headerContainer.innerHTML = headerTemplate({ src: svg });
mainContainer.innerHTML = mainGalleryTemplate();
footerContainer.innerHTML = footerTemplate({ src: svg });
document.body.insertAdjacentHTML('beforeend', modalTemplate());

// const movieHttpService = new MovieHttpService();

window.addEventListener('DOMContentLoaded', async () => {
  let {pathname} = window.location;
  pathname = (pathname === "/") ? "/home" : pathname;
  addHeaderMenuEventListener(headerContainer, pathname);

  createDynamicContent(pathname);

  const headerPageContent = headerContainer.querySelector('#header-content');

  const listGallery = document.querySelector('.film-list');
  listGallery.addEventListener('click', showFilmInfo);

  const closeModalButton = document.querySelector('.modal-content .close');
  closeModalButton.addEventListener('click', closeModal);
  window.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  });
  
});
