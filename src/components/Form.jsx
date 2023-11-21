import React, { Component } from "react";

export default class Form extends Component {
  /*
    Lorsque je clique sur le bouton "S'inscrire"
    - si le champs nom ou prénom sont vide : Message d'erreur : "Les champs nom et prénom sont obligatoire"
    - Si les champs sont remplis : "Bonjour nom prenom "
    - Un message : "Bienvenue"
    */

  constructor() {
    super();
    this.formRef = React.createRef();
    this.state = {
      message: "void",
      email: "",
      fName: "",
      lName: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.fName !== "" && this.state.lName !== "") {
      this.setState({ message: "success" });
      console.log({
        fName: this.state.fName,
        lName: this.state.lName,
        email: this.state.email,
      });
    } else {
      this.setState({ message: "error" });
    }
  };

  handleSubmitFormData = (e) => {
    e.preventDefault();

    const formData = new FormData(this.formRef.current);
    console.log(formData.get("lName"));
    const fName = formData.get("fName");
    const lName = formData.get("lName").trim().toUpperCase();
    const email = formData.get("email");

    if (fName && lName) {
      this.setState({
        message: "success",
        fName,
        lName
      })
      console.log({
        fName, // fName : fName 
        lName,
        email,
      });
    } else {
      this.setState({ message: "error" });
    }
  };

  renderMessage() {
    const { message, fName, lName } = this.state;
    switch (message) {
      case "success":
        return (
          <p className="bg-emerald-200 p-4 text-black text-center text-xl">
            Bonjour {fName} {lName}
          </p>
        );
      case "error":
        return (
          <p className="bg-red-200 p-4 text-black text-center text-xl">
            Les champs nom et prénom sont obligatoires !
          </p>
        );
      default:
        return (
          <p className="bg-white p-4 text-black text-center text-xl">
            Bienvenue
          </p>
        );
    }
  }

  render() {
    console.log("render form");
    //const {lName, fName, email, message} = this.state
    return (
      <>
        {this.renderMessage()}

        <div className="flex justify-center">
          <form ref={this.formRef} className="bg-black w-2/3 p-6">
            <div className="my-4">
              <label htmlFor="name">Nom</label>
              <input
                //   onChange={(e) => this.setState({lName: e.target.value })}
                //   value={lName}
                className="p-5 w-full bg-gray-900"
                type="text"
                name="lName"
                placeholder="Tapez votre nom ici"
              />
            </div>
            <div className="my-4">
              <label htmlFor="firstname">Prénom</label>
              <input
                //   onChange={(e) => this.setState({fName: e.target.value })}
                //    value={fName}
                className="p-5 w-full bg-gray-900"
                type="text"
                name="fName"
                placeholder="Tapez votre Prénom ici"
              />
            </div>

            <div className="my-4">
              <label htmlFor="email">Email</label>
              <input
                //   onChange={(e) => this.setState({email: e.target.value })}
                //   value={email}
                className="p-5 w-full bg-gray-900"
                type="email"
                name="email"
                placeholder="Tapez votre Email ici"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={this.handleSubmitFormData}
                className="bg-red-700 p-5"
                type="submit"
              >
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
