import React from 'react';

export class Contact extends React.Component {
  render() {
    return (
      <div className="c1">
        <div className="Contact">
          <h1 className="Contact-p">CONTACT</h1>
          <hr className="Contact"></hr>
          <p className="Contact">It was popularised in the 1960s
             with the release of Letraset sheets
             containing Lorem Ipsum passages, and
             more recently with desktop publishing
              software like Aldus PageMaker including
               versions of Lorem Ipsum.
          </p>
          <p className="Contact">is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy
            text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled
              it to make a type specimen book.
          </p>
          <p className="Contact">Lorem Ipsum passages, and more recently
             with desktop publishing software like Aldus
             PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="inputContainer">
          <p className="inputP">NAME</p>
          <input type="text" id="name"></input>
          <p className="inputP">EMAIL</p>
          <input type="email" id="email"></input>
          <p className="inputP">MESSAGE</p>
          <input type="text" id="message"></input>
          <input id="submit" type="submit" value="SEND"></input>
        </div>
      </div>
    );
  }
}