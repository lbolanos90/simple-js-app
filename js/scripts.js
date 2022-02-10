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

let i = 0;
//This prints the pokemon's name and height.
for ( let i = 0; i < pokemonList.length; i++) {
    document.write('<p>' + pokemonList[i].name + (', height:')+ pokemonList[i].height + '</p>'); 
}
/* I tried to add the parenthesis around the "height" text. But it ended up doing this instead: Charmander (height:) 5

This is what I tried to do: 
('<p>' + pokemonList[i].name + (',( height: )')+ pokemonList[i].height + '</p>'); 
 
But it didn't work.  
*/


//I still can't get this to print properly. Supposed to print "Wow that big for Charmander"
    if (pokemonList[i].height > 4) {
        document.write;('<p>' + pokemonList[i].name + (', height:')+ pokemonList[i].height + (' - Wow, that\'s big!') + '</p>')
    }
    
