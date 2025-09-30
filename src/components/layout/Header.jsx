import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Handle keyboard navigation and accessibility
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isMenuOpen) return;

            if (e.key === 'Escape') {
                setIsMenuOpen(false);
                buttonRef.current?.focus();
            }
        };

        // Handle clicks outside menu
        const handleClickOutside = (e) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !buttonRef.current?.contains(e.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Toggle menu open/closed
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav aria-label="Main navigation">
                <button
                    ref={buttonRef}
                    className={styles['nav-toggle-label']}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="nav-menu"
                    onClick={toggleMenu}
                >
                    ☰
                </button>

                <ul
                    id="nav-menu"
                    ref={menuRef}
                    className={`${styles['nav-menu']} ${isMenuOpen ? styles['menu-open'] : ''}`}
                    aria-hidden={!isMenuOpen && window.innerWidth <= 600}
                >
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? styles.active : ''}
                            aria-current={({ isActive }) => isActive ? 'page' : undefined}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cv"
                            className={({ isActive }) => isActive ? styles.active : ''}
                            aria-current={({ isActive }) => isActive ? 'page' : undefined}
                        >
                            CV
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) => isActive ? styles.active : ''}
                            aria-current={({ isActive }) => isActive ? 'page' : undefined}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? styles.active : ''}
                            aria-current={({ isActive }) => isActive ? 'page' : undefined}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? styles.active : ''}
                            aria-current={({ isActive }) => isActive ? 'page' : undefined}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}