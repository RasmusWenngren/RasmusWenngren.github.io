import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header>
        <nav>
          <label
            htmlFor="nav-toggle"
            className={styles["nav-toggle-label"]}
            aria-label="Open navigation menu"
            onClick={toggleMenu}
          >
            ☰
          </label>

          <ul
            className={`${styles["nav-menu"]} ${
              isMenuOpen ? styles["menu-open"] : ""
            }`}
          >
            <li>
              <NavLink
                to="/"
                onClick={handleLinkClick}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cv"
                onClick={handleLinkClick}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                CV
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                onClick={handleLinkClick}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={handleLinkClick}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleLinkClick}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
