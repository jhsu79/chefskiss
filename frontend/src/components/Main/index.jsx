import { Routes, Route } from "react-router-dom";
import YourRestaurants from "../../pages/YourRestaurants";
import Show from "../../pages/Show/";
import _404 from "../../pages/Error";

export default function (props) {
  return (
    <main className="Main">
      <Routes>
            <Route path="/" element={<YourRestaurants/>}/>
            <Route path="/people/:id" element={<Show/>}/>
            <Route path="/home" element={<h1>Home</h1>}/>
            <Route path="/*" element={<_404/>}/>
      </Routes>
    </main>
  );
}
