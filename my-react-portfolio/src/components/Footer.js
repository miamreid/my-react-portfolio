import React from 'react';

import '../components/styles/Header.css';
import linkedIn from '../components/styles/my-linkedin.png';
import instagram from '../components/styles/my-instagram.png';
import github from '../components/styles/github.png';
import spotify from '../components/styles/spotify.png';
import email from '../components/styles/telegram.png';

function Footer() {
    return(
        <ul className="nav justify-content-center footer-style">
            <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/mia-reid/">
                    <img src={linkedIn} width="50" />
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="mailto:miamreid@gmail.com">
                    <img src={email} width="50" />
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://github.com/miamreid">
                    <img src={github} width="50" />
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://open.spotify.com/user/123392913?si=60d385aa458a49ed">
                    <img src={spotify} width="50" />
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.instagram.com/miamouse/">
                    <img src={instagram} width="50" />
                </a>
            </li>

        </ul>

        //     <ul class="social-buttons">
        //         <li><a href="https://www.linkedin.com/in/mia-reid/"><img class="icons" src="../my-portfolio/assets/my-linkedin.png" alt="Linkedin"/></a></li>
        //         <li><a href="mailto:miamreid@gmail.com"><img class="icons" src="../my-portfolio/assets/telegram.png" alt="Email"/></a></li>
        //         <li><a href="https://github.com/miamreid"><img class="icons" src="../my-portfolio/assets/github.png" alt="Github"/></a></li>
        //         <li><a href="https://open.spotify.com/user/123392913?si=60d385aa458a49ed"><img class="icons" src="../my-portfolio/assets/spotify.png" alt="Spotify"/></a></li>
        //         <li><a href="https://www.instagram.com/miamouse/"><img class="icons" src="../my-portfolio/assets/my-instagram.png" alt="Instagram"/></a></li>
        //     </ul>
        // </div>
    )
}

export default Footer;