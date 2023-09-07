import {useState} from "react"
import {createImpression} from "../../utilities/impression/impression-service"

const initState = {
    ambiance: 3, 
    cleanliness: 3,  
    service: 3, 
    favDivhes:"",
    comments:"",
    revisit: false,
    futureVisit: null, 
}


export default function NewImpressionForm({})
    const [newForm, setNewForm] = useState(initState)