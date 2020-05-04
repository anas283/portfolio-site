import React, { Component } from "react";

class Project extends Component {
  state = {};
  render() {
    return (
      <div className="p-4 max-w-4xl mx-auto h-screen">
        <h1 className="mt-4 text-lg font-bold">Static website</h1>
        <div className="h-32 p-4 mt-2 rounded bg-teal-200">Project 1</div>
        <div className="h-32 p-4 mt-2 rounded bg-teal-200">Project 2</div>
        <div className="h-32 p-4 mt-2 rounded bg-teal-200">Project 3</div>
      </div>
    );
  }
}

export default Project;
