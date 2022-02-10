let pokemonList = [
  //I only added these 3 pokemon but plan on adding more later.
  {
    name: "Ivysaur",
    height: 3,
    type: "grass and poison",
  },
  {
    name: "Charmander",
    height: 5,
    type: "fire",
  },
  {
    name: "Squirtle",
    height: 4,
    type: "water",
  },
];

//This prints the pokemon's name and height.
let i = 0; 

//Added {} to beginning and end of this strech of code and it printed another Charizard with the message. 

for (let i = 0; i < pokemonList.length; i++) {
  {
    document.write(
      "<p>" +
        pokemonList[i].name +
        ", (height:)" +
        pokemonList[i].height +
        "</p>"
    );
  }
  // I removed the ; after document.write
  if (pokemonList[i].height > 4) 
  {
    document.write(
      "<p>" +
        pokemonList[i].name +
        ",( height: )" +
        pokemonList[i].height +
        " - Wow, that's big!" +
        "</p>"
    );
  }
  // Left this one blank since I only intend to have a message for the largest pokemon.
  else {
    document.write();
  }
}
