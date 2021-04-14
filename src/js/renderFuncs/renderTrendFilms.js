import renderFilms from './renderFilms';
import MovieHttpService from "../MovieHttpService";
import filmsSearchOptions from "../filmsSearchOptions";

const movieHttpService = new MovieHttpService();

const renderTrendFilms = async ()=>{
    const listGallery = document.querySelector('.film-list');
    try {
        const filmsData = await movieHttpService.get(filmsSearchOptions);
        renderFilms(filmsData, listGallery);
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export default renderTrendFilms;