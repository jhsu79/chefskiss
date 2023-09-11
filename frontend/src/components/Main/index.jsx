import { Routes, Route } from "react-router-dom";
import Restaurants from "../../pages/Restaurants";
import SearchAPI from "../../pages/SearchAPI";
import About from "../../pages/About";
import Error from "../../pages/Error";

export default function () {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/search" element={<SearchAPI />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </main>
  );
}
