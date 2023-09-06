import * as restaurantAPI from './restaurant-api'
//RETURN A LIST OF RESTAURANTS IN THE DB
export async function getRestaurant(){
    try {
        const data = await restaurantAPI.index()
        return data
    } catch(err){
    return err}
}
//ADD A NEW RESTAURANT TO THE DB
export async function createRestaurant(newRestaurantData){

    try {
        const data = await restaurantAPI.create(newRestaurantData)
        return data
    }catch(err){
        return err
    }
}