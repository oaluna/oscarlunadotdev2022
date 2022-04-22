import OscarArmandoLunaLogo from "../../assets/OscarArmandoLunaLogo.svg";
import "./Header.css";

const Header = () => (
  <header>
    <div className="App-navbar">
      <nav>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>
              <img src={OscarArmandoLunaLogo} alt="logo" />
            </li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);
export default Header;
