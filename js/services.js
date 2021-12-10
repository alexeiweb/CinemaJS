const API_KEY = '79a31251f5f35d0ca496f4fe2cc33e43';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

const getData = url => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw `Что-то пошло не так, ошибка ${response.status}`
  })  
  .catch(err => console.error(err));

export const getTrends = async (type = 'all', period = 'day', page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};

export const getTop = async (type, page = 2) => {
  const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};

export const getPopular = async (type, page = 1) => {
  const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await  getData(url);
};

export const getVideo = async (id, type) => {
  const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANGUAGE}`;
  return await  getData(url); 
};
