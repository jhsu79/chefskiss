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
