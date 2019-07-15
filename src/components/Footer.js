import React from 'react';
import '../styles/footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <ul className="footerNavBar">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#service">SERVICE</a>
          </li>
          <li>
            <a href="#works">WORKS</a>
          </li>
          <li>
            <a href="#aboutme">ABOUT ME</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <p className="info">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words
        </p>
        <p className="copywrites">
          &copy;<span className="bigger">DEMO</span>SITE All rights reserved
        </p>
      </div>
    );
  }
}
