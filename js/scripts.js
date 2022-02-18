let pokemonRepository = (function() {

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

function add(pokemon) { 
  //add limitation of only accepting objects.
  if ( typeof pokemon === 'object' && !Array.isArray(pokemon) && pokemon !== null ) {
  //Had to move the actual executed code below the if statement instead of above. 
    pokemonList.push(pokemon);
  }
}

function getAll() {
  return pokemonList;
}
return {
  add: add,
  getAll: getAll
};

})(); 

//console actions
console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Pikachu', height: '3'});
console.log(pokemonRepository.getAll());
//added an extra pokemon using this method. 
pokemonRepository.add({name: 'Rychu', height: '4'});
console.log(pokemonRepository.getAll());


//New forEach code  
(pokemonRepository.getAll()).forEach(function (specs) {
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
