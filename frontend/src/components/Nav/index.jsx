import "./Nav.css"
import { Link } from "react-router-dom";

const headerImage = "https://i.imgur.com/EJh471C.png"

export default function Nav(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={headerImage}></img>
      </Link>
      <div className='page-links'>
      <Link className="link" to="/search">
        <div className="linktext">Search</div>
      </Link>
      <Link className="link" to="/about">
        <div className="linktext">About Us</div>
      </Link>
      </div>
    </nav>
  );
}
