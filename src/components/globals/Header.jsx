import logo from "/src/assets/images/logo.svg";

import '../../css/components/header.css'

function Header() {
  return (
    <header className="header">
      <nav aria-label="Main Navigation" className="nav main-nav container">
        <img src={logo} alt="Company Logo" width="200" height="30" className="logo" />
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