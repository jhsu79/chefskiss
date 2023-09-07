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
//IDENTIFY THE SPECIFIC ID FROM THE DB AND SHOW
export async function showRestaurant(id){
    try{
       const data = await restaurantAPI.detail(id)
       return data
    }catch(err){
        return err
    }
}
//IDENTIFY THE SPECIFIC ID FROM THE DB TO DESTROY
export async function deleteRestaurant(id){
    try{
       const data = await restaurantAPI.destroy(id)
       return data
    }catch(err){
        return err
    }
}
