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


for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 4) {
    document.write(
      "<p>" +
        pokemonList[i].name +
        ",( height: )" +
        pokemonList[i].height +
        " - Wow, that's big!" +
        "</p>"
    );
  } else {
    document.write(
      "<p>" +
        pokemonList[i].name +
        ",( height: )" +
        pokemonList[i].height +
        "</p>"
    );
  }
}
