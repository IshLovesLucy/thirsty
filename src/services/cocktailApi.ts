const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const cocktailApi = {
  searchKey: (query: string) =>
    query ? `${BASE_URL}/search.php?s=${query}` : null,
  drinkKey: (id: string) => `${BASE_URL}/lookup.php?i=${id}`,
};
