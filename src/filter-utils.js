import FILTERS from './filters';
import filterMarkup from './filter-markup';

export const renderFilters = (selector) => {
  FILTERS.forEach((item) => {
    selector.innerHTML += filterMarkup(item);
  });
};
