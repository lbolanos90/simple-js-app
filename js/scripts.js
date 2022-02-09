let pokemonList = [
    //I only added these 3 pokemon but plan on adding more later. 
    {
        name: 'Ivysaur',
        height: 3,
        type: 'grass and poison'
    },
    {
        name: 'Charmander',
        height: 5,
        type: 'fire'
    },
    {
        name: 'Squirtle',
        height: 4,
        type: 'water'
    }
]
//Below is just one example of how I can have the pokemon's names print.
// for ( let i = 0; i < pokemonList.length; i++) {
//     document.write('<p>' + pokemonList[i].name + (', height:')+ pokemonList[i].height + '</p>'); 
// }

let output = "";
// Here is a shorter example of how to pring pokemon's name and height. 
for (let i = 0; i < pokemonList.length; i++) {
    output = `${pokemonList[i].name} (height: ${pokemonList[i].height})`;
    //Adding comment "Wow, that's big!" for largest pokemon.
    if(pokemonList[i].height > 4) {
        output = `${output} - Wow, that's big!`;
    }
    document.write(`${output}<br>`);
}