import React from 'react';
import '../styles/contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container-col6-xl">
          <h1 className="black bold900">CONTACT</h1>
          <hr className="black-line" />
          <p className="gray">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p className="gray">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
          <p className="gray">
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="inputContainer">
          <p className="black bold">NAME</p>
          <input type="text" id="name" />
          <p className="black bold">EMAIL</p>
          <input type="email" id="email" />
          <p className="black bold">MESSAGE</p>
          <input type="text" id="message" />
          <input id="submit" type="submit" value="SEND" />
        </div>
      </div>
    );
  }
}

export default Contact;