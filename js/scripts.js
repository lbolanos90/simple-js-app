//IIFE
let pokemonRepository = (function() {

let pokemonList = [
  //I only added these 3 pokemon but plan on adding more later.
  {
    name: "Ivysaur",
    height: 3,
    type: "Grass and Poison",
  },
  {
    name: "Charmander",
    height: 5,
    type: "Fire",
  },
  {
    name: "Squirtle",
    height: 4,
    type: "Water",
  },
];

function add(pokemon) { 
  //add limitation of only accepting objects.
  if ( typeof pokemon === 'object' && !Array.isArray(pokemon) && pokemon !== null )
  if(Object.keys(pokemon).includes('name') &&
  Object.keys(pokemon).includes('height') &&
  Object.keys(pokemon).includes('type') &&
  Object.keys(pokemon).length === 3) {
  pokemonList.push(pokemon);
  } 
}  

function getAll() {
  return pokemonList;
}

function addListItem(pokemon) {
  
  let unorderedList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = (pokemon.name);
  button.classList.add('pokemonButton'); 
  listItem.appendChild(button);
  unorderedList.appendChild(listItem); 
  //Button Event Listener 
  button.addEventListener('click', function(){
    showDetails(pokemon.name);
  });
}

function showDetails(pokemon) {
  console.log(pokemon);
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
};

})(); 
//end of IIFE


//console actions 
console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Pikachu', height: '3', type:'Eletric'});
console.log(pokemonRepository.getAll());
//added an extra pokemon using this method. 
pokemonRepository.add({name: 'Raichu', height: '4', type:'Electric'});
console.log(pokemonRepository.getAll());


//New forEach code  
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
