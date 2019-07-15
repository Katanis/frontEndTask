import React from 'react';
import Header  from './components/Header';
import Section  from './components/Section';
import SecondContent from './components/SecondContent';
import Part2_1  from './components/Part2_1';
import Part2_2  from './components/Part2_2';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="firstParagraph">
        <Section />
        <SecondContent />
      </div>
      <div className="secondParagraph">
        <Part2_1 />
        <Part2_2 />
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
