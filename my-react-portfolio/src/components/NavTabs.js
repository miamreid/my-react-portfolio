import React from 'react';

import '../components/styles/Header.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header class="hero">
        <div className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h1><a className="navbar-brand text-white h1-text" href="#home">MIA REID</a></h1>
                <ul className="nav nav-underline justify-content-end">
                    <li className="nav-item">
                        <a 
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#blog"
                        onClick={() => handlePageChange('Blog')}
                        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    <div className="container hero-text">
        <h2 className="display-1 fw-bold">Hi, I'm Mia</h2>
        <h2 className="display-5 fw-bold">I'm a digital marketer, web developer, killer of plants</h2>
    </div>
</header>
  );
}

export default NavTabs;
