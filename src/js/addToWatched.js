import {favoriteFilms} from './localFilms';

function addToWatched(id) {
  const addWatchBtn = document.querySelector('.btn-modal-add');

  if (favoriteFilms.includes(id)) {
    addWatchBtn.classList.add('isActive');
    addWatchBtn.textContent = 'ADDED TO LIBRARY';
  }
  addWatchBtn.addEventListener('click', () => {
    addWatchBtn.classList.toggle('isActive');

    const isActive = addWatchBtn.classList.contains('isActive');
    addWatchBtn.textContent = isActive ? 'ADDED TO LIBRARY' : 'ADD TO WATCHED';

    if (!favoriteFilms.includes(id)) {
      favoriteFilms.push(id);
    } else {
      const index = favoriteFilms.indexOf(id);
      favoriteFilms.splice(index, 1);
    }

    const favoriteFilmString = JSON.stringify(favoriteFilms);

    localStorage.setItem('favorite-films', favoriteFilmString);
  });
}

export default addToWatched;
