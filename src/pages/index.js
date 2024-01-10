// HomePage.js

import React, { useState } from 'react';
import Layout from '../components/Layout';
import HeroImage from '../images/cusco.svg'
import "../styles/styles.css"

const HomePage = () => {
 
  return (
    <Layout>
        <section className="hero">
            <img className="hero-img" src={HeroImage} alt="Hero Image Alt Text" />
            <div className="hero-meta">
                <span className="hero-date">September 5, 2023</span>
                <span className="dot">·</span>
                <span className="hero-category"><a href="#">Travel</a></span>
            </div>
            <h2 className="hero-title">Top 5 Attractions You Cannot Miss In Cusco, Peru</h2>
            <p className="hero-summary">At first, the dashcams were only used in the vehicles of traffic control and law enforcement agencies to reduce the violation of law and correctly identify the culprit. However, Dashcams have now become a widely adopted technology inside vehicles. </p>
            <p className="hero-author">by <strong>David Thompson</strong></p>
        </section>
    </Layout>
  );
};

export const Head = () => <title>MyJourneys</title>;

export default HomePage;
