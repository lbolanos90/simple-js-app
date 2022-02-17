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

//New forEach code
pokemonList.forEach(function (specs) {
  if (specs.height > 4) {
    document.write(
      "<p>" +
        specs.name +
        " (height: " +
        specs.height +
        " ft) -" +
        "Wow that's big!" +
        "</p>"
    );
  } else document.write("<p>" + specs.name + " (height: " + specs.height + " ft)" + "</p>");
});
