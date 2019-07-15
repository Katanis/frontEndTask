import React from "react";
import { whileStatement } from "@babel/types";

export class FirstContent extends React.Component {
  render() {
    return (
      <div className="div1">
        <h1>WELCOME</h1>
        <hr></hr>
        <p className="text1">Sed kaireet magna at neque sollic-itudin,
           quis tristique ipsum per molestie. Class
            apt ent taciti sociosqu ad litora torquent
             per conubia nostra, per inceptos
        </p>

        <div className="btn" onClick="">LEARN MORE</div>
      </div>
    );
  }
}