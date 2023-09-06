import * as searchAPI from './search-api'


export async function getSearchResult(){
    try {
        const data = await searchAPI.index()
        return data
    } catch(err){
    return err}
}

export async function createSearchResultsList(newRestaurantData){

    try {
        const data = await searchAPI.create(newRestaurantData)
        return data
    }catch(err){
        return err
    }
}

    // extension: we might pass the data through a few helper functions for normalizing data
    // after data parsing - provide data to create