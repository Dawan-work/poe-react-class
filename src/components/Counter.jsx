import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      counter: this.props.initCounter,
    };
    // this.augmenter = this.augmenter.bind(this)
    // this.diminuer = this.diminuer.bind(this)
  }

  diminuer = () => {
    if(this.state.counter > 0) {
        this.setState({
            counter : this.state.counter - 1
        })
    }
  }

  augmenter(){
        this.setState({
            counter : this.state.counter + 1
        })
  }

  render() {
    return (
      <>
        <div className="flex bg-cyan-400 justify-center mt-10">
          <div className="w-1/2 p-3">
            <p>{this.props.text}</p>
            <p className="text-center text-7xl">{this.state.counter}</p>
            <div className="flex justify-around mt-7">
            <button
             onClick={this.diminuer}
            className="bg-indigo-900 p-3 shadow"
            >
                Diminuer
            </button>
            <button
            onClick={() => this.augmenter()}
            className="bg-indigo-900 p-3 shadow"
            >
                Augmenter
            </button>
          </div>
          </div>
         
        </div>
        <p>Signature</p>
      </>
    );
  }
}
