import * as searchAPI from "./search-api";

//Build a list to display
export async function getSearchResultsList(newRestaurantData) {
  try {
    const data = await searchAPI.fetchResultsFromYelp(newRestaurantData);
    return data;
  } catch (err) {
    return err;
  }
}
