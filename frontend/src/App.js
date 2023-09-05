import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { RestaurantContext } from "./data/RestaurantContext";

export default function App() {
  const { Provider: RestaurantData } = RestaurantContext;
  // 3. initalize some global 'state' in APP
  const [state, setState] = useState({
    error: "",
  });

  return (
    <div className="App">
      <RestaurantData value={state}>
        <Header />
        <Main />
      </RestaurantData>
    </div>
  );
}
