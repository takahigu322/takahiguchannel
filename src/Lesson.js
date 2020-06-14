import React from 'react';
import reactStringReplace from "react-string-replace"
import { Link } from "react-router-dom";


class Lesson extends React.Component {
  constructor(props) {
    super(props);
    // stateの初期値を定義してください


  }
  render() {
    return (
      <React.Fragment>
        <div className="lesson-card">
          <div className="lesson-item">
            <p>{this.props.name}</p>
            <a href={this.props.link}>
              <img src={this.props.image}></img>
            </a>
          </div>
        </div>
      </React.Fragment >
    );
  }
}
export default Lesson;

