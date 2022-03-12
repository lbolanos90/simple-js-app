//IIFE
let pokemonRepository = (function() {
//Global items
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
let modalContainer = document.querySelector('#modal-container');

// function add(pokemon) { 
//   //add limitation of only accepting objects.
//   if ( typeof pokemon === 'object' && 'name' in pokemon/*[OLD CODE]!Array.isArray(pokemon) && pokemon !== null */) {
//   pokemonList.push(pokemon);
//   } 
// }  
//Replaces above function
function add(pokemon){
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}

function addListItem(pokemon) {
  //old code
  // let unorderedList = document.querySelector('.pokemon-list');
  // let listItem = document.createElement('li');
  // //button
  // let button = document.createElement('button');
  //replacement code
  let unorderedList = document.querySelector('.list-group');
  let listItem = document.createElement('li');
  //button
  let button = document.createElement('button');
  button.innerText = (pokemon.name);
  button.classList.add('btn-primary'); 
  button.classList.add('btn-lg'); 
  listItem.classList.add('group-list-item')
  listItem.appendChild(button);
  unorderedList.appendChild(listItem); 
  //code Edward sent me but the exampe isn't using it here so I commented it out. 
  // button.setAttribute('data-target', '#show-modal');
  // button.setAttribute('data-toggle', 'modal');
  //Button Event Listener 
  button.addEventListener('click', function(event){
    showDetails(pokemon);
  });
}
//Load list of pokemon from apiUrl
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
//Load data of each pokemon when click on pokemon
function loadDetails (item){
  let url = item.detailsUrl;
  return fetch(url).then(function (response){
    return response.json(); 
  }).then(function (details){
    //adding details to the item
    item.name = details.name; 
    item.imageUrlFront = details.sprites.front_default;
    item.imageUrlBack = details.sprites.back_default;
    item.height = details.height;
    item.types = [];
    for (let i = 0; i < details.types.length; i++){
      item.types.push(details.types[i].type.name);
    }
    item.weight = details.weight;
    // item.abilities = details.abilities;
    // item.abilities = [];
    // for (let i= 0; i < details.abilities.length; i++) {
    //   item.abilities.push(details.abilities[i].ability.name);
    // }
  }).catch(function (e){
    console.error(e); 
  }); 
}
//after clicking on pokemon button, load the data from the server
function showDetails(item){
  loadDetails(item).then(function(){
    showModal(item);
  });
}
//Old code...
// function showDetails(item) {
//   pokemonRepository.loadDetails(item).then(function() {
//   //console.log(item); removed the console.log and used the showModal(item) instead
//   showModal(item);
// }); 
// }

//Show a moda with pokemon details.
function showModal(item) {
  //new BS Modal Functions..this allows me to connect the two.
  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");
  //let modalHeader = $(".modal-header");
  
  //modalHeader.empty(); 
  //Creating element for pokemon name
  let nameElement = $("<h1 class='uppercase'>" + item.name + "</h1>");
  //Picture element
  let imageElementFront = $('<img class="img" style="width:50%">');
  imageElementFront.attr("src", item.imageUrlFront);
  let imageElementBack = $('<img class="img" style="width:50%">');
  imageElementBack.attr("src", item.imageUrlBack);
  let heightElementFront = $("<p>" + "Height: " + item.height + "</p>");
  //This is new information
  let weightElement = $("<p>" + "Weight: " + item.weight + "</p>");
  let typesElement = $("<p>" + "Type(s): " + item.types + "</p>");
  //let abilitiesElement = $("<p>" + "Abilities: " + item.abilities + "</p>");
  

  // let modalContainer = document.querySelector('#modal-container');
  // modalContainer.innerHTML = '';

  //Create's modal
  // let modal = document.createElement('div');
  // modal.classList.add('modal');
  // modalContainer.classList.add('is-visible');
  //button
  // let closeButtonElement = document.createElement('button');
  // closeButtonElement.classList.add('btn btn-primary btn-lg active');
  // closeButtonElement.innerText = 'Close';
  // closeButtonElement.addEventListener('click', hideModal);

  // let titleElement = document.createElement('h1');
  // titleElement.innerText = item.name;

  // let imageElement = document.createElement('img');
  // imageElement.setAttribute("src", item.imageUrl); 

  // let heightElement = document.createElement('p')
  // heightElement.innerText = "Height: " + item.height; 

  //Clears existing modal content
  modalTitle.empty();
  modalBody.empty();

  //new append elements
  modalTitle.append(nameElement); 
  modalBody.append(imageElementFront);
  modalBody.append(imageElementBack);
  modalBody.append(heightElementFront);
  modalBody.append(weightElement);
  modalBody.append(typesElement);
  //modalBody.append(abilitiesElement);

  
  // modal.appendChild(closeButtonElement);
  // modal.appendChild(titleElement);
  // modal.appendChild(imageElement);
  // modal.appendChild(heightElement); 
  // modalContainer.appendChild(modal); 

} 

// document.querySelector('#show-modal').addEventListener('click', () => {
// //   showModal(item);
// });

// function hideModal() {
//   modalContainer.classList.remove('is-visible');
// }

// window.addEventListener('keydown', (e) => {
//   let modalContainer = document.querySelector('#modal-container'); 
//   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//     hideModal();
//   }
//  });

// modalContainer.addEventListener('click', (e) => {
//   let target = e.target;
//   if (target === modalContainer) {
//     hideModal(); 
//   }
// });

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
  
  