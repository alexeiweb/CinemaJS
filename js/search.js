import { search as getSearch } from "./services.js";
import renderCard from "./renderCard.js";

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const searchForm  = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');

const search = () => {

  searchForm.addEventListener('submit', event => {
    event.preventDefault();

    if (!searchInput.value) return;

    getSearch(searchInput.value)
    .then(data => {
      console.log('data: ', data);
      if (data.results.length) {
        renderCard(data.results);
      } else {
        throw 'К сожалению по Вашему запросу ничего не найдено';
      }      
    })
    .then(() => {
      filmWeek.remove();
      title.textContent = 'Результат поиска';
    })
    .catch(err => {
      title.textContent = err;
    })

  })



};

export default search;