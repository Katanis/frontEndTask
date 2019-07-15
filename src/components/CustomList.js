import React from 'react';
import '../part2_1.css';

export class CustomList extends React.Component{
  render(){
    return(
      <div className="a2-2-1">
        <h5>Custom List</h5>
        <p className="t2">Some heading</p>
        <li className="t3">Item 1</li>
      </div>
    );
  }
}