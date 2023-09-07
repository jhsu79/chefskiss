import {useState, useEffect } from 'react'
import RestaurantList from "./RestaurantList"
import {getRestaurant} from '../../utilities/restaurant/restaurant-service'
//add a spinner
export default function Restaurants(props) {
    const [restaurant, setRestaurant]= useState([])

    async function handleRequest(){
        const restaurantResponse = await getRestaurant()

        if(restaurantResponse.length) {
            setRestaurant(restaurantResponse)
        } else { 
            console.log(restaurantResponse)
        }
    }

    useEffect(()=>{
        handleRequest()
    }, [])

    return (<div className='restaurants'>
    <RestaurantList restaurants={ restaurant }/>
                                                    </div>)
    
}

