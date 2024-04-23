import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <img src="./images/headphones.png" />
        <Link to="/">Home</Link>
        <ul>
          {/* <!--All user--> */}
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          {/* <!--Only guest--> */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {/* <!--Only user--> */}
          <li>
            <Link to="/create-album">Create Album</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
