import React, { Component } from "react";
import MemoExmpl from "./MemoExmpl";

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'react'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'react'
      })
    }, 2000)
  }
  render() {
    console.log(
      "***********************Parent Component renders********************"
    );
    return (
      <div>
        Parent Component
        <MemoExmpl name={this.state.name} />
      </div>
    );
  }
}

export default Parent;
