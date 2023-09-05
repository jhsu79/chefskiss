import "./Nav.css"

import { Link } from "react-router-dom";

const headerImage = "https://i.imgur.com/EJh471C.png"

export default function Nav(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={headerImage}></img>
      </Link>
      <Link className="link" to="/savedRestaurants">
        <div className="linktext">Your Restaurants</div>
      </Link>
      <Link className="link" to="/about">
        <div className="linktext">About</div>
      </Link>
    </nav>
  );
}
