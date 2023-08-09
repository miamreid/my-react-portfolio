import React from 'react';
import '../assets/Header.css';
import stax from '../assets/PLG-Landing-Page.png';
import movies4u from '../assets/movies4u.png';
import techBlog from '../assets/tech-blog.png';
import weather from '../assets/weather-dashboard.png';
import moody from '../assets/Moody.png'
import concerts from '../assets/concerts.png';

export default function Portfolio() {
  return (
    <div className="container-body">
      <div className="container">
        <h2 className="h2-body display-5 fw-bold">My Work</h2>


        <a href="https://limitless-dawn-09471-5eef669ce044.herokuapp.com/">
        <img src={concerts} className="card-img-top" alt="..."/>
        <div className="card mb-3">
          <div className="card-body h3-background">
            <h5 className="h3-body card-title">Concert Connect</h5>
          </div>
        </div>
        </a>
        
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <a href="https://tranquil-wildwood-45278.herokuapp.com/login/">
              <div className="card h-100">
                <img src={moody} className="card-img-top clip"/>
                <div className="card-body h3-background">
                  <h5 className="h3-body card-title">Moody</h5>
                </div>
              </div>
            </a>
          </div>
          
          <div class="col">
            <a href="https://miamreid.github.io/movies4u/">
              <div className="card h-100">
                <img src={movies4u} className="card-img-top clip"/>
                <div className="card-body h3-background">
                  <h5 className="h3-body card-title">Movies4U</h5>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="https://miamreid.github.io/weather-dashboard">
              <div className="card h-100">
                <img src={weather} className="card-img-top clip"/>
                <div className="card-body h3-background">
                  <h5 className="h3-body card-title">Weather Dashboard</h5>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="https://aqueous-earth-47907.herokuapp.com/">
              <div className="card">
                <img src={techBlog} className="card-img-top clip"/>
                <div className="card-body h3-background">
                  <h5 className="h3-body card-title">Tech Blog</h5>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="https://staxpayments.com/payments-led-growth/">
              <div className="card">
                <img src={stax} className="card-img-top clip"/>
                <div className="card-body h3-background">
                  <h5 className="h3-body card-title">Stax Connect's Strategic Narrative</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
        

</div>
</div>
  )
}
