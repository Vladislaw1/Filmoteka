const favoriteFilms = [];
const queueFilms = [];

export const localFavoriteFilms = localStorage.getItem('favorite-films');
if (localFavoriteFilms) {
  favoriteFilms.push(...JSON.parse(localFavoriteFilms));
}

export const localQueueFilms = localStorage.getItem('queue-films');
if (localQueueFilms) {
  queueFilms.push(...JSON.parse(localQueueFilms));
}

export {favoriteFilms, queueFilms}