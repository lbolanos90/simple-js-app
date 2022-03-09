//IIFE
let pokemonRepository = (function() {
//Global items
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
let modalContainer = document.querySelector('#modal-container');

function add(pokemon) { 
  //add limitation of only accepting objects.
  if ( typeof pokemon === 'object' && 'name' in pokemon/*[OLD CODE]!Array.isArray(pokemon) && pokemon !== null */) {
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
    item.name = details.name; 
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    //consider adding a "for loop" here to console.log the actual pokemon type 
    item.types = details.types;
  }).catch(function (e){
    console.error(e); 
  }); 
}
// new stuff all down here...
function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function() {
  //console.log(item); removed the console.log and used the showModal(item) instead
  showModal(item);
}); 
}

function showModal(item) {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.innerHTML = '';

  //Create's modal
  let modal = document.createElement('div');
  modal.classList.add('modal');
  modalContainer.classList.add('is-visible');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let titleElement = document.createElement('h1');
  titleElement.innerText = item.name;

  let imageElement = document.createElement('img');
  imageElement.setAttribute("src", item.imageUrl); 

  let heightElement = document.createElement('p')
  heightElement.innerText = "Height: " + item.height; 

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(imageElement);
  modal.appendChild(heightElement);
  modalContainer.appendChild(modal); 

} 

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal(item);
});

function hideModal() {
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container'); 
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
 });

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal(); 
  }
});

return {  
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails, 
  showDetails: showDetails,
  showModal: showModal
};

})(); 
//end of IIFE

//New console actions down here...
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon); 
  });
});
  
  