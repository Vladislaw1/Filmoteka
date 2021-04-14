import {favoriteFilms} from "../localFilms";
import renderFilms from './renderFilms';
import MovieHttpService from "../MovieHttpService";

const movieHttpService = new MovieHttpService();

const renderWatchedFilms = async ()=>{
    const listGallery = document.querySelector('.film-list');
    const filmsData = await movieHttpService.getFilmsById(favoriteFilms);
    console.log(filmsData);
    renderFilms(filmsData, listGallery);
}

export default renderWatchedFilms;