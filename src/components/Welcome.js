import React from 'react';
import '../styles/welcome.css';

export class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome-container">
        <h1>WELCOME</h1>
        <hr />
        <p className="white">
          Sed kaireet magna at neque sollic-itudin, quis tristique ipsum per
          molestie. Class apt ent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos
        </p>

        <div className="btn" onClick="">
          LEARN MORE
        </div>
      </div>
    );
  }
}
