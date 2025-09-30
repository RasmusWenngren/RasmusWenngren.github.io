
import Hero from '../common/Hero';
import { useLocation } from 'react-router-dom';

/**
 * Page layout component to provide consistent structure across pages
 */
export default function PageLayout({
                                       pageTitle,
                                       heroProps = {},
                                       children
                                   }) {
    const location = useLocation();
    const pageName = location.pathname.replace('/', '') || 'home';

    return (
        <div className="page-container">
            <Hero
                backgroundClass={pageName}
                {...heroProps}
            />

            <div className="page-content">
                {pageTitle && <h1>{pageTitle}</h1>}
                {children}
            </div>
        </div>
    );
}

