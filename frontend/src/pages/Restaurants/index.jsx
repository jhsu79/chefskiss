import {useState, useEffect } from 'react'
import {getRestaurant} from '../../utilities/restaurant-service'
import NewRestaurantSearch from './RestaurantSearch'

export default function Restaurants(props) {
    const[isLoading, setIsLoading] = useState(true)
    const [restuarant, setRestaurant]= useState([])

    async function handleRequest(){
        const restaurantResponse = await getRestaurant()

        if(restaurantResponse.length) {
            setRestaurant(restaurantResponse)
            setIsLoading(false); 
        } else { 
            console.log(restaurantResponse)
        }
    }

    useEffect(()=>{
        handleRequest()
    }, [])

    return (<div className='restaurants'>
    <NewRestaurantSearch updateRestaurant={handleRequest}/>
                                                    </div>)
    // // isLoading ? 
    // (
    // // <div classname='loading'>Loading</div>
    // // ):(
    

}

