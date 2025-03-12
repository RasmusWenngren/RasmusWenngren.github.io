Dynamic CV Portal

Overview

This web application consists of the following features:

    Navigation: A menu that allows users to navigate between different pages with clear indication of which page is currently active.
    Portfolio: Displays a list of projects, including a button for more information that triggers a modal popup.
    Easter Eggs: Hidden interactive elements that trigger fun surprises when activated.
    Responsive Design: The website adapts to various screen sizes, ensuring a smooth experience on both desktop and mobile.
    CV & Contact Information: A page displaying my personal details, CV, education, previous work experience, and portfolio.

Features
1. HTML, CSS & JavaScript

The core site is built using HTML and CSS, without relying on frameworks like Bootstrap, which helped to hone my CSS skills and create a custom, tailored design.
2. Responsive Design

The website adapts to various screen sizes to ensure users have a good experience across all devices, from mobile to desktop.
3. Multi-Page Navigation

    Five pages for navigation.
    Persistent and consistent menu across all pages, showing which page you're on.

4. Portfolio

    Display of projects, with images and descriptions.
    Button that opens a modal popup with more information on each project.

5. Easter Eggs

    Click-triggered Easter Egg: Clicking an "odd" part of the website will change the background.
    Keyboard-triggered Easter Egg: Typing a specific keyboard combination (e.g., "1337") triggers a popup with a fun message.

6. Modular CV

    Education and work experience are stored in a separate JSON file.
    The CV is dynamically generated from the JSON data.

7. React Integration

    Refactored from a static HTML page into a React app for better structure and scalability.
    Utilizes React Router for navigation, allowing users to navigate between pages without encountering a 404 error when refreshing or directly accessing URLs.

   Features & Components
Navigation Menu

    A responsive navigation bar appears at the top of the website. On screens smaller than 600px, a hamburger menu will appear, which slides in from the left.
    The active page is clearly indicated in the navigation bar.

Portfolio Page

    The portfolio page displays my GitHub projects with a button to reveal more information in a modal.
    The modal uses only HTML and CSS, with no JavaScript required.

CV Page

    The CV is dynamically populated from a JSON file containing my education and work experience.

Easter Eggs

    Background Change: Clicking on an odd part of the site triggers a background color change.
    Keyboard Combination: Typing a specific sequence (e.g., "1337") displays a popup with a funny message.

React Router

    Navigation is handled with React Router, ensuring that URLs are handled properly without leading to 404 errors, even on page refresh.
