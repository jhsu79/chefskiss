import * as searchAPI from './search-api'


export async function getRestaurant(){
    try {
        const data = await restaurantAPI.index()
        return data
    } catch(err){
    return err}
}

export async function createSearchResultsList(newRestaurantData){

    // extension: we might pass the data through a few helper functions for normalizing data
    // after data parsing - provide data to create

    try {
        const data = await restaurantAPI.create(newRestaurantData)
        return data
    }catch(err){
        return err
    }
}