import * as searchAPI from './search-api'

//Display Search Results 
export async function getSearchResult(){
    try {
        const data = await searchAPI.index()
        return data
    } catch(err){
    return err}
}



//Build a list to display
export async function createSearchResultsList(newRestaurantData){

    try {
        const data = await searchAPI.create(newRestaurantData)
        return data
    }catch(err){
        return err
    }
}
