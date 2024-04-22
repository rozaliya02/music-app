const Header = () => {
  return (
    <header>
      <nav>
        <img src="./images/headphones.png" />
        <a href="/">Home</a>
        <ul>
          {/* <!--All user--> */}
          <li>
            <a href="/catalog">Catalog</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
          {/* <!--Only guest--> */}
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          {/* <!--Only user--> */}
          <li>
            <a href="/create-album">Create Album</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
