import React from 'react';
import axios from 'axios';

import '../styles/customList.css';

class CustomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    axios('http://jsonplaceholder.typicode.com/posts').then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.data
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const random4 = [];
    for (let i = 0; i < 4; i++) {
      random4.push(items[Math.floor(Math.random() * 100)]);
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="list">
          <h5>Custom List</h5>
          <p className="gray">Some heading</p>
          {random4.map(item => (
            <li key={item.id} className="underline-black-border-bottom">
              {item.title}
            </li>
          ))}
        </div>
      );
    }
  }
}

export default CustomList;
