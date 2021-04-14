import buttonRenderHeader from '../templates/buttonHeader.hbs';
import formHeaderRender from '../templates/formHeaderRender.hbs';

import {renderWatchedFilms, renderTrendFilms} from "./renderFuncs";
import searchFilmForm  from "./searchFilmForm";
import onFilmAction from "./onFilmAction";

export const routes = [
    {
        pathname: "/home",
        template: formHeaderRender,
        headerClass: "header-bg-home",
        afterRender: ()=> {
            const formSearch = document.getElementById('search-form');
            formSearch.addEventListener('submit', searchFilmForm);
            renderTrendFilms();
        }
    },
    {
        pathname: "/myLibrary",
        template: buttonRenderHeader,
        selector: "#profile-films-actions",
        actionType: "click",
        listner: onFilmAction,
        headerClass: "header-bg-library",
        afterRender: renderWatchedFilms
    }
];