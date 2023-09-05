import {Routes, Route} from 'react-router-dom'
import Restaurants from '../../pages/Restaurants'
import Saved from '../../pages/Saved'
import Show from '../../pages/Show'
import About from '../../pages/About'
import Error from '../../pages/Error'
export default function (){
    return (<main className='main'>
        <Routes> 
            <Route path="/" element={<Restaurants/>}/>
            <Route path="/savedRestaurants" element={<Saved/>}/>
            <Route path="/restaurants/:id" element={<Show/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>

        </main>)
} 