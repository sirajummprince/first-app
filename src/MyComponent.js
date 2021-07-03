import React, { Component } from "react";
class MyComponent extends Component {
  state = {
    name: `Prince`,
    profession: `React learner`,
    age: `100`,
  };
  render() {
    return <div>
        <p>Hi, I am {this.state.name}</p>
        <p>I am a {this.state.profession}</p>
        <p>I am {this.state.age}</p>
        <button>Update Information</button>
    </div>;
  }
}
export default MyComponent;
