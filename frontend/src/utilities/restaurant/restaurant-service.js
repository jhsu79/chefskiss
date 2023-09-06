import * as restaurantAPI from './restaurant-api'

export async function getRestaurant(){
    try {
        const data = await restaurantAPI.index()
        return data
    } catch(err){
    return err}
}

export async function createRestaurant(newRestaurantData){

    try {
        const data = await restaurantAPI.create(newRestaurantData)
        return data
    }catch(err){
        return err
    }
}