const luffy = {
    name: "Luffy",
    age: 18,
    statut : "captain",
    adress : {
        adressLine : "East blue",
        zipCode : "93"
    }
}

// const name = luffy.name
// const age = luffy.age
// const statut = luffy.statut

// Syntaxical sugar = destructuring
const {name : luffyName , existPa, yonkou = true,  age, statut, adress , adress : {adressLine, zipCode} } = luffy


const array =  ["un", "deux", "trois"]
const array2 = ["quatre", "cinq", "six"]
// const nb1 = array[0]
// const nb2 = array[1]
// const nb3 = array[2]

const [nb1, , nb2] = array 


// spread et rest operator 
const arrayCopy = [...array, "quatre"]
const [n1 , ...rest] = array

const newArray = [...array, ...array2]


// rest as param of function 
function sayMyName() {
    console.log("Je m'appelle" + this.name);
    console.log(arguments)
}

const sayMyName2 = (...args) => {
    console.log("Je m'appelle" + this.name);
    console.log(args)
}

const zorro = {
    name: "Zorro",
    sayMyName : function() {
        console.log(this);
        console.log("Je m'appelle " + this.name);
      },
    sayMyName2 : () => {
       console.log(this);
      console.log("Je m'appelle " + this.name);
    },
}


let kingOfPirate = ({fName, lName}) => `The king of pirat will be ${fName} ${lName}` 
let garp = {
    fName: "Garp",
    lName: "Monkey D"
}

kingOfPirate(garp)

function getHokage() {
    return {
         fName : "Naruto",
         lName: "UZUMAKI"
     }
}

const {fName, lName} = getHokage() || {}





