// import  {queueFilms, favoriteFilms}  from "./localFilms";
import {renderWatchedFilms,renderQueueFilms} from "./renderFuncs";

async function onFilmAction(e) {
    e.preventDefault();
    if(e.target.id === "watch") {
        renderWatchedFilms();
        queue.classList.remove('isActive')
        watch.classList.add('isActive')
    }
    if(e.target.id === "queue") {
        renderQueueFilms();
        watch.classList.remove('isActive')
        queue.classList.add('isActive')
    }    
}

export default onFilmAction;
