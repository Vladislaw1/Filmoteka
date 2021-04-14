// <<<<<<< HEAD:src/js/renderFuncs/showFilmInfo.js
import MovieHttpService from '../MovieHttpService';
import {openModal} from '../modal';
// =======
// import MovieHttpService from './MovieHttpService.js';
// import openModal from './openModal.js';
import { postError } from '../pnotify';
import '../teamModal.js';
// >>>>>>> dev:src/js/showFilmInfo.js

import filmInfoTemplate from '../../templates/film-info.hbs';

const movieHttpService = new MovieHttpService();

async function showFilmInfo(e) {
  e.preventDefault();

  const { target } = e;

  if (target !== this) {
    const { id } = target.dataset;
    try {
      const result = await movieHttpService.getMovieInfo(id);
      const filmInfo = filmInfoTemplate(result);
      openModal(filmInfo, id);
    } catch (error) {
      postError('Content not found');
    }
  }
}
export default showFilmInfo;
