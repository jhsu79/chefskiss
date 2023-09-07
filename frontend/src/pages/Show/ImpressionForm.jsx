import { useState } from "react";
import { createImpression } from "../../utilities/impression/impression-service";

const initState = {
  ambiance: 3,
  cleanliness: 3,
  service: 3,
  favDivhes: "",
  comments: "",
  revisit: false,
  futureVisit: null,
};

//todo add handlesubmit functions and handleonchange functions here. 
//onsubmit add a navigate function back to this page? 
//populate the api and service modules for impressions to hit backroutes. 
//deal with how to conditionally render the impression form and impressions. 
//add a spinner 

export default function NewImpressionForm({}) {
  const [newForm, setNewForm] = useState(initState);
  return (
    <div className="form-container">
      <form>
        <label htmlFor="ambiance">
        <input type='radio'></input>
        </label>
        <label htmlFor="cleanliness">
        <input type='radio'></input>
        </label>
        <label htmlFor="service">
          <input type='radio'></input>
        </label>
        <label htmlFor="favDishes">
          <input type="text"></input>
        </label>
        <label htmlFor="comments">
          <input type="text"></input>
        </label>
        <label htmlFor="revisit">
          <input type='checkbox'></input>
        </label>
        <label htmlFor="futureVisit">
          <input type='date'></input>
        </label>
      </form>
    </div>
  );
}
