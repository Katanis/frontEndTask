import React from 'react';
import CustomList from './CustomList';
import '../part2_1.css';

class Part2_2 extends React.Component {
  render() {
    return (
      <div className="a2">
        <div className="a2-1">
          <h4>WIREFRAME</h4>
          <p>
            Phasellus interdum aliquam eros, vitae vestibulum elit malesuada ut.
          </p>
        </div>
        <div className="a2-2">
          <CustomList />
          <div className="a2-2-2">
            <h4 className="bold black">Web Development</h4>
            <p className="gray">
              Phasellus interdum aliquam eros, vitae vestibulum elit malesuada
              ut. Integer nec ex accumsan, suscipit eros a, tempus risi.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Part2_2;