const axios = require('axios');

import noImgSrc from '../images/no_image.jpg';

class MovieHttpService {
  static KEY = '923c2cf88ec4338da74c768a045101f0';
  static BASE_URL = 'https://api.themoviedb.org/3';

  async get({ endpoint, options }) {
    const requestOptions = this.createOptions(options);
    const fullURL = await this.getFullUrl({
      endpoint,
      options: requestOptions,
    });
    try {
      const { data } = await axios.get(fullURL);
      const { results: films } = data;
      const genres = await this.getAllGenres();

      const filmCards = films.map(film => {
        film.popularity = +film.popularity.toFixed(0);
        const filmGenres = film.genre_ids
          .map(id => {
            const result = genres.find(genre => genre.id === id);
            if (!result) {
              return '';
            }
            return ` ${result.name}`;
          })
          .filter(str => str !== '');

        const release_year = film.release_date
          ? film.release_date.split('-')[0]
          : 'future';
        if (film.poster_path) {
          film.poster_path = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
        } else {
          film.poster_path = noImgSrc;
        }

        const title = film.original_title || film.original_name;
        const filmCard = { ...film, filmGenres, release_year, title };
        return filmCard;
      });
      data.results = filmCards;
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getMovieInfo(id) {
    const fullURL = await this.getFullUrl({
      endpoint: `movie/${id}`,
    });
    try {
      const { data } = await axios.get(fullURL);
      data.popularity = +data.popularity.toFixed(0);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getFilmsById(filmsId){
    const filmRequests = filmsId.map(id => this.getMovieInfo(id));
    const filmResponses = await Promise.allSettled(filmRequests);
    const films = filmResponses.filter(({status}) => status === "fulfilled").map(({value}) => value);

    const results = films.map(film => {
        if (film.poster_path) {
          film.poster_path = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
        } else {
          film.poster_path = noImgSrc;
        }      
        film.genres = film.genres.map(({name}) => name);
        
        film.release_year = film.release_date ? film.release_date.split('-')[0] : 'future';
        film.title = film.original_title || film.original_name;
        return film;
    })
    return {
      page: 1, 
      total_pages: 1,
      results
    }
  }

  async getAllGenres() {
    const fullURL = this.getFullUrl({ endpoint: 'genre/movie/list' });
    try {
      const { data } = await axios.get(fullURL);
      return data.genres;
    } catch (error) {
      throw error;
    }
  }

  createOptions(options) {
    let stringOptions = '';
    for (const [key, value] of Object.entries(options)) {
      stringOptions += `&${key}=${value}`;
    }
    return stringOptions;
  }

  getFullUrl({ endpoint, options = '' }) {
    const fullUrl = `${MovieHttpService.BASE_URL}/${endpoint}?api_key=${MovieHttpService.KEY}&${options}`;
    return fullUrl;
  }
}

export default MovieHttpService;
