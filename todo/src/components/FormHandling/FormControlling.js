import React, { Component } from "react";

export class FormControlling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comment: "",
      skill: "react",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleSkillChange = (event) => {
      this.setState({
          skill : event.target.value
      })
  }
  handleSubmit = (event) => {
    alert(`Name : ${this.state.name} | Comment : ${this.state.comment} | Skill : ${this.state.skill}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label>Comment</label>
          <input
            type="text"
            onChange={this.handleCommentChange}
            value={this.state.comment}
          />
        </div>
        <div>
            <select onChange={this.handleSkillChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default FormControlling;
