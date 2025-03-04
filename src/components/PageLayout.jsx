import React from "react";
import Hero from "./Hero";
import { NavLink, useLocation } from "react-router-dom";

export default function PageLayout({ 
  pageTitle,
  heroTitle, 
  heroSubtitle, 
  heroButtonText, 
  heroButtonLink, 
  heroButtonAction,
  children 
}) {
  const location = useLocation();
  const pageName = location.pathname.replace('/', '') || 'home';
  return (
    <div>
      <Hero page={pageName}>
        <h1>{heroTitle}</h1>
        {heroSubtitle && <p>{heroSubtitle}</p>}
        {heroButtonText && (
          heroButtonLink ? (
            <NavLink to={heroButtonLink} className="btn">
              {heroButtonText}
            </NavLink>
          ) : (
            <a href="#" className="btn" onClick={heroButtonAction}>
              {heroButtonText}
            </a>
          )
        )}
      </Hero>
      
      <div className="page-container">
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </div>
    </div>
  );
}