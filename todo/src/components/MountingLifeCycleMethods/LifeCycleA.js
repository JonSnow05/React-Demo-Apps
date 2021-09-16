import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "React",
    };
    console.log("constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDrivedStateFromProps called");
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called in A");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called in A");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate in A");
  }

  changeState = () => {
    this.setState({
      name: "Angular",
    });
  };

  componentDidMount() {
    console.log("componentDidMount called");
  }
  render() {
    console.log("render called");
    return (
      <div>
        {this.state.name}
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
