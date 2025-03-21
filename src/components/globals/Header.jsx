import logo from "/src/assets/images/logo.svg";

function Header() {
  return (
    <header className="header">
      <nav aria-label="Main Navigation" className="nav main-nav">
        <img src={logo} alt="Company Logo" width="150" className="logo" />
        <ul>
          <li>
            <button className="cta-btn">Try it Free</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;