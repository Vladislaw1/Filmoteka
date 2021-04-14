import {queueFilms} from "../localFilms";
import renderFilms from './renderFilms';
import MovieHttpService from "../MovieHttpService";

const movieHttpService = new MovieHttpService();

const renderQueueFilms = async ()=>{
    const listGallery = document.querySelector('.film-list');
    const filmsData = await movieHttpService.getFilmsById(queueFilms);
    // console.log(filmsData);
    renderFilms(filmsData, listGallery);
}

export default renderQueueFilms;