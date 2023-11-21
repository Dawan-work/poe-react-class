import React, { Component } from "react";

export default class SubTitle extends Component {
  render() {
    return (
      <>
        <h2
         className="font-semibold text-2xl">{this.props.title}</h2>
        <div className="bg-cyan-200 h-2"></div>
      </>
    );
  }
}
