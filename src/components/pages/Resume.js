import React from 'react';
import '../assets/Header.css';

import resumePDF from '../assets/Mia Reid - Marketing Manager, 2023.pdf';
import resumePNG from '../assets/Mia Reid - Marketing Manager, 2023.png';

export default function Resume() {
  return (
    <div className="container-body">
    <div className="container">
      <h2 className="h2-body display-5 fw-bold">Resume</h2>

      <a href={resumePDF} download="Mia-Reid-Resume-Web-Dev-Marketing" target='_blank'>
      <img src={resumePNG} className="card-img-top" alt="..."/>
      <div className="card mb-3">
        <div className="card-body h3-background">
          <h5 className="h3-body card-title">My Resume</h5>
        </div>
      </div>
      </a>
    </div>
  </div>
  );
}
