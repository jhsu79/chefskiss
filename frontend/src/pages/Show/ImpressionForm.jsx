import { useState } from "react";
import { createImpression, editImpression, updateImpression, deleteImpression } from "../../utilities/impression/impression-service";

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
//deal with how to conditionally render the impression form and impressions. 
//add a spinner 



export default function NewImpressionForm({}) {
  const [newForm, setNewForm] = useState(initState);

  async function handleSubmit(e){
    e.preventDefault()
    console.log(newForm)
  }
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
//maybe an input type component? 