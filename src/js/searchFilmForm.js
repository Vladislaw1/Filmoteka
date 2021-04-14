import MovieHttpService from './MovieHttpService';
import {renderFilms} from './renderFuncs';
import filmsSearchOptions from './filmsSearchOptions';

const movieHttpService = new MovieHttpService();

async function searchFilmForm(e) {
    e.preventDefault();
    const listGallery = document.querySelector('.film-list');
    const myInput = this.querySelector("[name=query]");
    const myInputValue = myInput.value;
    const errorMsg = this.querySelector('.not-found');
    
    try {
        filmsSearchOptions.options.query = myInputValue;
        filmsSearchOptions.endpoint = "search/movie";
        filmsSearchOptions.options.page = 1;
        const films = await movieHttpService.get(filmsSearchOptions);        
        if ( !films.results.length) {
            myInput.insertAdjacentHTML("afterend", `
            <p class="not-found">Search result is not successful. Enter the correct movie name.</p>
            `)
        } else {
            renderFilms(films, listGallery);
            if (errorMsg) {
                errorMsg.remove();
            }
        }
        this.reset();
        if (errorMsg) {
                errorMsg.remove();
            }

    }
    catch (error) {
        console.log(error)
        return error;
    }
}

export default searchFilmForm;
