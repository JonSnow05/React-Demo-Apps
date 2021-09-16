import React, { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "React of B",
    };
    console.log("constructor called of B");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDrivedStateFromProps called of B");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount called of B");
  }
  render() {
    console.log("render called of B");
    return <div>{this.state.name}</div>;
  }
}

export default LifeCycleB;
