import {useState, useEffect } from 'react'
import RestaurantList from "./RestaurantList"
import {getRestaurant} from '../../utilities/restaurant-service'
import NewRestaurantSearch from './RestaurantSearch'

export default function Restaurants(props) {
    // const[isLoading, setIsLoading] = useState(true)
    const [restaurants, setRestaurants]= useState([])

    async function handleRequest(){
        const restaurantResponse = await getRestaurant()

        if(restaurantResponse.length) {
            setRestaurants(restaurantResponse)
            // setIsLoading(false); 
        } else { 
            console.log(restaurantResponse)
        }
    }

    useEffect(()=>{
        handleRequest()
    }, [])

    return (<div className='restaurants'>
    <NewRestaurantSearch updateRestaurant={handleRequest}/>
    <RestaurantList restaurants={ restaurants }/>
                                                    </div>)
    // // isLoading ? 
    // (
    // // <div classname='loading'>Loading</div>
    // // ):(
    

}

