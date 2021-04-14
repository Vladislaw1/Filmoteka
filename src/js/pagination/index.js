import paginationTemplate from '../../templates/pagination.hbs';
import MovieHttpService from '../MovieHttpService.js';
import createPaginationArray from "./createPaginationArray.js";
import filmsSearchOptions from "../filmsSearchOptions.js";
import {renderFilms} from "../renderFuncs";
import svg from '../../images/sprite.svg';

const movieHttpService = new MovieHttpService();

const createPagination = (total_pages, filmsContainer) => {
    const { page } = filmsSearchOptions.options;
    const arr = createPaginationArray(total_pages);

    const prevPagination = document.querySelector(".pagination-container");
    if (prevPagination){
        prevPagination.remove()
    }

    const paginationContainer = document.createElement("div");
    paginationContainer.className = "pagination-container";

    paginationContainer.innerHTML = paginationTemplate({ src: svg, list: arr, page });
    const links = paginationContainer.querySelectorAll('.pages-list-link');
    const dots = [].filter.call(links, item => item.textContent === '...');
    dots.forEach(dot => {
        dot.removeAttribute("data-id");
        dot.closest("li").removeAttribute("data-id");
    });

    const activeElement = [].find.call(links, item => item.textContent === `${page}`);
    activeElement.closest("li").classList.add("current-item");

    const arrowButtons = paginationContainer.querySelectorAll('.arrow-btn');
    if (page > 1) {
        
        arrowButtons[0].classList.add('active')
    }
    if (page < total_pages) {
        arrowButtons[1].classList.add('active')
    }

    paginationContainer.addEventListener("click", async function (e) {
        e.preventDefault();
        const { id } = e.target.dataset;
        console.log(e.target.dataset)
        if (!id) {
            return;
        }
        switch (id) {
            case "prev":
                filmsSearchOptions.options.page--;
                break;
            case "next":
                filmsSearchOptions.options.page++;
                break;
            default:
                const number = +e.target.textContent.trim();
                filmsSearchOptions.options.page = number;
        }

        const filmsData = await movieHttpService.get(filmsSearchOptions);
        renderFilms(filmsData, filmsContainer);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    });
    
    return paginationContainer;
}

export default createPagination;