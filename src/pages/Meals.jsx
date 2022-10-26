import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

function Meals() {
  return (
    <div className="content-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Meals;
