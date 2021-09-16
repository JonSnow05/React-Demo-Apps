import axios from "axios";
import React, { Component } from "react";

class HttpPostExmpl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  chnageHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res);
        alert("Data submit successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={this.chnageHandler}
        /><br/>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.chnageHandler}
        /><br/>
        <input
          type="text"
          name="body"
          value={body}
          onChange={this.chnageHandler}
        /><br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default HttpPostExmpl;
