import {useState, useEffect } from 'react'
import SearchResultsList from './SearchResultsList'
import SearchAPIBar from './SearchAPIBar'
import {getSearchRestaurant} from '../../utilities/SearchAPI/search-service'


export default function Search() {
    return (<div className='search'>
    <SearchAPIBar updateSearch={handleRequest}/>
    <SearchResultsList results={ results }/></div>)


}