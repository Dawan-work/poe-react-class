import { Component } from "react";
import Counter from "./components/Counter";
import SubTitle from "./components/SubTitle";
import ListRendering from "./components/ListRendering";
import Form from "./components/Form";
import Clock from "./components/Clock"

export class App extends Component {
  constructor() {
    super();
    // variable "reactives"
    this.state = {
      firstName: "Eikichi",
      lastName: "Onizuka",
      age: 22,
      condition: false,
      isLogged: true,
      users :[
        {
           name: "Eikichi ONIZUKA",
           age: 22,
           profession: "Great Teacher"
        },
       {
           name: "Ryuji DANMA",
           age: 22,
           profession: "Mechanic"
         },
         {
           name: "Azusa FUYUTSUKI",
           age: 23,
           profession: "Teacher"
         },
         {
           name: "Tomoko NOMURA",
           age: 16,
           profession: "High School Student"
         },
         {
           name: "Eikichi ONIZUKA",
           age: 22,
           profession: "Great Teacher"
        },

   ] 
    };
    console.log("constructor called");
  }

  // firstName = "Eikichi"
  // lastName = "Onizuka"
  // age = 22

  changeName() {
    // async
    console.log("setState called");
    this.setState(
      {
        firstName: "Geralt",
      },
      () => {
        console.log(this.state.firstName);
      }
    );
  }

  toogleCondition() {
    this.setState({
      condition: !this.state.condition,
    });
  }

  handleLogin() {
    this.setState({
      isLogged: !this.state.isLogged,
    });
  }

  render() {
    const { firstName, lastName, age, condition, isLogged } = this.state;
    console.log("render called");
    // return un UI (Interface User)
    return (
      <div className="text-white bg-gray-900 min-h-screen font-mono">
        {isLogged ? (
          <div role="alert" className="bg-emerald-300 p-2 text-center text-lg">
            Vous êtes connecté
          </div>
        ) : (
          <div role="alert" className="bg-red-300 p-2 text-center text-lg">
            Vous n'êtes pas connecté !
          </div>
        )}

        <button onClick={() => this.handleLogin()} className="bg-cyan-200 p-2">
          {isLogged ? "Deconnexion" : "Connexion"}
        </button>

        {isLogged && (
          <main className="container mx-auto min-h-screen space-y-3 ">
            <h1 className="text-3xl font-bold font text-cyan-300">
              Apprendre React by Dawan
            </h1>
            <p>Une expression est une unité de code qui produit une valeur</p>
            <ul>
              <li>valeur littérale</li>
              <li>une variable</li>
              <li>une fonction</li>
              <li>une condition</li>
              <li>une comparaison</li>
              <li>un appel de methode</li>
              <li>une opération arithmétique</li>
              <li>un ensemble de ces élément </li>
            </ul>
            <p>Une expression en JSX se met entre accolades {12 + 23}</p>
            <p> {/* CECI EST UN COMMENTAIRE */} </p>
            <p>
              Je m'appelle {firstName} {lastName} et j'ai {age} ans{" "}
            </p>
            <button
              onClick={() => this.changeName()}
              className="bg-cyan-200 p-2"
            >
              Changer de nom
            </button>

            <h2>Rendu conditionel</h2>
            {condition ? (
              <p>Cette condition est vrai</p>
            ) : (
              <p>Cette condition est fausse</p>
            )}

            {condition ? <p>Cette condition est vrai</p> : null}

            {!condition && <p>Cette anectode est vrai </p>}
            <button
              onClick={() => this.toogleCondition()}
              className="bg-cyan-200 p-2"
            >
              Changer de nom
            </button>

            <SubTitle title={"Les composants"} />

            <Counter initCounter={0} text="Compteur 1" />
            <Counter text="Compteur 2" />
            <Counter initCounter={3} text="Compteur 3"/>
            <Counter initCounter={4} text="Compteur 4" />

            <SubTitle title={"List rendering"} />
            <ListRendering listUsers={this.state.users} />

            <SubTitle title={"Les formulaires"} />
            <Form />

            
            <SubTitle title={"Cycle de vie du composant"} />
            <Clock />

            <SubTitle title={"Exercice"} />
            <ul>
            <li> <strong>Etape 1 : </strong>Crée un composant gameList avec comme state 5-6 jeux</li>
            <li> <strong>Etape 2 : </strong>Chaque jeux aura un ID, un nom, une date de sortie (string), une img(string), console, un statue(joué, pas jouer), description</li>
            <li><strong> Etape 3 :</strong> Crée un sous composant GameCard qui sera le composant pour un jeu unique, en fonction du statue : deux couleurs différentes</li>
            <li><strong> Etape 4 :</strong>Faire une méthode truncate pour n'afficher que 150 caractères de la description et ajouté "..."</li>
            <li><strong> Bonus :</strong> lorsque je clique sur un jeu je veux pouvoir inverser son statue et changer la couleur</li>
          </ul>



          </main>
        )}
      </div>
    );
  }
}

