//IIFE
let pokemonRepository = (function() {

let pokemonList = [];
//Added Pokemon API here...
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

function add(pokemon) { 
  //add limitation of only accepting objects.
  if ( typeof pokemon === 'object' && 'name' in pokemon/*[OLD CODE]!Array.isArray(pokemon) && pokemon !== null */)
  /*[OLD CODE]if(Object.keys(pokemon).includes('name')*/ {
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
  button.addEventListener('click', function(event){
    showDetails(pokemon);
  });
}
//will try to work this bonus task out...
function showLoadingMessage (){}

function hideLoadingMessage(){}

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json(); 
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name, 
        detailsUrl: item.url 
      }; 
      add(pokemon); 
      console.log(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails (item){
  let url = item.detailsUrl;
  return fetch(url).then(function (response){
    return response.json(); 
  }).then(function (details){
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    //consider adding a "for loop" here to console.log the actual pokemon type 
    item.types = details.types;
  }).catch(function (e){
    console.error(e); 
  }); 
}

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function() {
  console.log(item);
}); 
}

return {  
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails, 
  showDetails: showDetails
};

})(); 
//end of IIFE

//New console actions down here...
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon); 
  })
});
  
  