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
  const loaction = useLocation();
  const pageName = loaction.pathname.replace('/', '') || 'home';
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
      
      <main className="page-content">
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>
    </div>
  );
}