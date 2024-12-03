
const myCat = {
  color: "black",
  name: "Tony",
  lovesCuddles: true,
};

// Create an object called `myHouse`:
// My house has 2 stories, no parking, 2 bedrooms, a garden and an energy efficiency rating of D.

const myHouse = {
stories: 2,
parking: false,
bedrooms: 2,
garden: true,
energyRating: "D",
}


// Create an object called `myCar`:
// My car is red, has 4 wheels, power steering, and 2 seats, and does 20 miles per gallon.

const myCar = {
    color: "red",
    wheels: 4,
    powerSteering: true,
    seats: 2,
    milesPerGallon: 20,
}

// Create an object called `myFavouriteFilm`:
//  My favourite film's title is The Dark Knight, 
// it was released in 2008, 
// and the lead actor is Christian Bale.

const myFavouriteFilm ={
    title: "The Dark Knight",
    releaseDate: 2008,
    leadActor: "Christian Bale",
}

// Task 2

let person = {
    name: "Ben",
    likesChocolate: true,
  };
  console.log(person.likesChocolate);

// write an if statement that will console.log `"Ben loves chocolate"` if likesChocolate has a value of true 
// else console.log `"Ben hates chocolate"`. 
// The condition for the if, and the name Ben should both be read from the object using dot notation.

if (person.likesChocolate == true) {
    console.log(person.name + " loves chocolate")
} else {
    console.log(person.name + " hates chocolate")
}

//   👉 Change the object's values and re-run your code. The name and the boolean should affect how your program runs.


// ## Task 3 - Bracket Notation


let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};
console.log(bensPhrases["smallTalk"]); // Use bracket notation and the `smallTalk property` to console.log Ben's smalltalk phrase.

console.log(desiredPleasantry[]);
// 👉 Use bracket notation and the `desiredPleasantry` variable to console.log Ben's greeting phrase.

// 👉 Change what is console logged by changing the value of `desiredPleasantry`.