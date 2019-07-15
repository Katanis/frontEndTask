import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { SecondContent } from './components/SecondContent';
import { Part2_1 } from './components/Part2_1';
import { Part2_2 } from './components/Part2_2';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="firstParagraph">
        <Welcome />
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
