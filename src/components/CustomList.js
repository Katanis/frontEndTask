import React from 'react';
import '../styles/customList.css';

export class CustomList extends React.Component {
  render() {
    return (
      <div className="list">
        <h5>Custom List</h5>
        <p className="gray">Some heading</p>
        <li className="underline-black-border-bottom">Item 1</li>
      </div>
    );
  }
}
