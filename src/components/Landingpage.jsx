import React from 'react';
import './Landingpage.css';

// const Landingpage = () => {

function Landingpage(){
  return (
    <div className="landing-page">
      <main id="main-content">
        <section>
          <h2>ShadeMasters</h2>
          <p>We are committed to creating accessible websites and applications.</p>
        </section>

        <section>
          <h2>Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Accessibility Audits</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>Feel free to get in touch with us!</p>
          <p>Email: example@example.com</p>
        </section>
      </main>
    </div>
  );
};

export default Landingpage;