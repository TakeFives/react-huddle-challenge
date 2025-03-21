import logo from "/src/assets/images/logo.svg";

function Header() {
  return (
    <header>
      <nav aria-label="Main Navigation">
        <img src={logo} alt="Company Logo" width="150"  />
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