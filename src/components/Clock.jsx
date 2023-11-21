import React, { Component } from 'react'

export default class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date : new Date()
        }
    }

    componentDidMount() {
        this.id = setInterval(() => {
            console.log("tick")
            this.tick()
        }, 1000);
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");

    }

    componentWillUnmount() {
        clearInterval(this.id)
        // sauvegarde auto ?
        // etes vous sur de vouloir fermer ?
        // Nettoyer les memory leak 
        console.log("componentWillUnmount");
    }

    tick() {
        const date = new Date()
        this.setState({
            date // date : date 
        })
    }

   
  render() {
    console.log("render clock")

    return (
     <p>Nous sommes le
          <FormattedDate date={this.state.date} /> et il 
          est <FormattedTime date={this.state.date} /> </p>
    )
  }
}

export class FormattedDate extends Component {
  // 17 janvier 2023  
  render() {
    const options = {weekday : "long", year: "numeric", month: 'long', day: "numeric"}
    return (
      <span>{this.props.date.toLocaleDateString("fr-FR", options)}</span>
    )
  }
}

export class FormattedTime extends Component {
    // hh:mm:ss 
    render() {
      return (
        <span>{this.props.date.toLocaleTimeString("fr-FR")}</span>
      )
    }
  }




