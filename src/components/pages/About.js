import React from 'react';
import headshot from '../assets/mia-reid-headshot-2.jpg'
import '../assets/Header.css';

export default function About() {
  return (
    <div className="container-body">
      <div className="container">
        <h2 className="h2-body display-5 fw-bold">About Me</h2>
          <div className="clearfix">
            <img src={headshot} className="col-md-6 float-md-end mb-3 ms-md-3 image-hover" alt="mia-reid-headshot"/>
      
            <p>Hello! My name is Mia and I'm a digital marketer. I love to create things specifically for your website or mobile app.</p>

            <p>I am currently the Marketing Manager at Stax Payments, a leading FinTech company headquartered in Orlando, FL. It's been a dream of mine to breakthrough into the tech space in some capacity, especially in B2B SaaS.</p>

            <p>Content strategy, email development, marketing operations, search engine optimization, and revenue operations are just a few of the skills I possess within my arsenal. Outside of marketing, my skillset includes memorizing the lyrics of Paramore's entire discography, crafting various projects like knitted beanies and embroidered hoops, or eating an entire bag of Doritos in one sitting.</p>

            <p>You can find me in the central Florida area at my local rock climbing gym, walking my beautiful golden retriever, Kylo, at our local lake park, or spending time with my parents at their cabin in the Blue Ridge Mountains in Northeastern Tennessee.</p>

            <h3 className="h3-body fw-bold">Some of My Skills</h3>
            <ul className="skill-list">
                <li>Search Engine Optimization</li>
                <li>Content Strategy</li>
                <li>Graphic Design</li>
                <li>Email Design &amp; Development</li>
                <li>Marketing Automation</li>
                <li>Salesforce Admin (Intermediate)</li>
                <li>Revenue Operations</li>
            </ul>
    </div>
  </div>
  </div>
);
}
