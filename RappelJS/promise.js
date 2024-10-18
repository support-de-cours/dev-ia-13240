const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
let pokemons;
// console.log("1");

// const getPokemon = fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data.results);
        
//         // Boucle
//         // Dom 
//         console.log("2");
        
//     });

// console.log("3");

// console.log( getPokemon );




async function httpGet(url)
{
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function displayPokemons()
{
    console.log();
}

(async () => {
    pokemons = await httpGet(url);
    displayPokemons(pokemons);
})();

